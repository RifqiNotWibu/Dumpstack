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
