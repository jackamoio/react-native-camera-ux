/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import ExampleRoot from "./ExampleRoot.react";
import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

class example extends Component {
    constructor(props) {
        super(props);

        this.renderSceneForNavigator = this.renderSceneForNavigator.bind(this);
        this.configureSceneForNavigator = this.configureSceneForNavigator.bind(this);
    }

    render() {
        const routeStack = [
            { name: "Example Root View", component: ExampleRoot }
        ];

        return (
            <Navigator
                initialRouteStack={routeStack}
                renderScene={this.renderSceneForNavigator}
                configureScene={this.configureSceneForNavigator}
            />
        );
    }

    renderSceneForNavigator(route, navigator) {
        const RouteComponent = route.component;
        return <RouteComponent route={route} navigator={navigator} />
    }

    configureSceneForNavigator(route, routeStack) {
        return Navigator.SceneConfigs.FloatFromRight;
    }
}



AppRegistry.registerComponent('example', () => example);
