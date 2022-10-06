

import {Navbar,NavbarBrand, Button, Container } from 'reactstrap';

function App() {
  return (
 <>
         <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Aghanya Rudra World</NavbarBrand>
          </div>
         </Navbar>
         <Container>
          
              <h1 className="display-4">Hello, Reactstrap!</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space content
                out within the larger container.
              </p>
              <Button color="primary">Learn more</Button>
            
    </Container>
         </>
  );
}

export default App;
