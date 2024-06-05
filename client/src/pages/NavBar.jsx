export default function NavBar() {
  return (
    <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <img
            src="https://i.ibb.co/CVFbsH1/oig.png"
            alt=""
            className="mr-3 h-12"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Evento
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white mr-0 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            Register Now
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#agenda"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Agenda
              </a>
            </li>
            <li>
              <a
                href="#host"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Host
              </a>
            </li>
            <li>
              <a
                href="#review"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Review
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Benefits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
