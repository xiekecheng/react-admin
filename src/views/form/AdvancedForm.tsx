/*
 * @Author: your name
 * @Date: 2021-08-10 18:39:24
 * @LastEditTime: 2021-08-15 16:59:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/form/AdvancedForm.tsx
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Divider } from 'antd'
import { Chart, Interval } from 'bizcharts'
import { Line, Point, Tooltip, Legend, Axis, Coordinate } from 'bizcharts'

import { useHistory } from 'react-router-dom'

const BasicForm = () => {
	// table1 数据源 开始
	const data = [
		{ genre: 'Sports', sold: 275 },
		{ genre: 'Strategy', sold: 155 },
		{ genre: 'Action', sold: 230 },
		{ genre: 'Shooter', sold: 250 },
		{ genre: 'Other', sold: 450 },
	]
	// table1 数据源 结束

	// table2 数据源 开始
	const data2 = [
		{
			month: 'Jan',
			city: 'Tokyo',
			temperature: 7,
		},
		{
			month: 'Jan',
			city: 'London',
			temperature: 3.9,
		},
		{
			month: 'Feb',
			city: 'Tokyo',
			temperature: 6.9,
		},
		{
			month: 'Feb',
			city: 'London',
			temperature: 4.2,
		},
		{
			month: 'Mar',
			city: 'Tokyo',
			temperature: 9.5,
		},
		{
			month: 'Mar',
			city: 'London',
			temperature: 5.7,
		},
		{
			month: 'Apr',
			city: 'Tokyo',
			temperature: 14.5,
		},
		{
			month: 'Apr',
			city: 'London',
			temperature: 8.5,
		},
		{
			month: 'May',
			city: 'Tokyo',
			temperature: 18.4,
		},
		{
			month: 'May',
			city: 'London',
			temperature: 11.9,
		},
		{
			month: 'Jun',
			city: 'Tokyo',
			temperature: 21.5,
		},
		{
			month: 'Jun',
			city: 'London',
			temperature: 15.2,
		},
		{
			month: 'Jul',
			city: 'Tokyo',
			temperature: 25.2,
		},
		{
			month: 'Jul',
			city: 'London',
			temperature: 17,
		},
		{
			month: 'Aug',
			city: 'Tokyo',
			temperature: 26.5,
		},
		{
			month: 'Aug',
			city: 'London',
			temperature: 16.6,
		},
		{
			month: 'Sep',
			city: 'Tokyo',
			temperature: 23.3,
		},
		{
			month: 'Sep',
			city: 'London',
			temperature: 14.2,
		},
		{
			month: 'Oct',
			city: 'Tokyo',
			temperature: 18.3,
		},
		{
			month: 'Oct',
			city: 'London',
			temperature: 10.3,
		},
		{
			month: 'Nov',
			city: 'Tokyo',
			temperature: 13.9,
		},
		{
			month: 'Nov',
			city: 'London',
			temperature: 6.6,
		},
		{
			month: 'Dec',
			city: 'Tokyo',
			temperature: 9.6,
		},
		{
			month: 'Dec',
			city: 'London',
			temperature: 4.8,
		},
	]

	const scale = {
		temperature: { min: 0 },
		city: {
			formatter: (v) => {
				return {
					London: '伦敦',
					Tokyo: '东京',
				}[v]
			},
		},
	}
	// table2 数据源 结束

	// table3 数据源 开始
	const pieData = [
		{ item: '事例一', percent: 0.4 },
		{ item: '事例二', percent: 0.21 },
		{ item: '事例三', percent: 0.17 },
		{ item: '事例四', percent: 0.13 },
		{ item: '事例五', percent: 0.09 },
	]
	const cols = {
		percent: {
			formatter: (val) => {
				val = val * 100 + '%'
				return val
			},
		},
	}
	// table3 结束

	// table4 开始
	const data4 = [
		{ year: '1951 年', sales: 38 },
		{ year: '1952 年', sales: 52 },
		{ year: '1956 年', sales: 61 },
		{ year: '1957 年', sales: 45 },
		{ year: '1958 年', sales: 48 },
		{ year: '1959 年', sales: 38 },
		{ year: '1960 年', sales: 38 },
		{ year: '1962 年', sales: 38 },
	]
	// table4 结束

	// table5 南丁格尔玫瑰环图 开始
	const data5 = [
		{ year: '2001', population: 41.8 },
		{ year: '2002', population: 38 },
		{ year: '2003', population: 33.7 },
		{ year: '2004', population: 30.7 },
		{ year: '2005', population: 25.8 },
		{ year: '2006', population: 31.7 },
		{ year: '2007', population: 33 },
		{ year: '2008', population: 46 },
		{ year: '2009', population: 38.3 },
		{ year: '2010', population: 28 },
		{ year: '2011', population: 42.5 },
		{ year: '2012', population: 30.3 },
	]
	// table5 南丁格尔玫瑰环图 结束
	return (
		<div className='my-form-advanced'>
			<div>
				<h1>柱状图</h1>
				{/* table 1 开始 */}
				<Chart height={320} autoFit data={data}>
					<Interval position='genre*sold' />
				</Chart>
				{/* table 1 结束 */}
				<Divider plain>Table1</Divider>
				{/* table 2 开始 */}
				<h1>折线图</h1>
				<Chart
					scale={scale}
					padding={[30, 20, 60, 40]}
					autoFit
					height={320}
					data={data2}
					interactions={['element-active']}
				>
					<Point position='month*temperature' color='city' shape='circle' />
					<Line
						shape='smooth'
						position='month*temperature'
						color='city'
						label='temperature'
					/>
					<Tooltip shared showCrosshairs />
					<Legend
						background={{
							padding: [5, 100, 5, 36],
							style: {
								fill: '#eaeaea',
								stroke: '#fff',
							},
						}}
					/>
				</Chart>
				{/* table 2 结束 */}

				<Divider plain>Table2</Divider>

				{/* table 3 开始 */}
				<h1>饼图</h1>
				<Chart
					height={400}
					data={pieData}
					scale={cols}
					autoFit
					interactions={['element-single-selected']}
				>
					<Coordinate type='theta' radius={0.75} />
					<Tooltip showTitle={false} />
					<Axis visible={false} />
					<Interval
						position='percent'
						adjust='stack'
						color='item'
						style={{
							lineWidth: 1,
							stroke: '#fff',
						}}
						label={[
							'*',
							{
								content: (data) => {
									return `${data.item}: ${data.percent * 100}%`
								},
							},
						]}
					/>
				</Chart>
				<Divider plain>Table3</Divider>
				{/* table 3 结束 */}

				{/* table 4 开始 */}
				<h1>彩色柱状图</h1>
				<Chart
					height={400}
					scale={scale}
					autoFit
					data={data4}
					interactions={['active-region']}
					appendPadding={[20, 0, 0, 0]}
				>
					<Interval position='year*sales' color='year' />
					<Tooltip shared />
				</Chart>
				<Divider plain>Table4</Divider>
				{/* table 4 结束 */}

				{/* table5 开始  */}
				<h1>南丁格尔玫瑰环图</h1>
				<Chart height={400} data={data5} autoFit>
					<Coordinate type='polar' innerRadius={0.2} />
					<Axis visible={false} />
					<Tooltip showTitle={false} />
					<Interval
						position='year*population'
						adjust='stack'
						color='year'
						element-highlight
						style={{
							lineWidth: 1,
							stroke: '#fff',
						}}
						label={[
							'year',
							{
								offset: -15,
							},
						]}
					/>
				</Chart>
				{/* table5 结束 */}
			</div>
		</div>
	)
}

export default BasicForm
