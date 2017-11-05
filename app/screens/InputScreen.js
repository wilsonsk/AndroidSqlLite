import React, { Component } from 'react';
import { 
	View, 
	Button, 
	Text, 
	StyleSheet 
} from 'react-native';
var SQLite = require('react-native-sqlite-storage');

import Instructions from '../components/Instructions';
import SubmitButton from '../components/SubmitButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

const instructions = {
	text: "Type a message to send to SqLite"
};

const projData = {
	author: "Sky Wilson",
	appName: "AndroidUI SqLite",
	footer: "Oregon State University: CS496"
};

export default class InputScreen extends Component<{}>{
	constructor(props){
		super(props);
		this.handleResUpdate = this.handleResUpdate.bind(this);
		this.state = {
			newData: false,
			queryRes: []
		}
	}

	componentWillMount(){
		this.getData();
	}

	getData(){
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

	static navigationOptions = {
		title: "InputScreen",	
	};

	handleResUpdate(){
		alert('parent state change triggered');
		//this.setState({ newData: true });
		this.getData();
	}

	render(){
		return(
			<View style={styles.container}>
				<Header style={styles.content} author={projData.author} appName={projData.appName} /> 
				<Instructions style={styles.content} text={instructions.text} newData={this.state.queryRes} />
				<SubmitButton style={styles.content} handler={this.handleResUpdate}/>
				<Footer style={styles.content} text={projData.footer} />
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
