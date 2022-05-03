import styled from 'styled-components';
export const StyledTemperatureUnitSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & .MuiSwitch-switchBase {
    color: #ed6c02;
  }
  & .MuiSwitch-track {
    background-color: #34454e !important;
  }
  p {
    color: white;
    font-size: 1.25em;
  }
`;
