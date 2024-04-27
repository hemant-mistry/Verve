"use client";
import { useEffect, useState } from "react";
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
    Button
  } from "@nextui-org/react";

// Define the type for checkAuth function
type CheckAuthFunction = () => Promise<{ user: any; error: any }>;
export default function VerveNavbar({ checkAuth,logout }: { checkAuth: CheckAuthFunction;  logout: () => Promise<void> }) {
    const [loggedinUser, setLoggedinUser] = useState(""); // Initialize with null
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        // Call checkAuth when component mounts
        const fetchData = async () => {
            try {
                const { user, error } = await checkAuth();
                if (error) {
                    console.error('Error fetching user:', error);
                } else {
                    // Parse the user data if needed
                    const parsedUser = JSON.parse(JSON.stringify(user)); // Parse the user data here
                    setLoggedinUser(parsedUser.email);
                    console.log('Authenticated user:', parsedUser);
                }
                setLoading(false); // Set loading to false after fetching user data
            } catch (error) {
                console.error('Error fetching user:', error);
                setLoading(false); // Set loading to false in case of error
            }
        };
        fetchData();
    }, [checkAuth]);
    
    const handleLogout = async () => {
        try {
            await logout(); // Call the logout function
            setLoggedinUser("");
            // Optionally, redirect the user or perform any other actions after logout
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

 
    // Render Navbar after user data is fetched
    return (
        <>
            {loggedinUser !== "" && (
                <Navbar>
                    <NavbarBrand>
                        <Link href="/">
                            <p className="font-bold text-inherit text-white">Verve</p>
                        </Link>
                    </NavbarBrand>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name={loggedinUser}
                                size="sm"
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{loggedinUser} </p>
                            </DropdownItem>

                            <DropdownItem key="settings">My Settings</DropdownItem>
                            <DropdownItem key="team_settings">Team Settings</DropdownItem>
                            <DropdownItem key="analytics">Analytics</DropdownItem>
                            <DropdownItem key="system">System</DropdownItem>
                            <DropdownItem key="configurations">Configurations</DropdownItem>
                            <DropdownItem key="help_and_feedback">
                                Help & Feedback
                            </DropdownItem>
                            <DropdownItem key="logout" color="danger" onClick={handleLogout}>
                                Log Out
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
            )}
            {loggedinUser === "" && (
                <Navbar>
                    <NavbarBrand>
                        <Link href="/">
                            <p className="font-bold text-inherit text-white">Verve</p>
                        </Link>
                    </NavbarBrand>
                    <NavbarContent as="div" justify="end">
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
                            <Link href="/login">
                                <Button className="login-button" color="primary" variant="flat">
                                    Login
                                </Button>
                            </Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
            )}
        </>
    );
}
