import React from "react"
import SearchBar from "./SearchBar"
import MovieCard from "./MovieCard"
import axios from "axios"

class App extends React.Component{
    state={
        movies: [],
        searchValue:""
    }

    // async componentDidMount(){
    //   const baseURL = "http://localhost:3002/movies"
    //   const response = await fetch(baseURL)
    //   const data = await response.json()
    //   this.setState({movies: data})
    // }

    async componentDidMount(){
      const response = await axios.get("http://localhost:3002/movies")
      this.setState({movies: response.data})
    }

    handleDelete = async (movie) => {
      // Delete with Fetch API 
      // const baseURL = `http://localhost:3002/movies/${movie.id}`
      // await fetch(baseURL,{
      //   method:"DELETE"
      // })


      //Delete with axios
      axios.delete(`http://localhost:3002/movies/${movie.id}`)

      const newMovieList = this.state.movies.filter(
          m => m.id !== movie.id
      )      

      this.setState(prev => ({
        movies: newMovieList
      }))
    }

    searchMovie = (e) => {
      this.setState({searchValue: e.target.value})
    }

    resetHandler = () => {
      this.setState({
        searchValue: "",
      })
      
    }

    render(){

      let filteredMovies = this.state.movies.filter(
        (movie) => {
          return movie.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        }
      )

        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SearchBar searchMovieProp={this.searchMovie} resetHandlerProp={this.resetHandler} />
                    </div>
                </div>
                <MovieCard movies={filteredMovies} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}

export default App