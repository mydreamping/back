import React from 'react';
import  Breadcrumb from '../../common/breadcrumb/breadcrumb'
// import { Breadcrumb } from 'antd';
import './from.css'

class From extends React.Component{
   
    render(){
        return (
            <div>
                {/* 通过写在组件上path 对子组件进行传参 */}
                <Breadcrumb paths={['首页','表单']}/>
            </div>
        ) 
    }
}



export default From;