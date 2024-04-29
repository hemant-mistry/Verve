"use client";
import "./page.css";
import VerveNavbar from "../_components/navbar";
import { checkAuth, logout } from "../../lib/supabase/auth";
import { createNote } from "./actions";
import NewPost from "./ui/NewPost";
import { useState } from "react";
export default function Post() {
  const [text, settext] = useState("");
  const [flushAfter24Hours, setFlushAfter24Hours] = useState(false);

  const handleNoteSubmit = async () => {
    console.log("Clicked the submit button!");
    createNote(text,flushAfter24Hours);
  };

  function handleTextChange(data: string) {
    settext(data);
  }
  // Function to handle checkbox state change
  function handleCheckboxChange(checked: boolean) {
    setFlushAfter24Hours(checked);
  }
  return (
    <>
      <VerveNavbar checkAuth={checkAuth} logout={logout} />
      <NewPost
        onSubmit={handleNoteSubmit}
        handleTextChange={handleTextChange}
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
}
