"use client"
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
} from "@nextui-org/react";
import "./page.css";
import VerveNavbar from "../_components/navbar";
import { checkAuth, logout } from "../../lib/supabase/auth";
export default function Post() {
  return (
    <>
    <VerveNavbar checkAuth={checkAuth} logout={logout} />
      <div className="post-main-container">
        <div className="post-main-header">
          <h2 className="post-heading-message tracking-tight first:mt-0">
            Hey Star, Tell me about your day
          </h2>
        </div>
        <div className="post-text-container">
          <div className="textarea-wrapper">
            <Textarea
              variant="bordered"
              placeholder="How was your day?"
              className="textarea-container"
              minRows = {8}
            />
            <Checkbox className="post-checkbox" defaultSelected color="warning">
              Flush after 24 hours?
            </Checkbox>
            <Button
              className="post-submit-button"
              color="primary"
              variant="shadow"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
