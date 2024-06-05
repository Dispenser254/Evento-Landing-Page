/* eslint-disable react/no-unescaped-entities */
function Testimonials() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="review">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 md:mt-16 md:mb-16">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          What others say about us
        </h2>
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {/* Quote start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              “The webinar on web development conducted by John was exceptional.
              He explained complex concepts in a simple and engaging manner. I
              learned a lot and feel more confident in my web development skills
              now.”
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-12">
                <img
                  src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112"
                  alt="Photo"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  Sarah Thompson
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Lead Developer / TechPro Solutions
                </p>
              </div>
            </div>
          </div>
          {/* Quote end */}
          {/* Quote start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              “I thoroughly enjoyed the webinar hosted by Michael. His expertise
              in web development is evident, and he shared valuable insights and
              tips. It was a great learning experience, and I would highly
              recommend it to others.”
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-12">
                <img
                  src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112"
                  alt="Photo"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  Kate Berg
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Chief Technology Officer / InnovteX
                </p>
              </div>
            </div>
          </div>
          {/* Quote end */}
          {/* Quote start */}
          <div className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
            <div className="text-center text-gray-600">
              Attending Emily's webinar on web development was a game-changer
              for me. His knowledge and passion for the subject were inspiring.
              The practical examples and hands-on helped me improve my coding
              skills.”
            </div>
            <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-12">
                <img
                  src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500"
                  alt="Photo"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div>
                <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                  Greg Jackson
                </div>
                <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                  Frontend Developer / CodeCrafters
                </p>
              </div>
            </div>
          </div>
          {/* Quote end */}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
