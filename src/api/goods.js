import axios from '../utils/axios';
const fetchGoodsList = params=>(
    axios({
        url:'/goods',
        method:'get',
        params
    })
)

export{
    fetchGoodsList
}