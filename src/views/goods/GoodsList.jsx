import React, { useEffect, useState } from 'react'
import { Input } from 'antd'
import { Select } from 'antd'
import { Table } from 'antd'
import { Button } from 'antd'
import {fetchGoodsList} from '@/api/goods.js';

const columns = [
  {
    title: '商品图',
    dataIndex: 'img',
    render:(text,record,index)=>(
        <>
        <img style={{width:'60px',height:'60px'}} src={text} alt="" />
        {/* <span>{text}</span> */}
      </>
    )
  },
  {
    title: '价格',
    dataIndex: 'price',
  },
  {
    title: '名称',
    dataIndex: 'name',
  },
  {
    title: '商品描述',
    dataIndex: 'desc',
  },
//   {
//     title: '操作',
//     dataIndex: 'ops',
//   },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 200,
    render: () => (
      <>
        <Button size='small' shape="round"  style={{marginRight:'10px'}} type="primary">编辑</Button>
        <Button size='small' shape="round"  type="primary" danger>删除</Button>
      </>
    ),
  },
]

// const data = []
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     img: `Edward King ${i}`,
//     price: 32,
//     name: `London, Park Lane no. ${i}`,
//     description: `description ${i}`,
//     ops: `ops ${i}`,
//   })
// }
// import "./style.scss"
const GoodsList = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [data,setData] = useState([])
  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys)
    setSelectedRowKeys(selectedRowKeys)
  }
  useEffect(()=>{
    fetchGoodsList().then(res=>{
        console.log('res',res.data.data.data);
        setData(res.data.data.data)
    })
  },[])
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    // selections: [
    //   Table.SELECTION_ALL,
    //   Table.SELECTION_INVERT,
    //   Table.SELECTION_NONE,
    //   {
    //     key: 'odd',
    //     text: 'Select Odd Row',
    //     onSelect: (changableRowKeys) => {
    //       let newSelectedRowKeys = []
    //       newSelectedRowKeys = changableRowKeys.filter((key, index) => {
    //         if (index % 2 !== 0) {
    //           return false
    //         }
    //         return true
    //       })
    //       setSelectedRowKeys(newSelectedRowKeys)
    //     },
    //   },
    //   {
    //     key: 'even',
    //     text: 'Select Even Row',
    //     onSelect: (changableRowKeys) => {
    //       let newSelectedRowKeys = []
    //       newSelectedRowKeys = changableRowKeys.filter((key, index) => {
    //         if (index % 2 !== 0) {
    //           return true
    //         }
    //         return false
    //       })
    //       setSelectedRowKeys(newSelectedRowKeys)
    //     },
    //   },
    // ],
  }

  return (
    <div className="goods_list">
      <h1>商品列表</h1>
      {/* S 搜索框 */}
      <div className="search">
        <span>名称</span>
        <Input allowClear placeholder="Basic usage" />
        <span>品类</span>
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </div>
      {/* E 搜索框 */}

      {/* S 商品列表 */}
      <div className="goods_content">
        <Table
        // title="商品列表"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          rowKey="uid"
        />
      </div>
      {/* E 商品列表 */}
    </div>
  )
}

export default GoodsList
