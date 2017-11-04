import React from 'react';
import { View, Text } from 'react-native';

const Footer = (props) => (
	<View style={styles.container}>
		<Text style={styles.content}>
			{props.text}
		</Text>
	</View>
);

const styles = {
	container: {
		flex: 0.25,
		flexDirection: 'row',
		minHeight: 5
	},
	content: {
		flex: 1
	}
};

export default Footer;
