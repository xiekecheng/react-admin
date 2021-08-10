import React, { useState } from 'react'
import {
	Form,
	Input,
	Button,
	InputNumber,
	TreeSelect,
	Switch,
	Upload,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { TextArea } = Input
const GoodsUpdate = () => {
	const [componentSize, setComponentSize] = useState('default')
	const onFormLayoutChange = ({ size }) => {
		setComponentSize(size)
	}
	//   图片上传
	const fileList = [
		{
			uid: '-1',
			name: 'xxx.png',
			status: 'done',
			url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
			thumbUrl:
				'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
		},
	]

	//   价格更改
	const onPriceChange = value => {
		console.log('changed', value)
	}
	//   是否热销
	const onHotChange = checked => {
		console.log(`switch to ${checked}`)
	}
	return (
		<div>
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout='horizontal'
				initialValues={{
					size: componentSize,
				}}
				onValuesChange={onFormLayoutChange}
				size={componentSize}
			>
				{/* <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item> */}
				<Form.Item label='商品名称'>
					<Input />
				</Form.Item>
				<Form.Item label='商品描述'>
					<TextArea rows={4} />
				</Form.Item>
				<Form.Item label='商品品类'>
					<TreeSelect
						treeData={[
							{
								title: 'Light',
								value: 'light',
								children: [
									{
										title: 'Bamboo',
										value: 'bamboo',
									},
								],
							},
						]}
					/>
				</Form.Item>
				<Form.Item label='商品价格'>
					<InputNumber min={0} defaultValue={3} onChange={onPriceChange} />
				</Form.Item>
				<Form.Item label='是否热销'>
					<Switch onChange={onHotChange} />
				</Form.Item>
				<Form.Item label='商品图片'>
					<Upload
						action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
						listType='picture'
						defaultFileList={[...fileList]}
						className='upload-list-inline'
					>
						<Button icon={<UploadOutlined />}>图片上传</Button>
					</Upload>
				</Form.Item>
				{/* <Form.Item label="Button"> */}
				<Button type='primary'>编辑完成</Button>
				{/* </Form.Item> */}
			</Form>
		</div>
	)
}

export default GoodsUpdate
