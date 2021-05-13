import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"

ReactDOM.render(
    <div className="jimmy">
    <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
            <TodoContainer />
        </Router>  
    </React.StrictMode>
    </div>,
    document.getElementById("root")
)