import React from "react";

interface FormTabsProps {
  formTag: string;
  handlerTag: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function FormTabs({ formTag, handlerTag }: FormTabsProps) {
  const formTags = ["address", "contact", "dates", "confirm"];

  return (
    <ul className="grid grid-cols-4 gap-x-8 text-[13px] font-montserrat h-[57px] w-full relative">
      {formTags.map((id, index, arr) => (
        <div key={id} className="flex flex-col justify-between items-center gap-2 relative">
          <div
            className={`rounded-full text-white flex items-center justify-center w-[28.49px] h-[26.97px] relative ${arr.indexOf(formTag) >= index ? "bg-black" : "bg-letter-grey"}`}
          >
            {arr.indexOf(formTag) > index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              index + 1
            )}

            {index !== arr.length - 1 && (
              <div
                className={`absolute top-1/2 left-full h-[1px] ${arr.indexOf(formTag) > index ? "bg-black" : "bg-letter-grey"}`}
                style={{ width: "calc(100% + 3rem)" }}
              ></div>
            )}
          </div>

          <a
            className={`cursor-pointer transition-opacity ${arr.indexOf(formTag) >= index ? "text-black" : "text-letter-grey"}`}
            id={id}
            onClick={handlerTag}
          >
            <li className="uppercase">{id}</li>
          </a>
        </div>
      ))}
    </ul>
  );
}
