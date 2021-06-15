import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class SearchBar extends React.Component{


    render(){
        return(
            <form onSubmit = {(e) => e.preventDefault()}>
                <div className="form-row mb-5">
                    <div className="col-11">
                        <input onChange={this.props.searchMovieProp} type="text" className="form-control" placeholder="Search a Movie" />
                    </div>
                    <div className="col-1">
                        <button onClick={this.props.resetHandlerProp} type="reset" className="btn btn-primary">Reset</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchBar