const products = [
  {
    id: 1,
    name: "Червоне яблуко",
    category: "Фрукти",
    price: 10,
    description: "Солодке, хрустке яблуко",
    image: "https://delikates.ua/images/product/yabluko-chervone.jpg",
  },
  {
    id: 2,
    name: "Банан",
    category: "Фрукти",
    price: 20,
    description: "Мʼякий, солодкий банан",
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 3,
    name: "Огірок ґрунтовий",
    category: "Овочі",
    price: 30,
    description: "Свіжий ґрунтовий огірок",
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 4,
    name: "Помідор",
    category: "Овочі",
    price: 40,
    description: "Соковитий свіжий помідор",
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
  },
  {
    id: 5,
    name: "Апельсин",
    category: "Цитрусові",
    price: 50,
    description: "Соковитий апельсин",
    image:
      "https://fruit-time.ua/images/cache/products/b4/apelsin-ispaniya-imp-500x500.jpeg",
  },
  {
    id: 6,
    name: "Лимон",
    category: "Цитрусові",
    price: 60,
    description: "Ароматний кислий лимон",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mho6cMKE0n1zgPFjwVA_sC_pwckcHvIeQ&s",
  },
  {
    id: 7,
    name: "Огірок довгий",
    category: "Овочі",
    price: 10,
    description: "Довгий гладкий огірок",
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 8,
    name: "Органічний банан",
    category: "Фрукти",
    price: 20,
    description: "Органічний солодкий банан",
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 9,
    name: "Огірок парниковий",
    category: "Овочі",
    price: 30,
    description: "Ніжний тепличний огірок",
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 10,
    name: "Міні-банан",
    category: "Фрукти",
    price: 40,
    description: "Маленький солодкий банан",
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 11,
    name: "Помідори чері",
    category: "Овочі",
    price: 50,
    description: "Солодкі томати чері",
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
  },
  {
    id: 12,
    name: "Червоний банан",
    category: "Фрукти",
    price: 60,
    description: "Солодкий червоний банан",
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 13,
    name: "Полуниця",
    category: "Ягоди",
    price: 70,
    description: "Свіжа соковита полуниця",
    image:
      "https://happypen-photos.s3.eu-north-1.amazonaws.com/44167/klubnika-1kg-ukraina0",
  },
  {
    id: 14,
    name: "Чорниця",
    category: "Ягоди",
    price: 80,
    description: "Насичена свіжа чорниця",
    image:
      "https://berry.in.ua/wp-content/uploads/2024/06/FlavourArt-Bilberry.jpg",
  },
  {
    id: 15,
    name: "Броколі",
    category: "Овочі",
    price: 45,
    description: "Свіжа зелена броколі",
    image: "https://biolika.ua/c/531-category_default/brokkoli.jpg",
  },
  {
    id: 16,
    name: "Авокадо",
    category: "Фрукти",
    price: 90,
    description: "Авокадо Хасс для тостів",
    image: "https://crazybox.com.ua/image/catalog/exotika_new/awokado_hass.JPG",
  },
  {
    id: 17,
    name: "Морква",
    category: "Овочі",
    price: 25,
    description: "Свіжа хрустка морква",
    image:
      "https://src.zakaz.atbmarket.com/cache/photos/44/catalog_product_gal_mob_44.png",
  },
  {
    id: 18,
    name: "Ківі",
    category: "Фрукти",
    price: 55,
    description: "Соковитий стиглий ківі",
    image:
      "https://goodfruits.com.ua/wp-content/uploads/2024/02/kyvy-ob%D1%8Bchnoe-scaled-1.jpg",
  },
  {
    id: 19,
    name: "Віскі Hankey Bannister",
    category: "Алкоголь",
    price: 899,
    description: "Шотландський купажований віскі",
    image:
      "https://images.silpo.ua/v2/products/1000x1000/webp/eb6420ad-a5e3-4ce5-8b90-1886b0bfc120.png",
  },
  {
    id: 20,
    name: "Bottega Prosecco Extra Dry",
    category: "Алкоголь",
    price: 699,
    description: "Ігристе вино Extra Dry",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/ab017af7-780e-4f90-9dcb-d25fe2c8861f.png",
  },
  {
    id: 21,
    name: "Bottega Gold Prosecco Brut",
    category: "Алкоголь",
    price: 799,
    description: "Ігристе вино Brut",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/5c908603-c030-426f-8716-764ea16e558d.png",
  },
  {
    id: 22,
    name: "Cappy Exotic 1л",
    category: "Напої",
    price: 89,
    description: "Фруктовий нектар",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/62005632-fd3b-4d6c-8110-34199fbd8a5a.png",
  },
  {
    id: 23,
    name: "Pepsi Cola 1,75л",
    category: "Напої",
    price: 59,
    description: "Газований напій",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/461594b7-13ae-46ee-8c02-fa2d31bbaa37.png",
  },
  {
    id: 24,
    name: "Schweppes Pink Tonic",
    category: "Напої",
    price: 45,
    description: "Сильногазований тонік",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/9bc3b6bd-8fb2-4162-981e-37b5c96c4101.png",
  },
  {
    id: 25,
    name: "Фісташки Wonderful 250г",
    category: "Горіхи",
    price: 199,
    description: "Смажені солоні фісташки",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1d2cf223-eb7e-4a67-8cab-2e1180ea023e.png",
  },
  {
    id: 26,
    name: "Мигдаль Премія чилі",
    category: "Горіхи",
    price: 69,
    description: "Мигдаль з копченим чилі",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/31ecda7f-85f4-426e-b267-fc093b22100a.png",
  },
  {
    id: 27,
    name: "Йогурт Lekker 1кг",
    category: "Молочні",
    price: 129,
    description: "Грецький натуральний йогурт",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/8b8fe85a-e0a1-4b0e-98ff-09acaefe5e9d.png",
  },
  {
    id: 28,
    name: "Actimel лісові ягоди",
    category: "Молочні",
    price: 25,
    description: "Кисломолочний напій",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/80b18c4c-5780-426e-9cd4-c5e360c0a968.png",
  },
  {
    id: 29,
    name: "Йогурт Fantasia 100г",
    category: "Молочні",
    price: 39,
    description: "Йогурт з шоколадними кульками",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3cf71fa8-e0e1-469d-8188-846823ffbc1d.png",
  },
  {
    id: 30,
    name: "Valio PROfeel шоколад",
    category: "Молочні",
    price: 59,
    description: "Протеїновий пудинг",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/f11fe26c-7b9b-4348-90fb-828571c59f1b.png",
  },
  {
    id: 31,
    name: "Кекс Голландський",
    category: "Десерти",
    price: 79,
    description: "Класичний кекс 300г",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/37d90946-409b-4de6-b56f-8de27a18dacd.png",
  },
  {
    id: 32,
    name: "Сирник Львівський",
    category: "Десерти",
    price: 49,
    description: "Традиційний сирник",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1ee5cefb-4326-4272-ae3a-39228421e61a.png",
  },
  {
    id: 33,
    name: "Hamon Argal Serrano",
    category: "Мʼясо",
    price: 199,
    description: "Іспанський хамон 100г",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/e784f994-03df-4175-ba63-6dc779324619.png",
  },
  {
    id: 34,
    name: "Imperia Appetita асорті",
    category: "Мʼясо",
    price: 249,
    description: "Мʼясо та сир 215г",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/9b2235be-87a4-42b8-b499-60dbdf1f7c2a.png",
  },
  {
    id: 35,
    name: "Sierra Morena Іберіко",
    category: "Мʼясо",
    price: 299,
    description: "Хамон Іберіко 100г",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/a531b9c7-8b41-4901-8ba8-c91205097419.png",
  },
  {
    id: 36,
    name: "Mad Heads Easy Drip",
    category: "Кава",
    price: 179,
    description: "Кава в дріпах 100г",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/76a41ff9-3041-4da7-ba46-54fb111c1e55.png",
  },
  {
    id: 37,
    name: "L'OR Espresso Caramel",
    category: "Кава",
    price: 159,
    description: "Капсули з карамеллю",
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3201936a-9fa7-4d43-89e4-816cd02fcf7a.png",
  },
];

export default products;
