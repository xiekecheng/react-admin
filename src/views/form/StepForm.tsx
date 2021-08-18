/*
 * @Author: your name
 * @Date: 2021-08-17 20:55:49
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 20:31:08
 * @FilePath: /react-admin/src/views/form/StepForm.tsx
 */
import React,{useState} from 'react'
import { Steps, Button, message } from 'antd'
import Transfer from './components/Transfer'
import Success from './components/Success'
import Confirm from './components/Confirm'
const { Step } = Steps

const StepForm = () => {
	const [current, setCurrent] = useState(0)
	const [userForm,setUserForm] = useState({
		payment:'',
		account:'',
		name:'',
		money:'',
		method:''
	})
	  // 下一步
		const next:any = () => {
			console.log('next');
			setCurrent(current + 1)
		}
	
		// 上一步
		const prev = () => {
			console.log('prev');
			setCurrent(current - 1)
		}
const steps = [
	{
		title: '填写转账信息',
		content: <Transfer next={next} userForm={userForm} setUserForm={setUserForm} />,
	},
	{
		title: '确认转账信息',
		content: <Confirm next={next} userForm={userForm}  prev={prev} />,
	},
	{
		title: '完成',
		content: <Success setCurrent={setCurrent}/>,
	},
]

	return (
		<div className='my-step-form'>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className='steps-content'>{steps[current].content}</div>
			<div className='steps-action'>
				{/* {current < steps.length - 1 && (
					<Button type='primary' onClick={() => next()}>
						下一步
					</Button>
				)} */}
				{/* {current === steps.length - 1 && (
					<Button
						type='primary'
						onClick={() => message.success('Processing complete!')}
					>
						完成
					</Button>
				)} */}
				{/* {current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						上一步
					</Button>
				)} */}
			</div>
		</div>
	)
}

export default StepForm
