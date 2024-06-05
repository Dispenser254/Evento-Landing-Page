// import React from 'react'

function SimpleWebpage() {
  return (
    <div className="bg-slate-950">
      <nav className="w-full bg-purple-700 text-white py-4 px-8">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png"
              className="rounded-full h-8 w-8 md:h-12 md:w-12 mr-2"
              alt=""
            />
            <h1 className="text-2xl font-bold">Sophia Johnson</h1>
          </div>
          <ul className="md:flex hidden space-x-8 text-xl font-semibold">
            <li>
              <a href="#" className="text-xl font-semibold hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-semibold hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-semibold hover:underline">
                Resume
              </a>
            </li>
            <li>
              <a href="#" className="text-xl font-semibold hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <a className="text-4xl font-semibold" href="#">
              &#8801;
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-white mt-8 mx-4 md:mx-8">
          <p className="text-8xl font-bold">I am</p>
          <p className="text-2xl font-bold md:text-4xl md:font-semibold text-yellow-400 mt-4">
            Passionate Web Developer
          </p>
          <div className="w-60 h-2 border-b-4 border-purple-600 mt-2 mb-4"></div>
          <p className="text-2xl text-gray-400 mt-8 text-center md:text-start">
            I am a passionate Web Developer with over 5 years of experience in
            creating compelling visual designs.
          </p>
        </div>
        <div>
          <img
            src="https://i.ibb.co/z8kWxyL/pexels-andrea-piacquadio-3979198-removebg-preview.png"
            alt=""
            className="md:max-w-2xl w-auto h-100vh -mt-20 justify-center md:mt-0 md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SimpleWebpage;
