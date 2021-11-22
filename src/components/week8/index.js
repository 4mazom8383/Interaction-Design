import react from 'react';
import styled from 'styled-components';
import team from './assets/team.png';

const StyledOutWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #eeee;
`

/* Phone Frame */
const PhoneFrame = styled.div`
    width: 410px;
    height: 790px;
    background: #F5F7FB;
    border-radius: 40px;
    position: relative;
    display: flow;
    justify-content: center;
    align-items: center;

    border: 1px solid #0000000f;

    flex-direction:"row-reverse";
    overflow:hidden;
    position: relative;
    /**/
    #full_screen, #full_screen2{width: 0%; height: 0%; background: #0404048f; position: absolute;transition: height 5s, width 5.2}

    div{
      width:306px;
      height:60px;
      background:red;
      margin: 1em auto;
      display: flex;
      align-items: center;
      justify-content: right;
      background: white;
      border-radius: 12px;
      color: #1B2138;
      filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.12));
    }
    article>h5, article>span{margin:0px 16px;}
    article>span{font-size:10px;}
    img{width: 70px;}
    div>article, div>img {margin-right:16px;}
    div>a{
      cursor: pointer;
      height:60px;width:60px;
      background: linear-gradient(180deg, #FF5F5F 0%, #C40505 100%);
      border-radius: 0px 8px 8px 0px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    #confirmModal, #confirmModal2 {
      height: auto;
      z-index: 2;
      display: none;
      width:280px;
      /*padding: 1em 8px 8px 24px;*/
      position: absolute;
      color:#3E4B59;
      background-color:white;
      margin: inherit;
      border-radius: 12px;

      span{display: flex; justify-content: right; height:52px; align-items: center;margin-right: 16px;}
      h4{margin:0px;display: flex; margin: 0px; margin-left: 24px; height: 58px; align-items: center;} p{font-size:12px;margin-bottom:28px;}
      button{
        border-radius: 4px;
        padding: 10px 16px;
        color: white;
        border: none;
        font-size:10px;
        cursor: pointer;
      }
      button:nth-of-type(1){background: #EFF4FB;margin-right:8px;color: #818D97;}
      button:nth-of-type(2){background: #DE5151;}
      svg{
        width: 36px;
        fill: none;
        stroke: #3d4b59;
        stroke-width: 2px;
      }
      ul li a:focus{
        color: #DE5151; 
        svg{
          fill: #DE5151 !important;
          stroke:none !important;
        }
      }
      ul>li>a>svg{margin-right:24px;}
    }


    /*Confirmation Modal*/
    #confirm_modal>div{justify-content: left;}
    #confirm_modal a{border-radius:8px 0px 0px 8px;background: linear-gradient(180deg, #6370A4 0%, #394367 100%);}
    #confirm_modal>div svg{fill:white;}
    ul{
      padding:0;
      border-top: 1px solid #EAEAEA;
      border-bottom: 1px solid #EAEAEA;
      margin:0px;
    }
    ul>li{
      
      list-style: none;
      padding: 0px 24px;
    }
    ul>li>a{      
      height: 48px;
      display: flex;
      align-items: center;
      font-size: 12px;
      text-decoration: none;
      color: #3E4B59;
      font-weight:bold;
    }

    .confi_modal{padding: 0px!important;}
    .confi_modal h4{margin-left:24px;}
    .hidemodal{
      display: none!important;
    }
    .showmodal, .showModal1{display:block !important;transition: display 0.8s;}
    .full_screenOn, .full_screenOn1{height: 100%!important; width: 100%!important; transition: width 0.2s;    z-index: 1;}

    .alertModal{padding: 24px 0px 12px 0px}
    .alertModal p, .alertModal svg{margin-left:24px!important;}
    .alertModal svg{fill: #3d4b59 !important;stroke:none!important;}
    .alertModal p, .alertModal h4{margin:0;}

`
/*Function Show and Hide*/

function show_alertModal(){
  document.getElementById("confirmModal2").classList.add("showModal1");
  document.getElementById("full_screen2").classList.add("full_screenOn1");
}
function hide_alertmModal(){
  document.getElementById("confirmModal2").classList.remove("showModal1");
  document.getElementById("full_screen2").classList.remove("full_screenOn1");
}

export  const Alert_Modal = () => {
  return [
      <StyledOutWrapper>
      <PhoneFrame>
  
      <div id="confirmModal2" class="alertModal">
        <svg viewBox="0 0 26 24" >
          <g clip-path="url(#clip0_431_713)">
          <path d="M6.39639 19C6.39639 20.1 7.35586 21 8.52854 21H17.0571C18.2298 21 19.1893 20.1 19.1893 19V7H6.39639V19ZM8.52854 9H17.0571V19H8.52854V9ZM16.5241 4L15.458 3H10.1276L9.06157 4H5.33032V6H20.2553V4H16.5241Z"/>
          </g>
          <defs>
          <clipPath id="clip0_431_713">
          <rect width="25.5857" height="24"/>
          </clipPath>
          </defs>
        </svg>
        <h4>Delete Project</h4>
        <p>This action can’t be undone, please confirm.</p>
        <span>
          <button onClick={hide_alertmModal}>CANCEL</button>
          <button onClick={hide_alertmModal}>DELETE</button>
        </span>
      </div>

  
      <div id="full_screen2" ></div>

      <section>
        <h3>Weekly Tasks:</h3>
          <div>
            <article>
              <h5><b>Dashboard Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />
            <a onClick={show_alertModal}>
              <svg width="26" height="24" viewBox="0 0 26 24">
              <g clip-path="url(#clip0_431_713)">
              <path d="M6.39639 19C6.39639 20.1 7.35586 21 8.52854 21H17.0571C18.2298 21 19.1893 20.1 19.1893 19V7H6.39639V19ZM8.52854 9H17.0571V19H8.52854V9ZM16.5241 4L15.458 3H10.1276L9.06157 4H5.33032V6H20.2553V4H16.5241Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_431_713">
              <rect width="25.5857" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
          </div>

          <div>
            <article>
              <h5><b>Dashboard Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />
            <a onClick={show_alertModal}>
              <svg width="26" height="24" viewBox="0 0 26 24">
              <g clip-path="url(#clip0_431_713)">
              <path d="M6.39639 19C6.39639 20.1 7.35586 21 8.52854 21H17.0571C18.2298 21 19.1893 20.1 19.1893 19V7H6.39639V19ZM8.52854 9H17.0571V19H8.52854V9ZM16.5241 4L15.458 3H10.1276L9.06157 4H5.33032V6H20.2553V4H16.5241Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_431_713">
              <rect width="25.5857" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
          </div>

          <div>
            <article>
              <h5><b>Dashboard Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />
            <a onClick={show_alertModal}>
              <svg width="26" height="24" viewBox="0 0 26 24">
              <g clip-path="url(#clip0_431_713)">
              <path d="M6.39639 19C6.39639 20.1 7.35586 21 8.52854 21H17.0571C18.2298 21 19.1893 20.1 19.1893 19V7H6.39639V19ZM8.52854 9H17.0571V19H8.52854V9ZM16.5241 4L15.458 3H10.1276L9.06157 4H5.33032V6H20.2553V4H16.5241Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_431_713">
              <rect width="25.5857" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
          </div>
  
          <div>
            <article>
              <h5><b>Dashboard Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />
            <a onClick={show_alertModal}>
              <svg width="26" height="24" viewBox="0 0 26 24">
              <g clip-path="url(#clip0_431_713)">
              <path d="M6.39639 19C6.39639 20.1 7.35586 21 8.52854 21H17.0571C18.2298 21 19.1893 20.1 19.1893 19V7H6.39639V19ZM8.52854 9H17.0571V19H8.52854V9ZM16.5241 4L15.458 3H10.1276L9.06157 4H5.33032V6H20.2553V4H16.5241Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_431_713">
              <rect width="25.5857" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>
            </a>
          </div>
  
      </section>
  
      </PhoneFrame>
      </StyledOutWrapper> 
  ] 
}


/*Function Show and Hide*/

function show_confrimModal(){
  document.getElementById("confirmModal").classList.add("showmodal");
  document.getElementById("full_screen").classList.add("full_screenOn");
}
function hide_confrimModal(){
  document.getElementById("confirmModal").classList.remove("showmodal");
  document.getElementById("full_screen").classList.remove("full_screenOn");
}
export  const Confrim_Modal = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame>
        <div id="confirmModal" >
          <h4>List of categories</h4>
          <ul>
            <li><a href="#!"><svg width="24" height="24" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="9"/></svg>UX Research</a></li>
            <li><a href="#!"><svg width="24" height="24" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="9"/></svg>UI Design</a></li>
            <li><a href="#!"><svg width="24" height="24" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="9"/></svg>Usability testing</a></li>
            <li><a href="#!"><svg width="24" height="24" viewBox="0 0 24 24" ><circle cx="12" cy="12" r="9"/></svg>Interaction Design</a></li>
          </ul>
          <span>
            <button onClick={hide_confrimModal}>CANCEL</button>
            <button onClick={hide_confrimModal}>CONFIRM</button>
          </span>
        </div>

        <div id="full_screen" ></div>



        <section id="confirm_modal">
          <h3>Re-label Weekly Tasks:</h3>
          <div>
            <a onClick={show_confrimModal}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12L16.63 18.16C16.26 18.68 15.65 19 15 19H12V17H15L18.55 12L15 7H5V10H3V7C3 5.9 3.9 5 5 5H15C15.65 5 16.26 5.31 16.63 5.84L21 12ZM10 15H7V12H5V15H2V17H5V20H7V17H10V15Z"/>
              </svg>
            </a>
            <article>
              <h5><b>Research Analysis</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />

          </div>

          <div>
            <a onClick={show_confrimModal}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12L16.63 18.16C16.26 18.68 15.65 19 15 19H12V17H15L18.55 12L15 7H5V10H3V7C3 5.9 3.9 5 5 5H15C15.65 5 16.26 5.31 16.63 5.84L21 12ZM10 15H7V12H5V15H2V17H5V20H7V17H10V15Z"/>
              </svg>
            </a>
            <article>
              <h5><b>Dashboard Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />

          </div>

          <div>
            <a onClick={show_confrimModal}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12L16.63 18.16C16.26 18.68 15.65 19 15 19H12V17H15L18.55 12L15 7H5V10H3V7C3 5.9 3.9 5 5 5H15C15.65 5 16.26 5.31 16.63 5.84L21 12ZM10 15H7V12H5V15H2V17H5V20H7V17H10V15Z"/>
              </svg>
            </a>
            <article>
              <h5><b>UI Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />

          </div>

          <div>
            <a onClick={show_confrimModal}>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 12L16.63 18.16C16.26 18.68 15.65 19 15 19H12V17H15L18.55 12L15 7H5V10H3V7C3 5.9 3.9 5 5 5H15C15.65 5 16.26 5.31 16.63 5.84L21 12ZM10 15H7V12H5V15H2V17H5V20H7V17H10V15Z"/>
              </svg>
            </a>
            <article>
              <h5><b>Interaction Design</b></h5>
              <span>Digital Product Design</span>
            </article>
            <img src={team} />

          </div>
        </section>


        

      </PhoneFrame>
    </StyledOutWrapper> 
  ] 
}

const Week8 = () => {
    return (
        <Confrim_Modal />
    )
}



export default Week8;