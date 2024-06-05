function CTASection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-indigo-500 text-white p-8 md:p-16 space-y-4 md:space-y-0 md:space-x-8 font-semibold text-lg ">
      <div className="flex flex-col items-center space-y-4 text-xl">
        <i className="far fa-calendar-alt text-2xl"></i>
        <p>August 12th 2023</p>
      </div>
      <div className="flex flex-col items-center space-y-4 text-xl">
        <i className="far fa-clock text-2xl"></i>
        <p>09:00 am GMT</p>
      </div>
      <div className="flex flex-col items-center space-y-4 text-xl">
        <i className="far fa-hourglass text-2xl"></i>
        <p>Duration: 8 Hour</p>
      </div>
      <a href="#register">
        <button className="bg-white text-black px-6 py-2 rounded-md md:text-2xl text-xl">
          Book Seat Now
        </button>
      </a>
    </div>
  );
}

export default CTASection;
