/*
 * @Author: your name
 * @Date: 2021-08-13 12:39:59
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-08-18 16:30:52
 * @FilePath: /react-admin/src/test/test.js
 */
var request = require('request');

var headers = {
    'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/'
};

var options = {
    url: 'localhost:9999/api/v1/antd/userList',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);