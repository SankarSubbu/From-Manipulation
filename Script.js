function clearForm() {
 document.getElementById("myForm").reset();
}

document.getElementById("myForm").addEventListener("submit", function(event) {
 event.preventDefault();

 const formData = new FormData(this);
 const foodArray = Array.from(formData.getAll('food'));
 const values = [];
 for (const value of formData.values()) {
   values.push(value);
 }

 const table = document.getElementById("dataTableBody");
 const newRow = table.insertRow(-1);
 for (let i = 0; i < values.length; i++) {
   const cell = newRow.insertCell(i);
   cell.innerText = values[i];
 }

 const foodCell = newRow.insertCell(values.length);
 foodCell.innerText = foodArray.join(", ");

 clearForm();
});
