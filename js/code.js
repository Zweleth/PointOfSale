let cart = [];
localStorage.setItem('cart', JSON.stringify(cart));

let perfumes = [
    {
      id: 1,
      name: "Puro lino",
      gender: "Male",
      price: 799.99,
      image_link: "/assets/Perfumes/Perfume 1 (11).png",
      description:
        "Puro Lino is a simple exquisite Eau de Parfum inspired by the clean aroma of linen hung in sun",
    },
    {
      id: 2,
      name: "Caldo Gourmand",
      gender: "Female",
      price: 944.99,
      image_link: "/assets/Perfumes/Perfume 1 (2).png",
      description:
        "A magic touch of pure femininity that is worth biting, pampering and lighting up with passion",
    },
    {
      id: 3,
      name: "Caldo Encens",
      gender: "Female",
      price: 1044.49,
      image_link: "/assets/Perfumes/Perfume 1 (3).png",
      description:
        "It is a light clear Eau de Parfum with refreshing crisp nuances of Frankincense and a balsamic note of Pine resin",
    },
    {
      id: 4,
      name: "Caldo Fruttato",
      gender: "Female",
      price: 699.99,
      image_link: "/assets/Perfumes/Perfume 1 (4).png",
      description:
        "A unique sensual fusion of two different olfactory accords",
    },
    {
      id: 5,
      name: "Caldo Legnoso",
      gender: "Female",
      price: 799.99,
      image_link: "/assets/Perfumes/Perfume 1 (5).png",
      description:
        "A strong powerful Eau de Parfum that evokes the intense colours of the sunset along the Indian coasts of Kerala",
    },
    {
      id: 6,
      name: "Caldo Orientale",
      gender: "Female",
      price: 899.99,
      image_link: "/assets/Perfumes/Perfume 1 (6).png",
      description:
        "An exotic bouquet that will get you lost in the fantasies of young Shahrazād",
    },
    {
      id: 7,
      name: "Musc Pure",
      gender: "Male",
      price: 1199.99,
      image_link: "/assets/Perfumes/Perfume 1 (7).png",
      description:
        "Musc Pure is an incredibly fresh bouquet of ferny and woody aromas",
    },
    {
      id: 8,
      name: "Osmarine",
      gender: "Male",
      price: 729.49,
      image_link: "/assets/Perfumes/Perfume 1 (8).png",
      description:
        "Osmarine embodies all the intensity of the legendary Chinese Osmanthus flower combined with the freshness of an intense marine note of seaweeds and rocks",
    },
    {
      id: 9,
      name: "Oud Gourmand",
      gender: "Female",
      price: 849.49,
      image_link: "/assets/Perfumes/Perfume 1 (9).png",
      description:
        "Oud Gourmand is the fragrance of the opposites. It is passionate and avid, cunning and direct",
    },
    {
      id: 10,
      name: "Puro Fico",
      gender: "Male",
      price: 899.49,
      image_link: "/assets/Perfumes/Perfume 1 (10).png",
      description:
        "Puro Fico smells like summer, a mild breeze of fresh persistent notes that gently touch your skin",
    },
    {
      id: 11,
      name: "Puro Neroli",
      gender: "Male",
      price: 1099.99,
      image_link: "/assets/Perfumes/Perfume 1 (1).png",
      description:
        "Puro Neroli smells like summer intense, fresh, sweet and bitter",
    },
  ];

localStorage.setItem('data', JSON.stringify(perfumes));

// ===================================================================================================================================

