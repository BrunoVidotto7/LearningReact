import './App.css'
import React from "react";
import Menu from "../components/layouts/Menu"
import Content from "../components/layouts/Content"

const App = props => (
    <div className="App">
        <Menu/>
        <Content/>
    </div>
)

export default App