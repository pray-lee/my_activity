import axios from 'axios'
import config from './config'
export default {
  getData(qkey) {
    return new Promise((resolve) => {
      axios.get(`/api/question/change?qKey=${qkey}`)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
