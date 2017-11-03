import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

var SQLite = require('react-native-sqlite-storage')

export default class SubmitButton extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			buttonText: "Submit Message"
		}
	}

	pressSubmit = () => {
        	db = SQLite.openDatabase('android-sqliteNew.db', SQLite.OPEN_READWRITE);
		db.executeSql('CREATE TABLE IF NOT EXISTS Messages( '
			+ 'geolocation FLOAT, '
			+ 'text VARCHAR(55));');
	}

	render(){
		return(
			<View style={styles.container}>
				<Button onPress={this.pressSubmit} style={styles.content} title={this.state.buttonText} /> 
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
