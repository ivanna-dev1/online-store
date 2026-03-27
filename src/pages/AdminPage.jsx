import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { AdminProductCard } from "../components/AdminProductCard";

export default function AdminPage() {
  const { allProducts, addProduct, deleteProduct, updateProduct } =
    useContext(ProductsContext);
  const [formData, setFormData] = useState({
    name: "",
    group: "",
    category: "",
    price: "",
    onSale: false,
    discount: null,
    isNew: false,
    inStock: true,
    image: "",
    description: "",
    fullDescription: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [view, setView] = useState("add");
  const [showAll, setShowAll] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    showFilters: false,
    searchTerm: "",
    group: "",
    category: "",
    priceMin: "",
    priceMax: "",
    isOnSale: false,
    isNew: false,
    isInStock: false,
    hasPhoto: false,
    hasDescription: false,
    hasFullDescription: false,
  });
  //Move to separate variable

  // window.scrollTo({
  //   top: 0,
  //   behavior: "smooth",
  // });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const id = allProducts.length + 1;
  const groups = [...new Set(allProducts.map((product) => product.group))];
  const categories = [
    ...new Set(
      allProducts
        .filter((product) => product.group === formData.group)
        .map((product) => product.category),
    ),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id && updateProduct(formData);
    !formData.id &&
      addProduct({ ...formData, price: Number(formData.price), id });
    setFormData({
      name: "",
      group: "",
      category: "",
      price: "",
      onSale: false,
      discount: null,
      isNew: true,
      inStock: true,
      image: "",
      description: "",
      fullDescription: "",
    });
    setShowSuccess(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };
  console.log("formData", formData);

  // редагування продукту
  const handleUpdate = (product) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // всі інпути заповняться даними продукту
    setFormData(product);
    // переключитися на вкладку додавання
    setView("add");
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilterOptions((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const clearFilters = () => {
    setFilterOptions({
      showFilters: false,
      searchTerm: "",
      group: "",
      category: "",
      priceMin: "",
      priceMax: "",
      isOnSale: false,
      isNew: false,
      isInStock: false,
      hasPhoto: false,
      hasDescription: false,
      hasFullDescription: false,
    });
  };
  const filteredProducts = allProducts.filter((product) => {
    return (
      (product.name
        .toLowerCase()
        .includes(filterOptions.searchTerm.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(filterOptions.searchTerm.toLowerCase()) ||
        product.fullDescription
          .toLowerCase()
          .includes(filterOptions.searchTerm.toLowerCase())) &&
      (!filterOptions.group || product.group === filterOptions.group) &&
      (!filterOptions.category ||
        product.category === filterOptions.category) &&
      (!filterOptions.priceMin ||
        product.price >= Number(filterOptions.priceMin)) &&
      (!filterOptions.priceMax ||
        product.price <= Number(filterOptions.priceMax)) &&
      (!filterOptions.isOnSale || product.onSale === filterOptions.isOnSale) &&
      (!filterOptions.isNew || product.isNew === filterOptions.isNew) &&
      (!filterOptions.isInStock ||
        product.inStock === filterOptions.isInStock) &&
      (!filterOptions.hasPhoto || product.image.length > 0) &&
      (!filterOptions.hasDescription || product.description.length > 0) &&
      (!filterOptions.hasFullDescription || product.fullDescription.length > 0)
    );
  });
  // const isFiltering = Object.values(filterOptions).some((value) => value !== ""); // Is true if any filter is applied
  const isFiltering =
    filterOptions.searchTerm ||
    filterOptions.group ||
    filterOptions.category ||
    filterOptions.priceMin ||
    filterOptions.priceMax ||
    filterOptions.isOnSale ||
    filterOptions.isNew ||
    filterOptions.isInStock ||
    filterOptions.hasPhoto ||
    filterOptions.hasDescription ||
    filterOptions.hasFullDescription;
  const shouldShowAll = showAll || isFiltering;
  const displayedProducts = shouldShowAll
    ? filteredProducts
    : filteredProducts.slice(-5).reverse();
  return (
    <div>
      <h1 className="text-4xl flex justify-center items-center font-bold text-center text-pink-900 mt-5 mb-3">
        Сторінка адміністратора
      </h1>
      <p className="flex justify-center items-center text-md font-bold text-center text-pink-800 m-3">
        Всього товарів: {allProducts.length}
      </p>
      <div className="flex flex-col  items-center justify-start w-full">
        <div className="flex flex-col sm:flex-row flex-wrap  justify-between items-center lg:w-1/3 md:w-1/2 w-4/5 mt-2 mb-3 bg-blue-100 rounded-lg">
          <button
            onClick={() => setView("add")}
            className={
              view === "add"
                ? " sm:flex-1 w-full bg-blue-300 text-blue-800 px-2 py-2 sm:px-4 hover:bg-blue-300 h-full  rounded-lg transition-all sm:whitespace-nowrap"
                : " sm:flex-1 w-full bg-blue-100 text-blue-800 px-2 py-2 sm:px-4 hover:bg-blue-300 h-full  rounded-lg transition-all sm:whitespace-nowrap"
            }
          >
            Додати товар
          </button>
          <button
            onClick={() => setView("manage")}
            className={
              view === "manage"
                ? // TODO: remove whitespace-nowrap
                  " sm:flex-1 w-full bg-blue-300 text-blue-800 px-2 py-2 sm:px-4 hover:bg-blue-300 h-full  rounded-lg transition-all sm:whitespace-nowrap"
                : " sm:flex-1 w-full bg-blue-100 text-blue-800 px-2 py-2 sm:px-4 hover:bg-blue-300 h-full rounded-lg transition-all sm:whitespace-nowrap"
            }
          >
            Керувати товарами
          </button>
        </div>
        {showSuccess && (
          <div className="flex justify-center items-center text-2xl font-bold text-center text-blue-400 mb-2">
            Товар успішно додано в каталог!
          </div>
        )}
        {view === "add" && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-1 items-center justify-center lg:w-1/3 md:w-1/2 w-3/4 shadow-2xl bg-white p-5 rounded-2xl"
          >
            <p className="text-2xl font-bold text-center text-gray-500 mb-5">
              Додавання нового товару
            </p>
            {/* <p className="text-gray-500 border border-pink-200 rounded-lg p-2 pl-5 w-full">
              id {formData.id ? formData.id : id}
            </p> */}
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Назва"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            />
            <select
              required
              name="group"
              value={formData.group}
              onChange={handleChange}
              className={`border border-pink-200 rounded-lg p-2 pl-5 w-full ${!formData.group ? "text-gray-400" : "text-black"}`}
            >
              <option value="" className="text-gray-400">
                Група
              </option>
              {groups.map((group) => (
                <option
                  key={group}
                  name="group"
                  value={group}
                  className="text-black"
                >
                  {group}
                </option>
              ))}
            </select>
            <select
              required
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`border border-pink-200 rounded-lg p-2 pl-5 w-full ${!formData.category ? "text-gray-400" : "text-black"} `}
            >
              <option value="" className="text-gray-400">
                Категорія
              </option>
              {categories.map((category) => (
                <option
                  key={category}
                  name="category"
                  value={category}
                  className="text-black"
                >
                  {category}
                </option>
              ))}
            </select>
            <input
              required
              min="0"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Ціна"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            />
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="onSale"
                name="onSale"
                value={formData.onSale}
                onChange={handleChange}
                className={formData.onSale ? "text-black" : "text-gray-400"}
              >
                Знижка
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="onSale"
                checked={formData.onSale}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <input
              {...(formData.onSale && "required")}
              {...(formData.onSale ? "" : "disabled")}
              maxLength="2"
              min="0"
              max="99"
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleChange}
              placeholder="Знижка %"
              onInput={(e) => {
                e.target.value = e.target.value.slice(0, 2);
              }}
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
              disabled={!formData.onSale}
            />
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="isNew"
                className={formData.isNew ? "text-black" : "text-gray-400"}
              >
                Новинка
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="isNew"
                checked={formData.isNew}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-5 w-full">
              <label
                cursor-pointer
                htmlFor="inStock"
                className={formData.inStock ? "text-black" : "text-gray-400"}
              >
                В наявності
              </label>
              <input
                cursor-pointer
                type="checkbox"
                name="inStock"
                checked={formData.inStock}
                onChange={handleChange}
                className="border rounded-lg"
              />
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Опис"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            ></textarea>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleChange}
              placeholder="Повний опис"
              className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
            ></textarea>
            <div className=" flex flex-col items-center justify-center p-6 border-pink-200 rounded-lg pl-5 w-full border-dashed border-2">
              <label htmlFor="image" className="text-pink-400 mb-5">
                Перетягніть файл сюди або вставте посилання нижче
              </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="#Зображення"
                className="border border-pink-200 rounded-lg p-2 pl-5 w-full"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-all active:scale-95"
            >
              Додати товар
            </button>
          </form>
        )}
      </div>
      {view === "manage" && (
        <div className="relative flex flex-col items-center justify-start">
          <p className="text-xl font-medium mb-1">Останні додані товари:</p>
          <div className="flex flex-col gap-1 absolute top-0 left-1 md:left-3 z-10">
            <button
              onClick={() =>
                setFilterOptions({
                  ...filterOptions,
                  showFilters: !filterOptions.showFilters,
                })
              }
              className="border border-pink-500 bg-pink-300 hover:bg-pink-200 font-bold text-black md:px-2 px-2 py-2 rounded-lg transition-all active:scale-95 h-10 w-25"
            >
              Фільтри →
            </button>
            <button
              onClick={handleShowAll}
              className="border border-pink-500 bg-pink-300 hover:bg-pink-200 font-bold text-black md:px-2 px-2 py-2 rounded-lg transition-all active:scale-95 h-10 w-25"
            >
              {showAll ? "Менше" : "Більше→"}
            </button>
          </div>
          {filterOptions.showFilters && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              onClick={() =>
                setFilterOptions({
                  ...filterOptions,
                  showFilters: false,
                })
              }
            >
              <div
                className="fixed left-5 top-30  h-full bg-white z-50 shadow-2xl px-5 py-2 border border-pink-200 rounded-lg pl-2 w-fit text-md text-gray-800 flex flex-col  items-center justify-start gap-1 m-1"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between w-full mb-2 ">
                  <p className="text-pink-800 text-xl font-medium pl-2">
                    Фільтри
                  </p>
                  <p
                    className=" text-xl font-bold cursor-pointer"
                    onClick={() =>
                      setFilterOptions({
                        ...filterOptions,
                        showFilters: false,
                      })
                    }
                  >
                    X
                  </p>
                </div>
                <input
                  type="text"
                  name="searchTerm"
                  placeholder="Назва або опис..."
                  value={filterOptions.searchTerm}
                  onChange={handleFilterChange}
                  className="border border-pink-200 rounded-lg p-2 pl-2 w-full h-8"
                />
                <select
                  name="group"
                  value={filterOptions.group}
                  onChange={handleFilterChange}
                  className="border border-pink-200 rounded-lg  pl-2 w-full h-8 "
                >
                  <option
                    value=""
                    className={
                      filterOptions.group ? "text-black" : "text-gray-400"
                    }
                  >
                    Група
                  </option>
                  {groups.map((group) => (
                    <option
                      key={group}
                      name="group"
                      value={group}
                      className="text-black"
                    >
                      {group}
                    </option>
                  ))}
                </select>
                <select
                  name="category"
                  value={filterOptions.category}
                  onChange={handleFilterChange}
                  className="border  border-pink-200 rounded-lg pl-2 w-full h-8"
                >
                  <option
                    value=""
                    className={
                      filterOptions.category ? "text-black" : "text-gray-400"
                    }
                  >
                    Категорія
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category}
                      name="category"
                      value={category}
                      className="text-black"
                    >
                      {category}
                    </option>
                  ))}
                </select>
                <div className="flex flex-row flex-wrap justify-between">
                  <input
                    type="number"
                    min="0"
                    max="999999"
                    name="priceMin"
                    value={filterOptions.priceMin}
                    onChange={handleFilterChange}
                    placeholder="Від (грн)"
                    className=" flex-1 border border-pink-200 rounded-lg p-2 pl-2 w-full h-8 "
                  />
                  <input
                    type="number"
                    min="0"
                    max="999999"
                    name="priceMax"
                    value={filterOptions.priceMax}
                    onChange={handleFilterChange}
                    placeholder="До (грн)"
                    className=" flex-1 border border-pink-200 rounded-lg p-2 pl-2 w-full h-8 "
                  />
                </div>
                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    cursor-pointer
                    htmlFor="isOnSale"
                    className={
                      filterOptions.isOnSale ? "text-black" : "text-gray-500"
                    }
                  >
                    Знижка
                  </label>
                  <input
                    type="checkbox"
                    name="isOnSale"
                    checked={filterOptions.isOnSale}
                    onChange={handleFilterChange}
                    className="border rounded-lg"
                  />
                </div>
                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    htmlFor="isNew"
                    className={
                      filterOptions.isNew ? "text-black" : "text-gray-500"
                    }
                  >
                    Новинка
                  </label>
                  <input
                    type="checkbox"
                    name="isNew"
                    checked={filterOptions.isNew}
                    onChange={handleFilterChange}
                    className="border rounded-lg"
                  />
                </div>
                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    cursor-pointer
                    htmlFor="isInStock"
                    className={
                      filterOptions.isInStock ? "text-black" : "text-gray-500"
                    }
                  >
                    В наявності
                  </label>
                  <input
                    type="checkbox"
                    name="isInStock"
                    checked={filterOptions.isInStock}
                    onChange={handleFilterChange}
                    className="border rounded-lg"
                  />
                </div>

                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    htmlFor="hasDescription"
                    className={
                      filterOptions.hasDescription
                        ? "text-black"
                        : "text-gray-500"
                    }
                  >
                    Опис
                  </label>
                  <input
                    type="checkbox"
                    name="hasDescription"
                    checked={filterOptions.hasDescription}
                    onChange={handleFilterChange}
                    className="border rounded-lg p-2"
                  />
                </div>
                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    htmlFor="hasFullDescription"
                    className={
                      filterOptions.hasFullDescription
                        ? "text-black"
                        : "text-gray-500"
                    }
                  >
                    Повний опис
                  </label>
                  <input
                    type="checkbox"
                    name="hasFullDescription"
                    checked={filterOptions.hasFullDescription}
                    onChange={handleFilterChange}
                    className="border rounded-lg"
                  />
                </div>
                <div className="flex items-center flex-row justify-between border border-pink-200 rounded-lg p-2 pl-2 w-full h-8">
                  <label
                    htmlFor="hasImage"
                    className={
                      filterOptions.hasImage ? "text-black" : "text-gray-500"
                    }
                  >
                    Є фото
                  </label>
                  <input
                    type="checkbox"
                    name="hasImage"
                    checked={filterOptions.hasImage}
                    onChange={handleFilterChange}
                    className="border rounded-lg"
                  />
                </div>
                <div className="flex flex-row flex-wrap items-center justify-around gap-1 m-1 w-full">
                  <button
                    onClick={() => clearFilters()}
                    className="flex-1 border border-pink-500 bg-pink-100 hover:bg-pink-200 text-xs font-medium text-black md:px-2 px-2 py-2 rounded-lg transition-all active:scale-95 h-8"
                  >
                    Очистити
                  </button>
                  <button
                    onClick={() => {
                      setFilterOptions({
                        ...filterOptions,
                        showFilters: false,
                      });
                    }}
                    className="flex-1 border border-blue-500 bg-blue-100 hover:bg-blue-200 text-xs font-medium text-black md:px-2 px-2 py-2 rounded-lg transition-all active:scale-95  h-8"
                  >
                    Застосувати
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-row flex-wrap items-center justify-around gap-1 m-1">
            {displayedProducts.map((product) => (
              <div
                className="relative p-1 m-1 flex flex-row justify-between"
                key={product.id}
              >
                <div className="absolute top-5 right-2 flex flex-col items-center justify-center gap-1 w-22">
                  <button
                    className="flex items-center justify-center border border-blue-500 bg-blue-200 hover:bg-blue-300 hover:border-blue-500 text-black px-2 py-1 rounded-lg transition-all active:scale-95 w-full"
                    onClick={() => handleUpdate(product)}
                  >
                    Редагувати
                  </button>
                  <button
                    className="flex items-center justify-center border border-red-500 bg-red-200 hover:bg-red-300 hover:border-red-500 text-black px-2 py-1 rounded-lg transition-all active:scale-95 w-full"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Видалити
                  </button>
                </div>
                <AdminProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
