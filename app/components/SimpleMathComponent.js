import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Input, Header, Button } from '../components/common';

class SimpleMathComponent extends Component {
  render() {
    const { number1,
      updateNumber1,
      number2,
      updateNumber2,
      calculateAll,
      result
    } = this.props;
    return (
      <View>
        <Header headerText={'Simple Math App'} />
        <Input
          label="Number1"
          placeholder="XXX"
          onChangeText={(e) => updateNumber1(e)}
          value={number1}
        />
        <Input
          label="Number2"
          placeholder="XXX"
          onChangeText={(e) => updateNumber2(e)}
          value={number2}
        />
        <Button onPress={calculateAll}>
          Calculate
        </Button>
        { result.length !== 0 ?
          <View>
            <Text>Solution=</Text>
            <Text>{number1}+{number2}={result[0]}</Text>
            <Text>{number1}-{number2}={result[1]}</Text>
            <Text>{number1}*{number2}={result[2]}</Text>
            <Text>{number1}/{number2}={result[3]}</Text>
          </View> :
          <Text />
        }
      </View>
    );
  }
}

export default connect()(SimpleMathComponent);
