import {TEST_MSG_UPDATE} from '../types';
function updateMsg(payload){
    return{
        type: TEST_MSG_UPDATE,
        payload
    }
}

export {
    updateMsg
}