import axios from 'axios'
import config from './config'
export default {
  getData(qkey, page) {
    console.log(page)
    return new Promise((resolve) => {
      axios.get(`/api/question/change?qKey=${qkey}`, {params: {page: page}})
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
