import React from 'react';
import { Link } from 'react-router-dom';
import './siderdemo.css';

import { Layout, Menu, Icon } from 'antd';
const {  Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Siderdemo extends React.Component{

     constructor(props){
        super(props);
        // 定义变量,相当于获取props的内容
        const { collapsed }= props;
        // 相当于vue的data处
        this.state ={
            collapsed:collapsed,
            firstHide: true, //第一次先隐藏暴露的子菜单
            selectedKey: '', //选择的路径
            openKey: '', //打开的路径（选择的上一层）
        }
        console.log(this.state);
        
    }

    // 生命周期
    // 在初始化render之后只执行一次，在这个方法内，可以访问任何组件
    componentDidMount() {
        this.setMenuOpen(this.props);
        console.log(this.collapsed);
    }



    componentWillReceiveProps(nextProps) {
        this.onCollapse(nextProps.collapsed);
        this.setMenuOpen(nextProps);
        
    }

    setMenuOpen = props => {
        const {path} = props;
        this.setState({
            openKey: path.substr(0, path.lastIndexOf('/')),
            selectedKey: path
        });
    };


    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({
            collapsed,
            firstHide: collapsed,
        });
    };

    // 菜单选择
    menuClick = e => {
        // this.setState 重新赋值state里面的信息
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state)
    };


    // 打开菜单
    openMenu = v => {
        this.setState({
            openKey: v[v.length - 1],
            firstHide: false,
        })
    };

    render(){
        // 注册定义变量
        const { collapsed, firstHide, openKey, selectedKey } = this.state;
        return (
            // <div>
            
                <Sider 
                    trigger={null}
                    collapsed={collapsed}
                    >
                    {/* 三元运算，如果collapsed为真，backgroundSize为70%，否则为30% */}
                    <div className="logo" style={collapsed?{backgroundSize:'70%'}:{backgroundSize:'30%'}} />
                    <Menu 
                        theme="dark"
                        mode="inline"
                        // antd的方法：表示当前选中的菜单项 key 数组
                        selectedKeys={[selectedKey]}
                        onClick = {this.menuClick}
                        //onOpenChange：表示SubMenu 展开/关闭的回调
                        onOpenChange={this.openMenu}
                        // openKeys 当前展开的 SubMenu 菜单项 key 数组
                        openKeys={firstHide ? null : [openKey]}    
                    >
                        

                        <Menu.Item key="/page">
                        <Link to="/page">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                        </Menu.Item>
                        
                        <Menu.Item key="/page/from">
                        <Link to="/page/from">
                            <Icon type="form" />
                            <span>表单</span>
                        </Link>
                        </Menu.Item>
                        <SubMenu key="3"
                            title={<span><Icon type="area-chart" /><span>图表</span></span>}
                            >
                                <Menu.Item key="/page/chart/echarts">
                                <Link to="/page/chart">
                                    <span>echarts</span>
                                </Link>
                                </Menu.Item>
                            
                        </SubMenu>
                        <Menu.Item key="/page/ricktext">
                        <Link to="/page/ricktext">
                            <Icon type="edit" />
                            <span>富文本</span>
                        </Link>
                        </Menu.Item>
                        <Menu.Item key="/page/upload">
                        <Link to="/page/upload">
                            <Icon type="upload" />
                            <span>文件上传</span>
                        </Link>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                
            // </div>
        ) 
    }
}



export default Siderdemo;





