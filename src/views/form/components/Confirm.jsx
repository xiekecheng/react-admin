/*
 * @Author: your name
 * @Date: 2021-08-17 21:39:33
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-17 21:58:18
 * @FilePath: /react-admin/src/views/form/components/Confirm.jsx
 */
import React from 'react';
import { Alert } from 'antd';
import { Table, Typography } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  // {
  //   title: 'Repayment',
  //   dataIndex: 'repayment',
  // },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33,
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0,
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10,
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45,
  },
];

const fixedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const fixedData = [];
for (let i = 0; i < 20; i += 1) {
  fixedData.push({
    key: i,
    name: ['Light', 'Bamboo', 'Little'][i % 3],
    description: 'Everything that has a beginning, has an end.',
  });
}
const { Text } = Typography;
const Confirm = () => {
	return (
		<div className="my-confirm" style={{width:'520px'}}>
			<div className="info">
			<Alert message="确认转账后，资金将直接打入对方账户，无法退回。" type="info" showIcon closable />
			</div>
			<div>
			<Table
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered
      summary={pageData => {
        let totalBorrow = 0;
        let totalRepayment = 0;

        pageData.forEach(({ borrow, repayment }) => {
          totalBorrow += borrow;
          totalRepayment += repayment;
        });

        return (
          <>
            <Table.Summary.Row>
              <Table.Summary.Cell>Total</Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalBorrow}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text>{totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row>
            {/* <Table.Summary.Row>
              <Table.Summary.Cell>Balance</Table.Summary.Cell>
              <Table.Summary.Cell colSpan={2}>
                <Text type="danger">{totalBorrow - totalRepayment}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row> */}
            
          </>
        );
      }}
    />

			</div>

		</div>
	);
};

export default Confirm;