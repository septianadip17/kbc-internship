const Footer = () => {
  return (
    <>
      <div className="bg-yellow-600 text-white py-5">
        <div className="container text-center">
          <h3 className="text-2xl font-black">
            KINGDOM BUSINESS COMMUNITY
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center">
          {/* KBC Jawa Timur */}
          <div className="text-start px-4">
            <h3 className="text-2xl font-bold">KBC Jawa Timur</h3>
            <p>
              Ruko Palm Square TF 5, Jl. Raya Taman Asri, Palem, Wadungasri,
              Kec. Waru, Kabupaten Sidoarjo, Jawa Timur, 61256
            </p>
          </div>

          {/* Social Media */}
          <div className="px-4">
            <h3 className="text-3xl font-bold text-center py-2">Our Social Media</h3>
            <ol className="flex flex-col md:flex-row justify-center items-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="mb-2 inline-block rounded bg-[#c13584] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  >
                    <span className="[&>svg]:h-4 [&>svg]:w-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </span>
                  </button>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 inline-block rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-12.8 4.6-23.8 3.2-26.3-1.3-2.5-5.1-3.9-10.6-6.6z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 inline-block rounded bg-[#1da1f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9 .3 13.6 0 138.7-105.6 298.7-298.7 298.7-59.5 0-114.7-17.2-161-47.1 8.4 .9 16.6 1.2 25.4 1.2 49.1 0 94.2-16.6 130-44.8-46.1-.9-84.8-31.2-98.1-72.8 6.5 .9 13 1.5 19.8 1.5 9.4 0 18.4-1.2 27-3.4-48.4-9.8-84.8-52.3-84.8-103.5v-1.2c14.3 7.9 30.6 12.7 48 13.3-28.3-19-46.8-51-46.8-87.5 0-19.5 5.2-37.6 14.3-53.1 51.9 63.7 129.3 105.8 216.5 110.3-1.5-7.9-2.4-15.8-2.4-24 0-57.4 46.8-104.3 104.3-104.3 30 0 57.2 12.7 76.2 33 23.7-4.5 46.1-13.3 66.4-25.4-7.9 24.6-24.6 45.4-46.1 58.4 21.1-2.1 41.5-8.1 60.2-16.2-14.3 20.8-32.4 39.4-53.1 54.2z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 inline-block rounded bg-[#0e76a8] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.58 0 53.79 0 24 24.09 0 53.79 0c29.68 0 53.79 24 53.79 53.79 0 29.68-24.11 53.79-53.79 53.79zM447.9 448h-92.4V302.4c0-34.7-13.4-58.4-43.8-58.4-23.9 0-38.1 16.1-44.5 31.6-2.3 5.5-2.8 13.2-2.8 20.9V448h-92.4s1.2-242.7 0-267.7h92.4v38c12.3-19 34.3-46 83.5-46 61 0 106.7 39.8 106.7 125.3V448z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 inline-block rounded bg-[#ff0000] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="M549.655 124.083c-6.281-23.664-24.784-42.087-48.469-48.469C465.568 64 288 64 288 64S110.432 64 74.814 75.614c-23.685 6.382-42.188 24.805-48.469 48.469C14.715 159.93 14.715 256 14.715 256s0 96.07 11.63 131.917c6.281 23.664 24.784 42.087 48.469 48.469C110.432 448 288 448 288 448s177.568 0 213.186-11.614c23.685-6.382 42.188-24.805 48.469-48.469C561.285 352.07 561.285 256 561.285 256s0-96.07-11.63-131.917zM232.4 338.8V173.2l152.4 82.8-152.4 82.8z" />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                  className="mb-2 inline-block rounded bg-[#1877f2] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                >
                  <span className="[&>svg]:h-4 [&>svg]:w-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                  </span>
                </button>
              </li>
            </ol>
          </div>

          {/* Kontak */}
          <div className="text-end px-4">
            <h3 className="text-3xl font-bold">Hubungi Kami</h3>
            <p>0812-3456-7890</p>
          </div>
        </div>
        <hr />
        <p className="text-center">
          Copyright © 2024 Kingdom Business Community
        </p>
      </div>
    </>
  );
};

export default Footer;
