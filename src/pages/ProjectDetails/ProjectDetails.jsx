import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
    const handleProjectInvitation = () => {
        console.log("Invitation button clicked");
    };

    const members = ["Chathurya", "John", "Jane", "Smith"];

    return (
        <div className='border-b py-4 px-20 flex items-center justify-between'>
            <div className="flex justify-between border p-10 rounded-lg gap-x-5">
                <ScrollArea className="h-screen w-[120%] pr-1">
                    <div className="text-gray-400 pb-10 w-full">
                        <h1 className="text-lg font-semibold pb-5">
                            Create Ecommerce Website using React
                        </h1>
                    

                        <div className="space-y-5 pb-10 text-sm">
                            <p className="w-full md:max-w-lg lg:max-w-xl ">
                                Description for Create Ecommerce Website using React
                            </p>
                            <div className="flex">
                                <p className="w-36">Project lead</p>
                                <p>Chathurya</p>
                            </div>
                            <div className="flex items-center">
                                <p className="w-36">Members:</p>
                                <div className="flex items-center gap-2">
                                    {members.map((member, index) => (
                                        <Avatar className="cursor-pointer" key={index}>
                                            <AvatarFallback>{member[0]}</AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={handleProjectInvitation}
                                            className="m-2"
                                        >
                                            <span>invite</span>
                                            <PlusIcon className="w-3 h-3" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>Invite User</DialogHeader>
                                        <InviteUserForm />
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

                        <section>
                            <p className="py-4 border-b text-lg tracking-wider">Tasks</p>
                            <div className="lg-flex md:flex gap-2  justify-normal py-5">
                                <IssueList status='pending' title='Todo list'/>
                                <IssueList status='in-progress' title='In-progress'/>
                                <IssueList status='done' title='Done'/>
                            </div>
                        </section>
                    </div>
                </ScrollArea>
                <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
                   <ChatBox/> 
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;