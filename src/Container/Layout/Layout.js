import React, { Component } from 'react';

import Secret from '../../Component/Secret/Secret';
import Sidebar from '../../Component/Sidebar/Sidebar';
import {Route,Switch,Redirect} from 'react-router-dom'
import Finance from '../../Component/Finance/Finance';
import ChatBot from '../../Component/Chat Bot/Chat-bot';


class Layout extends Component {

    render() {
        return (
            
            <div>
            <Sidebar/>
            <Switch>
                <Route path='/Secret' component={Secret}/> 
                <Route path='/Finance-App' component={Finance}/> 
                <Route path='/Chat-Bot' component={ChatBot}/> 

            </Switch>
            <Redirect from="/" to="/Chat-Bot"/>                
            
            </div>

        )
    }
}

export default Layout;