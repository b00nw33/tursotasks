"use client";

import { addMessageToDatabase } from "@/actions/add-messages-to-database";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function MessageForm() {
  const [message, setMessage] = useState("");

  async function handleAddMessageToDatabase() {
    const response = await addMessageToDatabase(message);

    if (response.ok) {
      setMessage("");
    }
  }

  return (
    <div className="flex flex-col justify-center gap-10">
      <Input
        placeholder="Type your task..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button onClick={handleAddMessageToDatabase}>Submit</Button>
    </div>
  );
}
