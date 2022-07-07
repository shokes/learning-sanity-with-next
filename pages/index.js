import React from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from '/components/Navbar';
import { Container, Row, Col, Media, Image, Card } from 'react-bootstrap';
import PageLayout from '../components/PageLayout';
import Authorintro from '../components/Authorintro';
import CardListItem from '../components/CardListItem';
import CardItem from '../components/CardItem';
import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  // console.log(blogs);
  return (
    <PageLayout>
      {/* NAVBAR ENDS */}
      <Authorintro />
      <hr />

      <Row className='mb-5'>
        {/* <Col md='10'>
          CardListItem STARTS
          <CardListItem />
          CardListItem ENDS
        </Col> */}
        {blogs.map((blog) => (
          <Col md='4' key={blog.slug}>
            <CardItem {...blog} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default Home;

// this function is called during the build time and provides props to your page and will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
