import { ProductImage } from "./ProductImage";
import { Price } from "./Price";
import { useCart } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const PromoSlider = ({ title, productList }) => {
  const { addToCart } = useCart();

  if (!productList || productList.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400">Тут поки порожньо...</p>
      </div>
    );
  }

  return (
    <section
      id="promo-slider"
      className="bg-white p-4 flex flex-col gap-4 rounded-2xl w-full min-w-0 overflow-hidden"
    >
      <h2 className="text-xl font-bold text-gray-900 text-center">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full max-w-221 h-fit pt-2"
      >
        {productList.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="grid sm:grid-cols-3 grid-cols-1 items-center gap-4 px-10 pb-8 sm:h-64">
              <div className="h-48 sm:h-full w-full flex items-center justify-center overflow-hidden rounded-lg bg-white">
                <ProductImage
                  className="max-h-full max-w-full object-contain"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex flex-col justify-center items-start gap-3">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <Price product={product} size="lg" />
                <p className="text-gray-600 line-clamp-2">
                  {product.description}
                </p>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-pink-600 text-white px-6 py-2 rounded-2xl font-bold hover:bg-pink-700 transition-all shadow-lg active:scale-95"
                >
                  Купити зараз
                </button>
              </div>
              <p className="hidden sm:block text-gray-600 text-sm whitespace-pre-line line-clamp-8">
                {product.fullDescription}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
