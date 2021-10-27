import React from 'react';
import Login from './assets/login.gif';
import styled from 'styled-components';

const StyledOutWrapper= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    background-color: #DCDCDC;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
`

const StyledWrapper = styled.div`

    width: 350px;
    height: 700px;
    border: 2px solid #F9F9F9;
    background: white;
    border-radius: 40px;
    box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.08);
    flex-direction:"row-reverse";
    overflow:hidden;


`

const Img = styled.img`
    width: 65%;
    margin: 4em auto 1em auto;
    display: block;
`
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
const Links = styled.b`
    font-size: 12px;
    margin-top:16px;
    text-transform: uppercase;
    cursor: pointer;
    color: #7462E2;
    text-align:center;
`


class week4 extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
      console.log(this.state);

      let input = {};
      input["email"] = "";
      input["password"] = "";
      this.setState({input:input});

      alert('You are now logged in to your account!');
    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  

  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter a valid email address.";
        }
      }
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
  
      this.setState({
        errors: errors
      });


      return isValid;
  }
   

  render() {
    return (
        <StyledOutWrapper>
        <StyledWrapper>
            <Img src={Login} />
            <FormTxt onSubmit={this.handleSubmit}>
 
                <label for="email">
                    <span>Email Address</span>
                    <input type="text" name="email" value={this.state.input.email} onChange={this.handleChange} class="form-control" placeholder="Enter email" id="email" />
                    <p className="text-danger">{this.state.errors.email}</p>
                </label>


                <label for="password">
                    <span>Password</span>
                    <input  type="password"  name="password"  value={this.state.input.password} onChange={this.handleChange} class="form-control"  placeholder="Enter password"  id="password" />
                    <p className="text-danger">{this.state.errors.password}</p>
                </label>

                <Links>FORGOT PASSWORD?</Links>
                <input type="submit" name="login" value="Login" class="btn btn-success" />

                <a>No Account? <Links>Sign up</Links></a>
            </FormTxt>
        </StyledWrapper>
    </StyledOutWrapper>
    );
  }
}
  
export default week4;