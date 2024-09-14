 let table = document.querySelector("#sampleTable");

function insert_Row() {
    //Write your code here
	let tr = document.createElement("tr");
	table.prepend(tr);
	let cell1 = tr.insertCell();
	cell1.innerText = "New Cell1"
	let cell2 = tr.insertCell();
	cell2.innerText = "New Cell2"
	
  
}
