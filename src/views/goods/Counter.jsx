import React from 'react'
// import  Counter  from '@/features/counter/Counter';
// import  OtherCounter  from '@/features/counter/OtherCounter';
import Counter from '@/demo/Counter'
// import reducer from '@/demo/reducer';
import store from '@/demo/store'
import { Provider } from 'react-redux'
const GoodsUpdate = () => {
	console.log('store value', store.getState())
	console.log('store.getState().value', store.getState().value)
	return (
		<div>
			<Provider store={store}>
				<h1>修改商品</h1>
				<Counter
					value={store.getState().value}
					add={() => store.dispatch({ type: 'add', payload: 1 })}
					sub={() => store.dispatch({ type: 'sub', payload: -1 })}
				/>
			</Provider>
		</div>
	)
}
// store.subscribe(GoodsUpdate)

export default GoodsUpdate
