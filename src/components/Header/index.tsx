import React from 'react';
import Button from '../common/Button';
import Container from '../common/Container';
import './header.css';

interface Props {}
const Header: React.FC = (props: Props) => {
  return (
  <div className="root">
    <Container>
      <div className="header-wrapper">
        <div>
         123 
         <Button></Button>
        </div>
        <div>
          456
        </div>
      </div>
    </Container>
  </div>);
}
export default Header;