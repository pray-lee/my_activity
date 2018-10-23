import config from './config'
import axios from 'axios'
export default {
  getPoster(options) {
    //把options携带的__ob__去掉
    let newOptions = {}
    for(let i in options){
      newOptions[i] = options[i]
    }
    return new Promise((resolve) => {
      axios.post(`${config.host}/poster/display`, newOptions)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
