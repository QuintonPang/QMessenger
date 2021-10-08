import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Join from './components/Join';
import Chat from './components/Chat';

const App = () =>{

    return(

        <Router>
            <Switch>
                <Route exact path="/">
                    <Join/>
                </Route>
                {/* question mark not allowed in path, question mark is for optional parameters*/}
                <Route path="/chat/id=:room&name=:name">
                    <Chat/>
                </Route>
            </Switch>
        </Router>

    );


}

export default App;