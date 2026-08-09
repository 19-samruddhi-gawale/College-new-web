// SHOW DIFFERENT PAGES

function showPage(pageName) {

    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("courses").style.display = "none";
    document.getElementById("faculty").style.display = "none";
    document.getElementById("placement").style.display = "none";
    document.getElementById("student").style.display = "none";

    // Show selected page
    document.getElementById(pageName).style.display = "block";

    // Go to top
    window.scrollTo(0, 0);
}


// REGISTRATION FORM

document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let department = document.getElementById("department").value;
    let email = document.getElementById("email").value;

    let message = document.getElementById("message");


    // Check empty fields

    if (name == "" || department == "" || email == "") {

        message.innerHTML = "Please fill all fields.";
        message.style.color = "red";

        return;
    }


    // Successful registration

    message.innerHTML =
        "Thank you " + name +
        "! Your registration for " +
        department + " is successful.";

    message.style.color = "green";


    // Clear form

    document.getElementById("registrationForm").reset();

});


// CURRENT YEAR

document.getElementById("year").innerHTML =
    new Date().getFullYear();