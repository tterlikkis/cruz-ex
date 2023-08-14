# Cruz Exercise #
## Sean Tterlikkis ##

## Overview ##
This is an Angular application designed to run only in the context of a WPF window. This was acheived using the WebView2 NuGet package, allowing for communication between the C# and JavaScript.  
The Angular app contains two views for displaying information on a collection of Users, a list view, sorting them by annual salary, and a grouped view, sorting them into age groups and displaying the average salary for each group.  
The WPF is a shell to run the webpage within, much like a browser. However it also performs backend operations and acts a single source of truth for the list of users.

## Dependencies ##
Visual Studio 2022  
Node version 18.16.0  

Be sure to run `npm install` inside `cruz-ex-ang` directory.  
When booting up, please allow a few seconds for the page to display, as the node server needs to start.