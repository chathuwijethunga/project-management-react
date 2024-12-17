import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PlusIcon } from "@radix-ui/react-icons"
import InviteUserForm from "./InviteUserForm"

const ProjectDetails = () => {
    const handleProjectInvitation=()=>{

    }
    return(
        <div className="mt-5 lg:px-10">
            <div className="lg:flex gap-5 justify-between pb-4">
                <ScrollArea className="h-screen w-full pr-2">
                    <div className="text-gray-400 pb-10 w-full">
                        <h1 className="text-lg font-semibold pb-5">Create Ecommerce Website using react</h1>
                    </div>
                
                <div className="space-y-5 pb-10">
                    <p className="w-full md:max-w-lg lg:max-w-xl"> description for Create Ecommerce Website using react </p>
                    <div className="flex">
                        <p className="w-36">Project lead</p>
                        <p>Chathurya</p>
                    </div>
                    <div className="flex">
                        <p className="w-36">Members:</p>
                        <div className="flex items-center gap-2">
                            {[1,2,3,4].map((item)=><Avatar className='cursor-pointer' key={item}> 
                                <AvatarFallback>C</AvatarFallback>
                            </Avatar>)}
                        </div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <DialogClose asChild >
                                    <Button size='sm' variant='outline' onClick="handleProjectInvitation" className='m-2'>
                                        <span>invite</span>
                                        <PlusIcon className="w3 h-3"/>
                                    </Button>
                                </DialogClose>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>Invite User</DialogHeader>
                                <InviteUserForm/>
                            </DialogContent>
                        </Dialog>
                    </div>
                    <div className="flex">
                        <p className="w-36">Category</p>
                        <p>FullStack</p>
                    </div>

                    <div className="flex">
                        <p className="w-36">Project lead</p>
                        <Badge>Chathurya</Badge>
                    </div>
                </div>
                </ScrollArea>
            </div>
        </div>

    )
}

export default ProjectDetails