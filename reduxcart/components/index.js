/**
 * Created by qiwei on 2017/10/9.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Item from './item';
import Footer from './footer';
export default  class Counter extends Component {
    render() {
        const {total,items, onIncreaseClick,checkClick,onReduceClick} = this.props;
        return (
            <div>
                <Header text="redux购物车"/>
                {items.map(function (elem, index, arr) {
                    return(<Item number={elem.number}onIncreaseClick={onIncreaseClick}thing={elem.thing}much={elem.much}onReduceClick={onReduceClick} checkClick={checkClick} key={"item"+index} checked={elem.checked}index={index}/>);
                })}
            <Footer total={total}/>
            </div>
        )
    }
}

Counter.propTypes = {
    total: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired

};