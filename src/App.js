import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Chat from './Chat'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
class App extends Component {
    state = {  }
    render() { 
        return (  
        <div className = "app">
            <div className ="app__body">
                <Sidebar/> 
                    <div>
                        <Route exact path = "/">
                            <Chat/>
                        </Route>
                        <Route path = "/rooms/:roomId">
                            <Chat/>
                        </Route>
                       
                    </div>
                
            </div>
        </div>
        );
    }
}
 
export default App;