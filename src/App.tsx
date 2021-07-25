import React, { useState } from "react";
import styled from "styled-components/macro";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { GraphComponents } from "./pages/GraphComponents";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Page404 } from "./pages/Page404";

const App: React.FC = () => {
    return (
        <>
            <Router>
                <div>
                    {/*<Nav />*/}
                    <Switch>
                        <Route exact component={Home} path="/" />
                        <Route exact component={About} path="/about" />
                        <Route exact component={GraphComponents} path="/components" />
                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
        </>
    );
};
export default App;
