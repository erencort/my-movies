import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"


class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

    }

    async componentDidMount() {
        const id = this.props.match.params.id
        const response = await axios.get(`http://localhost:3002/movies/${id}`)
        const movie = response.data
        this.setState({
            name:movie.name,
            rating:movie.rating,
            overview:movie.overview,
            imageURL:movie.imageURL
        })
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="mt-5">
                <div className="row">
                    <div className="form-group col-9">
                        <label htmlFor="filmName">Film Name:</label>
                        <input id="filmName" name="name" type="text" value={this.state.name} className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="filmRating">Rating:</label>
                        <input id="filmRating" name="rating" type="number" step="any" value={this.state.rating} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="filmImgUrl">URL:</label>
                        <input id="filmImgUrl" name="imageURL" type="text" value={this.state.imageURL} className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="filmOverview">Overview:</label>
                        <textarea className="form-control" name="overview" value={this.state.overview} id="filmOverview" rows="3"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-4" value="Add movie"/>
            </form>
        )
    }
}

export default EditMovie