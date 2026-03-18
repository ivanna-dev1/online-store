const products = [
  // ===== ОВОЧІ ТА ФРУКТИ =====
  {
    id: 1,
    name: "Червоне яблуко",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 32,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image: "https://delikates.ua/images/product/yabluko-chervone.jpg",
    description: "Свіже соковите яблуко",
    fullDescription: `Стигле червоне яблуко з хрусткою соковитою м’якоттю та природною солодкістю.

Має приємний фруктовий аромат і освіжаючий смак. Підходить для перекусу, фруктових салатів, випічки або приготування десертів.`,
  },
  {
    id: 2,
    name: "Банан",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 72,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
    description: "Стиглий солодкий банан",
    fullDescription: `Стиглий банан із ніжною кремовою текстурою та природною солодкістю.

Є природним джерелом калію та швидкої енергії. Ідеально підходить для сніданків, смузі, десертів або швидкого перекусу.`,
  },
  {
    id: 3,
    name: "Огірок ґрунтовий",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 115,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
    description: "Свіжий ґрунтовий огірок",
    fullDescription: `Хрусткий ґрунтовий огірок із соковитою м’якоттю та свіжим овочевим ароматом.

Має легкий освіжаючий смак. Підходить для салатів, холодних закусок та приготування літніх страв.`,
  },
  {
    id: 4,
    name: "Помідор",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 105,
    onSale: true,
    discount: 40,
    isNew: true,
    inStock: true,
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
    description: "Соковитий стиглий помідор",
    fullDescription: `Стиглий помідор із м’ясистою соковитою м’якоттю та насиченим ароматом.

Має приємний солодко-кислий смак. Чудово підходить для салатів, соусів, пасти або гарячих страв.`,
  },
  {
    id: 5,
    name: "Апельсин",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 85,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://fruit-time.ua/images/cache/products/b4/apelsin-ispaniya-imp-500x500.jpeg",
    description: "Соковитий апельсин",
    fullDescription: `Стиглий апельсин із яскравим цитрусовим ароматом та соковитою м’якоттю.

Має освіжаючий кисло-солодкий смак і природний вміст вітаміну C. Підходить для соків, десертів або перекусу.`,
  },
  {
    id: 6,
    name: "Лимон",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 68,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg3mho6cMKE0n1zgPFjwVA_sC_pwckcHvIeQ&s",
    description: "Ароматний свіжий лимон",
    fullDescription: `Соковитий лимон із виразним цитрусовим ароматом та освіжаючою кислинкою.

Ідеально підходить для чаю, лимонадів, соусів, маринадів та приготування десертів.`,
  },
  {
    id: 7,
    name: "Огірок довгий",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 125,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
    description: "Довгий салатний огірок",
    fullDescription: `Довгий салатний огірок із ніжною шкіркою та соковитою м’якоттю.

Має легкий свіжий смак та приємну хрусткість. Підходить для салатів, сендвічів і холодних закусок.`,
  },
  {
    id: 8,
    name: "Органічний банан",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 95,
    onSale: true,
    discount: 15,
    isNew: false,
    inStock: true,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
    description: "Органічний стиглий банан",
    fullDescription: `Органічні банани, вирощені без використання синтетичних добрив.

Мають ніжну кремовою текстуру та природну солодкість. Підходять для здорових перекусів, смузі та десертів.`,
  },
  {
    id: 9,
    name: "Огірок парниковий",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 135,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image: "https://soncesad.com/assets/images/products/1945/.jpeg",
    description: "Ніжний тепличний огірок",
    fullDescription: `Тепличний огірок із тонкою шкіркою та соковитою м’якоттю.

Має делікатний смак і приємний аромат. Ідеально підходить для салатів, канапок і холодних закусок.`,
  },
  {
    id: 10,
    name: "Міні-банан",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 110,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
    description: "Солодкий міні банан",
    fullDescription: `Міні банани з насиченим фруктовим ароматом та ніжною текстурою.

Зручний формат для перекусу. Підходять для десертів, фруктових салатів або дитячого меню.`,
  },
  {
    id: 11,
    name: "Помідори чері",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 85,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image: "https://agrolife.ua/media/blog/post/pomidor_1_1__1.jpeg",
    description: "Солодкі томати чері",
    fullDescription: `Стиглі томати чері з яскравим ароматом та соковитою м’якоттю.

Мають ніжний солодкуватий смак. Ідеально підходять для салатів, закусок та прикрашання страв.`,
  },
  {
    id: 12,
    name: "Червоний банан",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 145,
    onSale: true,
    discount: 30,
    isNew: false,
    inStock: true,
    image:
      "https://static2.tavriav.ua/media/images/8/cd/d0/53/8cdd0533ed2b_10528_main.webp",
    description: "Стиглий червоний банан",
    fullDescription: `Екзотичний червоний банан із ніжною кремовою текстурою.

Має більш насичений солодкий смак із легкими ягідними нотами. Підходить для десертів та смузі.`,
  },
  {
    id: 13,
    name: "Полуниця",
    group: "Овочі та фрукти",
    category: "Ягоди",
    price: 250,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: false,
    image:
      "https://happypen-photos.s3.eu-north-1.amazonaws.com/44167/klubnika-1kg-ukraina0",
    description: "Свіжа солодка полуниця",
    fullDescription: `Ароматна стигла полуниця з соковитою м’якоттю та природною солодкістю.

Чудово підходить для десертів, смузі, випічки або фруктових салатів.`,
  },
  {
    id: 14,
    name: "Чорниця",
    group: "Овочі та фрукти",
    category: "Ягоди",
    price: 180,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://berry.in.ua/wp-content/uploads/2024/06/FlavourArt-Bilberry.jpg",
    description: "Свіжа лісова чорниця",
    fullDescription: `Чорниця з насиченим ягідним смаком та глибоким кольором.

Містить природні антиоксиданти. Підходить для десертів, каш, смузі та випічки.`,
  },
  {
    id: 15,
    name: "Броколі",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 140,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image: "https://biolika.ua/c/531-category_default/brokkoli.jpg",
    description: "Свіжа зелена броколі",
    fullDescription: `Броколі зі щільними суцвіттями та ніжним овочевим смаком.

Підходить для варіння, тушкування, запікання або приготування гарнірів.`,
  },
  {
    id: 16,
    name: "Авокадо",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 75,
    onSale: true,
    discount: 20,
    isNew: false,
    inStock: true,
    image: "https://crazybox.com.ua/image/catalog/exotika_new/awokado_hass.JPG",
    description: "Стиглий авокадо Хасс",
    fullDescription: `Авокадо сорту Хасс із кремовою текстурою та ніжним горіховим смаком.

Чудово підходить для тостів, салатів, соусів та приготування гуакамоле.`,
  },
  {
    id: 17,
    name: "Морква",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 28,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://src.zakaz.atbmarket.com/cache/photos/44/catalog_product_gal_mob_44.png",
    description: "Свіжа хрустка морква",
    fullDescription: `Морква з соковитою м’якоттю та природною солодкістю.

Підходить для супів, салатів, соків або приготування гарнірів.`,
  },
  {
    id: 18,
    name: "Ківі",
    group: "Овочі та фрукти",
    category: "Фрукти",
    price: 95,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://goodfruits.com.ua/wp-content/uploads/2024/02/kyvy-ob%D1%8Bchnoe-scaled-1.jpg",
    description: "Стиглий соковитий ківі",
    fullDescription: `Ківі з освіжаючим кисло-солодким смаком та ароматною м’якоттю.

Містить природний вітамін C. Підходить для десертів, смузі та фруктових салатів.`,
  },
  {
    id: 19,
    name: "Картопля молода",
    group: "Овочі та фрукти",
    category: "Овочі",
    price: 45,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Молода картопля",
    fullDescription: `Сезонна молода картопля з ніжною шкіркою та делікатним смаком.

Ідеально підходить для варіння, запікання або приготування гарнірів.`,
  },

  // ===== МОЛОЧНІ ПРОДУКТИ, ЯЙЦЯ =====
  {
    id: 20,
    name: "Йогурт Lekker 1кг",
    group: "Молочні продукти, яйця",
    category: "Йогурти",
    price: 165,
    onSale: true,
    discount: 30,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/8b8fe85a-e0a1-4b0e-98ff-09acaefe5e9d.png",
    description: "Натуральний грецький йогурт",
    fullDescription: `Густий грецький йогурт із ніжною кремовою текстурою.

Підходить для сніданків, десертів, соусів або поєднання з фруктами.`,
  },
  {
    id: 21,
    name: "Actimel лісові ягоди",
    group: "Молочні продукти, яйця",
    category: "Йогурти",
    price: 28,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/80b18c4c-5780-426e-9cd4-c5e360c0a968.png",
    description: "Кисломолочний напій з ягодами",
    fullDescription: `Кисломолочний напій із приємним смаком лісових ягід.

Має ніжну текстуру та освіжаючий смак. Підходить для щоденного вживання.`,
  },
  {
    id: 22,
    name: "Йогурт Fantasia 100г",
    group: "Молочні продукти, яйця",
    category: "Йогурти",
    price: 42,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3cf71fa8-e0e1-469d-8188-846823ffbc1d.png",
    description: "Йогурт з шоколадними кульками",
    fullDescription: `Йогурт із ніжною текстурою та хрусткими шоколадними кульками.

Поєднання молочного смаку та солодкого шоколаду робить його чудовим десертом.`,
  },
  {
    id: 23,
    name: "Valio PROfeel шоколад",
    group: "Молочні продукти, яйця",
    category: "Йогурти",
    price: 75,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/f11fe26c-7b9b-4348-90fb-828571c59f1b.png",
    description: "Протеїновий шоколадний пудинг",
    fullDescription: `Ніжний молочний десерт із шоколадним смаком та високим вмістом білка.

Підходить для перекусу після тренування або як поживний десерт.`,
  },
  {
    id: 24,
    name: "Молоко 2,5%",
    group: "Молочні продукти, яйця",
    category: "Молоко",
    price: 48,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Пастеризоване молоко 2,5%",
    fullDescription: `Натуральне коров’яче молоко середньої жирності.

Підходить для кави, каш, випічки та щоденного вживання.`,
  },
  {
    id: 25,
    name: "Сир твердий Гауда",
    group: "Молочні продукти, яйця",
    category: "Сири",
    price: 145,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Твердий сир Гауда",
    fullDescription: `Твердий сир із ніжним вершковим смаком та еластичною текстурою.

Добре плавиться. Підходить для сендвічів, пасти та гарячих страв.`,
  },
  {
    id: 26,
    name: "Яйця курячі С1",
    group: "Молочні продукти, яйця",
    category: "Яйця",
    price: 72,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: false,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Курячі яйця С1",
    fullDescription: `Свіжі курячі яйця категорії С1.

Підходять для сніданків, випічки та приготування різноманітних страв.`,
  },
  {
    id: 27,
    name: "Кефір 1% 900г",
    group: "Молочні продукти, яйця",
    category: "Кисломолочні продукти",
    price: 42,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Класичний кефір 1%",
    fullDescription: `Кефір із ніжним кисломолочним смаком та легкою текстурою.

Підходить для щоденного раціону або приготування смузі.`,
  },

  // ===== М'ЯСО, РИБА, ДЕЛІКАТЕСИ =====
  {
    id: 28,
    name: "Hamon Argal Serrano",
    group: "М'ясо, риба, делікатеси",
    category: "М'ясо",
    price: 245,
    onSale: true,
    discount: 15,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/e784f994-03df-4175-ba63-6dc779324619.png",
    description: "Іспанський хамон Serrano",
    fullDescription: `Традиційний іспанський хамон із витриманого свинячого м’яса.

Має насичений аромат і делікатний смак. Підходить для м’ясних тарілок та закусок.`,
  },
  {
    id: 29,
    name: "Imperia Appetita асорті",
    group: "М'ясо, риба, делікатеси",
    category: "М'ясо",
    price: 285,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://img.auchan.ua/rx/q_90,ofmt_webp,w_1200,h_572.4/auchan.ua/media/catalog/product/3/9/3914a16e05d28c0fd1f17a56e2dd7e7d500faca44e5d939cbbf5a911112d16a3.jpeg",
    description: "М'ясо-сирне асорті",
    fullDescription: `Набір із різних видів м’яса та сиру.

Чудово підходить для святкової подачі або закусок.`,
  },
  {
    id: 30,
    name: "Sierra Morena Іберіко",
    group: "М'ясо, риба, делікатеси",
    category: "М'ясо",
    price: 345,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/a531b9c7-8b41-4901-8ba8-c91205097419.png",
    description: "Хамон Іберіко",
    fullDescription: `Преміальний хамон із витриманого м’яса.

Має глибокий аромат та ніжну текстуру. Ідеально підходить для гастрономічних закусок.`,
  },
  {
    id: 31,
    name: "Куряче філе",
    group: "М'ясо, риба, делікатеси",
    category: "М'ясо",
    price: 195,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Охолоджене куряче філе",
    fullDescription: `Ніжне куряче філе з високим вмістом білка.

Підходить для запікання, гриля або приготування дієтичних страв.`,
  },
  {
    id: 32,
    name: "Лосось слабосолений",
    group: "М'ясо, риба, делікатеси",
    category: "Риба",
    price: 215,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Слабосолений лосось",
    fullDescription: `Філе лосося зі слабким солінням.

Має ніжну текстуру та делікатний смак. Підходить для салатів, закусок або сендвічів.`,
  },

  // ===== БАКАЛІЯ =====
  {
    id: 33,
    name: "Фісташки Wonderful 250г",
    group: "Бакалія",
    category: "Горіхи",
    price: 325,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1d2cf223-eb7e-4a67-8cab-2e1180ea023e.png",
    description: "Смажені солоні фісташки",
    fullDescription: `Фісташки зі злегка солоним смаком та хрусткою текстурою.

Ідеальний перекус або додаток до напоїв.`,
  },
  {
    id: 34,
    name: "Мигдаль Премія чилі",
    group: "Бакалія",
    category: "Горіхи",
    price: 85,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/31ecda7f-85f4-426e-b267-fc093b22100a.png",
    description: "Мигдаль з чилі",
    fullDescription: `Хрусткий мигдаль із пікантним смаком копченого чилі. Підходить для перекусу або як закуска до напоїв.`,
  },
  {
    id: 35,
    name: "Паста Penne",
    group: "Бакалія",
    category: "Бакалія",
    price: 58,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Паста Penne",
    fullDescription: `Макарони з твердих сортів пшениці.

Зберігають форму після варіння. Підходять для соусів та запіканок.`,
  },
  {
    id: 36,
    name: "Оливкова олія Extra Virgin",
    group: "Бакалія",
    category: "Бакалія",
    price: 295,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Оливкова олія Extra Virgin",
    fullDescription: `Оливкова олія першого холодного віджиму.

Має насичений аромат і м’який смак. Підходить для салатів, пасти та маринадів.`,
  },
  {
    id: 37,
    name: "Мед акацієвий",
    group: "Бакалія",
    category: "Бакалія",
    price: 225,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Натуральний акацієвий мед",
    fullDescription: `Світлий мед із ніжним квітковим ароматом.

Підходить для чаю, десертів або випічки.`,
  },
  {
    id: 38,
    name: "Майонез Провансаль 200г",
    group: "Бакалія",
    category: "Соуси, спеції",
    price: 52,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Майонез Провансаль",
    fullDescription: `Класичний майонез із густою текстурою та ніжним смаком.

Підходить для салатів, закусок і соусів.`,
  },
  {
    id: 39,
    name: "Cappy Exotic 1л",
    group: "Напої",
    category: "Соки",
    price: 78,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: false,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/62005632-fd3b-4d6c-8110-34199fbd8a5a.png",
    description: "Фруктовий нектар",
    fullDescription: `Нектар із суміші екзотичних фруктів.

Має солодкий освіжаючий смак і яскравий аромат.`,
  },
  {
    id: 40,
    name: "Pepsi Cola 1,75л",
    group: "Напої",
    category: "Газовані напої",
    price: 54,
    onSale: true,
    discount: 20,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/461594b7-13ae-46ee-8c02-fa2d31bbaa37.png",
    description: "Газований напій Cola",
    fullDescription: `Газований напій із карамельним смаком.

Освіжає та чудово підходить для вечірок або перекусу.`,
  },
  {
    id: 41,
    name: "Schweppes Pink Tonic",
    group: "Напої",
    category: "Газовані напої",
    price: 52,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/9bc3b6bd-8fb2-4162-981e-37b5c96c4101.png",
    description: "Ягідний тонік",
    fullDescription: `Сильногазований тонік із легкими ягідними нотами.

Освіжаючий смак із легкою гірчинкою. Підходить для коктейлів.`,
  },
  {
    id: 42,
    name: "Mad Heads Easy Drip",
    group: "Напої",
    category: "Кава",
    price: 215,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/76a41ff9-3041-4da7-ba46-54fb111c1e55.png",
    description: "Кава в дріп-пакетах",
    fullDescription: `Мелена кава в зручних дріп-пакетах для швидкого заварювання.

Має насичений аромат та збалансований смак.`,
  },
  {
    id: 43,
    name: "L'OR Espresso Caramel",
    group: "Напої",
    category: "Кава",
    price: 185,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/3201936a-9fa7-4d43-89e4-816cd02fcf7a.png",
    description: "Карамельні кавові капсули",
    fullDescription: `Капсули для кавомашин із ніжним ароматом карамелі.

Мають м’який смак із солодкими нотами.`,
  },
  {
    id: 44,
    name: "Вода негазована 1,5л",
    group: "Напої",
    category: "Вода",
    price: 24,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Питна негазована вода",
    fullDescription: `Чиста негазована питна вода.

Підходить для щоденного вживання та підтримання водного балансу.`,
  },
  {
    id: 45,
    name: "Зелений чай байховий",
    group: "Напої",
    category: "Чай",
    price: 115,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Листовий зелений чай",
    fullDescription: `Натуральний зелений чай із легким трав’янистим ароматом.

Підходить для щоденного чаювання.`,
  },
  {
    id: 46,
    name: "Віскі Hankey Bannister",
    group: "Алкоголь",
    category: "Алкоголь",
    price: 780,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1000x1000/webp/eb6420ad-a5e3-4ce5-8b90-1886b0bfc120.png",
    description: "Шотландський віскі",
    fullDescription: `Купажований шотландський віскі з м’яким смаком.

Має нотки карамелі та дуба.`,
  },
  {
    id: 47,
    name: "Bottega Prosecco Extra Dry",
    group: "Алкоголь",
    category: "Алкоголь",
    price: 645,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/ab017af7-780e-4f90-9dcb-d25fe2c8861f.png",
    description: "Ігристе вино Extra Dry",
    fullDescription: `Ігристе вино зі свіжим фруктовим ароматом.

Підходить для святкових подій та аперитивів.`,
  },
  {
    id: 48,
    name: "Bottega Gold Prosecco Brut",
    group: "Алкоголь",
    category: "Алкоголь",
    price: 920,
    onSale: true,
    discount: 25,
    isNew: true,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/5c908603-c030-426f-8716-764ea16e558d.png",
    description: "Ігристе вино Brut",
    fullDescription: `Сухе ігристе вино з легкими цитрусовими нотами.

Добре поєднується із закусками.`,
  },
  {
    id: 49,
    name: "Пиво світле 0,5л",
    group: "Алкоголь",
    category: "Пиво",
    price: 48,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Світле фільтроване пиво",
    fullDescription: `Світле пиво з легкою гірчинкою та освіжаючим смаком.`,
  },

  // ===== СОЛОДОЩІ ТА ДЕСЕРТИ =====
  {
    id: 50,
    name: "Кекс Голландський",
    group: "Солодощі та десерти",
    category: "Десерти",
    price: 115,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/37d90946-409b-4de6-b56f-8de27a18dacd.png",
    description: "Класичний кекс",
    fullDescription: `Кекс із ніжною текстурою та солодким ароматом.

Підходить до чаю або кави.`,
  },
  {
    id: 51,
    name: "Сирник Львівський",
    group: "Солодощі та десерти",
    category: "Десерти",
    price: 75,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://images.silpo.ua/v2/products/1600x1600/webp/1ee5cefb-4326-4272-ae3a-39228421e61a.png",
    description: "Львівський сирник",
    fullDescription: `Традиційний сирний десерт із шоколадною глазур’ю.`,
  },
  {
    id: 52,
    name: "Чорний шоколад 70%",
    group: "Солодощі та десерти",
    category: "Десерти",
    price: 68,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: false,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Темний шоколад 70%",
    fullDescription: `Шоколад із високим вмістом какао та насиченим смаком.`,
  },
  {
    id: 53,
    name: "Цукерки шоколадні 200г",
    group: "Солодощі та десерти",
    category: "Солодощі",
    price: 125,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Асорті шоколадних цукерок",
    fullDescription: `Набір шоколадних цукерок із різними начинками.`,
  },

  // ===== ХЛІБ ТА ВИПІЧКА =====
  {
    id: 54,
    name: "Хліб цільнозерновий",
    group: "Хліб та випічка",
    category: "Випічка",
    price: 42,
    onSale: false,
    discount: 0,
    isNew: true,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Цільнозерновий хліб",
    fullDescription: `Ароматний хліб із цільнозернового борошна.`,
  },
  {
    id: 55,
    name: "Хліб білий нарізний",
    group: "Хліб та випічка",
    category: "Хліб",
    price: 32,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Білий пшеничний хліб",
    fullDescription: `М’який пшеничний хліб із ніжною текстурою.`,
  },
  {
    id: 56,
    name: "Булочка з маком",
    group: "Хліб та випічка",
    category: "Булочки",
    price: 22,
    onSale: false,
    discount: 0,
    isNew: false,
    inStock: true,
    image:
      "https://standardoil.com.ua/image/cache/catalog/smazki-folder/0/uploads-n6-73a54bb4852011ee8a1d00155d006309_7a4219a8852011ee8a1d00155d006309-1000x1000.png",
    description: "Булочка з маком",
    fullDescription: `Здобна булочка з маком, м’яка та ароматна.`,
  },
];

export default products;
