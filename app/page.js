import Hero from "./sections/Hero";
import Business from "./sections/Business";
import Work from "./sections/Work";
import Pricing from "./sections/Pricing";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";
export default function Home() {
  return (
    <>
      <Hero />

      <div>Carousel</div>

      <Business />

      <Work />

      <Pricing id="pricing"/>

      <Faq id="faqs"/>

      <Footer />

      <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm sm:p-8">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">49</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex items-center">
            <svg
              className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              2 team members
            </span>
          </li>
          <li className="flex">
            <svg
              className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              20GB Cloud storage
            </span>
          </li>
          <li className="flex">
            <svg
              className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              Integration help
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Sketch Files
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              API Access
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              Complete documentation
            </span>
          </li>
          <li className="flex line-through decoration-gray-500">
            <svg
              className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 ms-3">
              24×7 phone & email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
        >
          Choose plan
        </button>
      </div>

      <section className="flex flex-col items-center justify-center bg-black min-h-screen p-10 space-y-10">
        {/* Light Radial */}
        <section className="flex flex-wrap gap-4 justify-center">
          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #FDB00B 0%, #FDA70F 36%, #FB8121 80%, #D24856 100%)",
            }}
          >
            48-hour <br />
            iteration cycles
          </div>

          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2x rounded-3xl"
            style={{
              background:
                "linear-gradient(to top right, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 73%, #FBAA08 100%)",
            }}
          >
            TEST <br />
            iteration cycles
          </div>

          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #66259D 0%, #B51F69 13%, #EC1B44 25%, #FBAA08 73%, #FBAA08 100%)",
            }}
          >
            TEST <br />
            iteration cycles
          </div>
        </section>

        {/* Dark Radial */}
        <section className="flex flex-wrap gap-4 justify-center">
          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #7B17B9 0%, #FA8C9A 45%, #902700 100%)",
            }}
          >
            48-hour <br />
            iteration cycles
          </div>

          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #0D4504 0%, #211B1B 39%, #271022 63%, #2B0606 100%)",
            }}
          >
            48-hour <br />
            iteration cycles
          </div>

          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #4A3400 0%, #322A16 39%, #092727 63%, #001D35 100%)",
            }}
          >
            48-hour <br />
            iteration cycles
          </div>

          <div
            className="w-[360px] h-[470px] flex items-center justify-center text-white font-bold text-2xl rounded-3xl"
            style={{
              background:
                "linear-gradient(to bottom left, #00384E 0%, #270C2A 53%, #2A0001 100%)",
            }}
          >
            48-hour <br />
            iteration cycles
          </div>
        </section>
      </section>
    </>
  );
}
