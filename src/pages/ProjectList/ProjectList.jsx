import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import ProjectCard from "../Project/ProjectCard";

const tags = [
  "all",
  "react",
  "nextjs",
  "spring boot",
  "mysql",
  "mongodb",
  "angular",
  "python",
  "flask",
  "django",
];

const ProjectList = () => {
    const [keyword, setKeyword] =useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    tag: "all",
  });

  const handleFilterChange = (section, value) => {
    setKeyword(e.target.value)
    setFilters({ ...filters, [section]: value });
    console.log("Filters updated:", filters);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search term:", e.target.value);
  };

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-start py-5">
      {/* Filter Section */}
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl -tracking-wider">filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>
          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              {/* Category Filter */}
              <div>
                <h1 className="pb-3 text-gray-400 border-b text-xl">Category</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-2"
                    defaultValue={filters.category}
                    onValueChange={(value) => handleFilterChange("category", value)}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="category-all" />
                      <Label htmlFor="category-all">all</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="fullstack" id="category-fullstack" />
                      <Label htmlFor="category-fullstack">fullstack</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="frontend" id="category-frontend" />
                      <Label htmlFor="category-frontend">frontend</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="backend" id="category-backend" />
                      <Label htmlFor="category-backend">backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Tag Filter */}
              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b text-xl">Tag</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-2"
                    defaultValue={filters.tag}
                    onValueChange={(value) => handleFilterChange("tag", value)}
                  >
                    {tags.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <RadioGroupItem value={item} id={`tag-${item}`} />
                        <Label htmlFor={`tag-${item}`}>{item}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      {/* Project List Section */}
      <section className="projectListSection w-full lg:w-[70rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative w-full">
            <input
              type="text"
              onChange={handleSearchChange}
              placeholder="Search project"
              className="w-full px-9 py-2 rounded-md border border-border bg-background text-foreground"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>
        </div>

        <div>
            <div className="space-y-5 min-h-[74vh]">
                {/* Conditional Rendering Based on `keyword` */}
                {keyword
                ? [1, 2, 3].map((item) => (
                    <ProjectCard key={`keyword-${item}`}/>
                    ))
                : [1, 2, 3, 4].map((item) => (
                    <ProjectCard key={`keyword-${item}`}/>
                    ))}
            </div>
        </div>

      </section>
    </div>
  );
};

export default ProjectList;
