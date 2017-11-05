import React, { Component }  from 'react';
import { View, Text } from 'react-native';

// import custom RN components

export default class ResultsScreen extends Component <{}> {
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.content}>
					This is a test screen 
				</Text>
			</View>
		);
	}

}

const styles = {
	container: {
		flex: 1
	},
	content: {
		flex: 1
	}
};
