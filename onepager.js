function toggleMenu() {
    var nav = document.getElementById("main-nav");
    var navList = document.getElementById("nav-list");
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        navList.classList.remove("open");
    } else {
        nav.classList.add("open");
        navList.classList.add("open");
    }
}

// Optional: Schließen des Menüs beim Klicken auf einen Menüpunkt
document.querySelectorAll("#nav-list li a").forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
        document.getElementById("main-nav").classList.remove("open");
    });
});

// Optional: Schließen des Menüs, wenn die Fenstergröße geändert wird und größer als 768px ist
window.addEventListener("resize", function() {
    if (window.innerWidth > 768) {
        document.getElementById("main-nav").classList.remove("open");
    }
});