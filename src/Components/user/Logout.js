import React from 'react';
import { Redirect } from 'react-router-dom'

import {logout} from '../../services/auth'
const Logout = (props) => {
    logout()
    return (
        <>
        <div>
            Saindo...
        </div>
            <Redirect to="/login"/>
        </>
    );
}

export default Logout;