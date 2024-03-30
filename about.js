function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    nav.navbar.toggle("sticky", this.window.scrollY > 0)
})