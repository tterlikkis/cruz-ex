using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp1
{
    internal class User
    {
        public User() {}
        public User(int _id, string _firstName, string _lastName, int _age,
            int _birthYear, int _birthMonth, int _birthDay, double _salary, 
            string _address, string _city, string _state, int _zip, string _image = "")
        {
            id = _id;
            firstName = _firstName;
            lastName = _lastName;
            age = _age;
            birthYear = _birthYear;
            birthMonth = _birthMonth;
            birthDay = _birthDay;
            salary = _salary;
            address = _address;
            city = _city;
            state = _state;
            zip = _zip;
            image = _image;
        }

        public int id { get; set; }
        public string firstName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public int age { get; set; }
        public int birthYear { get; set; }
        public int birthMonth { get; set; }
        public int birthDay { get; set; }
        public double salary { get; set; }
        public string address { get; set; } = string.Empty;
        public string city { get; set; } = string.Empty;
        public string state { get; set; } = string.Empty;
        public int zip { get; set; }
        public string image { get; set; } = string.Empty;
    }
}
