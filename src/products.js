const products = [
  {
    id: 1,
    name: "Червоне яблуко",
    category: "Фрукти",
    price: 10,
    description: "Солодке, хрустке яблуко",
    fullDescription: `Солодке, хрустке яблуко. 
Стиглий плід із соковитою мʼякоттю та насиченим ароматом. 
Підходить для перекусу, десертів та салатів.`,
    image: "https://delikates.ua/images/product/yabluko-chervone.jpg",
  },
  {
    id: 2,
    name: "Банан",
    category: "Фрукти",
    price: 20,
    description: "Мʼякий, солодкий банан",
    fullDescription: `Мʼякий, солодкий банан.
Джерело калію та швидкої енергії. 
Ідеальний для смузі, сніданків та перекусів.`,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 3,
    name: "Огірок ґрунтовий",
    category: "Овочі",
    price: 30,
    description: "Свіжий ґрунтовий огірок",
    fullDescription: `Свіжий ґрунтовий огірок.
Хрусткий та ароматний овоч для салатів 
та легких літніх страв.`,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 4,
    name: "Помідор",
    category: "Овочі",
    price: 40,
    description: "Соковитий свіжий помідор",
    fullDescription: `Соковитий свіжий помідор.
Мʼясистий та ароматний, підходить для 
салатів, соусів та пасти.`,
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
  },
  {
    id: 5,
    name: "Апельсин",
    category: "Цитрусові",
    price: 50,
    description: "Соковитий апельсин",
    fullDescription: `Соковитий апельсин.
Багатий на вітамін C, має яскравий аромат 
та освіжаючий смак.`,
    image:
      "https://fruit-time.ua/images/cache/products/b4/apelsin-ispaniya-imp-500x500.jpeg",
  },

  // --- щоб не розтягувати відповідь до 1000 рядків ---
  // Я далі додаю такий самий fullDescription для кожного товару
  // (логіка однакова: короткий опис + 2-3 речення деталізації)

  {
    id: 6,
    name: "Лимон",
    category: "Цитрусові",
    price: 60,
    description: "Ароматний кислий лимон",
    fullDescription: `Ароматний кислий лимон.
Ідеальний для напоїв, чаю та маринадів.
Містить велику кількість вітаміну C.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mho6cMKE0n1zgPFjwVA_sC_pwckcHvIeQ&s",
  },
  {
    id: 7,
    name: "Огірок довгий",
    category: "Овочі",
    price: 10,
    description: "Довгий гладкий огірок",
    fullDescription: `Довгий гладкий огірок.
Соковитий та хрусткий, має ніжну шкірку.
Ідеально підходить для салатів та сендвічів.`,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 8,
    name: "Органічний банан",
    category: "Фрукти",
    price: 20,
    description: "Органічний солодкий банан",
    fullDescription: `Органічний солодкий банан.
Вирощений без синтетичних добрив.
Має ніжну текстуру та природну солодкість.`,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 9,
    name: "Огірок парниковий",
    category: "Овочі",
    price: 30,
    description: "Ніжний тепличний огірок",
    fullDescription: `Ніжний тепличний огірок.
Має тонку шкірку та соковиту мʼякоть.
Підходить для салатів та холодних закусок.`,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
  },
  {
    id: 10,
    name: "Міні-банан",
    category: "Фрукти",
    price: 40,
    description: "Маленький солодкий банан",
    fullDescription: `Маленький солодкий банан.
Зручний формат для перекусу.
Має насичений аромат та мʼяку текстуру.`,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 11,
    name: "Помідори чері",
    category: "Овочі",
    price: 50,
    description: "Солодкі томати чері",
    fullDescription: `Солодкі томати чері.
Мають насичений смак та аромат.
Підходять для салатів та закусок.`,
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
  },
  {
    id: 12,
    name: "Червоний банан",
    category: "Фрукти",
    price: 60,
    description: "Солодкий червоний банан",
    fullDescription: `Солодкий червоний банан.
Має більш кремову текстуру та насичений смак.
Ідеальний для десертів.`,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
  },
  {
    id: 13,
    name: "Полуниця",
    category: "Ягоди",
    price: 70,
    description: "Свіжа соковита полуниця",
    fullDescription: `Свіжа соковита полуниця.
Ароматна та солодка ягода.
Підходить для десертів та смузі.`,
    image:
      "https://happypen-photos.s3.eu-north-1.amazonaws.com/44167/klubnika-1kg-ukraina0",
  },
  {
    id: 14,
    name: "Чорниця",
    category: "Ягоди",
    price: 80,
    description: "Насичена свіжа чорниця",
    fullDescription: `Насичена свіжа чорниця.
Має глибокий смак та темний колір.
Багата на антиоксиданти.`,
    image:
      "https://berry.in.ua/wp-content/uploads/2024/06/FlavourArt-Bilberry.jpg",
  },
  {
    id: 15,
    name: "Броколі",
    category: "Овочі",
    price: 45,
    description: "Свіжа зелена броколі",
    fullDescription: `Свіжа зелена броколі.
Має щільну текстуру та ніжний смак.
Підходить для варіння та запікання.`,
    image: "https://biolika.ua/c/531-category_default/brokkoli.jpg",
  },
  {
    id: 16,
    name: "Авокадо",
    category: "Фрукти",
    price: 90,
    description: "Авокадо Хасс для тостів",
    fullDescription: `Авокадо сорту Хасс.
Має кремову текстуру та ніжний горіховий смак.
Ідеально підходить для тостів та салатів.`,
    image: "https://crazybox.com.ua/image/catalog/exotika_new/awokado_hass.JPG",
  },
  {
    id: 17,
    name: "Морква",
    category: "Овочі",
    price: 25,
    description: "Свіжа хрустка морква",
    fullDescription: `Свіжа хрустка морква.
Має природну солодкість.
Підходить для супів, салатів та соків.`,
    image:
      "https://src.zakaz.atbmarket.com/cache/photos/44/catalog_product_gal_mob_44.png",
  },
  {
    id: 18,
    name: "Ківі",
    category: "Фрукти",
    price: 55,
    description: "Соковитий стиглий ківі",
    fullDescription: `Соковитий стиглий ківі.
Має освіжаючий кисло-солодкий смак.
Багатий на вітамін C.`,
    image:
      "https://goodfruits.com.ua/wp-content/uploads/2024/02/kyvy-ob%D1%8Bchnoe-scaled-1.jpg",
  },
  {
    id: 19,
    name: "Віскі Hankey Bannister",
    category: "Алкоголь",
    price: 899,
    description: "Шотландський купажований віскі",
    fullDescription: `Шотландський купажований віскі.
Має мʼякий смак з нотами карамелі та дуба.
Підходить для вживання в чистому вигляді або з льодом.`,
    image:
      "https://images.silpo.ua/v2/products/1000x1000/webp/eb6420ad-a5e3-4ce5-8b90-1886b0bfc120.png",
  },
  {
    id: 20,
    name: "Bottega Prosecco Extra Dry",
    category: "Алкоголь",
    price: 699,
    description: "Ігристе вино Extra Dry",
    fullDescription: `Ігристе вино Extra Dry.
Має легкий фруктовий аромат.
Підходить для святкових подій.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/ab017af7-780e-4f90-9dcb-d25fe2c8861f.png",
  },
  {
    id: 21,
    name: "Bottega Gold Prosecco Brut",
    category: "Алкоголь",
    price: 799,
    description: "Ігристе вино Brut",
    fullDescription: `Ігристе вино Brut.
Сухий смак з тонкими цитрусовими нотами.
Ідеально підходить до закусок.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/5c908603-c030-426f-8716-764ea16e558d.png",
  },
  {
    id: 22,
    name: "Cappy Exotic 1л",
    category: "Напої",
    price: 89,
    description: "Фруктовий нектар",
    fullDescription: `Фруктовий нектар з екзотичних фруктів.
Має яскравий аромат та солодкий смак.
Підходить для щоденного вживання.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/62005632-fd3b-4d6c-8110-34199fbd8a5a.png",
  },
  {
    id: 23,
    name: "Pepsi Cola 1,75л",
    category: "Напої",
    price: 59,
    description: "Газований напій",
    fullDescription: `Газований напій зі знайомим карамельним смаком.
Освіжає та підходить для вечірок.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/461594b7-13ae-46ee-8c02-fa2d31bbaa37.png",
  },
  {
    id: 24,
    name: "Schweppes Pink Tonic",
    category: "Напої",
    price: 45,
    description: "Сильногазований тонік",
    fullDescription: `Сильногазований тонік з ягідними нотами.
Освіжаючий та злегка гіркуватий смак.
Підходить для коктейлів.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/9bc3b6bd-8fb2-4162-981e-37b5c96c4101.png",
  },
  {
    id: 25,
    name: "Фісташки Wonderful 250г",
    category: "Горіхи",
    price: 199,
    description: "Смажені солоні фісташки",
    fullDescription: `Смажені солоні фісташки.
Мають насичений смак та хрустку текстуру.
Ідеальні для перекусу.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1d2cf223-eb7e-4a67-8cab-2e1180ea023e.png",
  },
  {
    id: 26,
    name: "Мигдаль Премія чилі",
    category: "Горіхи",
    price: 69,
    description: "Мигдаль з копченим чилі",
    fullDescription: `Мигдаль з пікантним смаком чилі.
Хрусткий та ароматний перекус.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/31ecda7f-85f4-426e-b267-fc093b22100a.png",
  },
  {
    id: 27,
    name: "Йогурт Lekker 1кг",
    category: "Молочні",
    price: 129,
    description: "Грецький натуральний йогурт",
    fullDescription: `Грецький натуральний йогурт.
Має густу текстуру та ніжний смак.
Підходить для сніданків та соусів.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/8b8fe85a-e0a1-4b0e-98ff-09acaefe5e9d.png",
  },
  {
    id: 28,
    name: "Actimel лісові ягоди",
    category: "Молочні",
    price: 25,
    description: "Кисломолочний напій",
    fullDescription: `Кисломолочний напій з ароматом лісових ягід.
Підтримує баланс мікрофлори.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/80b18c4c-5780-426e-9cd4-c5e360c0a968.png",
  },
  {
    id: 29,
    name: "Йогурт Fantasia 100г",
    category: "Молочні",
    price: 39,
    description: "Йогурт з шоколадними кульками",
    fullDescription: `Йогурт з хрусткими шоколадними кульками.
Поєднання ніжної текстури та солодкого смаку.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3cf71fa8-e0e1-469d-8188-846823ffbc1d.png",
  },
  {
    id: 30,
    name: "Valio PROfeel шоколад",
    category: "Молочні",
    price: 59,
    description: "Протеїновий пудинг",
    fullDescription: `Протеїновий пудинг з шоколадним смаком.
Містить високий вміст білка.
Підходить для спортсменів.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/f11fe26c-7b9b-4348-90fb-828571c59f1b.png",
  },
  {
    id: 31,
    name: "Кекс Голландський",
    category: "Десерти",
    price: 79,
    description: "Класичний кекс 300г",
    fullDescription: `Класичний кекс з ніжною текстурою.
Має солодкий аромат та мʼяку структуру.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/37d90946-409b-4de6-b56f-8de27a18dacd.png",
  },
  {
    id: 32,
    name: "Сирник Львівський",
    category: "Десерти",
    price: 49,
    description: "Традиційний сирник",
    fullDescription: `Традиційний львівський сирник.
Має ніжну сирну текстуру та шоколадну глазур.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1ee5cefb-4326-4272-ae3a-39228421e61a.png",
  },
  {
    id: 33,
    name: "Hamon Argal Serrano",
    category: "Мʼясо",
    price: 199,
    description: "Іспанський хамон 100г",
    fullDescription: `Іспанський хамон Serrano.
Витримане мʼясо з насиченим смаком.
Ідеально для мʼясної тарілки.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/e784f994-03df-4175-ba63-6dc779324619.png",
  },
  {
    id: 34,
    name: "Imperia Appetita асорті",
    category: "Мʼясо",
    price: 249,
    description: "Мʼясо та сир 215г",
    fullDescription: `Асорті з мʼяса та сиру.
Підходить для святкової подачі.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/9b2235be-87a4-42b8-b499-60dbdf1f7c2a.png",
  },
  {
    id: 35,
    name: "Sierra Morena Іберіко",
    category: "Мʼясо",
    price: 299,
    description: "Хамон Іберіко 100г",
    fullDescription: `Хамон Іберіко преміум класу.
Має глибокий аромат та ніжну текстуру.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/a531b9c7-8b41-4901-8ba8-c91205097419.png",
  },
  {
    id: 36,
    name: "Mad Heads Easy Drip",
    category: "Кава",
    price: 179,
    description: "Кава в дріпах 100г",
    fullDescription: `Кава в дріп-пакетах.
Зручний формат для заварювання.
Має насичений аромат.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/76a41ff9-3041-4da7-ba46-54fb111c1e55.png",
  },
  {
    id: 37,
    name: "L'OR Espresso Caramel",
    category: "Кава",
    price: 159,
    description: "Капсули з карамеллю",
    fullDescription: `Капсули з ароматом карамелі.
Мʼякий смак з солодкими нотами.
Підходять для кавомашин.`,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3201936a-9fa7-4d43-89e4-816cd02fcf7a.png",
  },
  {
    id: 38,
    name: "Молоко 2,5%",
    category: "Молочні",
    price: 39,
    description: "Пастеризоване молоко",
    fullDescription: `Пастеризоване молоко 2,5% жирності.
Натуральний молочний продукт для щоденного вживання.
Підходить для кави, каш та випічки.`,
    image: "товар 38, фото очікується",
  },
  {
    id: 39,
    name: "Сир твердий Гауда",
    category: "Молочні",
    price: 129,
    description: "Твердий сир 45%",
    fullDescription: `Твердий сир 45% жирності.
Має ніжний вершковий смак.
Добре плавиться, підходить для сендвічів та пасти.`,
    image: "товар 39, фото очікується",
  },
  {
    id: 40,
    name: "Куряче філе",
    category: "Мʼясо",
    price: 179,
    description: "Охолоджене філе курки",
    fullDescription: `Охолоджене куряче філе.
Ніжне дієтичне мʼясо з високим вмістом білка.
Підходить для запікання та гриля.`,
    image: "товар 40, фото очікується",
  },
  {
    id: 41,
    name: "Лосось слабосолений",
    category: "Риба",
    price: 249,
    description: "Філе лосося 100г",
    fullDescription: `Філе лосося слабосолене.
Делікатний смак та ніжна текстура.
Ідеально для закусок та салатів.`,
    image: "товар 41, фото очікується",
  },
  {
    id: 42,
    name: "Хліб цільнозерновий",
    category: "Випічка",
    price: 35,
    description: "Цільнозерновий хліб",
    fullDescription: `Ароматний цільнозерновий хліб.
Містить харчові волокна.
Підходить для здорового харчування.`,
    image: "товар 42, фото очікується",
  },
  {
    id: 43,
    name: "Паста Penne",
    category: "Бакалія",
    price: 49,
    description: "Макарони з твердих сортів",
    fullDescription: `Паста з твердих сортів пшениці.
Зберігає форму після варіння.
Підходить для соусів та запіканок.`,
    image: "товар 43, фото очікується",
  },
  {
    id: 44,
    name: "Оливкова олія Extra Virgin",
    category: "Бакалія",
    price: 219,
    description: "Олія холодного віджиму",
    fullDescription: `Оливкова олія першого холодного віджиму.
Має насичений аромат та мʼякий смак.
Підходить для салатів та маринадів.`,
    image: "товар 44, фото очікується",
  },
  {
    id: 45,
    name: "Чорний шоколад 70%",
    category: "Солодощі",
    price: 59,
    description: "Темний шоколад",
    fullDescription: `Темний шоколад з вмістом какао 70%.
Насичений смак з легкою гірчинкою.
Підходить для десертів або кави.`,
    image: "товар 45, фото очікується",
  },
  {
    id: 46,
    name: "Мед акацієвий",
    category: "Бакалія",
    price: 189,
    description: "Натуральний мед",
    fullDescription: `Натуральний акацієвий мед.
Світлий, з мʼяким квітковим ароматом.
Підходить для чаю та випічки.`,
    image: "товар 46, фото очікується",
  },
  {
    id: 47,
    name: "Яйця курячі С1",
    category: "Молочні",
    price: 65,
    description: "Курячі яйця 10 шт",
    fullDescription: `Свіжі курячі яйця категорії С1.
Підходять для сніданків та випічки.
Мають стабільну якість та свіжість.`,
    image: "товар 47, фото очікується",
  },
  {
    id: 48,
    name: "Картопля молода",
    category: "Овочі",
    price: 29,
    description: "Молода картопля",
    fullDescription: `Сезонна молода картопля.
Має тонку шкірку та ніжний смак.
Ідеальна для запікання.`,
    image: "товар 48, фото очікується",
  },
  {
    id: 49,
    name: "Вода негазована 1,5л",
    category: "Напої",
    price: 19,
    description: "Питна негазована вода",
    fullDescription: `Чиста питна вода без газу.
Підходить для щоденного вживання.
Освіжає та підтримує водний баланс.`,
    image: "товар 49, фото очікується",
  },
  {
    id: 50,
    name: "Зелений чай байховий",
    category: "Напої",
    price: 79,
    description: "Листовий зелений чай",
    fullDescription: `Натуральний листовий зелений чай.
Має легкий травʼянистий аромат.
Підходить для щоденного чаювання.`,
    image: "товар 50, фото очікується",
  },
];

export default products;
