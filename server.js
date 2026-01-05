// ***--------------------------------[ SERVER JAVASCRIPT ]-----------------------------------***

// [ EXPRESS SETUP ]
const express = require('express');
const app = express();
const port = 1106;

// [ MONGODB SETUP ]
const { MongoClient } = require('mongodb'); 
const connectionString = "mongodb://localhost:27017";
const client = new MongoClient(connectionString);

// Serves the static files (HTML, CSS, Javascript, and etc.)within 'public' directory.
app.use(express.static('public')); 

// [ EXPRESS GETTING DATA ]

// Gets the Images needed or the website.
app.get ('/Images', async (req, res) => {
	try { // Tries to connect to MongoDB.
		await client.connect();
	
		const Database = client.db('Images');
		const imageCollection = Database.collection('Images'); // Gets the Images Collection from my MongoDB
		
		// Finds the collection and stores it in an array.
		const imageEntries = await imageCollection.find().toArray();

		// Returns the collections to the front-end as JSON for use.
		res.json(imageEntries); 

	} catch (error) { // Any exception will be displayed in console.
		console.error("Error fetching images:", error);
		res.status(500).json({ error: "Failed to fetch data." })
	}
	
});

// Gets the comics needed for the website.
app.get ('/Comics', async (req, res) => {
	try { // Tries to connect to MongoDB.
		await client.connect();
	
		const Database = client.db('Images');
		const comicCollection = Database.collection('Comics'); // Gets the Comics Collection from my MongoDB
		
		// Finds the collection and stores it in an array.
		const comicEntries = await comicCollection.find().toArray();

		// Returns the collections to the front-end as JSON for use.
		res.json(comicEntries); 

	} catch (error) { // Any exception will be displayed in console.
		console.error("Error fetching comics:", error);
		res.status(500).json({ error: "Failed to fetch data." })
	}
	
});

// Gets the animation embeds needed for the website.
app.get ('/Animations', async (req, res) => {
	try { // Tries to connect to MongoDB.
		await client.connect();
	
		const Database = client.db('Images');
		const animationCollection = Database.collection('Animations'); // Gets the Comics Collection from my MongoDB
		
		// Finds the collection and stores it in an array.
		const animationEntries = await animationCollection.find().toArray();

		// Returns the collections to the front-end as JSON for use.
		res.json(animationEntries); 

	} catch (error) { // Any exception will be displayed in console.
		console.error("Error fetching animations:", error);
		res.status(500).json({ error: "Failed to fetch data." })
	}
	
});

// Gets the game developemnt asset data needed for the website.
app.get ('/Games', async (req, res) => {
	try { // Tries to connect to MongoDB.
		await client.connect();
	
		const Database = client.db('Images');
		const gameCollection = Database.collection('Games'); // Gets the Games Collection from my MongoDB
		
		// Finds the collection and stores it in an array.
		const gameEntries = await gameCollection.find().toArray();

		// Returns the collections to the front-end as JSON for use.
		res.json(gameEntries); 

	} catch (error) { // Any exception will be displayed in console.
		console.error("Error fetching games:", error);
		res.status(500).json({ error: "Failed to fetch data." })
	}
});

// Gets the coding projects data needed for the website.
app.get ('/Projects', async (req, res) => {
	try { // Tries to connect to MongoDB.
		await client.connect();
	
		const Database = client.db('Images');
		const projectCollection = Database.collection('Projects'); // Gets the Projects Collection from my MongoDB
		
		// Finds the collection and stores it in an array.
		const projectEntries = await projectCollection.find().toArray();

		// Returns the collections to the front-end as JSON for use.
		res.json(projectEntries); 

	} catch (error) { // Any exception will be displayed in console.
		console.error("Error fetching projects:", error);
		res.status(500).json({ error: "Failed to fetch data." })
	}
});

// [ EXPRESS POSTING DATA ]

app.use(express.json()); 
// Express parses the incoming JSON requesting bodies so that data in my website will be available in req.body.

app.post ('/Inquiries', async (req, res) => {
	try {
		await client.connect(); // Connects to MongoDB.

		// Gets the collection directory through database.
		const db = client.db("Images");
		const inquiries = db.collection("Inquiries");

		// Inserts the inquiry to the Mongo Database.
		const result = await inquiries.insertOne(req.body);

		// Returns a response to the website that the delivery was successful.
		res.json({ success: true });

	} catch (error) { // If there were any errors, I'd be informed.
		console.error("Error fetching inquiries:", error);
		res.status(500).json({ error: "Failed to fetch images." })
	}
})

// This checks if the app is functioning.
app.listen(port, () => { 
	console.log(`Server running at http://localhost:${port}`);}
) 