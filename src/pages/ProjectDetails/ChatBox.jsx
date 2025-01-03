import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"; // Import Input
import { PaperPlaneIcon } from "@radix-ui/react-icons"; // Import PaperPlaneIcon
import { useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("message", message);
    // Clear the input after sending
    setMessage("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="sticky">
      <div className="border rounded-lg">
        <h1 className="border-b p-2 text-2xl">Chat Box</h1>
        <ScrollArea className="h-[32rem] w-full p-5 flex gap-3 flex-col">
          {[1, 2, 3, 4].map((item, index) => (
            index % 2 === 0 ? (
              // Left-aligned message
              <div className="flex gap-4 mb-2 border p-2 rounded-lg justify-start" key={item}>
                <Avatar>
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div className="space-y-1 py-2 px-3 border rounded-ss-2xl rounded-e-xl bg-gray-800">
                  <p className="font-semibold">Smith</p>
                  <p className="text-gray-300 text-sm">How are you?</p>
                </div>
              </div>
            ) : (
              // Right-aligned message
              <div
                className="flex gap-4 mb-2 border p-2 rounded-lg justify-end"
                key={item}
              >
                <div className="space-y-1 py-2 px-3 border rounded-ss-xl rounded-ee-2xl bg-blue-700 text-white">
                  <p className="font-semibold text-right">Chathurya</p>
                  <p className="text-sm">I'm good, thanks!</p>
                </div>
                <Avatar>
                  <AvatarFallback>C</AvatarFallback>
                </Avatar>
              </div>
            )
          ))}
        </ScrollArea>
        <div className="relative p-0 border-t flex items-center gap-2">
          <Input
            placeholder="Type a message..."
            className="py-2 px-3 flex-grow outline-none focus:ring-0"
            value={message}
            onChange={handleMessageChange}
          />
          <Button
            onClick={handleSendMessage}
            className="rounded-full p-2"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
