/**
 * Created by qiwei on 2017/10/9.
 */
import { Provider, connect } from 'react-redux';
import Cart from './components/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {IncreaseClick ,checkClick,ReduceClick,checkAll}from  './action/index';
// import increaseAction1 from  './action/index1';
import store from './reducer/index';
console.log(IncreaseClick);
// Map Redux state to component props
function mapStateToProps(state) {
    let total=0,checkAll;
    for(let i=0;i<state.item.length;i++){
        total=total+state.item[i].muchnum*state.item[i].number*state.item[i].checked;
    }
    all:for(let i=0;i<state.item.length;i++){
        if(!state.item[i].checked){
            checkAll=0;
            break all;
        }else{
            checkAll=1;
        }
    }
    return {
        total: total,
        items: state.item,
        checkAll:checkAll
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: (e) => {
            console.log(e.target.getAttribute('data'));
            IncreaseClick.index=e.target.getAttribute('data');
            console.log(IncreaseClick);
            dispatch(IncreaseClick)
        },
        checkClick: (e) => {
            console.log(e.target.getAttribute('data'));
            checkClick.index=e.target.getAttribute('data');
            console.log(checkClick);
            dispatch(checkClick)
        },
        onReduceClick:(e) => {
            console.log(e.target.getAttribute('data'));
            ReduceClick.index=e.target.getAttribute('data');
            console.log(ReduceClick);
            dispatch(ReduceClick);
        },
        onCheckAll:() => {
            dispatch(checkAll);
        },
    }
}
// Connected Component
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

ReactDOM.render(
<Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('app')
);