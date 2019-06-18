//actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
export const increment = ({ commit },num1) => commit('increment',num1)
export const decrement = ({ commit },num2) => commit('decrement',num2)
export const setValue = ({ commit }) => commit('setValue')
