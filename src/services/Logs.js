import axios from '../api';

export const postLogs = (body) => {
    axios.post(`/predict`, body).then(res => {
        console.log(res);
    }).catch(err => { console.log(err) })
}