/**
 * create by SophieFU 2018-6-1
 */

import {Notification} from 'element-ui'


export default class Tips {

  static successTip = function (message) {
    return(Notification({
      type:'success',
      title:'成功',
      message:message,
      center:true,
      duration:3000,
    }))
  }

  static errorTip = function (message) {
    return(Notification({
      type:'error',
      title:'失败',
      message:message,
      center:true,
      duration:3000,
    }))
  }

  static warningTip = function (message) {
    return(Notification({
      type:'warning',
      title:'警告',
      message:message,
      center:true,
      duration:3000,
    }))
  }

}
