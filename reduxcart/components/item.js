/**
 * Created by qiwei on 2017/10/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export  default  class Item extends  Component {
    render() {
        const {number,onIncreaseClick,thing,much,onReduceClick,checkClick,checked,index} = this.props;
        return (
            <div className="item">
                <div className="check">
                    <div className={checked ? 'checked':'qiwei'} onClick={checkClick} data={index}></div>
                </div>
                <div className="thing">
                    <p className="name">{thing}</p>
                    <p className="much">{much}</p>
                    <div className="number">
                        <div onClick={onReduceClick}data={index}>-</div>
                        <div>{number}</div>
                        <div onClick={onIncreaseClick}data={index}>+</div>
                    </div>
                </div>

            </div>
        )
    }
}
Item.propTypes={
    number: PropTypes.number.isRequired,
    thing: PropTypes.string.isRequired,
    much:PropTypes.string.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    checkClick:PropTypes.func.isRequired,
    onReduceClick:PropTypes.func.isRequired
}
