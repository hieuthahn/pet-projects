'use client'
import { cn } from "@/lib/utils"
import { SearchIcon, X } from "lucide-react"
import { useState } from "react"
import { ImFire } from "react-icons/im"
import { useToggle } from "react-use"

const InputHomeSearch = () => {
    const [value, setValue] = useState('')
    const [onFocus, toggleFocus] = useToggle(false)

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target);
    };

  return (
      <form
          onSubmit={handleSearch}
          className="relative flex rounded-lg max-w-52 lg:max-w-full flex-1 items-center bg-white p-2 gap-2"
      >
          <SearchIcon className="text-muted-foreground" size={21} />
          <input
              type="text"
              autoComplete="off"
              placeholder="Bạn cần tìm gì?"
              className="w-full pr-5 focus:outline-none"
              value={value}
              onFocus={toggleFocus}
              onChange={(e) => setValue(e.target.value)}
          />
          <div
              className={cn(
                  "fixed lg:absolute top-[53px] z-10 invisible shadow-lg left-0 right-0 mx-2 lg:mx-0 p-4 opacity-0 rounded-lg bg-white",
                  {
                      "opacity-1 visible": onFocus,
                  }
              )}
          >
              <div className="flex items-center space-x-2">
                  <p className="text-muted-foreground">Xu hướng tìm kiếm</p>
                  <ImFire className="text-primary" />
              </div>
          </div>
          {value?.length > 0 && (
              <X
                  onClick={() => setValue("")}
                  className="text-muted-foreground cursor-pointer absolute right-2 top-[50%] translate-y-[-50%] z-10"
                  size={18}
              />
          )}
          <span
              onClick={toggleFocus}
              className={cn(
                  "fixed transition-opacity -inset-1 w-dvw top-16 opacity-0 invisible bg-black/50 z-0",
                  {
                      "opacity-1 visible": onFocus,
                  }
              )}
          />
      </form>
  );
}

export default InputHomeSearch