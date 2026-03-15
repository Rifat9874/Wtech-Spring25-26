function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var query = document.getElementById("query").value;
    
    if (firstName == "" || lastName == "" || email == "" || phoneNumber == "" || query == "") {
        document.getElementById("validationMessage").style.display = "block";
        return false;
    } else {
        document.getElementById("validationMessage").style.display = "none";
        
        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("Email: " + email);
        console.log("Phone Number: " + phoneNumber);
        console.log("Query: " + query);
        return true;
    }
}