/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Box from './utility/Box';

const MainLayout = ({
  side,
  top,
  main,
}: {
  side?: ReactNode;
  top?: ReactNode;
  main: ReactNode;
}) => {
  return (
    <Container
      fluid
      css={{
        height: '100%',
      }}
    >
      <Row>{top}</Row>
      <Row
        css={{
          height: 'calc(100% - 56px)',
        }}
      >
        <Col md={2}>
          <Box>{side}</Box>
        </Col>
        <Col
          md={10}
          css={{
            overflowY: 'auto',
            height: '100%',
          }}
        >
          <Box>{main}</Box>
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
