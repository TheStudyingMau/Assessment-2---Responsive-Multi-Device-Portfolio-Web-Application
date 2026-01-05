// ***--------------------------------[ PORTFOLIO JAVASCRIPT ]-----------------------------------***

// [ VARIABLES ]
let themeswitch = false;
currentbtn = "gallerybtn1";
currentpage = "gallery1";

// [ PORTFOLIO GALLERY FUNCTIONS ]

function switchPage(newBtn, newPage){ // Responsible for closing recently opened pages and opening the next pages.
    document.getElementById(currentpage).classList.add("active"); // Adds the active status of previous galleries to hide it.
    document.getElementById(currentbtn).classList.remove("active"); // Removes the active status of other buttons.

    // Updates the buttons and pages.
    currentbtn = newBtn;
    currentpage = newPage;

    document.getElementById(currentbtn).classList.add("active"); // Sets the active button based on its page.
    document.getElementById(currentpage).classList.remove("active"); // Removes the active status to make the gallery visible.
}

// The buttons direct which pages to switch for the function to use.

function artworkspage() {

    // Condition determines the nature of the button depending on the theme activated.
    if (themeswitch) { 
        nextpage = "altgallery1"
    } else {
        nextpage = "gallery1"
    }

    switchPage("gallerybtn1", nextpage);
}

function comicspage() {

    if (themeswitch) {
        nextpage = "altgallery2"
    } else {
        nextpage = "gallery2"
    }

    switchPage("gallerybtn2", nextpage);
}

function animationpage() {

    if (themeswitch) {
        nextpage = "altgallery3"
    } else {
        nextpage = "gallery3"
    }

    switchPage("gallerybtn3", nextpage);
}

/////////////////////////////////////////////

// [[ CHANGE THEME ]]

function switchTheme(){
    document.getElementById('stickybutton').onclick = restoreTheme; // Assigns a different function to the sticky to be able to restore themes.
    themeswitch = true;
    
    // Theme is changed.
    document.getElementById('gallerybtn1').textContent = "Game Dev";
    document.getElementById('gallerybtn2').textContent = "Websites";
    document.getElementById('gallerybtn3').textContent = "Creative Projects";
    document.documentElement.style.setProperty('--btn_image', 'url("Images/switchbutton2.png")');
    document.documentElement.style.setProperty('--btn_hover_image', 'url("Images/glowbutton2.png")');
    document.documentElement.style.setProperty('--maincolor', '#3A79CC');
    document.documentElement.style.setProperty('--accentcolor', '#2B2B2B');
    document.documentElement.style.setProperty('--hovercolor', 'black');
    document.getElementById('commissioninfo').style.color = 'white';

    // Changes the background image.
    document.documentElement.style.setProperty('--altbackground', 'url("Images/darkened-background3.png")');
    background = document.getElementById('backgroundimg');
    background.src = "Images/background3.PNG"
    
    
    switchPage('gallerybtn1', 'altgallery1');
}

function restoreTheme(){
    document.getElementById('stickybutton').onclick = switchTheme; // Assigns a different function to the sticky to be able to switch themes.
    themeswitch = false;

    // Original Theme is Restored
    document.getElementById('gallerybtn1').textContent = "Artworks";
    document.getElementById('gallerybtn2').textContent = "Comics";
    document.getElementById('gallerybtn3').textContent = "Animations";
    document.documentElement.style.setProperty('--btn_image', 'url("Images/switchbutton.png")');
    document.documentElement.style.setProperty('--btn_hover_image', 'url("Images/glowbutton.png")');
    document.documentElement.style.setProperty('--maincolor', '#DB0F0F');
    document.documentElement.style.setProperty('--accentcolor', '#647271');
    document.documentElement.style.setProperty('--hovercolor', 'white');
    document.getElementById('commissioninfo').style.color = 'black';

    // Restores the background image.
    background = document.getElementById('backgroundimg');
    background.src = "Images/background.jpg"
    document.documentElement.style.setProperty('--altbackground', 'url("Images/darkened-background.png")');
    
    
    switchPage('gallerybtn1', 'gallery1');
}

/////////////////////////////////////////////

// Hides other galleries to make room for gallery1 to automatically display.
document.getElementById('gallery2').classList.add("active");
document.getElementById('gallery3').classList.add("active");
document.getElementById('altgallery1').classList.add("active");
document.getElementById('altgallery2').classList.add("active");
document.getElementById('altgallery3').classList.add("active");

switchPage(currentbtn, currentpage)





