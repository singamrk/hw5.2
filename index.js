function validateForm() {
  let x = document.forms["filter"]["Subject"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
