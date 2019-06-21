// ./src/components/Navbar.js

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavbar({ user }) {
  const navbarStyle = { marginBottom: "25px" };
  return (
    <Navbar bg="light" expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a>Polls!</a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {user && (
              <>
              <Link href="/">
                  <a className="nav-link">Polls Overview</a>
                </Link>
                <Link href="/share-poll">
                  <a className="nav-link">New Poll</a>
                </Link>
                <Link href="/profile">
                  <a className="nav-link">Profile</a>
                </Link>
                <Link href="/logout">
                  <a className="nav-link">Log Out</a>
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                <a className="nav-link">Log In</a>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
