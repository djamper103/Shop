import { connect } from "react-redux";
import * as React from "react";
import Login from "./Login";
import { Loading } from "../../Redux/Reducer/Login-reducer";


let mapSatetoProps = (state) => {
    return {
        loading: state.LoginPage.loadingz
    }
}


export default connect(mapSatetoProps, { Loading })(Login)

