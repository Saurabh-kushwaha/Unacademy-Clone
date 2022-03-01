import React from 'react'
import style from './nda.module.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Introduction from './Introduction';

function Page() {
  return (
    <div>
        <div className={style.wrapper}>
            <img src='https://static.uacdn.net/production/_next/static/images/goal/boy.svg?q=75&w=384' alt='left_img' /> 
            <div>
                <h1>Crack NDA with India's largest learning platform</h1>
                <p>Get Plus subscription and access unlimited live and recorded courses from India's best educators</p> 
                <Button variant="contained">Get subscription</Button>
                <div>
                <Link to='/'>View subscription offers</Link>
                </div>
                <p>Get upto 6 months free with your subscription</p>
            </div>  
            <img src='https://static.uacdn.net/production/_next/static/images/goal/girl.svg?q=75&w=384' alt='right_img'/>  
      </div>   
      <Introduction/>
    </div>
  )
}
export default Page