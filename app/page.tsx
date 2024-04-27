"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import VerveNavbar from "./_components/navbar";
import Home from "./_components/home";
import Post from "./post/page";
import { checkAuth, logout } from "../lib/supabase/auth";

export default function Main() {
  // Render components based on the URL path
  const renderContent = () => {
    // Get the current route
    const pathname = usePathname();
   
    // Conditionally render components based on the route
    if (pathname === "/post") {
      console.log("inside post")
      return (
        <>
          <VerveNavbar checkAuth={checkAuth} logout={logout} />
          <Post />
        </>
      );
    } else {
      // Default route ("/") or any other route
      return (
        <>
          <VerveNavbar checkAuth={checkAuth} logout={logout} />
          <Home />
        </>
      );
    }
  };

  return renderContent();
}
