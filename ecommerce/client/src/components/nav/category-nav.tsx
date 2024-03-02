'use client'
import { cn } from "@/lib/utils";
import { ClientResponse } from "@shopify/storefront-api-client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbCategory } from "react-icons/tb";
import { useToggle } from "react-use";
import { Button } from '../ui/button';

const CategoryNav = ({
  menuData,
  isOpenCategory: isOpenCategoryDefault = false,
  hasOverlay = true,
  inHeader = true,
  className = '',
}: {
  menuData: ClientResponse<any>;
  isOpenCategory?: boolean;
  hasOverlay?: boolean;
  inHeader?: boolean;
  className?: string;
}) => {
  const [isOpenCategory, toggleOpenCategory] = useToggle(isOpenCategoryDefault);
  // const [hoverable, hovered] = useHover();
  const [categoryFocus, setCategoryFocus] = useState<any>(null);

  useEffect(() => {
    if (!isOpenCategory && categoryFocus) {
      setCategoryFocus(null);
    }
  }, [isOpenCategory]);

  const handleOpenCategory = () => {
    toggleOpenCategory();
    window.scrollTo({top: 0, behavior: 'instant'})
  }

  return (
    <div className={cn({"relative": !inHeader}, className)}>
      {inHeader && (
        <Button
          className="hidden md:flex space-x-1 bg-secondary/15 text-white hover:bg-secondary/15"
          variant={"secondary"}
          onClick={handleOpenCategory}
        >
          <TbCategory size={23} />
          <span>{"Danh mục"}</span>
        </Button>
      )}
      {hasOverlay && (
        <span
          onClick={toggleOpenCategory}
          className={cn(
            "fixed z-10 inset-0 top-16 opacity-0 bg-black/50 invisible",
            {
              "visible opacity-100": isOpenCategory,
            }
          )}
        />
      )}

      <div
        className={cn(
          "opacity-0 invisible w-full rounded-lg",
          {
            "absolute left-8 top-20 z-10": hasOverlay,
          },
          {
            "opacity-100 visible": isOpenCategory,
          }
        )}
      >
        {menuData?.errors && <span>{menuData.errors.message}</span>}
        <div className="flex w-56 flex-col bg-white shadow-md rounded-lg">
          {menuData.data?.menu?.items?.map((menu: any) => (
            <div key={menu.id} className="group w-full">
              <Button
                onMouseEnter={() => setCategoryFocus(menu)}
                className="w-full justify-between pr-1 rounded-lg"
                variant={categoryFocus?.id === menu?.id ? "secondary" : "ghost"}
              >
                {menu?.title}
                <ChevronRight />
              </Button>
              <div className="opacity-0 hidden z-10 absolute w-[calc(100%-230px)] left-[220px] inset-0 group-hover:block group-hover:opacity-100">
                {categoryFocus?.items?.length > 0 && (
                  <div className="grid grid-cols-4 opacity-0 gap-6 flex-wrap group-hover:opacity-100 m-2 mt-0 bg-white shadow-md rounded-lg px-4 py-2">
                    {categoryFocus?.items?.map((menuItems1: any) => (
                      <div key={menuItems1.id}>
                        {menuItems1?.items?.length > 0 ? (
                          <span
                            className={cn(" ", "text-black/80 font-semibold")}
                          >
                            {menuItems1.title}
                          </span>
                        ) : (
                          <Link
                            href={"#"}
                            className="hover:text-primary block py-1 text-muted-foreground text-sm"
                            key={menuItems1?.id}
                          >
                            {menuItems1?.title}
                          </Link>
                        )}

                        <div>
                          {menuItems1?.items?.map((menuItems2: any) => (
                            <Link
                              href={"#"}
                              className="hover:text-primary block py-1 text-muted-foreground text-sm"
                              key={menuItems2?.id}
                            >
                              {menuItems2?.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav
