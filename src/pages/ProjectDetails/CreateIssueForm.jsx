import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";


const CreateIssueForm = () => {
  const form = useForm({
    defaultValues: {
      issueName: "",
      description: "",
    },
  });

  

  const onSubmit = (data) => {
    console.log("create project data", data);
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField control={form.control} name='issueName' render={({field}) =>(
            <FormItem>
              <FormControl>
                <Input {...field} type='text' className='border w-full border-gray-700 py-5 px-5' placeholder ='issueName...'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} />

<         FormField control={form.control} name='description' render={({field}) =>(
            <FormItem>
              <FormControl>
                <Input {...field} type='text' className='border w-full border-gray-700 py-5 px-5' placeholder ='description...'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )} />
          <DialogClose asChild>
            <Button type='submit' className='w-full mt-5'>
              Create Issue
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
    
  );
};

export default CreateIssueForm;
