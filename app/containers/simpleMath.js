import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mathActions from '../actions/simpleMath';
import SimpleMathComponent from '../components/SimpleMathComponent';

class SimpleMath extends Component {

  render() {
    const { state, actions } = this.props;
    console.log(state);
    return (
      <SimpleMathComponent
        number1={state.number1}
        number2={state.number2}
        result={state.result}
        {...actions}
      />
    );
  }
}

const mapStateToProps = state => ({
  state: state.simpleMath
});

const actionCreators = dispatch => ({
  actions: bindActionCreators(mathActions, dispatch)
});

export default connect(mapStateToProps, actionCreators)(SimpleMath);
