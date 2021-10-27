import react from 'react';
import topleft from './assets/top-left.png';
import BottomRight from './assets/bottom-right.png';
import Runner from './assets/runner.gif';
import styled from 'styled-components';

const StyledOutWrapper= styled.div`
    width: 100vw;
    height: 100vh;
    backgound-colo: #e5e5e5;
`

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    flex-direction:"row-reverse";

`

const StyledHeader = styled.h1`
    text-align: center;
    color: #1e57f1:
    font-size: 30px; 
`

const BottomFloatRight = styled.img`
    float: right;
`



const Week1 = () => (
    <StyledOutWrapper>
        <img src={topleft}/>
        <StyledWrapper>
            <div>
                <img src={Runner} />
                <StyledHeader>Sally</StyledHeader>
            </div>
        </StyledWrapper>
        <BottomFloatRight src={BottomRight}/>
    </StyledOutWrapper>
);

    

export default Week1;