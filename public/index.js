// ***--------------------------------[ INDEX JAVASCRIPT ]-----------------------------------***

// [ CONSTRUCTING GALLERY WITH DATA FROM MONGODB ]

async function createGallery1() {
	const response = await fetch('/Images'); // Finds the "Images" collection.
	const imageList = await response.json(); // Waits and stores the json file to an accessible variable.
	
    const gallery1 = document.getElementById('gallery1'); // Gets access to the container for the first portfolio gallery.

    imageList.forEach(image => {
        const img = document.createElement("img"); // Creates an image tag and makes it accessible via variable.
        img.src = image.url; // Modifies its source according to the image's url from database.
        img.onclick = () => viewimage(image); // Sotres the image data into the onclick function.
        gallery1.appendChild(img); // Appends the ready and modified img tag into the HTML.
    })
}

async function createGallery2() {
    const response = await fetch('/Comics'); // Finds the "Comics" collection.
    const comicList = await response.json(); // Waits and stores the json file to an accessible variable.

    const gallery2 = document.getElementById('frame'); // Gets access t the container for the second portfolio gallery.

    comicList.forEach(comic => {
        const a = document.createElement("a"); // Creates an anchor link to wrap the comic for access.
        const image = document.createElement("img"); // Creates an image tag needed to display the comic.
        const title = document.createElement("h1"); // Creates a label for the comic 

        a.href = comic.source; // Attaches the link to the comic to the anchor link.
        a.id = "card"; // Assigns ID for the anchor link for CSS recognition.
        image.src = comic.url; // Attaches the directory to display the image.
        title.textContent = comic.name; // Attaches the comic name to the prepared h1.

        // Appends two elements into the anchor link to wrap the content.
        a.appendChild(image);
        a.appendChild(title);
        gallery2.appendChild(a); // Then appends the anchor link to the gallery 2 container.
    })
}

async function createGallery3() {
    const response = await fetch('/Animations');
    const animationList = await response.json();

    const gallery3 = document.getElementById('gallery3');

    animationList.forEach(animation => {
        const iframe = document.createElement("iframe");

        // Sets the needed attributes to the iframe.
        iframe.width = animation.width;
        iframe.height = animation.height;
        iframe.src = animation.url;
        iframe.title = animation.title;
        iframe.style.border = animation.frameborder;
        iframe.allow = animation.allow;
        iframe.referrerPolicy = animation.referrerPolicy;
        iframe.allowFullscreen = true;

        gallery3.append(iframe); // Appends it to the needed gallery.
    })
}

async function createAltGallery1() {
    const response = await fetch('/Games');
    const gameList = await response.json();
    
    const altgallery1 = document.getElementById('altgallery1');
   

    gameList.forEach(game => {
        // Frames
        const card = document.createElement('figure');
        const details = document.createElement('section');
        const textbox = document.createElement('div');
        
        // Elements
        const image = document.createElement('img');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const button = document.createElement('a');

        // Assigning the Details
        card.id = "card2";
        details.id = "textbox3";
        image.src = game.url;
        title.textContent = game.name;
        description.textContent = game.description;
        button.textContent = "View";
        button.href = game.source;
        
        // Appending the elements in the HTML.
        card.append(image);
        card.append(details);
        textbox.append(title);
        textbox.append(description);
        details.append(textbox);
        details.append(button);
        altgallery1.append(card);
    })
}

async function createAltGallery3() {
    const response = await fetch('/Projects');
    const projectList = await response.json();

    const altgallery3 = document.getElementById('altgallery3');

    projectList.forEach(project => {
        // Frames
        const card = document.createElement('figure');
        const details = document.createElement('section');
        const textbox = document.createElement('div');
        
        // Elements
        const image = document.createElement('img');
        const title = document.createElement('h1');
        const description = document.createElement('p');
        const button = document.createElement('a');

        // Assigning the Details
        card.id = "card2";
        details.id = "textbox3";
        image.src = project.url;
        title.textContent = project.name;
        description.textContent = project.description;
        button.textContent = "View";
        button.href = project.source;
        
        // Appending the elements in the HTML.
        card.append(image);
        card.append(details);
        textbox.append(title);
        textbox.append(description);
        details.append(textbox);
        details.append(button);
        altgallery3.append(card);
    })
}

// Automatically loads the needed galleries.
createGallery1() 
createGallery2() 
createGallery3() 
createAltGallery1();
createAltGallery3();

// [ VIEWING IMAGES ]

function viewimage(data) {
    document.getElementById("viewimage").classList.add("active");
    document.getElementById("gallery1").classList.add("active");
    document.getElementById("header2").classList.add("active");
    document.getElementById("buttons2").classList.add("active");

    const imageview = document.getElementById("contentimg");
    const h1 = document.getElementById("contenttitle");
    const a = document.getElementById("viewpost");

    imageview.src = data.url;
    h1.textContent = data.name;
    a.href = data.source;
}

function closeimage() {
    document.getElementById("viewimage").classList.remove("active");
    document.getElementById("gallery1").classList.remove("active");
    document.getElementById("header2").classList.remove("active");
    document.getElementById("buttons2").classList.remove("active");
}

// [ COMMISSION INQUIRY  ]

// [POPUPS]
function openpopup() { 
    document.getElementById("popup").classList.add("active");
    document.getElementById("exitbutton").classList.add("active");
}

function closepopup() { 
    document.getElementById("popup").classList.remove("active");
    document.getElementById("exitbutton").classList.remove("active");
}

// [ FORM INQUIRIY HANDLING ]

async function sendInquiry() {

    // The Inquiry Structure
    const inquiry = { 
        name: document.getElementById("emailaddress").value, 
        commissiontype: document.getElementById("dropdown").value, 
        message: document.getElementById("description").value, 
        date: new Date() 
    }; 
    
    // Tries to post the inquiry to the database.
    try { const response = await fetch("/Inquiries", {
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(inquiry) 
        }); 
        
        const result = await response.json(); 
        
        if (result.success) { 
            alert("Inquiry sent successfully. Thank you for commissioning!"); // Shows a small popup to inform the user of the inquiry's success.
        } else { 
            console.error("Inquiry failed"); 
        }
    }  

    // If there's any errors, it will display.
    catch (err) { 
        console.error("Error sending inquiry:", err); 
    }
}

document.getElementById("forum").addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevents the page to refresh when the button is clicked.
    sendInquiry();
});
