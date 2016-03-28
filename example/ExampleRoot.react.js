/**
*   ExampleRoot.react.js
*   Written By: Derek Johnston
*/

"use strict";

import ReactNativeCameraUX from "./dist/index";
import {TouchableWithColor} from "react-native-touchables";
import React, {
    Component,
    StyleSheet,
    View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

class ExampleRoot extends Component {
    constructor(props) {
        super(props);
        this.handleUploadPress = this.handleUploadPress.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <TouchableWithColor
                        style={{
                            height      : 100,
                            width       : 100,
                            borderRadius: 50,
                            borderWidth : 1
                        }}
                        normalColor="#4CAF50"
                        pressedColor="#E8F5E9"
                        onPress={this.handleUploadPress}
                    />
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        );
    }

    handleUploadPress() {
        this.props.navigator.push({
            name: "React Native Camera UX",
            component: ReactNativeCameraUX,
            passProps: {
                onSubmit: this.handleUpload
            }
        });
    }

    handleUpload(data) {
        console.log("Uploaded:", data);
    }
}

export default ExampleRoot
