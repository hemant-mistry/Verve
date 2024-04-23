"use client";
import { useEffect, useState } from "react";
import { Button, Image } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

import "./homepage.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "20vh" }}
      >
        <div className="main-header-section text-center">
          <p className="text-center">
            Currently unavailable on mobiles. We'll bring that up soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Verve</p>
        </NavbarBrand>
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="hidden transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavbarItem>
            <Button
              className="signup-button"
              as={Link}
              color="primary"
              href="#"
              variant="flat"
            >
              Sign Up
            </Button>
            <Button
              className="login-button"
              as={Link}
              color="primary"
              href="#"
              variant="light"
            >
              Login
            </Button>
            <Button color="success" endContent={<CameraIcon />}>
              Take a photo
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div
        className="flex justify-center items-center"
        style={{ marginTop: "20vh" }}
      >
        <div className="main-header-section text-center">
          <div className="main-heading">
            <h2 className="welcome-message tracking-tight first:mt-0">
              Welcome to Verve!
            </h2>
          </div>
          <div className="main-sub-heading">
            <p className="text-center">
              To think beyond the norms made by the society and create something
              extraordinary
            </p>
          </div>
          <Button
            className="main-header-button"
            color="default"
            variant="shadow"
          >
            Escape your reality
          </Button>
        </div>
      </div>
      <br />
      <div className="verve-info-section-1 flex justify-center items-center">
        <Image
          isBlurred
          width={240}
          height={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className="cover-image"
        />
        <p className="verve-info-section-text">
          Verve is all about building a space where people can share their
          thoughts, knowing they're not alone. It's about helping folks see that
          tough times will pass, and there are better days ahead. We're here to
          shine a light on that journey and offer support every step of the way.
        </p>
      </div>
    </>
  );
}
