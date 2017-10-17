/**
 * Created by qiwei on 2017/10/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const Todo = (props) => (
    <div className='header'
        style={{color:'red'}}
    >
        {props.text}
    </div>
);
export  default Todo;