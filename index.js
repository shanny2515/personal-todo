document.getElementById("theForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("userName").value;
    const phone = document.getElementById("phone").value; 
    const email = document.getElementById("email").value;


   if (username === "" || email === "") {
        alert("kindly fill in this field");
        return;
    }
    if (phone.length !== 10) {
        alert("Phone number must be 10 digits");
        return;
    }
    
        const user = {
            username: username,
            phone: phone,
            email: email,
        };

        localStorage.setItem("currentUser", JSON.stringify(user));
        
        window.location.href = "to-do.html";
} )





   
