import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { DialogClose, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Cross1Icon } from '@radix-ui/react-icons';

const CreateProjectForm = () => {
  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      category: '',
      tags: ['javascript', 'react'],
    },
  });

  const tags = [
    'all',
    'react',
    'nextjs',
    'spring boot',
    'mysql',
    'mongodb',
    'angular',
    'python',
    'flask',
    'django',
  ];

  const handleTagsChange = (newValue) => {
    const currentTags = new Set(form.getValues('tags'));
    if (currentTags.has(newValue)) {
      currentTags.delete(newValue);
    } else {
      currentTags.add(newValue);
    }
    form.setValue('tags', Array.from(currentTags));
  };

  const onSubmit = (data) => {
    console.log('create project data', data);
  };

  return (
    <div>
      <DialogTitle className="text-lg font-semibold">Create New Project</DialogTitle>
      <DialogDescription className="text-sm text-gray-500">
        Fill out the form below to create a new project.
      </DialogDescription>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Project Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-2 px-4 rounded-md"
                    placeholder="Project name..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Project Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-2 px-4 rounded-md"
                    placeholder="Project description..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category Selection */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => field.onChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="fullstack">Full Stack</SelectItem>
                      <SelectItem value="frontend">Frontend</SelectItem>
                      <SelectItem value="backend">Backend</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Tags Selection */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => handleTagsChange(value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                {/* Selected Tags */}
                <div className="flex gap-1 flex-wrap mt-2">
                  {(field.value || []).map((item) => (
                    <div
                      key={item}
                      onClick={() => handleTagsChange(item)}
                      className="cursor-pointer flex rounded-full items-center border gap-2 px-4 py-1"
                    >
                      <span className="text-xs">{item}</span>
                      <Cross1Icon className="h-3 w-3" />
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full mt-2">
            Create Project
          </Button>
        </form>
      </Form>

      {/* Dialog Close Button */}
      <DialogClose asChild>
        <Button variant="ghost" className="mt-6">
          Close
        </Button>
      </DialogClose>
    </div>
  );
};

export default CreateProjectForm;
