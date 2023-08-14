using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Microsoft.Web.WebView2.Core;
using Newtonsoft.Json;

namespace WpfApp1
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {

        List<User> users = UserGenerator.GenerateUserList();
        Process process = new Process();

        public MainWindow()
        {
            StartNode();
            InitializeComponent();
            InitializeAsync();
        }

        private void StartNode()
        {
            var startInfo = new ProcessStartInfo
            {
                FileName = "cmd.exe",
                Arguments = @"/C npm run --prefix ../../../../../cruz-ex-ang start"
            };
            process.StartInfo = startInfo;
            process.Start();
        }

        private void OnApplicationExit(object sender, System.ComponentModel.CancelEventArgs e)
        {
            process.Kill();
            process.Dispose();
        }

        private async void InitializeAsync()
        {
            await webView.EnsureCoreWebView2Async(null);
            webView.CoreWebView2.WebMessageReceived += ReceiveMessage;
        }

        private void ReceiveMessage(object sender, CoreWebView2WebMessageReceivedEventArgs args)
        {
            string wholeMessage = args.TryGetWebMessageAsString();
            string[] splitMessage = wholeMessage.Split(' ', 2);

            switch (splitMessage[0])
            {
                case "getUsers":
                    SendUsers();
                    break;
                case "addUser":
                    AddUser(splitMessage[1]);
                    break;
                case "editUser":
                    EditUser(splitMessage[1]);
                    break;
                case "removeUser":
                    RemoveUser(splitMessage[1]);
                    break;
                default:
                    break;
            }
        }

        private void SendUsers()
        {
            string json = JsonConvert.SerializeObject(users);
            webView.CoreWebView2.PostWebMessageAsString("users " + json);
        }

        private void AddUser(string rawData)
        {
            User user = JsonConvert.DeserializeObject<User>(rawData);
            Trace.WriteLine(user.image);
            users.Add(user);
            SendUsers();
        }

        private void EditUser(string rawData)
        {
            User newUser = JsonConvert.DeserializeObject<User>(rawData);
            int idx = users.FindIndex(user => user.id == newUser.id);
            if (idx != -1)
            {
                users[idx] = newUser;
            }
            SendUsers();
        }

        private void RemoveUser(string rawData)
        {
            int id = Convert.ToInt32(rawData);
            int idx = users.FindIndex(user => user.id == id);
            if (idx != -1)
            {
                users.RemoveAt(idx);
            }
            SendUsers();
        }
    }

}
