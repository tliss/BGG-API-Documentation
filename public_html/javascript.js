/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("openBar").onclick = function(){closeNav();};
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openBar").style.color = "#8c8c8c";
    document.getElementById("openBar").style.borderColor = "#8c8c8c";
    document.getElementById("openBar").style.backgroundColor = "#cccccc";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("openBar").onclick = function(){openNav();};
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openBar").style.color = "#071e57";
    document.getElementById("openBar").style.borderColor = "#071e57";
    document.getElementById("openBar").style.backgroundColor = "#ffba63";
}