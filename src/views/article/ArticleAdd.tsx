/*
 * @Author: your name
 * @Date: 2021-08-11 11:29:43
 * @LastEditTime: 2021-08-13 22:01:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/article/ArticleAdd.tsx
 */
import React, { useState } from 'react'
import './style.scss'
import {
	Form,
	Input,
	Button,
	Radio,
	Select,
	Cascader,
	DatePicker,
	InputNumber,
	TreeSelect,
	Switch,
} from 'antd'
// import { Select } from 'antd';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
const { Option } = Select
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const BasicForm = () => {
	const [filter, setFilter] = useState({
		author: '',
		title: '',
		type: '',
		content: '',
	})
	//S 图片上传
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
	const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow&&imgWindow.document.write(image.outerHTML);
  };

	//E 图片上传
	const [articleContent, setArticleContent] = useState('')
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values)
	}
	const publicArticle = () => {
		console.log('发布文章', filter)
	}
	const handleContent = (content) => {
		setFilter({ ...filter, content })
	}
	function handleChange(value) {
		console.log(`selected ${value}`)
	}
	const modules = {
			toolbar: [
				[{ header: [1, 2, false] }],
				['bold', 'italic', 'underline', 'strike', 'blockquote'],
				[
					{ list: 'ordered' },
					{ list: 'bullet' },
					{ indent: '-1' },
					{ indent: '+1' },
				],
				['link', 'image'],
				['clean'],
			],
		},
		formats = [
			'header',
			'bold',
			'italic',
			'underline',
			'strike',
			'blockquote',
			'list',
			'bullet',
			'indent',
			'link',
			'image',
		]

	return (
		<div className='my-article-add'>
			<h1>文章新增</h1>
			<div>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout='horizontal'
					onFinish={onFinish}
					// initialValues={{ size: componentSize }}
					// onValuesChange={onFormLayoutChange}
					// size={componentSize as SizeType
					// }
				>
					<Form.Item label='作者'>
						<Input
							value={filter.author}
							onChange={(e) => setFilter({ ...filter, author: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label='标题'>
						<Input
							value={filter.title}
							onChange={(e) => setFilter({ ...filter, title: e.target.value })}
						/>
					</Form.Item>
					<Form.Item label='文章类型'>
						<Select
							defaultValue='请选择'
							style={{ width: 120 }}
							onChange={(value) => setFilter({ ...filter, type: value })}
						>
							<Option value='narration'>记叙文</Option>
							<Option value='prose'>散文</Option>
							<Option value='novel'>小说</Option>
							<Option value='fairy'>童话</Option>
							<Option value='story'>故事</Option>
							<Option value='poet'>诗歌</Option>
						</Select>
					</Form.Item>
					<Form.Item label="文章缩略图">
					<ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
					</Form.Item>
					<Form.Item label='内容'>
						{/* react-quill 富文本框 */}
						<ReactQuill
							className='text-editor'
							formats={formats}
							modules={modules}
							theme='snow'
							value={filter.content}
							onChange={handleContent}
						/>
					</Form.Item>
					<Form.Item>
						<Button onClick={publicArticle}>发布文章</Button>
					</Form.Item>

					{/* <Form.Item>
						<Button
							type='primary'
							htmlType='submit'
							className='login-form-button'
						>
							Log in
						</Button>
						Or <a href=''>register now!</a>
					</Form.Item> */}
				</Form>
			</div>
		</div>
	)
}

export default BasicForm
