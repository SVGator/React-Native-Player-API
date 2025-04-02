import React from 'react';
import {View} from '../components/Themed';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import ExternalSmall from '../components/fixes/External';
import TestRobotExternal from '../components/fixes/Test-Robot-External';
import RocketTestExternal from '../components/fixes/Rocket-Test-External';

export default function Fixes() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <TestRobotExternal width={'100%'} height={150} title={'Robot, width:"100%", height: 150'} />
                <ExternalSmall title={'Small (20x10) - auto (no sizes passed)'} />
                <TestRobotExternal title={'Robot 200x130 - auto (no sizes passed)'} />
                <TestRobotExternal width={200} height={60} title={'Robot 200x130 - 200x60 passed'} />
                <RocketTestExternal width={'100%'} title={'Rocket 800x600, width:100%'} />
                <TestRobotExternal width={'50%'} title={'Robot 200x130, width:50%'} />
                <RocketTestExternal width={100} title={'Rocket 800x600, width:100'} />
                <RocketTestExternal title={'Rocket 800x600 - auto (no sizes passed)'} />
                <View style={{width: '33%'}}>
                    <TestRobotExternal title={'container: 33%'} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'lightgray',
    },
    text: {
        fontSize: 12,
    },
});
