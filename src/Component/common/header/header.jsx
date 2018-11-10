import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Menu, Badge } from 'antd';
import './header.css'
import history from './../history';

const SubMenu = Menu.SubMenu;

class Head extends React.Component{
     constructor(props){
        super(props);
        // 相当于vue的data
        this.state = {
            // props相当于从父类获取参数
            collapsed: props.collapsed,
        }
        // 暂未理解这一句代码的意思
        this.logout = this.logout.bind(this);
        console.log(props);
    }

    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
        
    };

    //退出
    logout(){
        // 删除localStorage
        localStorage.removeItem('mspa_user');
        // push跳转链接
        history.push('/login');
        
    } 
    render(){
        return (
            <div className="head" style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                    
                />

                <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
                    <Menu.Item key="schedule">
                        <Link to="/page/alendars">
                            <Badge count={1} overflowCount={99} style={{height:'15px',lineHeight:'15px'}}>
                                <Icon type="schedule" style={{fontSize:16, color: '#1DA57A' }}/>
                            </Badge>
                        </Link>
                    </Menu.Item>
                    <SubMenu 
                        title={<span>
                            <Icon type="user" style={{fontSize:16, color: '#1DA57A' }}/>{this.props.username}
                        </span>}
                        >
                        <Menu.Item key="logout" style={{textAlign:'center'}} className="logout">
                            <span onClick={this.logout}>logout</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        ) 
    }
}



export default Head;