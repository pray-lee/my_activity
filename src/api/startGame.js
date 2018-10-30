import axios from 'axios'
import config from './config'
export default {
  getData() {
    return new Promise((resolve) => {
      axios.get(`/game/start`)
        .then(res => {
          if (res.code != 0) {
            resolve(res.data)
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  }
}
