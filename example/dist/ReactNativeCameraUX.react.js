/**
*   ReactNativeCameraUX.react.js
*   Written By: Derek Johnston
*/

"use strict";

import TakeImageView from "./components/TakeImageView/TakeImageView.react";
import React, {
    Component,
    Navigator
} from "react-native";

class ReactNativeCameraUX extends Component {
    constructor(props) {
        super(props);

        this.renderSceneForNavigator = this.renderSceneForNavigator.bind(this);
    }

    render() {
        console.log(this.props);
        const routeStack = [
            { index: 0, name: "Take Image View", component: TakeImageView}
        ];

        return (
            <Navigator
                initialRouteStack={routeStack}
                renderScene={this.renderSceneForNavigator}
            />
        );
    }

    renderSceneForNavigator(route, naviagator) {
        const RouteComponent = route.component;
        return <RouteComponent route={route} naviagator={navigator} />
    }
}

export default ReactNativeCameraUX
