import { getMenuQuery } from "@/lib/shopify/queries/menu";
import { shopifyClient } from "@/lib/shopify/shopify-client";
import { cn } from "@/lib/utils";
import { CircleUserRound, MapPin, Phone, ShoppingBag, Truck } from "lucide-react";
import CategoryNav from "./category-nav";
import InputHomeSearch from "./input-home-search";
import { Button } from "../ui/button";
import Logo from '../logo';

const MainNav = async ({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) => {

    const result = await shopifyClient.request(getMenuQuery, {
        variables: {
            handle: "categories-menu",
        },
    });

    return (
        <nav
            className={cn("w-full h-16 bg-primary fixed z-50 top-0", className)}
            {...props}
        >
            <div className="flex relative w-full h-full lg:container items-center mx-auto space-x-2">
                <span className="hidden lg:block">
                    <Logo width={140} />
                </span>
                <span className="block lg:hidden">
                    <Logo type="icon" width={30} />
                </span>

                <CategoryNav menuData={result} />
                <InputHomeSearch />
                <div className="flex flex-nowraspan items-center gap-1">
                    <Button
                        className="hidden md:flex space-x-1 hover:bg-secondary/15 px-2 py-1 hover:text-white text-white"
                        variant={"ghost"}
                    >
                        <Phone />
                        <span className="font-light text-left text-xs">
                            {"Gọi mua hàng"}
                            <br />
                            <span className="font-bold">1800.2044</span>
                        </span>
                    </Button>
                    <Button
                        className="space-x-1 hover:bg-secondary/15 px-2 py-1 hover:text-white text-white"
                        variant={"ghost"}
                    >
                        <MapPin />
                        <span className="font-light text-left text-xs">
                            {"Cửa hàng"}
                            <br />
                            <span>{"gần bạn"}</span>
                        </span>
                    </Button>
                    <Button
                        className="hidden xl:flex space-x-1 hover:bg-secondary/15 px-2 py-1 hover:text-white text-white"
                        variant={"ghost"}
                    >
                        <Truck />
                        <span className="font-light text-left text-xs">
                            <span className="font-light">
                                {"Tra cứu"}
                                <br />
                                <span>{"đơn hàng"}</span>
                            </span>
                        </span>
                    </Button>
                    <Button
                        className="space-x-1 hover:bg-secondary/15 px-2 py-1 hover:text-white text-white"
                        variant={"ghost"}
                    >
                        <ShoppingBag />
                        <span className="font-light text-left text-xs">
                            <span className="font-light">
                                {"Giỏ"}
                                <br />
                                <span>{"hàng"}</span>
                            </span>
                        </span>
                    </Button>

                    <Button
                        className="hidden md:flex space-x-1 bg-secondary/15 px-2 py-1 text-white flex-col hover:bg-secondary/15"
                        variant={"secondary"}
                        size={"lg"}
                    >
                        <CircleUserRound size={21} className="flex-shrink-0" />
                        <span className="font-light flex-1 text-xs">
                            {"Đăng nhập"}
                        </span>
                    </Button>
                </div>
            </div>
        </nav>
    );
}

export default MainNav