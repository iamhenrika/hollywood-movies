const React = require("react")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/movies" method="POST">
                    <fieldset>
                        <legend>Create a New Movie</legend>

                        <label> POSTER:<input type="text" name="poster" /> </label>

                        <label>
                            TITLE:<input type="text" name="title" placeholder="Enter movie title" />
                        </label>

                        <label>DIRECTOR :<input type="text" name="director" /> </label>

                        <label> CAST (Please separate cast members with commas, Thank You!):<input type="text" name="cast" /> </label>

                        <label> RELEASE DATE:<input type="text" name="releaseDate" /> </label>

                        <label> LENGTH:<input type="number" name="length" /> </label>

                        <label>
                            GENRE:<input type="text" name="genre" placeholder="enter genre" />
                        </label>

                        <label>RATING :<input type="text" name="rating" /> </label>

                        <label>WATCH AGAIN :<input type="checkbox" name="watchAgain" /> </label>
                    </fieldset>
                    <input type="submit" value="create New Movie" />
                    <br />
                    <a href="/movies/"><button>Back to Main</button></a>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New