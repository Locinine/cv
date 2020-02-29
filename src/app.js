import React, { Component } from "react";
import Nav from "./components/navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                <Nav title="prop test times"/>
            </div>
        );
    }
}

export default App;