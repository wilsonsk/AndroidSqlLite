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
			+ 'longitude FLOAT, '
			+ 'latitude FLOAT, '
			+ 'text VARCHAR(55));');
	}

	pressSubmit = () => {
		// Request location Permissions
		// Refactored using promises
		this.requestLocationPermissions();
	}


	requestLocationPermissions = () => {
		var granted = new Promise((resolve, reject) => {
			this._requestLocationPermissions(resolve, reject);
		});

		granted.then(() => {
			alert(`State after Sql Push: ${JSON.stringify(this.state)}`);
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
				// Extract location data
				// and insert both attributes of this object in Sqlite
				this.getAndPutSqlite(res);
				// resolve promise

			} else {
				alert("Rejected: Location permission rejected");
				// reject promise
				rej();
			}
		} catch (err) {
			console.warn(err)
		}
	}


	getAndPutSqlite = (res) => {
		navigator.geolocation.getCurrentPosition((pos) => {
			this.setState({longitude: pos.coords.longitude});
			this.setState({latitude: pos.coords.latitude});
			sql_longitude = JSON.stringify(this.state.longitude);
			sql_latitude = JSON.stringify(this.state.latitude);
			sql_text = JSON.stringify(this.state.text);
			db.executeSql('INSERT INTO Messages (longitude, latitude, text) VALUES (' + sql_longitude + ', ' + sql_latitude + ', ' + sql_text + ');'); 
			res();
		});
	}

	showEntry = (obj) => {
		alert(`test: ${JSON.stringify(obj)}`);	
		
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
