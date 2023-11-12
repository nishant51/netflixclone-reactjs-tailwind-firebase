import React from 'react'

const Footeer = () => {
  return (
    <div>
        

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <img src="data:image/png;base64,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" className="h-8 me-3" alt="NetFlix Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NETFLIX</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Youtube</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/nishant51" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/nishant-timsina-405134208/" className="hover:underline">linkden</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://www.linkedin.com/in/nishant-timsina-405134208/" className="hover:underline text-blue-500">HIRE ME?</a>
                      </li>
                      <li>
                          <a href="" className="hover:underline text-yellow-400" >Buy me a coffee?</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">NETFLIX™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span className="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footeer