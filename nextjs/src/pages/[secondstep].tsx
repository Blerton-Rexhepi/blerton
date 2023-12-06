import Header from "@/components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function SecondStep() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Header />
      <div
        onClick={() => window.history.back()}
        className="w-[30px] h-[30px] flex justify-start items-start"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>{" "}
      <div className="flex justify-center  text-[20px]">{id}</div>
    </div>
  );
}

export default SecondStep;
