import react from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
`

/* FILLED BUTTON */
const FilledStyle = styled.button`
    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    margin-right: 5em;
    padding: 0 16px 0 16px;

    background: linear-gradient(180deg, #FFB14A 0%, #FB8C00 100%);
    color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;

    transition: box-shadow 0.4s;
    
    &:hover {
        // <Thing> when hovered
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 12px 12px 0px #0000002E;
        cursor: pointer;
    }
    &:active {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.08), inset 160px 40px 4px rgba(255, 255, 255, 0.30);
        border: none;
    }
`;

const FilledStyle2 = styled.button`
    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    padding: 0 16px 0 16px;

    display: inline-flex;
    align-items: center;


    font-weight: bold;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;

    border: 1px solid #198DE1;
    border: none;
    background: linear-gradient(180deg, #5EBBFF 0%, #3B90CD 100%);  
    color: white;
    transition: box-shadow 0.4s;


    &:hover {
        // <Thing> when hovered
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 12px 12px 0px #0000002E;
        cursor: pointer;
    }
    &:active {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.08), inset 168px 36px 4px rgba(255, 255, 255, 0.25);
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

export  const FilledButton = () => {
    return [
            <FilledStyle><b>filled button</b></FilledStyle>,
            <FilledStyle2>
                <Icon viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon>
                <span>filled button</span>
            </FilledStyle2>
    ] 
}



/* FLOATING BUTTON */
const Floating = styled.button`
    height: 56px;
    width: 56px;
    border: none;
    border-radius: 80px;
    background: linear-gradient(180deg, #5EBBFF 0%, #3B90CD 100%);    
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    transition: box-shadow 0.4s;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    &:hover {
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 12px 12px 0px #0000002E;
        cursor: pointer;
    }
    &:active {
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08), 0px 8px 8px rgba(0, 0, 0, 0.18), inset 0px 55px 4px rgba(255, 255, 255, 0.16); 
    }
`
const Fevs = styled.svg`
    width: 24px;
    height: 24px;
    fill: none;
    stroke:white;
    stroke-width: 1.5;
    transition: fill 1s, stroke 1s;
    
    &:active{
        fill: #FF0057;
        stroke: none;
    }
`

const BtnFloating = styled.button`
    font-size: .875rem;
    line-height: 2.25rem;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 24px;
    padding: 0 20px;
    width: auto;
    max-width: 100%;
    height: 48px;

    color:white;
    margin-left: 4em;
    border: none;
    border-radius: 80px;
    background: linear-gradient(180deg, #5EBBFF 0%, #3B90CD 100%);    
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    transition: box-shadow 0.4s;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        // <Thing> when hovered
        box-shadow: 0px 6px 6px 0px #00000014;
        box-shadow: 0px 12px 12px 0px #0000002E;
        cursor: pointer;
    }
    &:active {
        box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.18), 0px 4px 4px rgba(0, 0, 0, 0.08), inset 190px 55px 4px rgba(255, 255, 255, 0.25);
    }
`
const FevsBtn = styled.svg`
    width: 24px;
    height: 24px;
    fill: none;
    stroke:white;
    stroke-width: 1.5;
    padding-right:8px;
    transition: fill 1s, stroke 1s;

`

export  const Floatings = () => {
    return [
            <Floating><Fevs><path d="M12 22L10.405 20.5613C4.74 15.4714 1 12.1144 1 7.99455C1 4.6376 3.662 2 7.05 2C8.964 2 10.801 2.88283 12 4.27793C13.199 2.88283 15.036 2 16.95 2C20.338 2 23 4.6376 23 7.99455C23 12.1144 19.26 15.4714 13.595 20.5722L12 22Z" /></Fevs></Floating>,
            <BtnFloating>
                <FevsBtn><path d="M12 22L10.405 20.5613C4.74 15.4714 1 12.1144 1 7.99455C1 4.6376 3.662 2 7.05 2C8.964 2 10.801 2.88283 12 4.27793C13.199 2.88283 15.036 2 16.95 2C20.338 2 23 4.6376 23 7.99455C23 12.1144 19.26 15.4714 13.595 20.5722L12 22Z" /></FevsBtn>
                <span>Floting button</span>
            </BtnFloating>
    ] 
}

/* Stroke */
const Storke2 = styled.button`

    font-weight: bold;
    margin-left: 4em;

    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    padding: 0 16px 0 16px;

    display: inline-flex;
    align-items: center;


    color: #198DE1;
    background-color: #ffff;
    border: 1px solid #198DE1;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);

    transition: box-shadow 0.2s;
    &:hover{
        cursor: pointer;
    }
    &:active {
        box-shadow: inset 160px 36px 4px rgba(25, 141, 225, 0.25);
    }



`
const Storke = styled.button`
    font-size: .875rem;
    text-transform: uppercase;
    height: 36px;
    font-weight: bold;
    margin-left: 8em;
    padding: 0 16px 0 16px;


    color: #198DE1;
    background-color: #ffff;
    border: 1px solid #198DE1;
    border-radius: 4px;
    box-shadow: 0px 2px 2px 0px #00000014;
    box-shadow: 0px 4px 4px 0px #0000002E;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.1);

    transition: box-shadow 0.2s;
    &:hover{
        cursor: pointer;
    }   
    &:active {
        box-shadow: inset 160px 36px 4px rgba(25, 141, 225, 0.25);
    }
`
const Icon2 = styled.svg`
    fill: #198DE1;
    
    
    width: 18px;
    height: 18px;
    display: inline-block;
  
  
    padding-right: 8px;
    stroke-width: 0.5;

`

export  const Stroke = () => {
    return [
            <Storke>
                <span>Storke</span>
            </Storke>,
            <Storke2>
                <Icon2 viewBox="0 0 24 24">
                    <path d="M13.8399 4.8546L12.1307 4.8546V11.6307L5.35459 11.6307V13.3399L12.1307 13.3399V20.116L13.8399 20.116L13.8399 13.3399H20.616V11.6307H13.8399L13.8399 4.8546Z"/>
                </Icon2>
                <span>Storke</span>
            </Storke2>
    ] 
}

/* Txt */
const TxtBtn = styled.button`

    font-size: .875rem;
    text-transform: uppercase;
    height: 36px;
    font-weight: bold;
    margin-left: 8em;
    padding: 0 16px 0 16px;

    color: #198DE1;
    background-color: #ffff;
    border: none;
    border-radius: 4px;

    transition: box-shadow 0.2s;
    &:hover{
        cursor: pointer;
    }   
    &:active {
        box-shadow: inset 100px 36px 4px rgba(25, 141, 225, 0.25);
    }
`
const TxtBtn2 = styled.button`
  
    font-weight: bold;


    height: 36px;
    font-size: .875rem;
    text-transform: uppercase;
    margin-left: 4em;
    padding: 0 16px 0 16px;

    display: inline-flex;
    align-items: center;

    color: #198DE1;
    background-color: #ffff;
    border: none;
    border-radius: 4px;

    transition: box-shadow 0.2s;
    &:hover{
        cursor: pointer;
    }
    &:active {
        box-shadow: inset 160px 36px 4px rgba(25, 141, 225, 0.25);
    }
`

export  const ButtonTxt = () => {
    return [
        <TxtBtn>Txt btn</TxtBtn>,
        <TxtBtn2><Icon2 viewBox="0 0 24 24"><path d="M21 5.84211V7.73684H18.1579V10.5789H16.2632V7.73684H13.4211V5.84211H16.2632V3H18.1579V5.84211H21ZM18.1579 19.1053H4.89474V5.84211H10.5789V3.94737H4.89474C3.85263 3.94737 3 4.8 3 5.84211V19.1053C3 20.1474 3.85263 21 4.89474 21H18.1579C19.2 21 20.0526 20.1474 20.0526 19.1053V13.4211H18.1579V19.1053ZM14.3684 13.4211V17.2105H16.2632V13.4211H14.3684ZM10.5789 17.2105H12.4737V9.63158H10.5789V17.2105ZM8.68421 17.2105V11.5263H6.78947V17.2105H8.68421Z"/></Icon2><span>TXT btn</span></TxtBtn2>
    ] 
}

const Frame = styled.div`
    width: 250px;
    height: 250px;
    background: red;
`
const Week3 = () => {

    return (
        <StyledWrapper>
            <ButtonTxt />
        </StyledWrapper>
    )
}



export default Week3;