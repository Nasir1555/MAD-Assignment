
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RedSteps = () => {
    return (
        <View style={styles.wrapper}>
            <View style={{flexDirection:'column'}}>
                <View style={styles.box}/>
                <View style={styles.box}/>
                <View style={styles.box}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={styles.box}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={styles.box}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
            </View>
            <View style={{flexDirection:'column'}}>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={styles.box}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={styles.box}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={styles.box}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={styles.box}/>
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={styles.box}/>
                <View style={[styles.box, {backgroundColor: 'red'}]}/>
                <View style={styles.box}/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    wrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1,
        backgroundColor: '#2c3e50',
    },
    box: {
        width:25,
        height:25,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 0.1
    }
});
export default RedSteps;
