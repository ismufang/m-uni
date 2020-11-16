import Vue from 'vue'
import toast from './toast.vue';

let MyToastConstructor = Vue.extend(toast);
let instance;
const Toast = (option) => {
  // 创建实例并且过滤参数
  instance = new MyToastConstructor({
    data: { ...option }
  })
  // 挂载实例
  instance.$mount();
  
  let currNode = document.body.childNodes[document.body.childNodes.length-1];

  //实例去重
  if(currNode.className === instance.$el.className){
    currNode.remove()
  }
  
  document.body.appendChild(instance.$el);
  return instance;
};

export default Toast