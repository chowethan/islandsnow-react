import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Grid, Form } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
      <Menu borderless className="topmenu">
        <Container>
          <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
          <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
          <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
          <Menu.Item fitted><Icon name="instagram" /></Menu.Item>


          <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
          <Menu.Item fitted><Icon name="search" /></Menu.Item>
          <Menu.Item fitted><Icon name="user" /></Menu.Item>
          <Dropdown item simple icon="shopping cart" text='My Cart (0)'>
            <Dropdown.Menu>
              <Dropdown.Item text="Your cart is currently empty" />
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
        <Container fluid>
          <Image centered src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/logo.png?18002885318982737731" />
          <Menu borderless className="middlemenu">
            <Grid container centered>
              <Dropdown item simple icon="dropdown" text="Men">
                <Dropdown.Menu>
                  <Dropdown.Item text="Tank Tops" />
                  <Dropdown.Item text="Shirts" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Women">
                <Dropdown.Menu>
                  <Dropdown.Item text="Tank Tops" />
                  <Dropdown.Item text="Shirts" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Kids">
                <Dropdown.Menu>
                  <Dropdown.Item text="Shirts" />
                  <Dropdown.Item text="Onesies" />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item simple icon="dropdown" text="Brands">
                <Dropdown.Menu>
                  <Dropdown.Item text="Aloha Surf Project" />
                  <Dropdown.Item text="Da Mokes" />
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Search</Menu.Item>
            </Grid>
          </Menu>
          <Image fluid src="https://cdn.shopify.com/s/files/1/1035/5187/t/5/assets/slide1.jpg?18002885318982737731" />
        </Container>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <Container fluid className="footer">
        <Grid container columns={3}>
          <Grid.Column>
            <span class="footer-header">Navigation</span>
            <hr />
            <a href="#">About Us</a><br />
            <a href="#">Videos</a><br />
            <a href="#">Store Locations</a><br />
            <a href="#">Shipping & Returns</a><br />
            <a href="#">Terms & Conditions</a><br />
            <a href="#">Privacy Policy</a>
          </Grid.Column>
          <Grid.Column>
            <span class="footer-header">Main Menu</span>
            <hr />
              <a href="#">Men</a><br />
              <a href="#">Women</a><br />
              <a href="#">Kids</a><br />
              <a href="#">Brands</a><br />
              <a href="#">Search</a>
          </Grid.Column>
          <Grid.Column>
            <span class="footer-header">Connect</span>
            <hr />
              Sign up for the latest updates<br />
              <Form>
                <input type="text" placeholder="Enter Email Address" style={{width: "75%", height: "50px", borderRadius: 0, textIndent: "10px"}} /><input type="submit" value="Join" style={{width: "25%", height: "50px"}} />
              </Form>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <Container fluid>
          <TopMenu />
          <Content />
          <Footer />
        </Container>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
