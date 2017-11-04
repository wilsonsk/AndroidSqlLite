import React, { Component } from 'react';
import { PermissionsAndroid, TextInput, StyleSheet, View, Button } from 'react-native';

var SQLite = require('react-native-sqlite-storage')

export default class SubmitButton extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			buttonText: "Submit Message",
			granted: false
		}
        	db = SQLite.openDatabase('android-sqlite.db', SQLite.OPEN_READWRITE);
		db.executeSql('CREATE TABLE IF NOT EXISTS Messages( '
			+ 'geolocation FLOAT, '
			+ 'text VARCHAR(55));');
	}

	pressSubmit = () => {
		// Request location Permissions
		// Refactored using promises
		this.requestLocationPermissions()
	}


	requestLocationPermissions = () => {
		var granted = new Promise((resolve, reject) => {
			this._requestLocationPermissions(resolve, reject);
		});

		granted.then(() => {

			// Extract location data
			this.getLocation();
				
			// Extract text data from input component
			this.getText();
				
			// insert both attributes of this object in Sqlite
		});
		granted.catch((err) => {
			alert('something is wrong with promise');
		});
	}

	async _requestLocationPermissions(res, rej){
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					'title': 'Test Permission Prompt',
					'message': 'Can this app have access to your location?' 
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				alert("Resolved: You can use the location");
				// resolve promise
				res();

			} else {
				alert("Rejected: Location permission rejected");
				// reject promise
				rej();
			}
		} catch (err) {
			console.warn(err)
		}
	}


	getLocation = () => {
		navigator.geolocation.getCurrentPosition((pos) => {
			this.setState({pos});
			alert("POSITION: " + JSON.stringify(this.state.pos));
		});
	}

	getText = () => {
		alert(this.state.text);
	}

	render(){
		return(
			<View style={styles.container}>
				<TextInput
					style={styles.content}
					onChangeText={(text) => this.setState({text})}
					value={this.state.text}
				/>
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
