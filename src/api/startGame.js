import axios from 'axios'
import config from './config'
console.log(config, axios)
export default {
  getData() {
    axios.get(`${config.host}/game/start`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
