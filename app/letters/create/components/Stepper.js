import React from "react";
import { motion } from "framer-motion";
import { useLetter } from "@/lib/store/letter";

function Stepper({ step }) {
  const letter = useLetter((state) => state.letter);
  console.log("letter", letter);
  return (
    <div className="  flex justify-center align-middle sticky top-[6rem]">
      {/* <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-1"> */}
      <ol className="grid gap-4 grid-cols-3 overflow-hidden  text-sm sm:grid-cols-1">
        <li>
          <label
            className={` min-h-[90px] ${
              step === 1 ? "border-primary" : "border-muted"
            } text-sm font-medium leading-none  flex flex-col items-center justify-between rounded-md border-2  bg-transparent p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground `}
            for="paypal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-receipt"
            >
              <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 17V7" />
            </svg>
            <p className="leading-none text-center mt-1">
              <strong className="block font-medium"> Pricing </strong>
              <small className=" mt-1"> Choose a package. </small>
            </p>
          </label>
        </li>
        <li>
          <label
            className={`min-h-[90px] ${
              step === 2 ? "border-primary" : "border-muted"
            } text-sm font-medium leading-none  flex flex-col items-center justify-between rounded-md border-2  bg-transparent  p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground `}
            for="paypal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <p className="leading-none text-center mt-1">
              <strong className="block font-medium"> Info </strong>
              <small className="mt-1"> Give some info to santa! </small>
            </p>
          </label>
        </li>
        <li>
          <label
            className={` min-h-[90px] ${
              step === 3 ? "border-primary" : "border-muted"
            } text-sm font-medium leading-none  flex flex-col items-center justify-between rounded-md border-2  bg-transparent  p-2 sm:p-4 hover:bg-accent hover:text-accent-foreground `}
            for="paypal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-scroll-text"
            >
              <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
              <path d="M19 17V5a2 2 0 0 0-2-2H4" />
              <path d="M15 8h-5" />
              <path d="M15 12h-5" />
            </svg>
            <p className="leading-none text-center mt-1">
              <strong className="block font-medium"> More info </strong>
              <small className="mt-1"> List some things. </small>
            </p>
          </label>
        </li>
        <li>
          <label
            className={`min-h-[90px] ${
              step === 4 ? "border-primary" : "border-muted"
            } text-sm font-medium leading-none  flex flex-col items-center justify-between rounded-md border-2  bg-transparent p-4 hover:bg-accent hover:text-accent-foreground `}
            for="paypal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-palette"
            >
              <circle cx="13.5" cy="6.5" r=".5" />
              <circle cx="17.5" cy="10.5" r=".5" />
              <circle cx="8.5" cy="7.5" r=".5" />
              <circle cx="6.5" cy="12.5" r=".5" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
            <p className="leading-none text-center mt-1">
              <strong className="block font-medium"> Choose a template </strong>
              <small className="mt-1"> select one!</small>
            </p>
          </label>
        </li>
        <li>
          <label
            className={`min-h-[90px] ${
              step === 5 ? "border-primary" : "border-muted"
            } text-sm font-medium leading-none  flex flex-col items-center justify-between rounded-md border-2  bg-transparent p-4 hover:bg-accent hover:text-accent-foreground `}
            for="paypal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail-check"
            >
              <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              <path d="m16 19 2 2 4-4" />
            </svg>
            <p className="leading-none text-center mt-1">
              <strong className="block font-medium">
                {" "}
                Letter preview & Payment{" "}
              </strong>
              <small className="mt-1 hidden sm:block">
                {" "}
                Show us the money.{" "}
              </small>
            </p>
          </label>
        </li>
        <li>
          <motion.img
            src="/santa-head.png"
            alt="snowman"
            className="sm:hidden object-cover h-[90px]  "
            // class="object-cover w-[200px] absolute bottom-0 left-0 "
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 15, right: 15, top: 15, bottom: 15 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </li>
      </ol>
    </div>
    // <div className="h-full flex justify-center align-middle">
    //   <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-1">
    //     <li
    //       className={`${
    //         step === 1 ? "border-[primary]" : " border-muted"
    //       } flex items-center justify-center gap-2 p-4 border-2 border-muted bg-transparent hover:bg-accent hover:text-accent-foreground`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="none"
    //         stroke="currentColor"
    //         stroke-width="2"
    //         stroke-linecap="round"
    //         stroke-linejoin="round"
    //         class="lucide lucide-receipt"
    //       >
    //         <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    //         <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    //         <path d="M12 17V7" />
    //       </svg>

    // <p className="leading-none">
    //   <strong className="block font-medium"> Pricing </strong>
    //   <small className="mt-1"> Choose a package. </small>
    // </p>
    //     </li>

    //     <li
    //       className={` ${
    //         step === 2 && "bg-gray-50"
    //       } relative flex items-center justify-center gap-2  p-4`}
    //     >
    //       <span className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"></span>

    //       <span className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"></span>

    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   class="lucide lucide-info"
    // >
    //   <circle cx="12" cy="12" r="10" />
    //   <path d="M12 16v-4" />
    //   <path d="M12 8h.01" />
    // </svg>

    //       <p className="leading-none">
    //         <strong className="block font-medium"> Info </strong>
    //         <small className="mt-1"> Give some info to santa! </small>
    //       </p>
    //     </li>

    //     <li
    //       className={` ${
    //         step === 3 && "bg-gray-50"
    //       } flex items-center justify-center gap-2 p-4`}
    //     >
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   class="lucide lucide-scroll-text"
    // >
    //   <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" />
    //   <path d="M19 17V5a2 2 0 0 0-2-2H4" />
    //   <path d="M15 8h-5" />
    //   <path d="M15 12h-5" />
    // </svg>

    //       <p className="leading-none">
    //         <strong className="block font-medium"> More info </strong>
    //         <small className="mt-1"> List some things </small>
    //       </p>
    //     </li>

    //     <li
    //       className={` ${
    //         step === 4 && "bg-gray-50"
    //       } flex items-center justify-center gap-2 p-4`}
    //     >
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   class="lucide lucide-palette"
    // >
    //   <circle cx="13.5" cy="6.5" r=".5" />
    //   <circle cx="17.5" cy="10.5" r=".5" />
    //   <circle cx="8.5" cy="7.5" r=".5" />
    //   <circle cx="6.5" cy="12.5" r=".5" />
    //   <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    // </svg>

    //       <p className="leading-none">
    //         <strong className="block font-medium"> Choose a template </strong>
    //         <small className="mt-1"> select one! </small>
    //       </p>
    //     </li>

    //     <li
    //       className={` ${
    //         step === 5 && "bg-gray-50"
    //       } flex items-center justify-center gap-2 p-4`}
    //     >
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   stroke-width="2"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    //   class="lucide lucide-mail-check"
    // >
    //   <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
    //   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    //   <path d="m16 19 2 2 4-4" />
    // </svg>
    //       {/* <svg
    //         className="h-7 w-7 shrink-0"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         strokeWidth="2"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    //         />
    //       </svg> */}

    //       <p className="leading-none">
    //         <strong className="block font-medium">
    //           {" "}
    //           Letter preview & Payment{" "}
    //         </strong>
    //         <small className="mt-1"> Show us the money. </small>
    //       </p>
    //     </li>
    //   </ol>
    // </div>
  );
}

export default Stepper;
