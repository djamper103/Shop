import { connect } from "react-redux";
import * as React from "react";
import UpdateProfile from "./UpdateProfile";
import { Loading } from "../../Redux/Reducer/Login-reducer";




let mapSatetoProps = (state) => {
    return {
        loading: state.LoginPage.loading
    }
}


export default connect(mapSatetoProps, { Loading })(UpdateProfile)

