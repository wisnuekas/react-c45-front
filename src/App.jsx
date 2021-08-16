import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pohon from "./pages/Pohon";
import Hitung from "./pages/Hitung";
import Input from "./pages/Input";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNavAltMarkup"
                >
                    <div className="navbar-nav ">
                        <Link to="/" className="nav-item btn btn-primary mx-4">
                            Input Data
                        </Link>
                        <Link
                            to="/hitung"
                            className="nav-item btn btn-primary mx-1"
                        >
                            Hitung
                        </Link>
                        <Link
                            to="/pohon"
                            className="nav-item btn btn-primary mx-1"
                        >
                            Pohon
                        </Link>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/pohon">
                    <Pohon />
                </Route>
                <Route exact path="/hitung">
                    <Hitung />
                </Route>
                <Route exact path="/">
                    <Input />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
