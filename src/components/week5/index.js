import react from 'react';
import styled from 'styled-components';
import cat1 from './assets/cats/1.png';
import cat2 from './assets/cats/2.png';
import cat3 from './assets/cats/3.png';
import cat4 from './assets/cats/4.png';
import dog1 from './assets/dogs/1.png';
import dog2 from './assets/dogs/2.png';
import dog3 from './assets/dogs/3.png';
import dog4 from './assets/dogs/4.png';
import horse1 from './assets/horses/1.png';
import horse2 from './assets/horses/2.png';
import horse3 from './assets/horses/3.png';
import horse4 from './assets/horses/4.png';

const StyledOutWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: #DCDCDC;
`
const FilledStyle2 = styled.a`
    height: 48px;
    font-size: 1rem;
    padding: 0 16px 0 16px;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #198DE1;
    border: none;
    color: white;
    transition: background 0.4s, color 0.2s, width 0.2s;


    &:hover {
        cursor: pointer;
        background: #ECE0FD;
        color: #D71F31;
        width: 200px;
        svg{
          fill: #D71F31;
        }
    }
    &:active {
    }

`
const Icon = styled.svg`

  transition: fill 0.25s;
  fill: white;
  

  width: 18px;
  height: 18px;
  display: inline-block;


  margin-left: -4px;
  margin-right: 8px;
  stroke-width: 0.5;

  transition: transform 2s;

  &:hover{
    /*transform: rotate(45deg);*/
    
  }
`;

/* Phone Frame */
const PhoneFrame = styled.div`

    width: 414px;
    height: 830px;
    /*border: 2px solid #F9F9F9;*/
    background: white;
    border-radius: 40px;
    
    flex-direction:"row-reverse";
    overflow:hidden;
    position: relative;
    /*HEADER*/
    header{
      height:200px;
      background:white;
      position:relative;
      box-shadow: 0px 6px 12px rgb(0 0 0 / 10%);
      margin-bottom: 2em;
    }
    nav{
      width: 300px;
      height: 830px;
      align-items: center;
      display: flex;
      background: linear-gradient(180deg, #D71F31 0%, #303491 100%);
      position: absolute;
      left:0;
      z-index: 9;
      border-radius: 40px 0px 0px 40px;
    }
    nav:hover{
    }
    nav h1{color:white;font-weight: normal;padding-left: 16px;}
    ul{padding-left: 16px;}
    nav ul li{list-style-type: none;margin: 0px 0px 16px 0px;}


`
/*Menu Nav*/
const Nav = styled.a`
  position: absolute;
  right: 2em;
  top: 3em;
`
const Tabs = styled.ul`
  width: 414px;
  position: absolute;
  bottom: 0;
  padding-left: 0px;
  margin: 0;
  li{
    list-style-type: none;
    display: inline-flex;
    width: 138px;
    border-bottom: 1px solid #e5e5e5;
    text-align: center;
    justify-content: center;
    padding-bottom: 1em;
    transition: border-bottom 0.4s, color 0.5s;
  }
  li:hover{
    border-bottom: 3px solid red;
    color:red;
    cursor: pointer;
  }
`

/*Container*/
const Container = styled.div`
  margin: 4em 30px;
  width: 354px;
  height: 435px;
  div{
    width: 169px;
  }
  article{float:left;}
  article:nth-of-type(1){margin-right: 16px;}
  
  article:nth-of-type(1) div:nth-of-type(1){height:250px;margin-bottom:16px;}
  article:nth-of-type(1) div:nth-of-type(2){height:169px;}
  article:nth-of-type(2) div:nth-of-type(2){height:250px;}
  article:nth-of-type(2) div:nth-of-type(1){height:169px;margin-bottom:16px;}

`

const Week3 = () => {
  

  
  function cats() {
    document.getElementById("dogs").style.display = "none";
    document.getElementById("horses").style.display = "none";
    document.getElementById("cats").style.display = "block";
  }
  function dogs() {
    document.getElementById("dogs").style.display = "block";
    document.getElementById("horses").style.display = "none";
    document.getElementById("cats").style.display = "none";
  }
  function horses() {
    document.getElementById("cats").style.display = "none";
    document.getElementById("dogs").style.display = "none";
    document.getElementById("horses").style.display = "block";

  }
    return (
      <StyledOutWrapper>
        <PhoneFrame>
          <nav>
            
            <ul>
            <h1>Hello <b>Hakim,</b><br />have a nice day!</h1>
              <li>
                <FilledStyle2>
                  <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                  <span>Profile</span>
                </FilledStyle2>
              </li>
              <li>
                <FilledStyle2>
                  <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                  <span>Balance</span>
                </FilledStyle2>
              </li>
              <li>
                <FilledStyle2>
                  <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                  <span>Support</span>
                </FilledStyle2>
              </li>
              <li>
                <FilledStyle2>
                  <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                  <span>Dark Theme</span>
                </FilledStyle2>
              </li>
              <li>
                <FilledStyle2>
                  <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                  <span>Surveys</span>
                </FilledStyle2>
              </li>   
            </ul>
          </nav>
          <header>
            <Nav id="nav" ><b>X</b></Nav>
            <Tabs>
              <li onClick={dogs}>DOGS</li>
              <li onClick={cats}>CATS </li>
              <li onClick={horses}>HORSES</li>
            </Tabs>
          </header>
          <Container id="dogs">
            <article>
              <div><img src={dog2}/></div>
              <div><img src={dog1}/></div>
            </article>

            <article>
              <div><img src={dog4}/></div>
              <div><img src={dog3}/></div>
            </article>
          </Container>

          <Container id="cats" style={{display: "none"}}>
            <article>
              <div><img src={cat2}/></div>
              <div><img src={cat1}/></div>
            </article>

            <article>
              <div><img src={cat4}/></div>
              <div><img src={cat3}/></div>
            </article>
          </Container>

          <Container id="horses" style={{display: "none"}}>
            <article>
              <div><img src={horse2}/></div>
              <div><img src={horse1}/></div>
            </article>

            <article>
              <div><img src={horse4}/></div>
              <div><img src={horse3}/></div>
            </article>
          </Container>


        </PhoneFrame>
      </StyledOutWrapper> 



    )

}



export default Week3;