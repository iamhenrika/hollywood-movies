// Import Dependencies
const mongoose = require("./connection");
const Movie = require("./movie");

// Seed Code
// save the connection in a variable
const db = mongoose.connection;

// Make sure code is not run till connected
db.on("open", () => {
    // Write your Seed Code Below
    const startMovies = [
        {
            title: "Anchorman: The Legend of Ron Burgundy",
            releaseDate: "June 28, 2004",
            length: 94,
            genre: "Comedy",
            poster: "https://upload.wikimedia.org/wikipedia/en/6/64/Movie_poster_Anchorman_The_Legend_of_Ron_Burgundy.jpg",
            director: "Adam McKay",
            rating: "PG-13",
            watchAgain: true,
            cast: ["Will Ferrell", "Christina Applegate", "Paul Rudd"]
        },
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
            title: "Pan's Labyrinth",
            releaseDate: "27 May 2006",
            length: 120,
            genre: "Fantasy",
            poster: "https://m.media-amazon.com/images/I/A1I-hgVNkNL._AC_SY879_.jpg",
            director: "Guillermo del Toro",
            cast: ["Sergi López", "Maribel Verdú", "Ivana Baquero"],
            rating: "R",
            watchAgain: true,
        },
        {
            title: "Inglourious Basterds",
            releaseDate: "May 20, 2009",
            length: 153,
            genre: "War/Action",
            poster: "https://www.filmstories.co.uk/wp-content/uploads/2019/11/ing-quad.jpg",
            director: "Quentin Tarantino",
            cast: ["Christoph Waltz", "Brad Pitt", "Mélanie Laurent"],
            rating: "R",
            watchAgain: true,
        },
    ]

    Movie.deleteMany({}).then((data) => {
        // Seed Starter Movies
        Movie.create(startMovies).then((data) => {
            // log new movies
            console.log('data', data)
            db.close();
        })
            .catch((error) => {
                console.log(error)
                db.close();
            })

    })

})