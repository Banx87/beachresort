import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => (props.img ? props.img : defaultImg)}) center/cover
    no-repeat;
`;

export default StyledHero;
