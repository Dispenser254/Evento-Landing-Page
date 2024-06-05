function Agenda() {
  return (
    <div id="agenda">
      <div className="mt-16 text-center">
        <h2 className="text-2xl  md:text-4xl font-bold dark:text-white">
          What You Will Learn
        </h2>
        <p className="text-gray-500 text-lg mt-4 mb-8 dark:text-gray-400 ">
          Topics that will be covered in this webinar
        </p>
      </div>
      <div className="flex flex-wrap justify-center mx-auto py-8 px-4 md:mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full sm:w-80  mb-4 bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 sm:h-64 object-cover"
              src="https://i.ibb.co/RzdXZB6/Card-image.jpg"
              alt=""
            />
            <div className="py-4 px-6">
              <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                Front-End Development
              </h2>
              <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                HTML, CSS, JavaScript, and frameworks like React and Vue.js -
                Learn to craft stunning user interfaces and create responsive
                websites that leave a lasting impression.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-80  mb-4 bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 sm:h-64 object-cover"
              src="https://i.ibb.co/PWpPSD7/Card-image-1.jpg"
              alt=""
            />
            <div className="py-4 px-6">
              <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                Back-End Development
              </h2>
              <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                Node.js, Python, MongoDB, MySQL, Express.js, and Django -
                Discover the magic of server-side programming and build scalable
                web applications.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-80  mb-4 bg-white rounded-lg shadow-lg">
            <img
              className="rounded-t-lg w-full h-48 sm:h-64 object-cover"
              src="https://i.ibb.co/SfqGZQW/Card-image-3.jpg"
              alt=""
            />
            <div className="py-4 px-6">
              <h2 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-xl sm:text-2xl tracking-tight">
                Becoming a Full-Stack Developer
              </h2>
              <p className="hover:cursor-pointer py-2 text-gray-600 leading-5">
                Front-end to back-end, APIs, development tools, and optimization
                - Elevate your coding skills and become a versatile web
                development maestro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agenda;
