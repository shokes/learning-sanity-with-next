import React from 'react';
import Navbar from '/components/Navbar';
import { Container } from 'react-bootstrap';
import Head from 'next/head';

const PageLayout = ({ children, className }) => {
  return (
    <>
      {/* <Head>
      change of fonts setup
    </Head> */}
      <Container>
        <Navbar />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default PageLayout;
