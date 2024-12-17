import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DotFilledIcon, DotsVerticalIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

const ProjectCard = () => { 
    const navigate=useNavigate()
    return ( 
        <Card className='p-5 w-full lg:max-w-3xl'>
            <div className='space-y-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-5'>
                    <h1 onClick={() => navigate("/project/1")} className='cursor-pointer font-bold text-lg'>
                        Create ecommerce project
                    </h1>

                        <DotFilledIcon />
                        <p className='text-sm text-gray-400'>fullstack</p>
                    </div>  
                    <div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button className='w-2 h-2' variant='ghost' size='icon'>
                                    <DotsVerticalIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>
                                    Update
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>              
                </div>
                <p className='text-gray-500 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipi
                </p>
                <div className='flex flex-wrap gap-3 items-center'>
                    {[1, 2, 3, 4].map((item) => <Badge key={`keyword-${item}`} variant='outline'>{"frontend"}</Badge>)}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;