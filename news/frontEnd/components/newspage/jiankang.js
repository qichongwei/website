/**
 * Created by qiwei on 2017/9/18.
 */
import React from 'react';
import {Link} from 'react-router';
import Load from '../load';
import News from '../news';
import axios from 'axios';

export  default  class App extends React.Component {
    // es6默认state写法
<<<<<<< HEAD
    constructor() {
        super();
        this.last=undefined;
        this.lastIndex=undefined;
        this.scrollTop=0;
        this.clientHeight=undefined;
        this.time = true;
        this.load = false;
        this.ajax=true;
        this.scroll = this.scroll.bind(this);
    }
    state = {
        load: true,
        arr: [],
        num: 0
    };

    componentDidMount() {
        let number = this.state.num;
        let arr = this.state.arr;
        console.log(this.props.location.pathname);
        let query=this.props.location.pathname.slice(-2);
        axios.get(`http://localhost:4005/?channel=${query}&start=${number}`)
            .then((response) => {
                console.log(response);
                let arr1 = arr.concat(response.data);
                this.setState({
                    load: false,
                    arr: arr1,
                    num: number + 10
=======
    state = {
        load: true,
        arr: [],
        num:0
    };

    componentDidMount() {
        console.log(this.props.location.pathname);
        let query=this.props.location.pathname.slice(-2);
        let number=this.state.num;
        axios.get(`http://localhost:4005/?channel=${query}&start=${number}`)
            .then((response) => {
                console.log(response);
                this.setState({
                    load: false,
                    arr: this.state.arr.push(response.data),
                    num:number+10
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
                });
            })
            .catch(function (error) {
                console.log(error);
            });
<<<<<<< HEAD
        function getViewportSize() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }

        let client = getViewportSize();
        let Size = client.height;
        document.getElementsByClassName('newsbox')[0].style.height = Size-80 + 'px';
        document.getElementsByClassName('newsbox')[0].addEventListener('scroll', this.scroll);

    }

    scroll(event) {
        if (!this.last) {
            this.last = document.getElementById('last');
        }
        if (!this.lastIndex) {
            function getPosition(obj) {
                let topValue = 0, leftValue = 0;
                while (obj) {
                    leftValue += obj.offsetLeft;
                    topValue += obj.offsetTop;
                    obj = obj.offsetParent;
                }
                return topValue;
            }

            this.lastIndex = getPosition(this.last);
        }
        this.scrollTop = document.getElementsByClassName('newsbox')[0].scrollTop;
        if (!this.clientHeight) {
            function getViewportSize() {
                return {
                    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                };
            }

            let client = getViewportSize();
            this.clientHeight = client.height;
        }
        if (this.time&&this.ajax) {
            if (this.clientHeight + this.scrollTop >= this.lastIndex - 100) {
                this.load = true;
            }
            this.time = false;
            console.log(this.time);
            let that=this;
            setTimeout(function () {
                that.time = true;
                console.log('settimeout');
                console.log(that);

            }, 300);
            console.log('我0.3秒执行一次');
        }
        if (this.load) {
            this.load=false;
            this.ajax=false;
            console.log(this.load);
            console.log('执行ajax请求');
            let number = this.state.num;
            let arr = this.state.arr;
            let that=this;
            axios.get(`http://localhost:4005/?channel=%E5%A4%B4%E6%9D%A1&start=${number}`)
                .then((response) => {
                    console.log(response);
                    let arr1 = arr.concat(response.data);
                    this.setState({
                        load: false,
                        arr: arr1,
                        num: number + 10
                    });
                    that.ajax=true;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        console.log(this.lastIndex);
        console.log(this.scrollTop);
=======
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969

    }

    render() {
        return (
            <div className="newsbox">
                <Load load={this.state.load}/>
                {this.state.arr.map(function (elem, index, arr) {
<<<<<<< HEAD
                    if (index == arr.length - 1) {
                        console.log('证明我执行了last');
                        return (
                            <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src}
                                  key={'item' + index} id="last"/>
                        )
                    }
                    console.log('证明我执行');
                    return (
                        <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} key={'item' + index}/>
=======
                    return (
                        <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} href={elem.url}/>
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
                    )
                })}
            </div>
        )
    }
}