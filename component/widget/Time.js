import React , { Component }from 'react';
import css from'../../static/Time.scss'
export default class Time extends Component {

    constructor(props){
        super(props)
        this.state = {
            day : 0 ,
            hour : 0 ,
            min : 0,
            sec :0
        }
    }

    componentDidMount() {
        this.countFun(1545815405000);
    }

    countFun = (time) => {
        let end_time = new Date(time).getTime(),
        sys_second = (end_time - new Date().getTime());
        this.timer = setInterval(() => {

        //防止倒计时出现负数
          if (sys_second > 1000) {
            sys_second -= 1000;
            let day = Math.floor((sys_second / 1000 / 3600) / 24);
            let hour = Math.floor((sys_second / 1000 / 3600) % 24);
            let minute = Math.floor((sys_second / 1000 / 60) % 60);
            let second = Math.floor(sys_second / 1000 % 60);
            this.setState({
              day:day < 10 ? "0" + day : day,
              hour:hour < 10 ? "0" + hour : hour,
              min:minute < 10 ? "0" + minute : minute,
              sec:second < 10 ? "0" + second : second
            })
          } else {
            clearInterval(this.timer);
            //倒计时结束时触发父组件的方法
            //this.props.timeEnd();
          }
        }, 1000);
      }


    render(){
        return (
            <div className = {css.time_parent}>
            <span className = {css.time_style}>{this.state.day}</span>
            <span className = {css.m_style}> : </span>
            <span className = {css.time_style}>{this.state.hour}</span>
            <span className = {css.m_style}> : </span>
            <span className = {css.time_style}>{this.state.min}</span>
            <span className = {css.m_style}> : </span>
            <span className = {css.time_style}>{this.state.sec}</span>
            </div>
            )
    }
}