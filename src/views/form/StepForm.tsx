/*
 * @Author: your name
 * @Date: 2021-08-17 20:55:49
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 12:30:03
 * @FilePath: /react-admin/src/views/form/StepForm.tsx
 */
import React,{useState} from 'react'
import { Steps, Button, message } from 'antd'
import Transfer from './components/Transfer'
import Success from './components/Success'
import Confirm from './components/Confirm.jsx'
const { Step } = Steps


const StepForm = () => {
	const [current, setCurrent] = useState(0)
	  // 下一步
		const next:any = () => {
			setCurrent(current + 1)
		}
	
		// 上一步
		const prev = () => {
			setCurrent(current - 1)
		}
const steps = [
	{
		title: '填写转账信息',
		content: <Transfer next={next} />,
	},
	{
		title: '确认转账信息',
		content: <Confirm next={next} prev={prev} />,
	},
	{
		title: '完成',
		content: <Success/>,
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
				{current < steps.length - 1 && (
					<Button type='primary' onClick={() => next()}>
						下一步
					</Button>
				)}
				{/* {current === steps.length - 1 && (
					<Button
						type='primary'
						onClick={() => message.success('Processing complete!')}
					>
						完成
					</Button>
				)} */}
				{current > 0 && (
					<Button style={{ margin: '0 8px' }} onClick={() => prev()}>
						上一步
					</Button>
				)}
			</div>
		</div>
	)
}

export default StepForm
