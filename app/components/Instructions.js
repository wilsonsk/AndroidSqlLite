import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
var SQLite = require('react-native-sqlite-storage');

class Instructions extends Component<{}>{
	constructor(props){
		super(props);
	}

	_uniqueKey(){
		return '_' + Math.random().toString(36).substr(2, 9);
	}

	render(){
		return(	
			<View style={styles.container}>
				<Text style={styles.instructions}>
					{this.props.text}
				</Text>
				<FlatList 
					style={styles.content}
					extraData={this.props}
					keyExtractor={item => this._uniqueKey()}
					data={this.props.newData}
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
	},
	instuctions: {
		flex: 1,
		maxHeight: 12,
	}

});

export default Instructions;
