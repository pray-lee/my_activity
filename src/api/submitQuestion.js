import axios from 'axios'
import config from './config'
export default {
  getPoster(options) {
    // 重新编辑options
    let newOptions = {}
    newOptions.id = options.id;
    newOptions.options = {}
    for(let i in options.options){
      newOptions.options[i] = options.options[i]
    }
    return new Promise((resolve) => {
      axios.post(`/poster/display`,newOptions)
        .then(res => {
          console.log(res)
          resolve(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
