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
      width: 0px;
      height: 100vh;
      background:red;
      position: absolute;
      right:0;
      z-index: 9;
    }


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
          <nav></nav>
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