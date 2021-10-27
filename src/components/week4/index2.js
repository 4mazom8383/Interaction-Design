import React from 'react';
import styled from 'styled-components';

const StyledOutWrapper= styled.div`

    background-color: #DCDCDC;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
`

const StyledWrapper = styled.div`
    align-items: center;
    justify-content: center;
    width: 411px;
    height: 731px;
    
    border: 1px solid #F9F9F9;
    background:  #E0F1F2;
    border-radius: 40px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.08);
    overflow:hidden;
`

const FormTxt = styled.form`
    label, input{
      display: table;
      margin: 0 auto;
    }

    label{
      position: relative;

      span:nth-of-type(1){
        padding-left:16px;
        font-size: 10px;
        position:absolute;
        top: 6px;
        opacity:0;
      }
      span:nth-of-type(2) {
        color: #ff0000;
        margin-top: 12px;
        font-size:12px; 
      }
    }


    label:focus-within{

      span:nth-of-type(1){
        opacity:1;
      }

      
    }

    input{
        border: 1px solid #B6B6B6;
        box-sizing: border-box;
    }

    input[type="email"], input[type="password"]{
      padding-left:16px;
      padding-top: 12px;
      width: 280px;
      height: 55px;
      color:#8155B4;
      background: #8AAAAC;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
      border-bottom: 2px solid red;
    }
    input[type="email"]::placeholder, input[type="password"]::placeholder{
      color:#8155B4;
    }

    p{
      text-align:center;
      font-size:10px;
      color: #8155B4;
    }

    input[type="submit"]{
        width: 280px;
        height: 38px;
        font-weight: bold;  
        text-transform: uppercase;

        background: linear-gradient(180deg, #A77EFF 0%, #7D5AC8 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18), 0px 2px 2px rgba(0, 0, 0, 0.08);
        color: white;
        border: 1px solid #B6B6B6;
        box-sizing: border-box;
        border-radius: 4px;
        transition: box-shadow 0.2s;
    }
    input[type="submit"]:hover{
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 12px 12px 0px #0000002E;
        cursor: pointer;
    }
    input[type="submit"]:active{
    }
`


const Header = styled.header`
    text-align:center;
    color: #8155B4;
`


const Lines = styled.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  span{
    margin: 0px 1em;
  }
  hr{
    width:180px;
  }
`

const SocialMedia = styled.button`
    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    padding: 0 16px 0 16px;

    display: flex;
    margin: 0 auto;
    width: 280px;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;

    border: 1px solid #198DE1;
    border: none;
    background: #4267B2;  
    color: white;

    &:hover {
        cursor: pointer;
    }

`
const SvgIcon = styled.svg`
  fill: white;
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-left: -4px;
  margin-right: 8px;
`
const Hidden = styled.svg`
  fill: white;
  width: 18px;
  height: 18px;
  display: inline-block;
  position: absolute;
  top: 25%;
  right: 1em;
`
const Week3 = () => {

  return (
        <StyledOutWrapper>
        <StyledWrapper>
            <Header>
              <h1>Cativity</h1>
              <h4>Sign up to let your cat play our activites</h4>
            </Header>
            <FormTxt>
 
                <label>
                    <span>Phone number, username or email</span>
                    <input type="email" placeholder="Email Address"/>
                    <span>Invalide email! Please try again</span>
                </label>

                <br />
                <label>
                    <span>Phone number, username or email</span>
                    <input type="password" placeholder="password"/>
                    <span>Incorrect password! Please try again</span>
                    <Hidden viewBox="0 0 24 24">
                      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/><path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
                    </Hidden>
                </label>

                <br />

                <br />


                
                <p>Struggling to login? <b>Reset your password!</b></p>
                <input type="submit" value="Login"  />

                <br />
                <br />

                <Lines>
                    <hr />
                    <span>OR</span>
                    <hr />
                </Lines>
                <br />
                <br />

                <SocialMedia>
                  <SvgIcon viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.57143 3H18.4286C19.8487 3 21 4.15127 21 5.57143V18.4286C21 19.8487 19.8487 21 18.4286 21L15.8572 21V14.9677H17.4L18.4286 12.2641H15.8572V10.186C15.8572 9.10462 17.9143 9.64532 17.9143 9.64532V6.94182C13.8 6.40113 12.7714 8.56392 12.7714 10.186V12.2641H10.7143V14.9677H12.7714V21L5.57143 21C4.15127 21 3 19.8487 3 18.4286V5.57143C3 4.15127 4.15127 3 5.57143 3Z"/></SvgIcon>
                  <span><b>LOG IN WITH FACEBOOK</b></span>
                </SocialMedia>

                <br />

                <SocialMedia style={{backgroundColor: "#4C8BF5"}}>
                  <SvgIcon viewBox="0 0 24 24" style={{backgroundColor: "white"}}>
                      <path d="M20.6175 12.2024C20.6175 11.6099 20.565 11.0474 20.475 10.4999H12V13.8825H16.8525C16.6349 14.9924 15.9975 15.93 15.0525 16.5674V18.8174H17.9475C19.6425 17.2499 20.6175 14.94 20.6175 12.2024Z" fill="#4285F4"/>
                      <path d="M12 21C14.4301 21 16.4625 20.19 17.9475 18.8175L15.0525 16.5675C14.2425 17.1075 13.2151 17.4376 12 17.4376C9.6525 17.4376 7.665 15.855 6.9525 13.7175H3.96751V16.035C5.445 18.975 8.4825 21 12 21Z" fill="#34A853"/>
                      <path d="M6.9525 13.7174C6.76499 13.1775 6.6675 12.6 6.6675 12C6.6675 11.4 6.7725 10.8225 6.9525 10.2825V7.96497H3.9675C3.3525 9.17996 3 10.545 3 12C3 13.455 3.3525 14.8199 3.9675 16.0349L6.9525 13.7174Z" fill="#FBBC05"/>
                      <path d="M12 6.56249C13.3276 6.56249 14.5125 7.02 15.45 7.91249L18.015 5.34749C16.4625 3.8925 14.4301 3 12 3C8.4825 3 5.445 5.025 3.96751 7.965L6.9525 10.2825C7.665 8.145 9.6525 6.56249 12 6.56249Z" fill="#EA4335"/>                    
                  </SvgIcon>
                  <span><b>LOG IN WITH GOOGLE</b></span>
                </SocialMedia>

            </FormTxt>
        </StyledWrapper>
    </StyledOutWrapper>

)

}



export default Week3;