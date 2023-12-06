import { useRouter } from "next/router";
import React from "react";

function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  if (currentPath === "/secondstep") {
    return (
      <div className="flex justify-center items-center flex-col ">
        <div className="">
          <p className="text-[16px] font-semibold">Chose Service</p>{" "}
        </div>
        <div>Step 2/2</div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col ">
        <div className="">
          <p className="text-[16px] font-semibold">Chose Service</p>{" "}
        </div>
        <div>Step 1/2</div>
      </div>
    );
  }
}

export default Header;
