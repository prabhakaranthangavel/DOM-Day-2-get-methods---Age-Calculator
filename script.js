// ! Age Calculator

function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();
  if (isNaN(dob.getTime())) {
    var error = document.getElementById("output").innerHTML = "Please Enter a Valid Date";
    return error;
  }
  let age = today.getFullYear() - dob.getFullYear();
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  document.getElementById("output").innerHTML = "You are" + age + "Years Old.";
}
