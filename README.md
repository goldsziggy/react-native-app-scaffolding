# react-native-app-scaffolding

This scaffolding is to help lay the foundation for larger scalable react native applications, useing:

* React
* React-Native
* Redux
    * Duck Pattern
* Styled-Components
* JWT Middleware

The idea of this repo is to clone it down to your machine, and get started on development right away. With a good base and room to grow your application the right way without having to refactor or reorganize your file structure down the road.

## Development Setup

1. First clone the repository `https://github.com/Caryyon/react-native-app-scaffolding`
2. Change directories: `cd react-native-app-scaffolding`
3. Install Dependencies: `yarn install`
4. In Xcode, in Project Navigator (left pane), right-click on the `Libraries` > `Add files to [project name]`. Add `./node_modules/react-native-navigation/ios/ReactNativeNavigation.xcodeproj`
5. In Xcode, in Project Navigator (left pane), click on your project (top), then click on your target row (on the "project and targets list", which is on the left column of the right pane) and select the `Build Phases` tab (right pane). In the `Link Binary With Libraries` section add `libReactNativeNavigation.a`
6. In Xcode, in Project Navigator (left pane), click on your project (top), then click on your project row (on the "project and targets list") and select the `Build Settings` tab (right pane). In the `Header Search Paths` section add `$(SRCROOT)/../node_modules/react-native-navigation/ios`. Make sure on the right to mark this new path `recursive`

## Dependencies

* [Yarn](https://yarnpkg.com/en/)
* [React](https://facebook.github.io/react/docs/hello-world.html)
* [React Native](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/)
* [React Native Navigation](https://wix.github.io/react-native-navigation/#/)
* [Jest](https://facebook.github.io/jest/)
* [Axios](https://github.com/axios/axios)
* [Redux-thunk](https://github.com/gaearon/redux-thunk)
* [Styled-Components](https://www.styled-components.com/)
