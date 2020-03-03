import styled from 'styled-components';

const StyledSelect = styled.select`
  outline: none;
  border: none;
  appearance: none;
  border: 1px solid #999;
  background-color: transparent;
  border-radius: 0;
  padding: 5px 7px;
  min-width: ${props => (props.size === 'small' ? '75px' : '150px')};
  width: 100%;
`;

export default StyledSelect;
