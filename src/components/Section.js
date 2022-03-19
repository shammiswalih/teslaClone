import React from "react";
import Styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  backgroundImg,
  description,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <Itemtext>
          <h1>{title}</h1>
          <p>{description}</p>
        </Itemtext>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

const Wrap = Styled.div`
width: 100vw;
background-image: ${(props) => `url("/images/${props.bgImage}")`};
height: 100vh;
background-size: cover;
background-position: center;
backround-repeat:no-repeat;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;
const Itemtext = Styled.div`
// position: fixed;

min-width: 100%;
padding-top: 15vh;
text-align: center;
`;
const ButtonGroup = Styled.div`
display: flex;
margin-bottom: 30px;    
@media (max-width: 768px){
    flex-direction: column;
}
`;
const LeftButton = Styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
opacity: 0.85;
text-transform: uppercase;
font-size: 12px;
cursor: pointer;
margin: 8px;
`;
const RightButton = Styled(LeftButton)`
background: white;
opacity: 0.65;
color: black;
`;
const DownArrow = Styled.img`
margin-top: 20px;  
height: 40px;
overflow-x: hidden;
animation: animateDown infinite 1.5s;
`;
const Buttons = Styled.div`
`;
export default Section;
