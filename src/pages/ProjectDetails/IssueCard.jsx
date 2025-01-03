import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons"
import UserList from "./UserList"
import { useNavigate } from "react-router-dom"

const IssueCard = () => {
  const navigate=useNavigate();
  return (
    <Card className='rounded-md py-1 pb-1'>
      <CardHeader className='py-0 pb-1'>
        <div className="flex justify-between items-center">
          <CardTitle className='cursor-pointer text-sm' onClick={()=>navigate("/project/1/issue/1")}>
            Create Navbar
          </CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <DotsVerticalIcon/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className='py-0'>
        <div className="flex items-center justify-between text-xs">
          <p>FBP - {1}</p>
          <DropdownMenu className='w-[30rem] border-red-400'>
            <DropdownMenuTrigger asChild >
              <Button size='icon' className='bg-gray-900 hover:text-black text-white rounded-full'>
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon/>
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserList/>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  )
}

export default IssueCard