using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WpfApp1
{
    internal class UserGenerator
    {
        private static int RandomNumber(int digits)
        {
            int min = Convert.ToInt32(Math.Pow(10, digits - 1));
            int max = Convert.ToInt32(Math.Pow(10, digits));
            Random rnd = new Random();
            return rnd.Next(min, max);
        }

        public static List<User> GenerateUserList()
        {
            return new List<User>()
            {
                new User(RandomNumber(6), "John", "Doe", 33, 1990, 5, 15, (RandomNumber(2) * 1000), "123 Main St", "Anytown", "California", 12345),
                new User(RandomNumber(6), "Jane", "Smith", 38, 1985, 10, 8, (RandomNumber(2) * 1000), "456 Elm Ave", "Somewhere", "New York", 67890),
                new User(RandomNumber(6), "Michael", "Johnson", 31, 1992, 2, 25, (RandomNumber(2) * 1000), "789 Oak Rd", "Smallville", "Texas", 54321),
                new User(RandomNumber(6), "Emily", "Williams", 35, 1988, 9, 12, (RandomNumber(2) * 1000), "101 Pine Lane", "Cityville", "Illinois", 98765),
                new User(RandomNumber(6), "David", "Brown", 28, 1995, 7, 3, (RandomNumber(2) * 1000), "222 Maple Street", "Metro City", "California", 13579),
                new User(RandomNumber(6), "Sarah", "Jones", 40, 1983, 4, 18, (RandomNumber(2) * 1000), "333 Birch Blvd", "Riverdale", "Georgia", 24680),
                new User(RandomNumber(6), "Daniel", "Davis", 32, 1991, 11, 28, (RandomNumber(2) * 1000), "444 Cedar Court", "Hometown", "Ohio", 86420),
                new User(RandomNumber(6), "Jessica", "Miller", 36, 1987, 6, 9, (RandomNumber(2) * 1000), "555 Willow Avenue", "Sometown", "Florida", 97531),
                new User(RandomNumber(6), "Christopher", "Wilson", 30, 1993, 1, 22, (RandomNumber(2) * 1000), "666 Oak Lane", "Villageville", "Washington", 73210),
                new User(RandomNumber(6), "Amanda", "Moore", 34, 1989, 8, 5, (RandomNumber(2) * 1000), "777 Elm Street", "Hamlet", "North Carolina", 58109),
                new User(RandomNumber(6), "Matthew", "Taylor", 29, 1994, 3, 31, (RandomNumber(2) * 1000), "888 Pine Avenue", "Suburbia", "Michigan", 42601),
                new User(RandomNumber(6), "Ashley", "Anderson", 37, 1986, 12, 14, (RandomNumber(2) * 1000), "999 Birch Lane", "Countryside", "Wisconsin", 63820),
                new User(RandomNumber(6), "Andrew", "Martinez", 26, 1997, 10, 2, (RandomNumber(2) * 1000), "111 Maple Road", "Townville", "Arizona", 24057),
                new User(RandomNumber(6), "Lauren", "Hernandez", 39, 1984, 5, 20, (RandomNumber(2) * 1000), "222 Cedar Street", "Metropolis", "California", 85246),
                new User(RandomNumber(6), "Ryan", "Garcia", 27, 1996, 9, 9, (RandomNumber(2) * 1000), "333 Elm Lane", "Midtown", "Texas", 13795),
                new User(RandomNumber(6), "Olivia", "Lopez", 41, 1982, 2, 7, (RandomNumber(2) * 1000), "444 Oak Road", "Downtown", "New York", 57901),
                new User(RandomNumber(6), "William", "Rodriguez", 25, 1998, 4, 29, (RandomNumber(2) * 1000), "555 Pine Lane", "Uptown", "Illinois", 70213),
                new User(RandomNumber(6), "Sophia", "Ramirez", 42, 1981, 8, 16, (RandomNumber(2) * 1000), "666 Elm Avenue", "Outskirts", "Florida", 39017),
                new User(RandomNumber(6), "James", "Perez", 24, 1999, 7, 1, (RandomNumber(2) * 1000), "777 Birch Court", "Countryside", "California", 16842),
                new User(RandomNumber(6), "Isabella", "Gonzalez", 43, 1980, 11, 11, (RandomNumber(2) * 1000), "888 Maple Street", "Hometown", "Texas", 45876)

            };
        }
    }
}
