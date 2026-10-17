// task 4
// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
var text = "Hello World";
var lastIndex = text.lastIndexOf("l");
document.write("Last index of 'l' is: " + lastIndex+"<br/>");
document.write("<hr/>")


//task 5
//5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 
var name = "Pakistani";
var index = name.charAt(3)
document.write(index)
document.write("<hr/>")


//task 6
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName = firstName.concat(" ", lastName);
// alert("Welcome " + fullName);
 


//task 7
//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 
 
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write(newCity+'<br/>');
document.write("<hr/>")



//task 8
//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace("and", "&");
document.write(newMessage);
document.write("<hr/>")




//task 9 
//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
var str = "472";
var num = Number(str);
document.write("Value: " + str + " Type: " + typeof str + "<br>");
document.write("Value: " + num + " Type: " + typeof num);
document.write("<hr/>")




//task 10
//10. Write a program that takes user input. Convert and show the input in capital letters. 
var input = prompt("Enter any text");
var upper = input.toUpperCase();
document.write(upper);
document.write("<hr/>")




//task 11
// 11 Write a program that takes user input. Convert and show the input in title case. 
var input = prompt("Enter any text");
var words = input.split(" ");
var titleCase = "";
for (var i = 0; i < words.length; i++) {
  titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
document.write(titleCase);
document.write("<hr/>")




//task 12
//12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser.
var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");
document.write(result);