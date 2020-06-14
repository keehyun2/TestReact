import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Header from './components/Header';
import Contents from './components/Contents';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright©'}
      <Link color="inherit" href="mailto:keehyun2@naver.com">
        keehyun2@naver.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <Contents />
        <Copyright />
      </Box>
    </Container>
  );
}
