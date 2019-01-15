import * as types from './mutation-types'
const matations = {
  /**
   * @param {*} state 当前状态数
   * @param {*} data 提交matations时传入的参数
   */
  [types.TEST] (state, data) {
    state.TEST = data
  }
}
export default matations
