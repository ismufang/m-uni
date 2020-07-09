/**
 * 这是公共方法集合
 */

export default {
    add(...args){
        return args.reduce((t, v) => t + v, 0)
    }
}