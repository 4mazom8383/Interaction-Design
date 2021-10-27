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

  width:280px;
  display: inline-flex

  hr{
    width:180px;
  }
  span{
    margin: 0px 1em;
  }

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
                </label>

                <br />

                <Lines>
                    <hr />
                    <span>OR</span>
                    <hr />
                </Lines>

                <br />

                <p>Struggling to login? <b>Reset your password!</b></p>
                <input type="submit" value="Login"  />

            </FormTxt>
        </StyledWrapper>
    </StyledOutWrapper>

)

}



export default Week3;