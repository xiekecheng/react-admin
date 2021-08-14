/*
 * @Author: your name
 * @Date: 2021-08-10 18:38:12
 * @LastEditTime: 2021-08-13 19:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-admin/src/views/form/SubstepForm.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Map, Marker, NavigationControl, InfoWindow,ZoomControl,MapTypeControl} from 'react-bmapgl';
const BasicForm = () => {
	return (
		<div className="my-substep-form">
			<h1>分步表单</h1>
			<div>
			<Map style={{ height: 300, width: '48%' }} enableScrollWheelZoom center={{lng: 113.844461, lat: 22.632091}} zoom="11">
            <Marker position={{lng: 113.844461, lat: 22.632091}} />
            <NavigationControl /> 
            <InfoWindow position={{lng: 113.844461, lat: 22.632091}} text="深圳西部硅谷" title="地址"/>
						<ZoomControl />
						<MapTypeControl />
						<NavigationControl />
        </Map>
			</div>
		</div>
	);
};

export default BasicForm;