/**
 * Created by qiwei on 2017/9/19.
 */
import React from 'react';
export  default  class Load extends React.Component{
    render(){
        if(this.props.load){
        return (
        <div className="load">
            <div className="loadbox">
                <div className="loadimg"></div>
                <div className="loadimg1"></div>
            </div>
        </div>
        )}else {
            return null;
        }
    }
}