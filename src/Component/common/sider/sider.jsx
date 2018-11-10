import React from 'react';
import { Link } from 'react-router-dom';
import './sider.css';

import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;


class Side extends React.Component{
    static defaultProps = {
        name: 'Tom',
        age: 20
    }
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
      openKeys: ['sub1','sub2','sub4'],
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            // window.location.href = "/home"
            // this.props.history.push('/home')
            console.log(1234567890)
            this.setState({ openKeys });
        } else {
            this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render(){
        return (
            <div>
                <Menu
                    className="menu"
                    mode="inline"
                    openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}>

                    <SubMenu key="sub1" title={<span><Icon type="home" /><span>首页</span></span>}>
                        <Menu.Item key="1">
                            <Link to={"/page/home"}>home</Link>       
                        </Menu.Item>
                        
                    </SubMenu>

                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="5">
                            <Link to={"/"}>toPagehome</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to={"/littleMouse"}>littleMouse</Link>
                        </Menu.Item>

                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>

                    </SubMenu>


                </Menu>

                
            </div>
        ) 
    }
}



export default Side;





