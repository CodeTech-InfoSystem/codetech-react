import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <header
        className="py-12"
        style={{
          background:
            "linear-gradient(180deg, #242423 3.95%, #434342 23.15%, #545454 37.84%, #7B7B7A 57.04%, #B9B9B9 73.93%, #D3D3D3 86.67%, #FFFFFF 100%)",
        }}
      >
      </header>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap items-center justify-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src="/images/404.svg"
              alt="404 Not Found"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2 text-center md:text-left px-4">
            <h1 className="text-6xl font-bold text-gray-800">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mt-2">UH OH! You're lost.</h2>
            <p className="text-lg text-gray-500 mt-4">
              The page you are looking for does not exist. How you got here is a mystery.
              But you can click the button below to go back to the homepage.
            </p>
            <Link
              href='/'
              className="mt-6 inline-block px-6 py-3 bg-[#AD954F] text-white rounded-md text-lg font-semibold"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
