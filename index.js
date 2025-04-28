document.getElementById("theForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("userName").value.trim(); 
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value .trim();

   if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields");
    }
    else {
        const user = {
            username: username,
            email: email,
            password: password
        };
        console.log(user);
        alert("Form submitted successfully!");}

        window.location.href = "to-do.html";
} )

   
