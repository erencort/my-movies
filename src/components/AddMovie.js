import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import serialize from "form-serialize"


class AddMovie extends React.Component {


    handleFormSubmit = (e) => {
        e.preventDefault()
        const newMovie = serialize(e.target, { hash: true });
        this.props.onAddMovie(newMovie)
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} className="mt-5">
                <div className="row">
                    <div className="form-group col-9">
                        <label htmlFor="filmName">Film Name:</label>
                        <input id="filmName" name="name" type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-3">
                        <label htmlFor="filmRating">Rating:</label>
                        <input id="filmRating" name="rating" type="number" step="any" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="filmImgUrl">URL:</label>
                        <input id="filmImgUrl" name="imageURL" type="text" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="filmOverview">Overview:</label>
                        <textarea className="form-control" name="overview" id="filmOverview" rows="3"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block mt-4" value="Add movie"/>
            </form>
        )
    }
}

export default AddMovie