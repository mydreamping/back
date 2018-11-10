import React from 'react';
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd';
import './breadcrumb.css'

class Bread extends React.Component{
    Breadcrumbs(){
        // 打印父组件的传参
        const { paths } = this.props;
        
        let v = paths.map(function(item,index){
            return (
                <Breadcrumb.Item key="item">
                    {item==="首页"?<Link to={"/page"}>{item}</Link>:item}
                </Breadcrumb.Item>
            )
        });
        return v;
    }
    
    componentDidMount(){
        this.Breadcrumbs();
    }
    render(){
        return (
            <Breadcrumb style={{ margin: '12px 0' }}>
            {this.Breadcrumbs()}
            </Breadcrumb>
        ) 
    }
}



export default Bread;