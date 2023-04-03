import { Link } from "react-router-dom";
import { Transition, CSSTransition } from "react-transition-group";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { useRef } from "react";

const duration = 30000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Product = () => {
  const nodeRef = useRef(null);

  const formatPrice = (price) => {
    return parseInt(price).toFixed(2);
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={700}
      //    nodeRef={nodeRef} timeout={duration}
    >
      <div className="">
        <div className="px-4 py-6 mb-5 flex items-center">
          <div className="flex-1">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2b2d40"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="flex items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#e65986"
                className="w-8 h-8"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <div className="mx-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                />
              </svg>
            </div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mx-4 bg_category rounded-md px-6 py-4 flex">
          <div>
            <div className="w-12 h-12 bg_small_shirt rounded-md overflow-hidden mb-5">
              <img
                src="/shirt.png"
                alt="shirt"
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="w-12 h-12 bg_small_shirt rounded-md overflow-hidden mb-5">
              <img
                src="/shirt.png"
                alt="shirt"
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="w-12 h-12 bg_small_shirt rounded-md overflow-hidden mb-5">
              <img
                src="/shirt.png"
                alt="shirt"
                className="w-12 h-12 object-cover"
              />
            </div>
            <div className="w-12 h-12 bg_small_shirt rounded-md overflow-hidden mb-5">
              <img
                src="/shirt.png"
                alt="shirt"
                className="w-12 h-12 object-cover"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <img src="/shirt.png" alt="shirt" />
          </div>
        </div>

        <div className="mx-4 mt-7 mb-40">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#9ea0a6"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
              />
            </svg>
            <p className="ml-2 text-gray-400 text-sm">tokobaju.id</p>
          </div>
          <p className="text-2xl secondary_color font-bold my-3">
            Essentials Men's Short-Sleeve Crewneck T-Shirt
          </p>
          <div className="my-5 flex">
            <div className="flex items-center">
              <div className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#f9a23b"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md text-gray-400 font-medium">4.9 Ratings</p>
            </div>
            <div className="flex-1 mx-4 flex items-center justify-between">
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#878992" }}
              />
              <p className="text-md text-gray-400 font-medium">2.3K+ Reviews</p>
              <div
                className="w-1 h-1 rounded-full"
                style={{ backgroundColor: "#878992" }}
              />
            </div>
            <div>
              <p className="text-md text-gray-400 font-medium">2.9K+ Sold</p>
            </div>
          </div>

          <div className="mt-10 flex">
            <div className="w-1/2">
              <p className="text-xl primary_color font-medium border-b-2 border_primary_color pb-3">
                About Item
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-xl text-gray-400 font-medium border-b-2 border-gray-400 pb-3">
                Reviews
              </p>
            </div>
          </div>
          <div className="my-5 w-10/12">
            <div className="flex justify-between">
              <div className="flex">
                <p className="text-md text-gray-400">Brand:</p>
                <p className="ml-3 text-md secondary_color font-bold">
                  ChArmkpR
                </p>
              </div>
              <div className="flex">
                <p className="text-md text-gray-400">Color:</p>
                <p className="ml-3 text-md secondary_color font-bold">
                  Aprikot
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 w-full">
          <div className="bg_light_gray flex justify-between items-center px-4 py-6">
            <div>
              <p className="text-sm text-gray-400 font-medium">Total price</p>
              <p className="mt-1 text-3xl primary_color font-bold">
                ${formatPrice(12)}
              </p>
            </div>
            <div className="flex">
              <div className="w-20 p-2 flex items-center justify-center rounded-s-md bg_primary_color">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>

                <p className="ml-2 text-lg text-white">1</p>
              </div>
              <div className="w-32 p-2 rounded-e-md bg_secondary_color">
                <p className="ml-2 text-md text-white text-center">Buy Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
};

export default Product;
