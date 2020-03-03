import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;
  ${props =>
    props.disabled &&
    'pointer-events: none; opacity: 0.5; cursor: not-allowed;'}
`;

export default Wrapper;
