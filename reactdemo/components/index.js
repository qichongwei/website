/**
 * Created by qiwei on 2017/10/16.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
class StepOne extends Component {
    render() {
        return (
            <div className={this.props.update ? 'stepOneBox' : 'steponebox'}>
                <div className="stepOne">{this.props.name}</div>
                <div className="stepOneArrow"></div>
            </div>
        )
    }
}
StepOne.propTypes = {
    name: PropTypes.string.isRequired,
    update: PropTypes.bool.isRequired
};
class StepTwo extends Component {
    render() {
        return (
            <div className={this.props.update ? 'stepTwoBox' : 'steptwobox'}>
                <div className="stepTwo">{this.props.name}</div>
                <div className="stepTwoArrowL"></div>
                <div className="stepTwoArrowR"></div>
            </div>
        )
    }
}
StepTwo.propTypes = {
    name: PropTypes.string.isRequired,
    update: PropTypes.bool.isRequired
};
class StepThree extends Component {
    render() {
        return (
            <div className={this.props.update ? 'stepThreeBox' : 'stepthreebox'}>
                <div className="stepThree">{this.props.name}</div>
                <div className="stepThreeArrow"></div>

            </div>
        )
    }
}
StepThree.propTypes = {
    name: PropTypes.string.isRequired,
    update: PropTypes.bool.isRequired
};
const StepStop=(props)=>{
    return <div className="stepStop">{props.name}</div>
};

export default  class Box extends Component {
    state = {
        list: [
            {name: "草稿", status: "WAIT_ACCEPT", isShadowed: true,isCurrentStatus: false},
            {name: "待发货", status: "WAIT_DELIVER", isShadowed: true, isCurrentStatus: true},
            {name: "验货入库", status: "STOCK_IN"},
            {name: "已完成", status: "DELIVERED",isShadowed: true, isCurrentStatus: false}
        ]
    };
    button(list=[{"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},{"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},{"name":"验货入库","status":"STOCK_IN"},{"name":"已完成","status":"DELIVERED"}]){
        this.setState({
            list: list
        })
    }
    render() {
        //传入数组长度为1，返回状态
        if (this.state.list.length == 1) {
            return (
                <div>
                <div className="stepBox">
                    <StepStop name="已中止"/>
                </div>
                    <div onClick={()=>{
                        this.button();
                    }} className="btn">运行状态</div>
                    <div onClick={()=>{
                        this.button( [
                            {name: "草稿", status: "WAIT_ACCEPT", isShadowed: true,isCurrentStatus: false}
                        ]);
                    }} className="btn">中止状态</div>
                </div>
            )
        }
        return (
            <div>
            <div className="stepBox">
                <StepOne name={this.state.list[0].name} status={this.state.list[0].status}
                         update={this.state.list[0].isShadowed && this.state.list[0].isCurrentStatus}/>
                <StepTwo name={this.state.list[1].name} status={this.state.list[1].status}
                         update={this.state.list[1].isShadowed && this.state.list[1].isCurrentStatus}/>
                <StepTwo name={this.state.list[2].name} status={this.state.list[2].status}
                         update={this.state.list[2].isShadowed && this.state.list[2].isCurrentStatus}/>
                <StepThree name={this.state.list[3].name} status={this.state.list[3].status}
                         update={this.state.list[3].isShadowed && this.state.list[3].isCurrentStatus}/>
            </div>
                <div onClick={()=>{
                    this.button();
                }} className="btn">运行状态</div>
                <div onClick={()=>{
                    this.button( [
                        {name: "草稿", status: "WAIT_ACCEPT", isShadowed: true,isCurrentStatus: false}
                    ]);
                }} className="btn">中止状态</div>
            </div>
        )
    }
}