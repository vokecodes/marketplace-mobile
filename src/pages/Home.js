import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CATEGORIES = [
  {
    id: 1,
    title: "Category",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#63656f"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Flight",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#63656f"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Bill",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#63656f"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Data Plan",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#63656f"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Top Up",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#63656f"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const PRODUCTS = [
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2536,
    amount: 12,
  },
  {
    favourite: true,
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2537,
    amount: 18,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2538,
    amount: 22,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2539,
    amount: 32,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2540,
    amount: 12,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2541,
    amount: 12,
  },
  {
    favourite: true,
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2542,
    amount: 18,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2543,
    amount: 22,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2544,
    amount: 32,
  },
  {
    category: "Shirt",
    image: "./shirt.png",
    title: `Essentials Men's Short-Sleeve Crewneck T-Shirt`,
    rating: 4.9,
    id: 2545,
    amount: 12,
  },
];

const MENU = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#4bb198"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Voucher",
    path: "/voucher",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#7f8595"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Wallet",
    path: "/wallet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#7f8595"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Settings",
    path: "/settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#7f8595"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const BANNER_SLIDES = [
  {
    id: 0,
    backgroundImage: 'url("/shirts-hanging.jpg")',
    label: "Fashion Day",
    title: "80 % off",
    description: "Discover fashion that suits to your style",
    buttonText: "Check this out",
  },
  {
    id: 1,
    backgroundImage: 'url("/beauty.jpg")',
    label: "BeautySale",
    title: "Discover Our Beauty Selection",
    buttonText: "Check this out",
  },
];

const Home = () => {
  const [activeSlider, setActiveSlider] = useState(0);

  const [searchBackgroundColor, setSearchBackgroundColor] =
    useState("transparent");

  const [badge, setBadge] = useState("top-6");

  const changeBackground = () => {
    if (window.scrollY > 14) {
      setSearchBackgroundColor("pt-8 bg-white");
      setBadge("top-9");
    } else {
      setSearchBackgroundColor("pt-5 bg-transparent");
      setBadge("top-6");
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll
    window.addEventListener("scroll", changeBackground);
  });

  const formatPrice = (price) => {
    return parseInt(price).toFixed(2);
  };

  return (
    <div className="bg-white h-">
      <div
        className={`z-50 fixed top-0 w-full px-4 pb-6 ${searchBackgroundColor}`}
      >
        <div className="flex items-center">
          <div className="w-72 relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              id="search"
              className="block w-full bg-transparent rounded-md border border-gray-300 py-1.5 pl-10 text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="Search.."
            />
          </div>
          <div className="ml-5 flex">
            <div className="mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000000"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <div
                className={`w-5 h-4 bg_tertiary_color rounded-sm absolute right-16 ${badge}`}
              >
                <p className="text-xs text-white text-center">1</p>
              </div>
            </div>

            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#000000"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              <div
                className={`w-5 h-4 bg_tertiary_color rounded-sm absolute right-4 ${badge}`}
              >
                <p className="text-xs text-white text-center">9+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        onChange={(index) => setActiveSlider(index)}
      >
        {BANNER_SLIDES?.map((slide) => (
          <div
            key={slide.id}
            className="h-72 w-100 px-4 py-6 text-left bg-cover bg-no-repeat"
            style={{
              backgroundImage: slide.backgroundImage,
            }}
          >
            <div className="mt-16 w-48">
              <div className="h-28">
                <p className="text-black font-bold uppercase text-sm">
                  #{slide.label}
                </p>
                <p className="text-black uppercase text-xl font-bold my-2">
                  {slide.title}
                </p>
                <p className="text-black text-sm font-light">
                  {slide.description}
                </p>
              </div>

              <button className="w-36 p-3 mt-4 rounded-xl bg_secondary_color">
                <p className="text-white text-xs text-center">
                  {slide.buttonText}
                </p>
              </button>
            </div>
          </div>
        ))}
      </Carousel>

      <div className="absolute right-6 top-20">
        <div className="w-8 mt-5 mx-auto flex justify-between items-center">
          {BANNER_SLIDES?.map((_, i) => (
            <div
              key={i}
              className={`${
                i === activeSlider
                  ? "w-4 h-1 rounded-2xl bg_active_carousel_indicator"
                  : "w-1 h-1 rounded-full bg_carousel_indicator"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="my-10 mx-2 w-full overflow-hidden">
        <div className="flex justify-between">
          {CATEGORIES?.map((category) => (
            <div
              key={category?.id}
              className="w-[20%] flex flex-col items-center"
            >
              <div className="w-8 h-8 mb-3 bg_category flex items-center justify-center rounded-md">
                {category?.icon}
              </div>
              <p className="text-sm text-gray-400">{category?.title}</p>
            </div>
          ))}
        </div>
        <div className="w-10 mt-5 mx-auto flex justify-between items-center">
          <div className="w-4 h-1 rounded-2xl bg_active_carousel_indicator" />
          <div className="w-1 h-1 rounded-full bg_carousel_indicator" />
          <div className="w-1 h-1 rounded-full bg_carousel_indicator" />
        </div>
      </div>

      <div className="px-4 py-12 bg_gray">
        <div className="flex">
          <p className="flex-1 text-2xl secondary_color font-bold">
            Best Sale Product
          </p>
          <p className="text-xl primary_color font-medium">See more</p>
        </div>
        <div className="relative overflow-y-scroll my-6 flex flex-wrap justify-between w-full products_height">
          {PRODUCTS?.map((product) => (
            <div className="w-[48%] mb-8" key={product?.id}>
              <Link to="/product">
                <div className="absolute ml-32 mt-3">
                  {product?.favourite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#e65986"
                      className="w-6 h-6"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  )}
                </div>
                <div className="bg_product_image h-40 overflow-hidden">
                  <img src={product?.image} alt="shirt" className="" />
                </div>
                <div className="bg-white px-3 py-2 shadow-md">
                  <p className="text-sm text-gray-400">{product?.category}</p>
                  <p className="text-sm secondary_color font-extrabold mt-1">
                    {product?.title}
                  </p>
                  <div className="my-3 flex items-center">
                    <div className="flex-1 flex items-center">
                      <div className="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#f9a23b"
                          className="w-4 h-4"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-xs text-gray-400 font-medium">
                        {product?.rating}
                      </p>
                      <div className="border border-gray-300 mx-1 h-4" />
                      <p className="text-xs text-gray-400 font-medium">
                        {product?.id}
                      </p>
                    </div>
                    <div>
                      <p className="text-md primary_color font-semibold">
                        ${formatPrice(product?.amount)}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 w-full">
        <div
          className="flex justify-between px-6 pt-4 pb-6"
          style={{ backgroundColor: "#eeeff1" }}
        >
          {MENU?.map((item) => (
            <div key={item?.id} className="">
              <div className="mb-1 flex justify-center">{item?.icon}</div>
              <p
                className={`text-sm ${
                  window.location.pathname === item?.path
                    ? "text-black font-bold"
                    : "text-gray-400"
                }`}
              >
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
