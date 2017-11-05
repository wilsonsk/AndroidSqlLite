import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
var SQLite = require('react-native-sqlite-storage');

class Instructions extends Component<{}>{
	constructor(props){
		super(props);
		this.state = {
			queryRes: []
		}
	}
	componentWillMount(){
		db = SQLite.openDatabase('android-sqlite.db', SQLite.OPEN_READWRITE);
		db.executeSql('CREATE TABLE IF NOT EXISTS Messages( '
			+ 'longitude FLOAT, '
			+ 'latitude FLOAT, '
			+ 'text VARCHAR(55));');

		db.transaction((tx) => {
			tx.executeSql('SELECT * FROM Messages', [], (tx, res, err) => {
				if(res){
					var len = res.rows.length;
					for (let i = 0; i < len; i++){
						let tuple = res.rows.item(i);
						this.state.queryRes.push(`Longitude: ${JSON.stringify(tuple.longitude)}, Latitude: ${JSON.stringify(tuple.latitude)}, Message: ${JSON.stringify(tuple.text)}`);
						this.setState(this.state);
					}
				}else{
					alert('err ' + err);
				}
			});
		});
	}

	render(){
		return(	
			<View style={styles.container}>
				<Text style={styles.content}>
					{this.props.text}
				</Text>
				<FlatList 
					style={styles.content}
					data={this.state.queryRes}
					renderItem={({ item }) =>
						<View>
							<Text>
								{item}
							</Text>
						</View>
					}
				/>
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
	}
});

export default Instructions;
