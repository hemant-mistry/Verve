"use client";
import { Button, Checkbox, Textarea } from "@nextui-org/react";

export default function NewPost({
  onSubmit,
  handleTextChange,
  handleCheckboxChange
}: {
  onSubmit: () => void;
  handleTextChange: (data: string) => void;
  handleCheckboxChange: (checked: boolean) => void; 
}) {
  return (
    <>
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
              minRows={8}
              onChange={(e) => handleTextChange(e.target.value)}
            />
            <Checkbox className="post-checkbox" defaultSelected={false}  color="warning" onChange={(e) => handleCheckboxChange(e.target.checked)}>
              Flush after 24 hours?
            </Checkbox>
            <Button
              className="post-submit-button"
              color="primary"
              variant="shadow"
              onClick={onSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
