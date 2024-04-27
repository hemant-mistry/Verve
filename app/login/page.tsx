"use client"
import React from "react";

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
  Button,
  Textarea,
  Checkbox,
  Input,
} from "@nextui-org/react";
import "./page.css";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon";
import supabaseBrowser from "../../lib/supabase/browser";

export default function Login() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLoginWithOAuth = (provider:"google") =>{
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider,
      options:{
        redirectTo:location.origin + "/login/callback",
      }
    })
  }

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Link href="/">
            <span className="font-bold text-inherit text-white">Verve</span>
          </Link>
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
              style={{ marginRight: "1rem" }}
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
              variant="flat"
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="login-main-container">
        <div className="login-header">
          <h2 className="login-heading-message tracking-tight first:mt-0">
            Start journaling with Verve..
          </h2>
          <div className="login-input-fields">
            <Input
              type="email"
              placeholder="Enter your email"
              className="email-input-field"
              variant="bordered"
            />
            <Input
              
              variant="bordered"
              placeholder="Enter your password"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="password-input-field"
            />
             
          </div>
          
        </div>
        <Button className= "login-submit-button" color="primary" variant="shadow">
        Login
      </Button> 
      <Button className= "login-google-button text-white" color="success" variant="shadow" onClick={()=>handleLoginWithOAuth("google")}>
        Login with Google
      </Button> 
      </div>
    </>
  );
}
