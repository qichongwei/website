/**
 * Created by qiwei on 2017/10/9.
 */
import { createStore,combineReducers } from 'redux';
import item from './item';
import checkall from './checkAll';
// function counter(state = { count: 0 }, action) {
//     const count = state.count;
//     switch (action.type) {
//         case 'increase':
//             return { count: count + 1 };
//         default:
//             return state
//     }
// }
const todo=combineReducers({
    item ,
    checkall
});
// Store
const store = createStore(todo);
console.log(store.getState());
export default store;