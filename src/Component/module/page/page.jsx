import React, {Component} from 'react';
import {Redirect, Router,Route, Switch} from 'react-router-dom';
import history from './../../common/history';

import SiderDemo from './../../common/siderdemo/siderdemo.jsx';
import Head from './../../common/header/header.jsx';
import Mnidex from './../index/index.jsx'
import Chart from './../chart/chart.jsx'
import From from './../from/from.jsx'
import Ricktext from './../ricktext/ricktext.jsx'
import Upload from './../upload/upload.jsx'

import Error from './../../common/error/error.jsx'

import './page.css'
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout; 

class Page extends Component{
   
    state = {
        collapsed: localStorage.getItem("mspa_SiderCollapsed") === "true",
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        }, function () {
            localStorage.setItem("mspa_SiderCollapsed", this.state.collapsed);
        });
    };

    componentDidMount() {

        //保存Sider收缩
        if (localStorage.getItem("mspa_SiderCollapsed") === null) {
            localStorage.setItem("mspa_SiderCollapsed", false);
        }
    }



    render(){
        const {collapsed} = this.state;
        const {location} = this.props;
        let name;
        if (localStorage.getItem("mspa_user") === null) {
            return <Redirect to="/login"/>
        } else {
            name = location.state === undefined ? JSON.parse(localStorage.getItem("mspa_user")).username : location.state.username;
        }


        return (
            <div className="page">
            <Router history={history}>

               <Layout style={{height:'100%'}}>
                    <Sider >
                        <SiderDemo collapsed={collapsed} path={location.pathname} />
                    </Sider>
                    <Layout>
                        <Header>
                            <Head collapsed={collapsed} toggle={this.toggle} username={name} />
                        </Header>
                        <Content className="Content" style={{margin: '0 16px'}}>
                        
                        <Switch>
                            {/* 跳转路由 exact表示规范跳转 */}
                            <Route exact path="/page" component={Mnidex}/>
                            <Route exact path="/page/from" component={From}/>
                            <Route exact path="/page/chart" component={Chart}/>
                            <Route exact path="/page/ricktext" component={Ricktext}/>
                            <Route exact path="/page/upload" component={Upload}/>
                            <Route component={Error}/>
                        </Switch>
                        
                        
                        </Content>
                        
                    </Layout>
                </Layout>
            </Router>
            </div>
        ) 
    }
}



export default Page;