import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import React,{Component} from 'react'
import {tickStart,tickStop,tickReset} from './actions/timer'
import {View,StyleSheet,Text} from 'react-native'

import MyButton from './mybutton'

function getElapsedTime(baseTime, startedAt, stoppedAt = new Date().getTime()) {
    if (!startedAt) {
      return 0+baseTime;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }
  
  class Timer extends Component {
    componentDidMount() {
      this.interval = setInterval(this.forceUpdate.bind(this), 100);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const { baseTime, startedAt, stoppedAt } = this.props;
      const elapsed = getElapsedTime(baseTime, startedAt, stoppedAt);
  
      console.log(this.props,elapsed)
      // call a function with () => {function} in line 35, MyButton
      return (
        <View style={styles.mainView}>
          <Text style={styles.textView}>Time: {elapsed/1000}</Text>
          <View style={styles.buttonView}>
            <MyButton text='Start' onPress={()=>{this.props.tickStart(elapsed)}} newColor='#ff0000' />
            <MyButton text='Stop' onPress={()=>{this.props.tickStop(elapsed)}} newColor='#ff0000' />
            <MyButton text='Reset' onPress={()=>{this.props.tickReset()}} newColor='#ff0000' />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    mainView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20
    },
    buttonView: {
      flexDirection: 'row',
      width: '100%',
      paddingTop: 20,
      paddingLeft: 20,
      paddingRight: 20,
      paddingBottom: 20,
      justifyContent: 'space-between'
    }
  });

  const mapStateToProps = (state) => {
    const { baseTime, startedAt, stoppedAt } = state.timer;
    return { baseTime, startedAt, stoppedAt };
  }

  const mapDispatchToProps = (dispatch) => ({
    tickStart: (elapsed) => dispatch(tickStart(elapsed)),
    tickStop: (elapsed) => dispatch(tickStop(elapsed)),
    tickReset: () => dispatch(tickReset())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Timer);