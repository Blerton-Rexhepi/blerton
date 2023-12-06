import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Body() {
  const router = useRouter();

  const Service = [
    { name: "Dermal Wrinkle Treatment", id: "Dermal Wrinkle Treatment" },
    { name: "Secret RF", id: "Secret RF" },
    { name: "HArmonyCA", id: "HArmonyCA" },
    { name: "Profhilo", id: "Profhilo" },
  ];

  const handleServiceClick = (service: { id: any }) => {
    router.push(`/secondstep?id=${service.id}`);
  };

  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex  justify-center  py-[15px] h-fit ">
        <div className="w-[350px] bg-white ">
          <div className="px-[10px] ">
            {Service.map((index) => (
              <div
                className="border border-solid text-left my-[10px] flex justify-between items-center px-[10px] py-[10px]"
                key={index.id}
              >
                <div>
                  <p className="text-[16px]"> {index.name}</p>
                </div>
                <div
                  className="w-[16px]"
                  onClick={() => handleServiceClick(index)}
                >
                  <Link href={`/secondstep?id=${index.id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
      </div>
      <div className="flex justify-center items-center text-[13px] h-[50px] ">
        <div className="w-fit bg-white px-[10px] py-[10px]">
          <p>
            Not sure about consultation type? Please, call{" "}
            <span className="text-blue-300">0203 7959063 </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
