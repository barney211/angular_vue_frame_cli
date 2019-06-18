// 状态值的改变方法,操作状态值
// 提交mutations是更改Vuex状态的唯一方法
export const increment = (state,num1) => {
  state.count = state.count + num1
}

export const decrement = (state,num2)=> {
  state.count=state.count-num2
}

export const setValue = (state)=> {
  state.count=6
}
