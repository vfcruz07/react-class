import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {capitalizeFirstLetter} from  '../util';

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { first, last, title } = people.name;
    return(
        <TouchableOpacity
            onPress={() => {
                //alert('Clicou em mim, ' + first);
                navigateToPeopleDetail({people});
            }
        }
        >
            <View style={styles.line}>
                <Image style={styles.avatar} source={{uri:people.picture.thumbnail}}></Image>
                <Text style={styles.lineText}>
                    { `${
                        capitalizeFirstLetter(title)} ${
                        capitalizeFirstLetter(first)} ${
                        capitalizeFirstLetter(last)}` }
                </Text>
            </View>
        </TouchableOpacity>
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
        flex: 7,
        fontSize: 20,
        paddingLeft: 15,
    },
    avatar: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 50,
        marginLeft: 15
    }
});

export default PeopleListItem;