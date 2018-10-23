import axios from 'axios'
import config from './config'
export default {
  getData(qkey) {
    axios.get(`${config.host}/question/change?qKey=${qkey}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
