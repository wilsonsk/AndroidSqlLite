/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button
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
		const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
				<FlatList
					style={styles.content}
					data={this.state.screenData}
					keyExtractor={item => item.activity}
					renderItem={({ item }) => 
						<View>  
							<Button onPress={() => navigate(item.activity)} title={item.title} />
						</View>}
				/>
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
  },
  content: {
	flex: 1,
  },
});
