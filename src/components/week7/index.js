import react from 'react';
import styled from 'styled-components';
import Header from './assets/header.gif';

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
    background: white;
    border-radius: 40px;

    display: flow-root;
    justify-content: center;
    align-items: center;

    flex-direction:"row-reverse";
    overflow:hidden;
    position: relative;
    /**/
    header{height: 260px; overflow: hidden;background: #98d2ff;}
    img{width:70%; margin: 0 auto; display: block;}
    textarea{marign: 0 auto;height: 120px;color: #757575;resize: vertical;width:280px;}
`

/* FORM inputs*/
const FormTxt = styled.form`
    position relative;
    display: grid;

    label{
        margin: 0px auto 8px auto;
    }

    label span{
        padding: 6px;
        background: white;
        max-height: 20px;
        opacity: 1;
        font-size: .775rem;
        margin-left: 10px;
        position: relative;
        top: -5px;
        opacity: 0;
        color: #B6B6B6;
        transition: opacity 0.2s, top 0.4s;
        text-align: left!important;
    }


    label:focus-within, input:focus-visible {
        span{
            top: 4px;
            opacity: 1;
            color: #7462E2;
        }
        input{
            outline: #7462E2 solid 1px;
        }
        input[type="password"]::placeholder{
            content:'JJJJJJJJJ';
        }
    }

      
    input{
        
        display: block;
        width: 280px;
        height: 48px;
        border: 1px solid #B6B6B6;
        box-sizing: border-box;
        border-radius: 4px;
        padding-left:16px;
    }
    p{
      color: #F4433A;
      text-align:center;
    }
    a{font-size:10px;text-align:center;}
    p{font-size:10px;text-align:left;}

    input[type="submit"]{
        margin: 24px auto;
        display: block;
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
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.08), inset 280px 38px 4px rgba(255, 255, 255, 0.30);
    }
`


export  const ContactForm = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame>


        <header><img src={Header} /></header>

        <FormTxt>
          <label for="email">
              <span>Email Address</span>
              <input type="text" name="email" class="form-control" placeholder="Enter email" id="email" />
              <p className="text-danger"></p>
          </label>


          <label for="password">
              <span>Password</span>
              <input  type="password"  name="password" class="form-control"  placeholder="Enter password"  id="password" />
              <p className="text-danger"></p>
          </label>


          <textarea>
            At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.

          </textarea>

        </FormTxt>




      </PhoneFrame>
    </StyledOutWrapper> 
  ] 
}


const Week5 = () => {
    return (
        <ContactForm />
    )
}



export default Week5;