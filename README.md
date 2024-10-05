Product Bar Graph Application 

This project allows users to input product names, prices, and ratings, and visualizes the data in bar graph format using HTML, CSS, and JavaScript. The application includes functionalities to add, sort, and dynamically update the displayed data in real-time. 

Project Overview 

DOM Manipulation: This project dynamically adds and modifies elements on the web page based on user input. 

Bar Graph Visualization: The price and rating values are visually represented in a bar graph format. 

Real-Time Updates: Every time a new product is added, the graphs are updated immediately without refreshing the page. 

Sorting Functionality: Users can sort the products by price or rating by clicking on the provided buttons. 

Features 

Add a product by specifying its name, price, and rating. 

Display the price and rating values as bar graphs. 

Sort the products either by price or by rating. 

Dynamically update the graphs when new data is added. 

How to Use 

Input Fields 

Enter the Product Name in the first input field. 

Enter the Price in the second input field (must be a positive number). 

Enter the Rating in the third input field (between 1 to 5). 

Click the Add Product button to add the product to the list. 

Graph Display 

After you add a product, its Price and Rating will appear as two separate bar graphs in their respective sections:  

Price Graph: The length of the bar represents the price of the product. 

Rating Graph: The length of the bar represents the rating (1-5 scale) of the product. 

Sorting Functionality 

Sort by Price: Click the "Sort by Price" button to arrange the products in ascending order based on their price. The price graph will update accordingly. 

Sort by Rating: Click the "Sort by Rating" button to arrange the products in ascending order based on their rating. The rating graph will update accordingly. 

Real-Time Updates 

As soon as a new product is added, the graphs will automatically refresh to display the latest product, along with existing products. 

You can add as many products as you want, and the system will continually update the graphs without needing to reload the page. 

How the Code Works 

DOM Manipulation: The input data is retrieved using JavaScript's DOM methods and then dynamically injected into the HTML structure. 

Bar Graphs: The price and rating values are visually represented as horizontal bars, where the width corresponds to the values entered. 

Sorting: The sorting functionality is achieved using JavaScript's sort() method on the product list, which is then re-rendered in the graph. 

Technologies Used 

HTML: For structure and layout. 

CSS: For styling the bar graphs and user interface. 

JavaScript: For DOM manipulation, dynamic updates, and sorting logic. 


 
