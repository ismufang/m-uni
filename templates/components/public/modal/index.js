import Vue from 'vue'
import modal from './modal.vue';

let MyModalConstructor = Vue.extend(modal);
let instance;
const Modal = (option) => {
  // 创建实例并且过滤参数
  instance = new MyModalConstructor({
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

export default Modal