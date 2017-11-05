import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
var SQLite = require('react-native-sqlite-storage');
let db;

class Instructions extends Component<{}>{
	componentWillMount(){
		db = SQLite.openDatabase('android-sqlite.db', SQLite.OPEN_READWRITE);
		alert(db);
	}

	render(){
		return(	
			<View style={styles.container}>
				<Text style={styles.content}>
					{this.props.text}
				</Text>
				<FlatList style={styles.content}>
				
				</FlatList>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 3,
		flexDirection: 'column',
		backgroundColor: '#dc4405',
		alignSelf: 'stretch'
	},

	content: {
		flex: 1,
		fontSize: 25,
		textAlign: 'center',
	}
});

export default Instructions;
