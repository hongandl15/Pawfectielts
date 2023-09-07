import Helmet from '../components/Layout/Helmet'
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

import SetDetail from '../components/Admin/SetDetail';

const AdminSetDetail = () => {
    const setItem = useLocation().state.stateParam;
    console.log(setItem.id)
    return (

        <Helmet title="Trang admin">
            <SetDetail setid={setItem.id}/>
        </Helmet>
        
    )
}

export default AdminSetDetail
