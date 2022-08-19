const judul = document.getElementById("judul"); //Return --> Element
//Styling modify test
judul.style.color = "blue";
judul.style.backgroundColor = "yellow";
judul.innerHTML = "JS DOM TEST";

const p = document.getElementsByTagName("p"); //Return --> Array
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

const li2 = document.querySelector("section#b ul li:nth-child(2)");
//Styling modify test
li2.innerHTML = "Paragraf ini telah diubah melalui querySelector yang spesifik";
