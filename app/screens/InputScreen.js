import React, { Component } from 'react';
import { 
	View, 
	Button, 
	Text, 
	StyleSheet 
} from 'react-native';

export default class InputScreen extends Component<{}>{
	constructor(props){
		super(props);
	}

	static navigationOptions = {
		title: "InputScreen",	
	};

	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.content}>
					TEST InputScreen
				</Text>
			</View>

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	content: {
		flex: 1
	}
});
