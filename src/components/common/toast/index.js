import Toast from './toast';

const obj = {};
obj.install = function (Vue) {
  const Constructor = Vue.extend(Toast);

  const toast = new Constructor();

  toast.$mount(document.createElement('div'));
  
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;

}

export default obj;