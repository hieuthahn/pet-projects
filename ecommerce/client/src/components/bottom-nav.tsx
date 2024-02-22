import { CircleUserRoundIcon, HomeIcon, MoreHorizontalIcon, StoreIcon } from "lucide-react";
import { TbCategory } from "react-icons/tb";
import { Button } from "./ui/button";

const BottomNav = () => {
  return (
      <div className="gap-2 grid grid-cols-5 md:hidden w-full fixed bottom-0 left-0 right-0 h-20 shadow-inner items-center">
          <Button className="flex-col h-full" variant={"ghost"}>
              <HomeIcon />
              <span>{"Trang chủ"}</span>
          </Button>
          <Button className="flex-col h-full" variant={"ghost"}>
              <TbCategory size={23} />
              <span>{"Danh mục"}</span>
          </Button>
          <Button className="flex-col h-full" variant={"ghost"}>
              <StoreIcon />
              <span>{"Cửa hàng"}</span>
          </Button>
          <Button className="flex-col h-full" variant={"ghost"}>
              <CircleUserRoundIcon />
              <span>{"Đăng nhập"}</span>
          </Button>
          <Button className="flex-col h-full" variant={"ghost"}>
              <MoreHorizontalIcon />
              <span>{"Xem thêm"}</span>
          </Button>
      </div>
  );
}

export default BottomNav