import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Instructions extends Component<{}>{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.content}>
					Type in a message to save to SqlLite
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},

	content: {
		flex: 1,
		fontSize: 25
	}
});
