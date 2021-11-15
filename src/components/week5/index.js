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
import Profile from './assets/profile.png';

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
const FilledStyle2 = styled.a`
    height: 48px;
    font-size: 14px;
    padding: 0 16px 0 16px;
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    border-radius: 4px;
    border: 1px solid #198DE1;
    border: none;
    color: #757575;
    transition: background 0.4s, color 0.2s;


    &:hover {
        cursor: pointer;
        background: #ECE0FD;  
        color: #6200EE;
        width: 216px;
        svg{
          fill: #6200EE;
        }
    }
    &:active {
    }

`
const Icon = styled.svg`

  transition: fill 0.25s;
  fill: #757575;

  width: 18px;
  height: 18px;
  display: inline-block;
  margin-left: -4px;
  margin-right: 8px;
  stroke-width: 0.2;


`;

/* Phone Frame */
const PhoneFrame = styled.div`
    width: 410px;
    height: 790px;
    background: white;
    border-radius: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction:"row-reverse";
    overflow:hidden;
    position: relative;
    /*HEADER*/
    header{
      height:200px;
      background:white;
      position:relative;
      box-shadow: 0px 6px 12px rgb(0 0 0 / 10%);
    }
    nav{
      width: 275px;
      height: 790px;
      align-items: center;
      position: absolute;
      left:-275px;
      background-color: #fbfbfb;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.06);
      z-index: 9;
      border-radius: 40px 0px 0px 40px;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: bottom 1s;
    }
    nav:hover{
    }
    nav p, nav h4{color:#757575;font-weight: normal;padding-left: 16px;}
    nav ul{padding: 0px 0em;height: 700px;}
    nav p{font-size:14px;}

    nav ul li{list-style-type: none;margin: 0px;padding-left: 12px;}

    nav a img{padding-left: 16px;width: 30%;margin-bottom: 10px;}
    nav hr{
      width: 275px;
      border: none;
      background-color: #F2F2F2;
      height: 1px;
    }
    #line{height:8px;padding:0px;}
    #full_screen, #Black_screen{width: 100vw; height: 0vh; background: #0404048f; position: absolute; z-index: 0;}

    #IconMenu{position: absolute; left: 30px; top: 60px;cursor: pointer;}
`
/*Menu Nav*/
const Nav = styled.a`
  position: absolute;
  right: 2em;
  top: 3em;
`
const Tabs = styled.ul`
  width: 410px;
  position: absolute;
  bottom: 0;
  padding-left: 0px;
  margin: 0;
  li{
    list-style-type: none;
    display: inline-flex;
    width: 136px;
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
  margin: 0px 30px;
  width: 354px;
  height: 500px;
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

export  const MenuTabs = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame style={{display: "grid"}}>

        <header>
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
  ] 
}


/*Hidden Menu*/


function show_HiddenNav() {
  var bottom_nav = document.getElementById("Nav"),
  full_screen = document.getElementById("full_screen");
  bottom_nav.style.cssText = "left: 0; transition: left 0.5s";
  full_screen.style.cssText = "height: 100vh";
}
function hide_HiddenNav() {
  var bottom_nav = document.getElementById("Nav"),
  full_screen = document.getElementById("full_screen");
  bottom_nav.style.cssText = "left: -275px; transition: left 0.5s";
  full_screen.style.cssText = "height: 0vh";
}

export  const HiddenMenu  = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame>
      <div onClick={hide_HiddenNav} id="full_screen"></div>
      <a id="IconMenu" onClick={show_HiddenNav}>
        <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
          <rect width="24" height="3" rx="1.5" fill="black"/>
          <rect y="7" width="24" height="3" rx="1.5" fill="black"/>
        </svg>
      </a>

      <Container style={{display: "contents"}}>
          <article>
            <div><img src={horse2}/></div>
            <div><img src={horse1}/></div>
          </article>

          <article>
            <div><img src={horse4}/></div>
            <div><img src={horse3}/></div>
          </article>
        </Container>

      <nav id='Nav'>
        <ul>
          <li>
            <a><img src={Profile}/></a>
          </li>

          <li id="line"><hr /></li>
          <li>
            <p>Mail</p>  
          </li> 
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/></Icon>
              <span>Inbox</span>
            </FilledStyle2>
          </li>
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></Icon>
              <span>Outbox</span>
            </FilledStyle2>
          </li>
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></Icon>
              <span>Favorites</span>
            </FilledStyle2>
          </li>
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></Icon>
              <span>Archive</span>
            </FilledStyle2>
          </li>
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></Icon>
              <span>Trash</span>
            </FilledStyle2>
          </li>  
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></Icon>
              <span>Spam</span>
            </FilledStyle2>
          </li>  
        <li id="line"><hr /></li>
        <li>
            <p>Work Folder</p>  
        </li> 
        <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M21,7h-6V5h6V7z M19,10.9c-0.32,0.07-0.66,0.1-1,0.1c-2.76,0-5-2.24-5-5c0-1.13,0.37-2.16,1-3L7,3C5.9,3,5,3.9,5,5v16l7-3 l7,3V10.9z"/></Icon>
              <span>Bookmark remove</span>
            </FilledStyle2>
          </li>
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></Icon>
              <span>Meetings</span>
            </FilledStyle2>
          </li>  
          <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"/></Icon>
              <span>Spam</span>
            </FilledStyle2>
          </li> 
        </ul>
      </nav>

      </PhoneFrame>
    </StyledOutWrapper> 
  ] 
}

/*Bottom Navigation*/
const BottoNavSection = styled.div`
  width:100%;
  height: 100px;
  position absolute;
  bottom:0;
  svg{
    position:absolute;right:8%;bottom:50%;padding:12px;width:30px;height:30px;border-radius:50px;cursor: pointer;
    background: linear-gradient(180deg, #5EBBFF 0%, #3B90CD 100%);    
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    transition: box-shadow 0.4s;

    &:hover {
      box-shadow: 0px 6px 6px 0px #00000014;
      box-shadow: 0px 12px 12px 0px #0000002E;
      cursor: pointer;
    }
    &:active {
      box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.08), inset 190px 55px 4px rgba(255, 255, 255, 0.25);
    }
  }
  
`
const BottomNav = styled.div`
  width: 100%;
  height: 400px!important;
  background-color: #fbfbfb;
  position: absolute;
  bottom:-400px;
  ul{padding: 0px 16px;}
  ul>li{list-style-type: none;}
  ul>li>a{width:340px}
  ul>li>a:hover{width:340px}
  img,p{margin-left:16px;}
  p{font-size:14px;}
  hr{border:0;background-color:#e9e9e9;height:1px;}
`

function show() {
  var bottom_nav = document.getElementById("bottom_nav"),
  Black_screen = document.getElementById("Black_screen");
  bottom_nav.style.cssText = "bottom: 0; transition: bottom 0.5s";
  Black_screen.style.cssText = "height: 100vh";
}
function hide() {
  var bottom_nav = document.getElementById("bottom_nav"),
  Black_screen = document.getElementById("Black_screen");
  bottom_nav.style.cssText = "bottom: -400px; transition: bottom 0.5s";
  Black_screen.style.cssText = "height: 0vh";
}
export  const BottomNavigation  = () => {
  return [
    <StyledOutWrapper>
      <PhoneFrame style={{display: "grid"}}>
        <div onClick={hide} id="Black_screen"></div>
        
        <Container>
          <article>
            <div><img src={horse2}/></div>
            <div><img src={horse1}/></div>
          </article>

          <article>
            <div><img src={horse4}/></div>
            <div><img src={horse3}/></div>
          </article>
        </Container>

        <BottoNavSection>
          <svg onClick={show} height="24px" viewBox="0 0 24 24" width="24px" fill="#ffffff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </BottoNavSection>


        <BottomNav  id='bottom_nav'>
          <ul>
            <li>
              <a><img src={Profile}/></a>
            </li>
            <li>
              <p>Mail: <span>Scort@contact.me</span></p>  
            </li> 
            <li id="line"><hr /></li>
            <li>
            <FilledStyle2>
              <Icon viewBox="0 0 24 24"><path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/></Icon>
              <span>Inbox</span>
            </FilledStyle2>
            </li>
            <li>
              <FilledStyle2>
                <Icon viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></Icon>
                <span>Outbox</span>
              </FilledStyle2>
            </li>
            <li>
              <FilledStyle2>
                <Icon viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></Icon>
                <span>Favorites</span>
              </FilledStyle2>
            </li>
            <li>
              <FilledStyle2>
                <Icon viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/></Icon>
                <span>Archive</span>
              </FilledStyle2>
            </li>
            <li>
              <FilledStyle2>
                <Icon viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></Icon>
                <span>Trash</span>
              </FilledStyle2>
            </li>  

          </ul>
        </BottomNav>

      </PhoneFrame>
    </StyledOutWrapper> 
  ] 
}

const Week5 = () => {
    return (
        <HiddenMenu />
    )
}



export default Week5;