import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { GrFavorite } from "react-icons/gr";
import { Badge } from "@ui/badge";

import { cn } from "@lib/utils";


const CATEGORIES = [
  "ALL",
  "Fullstack",
  "Frontend",
  "APIs",
  "AWS"
]

const TAGS = [
  "ALL",
  "Javascript",
  "Typescript",
  "React",
  "Next",
  "Express",
  "Django",
  "Vue",
]


export default function SearchAndFilter () {
  const [ searchText, setSearchText ] = useState("");
  const [ activeView, setActiveView ] = useState("favorite");
  const [ activeCategory, setActiveCategory ] = useState("ALL");
  const [ activeTag, setActiveTag ] = useState("ALL");


  return (
    <header className="search-and-filter">
      <section className="search-bar">
        <div className="search">
          <Button
            variant="ghost"
            size="icon"
            className="search-icon-btn"
          >
            <Search className="opacity-65" />
          </Button>
          <Input
            type="text"
            name="search"
            id="search"
            value={ searchText }
            placeholder="Name, React, Fullstack..."
            onChange={ (e) => setSearchText(e.target.value) }
            className="search-input"
          />
        </div>

        <div className="filter-btns">
          <Button 
            onClick={
              () => setActiveView('favorite')
            }
            className={
              cn("filter-btn",
                activeView === 'favorite'
                  ? 'bg-primary hover:bg-primary text-white dark:text-foreground!'
                  : 'text-primary/80 bg-transparent hover:bg-inherit hover:text-primary'
              )
            }
          >
            <GrFavorite />
          </Button>
          <Button 
            onClick={
              () => setActiveView('all')
            }
            className={
              cn("filter-btn",
                activeView === 'all'
                  ? 'bg-primary hover:bg-primary text-white dark:text-foreground!'
                  : 'text-primary/80 bg-transparent hover:bg-inherit hover:text-primary'
              )
            }
          >
            ALL
          </Button>
        </div>
      </section>

      <section className="filters">
        <section className="category-filters">
          {
            CATEGORIES.map(
              (category) => (
                <Badge
                  variant="outline"
                  key={ category }
                  onClick={
                    () => setActiveCategory(category)
                  }
                  className={
                    cn("category-badges",
                      activeCategory === category
                        ? 'bg-primary'
                        : 'hover:text-primary hover:border-primary'
                    )
                  }
                >
                  { category }
                </Badge>
              )
            )
          }
        </section>

        <section className="tag-filters">
          {
            TAGS.map(
              (tag) => (
                <Badge
                  variant="outline"
                  key={ tag }
                  onClick={
                    () => setActiveTag(tag)
                  }
                  className={
                    cn("tag-badges",
                      activeTag === tag
                        ? 'bg-foreground text-white dark:text-black'
                        : 'hover:border-foreground'
                    )
                  }
                >
                  { tag }
                </Badge>
              )
            )
          }
        </section>
      </section>
    </header>
  );
}