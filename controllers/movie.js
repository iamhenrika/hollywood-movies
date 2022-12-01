// Import Dependencies
const express = require("express")
const Movie = require("../models/movie")

// Create Route
const router = express.Router()

// Export the Router
module.exports = router


// Home
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});

app.get("/movies/seed", (req, res) => {
    // array of starter movies
    const startMovies = [
        {
            title: "Matrix",
            releaseDate: "March 24, 1999",
            length: 136,
            genre: "Sci-Fi",
            poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            director: "The Wachowskis",
            cast: ["Keanu Reeves", "Carrie Ann Moss", "Laurence Fishburne"],
            rating: "R",
            watchAgain: true,
        },
        {
            title: "50 First Dates",
            releaseDate: "February 12, 2004",
            length: 99,
            genre: "Rom-Com",
            poster: "https://m.media-amazon.com/images/M/MV5BMjAwMzc4MDgxNF5BMl5BanBnXkFtZTYwNjUwMzE3._V1_FMjpg_UX1000_.jpg",
            director: "Peter Segal",
            cast: ["Adam Sandler", "Drew Barrymore", "Rob Schneider"],
            rating: "PG-13",
            watchAgain: true,
        },
        {
            title: "The Dark Knight",
            releaseDate: "July 14, 2008",
            length: 152,
            genre: "Action/Adventure",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
            director: "Christopher Nolan",
            cast: ["Christian Bale", "Michael Caine", "Heath Ledger"],
            rating: "PG-13",
            watchAgain: false,
        },
    ];

    // Delete All Movies
    Movie.deleteMany({}).then((data) => {
        // Seed Starter Movies
        Movie.create(startMovies).then((data) => {
            // Send created fruits as response to confirm creation
            res.json(data);
        });
    });
});

// I.N.D.U.C.E.S

// Index Route
app.get("/movies", async (req, res) => {
    const movies = await Movie.find({});
    res.render("movies/Index", { movies });
});

// New Route
app.get("/movies/new", (req, res) => {
    res.render("movies/New")
})

// Delete (Destroy)
app.delete("/movies/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // delete the fruit
    Movie.findByIdAndRemove(id)
        .then((movie) => {
            // redirect to main page after deleting
            res.redirect("/movies");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// Update
app.put("/movies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
        req.body.cast = req.body.cast.split(",")
        await Movie.findByIdAndUpdate(id, req.body)
        res.redirect(`/movies/${id}`)
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
})

// Create (Post)
app.post("/movies", async (req, res) => {
    try {
        req.body.watchAgain = req.body.watchAgain === "on" ? true : false;
        req.body.cast = req.body.cast.split(",")
        console.log(req.body)
        const createdMovie = await Movie.create(req.body)
        res.redirect("/movies")
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
})

// Edit
app.get("/movies/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id;
    // get the fruit from the database
    Movie.findById(id)
        .then((movie) => {
            // render Edit page and send fruit data
            res.render("movies/Edit.jsx", { movie });
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

// Show Route
app.get("/movies/:id", async (req, res) => {
    const id = req.params.id

    try {
        const movie = await Movie.findById(id)
        res.render("movies/Show", { movie })
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
})
