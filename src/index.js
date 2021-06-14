import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

class Index extends React.Component {
    render(){
        return(
            <App />
        )
    }
}

ReactDOM.render(<Index />, document.querySelector("#root"))