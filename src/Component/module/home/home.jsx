import React from 'react';
// 重定向
import { Redirect } from 'react-router-dom';

import './home.css'

class Home extends React.Component{
   
    render(){
        return (
            
               localStorage.getItem('mspa_user') === null?
               <Redirect to="/login" /> :
               <Redirect to="/page" />
        ) 
    }
}



export default Home;