import data from '../data.json'
function Modal(props) {
    var movieData =  data[props.activeIndex];
    return (
        <>
         <article>
             <p className="text-4xl my-2">Title - {movieData.Title}</p>
             <p>Year - {movieData.Year}</p>
             <p>Rated - {movieData.Rated}</p>
             <p>Runtime - {movieData.Runtime}</p>
             <p>Genre - {movieData.Genre}</p>
             <p>Director - {movieData.Director}</p>
             <p>Writer - {movieData.Writer}</p>
             <p>Actors - {movieData.Actors}</p>
             <p>Plot - {movieData.Plot}</p>
             <p>Language - {movieData.Language}</p>
             <p>Country - {movieData.Country}</p>
             <p>Awards - {movieData.Awards}</p>
             <p>Metascore - {movieData.Metascore}</p>
             <p>imdbRating - {movieData.imdbRating}</p>
             <p>imdbVotes - {movieData.imdbVotes}</p>
             <p>imdbID - {movieData.imdbID}</p>
             <p>Type - {movieData.Type}</p>
             <p>Response - {movieData.Response}</p>
         </article>
        </>
    )
}

export default Modal
