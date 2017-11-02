import React, { Component } from 'react';
import { 
	View, 
	Button, 
	Text, 
	StyleSheet 
} from 'react-native';

import Instructions from '../components/Instructions';
import SubmitButton from '../components/SubmitButton';

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
				<Instructions />
				<SubmitButton />
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
