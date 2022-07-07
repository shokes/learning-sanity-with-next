import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const BlogNavbar = function () {
  return (
    <Navbar className='fj-navbar fj-nav-base' bg='transparent' expand='lg'>
      <Navbar.Brand className='fj-navbar-brand'>
        <Link href='/'>
          <a>Filip-Jerga</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link className='fj-navbar-item fj-navbar-link' href='/'>
            Home
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BlogNavbar;
