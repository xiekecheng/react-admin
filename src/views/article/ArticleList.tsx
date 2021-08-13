import React from 'react';
import { Table, Tag, Space } from 'antd';
const columns = [
  {
    title: '序号',
    dataIndex: 'name',
    key: 'name',
    render: (text,row,index) => <a>{index+1}</a>,
  },
  {
    title: '作者',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '标题',
    dataIndex: 'address',
    key: 'address',
  },
	{
    title: '类别',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '发布日期',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
	{
    title: '状态',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];


const BasicForm = () => {
	return (
		<div>
			<h1>文章列表</h1>
			<div>
				<h1>搜索框</h1>
			</div>
			<div>
			<Table columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default BasicForm;