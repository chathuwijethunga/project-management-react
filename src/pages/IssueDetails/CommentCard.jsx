import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const CommentCard = () => {
  return (
    <div className="flex justify-between p-3 border rounded-md">
      {/* Comment Information */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <Avatar>
          <AvatarFallback>C</AvatarFallback>
        </Avatar>

        {/* Comment Content */}
        <div className="space-y-1">
          <p className="font-semibold">Code with C</p>
          <p className="text-sm text-gray-500">How much work is pending?</p>
        </div>
      </div>

      {/* Delete Button */}
      <Button className="rounded-full" variant="ghost" size='icon'>
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CommentCard;
