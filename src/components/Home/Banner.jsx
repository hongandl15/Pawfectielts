import React from 'react'
import {Button} from '@mui/material'

const Banner = (props) => {

    return (
        <div className='main-banner'>
            <div className='main-banner_title'>
                <h1>{props.title}</h1>
                <div className='main-banner_btn'>
                <Button variant="contained" >
                    {props.btn_content1}
                </Button>
                <Button variant="contained" color="success">
                    {props.btn_content2}
                </Button>
                </div>
            </div>
            <div className='main-banner_img'>
                <img src={props.imageLink} alt="" />
            </div>
        </div>
    )
}

export default Banner


