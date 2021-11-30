import react from 'react';
import styled from 'styled-components';

const StyledOutWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #eeee;


    .dark-mode {
      transition: background 0.4s, color 0.4s;
      background: white !important;
      color:#000000;
      svg{fill: #000000!important;transition: fill 0.4s;}
      .status_bar{background-color: #4B00D3;transition: background-color 0.4s;}
      .app_bar{
        background-color: #6101EC;color:white;
        transition: background-color 0.4s;
        svg{fill:white !important;transition: fill 0.4s;}
      }
    }


`

/* Phone Frame */
const PhoneFrame = styled.div`

  
    color:white;
    background: #262626;
    transition: background 0.4s, color 0.4s;

    width: 410px;
    height: 790px;
    border-radius: 40px;
    position: relative;
    display: block ;
    justify-content: center;
    align-items: center;

    border: 1px solid #0000000;

    flex-direction:"row-reverse";
    overflow:hidden;

    .status_bar{
      width:100%;
      height: 28px;
      background:black;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 34px;
      height: 14px;
    }
    
    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }
    
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #6F4A74;
      -webkit-transition: .4s;
      transition: .4s;
      display: flex;
      align-items: center;
    }

    .slider:before {
      content: "";
      height: 20px;
      width: 20px;
      background-color:  #EC7CFE;
      -webkit-transition: .4s;
      transition: .4s;
      -webkit-transform: translateX(18px);
      -ms-transform: translateX(18px);
      transform: translateX(18px);
    }

    input:checked + .slider {
      background-color: #ccc;
    }

    input:checked + .slider:before {
      background-color: white;
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    }

    
    input:checked + .slider:before {
      -webkit-transform: translateX(0px);
      -ms-transform: translateX(0px);
      transform: translateX(0px);
    }
    
    /* Rounded sliders */
    .slider.round {
      border-radius: 34px;
    }
    
    .slider.round:before {
      border-radius: 50%;
    }


    /**/
    .status_bar{
      background-color:#0E0D0D;
      transition: background-color 0.4s;
      width:100%;
      height:28px;
    }
    .app_bar{
      transition: background 0.4s, color 0.4s;
      
      background-color:#171717;
      width:100%;
      height:63px;
      align-items: center;
      display: inline-flex;
      
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.24);
    }
    .app_bar > .content{
      width:340px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      height:63px;
      margin: 0 auto;
      svg{fill:white;transition: fill 0.4s;}
      
      a{align-items: center;
        height: 32px;
        display: flex;
      }
    }
    .app_bar a:first-of-type{font-size:20px;}
    .app_bar a:first-of-type>svg{margin-right:12px;}

    .wrap{
      width: 300px;
      margin: 0 auto;
      display: block;
    }
    .wrap>p{    
      text-align: justify;
      font-size: 13px;
      height: 63px;
      margin-top: 30px;
    }
    .box{
      
      display: flex;
      align-items: center;
      height: 63px;
      justify-content: space-between;
      border-bottom: 1px solid #3e3e3e;
      padding-bottom: 6px;
      h3{font-size: 16px;}
      a{
        display: flex;
        flex-direction: row;
        align-items: center;
        svg{
          padding-right:12px;
          fill:white;
          transition: fill 0.4s;}
      }
    }
`;

function myFunction() {
  var bg = document.getElementById("frame");
  bg.classList.toggle("dark-mode");
}


export  const Switch = () => {
  return [
      <StyledOutWrapper>
      <PhoneFrame  id="frame">

      <div class="status_bar"></div>


      <div class="app_bar">
        <div class="content">
          <a>
            <svg width="28" height="28" viewBox="0 0 28 28">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22 13H9.8L15.4 7.4L14 6L6 14L14 22L15.4 20.6L9.8 15H22V13Z"/>
            </svg>
            Settings
          </a>
          
          <a>
            <svg width="15" height="28" viewBox="0 0 15 28">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.65003 9.13334C8.90587 9.13334 9.93337 8.10584 9.93337 6.85001C9.93337 5.59418 8.90587 4.56668 7.65003 4.56668C6.3942 4.56668 5.3667 5.59418 5.3667 6.85001C5.3667 8.10584 6.3942 9.13334 7.65003 9.13334ZM7.65003 11.4167C6.3942 11.4167 5.3667 12.4442 5.3667 13.7C5.3667 14.9558 6.3942 15.9833 7.65003 15.9833C8.90587 15.9833 9.93337 14.9558 9.93337 13.7C9.93337 12.4442 8.90587 11.4167 7.65003 11.4167ZM7.65013 18.2667C6.3943 18.2667 5.3668 19.2942 5.3668 20.55C5.3668 21.8058 6.3943 22.8333 7.65013 22.8333C8.90596 22.8333 9.93346 21.8058 9.93346 20.55C9.93346 19.2942 8.90596 18.2667 7.65013 18.2667Z"/>
            </svg>
          </a>
        </div>
      </div>
      <section class="wrap">
        <p>To schedule Dark Mode to turn on between sunset and sunrise, Location needs to be turned on.</p>
        <h5 class="title">Visual options</h5>

        
        <div class="box">
          <a>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 11.54 20.96 11.08 20.9 10.64C19.92 12.01 18.32 12.9 16.5 12.9C13.52 12.9 11.1 10.48 11.1 7.5C11.1 5.69 11.99 4.08 13.36 3.1C12.92 3.04 12.46 3 12 3Z"/>
            </svg>
            <b>Dark Theme</b>
          </a>
          
          <div>
            <label class="switch" >
              <input type="checkbox" />
                <span onClick={myFunction}  class="slider round"></span >
            </label>
          </div>
        </div>

        <div class="box">
          <h3>Brightness level </h3>
          <p>84%</p>          
        </div>

        <div class="box">
          <h3>Adaptive brightness</h3>
          <p>On</p>          
        </div>

        <div class="box">
          <h3>Screen zoom</h3>
          <p>Medium</p>          
        </div>

        <div class="box">
          <h3>Screen saver</h3>
          <p>Clock</p>          
        </div>
      </section>
        
      </PhoneFrame>
      </StyledOutWrapper> 
  ] 
}



const Week9 = () => {
    return (
        <Switch />
    )
}



export default Week9;