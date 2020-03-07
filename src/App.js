import React from "react";
import Home from "./Home";
import Main from "./Main";
import New from "./New";
import Menu from "./Menu";
import { BrowserRouter as Router, Route } from 'react-router-dom';  // Route 컴포넌트 imort
import './App.css';


const App = () => {

    return (
        <>
            <Router>
                <Menu/>
                <Route exact path="/" component={Home} />
                <Route path="/Main" component={Main} />
                <Route path="/New" component={New} />
            </Router>
        </>
    );
}

export default App;
