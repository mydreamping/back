import React, { Component } from 'react';

import './login.css'
import { Form, Icon, Input, Button, Checkbox, message, Spin } from 'antd';
const FormItem = Form.Item;

// 定义一个登录的账号
const login = [{
    username:'admin',
    password:'admin'
}];

//匹配用户
function PatchUser(values){
    const results = login.map(function(item){
        console.log(values.username,item.username,values.password,item.password)
        if(values.username === item.username && values.password === item.password){
            return 1;
        }else{
            return 0;
        }
    });

    //includes es6的数组方法 方法用来判断一个数组是否包含一个指定的值，如果是存在返回 true，否则false。
    return results.includes(1);
}; 

class NormalLoginForm  extends Component{
    state = {
        isLoding:false,
    };
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        console.log(window.history);
        
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            //相当于执行PactchUser()函数，并传值values
            if(PatchUser(values)){
                this.setState({
                    isLoding: true,
                });


                console.log(PatchUser(values));
            
                // JSON.stringify()将数组对象转换成字符串
                localStorage.setItem('mspa_user',JSON.stringify(values));
                // antd 提供的提示信息
                message.success('login successed!'); //成功信息
                let that = this;
                // 延迟进入
                setTimeout(()=>{
                    //跳转路由并传递参数
                    this.props.history.push({pathname: "/", state: { values }}); 
                },2000)
                

                //父组件：
                //this.props.history.push({ pathname: "/PutForwardSubmit", state: { vcode } });
                // 子组件取值：
                // this.props.location.state.vcode
            }else{
                message.error('login failed!'); //失败信息
            }
        }
        });
      }
    


    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            // 加载中的用法,判断是否加载，如果true出现
                this.state.isLoding?<Spin size="large" className="loading" />:
               <div className="login">
                <div className="login-form">
                    <div className="login-logo">
                        <div className="login-name">MSPA</div>
                    </div>
                    <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                        <FormItem>
                             {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                        </FormItem>
                        <FormItem style={{marginBottom:'0'}}>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                登录
                            </Button>
                            Or <a href="">现在就去注册!</a>
                        </FormItem>
                    </Form>
                    
                </div>
            </div>
           
        ) 
    }
}


const Login = Form.create()(NormalLoginForm);
export default Login;