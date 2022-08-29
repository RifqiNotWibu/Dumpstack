const judul = document.getElementById("judul"); //Return --> Element
//Styling modify test
judul.style.color = "blue";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "JS DOM TEST";

const p = document.getElementsByTagName("p")[0]; //Return --> Array
//Styling modify test
for (i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "yellow"; //Bulk recoloring
}

const p1 = document.getElementsByClassName("p1"); //Return --> Element
//Styling modify test
p1.innerHTML = "Paragraf ini telah diubah";

const p4 = document.querySelector("#b p"); //Selecting p class in section with id = b
//Styling modify test
p4.style.backgroundColor = "green";

//const li2 = document.querySelector("section#b ul li:nth-child(2)");
//Styling modify test
//li2.innerHTML = "Paragraf ini telah diubah melalui querySelector yang spesifik";

const qsp = document.querySelectorAll("p"); //Return --> Nodelist(array)
//Styling modify test
qsp[1].style.backgroundColor = "lightblue";

p.setAttribute("name", "Rifqi"); //Sets "p" - "name" attribute to "Rifqi"
p.getAttribute("name"); //Sees the attribute mentioned (ENTER @ CONSOLE)
p.removeAttribute("name"); //Removes the attribute mentioned (ENTER @ CONSOLE)

//Creating new element
const newP = document.createElement("p");
const textP = document.createTextNode(
  "Ini adalah paragraf yang baru ditambahkan"
);

newP.appendChild(textP); //Appending created text into the paragraph

//Putting newP into a specified section in the document
const sectionA = document.getElementById("a");
sectionA.appendChild(newP);

//Creating new element for a speific tag order
const newLi = document.createElement("li");
const textLi = document.createTextNode("Item ini baru ditambahkan");

newLi.appendChild(textLi);

//Putting new element below section b's li first child
//--> Finding the exact location
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
//--> Inserting the new element into li2
ul.insertBefore(newLi, li2);
//Theres still alot of methods able to perform such as replacing, removing, etcetera.
