function Footer(){


    return (
        <footer className="text-gray-600 body-font bg-gradient-to-r from-purple-500 to-pink-500 ">
        <div className="  border-t-1 border-cyan-500">
          <div className="container flex flex-col flex-wrap px-2 py-2 mx-auto sm:flex-row">
            <p className="text-sm text-center text-blue-800 hover:text-blue-400 sm:text-left">
                &copy; nit@dgp officials                    
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="ml-1 text-gray-600"
                target="_blank"
              >
                
              </a>
            </p>
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start text-blue-800 hover:text-blue-400">
              <a className="text-blue-800 hover:text-blue-400">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  href="https://www.instagram.com/shayantan_biswas101204/"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-800 hover:text-blue-400" href="https://www.instagram.com/nitdgp1960/">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-800 hover:text-blue-400" href="https://www.instagram.com/nitdgp1960/">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-blue-800 hover:text-blue-400">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  href="https://x.com/saeindia_nitdgp?mx=2"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>    )
}

export default Footer