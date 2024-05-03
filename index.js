function changeTheme() {
    var body = document.body;
    var navbar = document.getElementById("navbar");
    
    body.classList.toggle("dark-theme");
    navbar.classList.toggle("dark-theme");
    toggleBtn.classList.toggle("dark-theme");
}