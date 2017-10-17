/**
 * Created by qiwei on 2017/10/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Footer extends Component{
    render(){
        const{total}=this.props;
        return(<div className="footer">
            <p><span>总计：</span><span className="total">{total}</span></p>
        </div>)
    }
}
Footer.PropTypes={
    total: PropTypes.number.isRequired,
};