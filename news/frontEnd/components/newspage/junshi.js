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
    state = {
        load: true,
        arr: [{
            category: "news",
            pic: "http://api.jisuapi.com/news/upload/201709/20230002_82040.png",
            src: "人民日报中央厨房",
            time: "2017-09-20 21:39",
            title: "媒体：校园“港独”愈演愈烈？ 兔子尾巴而已",
            url: "http://news.sina.cn/gn/2017-09-20/detail-ifykywuc8510962.d.html?vt=4&pos=108",
            weburl: "http://news.sina.com.cn/c/zs/2017-09-20/doc-ifykywuc8510962.shtml"
        }],
        qiwei:true
    };
    shouldComponentUpdate(){
        return
    }
    componentDidMount() {
        if(this.state.qiwei){
            console.log(this.state.qiwei);
        console.log(this.props.location.pathname);
        let query=this.props.location.pathname.slice(-2);
        axios.get(`http://localhost:4005/?channel=${query}&start=0`)
            .then((response) => {
                console.log(response);
                this.setState({
                    load: false,
                    arr: response.data,
                    qiwei:false
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }else {
            console.log('这是再次渲染');
        }
    }
    render() {
        return (
            <div className="newsbox">
                <Load load={this.state.load}/>
                {this.state.arr.map(function (elem, index, arr) {
                    return (
                        <News img={elem.pic} time={elem.time} title={elem.title} name={elem.src} href={elem.url}/>
                    )
                })}
            </div>
        )
    }
}