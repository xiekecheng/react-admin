import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login.scss'
// import Cookies from 'js-cookie'
import {useAppSelector,useAppDispatch} from '@/store/hooks';
import {login} from '@/store/counterSlice';
const Login = () => {
  const token = useAppSelector(state=> state.counter.token)
  const user = useAppSelector(state=> state.counter.user)
  const dispatch = useAppDispatch()
  
  const onFinish = (values:any) => {
    console.log('Received values of form: ', values)
    // 调接口
    dispatch(login(values))
  }
  return (
    <div className="login_page">
      {token}
      <h1>登录页面</h1>
      <Form
        size="large"
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
