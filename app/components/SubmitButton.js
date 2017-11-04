import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { PermissionsAndroid } from 'react-native';

var SQLite = require('react-native-sqlite-storage')

export default class SubmitButton extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			buttonText: "Submit Message"
		}
        	db = SQLite.openDatabase('android-sqlite.db', SQLite.OPEN_READWRITE);
		db.executeSql('CREATE TABLE IF NOT EXISTS Messages( '
			+ 'geolocation FLOAT, '
			+ 'text VARCHAR(55));');
	}

	pressSubmit = () => {
		// Request location Permissions
		this.requestLocationPermission();


		// Extract location data
		
		// Extract text data from input component
		
		// insert both attributes of this object in Sqlite

	}

	async requestLocationPermission(){
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					'title': 'Test Permission Prompt',
					'message': 'Can this app have access to your location?' 
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				alert("You can use the location")
				this.getLocation();
			} else {
				alert("Camera permission location")
			}
		} catch (err) {
			console.warn(err)
		}
	}


	getLocation = () => {
		navigator.geolocation.getCurrentPosition((pos) => {
			alert("POSITION: " + JSON.stringify(pos));
		});
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
