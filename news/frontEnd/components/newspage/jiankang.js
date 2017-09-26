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
                });
            })
            .catch(function (error) {
                console.log(error);
            });

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