import axios from '../utils/axios.ts';
const fetchGoodsList = params=>(
    axios({
        url:'/goods',
        method:'get',
        params
    })
)

const fetchCateList = (params)=>(
    axios({
        url:'/cate/list',
        method:'get',
        params
    })
)
    


export{
    fetchGoodsList,fetchCateList
}