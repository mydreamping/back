import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './../common/history';

import Login from '../common/login/login';
import Home from '../module/home/home';
import Page from '../module/page/page';
import Error from '../common/error/error'

class Mroute extends  Component{
    render(){
        return   (
            
            <Router history={history} >
                <Switch>
                    {/* exact是使路由匹配更为严格些 */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/page" component={Page}/>
                    {/* 除了以上匹配到的路由跳转到相应的组件外，都跳去error这个组件 */}
                    <Route component={Error}/>
                    </Switch>
            </Router>
        )
    }
}

export default Mroute;