import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = useSelector((state) => state.project.projects);
  const [selected, setSelected] = useState("All");
  return (
    <section
      id="projects"
      className="container text-body-color text-base leading-relaxed my-5"
    >
      <div className="mx-auto">
        <div>
          <h3 className="text-primary mb-2 text-base font-semibold uppercase flex items-center">
            Take a look at my
            <span className="bg-body-color ml-2 inline-block h-[1px] w-8"></span>
          </h3>
          <h1 className="capitalize text-2xl font-bold text-primary">
            Projects
          </h1>
          <p className="py-2">Skills grow, so willl the number of projects.</p>
          <div className="mx-auto flex justify-center w-24 my-2 items-center">
            <div
              className="px-2 mx-auto cursor-pointer"
              onClick={() => setSelected("All")}
            >
              <svg
                className="w-12 h-12 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M488.23 241.7l20.7 7.1c-9.6-23.9-23.9-37-31.7-44.8l7.1-18.2c.2 0 12.3-27.8-2.5-30.7-.6-11.3-6.6-27-18.4-27-7.6-10.6-17.7-12.3-30.7-5.9a122.2 122.2 0 00-25.3 16.5c-5.3-6.4-3 .4-3-29.8-37.1-24.3-45.4-11.7-74.8 3l.5.5a239.36 239.36 0 00-68.4-13.3c-5.5-8.7-18.6-19.1-25.1-25.1l24.8 7.1c-5.5-5.5-26.8-12.9-34.2-15.2 18.2-4.1 29.8-20.8 42.5-33-34.9-10.1-67.9-5.9-97.9 11.8l12-44.2L182 0c-31.6 24.2-33 41.9-33.7 45.5-.9-2.4-6.3-19.6-15.2-27a35.12 35.12 0 00-.5 25.3c3 8.4 5.9 14.8 8.4 18.9-16-3.3-28.3-4.9-49.2 0h-3.7l33 14.3a194.26 194.26 0 00-46.7 67.4l-1.7 8.4 1.7 1.7 7.6-4.7c-3.3 11.6-5.3 19.4-6.6 25.8a200.18 200.18 0 00-27.8 40.3c-15 1-31.8 10.8-40.3 14.3l3 3.4 28.8 1c-.5 1-.7 2.2-1.2 3.2-7.3 6.4-39.8 37.7-33 80.7l20.2-22.4c.5 1.7.7 3.4 1.2 5.2 0 25.5.4 89.6 64.9 150.5 43.6 40 96 60.2 157.5 60.2 121.7 0 223-87.3 223-211.5 6.8-9.7-1.2 3 16.7-25.1l13 14.3 2.5-.5A181.84 181.84 0 00495 255a44.74 44.74 0 00-6.8-13.3zM398 111.2l-.5 21.9c5.5 18.1 16.9 17.2 22.4 17.2l-3.4-4.7 22.4-5.4a242.44 242.44 0 01-27 0c12.8-2.1 33.3-29 43-11.3 3.4 7.6 6.4 17.2 9.3 27.8l1.7-5.9a56.38 56.38 0 01-1.7-15.2c5.4.5 8.8 3.4 9.3 10.1.5 6.4 1.7 14.8 3.4 25.3l4.7-11.3c4.6 0 4.5-3.6-2.5 20.7-20.9-8.7-35.1-8.4-46.5-8.4l18.2-16c-25.3 8.2-33 10.8-54.8 20.9-1.1-5.4-5-13.5-16-19.9-3.2 3.8-2.8.9-.7 14.8h-2.5a62.32 62.32 0 00-8.4-23.1l4.2-3.4c8.4-7.1 11.8-14.3 10.6-21.9-.5-6.4-5.4-13.5-13.5-20.7 5.6-3.4 15.2-.4 28.3 8.5zm-39.6-10.1c2.7 1.9 11.4 5.4 18.9 17.2 4.2 8.4 4 9.8 3.4 11.1-.5 2.4-.5 4.3-3 7.1-1.7 2.5-5.4 4.7-11.8 7.6-7.6-13-16.5-23.6-27.8-31.2zM91 143.1l1.2-1.7c1.2-2.9 4.2-7.6 9.3-15.2l2.5-3.4-13 12.3 5.4-4.7-10.1 9.3-4.2 1.2c12.3-24.1 23.1-41.3 32.5-50.2 9.3-9.3 16-16 20.2-19.4l-6.4 1.2c-11.3-4.2-19.4-7.1-24.8-8.4 2.5-.5 3.7-.5 3.2-.5 10.3 0 17.5.5 20.9 1.2a52.35 52.35 0 0016 2.5l.5-1.7-8.4-35.8 13.5 29a42.89 42.89 0 005.9-14.3c1.7-6.4 5.4-13 10.1-19.4s7.6-10.6 9.3-11.3a234.68 234.68 0 00-6.4 25.3l-1.7 7.1-.5 4.7 2.5 2.5C190.4 39.9 214 34 239.8 34.5l21.1.5c-11.8 13.5-27.8 21.9-48.5 24.8a201.26 201.26 0 01-23.4 2.9l-.2-.5-2.5-1.2a20.75 20.75 0 00-14 2c-2.5-.2-4.9-.5-7.1-.7l-2.5 1.7.5 1.2c2 .2 3.9.5 6.2.7l-2 3.4 3.4-.5-10.6 11.3c-4.2 3-5.4 6.4-4.2 9.3l5.4-3.4h1.2a39.4 39.4 0 0125.3-15.2v-3c6.4.5 13 1 19.4 1.2 6.4 0 8.4.5 5.4 1.2a189.6 189.6 0 0120.7 13.5c13.5 10.1 23.6 21.9 30 35.4 8.8 18.2 13.5 37.1 13.5 56.6a141.13 141.13 0 01-3 28.3 209.91 209.91 0 01-16 46l2.5.5c18.2-19.7 41.9-16 49.2-16l-6.4 5.9 22.4 17.7-1.7 30.7c-5.4-12.3-16.5-21.1-33-27.8 16.5 14.8 23.6 21.1 21.9 20.2-4.8-2.8-3.5-1.9-10.8-3.7 4.1 4.1 17.5 18.8 18.2 20.7l.2.2-.2.2c0 1.8 1.6-1.2-14 22.9-75.2-15.3-106.27-42.7-141.2-63.2l11.8 1.2c-11.8-18.5-15.6-17.7-38.4-26.1L149 225c-8.8-3-18.2-3-28.3.5l7.6-10.6-1.2-1.7c-14.9 4.3-19.8 9.2-22.6 11.3-1.1-5.5-2.8-12.4-12.3-28.8l-1.2 27-13.2-5c1.5-25.2 5.4-50.5 13.2-74.6zm276.5 330c-49.9 25-56.1 22.4-59 23.9-29.8-11.8-50.9-31.7-63.5-58.8l30 16.5c-9.8-9.3-18.3-16.5-38.4-44.3l11.8 23.1-17.7-7.6c14.2 21.1 23.5 51.7 66.6 73.5-120.8 24.2-199-72.1-200.9-74.3a262.57 262.57 0 0035.4 24.8c3.4 1.7 7.1 2.5 10.1 1.2l-16-20.7c9.2 4.2 9.5 4.5 69.1 29-42.5-20.7-73.8-40.8-93.2-60.2-.5 6.4-1.2 10.1-1.2 10.1a80.25 80.25 0 0120.7 26.6c-39-18.9-57.6-47.6-71.3-82.6 49.9 55.1 118.9 37.5 120.5 37.1 34.8 16.4 69.9 23.6 113.9 10.6 3.3 0 20.3 17 25.3 39.1l4.2-3-2.5-23.6c9 9 24.9 22.6 34.4 13-15.6-5.3-23.5-9.5-29.5-31.7 4.6 4.2 7.6 9 27.8 15l1.2-1.2-10.5-14.2c11.7-4.8-3.5 1 32-10.8 4.3 34.3 9 49.2.7 89.5zm115.3-214.4l-2.5.5 3 9.3c-3.5 5.9-23.7 44.3-71.6 79.7-39.5 29.8-76.6 39.1-80.9 40.3l-7.6-7.1-1.2 3 14.3 16-7.1-4.7 3.4 4.2h-1.2l-21.9-13.5 9.3 26.6-19-27.9-1.2 2.5 7.6 29c-6.1-8.2-21-32.6-56.8-39.6l32.5 21.2a214.82 214.82 0 01-93.2-6.4c-4.2-1.2-8.9-2.5-13.5-4.2l1.2-3-44.8-22.4 26.1 22.4c-57.7 9.1-113-25.4-126.4-83.4l-2.5-16.4-22.27 22.3c19.5-57.5 25.6-57.9 51.4-70.1-9.1-5.3-1.6-3.3-38.4-9.3 15.8-5.8 33-15.4 73 5.2a18.5 18.5 0 013.7-1.7c.6-3.2.4-.8 1-11.8 3.9 10 3.6 8.7 3 9.3l1.7.5c12.7-6.5 8.9-4.5 17-8.9l-5.4 13.5 22.3-5.8-8.4 8.4 2.5 2.5c4.5-1.8 30.3 3.4 40.8 16l-23.6-2.5c39.4 23 51.5 54 55.8 69.6l1.7-1.2c-2.8-22.3-12.4-33.9-16-40.1 4.2 5 39.2 34.6 110.4 46-11.3-.5-23.1 5.4-34.9 18.9l46.7-20.2-9.3 21.9c7.6-10.1 14.8-23.6 21.2-39.6v-.5l1.2-3-1.2 16c13.5-41.8 25.3-78.5 35.4-109.7l13.5-27.8v-2l-5.4-4.2h10.1l5.9 4.2 2.5-1.2-3.4-16 12.3 18.9 41.8-20.2-14.8 13 .5 2.9 17.7-.5a184 184 0 0133 4.2l-23.6 2.5-1.2 3 26.6 23.1a254.21 254.21 0 0127 32c-11.2-3.3-10.3-3.4-21.2-3.4l12.3 32.5zm-6.1-71.3l-3.9 13-14.3-11.8zm-254.8 7.1c1.7 10.6 4.7 17.7 8.8 21.9-9.3 6.6-27.5 13.9-46.5 16l.5 1.2a50.22 50.22 0 0024.8-2.5l-7.1 13c4.2-1.7 10.1-7.1 17.7-14.8 11.9-5.5 12.7-5.1 20.2-16-12.7-6.4-15.7-13.7-18.4-18.8zm3.7-102.3c-6.4-3.4-10.6 3-12.3 18.9s2.5 29.5 11.8 39.6 18.2 10.6 26.1 3 3.4-23.6-11.3-47.7a39.57 39.57 0 00-14.27-13.8zm-4.7 46.3c5.4 2.2 10.5 1.9 12.3-10.6v-4.7l-1.2.5c-4.3-3.1-2.5-4.5-1.7-6.2l.5-.5c-.9-1.2-5-8.1-12.5 4.7-.5-13.5.5-21.9 3-24.8 1.2-2.5 4.7-1.2 11.3 4.2 6.4 5.4 11.3 16 15.2 32.5 6.5 28-19.8 26.2-26.9 4.9zm-45-5.5c1.6.3 9.3-1.1 9.3-14.8h-.5c-5.4-1.1-2.2-5.5-.7-5.9-1.7-3-3.4-4.2-5.4-4.7-8.1 0-11.6 12.7-8.1 21.2a7.51 7.51 0 005.43 4.2zM216 82.9l-2.5.5.5 3a48.94 48.94 0 0126.1 5.9c-2.5-5.5-10-14.3-28.3-14.3l.5 2.5zm-71.8 49.4c21.7 16.8 16.5 21.4 46.5 23.6l-2.9-4.7a42.67 42.67 0 0014.8-28.3c1.7-16-1.2-29.5-8.8-41.3l13-7.6a2.26 2.26 0 00-.5-1.7 14.21 14.21 0 00-13.5 1.7c-12.7 6.7-28 20.9-29 22.4-1.7 1.7-3.4 5.9-5.4 13.5a99.61 99.61 0 00-2.9 23.6c-4.7-8-10.5-6.4-19.9-5.9l7.1 7.6c-16.5 0-23.3 15.4-23.6 16 6.8 0 4.6-7.6 30-12.3-4.3-6.3-3.3-5-4.9-6.6zm18.7-18.7c1.2-7.6 3.4-13 6.4-17.2 5.4-6.4 10.6-10.1 16-11.8 4.2-1.7 7.1 1.2 10.1 9.3a72.14 72.14 0 013 25.3c-.5 9.3-3.4 17.2-8.4 23.1-2.9 3.4-5.4 5.9-6.4 7.6a39.21 39.21 0 01-11.3-.5l-7.1-3.4-5.4-6.4c.8-10 1.3-18.8 3.1-26zm42 56.1c-34.8 14.4-34.7 14-36.1 14.3-20.8 4.7-19-24.4-18.9-24.8l5.9-1.2-.5-2.5c-20.2-2.6-31 4.2-32.5 4.9.5.5 3 3.4 5.9 9.3 4.2-6.4 8.8-10.1 15.2-10.6a83.47 83.47 0 001.7 33.7c.1.5 2.6 17.4 27.5 24.1 11.3 3 27 1.2 48.9-5.4l-9.2.5c-4.2-14.8-6.4-24.8-5.9-29.5 11.3-8.8 21.9-11.3 30.7-7.6h2.5l-11.8-7.6-7.1.5c-5.9 1.2-12.3 4.2-19.4 8.4z"></path>
              </svg>
              <h4
                className={
                  selected === "All" ? "text-center text-sm" : "hidden"
                }
              >
                All
              </h4>
            </div>
            <div
              className="px-2 mx-auto cursor-pointer"
              onClick={() => setSelected("Vue")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="96"
                height="96"
                viewBox="0 0 48 48"
                className="w-12 h-12 mx-auto text-gray-300"
              >
                <polygon
                  fill="#81c784"
                  points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
                ></polygon>
                <polygon
                  fill="#455a64"
                  points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
                ></polygon>
              </svg>
              <h4
                className={
                  selected === "Vue" ? "text-center text-sm" : "hidden"
                }
              >
                Vue
              </h4>
            </div>
            <div
              className="px-2 mx-auto cursor-pointer"
              onClick={() => setSelected("React")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                className="w-12 h-12 mx-auto"
              >
                <path
                  fill="#8bb7f0"
                  d="M46.5,40c0,3.593-2.907,6.5-6.5,6.5s-6.5-2.907-6.5-6.5s2.907-6.5,6.5-6.5S46.5,36.407,46.5,40z"
                ></path>
                <path
                  fill="#4e7ab5"
                  d="M40,47c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S43.859,47,40,47z M40,34c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S43.309,34,40,34z"
                ></path>
                <g>
                  <path
                    fill="#8bb7f0"
                    d="M24.474,75.503c-1.711,0-3.269-0.392-4.632-1.164c-2.28-1.293-3.856-3.521-4.686-6.62 c-0.965-3.607-0.85-8.398,0.332-13.878C5.956,50.562,0.5,45.531,0.5,40c0-5.532,5.455-10.562,14.987-13.84 c-1.182-5.481-1.298-10.272-0.333-13.879c0.83-3.1,2.406-5.328,4.685-6.62c1.362-0.772,2.921-1.164,4.632-1.164 c4.388,0,9.891,2.73,15.531,7.698c5.64-4.963,11.141-7.691,15.524-7.691c1.711,0,3.269,0.392,4.632,1.164 c2.277,1.291,3.854,3.515,4.684,6.611c0.966,3.606,0.85,8.398-0.333,13.88C74.043,29.437,79.5,34.468,79.5,40 s-5.457,10.563-14.991,13.842c1.182,5.481,1.298,10.272,0.332,13.878c-0.83,3.097-2.405,5.321-4.68,6.612 c-1.364,0.772-2.923,1.164-4.633,1.164c-4.386,0-9.889-2.728-15.527-7.689C34.361,72.774,28.859,75.503,24.474,75.503z M19.337,55.006c-0.991,4.717-1.102,8.747-0.316,11.679c0.542,2.026,1.481,3.431,2.794,4.175c0.753,0.427,1.648,0.644,2.659,0.644 c3.394,0,7.862-2.282,12.621-6.437c-2.385-2.402-4.713-5.121-6.928-8.091C26.336,56.56,22.696,55.898,19.337,55.006z M42.906,65.065c4.758,4.151,9.227,6.431,12.621,6.432c1.011,0,1.906-0.217,2.661-0.644c1.309-0.742,2.246-2.144,2.787-4.167 c0.786-2.934,0.676-6.963-0.315-11.679c-3.362,0.892-7.003,1.554-10.833,1.97C47.613,59.947,45.288,62.665,42.906,65.065z M35.566,57.393c1.452,1.776,2.938,3.433,4.434,4.94c1.492-1.506,2.979-3.163,4.43-4.94C42.939,57.464,41.454,57.5,40,57.5 C38.545,57.5,37.059,57.464,35.566,57.393z M32.349,53.179C34.844,53.392,37.417,53.5,40,53.5c2.585,0,5.155-0.108,7.646-0.32 c1.486-2.084,2.903-4.268,4.214-6.495c1.268-2.155,2.461-4.404,3.547-6.686c-1.083-2.276-2.275-4.524-3.546-6.684 c-1.308-2.222-2.725-4.406-4.215-6.495C45.157,26.608,42.587,26.5,40,26.5c-2.588,0-5.159,0.108-7.647,0.321 c-1.49,2.086-2.909,4.27-4.219,6.495c-1.27,2.159-2.462,4.407-3.546,6.686c1.082,2.274,2.274,4.522,3.545,6.684 C29.437,48.901,30.854,51.084,32.349,53.179z M57.491,44.779c-0.706,1.346-1.438,2.666-2.185,3.934 c-0.753,1.282-1.554,2.568-2.386,3.836c2.374-0.366,4.645-0.835,6.771-1.4C59.101,49.1,58.362,46.963,57.491,44.779z M20.304,51.148c2.127,0.564,4.397,1.034,6.768,1.4c-0.837-1.276-1.638-2.563-2.386-3.835c-0.745-1.267-1.478-2.585-2.183-3.931 C21.636,46.956,20.898,49.091,20.304,51.148z M59.816,40c1.528,3.391,2.773,6.743,3.708,9.977C70.926,47.373,75.5,43.574,75.5,40 s-4.574-7.373-11.976-9.977C62.591,33.257,61.345,36.609,59.816,40z M16.472,30.025C9.073,32.628,4.5,36.427,4.5,40 c0,3.574,4.573,7.373,11.974,9.976c0.934-3.235,2.179-6.587,3.705-9.974C18.652,36.614,17.407,33.262,16.472,30.025z M20.303,28.852c0.594,2.054,1.332,4.19,2.2,6.368c0.704-1.342,1.436-2.661,2.184-3.932c0.752-1.279,1.553-2.565,2.388-3.836 C24.701,27.817,22.431,28.287,20.303,28.852z M52.922,27.451c0.837,1.277,1.638,2.563,2.386,3.837 c0.746,1.267,1.479,2.586,2.185,3.932c0.869-2.177,1.607-4.313,2.201-6.369C57.564,28.286,55.294,27.816,52.922,27.451z M24.471,8.497c-1.011,0-1.905,0.216-2.657,0.644c-1.312,0.744-2.252,2.149-2.795,4.175c-0.785,2.935-0.675,6.964,0.317,11.679 c3.36-0.892,7.002-1.555,10.834-1.971c2.217-2.971,4.545-5.688,6.927-8.088C32.337,10.779,27.866,8.497,24.471,8.497z M49.828,23.023c3.83,0.416,7.471,1.078,10.833,1.97c0.992-4.716,1.103-8.746,0.316-11.68c-0.542-2.022-1.48-3.424-2.79-4.166 c-0.754-0.427-1.649-0.644-2.661-0.644c-3.393,0-7.86,2.281-12.619,6.433C45.287,17.335,47.613,20.053,49.828,23.023z M40,22.5 c1.454,0,2.939,0.036,4.431,0.107c-1.45-1.774-2.936-3.43-4.429-4.938c-1.497,1.51-2.982,3.166-4.432,4.938 C37.061,22.536,38.546,22.5,40,22.5z"
                  ></path>
                  <path
                    fill="#4e7ab5"
                    d="M24.471,4.997c4.494,0,9.996,2.91,15.532,7.867c5.535-4.953,11.034-7.86,15.524-7.86 c1.623,0,3.099,0.37,4.386,1.099c2.156,1.222,3.652,3.343,4.446,6.306c1.077,3.917,0.851,8.74-0.434,14.08 C73.147,29.57,79,34.431,79,40s-5.853,10.43-15.076,13.512c1.341,5.773,1.566,10.726,0.434,14.079 c-0.794,2.962-2.289,5.084-4.443,6.306C58.626,74.627,57.455,75,55.833,75c-0.001,0-0.416,0-0.417,0 c-4.492,0-9.882-2.91-15.416-7.861c-5.535,4.956-11.035,7.864-15.527,7.864c-1.623,0-3.099-0.37-4.386-1.099 c-2.158-1.225-3.655-3.349-4.448-6.314c-1.19-3.717-0.95-8.603,0.434-14.079C6.852,50.429,1,45.569,1,40 c0-5.568,5.852-10.429,15.072-13.511C15.385,23.43,14.946,20.59,14.931,18c-0.012-2.046,0.267-3.949,0.707-5.59 c0.794-2.966,2.29-5.09,4.448-6.314C21.372,5.366,22.848,4.997,24.471,4.997 M18.958,25.614c3.477-0.955,7.338-1.677,11.483-2.117 c2.382-3.21,4.875-6.096,7.386-8.584c-4.872-4.346-9.616-6.917-13.356-6.917c-1.099,0-2.075,0.238-2.904,0.709 c-1.433,0.813-2.452,2.32-3.031,4.481C17.678,16.388,17.873,20.716,18.958,25.614 M61.039,25.613 c1.085-4.898,1.28-9.227,0.422-12.429c-0.578-2.157-1.597-3.661-3.027-4.472c-0.83-0.471-1.809-0.709-2.907-0.709 c-3.737,0-8.478,2.568-13.349,6.91c2.51,2.488,5,5.374,7.38,8.583C53.701,23.936,57.562,24.658,61.039,25.613 M34.477,23.166 c1.802-0.107,3.609-0.2,5.488-0.2c1.879,0,3.755,0.094,5.557,0.2c-1.808-2.279-3.664-4.361-5.521-6.204 C38.144,18.805,36.287,20.887,34.477,23.166 M40,54c2.761,0,5.404-0.121,7.918-0.342c1.519-2.117,2.988-4.365,4.372-6.719 c1.353-2.299,2.577-4.626,3.67-6.939c-1.093-2.313-2.317-4.639-3.669-6.937c-1.385-2.355-2.853-4.602-4.373-6.719 C45.405,26.121,42.762,26,40,26s-5.406,0.121-7.92,0.343c-1.521,2.117-2.991,4.365-4.376,6.719 c-1.352,2.299-2.576,4.626-3.669,6.939c1.093,2.313,2.316,4.639,3.668,6.937c1.385,2.354,2.854,4.602,4.374,6.719 C34.592,53.879,37.237,54,40,54 M57.546,36.413c1.125-2.709,2.056-5.369,2.766-7.913c-2.553-0.702-5.373-1.282-8.428-1.707 c1.028,1.527,2.029,3.11,2.992,4.748C55.83,33.16,56.717,34.788,57.546,36.413 M22.449,36.414c0.828-1.625,1.716-3.253,2.668-4.873 c0.964-1.638,1.966-3.22,2.995-4.747c-3.055,0.424-5.875,1.005-8.428,1.707C20.394,31.045,21.325,33.704,22.449,36.414 M63.188,50.622C71.264,47.886,76,43.866,76,40s-4.736-7.886-12.812-10.622c-0.953,3.405-2.269,6.983-3.92,10.621 C60.919,43.638,62.235,47.216,63.188,50.622 M16.81,50.621c0.952-3.404,2.267-6.982,3.918-10.619 c-1.651-3.638-2.967-7.217-3.919-10.622C8.734,32.116,4,36.135,4,40C4,43.866,8.735,47.885,16.81,50.621 M51.884,53.207 c3.055-0.424,5.875-1.004,8.428-1.707c-0.711-2.544-1.642-5.204-2.766-7.914c-0.829,1.625-1.717,3.253-2.67,4.873 C53.913,50.097,52.912,51.68,51.884,53.207 M28.109,53.206c-1.028-1.527-2.029-3.109-2.993-4.746 c-0.952-1.619-1.839-3.246-2.667-4.87c-1.124,2.708-2.054,5.367-2.764,7.91C22.237,52.201,25.056,52.781,28.109,53.206 M24.474,72.003c3.739,0,8.481-2.57,13.352-6.914c-2.513-2.489-5.005-5.376-7.388-8.587c-4.143-0.439-8.002-1.161-11.478-2.116 c-1.084,4.898-1.279,9.226-0.422,12.428c0.578,2.16,1.598,3.667,3.03,4.48C22.396,71.765,23.375,72.003,24.474,72.003 M55.527,71.997L55.527,71.997c1.099,0,2.076-0.238,2.907-0.709c1.43-0.811,2.447-2.315,3.024-4.473 c0.858-3.203,0.663-7.531-0.421-12.428c-3.477,0.955-7.337,1.677-11.481,2.116c-2.38,3.21-4.871,6.096-7.381,8.585 C47.046,69.428,51.788,71.996,55.527,71.997 M40,63.04c1.857-1.844,3.713-3.927,5.522-6.206c-1.801,0.107-3.559,0.333-5.439,0.333 c-1.881,0-3.807-0.226-5.609-0.333C36.284,59.114,38.142,61.197,40,63.04 M24.116,4.072c-1.799,0-3.085,0.338-4.523,1.153 c-2.399,1.361-4.055,3.691-4.921,6.926c-0.96,3.587-0.877,8.302,0.236,13.681C5.419,29.189,0,34.325,0,40 c0,5.676,5.42,10.811,14.909,14.168c-1.113,5.379-1.196,10.094-0.235,13.681c0.865,3.233,2.52,5.563,4.921,6.926 c1.44,0.816,3.17,1.163,4.968,1.163c4.487,0,9.753-2.535,15.438-7.466c5.684,4.926,11.039,7.524,15.525,7.525 c1.799,0,3.441-0.413,4.881-1.229c2.397-1.359,4.051-3.686,4.916-6.917c0.961-3.588,0.878-8.303-0.235-13.681 C74.579,50.812,80,45.676,80,40s-5.42-10.812-14.911-14.169c1.114-5.38,1.196-10.095,0.235-13.682 c-0.866-3.231-2.521-5.558-4.919-6.917c-1.439-0.815-3.081-1.229-4.879-1.229c-4.485,0-9.839,2.599-15.524,7.527 c-5.686-4.932-11.066-7.461-15.554-7.461L24.116,4.072z M19.72,24.377c-0.462-2.324-0.772-4.502-0.789-6.412 c-0.015-1.72,0.221-3.217,0.57-4.521c0.507-1.892,1.368-3.194,2.559-3.87c0.676-0.384,1.5-0.644,2.423-0.644 c3.181,0,7.367,2.178,11.883,6.034c-2.221,2.273-4.392,4.819-6.466,7.585C26.315,22.949,22.897,23.562,19.72,24.377L19.72,24.377z M43.638,14.966c4.515-3.853,8.711-5.963,11.888-5.963c0.924,0,1.737,0.195,2.414,0.579c1.189,0.674,2.049,1.973,2.555,3.861 c0.874,2.818,0.761,6.564-0.218,10.933c-3.177-0.814-6.594-1.428-10.178-1.826C48.026,19.785,45.857,17.239,43.638,14.966 L43.638,14.966z M36.673,22.06c1.096-1.3,2.209-2.53,3.328-3.678c1.119,1.148,2.231,2.378,3.326,3.678 C42.208,22.02,41.095,22,40,22S37.793,22.02,36.673,22.06L36.673,22.06z M32.625,27.3c2.405-0.199,4.883-0.341,7.375-0.341 c2.491,0,4.969,0.142,7.373,0.341c1.432,2.019,2.796,4.126,4.056,6.269c1.222,2.078,2.373,4.239,3.423,6.43 c-1.051,2.192-2.202,4.354-3.424,6.432c-1.261,2.144-2.624,4.25-4.056,6.269c-2.403,0.199-4.881,0.466-7.372,0.466 c-2.493,0-4.972-0.268-7.378-0.467c-1.433-2.018-2.797-4.125-4.058-6.269c-1.222-2.077-2.372-4.238-3.422-6.43 c1.05-2.192,2.201-4.354,3.423-6.432C29.827,31.425,31.192,29.318,32.625,27.3L32.625,27.3z M57.422,34.024 c-0.549-1.018-1.112-2.018-1.683-2.99c-0.57-0.969-1.167-1.942-1.785-2.909c1.774,0.302,3.485,0.663,5.114,1.08 C58.601,30.771,58.05,32.383,57.422,34.024L57.422,34.024z M20.928,29.205c1.629-0.417,3.34-0.778,5.114-1.08 c-0.619,0.967-1.216,1.94-1.786,2.908c-0.571,0.972-1.134,1.972-1.683,2.99C21.945,32.384,21.395,30.772,20.928,29.205 L20.928,29.205z M60.365,39.999c1.415-3.162,2.587-6.292,3.49-9.326C70.758,33.192,75,36.721,75,40s-4.242,6.808-11.145,9.327 C62.951,46.292,61.78,43.161,60.365,39.999L60.365,39.999z M16.142,49.326C9.241,46.807,5,43.278,5,40s4.241-6.807,11.141-9.326 c0.903,3.035,2.074,6.165,3.489,9.327C18.216,43.162,17.045,46.292,16.142,49.326L16.142,49.326z M53.953,51.876 c0.618-0.968,1.216-1.941,1.785-2.909c0.572-0.972,1.135-1.973,1.684-2.991c0.628,1.641,1.178,3.254,1.646,4.821 C57.438,51.212,55.727,51.574,53.953,51.876L53.953,51.876z M20.929,50.795c0.467-1.566,1.017-3.177,1.644-4.816 c0.548,1.017,1.111,2.017,1.682,2.988c0.569,0.968,1.166,1.94,1.785,2.908C24.267,51.572,22.557,51.211,20.929,50.795 L20.929,50.795z M24.474,71.003c-0.924,0-1.736-0.195-2.413-0.579c-1.19-0.676-2.051-1.977-2.557-3.869 c-0.831-2.845-0.737-6.592,0.218-10.933c3.176,0.814,6.592,1.428,10.175,1.826c2.075,2.766,4.246,5.313,6.468,7.588 C31.85,68.893,27.653,71.004,24.474,71.003L24.474,71.003L24.474,71.003z M50.098,57.45c3.584-0.399,7.001-1.012,10.178-1.826 c1.105,4.74,1.192,8.518,0.217,10.932c-0.505,1.889-1.364,3.188-2.552,3.861c-0.678,0.384-1.49,0.579-2.413,0.579v1l-0.001-1 c-3.18,0-7.377-2.11-11.891-5.961C45.856,62.762,48.025,60.216,50.098,57.45L50.098,57.45z M40,61.62 c-1.12-1.148-2.234-2.379-3.33-3.68C37.79,57.98,38.904,58,40,58c1.095,0,2.208-0.02,3.327-0.06 C42.232,59.241,41.119,60.472,40,61.62L40,61.62z"
                  ></path>
                </g>
              </svg>
              <h4
                className={
                  selected === "React" ? "text-center text-sm" : "hidden"
                }
              >
                React
              </h4>
            </div>
          </div>
          <div className="">
            <div className="flex space-x-2 p-2 col-span-3 shrink-0 overflow-x-scroll scrollbar-hide">
              {selected !== "All" &&
                projects.map(
                  (project) =>
                    project.projectType === selected && (
                      <div
                        key={project.id}
                        className="relative flex flex-col shrink-0 overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1"
                      >
                        <a
                          href="#"
                          title=""
                          className="flex shrink-0 aspect-w-4 aspect-h-3"
                        >
                          <Image
                            className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                            src={project.imageUrl}
                            alt={project.title}
                            height={400}
                            width={400}
                            layout="fill"
                          />
                        </a>
                        <div className="flex-1 px-4 py-5 sm:p-6">
                          <a href="#" title="" class="">
                            <p className="text-md font-bold text-gray-900">
                              {project.title}
                            </p>
                            <p className="text-md hidden sm:block">{project.projectInfo}</p>
                          </a>
                        </div>
                        <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Link href={project.githubRepo}>
                              <a
                                className="flex space-x-1 items-center"
                                role="button"
                              >
                                <svg
                                  className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 480 512"
                                >
                                  <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                                </svg>
                                <p>Repo</p>
                              </a>
                            </Link>
                            <Link href={project.websiteUrl}>
                              <a
                                className="flex space-x-1 items-center"
                                role="button"
                              >
                                <svg
                                  className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6 31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0l112.3-112.3zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5 50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0 27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                                </svg>
                                <p>Web</p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                )}
              {selected === "All" &&
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative flex flex-col shrink-0 overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1"
                  >
                    <a
                      href="#"
                      title=""
                      className="flex shrink-0 aspect-w-4 aspect-h-3"
                    >
                      <Image
                        className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                        src={project.imageUrl}
                        alt={project.title}
                        height={400}
                        width={400}
                        layout="fill"
                      />
                    </a>
                    <div className="flex-1 px-4 py-5 sm:p-6">
                      <a>
                        <p className="text-md font-bold text-gray-900">
                          {project.title}
                        </p>
                        <p className="text-md hidden sm:block">{project.projectInfo}</p>
                      </a>
                    </div>
                    <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                      <div className="flex items-center justify-between">
                        <Link href={project.githubRepo}>
                          <a
                            className="flex space-x-1 items-center"
                            role="button"
                          >
                            <svg
                              className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 480 512"
                            >
                              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path>
                            </svg>
                            <p>Repo</p>
                          </a>
                        </Link>
                        <Link href={project.websiteUrl}>
                          <a
                            className="flex space-x-1 items-center"
                            role="button"
                          >
                            <svg
                              className="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 640 512"
                            >
                              <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6 31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0l112.3-112.3zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5 50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l112.2-112.3c31.5-31.5 82.5-31.5 114 0 27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"></path>
                            </svg>
                            <p>Web</p>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
