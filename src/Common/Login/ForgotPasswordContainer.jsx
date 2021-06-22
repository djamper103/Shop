import {connect} from "react-redux";
import * as React from "react";
import ForgotPassword from "./ForgotPassword";
import {Loading} from "../../Redux/Reducer/Login-reducer";





let mapSatetoProps = (state) => {
    return {
        loading:state.LoginPage.loading
    }
}

export default connect(mapSatetoProps, {Loading})(ForgotPassword)

