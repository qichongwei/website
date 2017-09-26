/**
 * Created by qiwei on 2017/9/18.
 */

import React from 'react';
import { Link } from 'react-router';

export  default  class App extends React.Component{
    constructor(){
        super();
        this.scroll=this.scroll.bind(this);
    }
    componentWillMount() {
        function getViewportSize() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }
        let client = getViewportSize();
        let fontSize = client.width / 10;
        document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
    }
    componentDidMount(){
        function getViewportSize() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }
        let client = getViewportSize();
        let Size = client.height;
        document.getElementsByClassName('home')[0].style.height = Size + 'px';
    }

    scroll(event){
        console.log('qiwei');
        console.log(event);
        console.log(event.detail);
        console.log(this.refs.last);
        console.log(event.view);
    }
    render() {
        return (
            <div className="home" onScroll={this.scroll} >
                <div className="title">新闻头条</div>
                <div className="ulbox">
                <ul role="nav">
                    <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>头条</Link></li>
                    <li><Link to="/item/体育" activeClassName='active'>体育</Link></li>
                    <li><Link to="/item/新闻" activeClassName='active'>新闻</Link></li>
                    <li><Link to="/item/财经" activeClassName='active'>财经</Link></li>
                    <li><Link to="/item/娱乐" activeClassName='active'>娱乐</Link></li>
                    <li><Link to="/item/军事" activeClassName='active'>军事</Link></li>
                    <li><Link to="/item/教育" activeClassName='active'>教育</Link></li>
                    <li><Link to="/item/科技" activeClassName='active'>科技</Link></li>
                    <li><Link to="/item/NBA" activeClassName='active'>NBA</Link></li>
                    <li><Link to="/item/股票" activeClassName='active'>股票</Link></li>
                    <li><Link to="/item/星座" activeClassName='active'>星座</Link></li>
                    <li><Link to="/item/女性" activeClassName='active'>女性</Link></li>
                    <li><Link to="/item/健康" activeClassName='active'>健康</Link></li>
                    <li><Link to="/item/育儿" activeClassName='active'>育儿</Link></li>
                </ul>
                </div>
                {this.props.children}
            </div>
        )
    }
}