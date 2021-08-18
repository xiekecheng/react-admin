/*
 * @Author: your name
 * @Date: 2021-08-17 23:56:42
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-19 00:22:20
 * @FilePath: /react-admin/src/views/form/components/Success.tsx
 */
import React, { useEffect } from 'react'
import { Result, Button } from 'antd'
import { Descriptions, Badge } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { pay } from '@/store/reducer/article'

const Success = (props: any) => {
	// const dispatch =useAppDispatch()
	const billForm = useAppSelector(state=>state.article.billForm)
	console.log('billForm',billForm);
	
	const { setCurrent } = props
	const handleClick = () => {
		setCurrent(0)
	}
	useEffect(()=>{
		
	},[])
	return (
		<div className='my-confirm'>
			<Result
				status='success'
				title='操作成功!'
				subTitle='预计两小时内到账'
				extra={[
					<Button type='primary' onClick={handleClick} key='console'>
						再转一笔
					</Button>,
					<Button key='buy'>查看账单</Button>,
				]}
			/>
			<div>
				<Descriptions column={1} size='default'>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left' }}
						label='付款账户'
					>
						{billForm.payment}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left' }}
						label='收款账户'
					>
						{billForm.account}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left' }}
						label='收款人姓名'
					>
						{billForm.name}
					</Descriptions.Item>
					<Descriptions.Item
						contentStyle={{ textAlign: 'left' }}
						label='转账金额'
					>
						<h1>{billForm.money}元</h1>
					</Descriptions.Item>
				</Descriptions>
			</div>
		</div>
	)
}

export default Success
