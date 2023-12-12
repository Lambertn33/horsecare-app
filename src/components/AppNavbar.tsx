import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from "@/assets/logo.png";

export const AppNavbar = () => {
  return (
    <Navbar rounded className="bg-gray-100">
      <NavbarBrand as={Link} to="/">
        <img src={Logo} className="mr-3 h-12" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Horse cares
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/hostlers">
          Available Hostlers
        </NavbarLink>
        <NavbarLink as={Link} to="/appointments">
          Appointments
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};
