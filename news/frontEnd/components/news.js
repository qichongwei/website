/**
 * Created by qiwei on 2017/9/20.
 */
import React from 'react'
 export default  class Item extends React.Component {
    // es6默认props写法
    // static defaultProps = {
    //     autoPlay: false,
    //     maxLoops: 10,
    //     videoSrc: 'qiwei'
    // };
    // es6默认propsTypes写法
    // static propTypes = {
    //     autoPlay: React.PropTypes.bool.isRequired,
    //     maxLoops: React.PropTypes.number.isRequired,
    //     videoSrc: React.PropTypes.string.isRequired,
    // };
    // es6默认state写法
    // state = {
    //     change: this.props.maxLoops,
    //     source: 'qijiayin',
    //     qijiayin: false
    // };
    render(){
<<<<<<< HEAD
        return(<a className="box clear" href={this.props.href} id={this.props.id}>
=======
        return(<a className="box clear" href={this.props.href}>
>>>>>>> a3ae2206b59abe2ac5291c5f748096659dd34969
            <img className="image" src={this.props.img}/>
            <div className="text">{this.props.title}
                <p>
                    <span className='source'>{ this.props.name}</span>
                    <span className='comment'>{this.props.time}</span>
                </p>
            </div>
        </a>)
    }
}