/*
 * @Author: your name
 * @Date: 2021-08-17 21:24:03
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 21:37:16
 * @FilePath: /react-admin/src/views/form/components/Transfer.tsx
 */
import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { Select } from 'antd';

const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '请输入${label} !',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */
const Transfer = () => {
	const onFinish = (values: any) => {
    console.log(values);
  };
	const  handleChange =(value) =>{
		console.log(`selected ${value}`);
	}
	
	return (
		<>
			<Form style={{width:'600px'}} {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'name']} label="付款账户" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="收款账户" rules={[{ type: 'email' },{ required: true }]}>
			<Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">支付宝</Option>
      <Option value="lucy">银行账户</Option>
    </Select><Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="收款人姓名" rules={[{ type: 'number', min: 0, max: 99 }]}>
			<Input />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="转账金额" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
		</>
	);
};

export default Transfer;