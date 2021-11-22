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
    img{width:70%; margin: -13px auto; display: block;}
    form{display: grid; justify-content: center;margin-top: 40px;}
    textarea{
      height: 100px;color: #757575;resize: vertical;width:280px;
      border: 1px solid #B6B6B6;
      box-sizing: border-box;
      border-radius: 4px;
      padding-top:1em;padding-left:1em;
      font-family: 'Roboto', sans-serif;
      transition: height 0.2s;
    }
    textarea:focus-within{outline: #3994DA solid 2px;border: none;}
    #txtarea{position:relative;}
`

/* FORM inputs*/
const FormTxt = styled.form`
    position relative;
    display: grid;

    label{
        margin: 0px auto 8px auto;
        position relative;
    }



    label span, #txtarea>span{
        padding: 6px;
        background: white;
        max-height: 20px;
        opacity: 1;
        font-size: .775rem;
        margin-left: 10px;
        position: absolute;
        top: -18px;
        opacity: 0;
        color: #B6B6B6;
        transition: opacity 0.2s, top 0.4s;
        text-align: left!important;
    }


    label:focus-within, input:focus-visible, #txtarea:focus-within{
      span{
          top: -14px;
          opacity: 1;
          color: #3994DA;
      }
      input, textarea{
          outline: #3994DA solid 2px;border: none;
      }
      input[type="password"]::placeholder{
          content:'JJJJJJJJJ';
      }
      textarea{height: 150px;}
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

        background: linear-gradient(180deg, #7AC4FF 0%, #3994DA 100%);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18), 0px 2px 2px rgba(0, 0, 0, 0.08);
        color: white;
        border: 1px solid #B6B6B6;
        box-sizing: border-box;
        border: none;
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
const Icon = styled.svg`
    fill: #F4433A;
    width: 18px;
    height: 18px;
    display: inline-block;
    position: absolute;
    top: 15px;
    right: 15px;
`


export  const ContactForm = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame>
        <header><img src={Header} /></header>

        <FormTxt>
          <label for="email">
              <span>Email Address</span>
              <Icon viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
              </Icon>
              <input type="text" name="email" class="form-control" placeholder="Enter email" id="email" />
              <p>Incorrect password try again</p>
          </label>


          <label for="password">
              <span>Password</span>
              <Icon viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" />
              </Icon>
              <input  type="email"  name="password" class="form-control"  placeholder="Enter password"  id="password" />
              <p>Incorrect email try again</p>
          </label>


          <div id='txtarea'>
            <span>Text message</span>
            <textarea placeholder="Your Message"></textarea>
          </div>
          <input type="submit" name="login" value="send" class="btn btn-success" />


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