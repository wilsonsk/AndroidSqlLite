import React, { Component } from 'react';
import { 
	View, 
	Button, 
	Text, 
	StyleSheet 
} from 'react-native';

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
	}

	static navigationOptions = {
		title: "InputScreen",	
	};

	render(){
		return(
			<View style={styles.container}>
				<Header style={styles.content} author={projData.author} appName={projData.appName} /> 
				<Instructions style={styles.content} text={instructions.text} />
				<SubmitButton style={styles.content} />
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
