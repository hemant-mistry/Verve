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
export default function Post() {
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
              variant="light"
            >
              Login
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
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
              style={{ height: "15rem" }}
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
