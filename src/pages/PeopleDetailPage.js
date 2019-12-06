import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';




export default class PeopleDetailPage extends React.Component{
    render(){

        const { people } = this.props.navigation.state.params;

        return(
            <View
                style = {styles.container}
            >
                <Image 
                    source ={{ uri: people.picture.large }}
                    style={styles.avatar}
                />
                <View style = {styles.detailContainer}>
                    <View style={styles.line}>
                      <Text style={styles.cell}>Email: </Text>
                      <Text style={styles.cell}>{people.email}</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create(
    {
        container:{
            padding: 15,
        },
        avatar: {
            aspectRatio: 1,
        },
        detailContainer:{
            backgroundColor: '#e2f9ff',
            marginTop: 20,
            elevation: 1,
        },
        line:{

        },
        cell:{
            
        }
        
    }
);