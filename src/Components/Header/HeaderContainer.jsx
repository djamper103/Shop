import {connect} from "react-redux";
import * as React from "react";
import Header from "./Header";


let mapSatetoProps = (state) => {
    return {
        loading:state.LoginPage.loading
    }
}

export default connect(mapSatetoProps, {})(Header)

