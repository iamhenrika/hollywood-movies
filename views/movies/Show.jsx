const React = require("react")
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
  render() {
    const { movie } = this.props
    return (
      <DefaultLayout>
      <div>
        <article>
          <img src={movie.poster} width="400" height="650" alt="" />
          <h2>{movie.title}</h2>
          <h3>{movie.director}</h3>

          Cast: 
          <ul>
            {movie.cast.map((star) => {
              return(
                <li>{star}</li>
              )
            })}
          </ul>

          <p>{movie.genre} | {movie.releaseDate ? movie.releaseDate : "" }</p>
          <p>{movie.rating}</p>
          <p>{movie.watchAgain ? "Loved it. Will watch again" : "You couldn't pay me enough to watch it again."}</p>
          
          <a href={`/movies/${ movie._id }/Edit`}><button>Edit</button></a>
          <form action={`/movies/${ movie._id }?_method=DELETE`} method="POST">
            <input type="submit" value="Delete" />
          </form>
          <a href="/movies/"><button>Back to Main</button></a>
        </article>
      </div>
    </DefaultLayout>
    )
  }
}

module.exports = Show