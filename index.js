document.getElementById("theForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("userName").value.trim();
    const phone = document.getElementById("phone").value .trim(); 
    const email = document.getElementById("email").value.trim();


   if (username === "" || email === "") {
        alert("kindly fill in this field");
    }
    if (phone.length < 10 || phone.length > 10) {
        alert("Phone number must be 10 digits");
    }
    
        const user = {
            username: username,
            phone: phone,
            email: email,
        };

        localStorage.setItem("user", JSON.stringify(user));
        
        window.location.href = "to-do.html";
} )

   
