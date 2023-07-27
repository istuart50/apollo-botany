import {
  Button,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";
import "./AppNavbar.css";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems)
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light dark expand="md" container="fluid" fixed="top">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/istuart50/apollo-botany">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
          <UncontrolledDropdown style={{ marginRight: "64px" }}>
            <DropdownToggle nav caret style={{ color: "white" }}>
              <FontAwesomeIcon icon={faShoppingCart} /> Cart
            </DropdownToggle>
            <DropdownMenu right>
              {
                cartItems.length ? cartItems.map((item) =>
                  <CartItem item={item} />
                ) : (<DropdownItem>
                  No items in cart.
                </DropdownItem>)
              }
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/checkout">
                  <Button>Checkout</Button>
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
