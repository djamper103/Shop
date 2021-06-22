import { connect } from "react-redux";
import * as React from "react";
import Header from "./Header";


let mapSatetoProps = (state, { priceCount }) => {

    return {
        loading: state.LoginPage.loading,
        priceCount: priceCount
    }
}

export default connect(mapSatetoProps, {})(Header)


