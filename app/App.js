/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';

// Import custom RN components
import InputScreen from './screens/InputScreen';

class HomeScreen extends Component<{}> {
	constructor(props){
		super(props);
		this.state = {
			screenData: [{activity: "Activity_1", title: "HomeScreen"}, {activity: "Activity_2", title: "InputScreen"}]
		}
	}

	static navigationOptions = {
		title: "HomeScreen",
	};

	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.content}>
					Test HomeScreen
				</Text>
			</View>

		);
	}
}

export default App = StackNavigator({ 
	Activity_1: {
		screen: HomeScreen
	},
	Activity_2: {
		screen: InputScreen
	}
});

const styles = StyleSheet.create({
  container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#F5FCFF',
  },
  content: {
	flex: 1,
  },
});
