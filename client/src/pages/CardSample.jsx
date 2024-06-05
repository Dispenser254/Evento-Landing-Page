function CardSample() {
  return (
    <div className="bg-slate-700 h-screen grid place-content-center">
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          src="https://i.ibb.co/z8kWxyL/pexels-andrea-piacquadio-3979198-removebg-preview.png"
          alt=""
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
        />
        <div className="text-center sm:text-left space-y-2">
          <p className="text-lg text-blue-950 font-semibold">Sophia Johnson</p>
          <p className="text-blue-500 font-medium">Web developer</p>
        </div>
      </div>
    </div>
  );
}

export default CardSample;
