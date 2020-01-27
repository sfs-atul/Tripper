import React, { Component } from "react";
import { createRootNavigator } from './appRoot/Router'
import { createAppContainer } from 'react-navigation';
import LocalStorage from './common/LocalStorage';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
            isCheckLogin: false
        }
    }


    componentDidMount = async () => {
        let isLogin = await LocalStorage.read("isLogin");
        console.log('isLogin index=>', isLogin);
        this.setState({ isLogin: true, isCheckLogin: true });
    }

    render() {
        const { isLogin, isCheckLogin } = this.state;
        const AppStackContainer = createAppContainer(createRootNavigator(isLogin));

        if (!isCheckLogin) {
            return null;
        } else {
            return (
                <AppStackContainer />
            );
        }

    }
}
export default App;