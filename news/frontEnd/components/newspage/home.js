/**
 * Created by qiwei on 2017/9/18.
 */
import React from 'react'
import axios from 'axios';
import News from '../news';
class Home extends React.Component {
    // es6默认props写法
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
        videoSrc: 'qiwei'
    };
    // es6默认propsTypes写法
    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    };
    // es6默认state写法
    state = {
        change: this.props.maxLoops,
        qiwei: 'qijiayin',
        qijiayin: false
    };
    // 组件将要挂载
    componentWillMount() {
        console.log('组件将挂载');
        function getViewportSize() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            };
        }

        var client = getViewportSize();
        var fontSize = client.width / 10;
        document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
        let cookies = document.cookie.split(';');
        console.log(cookies);
        this.setState({
            qiwei: cookies[0] || 123
        });
    }

    // 组件已经挂载
    componentDidMount() {
        console.log('组件以挂载');
        let c = document.getElementsByClassName('load');
        c[0].style.display = 'none';
        console.log('现在已经隐藏了');
    }

    handle() {
        console.log('改变state');
        this.setState({
            change: 20,
        });
    }

    handle1() {
        this.setState({
            qijiayin: true,
        });
        console.log('改变state1');
    }

    shouldComponentUpdate() {

        return this.state.qijiayin
    }

    render() {
        console.log('zhelishi render');
        return (
            <div>

                <Item/>
                <Item/>
            </div>)
    }

}
class Item extends React.Component {
    // es6默认props写法
    static defaultProps = {
        autoPlay: false,
        maxLoops: 10,
        videoSrc: 'qiwei'
    };
    // es6默认propsTypes写法
    static propTypes = {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    };
    // es6默认state写法
    state = {
        change: this.props.maxLoops,
        source: 'qijiayin',
        qijiayin: false
    };
<<<<<<< HEAD

    render() {
        return (<a className="box clear">
=======
    render(){
        return(<a className="box clear">
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
            <img className="image" src=""/>
            <div className="text">{this.props.videoSrc}
                <p>
                    <span className='source'>{ this.state.source}</span>
                    <span className='comment'>{`${this.props.maxLoops}评论`}</span>
                </p>
            </div>
        </a>)
    }
}
class Demo extends React.Component {
    // es6默认props写法
    static defaultProps = {};
    // es6默认propsTypes写法
    static propTypes = {
        Bool: React.PropTypes.bool.isRequired,
        Number: React.PropTypes.number.isRequired,
        String: React.PropTypes.string.isRequired,
    };
    // es6默认state写法
    state = {};
    // 组件将要挂载
    componentWillMount() {

    }

    // 组件已经挂载
    componentDidMount() {

    }

    // 组件是否更新
    shouldComponentUpdate() {

    }

    // render函数必须返回
    render() {

    }

}
// export {Home,Item};
import Load from '../load';

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
        axios.get(`http://localhost:4005/?channel=%E5%A4%B4%E6%9D%A1&start=${number}`)
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
        console.log(this.props.location);
        let number=this.state.num;
        let arr=this.state.arr;
        axios.get(`http://localhost:4005/?channel=%E5%A4%B4%E6%9D%A1&start=${number}`)
            .then( (response)=> {
                console.log(response);
                let arr1=arr.concat(response.data);
                this.setState({
                    load:false,
                    arr: arr1,
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
<<<<<<< HEAD
            <div className="newsbox">
                <Load load={this.state.load}/>
                {this.state.arr.map(function (elem, index, arr) {
                    if (index == arr.length - 1) {
                        console.log('证明我执行了last');
                        return (
                            <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src}
                                  key={'item' + index} id="last"/>
=======
            <div className="newsbox" >
                <Load load={this.state.load}/>
                {this.state.arr.map(function (elem, index, arr) {
                    if(index==arr.length-1){
                        console.log('证明我执行了last');
                        return (
                            <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} key={'item'+index} ref="last"/>
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
                        )
                    }
                    console.log('证明我执行');
                    return (
<<<<<<< HEAD
                        <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} key={'item' + index}/>
=======
                        <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} key={'item'+index}/>
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
                    )
                })}
            </div>
        )
    }
}