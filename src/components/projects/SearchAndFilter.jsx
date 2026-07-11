import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { GrFavorite } from "react-icons/gr";
import { Badge } from "@ui/badge";


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


const filter__and__search = "m-6 mb-12 flex flex-col gap-3 p-3 border rounded-xl bg-muted"

const search__bar = "flex items-center gap-2 max-[360px]:gap-1"
const search = "flex items-center flex-1 border rounded-lg bg-background"
const search_icon_btn = "px-3 bg-transparent hover:bg-transparent!"
const search__input = "border-none focus-visible:ring-0 rounded-none focus-visible:border-none bg-transparent! placeholder:opacity-65 max-[520px]:text-sm max-[420px]:placeholder:text-xs autofill:bg-transparent!"
const filter__btns = "flex items-center bg-muted p-1 gap-0.5 rounded-lg"
const filter_btn = "cursor-pointer transition-all! duration-500! font-mono p-2 px-4 text-primary bg-transparent hover:bg-primary hover:text-white hover:dark:text-foreground max-[520px]:p-2 max-[420px]:p-1"

const filters = "flex flex-col gap-2"

const responsive = "max-[420px]:gap-1"

const category_filters = `flex gap-2 flex-wrap ${responsive}`
const category_badges = "transition-all! duration-500! cursor-pointer font-mono text-xs p-3 hover:bg-primary"

const tag_filters = `flex gap-2 flex-wrap ${responsive}`
const tag_badges = "transition-all! duration-500! cursor-pointer font-mono text-xs p-3 hover:bg-orange-400/75"


export default function SearchAndFilter () {
  const [ searchText, setSearchText ] = useState("")

  return (
    <header className={filter__and__search}>
      <section className={search__bar}>
        <div className={search}>
          <Button
            variant="ghost"
            size="icon"
            className={ search_icon_btn }
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
            className={search__input}
          />
        </div>

        <div className={filter__btns}>
          <Button className={ filter_btn }>
            <GrFavorite />
          </Button>
          <Button className={filter_btn}>
            ALL
          </Button>
        </div>
      </section>

      <section className={filters}>
        <section className={category_filters}>
          {
            CATEGORIES.map(
              (category) => (
                <Badge
                  variant="outline"
                  key={ category }
                  className={category_badges}
                >
                  { category }
                </Badge>
              )
            )
          }
        </section>

        <section className={tag_filters}>
          {
            TAGS.map(
              (tag) => (
                <Badge
                  variant="outline"
                  key={ tag }
                  className={tag_badges}
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