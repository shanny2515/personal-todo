
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("myForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const user = {
            userName: document.getElementById("userName").value,
            phone: document.getElementById("phone").value,
            email: document.getElementById("email").value
        };

        localStorage.setItem("currentUser", JSON.stringify(user));
        
         window.location.href = "todo.html";
        
    });
});









   
