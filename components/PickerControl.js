import React, {Component} from 'react';
import RNPickerSelect from "react-native-picker-select";
import {StyleSheet, View, Text} from 'react-native';

class PickerControl extends Component {
    static defaultProps = {
        value: 1,
        name: 'property',
        useNativeAndroidPickerStyle: false,
        items: [],
        onValueChange: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.default || 0,
        };
    }

    onValueChange(value) {
        this.setState({value});
        this.props.onValueChange(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>{this.props.name}: </Text>
                <RNPickerSelect
                    onValueChange={value => this.onValueChange(value)}
                    items={this.props.items}
                    style={pickerSelectStyles}
                    useNativeAndroidPickerStyle={this.props.useNativeAndroidPickerStyle}
                    placeholder={{}}
                    Icon={() => {
                        return (
                            <View
                                style={{
                                    backgroundColor: 'transparent',
                                    borderTopWidth: 5,
                                    borderTopColor: 'black',
                                    borderRightWidth: 5,
                                    borderRightColor: 'transparent',
                                    borderLeftWidth: 5,
                                    borderLeftColor: 'transparent',
                                    width: 0,
                                    height: 0,
                                }}
                            />
                        );
                    }}

                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: 10,
        marginHorizontal: 10,
    },
    label: {
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        backgroundColor: '#d3d3d3',
        borderColor: '#2f95dc',
        borderRadius: 4,
        borderWidth: 1,
        color: 'black',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingRight: 30, // to ensure the text is never behind the icon
        paddingVertical: 8,
    },
    inputAndroid: {
        backgroundColor: '#d3d3d3',
        borderColor: '#2f95dc',
        borderRadius: 8,
        borderWidth: 0.5,
        color: 'black',
        fontSize: 14,
        paddingHorizontal: 10,
        paddingRight: 30, // to ensure the text is never behind the icon
        paddingVertical: 8,
    },
    iconContainer: {
        top: '45%',
        right: 10,
    },

});

export default PickerControl;
