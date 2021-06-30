import React from "react"
import SearchBar from "./SearchBar"
import MovieCard from "./MovieCard"
import AddMovie from "./AddMovie"
import EditMovie from "./EditMovie"
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";

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

    componentDidMount(){
      this.getMovies()
    }

    async getMovies(){
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
      this.getMovies()
    }

    // Search Movie
    searchMovie = (e) => {
      this.setState({searchValue: e.target.value})
    }

    // Add Movie
    addMovie = async (movie) => {
      await axios.post(`http://localhost:3002/movies/`, movie)
      this.setState(state => ({
        movies:state.movies.concat([movie])
      }))
      this.getMovies()
    }

    // Edit Movie
    editMovie = async (id, updatedMovie) => {
      await axios.put(`http://localhost:3002/movies/${id}`, updatedMovie)
      this.getMovies()
    }

    //Reset Searchbar
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
          <Router>
            <div className="container">
              <Route path="/" exact render={() => (
                <React.Fragment>
                  <div className="row">
                  <div className="col-12">
                      <SearchBar searchMovieProp={this.searchMovie} resetHandlerProp={this.resetHandler} />
                  </div>
                  </div>
                  <MovieCard movies={filteredMovies} handleDelete={this.handleDelete}/>
                </React.Fragment>
              )}>
              </Route>
              <Route path="/add" render={({history}) => (
                <AddMovie onAddMovie = {(movie) => {this.addMovie(movie)
                history.push("/")}} />
              )}>
              </Route>
              <Route path="/edit/:id" render={(props) => (
                <EditMovie {...props} onEditMovie = {(id ,movie) => {this.editMovie(id ,movie)
                }} />
              )}>
              </Route>
            </div>
          </Router>
        )
    }
}

export default App