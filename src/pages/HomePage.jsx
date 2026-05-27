import CatalogPage from "./CatalogPage";
import { PromoSlider } from "../components/PromoSlider";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";

export default function HomePage() {
  const { allProducts } = useContext(ProductsContext);
  const saleProducts = allProducts.filter((product) => product.onSale === true);
  const newProducts = allProducts.filter((product) => product.isNew === true);

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });

  return (
    <div className="flex">
      {/* СЕКЦІЯ 1: Привітання та Слайдери */}
      <div className="flex flex-col items-center sm:p-10 sm:m-5 mx-auto p-4 m-2 bg-white rounded-3xl shadow-sm border w-full border-pink-100">
        <h1 className="sm:text-4xl text-2xl font-extrabold text-pink-900 mb-6 text-center">
          Вітаємо у FreshStore! 🍎🥦
        </h1>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          Ми пропонуємо тільки найсвіжіші овочі, фрукти та фермерські продукти з
          доставкою до ваших дверей. Гортайте нижче, щоб побачити наші акції!
        </p>
        <div className="max-w-230 w-full sm:h-75 h-auto rounded-2xl flex items-center justify-center border border-pink-200 shadow-inner group transition-all md:text-red-500 sm:text-blue-500">
          <PromoSlider title="Гарячі пропозиції" productList={saleProducts} />
          {/* <span className="text-pink-300 font-bold italic text-l transition-transform">
            🎠 Слайдер з акціями з'явиться тут...
          </span> */}
        </div>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          Тут ви знайдете продукти, які щойно з’явилися в асортименті: свіжі
          сезонні фрукти, нові фермерські продукти та цікаві гастрономічні
          новинки. Гортайте слайдер, щоб першими побачити, що нового з’явилося у
          нашому магазині.
        </p>
        <div className="max-w-230 w-full sm:h-75 h-auto rounded-2xl flex items-center justify-center border border-pink-200 shadow-inner group transition-all">
          <PromoSlider title="NEW!" productList={newProducts} />
          {/* <h3 className="text-pink-600 font-bold italic text-2xl group-hover:scale-110 transition-transform">
            🆕 Тут зʼявиться слайдер з новинками
          </h3> */}
        </div>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          Шукаєте ідеї для приготування смачних страв? У цьому слайдері ми
          будемо ділитися простими та корисними рецептами з продуктів, які є в
          нашому магазині. Ви знайдете натхнення для сніданків, обідів та вечер,
          а також дізнаєтесь, як легко приготувати щось нове.
        </p>
        <div className="max-w-230 w-full sm:h-75 h-auto rounded-2xl flex items-center justify-center border border-pink-200 shadow-inner group transition-all">
          <h3 className="text-pink-600 font-bold italic text-2xl group-hover:scale-110 transition-transform">
            🍳 Тут зʼявиться слайдер з рецептами
          </h3>
        </div>
        {/* СЕКЦІЯ 2: Весь наш каталог (пошук, групи, товари) */}
        <h1 className="sm:text-4xl text-2xl font-bold text-center text-pink-900 mt-8">
          Наш повний асортимент
        </h1>
        <CatalogPage />
      </div>
    </div>
  );
}
