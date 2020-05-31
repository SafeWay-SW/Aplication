import React from 'react';
import { Container, Column, FormContainer, Row, Template} from '../../StyledMain';
const App = () => {
  return (
    <Template>
      <Container>
          <Row>
              <Column >
                <FormContainer>
                    <form className="login">
                        
                    </form>
                </FormContainer>
              </Column>
          </Row>
      </Container>
    </Template>
  );
}

export default App;