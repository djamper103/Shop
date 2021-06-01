import {connect} from "react-redux";
import * as React from "react";
import App from "./App";




let mapSatetoProps = (state) => {
    return {
        loading:state.LoginPage.loading
    }
}


export default connect(mapSatetoProps, {})(App)

