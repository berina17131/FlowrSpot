import React from 'react';

import AppNavigator from './components/navigation/Navigation';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loadingFont: true
        };
    }

    async componentWillMount(){
        await Expo.Font.loadAsync({
            'Ubuntu-Light': require('./assets/fonts/Ubuntu-L.ttf'),
            'Ubuntu-Regular': require('./assets/fonts/Ubuntu-R.ttf'),
            'Ubuntu-Light-Italic': require('./assets/fonts/Ubuntu-LI.ttf'),
            'Ubuntu-Bold': require('./assets/fonts/Ubuntu-B.ttf'),
        });
        this.setState({ loadingFont: false })
    }

    render() {
        if(this.state.loadingFont)
            return <Expo.AppLoading />;

      return (
        <AppNavigator/>
      );
    }
}

