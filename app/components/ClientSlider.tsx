"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";

// Import custom styles
import "../client-slider.css";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";

const clients = [
  [
    // First Row - Slide 1
    { name: "El Sanaee", logo: "/1.png" },
    { name: "El Shawmy", logo: "/2.png" },
    { name: "El Negma", logo: "/3.png" },
    { name: "Eva Pharma", logo: "/4.png" },
    { name: "Shopojoo", logo: "/5.png" },
    { name: "Crystal", logo: "/6.png" },
    // Second Row - Slide 1
    { name: "Rep In", logo: "/7.png" },
    { name: "Jannat", logo: "/8.png" },
    { name: "Americana", logo: "/9.png" },
    { name: "Dawaa", logo: "/10.png" },
    { name: "Zanussi", logo: "/11.png" },
    { name: "Brand 12", logo: "/12.png" },
  ],
  [
    // First Row - Slide 2
    { name: "Brand 13", logo: "/13.png" },
    { name: "Brand 14", logo: "/14.png" },
    { name: "Brand 15", logo: "/logos/brand15.png" },
    { name: "Brand 16", logo: "/logos/brand16.png" },
    { name: "Brand 17", logo: "/logos/brand17.png" },
    { name: "Brand 18", logo: "/logos/brand18.png" },
    // Second Row - Slide 2
    { name: "Brand 19", logo: "/logos/brand19.png" },
    { name: "Brand 20", logo: "/logos/brand20.png" },
    { name: "Brand 21", logo: "/logos/brand21.png" },
    { name: "Brand 22", logo: "/logos/brand22.png" },
    { name: "Brand 23", logo: "/logos/brand23.png" },
    { name: "Brand 24", logo: "/logos/brand24.png" },
  ],
];

export function ClientSlider() {
  return (
    <section className="py-20 bg-white">
      <MaxWidthWrapper className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#1E2756] text-2xl font-semibold mb-4">OUR CLIENTS</h2>
          <h3 className="text-4xl font-bold">
            <span className="text-yellow-400">Brands</span> we are proud to work with
          </h3>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          className="clients-swiper"
        >
          {clients.map((slideClients, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid grid-cols-6 gap-8 mb-8">
                {/* First Row */}
                {slideClients.slice(0, 6).map((client, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="flex items-center w-20 h-20 relative justify-center p-4 hover:scale-105 transition-transform"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="max-w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-6 gap-8">
                {/* Second Row */}
                {slideClients.slice(6, 12).map((client, index) => (
                  <div
                    key={`${slideIndex}-${index}`}
                    className="flex items-center w-20 h-20 relative justify-center p-4 hover:scale-105 transition-transform"
                  >
                    <Image
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      fill
                      className="max-w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </MaxWidthWrapper>
    </section>
  );
}
