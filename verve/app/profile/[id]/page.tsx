"use client"
import { useEffect } from "react"
import { Chart } from "chart.js";
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
export default function Profile() {
    useEffect(() => {
        var canvas = document.getElementById('myChart') as HTMLCanvasElement;
        var ctx = canvas?.getContext('2d');
        if (ctx) {
            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    datasets: [{
                        data: [1, 3, 2, 5, 1, 2, 1, 1, 1, 1],
                        label: "Streaks",
                        borderColor: "#3cba9f",
                        backgroundColor: "#71d1bd",
                        fill: false,
                    }]
                }
            });
        }
    }, []);
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
      <div className="profile-main-container">
        <div className="profile-image-container">
          <Avatar
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            size="lg"
            className="w-20 h-20"
          />
        </div>
        <div className="profile-content-container">
          {/* Add profile name, description, etc. here */}
          <div className="profile-username">
            <p>John Doe</p>
          </div>
          <div className="profile-bio">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              praesentium expedita impedit! Nam laborum, ut inventore sapiente
              quos eaque laboriosam voluptas
            </p>
          </div>
          <div className="w-[1100px] h-screen flex line-chart-container">
            <div className=" pt-0 rounded-xl  w-full h-fit shadow-xl">
              <canvas id="myChart"></canvas>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
