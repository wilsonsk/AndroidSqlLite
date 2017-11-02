import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class SubmitButton extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			buttonText: "Submit Message"
		}
	}

	render(){
		return(
			<View style={styles.container}>
				<Button style={styles.content} title={this.state.buttonText} /> 
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { 
		flex: 1
	},
	content: {
		flex: 1
	}
});
