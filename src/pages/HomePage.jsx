import CatalogPage from "./CatalogPage";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      {/* СЕКЦІЯ 1: Привітання та Слайдери */}
      <div className="flex flex-col items-center p-10 bg-white rounded-3xl shadow-sm m-4 border border-pink-100">
        <h1 className="text-4xl font-extrabold text-pink-900 mb-6 text-center">
          Вітаємо у FreshStore! 🍎🥦
        </h1>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          Ми пропонуємо тільки найсвіжіші овочі, фрукти та фермерські продукти з
          доставкою до ваших дверей. Гортайте нижче, щоб побачити наші акції!
        </p>

        {/* Місце для майбутнього слайдера (Крок 25) */}
        <div className="w-full max-w-4xl h-72  rounded-2xl flex items-center justify-center border-4 border-dashed border-pink-200 shadow-inner group transition-all ">
          <h3 className="text-pink-600 font-bold italic text-2xl group-hover:scale-110 transition-transform">
            🎠 Слайдер з акціями з'явиться тут...
          </h3>
        </div>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          У цьому розділі ми показуємо наші найновіші товари. Тут ви знайдете
          продукти, які щойно з’явилися в асортименті: свіжі сезонні фрукти,
          нові фермерські продукти та цікаві гастрономічні новинки. Гортайте
          слайдер, щоб першими побачити, що нового з’явилося у нашому магазині.
        </p>

        {/* Місце для майбутнього слайдера (Крок 25) */}
        <div className="w-full max-w-4xl h-72  rounded-2xl flex items-center justify-center border-4 border-dashed border-pink-200 shadow-inner group transition-all ">
          <h3 className="text-pink-600 font-bold italic text-2xl group-hover:scale-110 transition-transform">
            🆕 Тут зʼявиться слайдер з новинками
          </h3>
        </div>
        <p className="text-gray-600 text-lg mt-8 mb-4 max-w-2xl text-center leading-relaxed font-medium">
          Шукаєте ідеї для приготування смачних страв? У цьому слайдері ми
          будемо ділитися простими та корисними рецептами з продуктів, які є в
          нашому магазині. Ви знайдете натхнення для сніданків, обідів та вечер,
          а також дізнаєтесь, як легко приготувати щось нове з наших свіжих
          інгредієнтів.
        </p>

        {/* Місце для майбутнього слайдера (Крок 25) */}
        <div className="w-full max-w-4xl h-72  rounded-2xl flex items-center justify-center border-4 border-dashed border-pink-200 shadow-inner group transition-all">
          <h3 className="text-pink-600 font-bold italic text-2xl group-hover:scale-110 transition-transform">
            🍳 Тут зʼявиться слайдер з рецептами
          </h3>
        </div>
      </div>

      {/* СЕКЦІЯ 2: Весь наш каталог (пошук, групи, товари) */}
      <div className="flex flex-col items-center p-10  bg-white rounded-3xl shadow-sm m-4 border border-pink-100">
        <h1 className="text-4xl font-bold text-center text-pink-900 mb-8">
          Наш повний асортимент
        </h1>
        <CatalogPage />
      </div>
    </div>
  );
}
