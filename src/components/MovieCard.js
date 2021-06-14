import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class MovieCard extends React.Component{
    

    
    render(){
        return(
            <div className="card">
                
                <div className="row">
                    {this.props.movies.map((movie) => (
                        <div className="col-lg-4" key={movie.id} >
                            <img src={movie.imageURL} className="card-img-top" alt="Movie" />
                            <div className="card-body">
                            <h5 className="card-title">{movie.name}</h5>
                            <p className="card-text">{movie.overview}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={(e) => this.props.handleDelete(movie)} >Delete</button>
                                <h2><span className="badge badge-info">{movie.rating}</span></h2>
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