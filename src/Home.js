import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Paper, Grid } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`;

const StyledPaper = styled(Paper)`
  padding: 32px;
  text-align: center;
  background-color: #FFF8E1;

  @media (max-width: 600px) {
    padding: 16px;
  }
`;

export default function Home() {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#2E7D32' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Qaza Namaz Calculator
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <StyledContainer>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h4" gutterBottom>
                Welcome to the Qaza Namaz Calculator App!
              </Typography>
              <Typography variant="body1">
                Calculate and keep track of your missed daily prayers (qaza namaz)
                easily using this Islamic-themed app.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: '20px' }}
              >
                Get Started
              </Button>
            </StyledPaper>
          </Grid>
        </Grid>
      </StyledContainer>
    </div>
  )
}
