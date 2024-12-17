import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import React from 'react';
import CreateProjectForm from '../Project/CreateProjectForm';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { PersonIcon } from '@radix-ui/react-icons';

const Navbar = () => {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>

        <div className='flex items-center gap-3'>

            <p className='cursor-pointer'>Project Management</p>

            <Dialog>

                <DialogTrigger asChild>
                    <Button variant='ghost' className="focus-visible:outline-none focus:ring-2 focus:ring-gray-500">New Project</Button>
                </DialogTrigger>
                

                <DialogContent>
                    {/* <DialogHeader>Create New Project</DialogHeader> */}
                    <CreateProjectForm/>
                </DialogContent>

            </Dialog>

            <Button variant='ghost'>Upgrade</Button>

        </div>

        <div className='flex gap-3 items-center'>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon' className='rounded-full border-gray-500 '>
                        <PersonIcon/>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    <DropdownMenuItem>
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <p>Code with C</p>

            

        </div>
        
    </div>
  )
}

export default Navbar;

