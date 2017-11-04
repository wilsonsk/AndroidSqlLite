import React from 'react';
import { View, Text } from 'react-native'

const Header = (props) => (
	<View style={styles.container}>
		<Text style={styles.content}>
			{props.author}: {props.appName}
		</Text>
	</View>
);

const styles = { 
	container: {
		flex: 0.25,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		backgroundColor: "#F8F8F8",
		minHeight: 5
	},
	content: {
		flex: 1
	}
}

export default Header; 
