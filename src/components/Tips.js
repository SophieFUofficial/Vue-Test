/**
 * create by SophieFU 2018-6-1
 */

import {MessageBox} from 'element-ui'


export default class Tips {

  static successTip = function (message) {
    return(MessageBox({
      type:'success',
      title:'成功',
      message:message,
    }))
  }

  static errorTip = function (message) {
    return(MessageBox({
      type:'error',
      title:'失败',
      message:message,
    }))
  }

  static warningTip = function (message) {
    return(MessageBox({
      type:'warning',
      title:'警告',
      message:message,
    }))
  }

}
