import React, { Component } from "react";
import { createRootNavigator } from './appRoot/Router'
import { createAppContainer } from 'react-navigation';
import LocalStorage from './common/LocalStorage';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogin: false,
        }
    }

    componentDidMount = async () => {
        let isLogin = await LocalStorage.read("isLogin");
        console.log('isLogin=>', isLogin);
        // let isLogin = true;
        this.setState({ isLogin });
    }

    render() {
        const { isLogin } = this.state;
        const AppStackContainer = createAppContainer(createRootNavigator(isLogin));
        return (
            <AppStackContainer />
        );
    }
}
export default App;