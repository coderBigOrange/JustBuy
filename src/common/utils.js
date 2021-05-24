//节流
export function throttle (callback, wait = 1000) {
  let timeout;
  return function () {
    let contex = this;
    let args = arguments;
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        callback.apply(contex, args)
      }, wait)
    }
  }
}
//防抖
export function debounce(callback, wait = 50) {
  let timer = null;
  return function () {
    let contex = this;
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      callback.apply(contex, args)
    }, wait)
  }
}
//将图片url和可能的title信息整合，便于使用
export function dealImage (imgUrl, titleArr) {
  let urlArr = imgUrl.split('\n').slice(1, -1);

  return urlArr.map((url, index) => {
    return {
      'image': url,
      'title': titleArr ? titleArr[index] : ''
    };
  })
}