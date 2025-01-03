import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserList = () => {
  return (
    <>
      <div className="space-y-2">
        {/* Static Border Box */}
        <div className="border rounded-md">
          <p className="py-2 px-3">{"Smith" || "Unassignee"}</p>
        </div>

        {/* Dynamic User List */}
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="py-2 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md px-4"
          >
            <Avatar>
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Code with C</p>
              <p className="text-sm text-gray-500">@codewithC</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
