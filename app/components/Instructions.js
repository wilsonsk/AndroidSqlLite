import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Instructions = (props) => (
	<View style={styles.container}>
		<Text style={styles.content}>
			{props.text}
		</Text>
	</View>
);

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
