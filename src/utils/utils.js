import store from '../store'
/**
 * js 工具类
 */

/**
 * isKeyInArray 检查对象中是否含有某一个key
 * @param k
 * @param array
 * @returns {boolean}
 */
export function isKeyInArray (k, array) {
  let val = false
  for (let item of array) {
    if (val) {
      break
    }
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          val = true
          break
        }
      }
    }
  }
  return val
}

/**
 * removeItemByKey 通过某一个key移除对象数组中某一项
 * @param k
 * @param array
 */
export function removeItemByKey (k, array) {
  array.forEach((item, index) => {
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          array.splice(index, 1)
          break
        }
      }
    }
  })
}

/**
 * findIndexByKey 通过key获取元素在数组中的位置
 * @param k
 * @param array
 * @returns {number}
 */
export function findIndexByKey (k, array) {
  let val = -1
  array.forEach((item, index) => {
    if (typeof (item) === 'object') {
      for (let key of Object.keys(item)) {
        if (k === item[key]) {
          val = index
          break
        }
      }
    }
  })
  return val
}

/**
 * getUrlPath 获取url的最后一个path
 * @returns {string}
 */
export function getUrlPath () {
  const url = location.href
  let path = url.slice(url.lastIndexOf('/') + 1, url.indexOf('?') === -1 ? url.length : url.indexOf('?'))
  return path
}

/**
 * toUrlFormat json对象转为key=value&key=value
 * @param obj
 * @returns {string}
 */
export function toUrlFormat (obj) {
  let str = ''
  for (let key of Object.keys(obj)) {
    str += obj[key] && `${key}=${obj[key]}&`
  }
  str = str.substr(0, str.length - 1)
  return str
}


/**
 * toUpperFirstLetter 生成新的json对象，第一个字符转大写
 * @param obj
 */
export function toUpperFirstLetter (obj) {
  const newObj = {}
  for (let key of Object.keys(obj)) {
    let newKey = key.substr(0, 1).toUpperCase() + key.substr(1)
    newObj[newKey] = obj[key]
  }
  return newObj
}

/**
 * formatDate 格式化日期 yyyy-MM-dd ios默认是utc时间比gmt少8个小时  2017-11-30新增 支持解析到秒
 * @param str
 * @param seconds
 * @returns {string}
 */
export function formatDate (str, seconds) {
  if (!str) {
    return ''
  }
  function parse (n) {
    return n < 10 ? ('0' + n) : n
  }
  let dt = new Date(str)
  let y = dt.getFullYear()
  let m = dt.getMonth() + 1
  let d = dt.getDate()
  if (!seconds) {
    return [y, parse(m), parse(d)].join('-')
  } else {
    let h = dt.getHours()
    let M = dt.getMinutes()
    let s = dt.getSeconds()
    return [y, parse(m), parse(d)].join('-') + ' ' + [parse(h), parse(M), parse(s)].join(':')
  }
}

/**
 * toPrice 金钱保留两位小数
 * @param num
 * @returns {string}
 */
export function toPrice (num) {
  return '￥' + parseFloat(num).toFixed(2)
}


/**
 * isWeChat 是否是微信浏览器打开
 * @returns {boolean}
 */
export function isWeChat () {
  return !!navigator.userAgent.match(/MicroMessenger/i)
}

/**
 * isMobile 是否是移动端
 * @returns {boolean}
 */
export function isMobile () {
  return !!navigator.userAgent.match(/(iPhone|iPod|Android|iOS|iPad|Mobile)/i)
}


/**
 * [timestampToTime 将时间戳转换为标准时间]
 * @param    {[type]}                 timestamp [description]
 * @return   {[type]}                           [description]
 */
export function timestampToTime(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? ('0' + date.getDate() + ' ') : date.getDate() + ' ';
  var h = date.getHours() < 10 ? ('0' + date.getHours() + ':') : date.getHours() + ':';
  var m = date.getMinutes() < 10 ? ('0' + date.getMinutes() + ':') : date.getMinutes() + ':';
  var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
  return Y + M + D + h + m + s;
}

/**
 * [timestampToTime 将时间戳转换为标准时间——只有时分秒]
 * @param    {[type]}                 timestamp [description]
 * @return   {[type]}                           [description]
 */
export function timestampToTimeNoYMD(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var h = date.getHours() < 10 ? ('0' + date.getHours() + ':') : date.getHours() + ':';
  var m = date.getMinutes() < 10 ? ('0' + date.getMinutes() + ':') : date.getMinutes() + ':';
  var s = date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds();
  return h + m + s;
}

/**
 * [timestampToTimeNoHMS 时间戳转标准时间——没有时分秒]
 * @param  {[type]} timestamp [description]
 * @return {[type]}           [description]
 */
export function timestampToTimeNoHMS(timestamp) {
  var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + '-';
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var D = date.getDate() < 10 ? ('0' + date.getDate() + ' ') : date.getDate();
  return Y + M + D;
}

/**
 * [getWeekStartDate 获得某周的开始日期]
 * @param    {[type]}                 paraYear      [description]
 * @param    {[type]}                 paraMonth     [description]
 * @param    {[type]}                 paraDay       [description]
 * @param    {[type]}                 paraDayOfWeek [description]
 * @return   {[type]}                               [description]
 */
export function getWeekStartDate(paraYear, paraMonth, paraDay, paraDayOfWeek) {
  let weekStartDate = new Date(paraYear, paraMonth, paraDay + 1 - paraDayOfWeek);
  return formatDate(weekStartDate);
}

/**
 * [getWeekEndDate 获得某周的结束日期]
 * @param  {[type]} paraYear      [description]
 * @param  {[type]} paraMonth     [description]
 * @param  {[type]} paraDay       [description]
 * @param  {[type]} paraDayOfWeek [description]
 * @return {[type]}               [description]
 */
export function getWeekEndDate(paraYear, paraMonth, paraDay, paraDayOfWeek) {
  let weekEndDate = new Date(paraYear, paraMonth, paraDay + (7 - paraDayOfWeek));
  return formatDate(weekEndDate);
}

/**
 * [GetWeekIndex 获取日期为某年的第几周]
 * @param {[type]} dateobj [description]
 */
export function GetWeekIndex(dateobj) {
  let firstDay = GetFirstWeekBegDay(dateobj.getFullYear());
  if (dateobj < firstDay) {
    firstDay = GetFirstWeekBegDay(dateobj.getFullYear() - 1);
  }
  let d = Math.floor((dateobj.valueOf() - firstDay.valueOf()) / 86400000);
  return Math.floor(d / 7) + 1;
}

/**
 * 获取某年的第一天
 */
export function GetFirstWeekBegDay(year) {
  let tempdate = new Date(year, 0, 1);
  let temp = tempdate.getDay();
  if (temp == 1) {
    return tempdate;
  }
  temp = temp == 0 ? 7 : temp;
  tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp));
  return new Date(tempdate);
}

/**
 * [getBeginDateOfWeek 获取某年某周的开始日期]
 * @param  {[type]} paraYear  [description]
 * @param  {[type]} weekIndex [description]
 * @return {[type]}           [description]
 */
export function getBeginDateOfWeek(paraYear, weekIndex) {
  var firstDay = GetFirstWeekBegDay(paraYear);
  //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
  var time = (weekIndex - 1) * 7 * 24 * 3600000;
  var beginDay = firstDay;
  //为日期对象 date 重新设置成时间 time
  beginDay.setTime(firstDay.valueOf() + time);
  return formatDate(beginDay);
}

/**
 * [getEndDateOfWeek 获取某年某周的结束日期]
 * @param  {[type]} paraYear  [description]
 * @param  {[type]} weekIndex [description]
 * @return {[type]}           [description]
 */
export function getEndDateOfWeek(paraYear, weekIndex) {
  var firstDay = GetFirstWeekBegDay(paraYear);
  //7*24*3600000 是一星期的时间毫秒数,(JS中的日期精确到毫秒)
  var time = (weekIndex - 1) * 7 * 24 * 3600000;
  var weekTime = 6 * 24 * 3600000;
  var endDay = firstDay;
  //为日期对象 date 重新设置成时间 time
  endDay.setTime(firstDay.valueOf() + weekTime + time);
  return formatDate(endDay);
}

/**
 * [showLoading 展示loading]
 * @return {[type]} [description]
 */
export function showLoading() {
  // 展示loading
  store.dispatch('common/showLoading', true)
}
/**
 * [clearLoading 清除全局loading]
 * @param  {[type]} _val [description]
 * @return {[type]}      [description]
 */
export function clearLoading() {
  // 清除loading
  store.dispatch('common/showLoading', false)
}

