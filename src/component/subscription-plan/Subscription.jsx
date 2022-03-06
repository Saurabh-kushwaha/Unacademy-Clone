import React from 'react';
import { useState } from 'react';
import style from "./Subscription.module.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Hamburger } from './Hamburger';
import { useNavigate } from 'react-router-dom';

export const Subscription = () => {

  const hamstyle = {
    position: "absolute",
    left: "50%",
    width: "40%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    fontFamily: "sans-serif",
    maxHeight: "1024px",
    overflowX: "hidden",
    transform: "none",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    height: "100%",
    padding: "24px 115px 0px 48px",
  };
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const  handlePopin =()=> setDisplay(true);
  const  handlePopout =()=> setDisplay(false);

  const selecthandler=()=>{
    navigate('subscribe/plan-details')

  }
  return (
    <>
     
      <div className={style.main}>
      <header className={style.ulogo}>
          <img src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256' alt="logo"/>
      </header>
        <div className={style.heading}>      
          <h3 className={style.ndaheading}>NDA</h3>
          <h5 className={style.ndatagline}>Select a subscription plan that suits you</h5>
        </div>
        
        <div className={style.plandetails}>
          <div className={style.plus}>
            <div className={style.head}>
              <div className={style.headtagline}>
                <h2>PLUS</h2>
                <p>Basic plan to get you started</p>
              </div>
              <div className={style.logo}>
                <img src='https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Plus_icon_9029cac986.png' alt="-"/>
              </div>
            </div>
            <div className={style.pluscontent}>
              
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>India's best educators</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Interactive live classes</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Structured courses & PDFs</h5>
              </div>
              <div className={style.check}>
                  <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                  <h5>Live tests & quizzes</h5>
              </div>
              
            </div>
            <div className={style.plusbutton}>
              <button onClick={selecthandler}>
                Select PLUS
              </button>
            </div>
          </div>


          <div className={style.iconic}>
            <div className={style.head}>
                <div className={style.headtagline}>
                  <h2>ICONIC</h2>
                  <p>Take your exam preparation to next level with your ICONIC subscription</p>
                </div>
                <div className={style.logo}>
                  <img src='https://unacademy-prod.s3.ap-southeast-1.amazonaws.com/web-cms/Group_4894_2b74e644b9.png' alt="-"/>
                </div>
              </div>
              <div className={style.iconiccontent}>
                <div className={style.checked}>
                  <div className={style.check}>
                      <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                      <h5>India's best educators</h5>
                  </div>
                  <div className={style.check}>
                      <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                      <h5>Interactive live classes</h5>
                  </div>
                  <div className={style.check}> 
                      <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                      <h5>Structured courses & PDFs</h5>
                  </div>
                  <div className={style.check}>
                      <img src='https://static.uacdn.net/production/_next/static/images/greenTick.png?q=75&w=48' alt="true" />
                      <h5>Live tests & quizzes</h5>
                  </div>
                </div>
                
                <div className={style.checked}>
                  <div className={style.check}>
                      <img src='https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=32' alt="true" />
                      <h5>Priority Doubt Solving</h5>
                  </div>
                  <div className={style.check}>
                      <img src='https://static.uacdn.net/production/_next/static/images/yellowTick.png?q=75&w=32' alt="true" />
                      <h5>Priority in Live Classes</h5>
                  </div>
                </div>
              </div>
              <div className={style.iconicbutton}>
                <button className={style.btn1}>
                  Select ICONIC
                </button>
                <button className={style.btn2} onClick={handlePopin}>
                  Learn more
                </button>
                
              </div>
            </div>
        </div>
      </div>

      <Modal
            open={display}
            onClose={handlePopout} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={hamstyle}>
              <button onClick={handlePopout}>X</button>
              <Hamburger/>
            </Box>
        </Modal>
    </>
  )
}
