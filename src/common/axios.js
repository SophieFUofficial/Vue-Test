'use strict';


/**  axios基础配置 */
import axios from 'axios';
import Qs from 'qs';


export default class Axios{

  static axiosGet(url, params){
    return new Promise((resolve, reject) => {
      axios.get( url, {
        params: params
      }).then(response => {
        if (response.status == 200) {
          resolve(response.data);
        }
      }, err => {
        reject(err);
      })
        .catch((error) => {
          reject(error)
        })
    })
  }

  static axiosPost(url, params){
    return new Promise((resolve, reject) => {
      axios.post(url, Qs.stringify(params), {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          if (response.status == 200) {
            resolve(response.data);
          }
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

