import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"

class MovieCard extends React.Component{
    
    movieOverviewSlicer = (overview, maxLenght) => {
        if (overview.length >= maxLenght){
            return overview.slice(0,maxLenght).concat("...")
        }
        return overview
    }

    movieTitleSlicer = (title, maxLenght) => {
        if (title.length >= maxLenght){
            return title.slice(0, maxLenght).concat("...")
        }
        return title
    }

    
    render(){
        return(
            <div className="card-group">
                
                <div className="row">
                    {this.props.movies.map((movie, i) => (
                        <div className="col-lg-4" key={i} >
                            <div className="card">
                                <img src={movie.imageURL} className="card-img-top" alt="Movie" />
                                <div className="card-body">
                                <h5 className="card-title">{this.movieTitleSlicer(movie.name, 30)}</h5>
                                <p className="card-text">{this.movieOverviewSlicer(movie.overview, 100)}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="button" className="btn btn-md btn-outline-danger" onClick={(e) => this.props.handleDelete(movie)} >Delete</button>
                                        <Link to={`/edit/${movie.id}`} type="button" className="btn btn-md btn-outline-secondary float-left">Edit</Link>
                                        <h2><span className="badge badge-info">{movie.rating}</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            
            
            
            </div>
        )
    }
}

export default MovieCard