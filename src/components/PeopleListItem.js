import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import capitalizeFirstLetter from  '../util/capitalizeFirstLetter.js';

const PeopleListItem = props => {
    const { people } = props;
    const { first, last, title } = people.name;
    return(
            <View style={styles.line}>
                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(title)} ${
                        capitalizeFirstLetter(first)} ${
                        capitalizeFirstLetter(last)}` }
                </Text>
            </View>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb",
        flexDirection: 'row',
        alignItems: 'center', 
    },
    lineText:{
        fontSize: 20,
        paddingLeft: 15,
    }
});

export default PeopleListItem;