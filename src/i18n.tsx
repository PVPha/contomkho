import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "vi";

const STORAGE_KEY = "tom-kho-language";

export const translations = {
  en: {
    common: {
      brand: "Tôm Khô Năm Thuý",
      languageLabel: "Language",
      switchLanguage: "Switch language",
      currentLanguage: "EN",
      day: "Day",
    },
    nav: {
      story: "Our Story",
      process: "The Process",
      shop: "Shop",
      recipes: "Recipes",
      cart: "Shopping bag",
      account: "Account",
      menu: "Menu",
      closeMenu: "Close menu",
    },
    footer: {
      tagline:
        "Crafted with tradition, curated for the modern palate. Bringing the soul of Vietnamese coastal cuisine to global kitchens.",
      experience: "EXPERIENCE",
      links: [
        "Sustainability",
        "Shipping & Returns",
        "Wholesale",
        "Contact Us",
      ],
      follow: "FOLLOW US",
      newsletter: "NEWSLETTER",
      email: "Email Address",
      subscribe: "SUBSCRIBE",
      copyright:
        "© 2026 Tôm Khô Năm Thuý. Crafted with tradition, curated for the modern palate.",
    },
    home: {
      heroAlt: "Premium sun-dried shrimp",
      heroEyebrow: "ESTABLISHED TRADITION",
      heroTitle: "The Essence of the Fields,",
      heroTitleAccent: "Crafted by Tradition",
      heroText:
        "Sourced from the mineral-rich waters of Bạc Liêu, our shrimp are sun-dried using artisanal methods passed down through seven generations.",
      heroCta: "EXPLORE THE COLLECTION",
      journeyEyebrow: "THE JOURNEY",
      journeyTitle: "From Field to Kitchen",
      journeyLead:
        "The secret to our deep umami flavor lies in the rhythm of nature. We harvest only at the peak of the lunar cycle, when the shrimp are at their most succulent.",
      journeyBody:
        "Unlike industrial drying, our process takes three days under the intense coastal sun. This slow evaporation concentrates the natural sweetness and creates that signature translucent amber hue that defines genuine Bạc Liêu heritage.",
      stats: [
        { value: "100%", label: "SUN DRIED" },
        { value: "0%", label: "PRESERVATIVES" },
        { value: "20%", label: "HUMIDITY" },
      ],
      storyAlt: "Artisanal drying process",
      pullQuote:
        "The sun is our most patient craftsman, drawing out flavors that time and fire cannot.",
      signatureEyebrow: "THE SIGNATURE SELECTION",
      signatureTitle: "Bạc Liêu Sun-Dried",
      productAlt: "Tôm Khô Năm Thuý",
      limitedReserve: "LIMITED RESERVE",
      tags: ["SUN-DRIED", "EXTRA LARGE GRADE", "NATURALLY SWEET"],
      productTitle: "Tôm Khô Năm Thuý",
      productTitleAccent: "Net Weight: 500g",
      productDesc:
        "Our premier grade, hand-selected for size and color uniformity. Each shrimp is peeled by hand to preserve the delicate structure of the meat.",
      orderNow: "ORDER NOW",
      shipping: "Complimentary shipping on orders over 300k",
      trustTitle: "Purity & Trust",
      trustItems: [
        {
          icon: "verified",
          title: "Certified Provenance",
          desc: "Every jar comes with a QR code tracing back to the specific coastal drying station.",
        },
        {
          icon: "eco",
          title: "Ethical Harvesting",
          desc: "We partner with local artisanal fishers who use sustainable, low-impact netting methods.",
        },
      ],
      testimonials: [
        {
          name: "ELIZA VAN DER BELT",
          role: "MICHELIN STAR PASTRY CHEF",
          quote:
            "I've tried many brands, but the texture of Tôm Khô Năm Thuý is incomparable. It's like a concentrated bite of the ocean.",
        },
        {
          name: "DAVID NGUYEN",
          role: "HOME CONNOISSEUR",
          quote:
            "A true gourmet discovery. The amber color and clarity are signs of perfect sun-drying.",
        },
      ],
    },
    process: {
      heroAlt: "Coastal Bạc Liêu boats",
      heroEyebrow: "A CULINARY ODYSSEY",
      heroTitle: "From Field to Sunlight",
      heroText:
        "Discover the three-day journey of transformation where the freshest Bạc Liêu shrimp meets artisanal craftsmanship and the Vietnamese sun.",
      sourceEyebrow: "01. THE SOURCE",
      sourceTitle: "Intensive farming zone in Bạc Liêu",
      sourceText:
        "Located at the southern tip of Vietnam, Bac Lieu is one of the country's six key shrimp-farming provinces. Here, shrimp grow in a nutrient-rich natural environment, absorbing essential minerals that create a distinctive sweetness rarely found elsewhere.",
      sourceLocation:
        "Hồng Dân District, Cà Mau Province (formerly old Bạc Liêu)",
      mangroveAlt: "Mangrove forests",
      localityMap: "LOCALITY MAP",
      localityName: "Bạc Liêu Wind Field",
      selectionEyebrow: "02. SELECTION",
      selectionTitle: "The Artisanal Selection",
      selectionSteps: [
        {
          imgKey: "PROCESS_HANDS",
          title: "Hand-Sorted Quality",
          desc: "Each catch is inspected by eye. Only the most robust shrimp make the cut.",
        },
        {
          imgKey: "PROCESS_FRESH",
          title: "Immediate Freshness",
          desc: "Timing is everything. Sorting begins within two hours of harvest.",
        },
        {
          imgKey: "PROCESS_TRAY",
          title: "Tradition of Precision",
          desc: "Our masters rely on generational knowledge to identify shrimp at their peak.",
        },
      ],
      cureEyebrow: "03. THE CURE",
      cureTitle: "The 72-Hour Sun Cure",
      cureText:
        "Unlike industrial heat-drying, our solar evaporation process is patient and transformative. The sun coaxes the moisture out slowly, concentrating the natural sugars.",
      cureDays: [
        {
          day: "1",
          title: "Setting the Base",
          desc: "Shrimp are laid on elevated bamboo racks to capture the full midday sun.",
        },
        {
          day: "2",
          title: "The Turning",
          desc: "Each shrimp is manually flipped every hour to ensure even dehydration.",
        },
        {
          day: "3",
          title: "Final Fixation",
          desc: "The signature terracotta color intensifies as moisture reaches 15%.",
        },
      ],
      wideAlt: "Wide drying beds",
      macroAlt: "Macro texture",
      workerAlt: "Worker at beds",
      peelingAlt: "Hand peeling",
      badge: "PRESERVATIVE FREE TRADITION",
      craftEyebrow: "04. CRAFTSMANSHIP",
      craftTitle: "Hand-Peeled & Packed",
      craftQuote:
        "The machine can strip a shell, but it cannot feel the soul of the shrimp.",
      craftText:
        "Once dried, the shells become brittle. Our artisans use a light, rhythmic tapping technique to remove the skins without bruising the meat. This manual labor of love ensures every piece is whole, vibrant, and pure.",
      craftBullets: [
        "Zero-mechanical pressure peeling",
        "Glass jar sealing for ultimate freshness",
        "Batch-numbered heritage guarantee",
      ],
      shopCta: "SHOP THE HERITAGE COLLECTION",
      finalQuote:
        "A taste that spans generations, captured by the sun and preserved by hand.",
      finalAttribution: "TRUNG NGUYEN, MASTER CURE ARTISAN",
    },
    recipes: {
      badge: "Culinary Arts",
      title: "From Tradition to Your Table",
      intro:
        "Discover the versatile soul of premium sun-dried shrimp. From intense umami foundations to delicate coastal salads, these recipes celebrate the heritage of Bạc Liêu.",
      signature: "Signature Recipe",
      items: [
        {
          id: "heritage-xo-sauce",
          title: "Heritage XO Sauce",
          subtitle: "The ultimate coastal umami condiment, slow-cooked with premium Bạc Liêu sun-dried shrimp, scallops, and aromatics.",
          desc: "A decadent, savory condiment that serves as the ultimate umami bomb for noodles and stir-fries.",
          time: "90 MINS",
          prepTime: "30 MINS",
          cookTime: "60 MINS",
          servings: "2 Jars (~500g)",
          level: "INTERMEDIATE",
          imgKey: "RECIPE_XO",
          signature: true,
          large: true,
          ingredients: [
            "150g Tôm Khô Năm Thuý (soaked in warm water for 20 mins)",
            "100g Dried scallops (conpoy), soaked",
            "100g Jinhua ham or quality cured ham, finely diced",
            "6 cloves garlic, minced",
            "4 shallots, finely diced",
            "3 fresh red chillies & 2 tbsp dried chilli flakes",
            "250ml vegetable oil or peanut oil",
            "2 tbsp Shaoxing rice wine",
            "2 tbsp light soy sauce",
            "1 tbsp oyster sauce",
            "1 tbsp brown sugar"
          ],
          instructions: [
            {
              step: 1,
              title: "Prepare Dried Seafood",
              text: "Soak Tôm Khô Năm Thuý in warm water for 20 minutes until slightly softened. Drain well (reserve soaking liquid for soups) and pulse in a food processor until finely shredded. Repeat for dried scallops."
            },
            {
              step: 2,
              title: "Crisp Aromatics",
              text: "Heat 100ml oil in a heavy wok over medium-low heat. Fry minced garlic and shallots until golden brown and fragrant (5-7 minutes). Remove with a slotted spoon and set aside."
            },
            {
              step: 3,
              title: "Slow Fry Seafood & Ham",
              text: "In the same infused oil with remaining oil added, simmer shredded sun-dried shrimp, scallops, and diced ham over low heat for 25-30 minutes, stirring constantly until crisp and deep golden brown."
            },
            {
              step: 4,
              title: "Season & Infuse",
              text: "Add chilli flakes, fresh chillies, fried garlic, shallots, Shaoxing wine, soy sauce, oyster sauce, and sugar. Simmer together for another 10 minutes until oil turns deep translucent amber red."
            },
            {
              step: 5,
              title: "Cool & Bottle",
              text: "Allow to cool completely before transferring to sterilized glass jars. Store submerged in oil in the refrigerator for up to 3 months."
            }
          ],
          chefNote: "Slow frying on low heat is crucial; never rush with high heat or the dried shrimp will turn bitter instead of crisp."
        },
        {
          id: "bac-lieu-shrimp-salad",
          title: "Heritage Shrimp Salad",
          subtitle: "Crisp green papaya, mango, and herbs tossed with sun-cured shrimp in a vibrant calamansi-fish sauce dressing.",
          desc: "Crisp vegetables tossed with rehydrated heritage shrimp and a zesty calamansi dressing.",
          time: "20 MINS",
          prepTime: "15 MINS",
          cookTime: "5 MINS",
          servings: "4 Servings",
          level: "EASY",
          imgKey: "RECIPE_SALAD",
          ingredients: [
            "100g Tôm Khô Năm Thuý",
            "1 small green papaya or green mango, julienned",
            "1 seedless cucumber, julienned",
            "1 red bell pepper, thinly sliced",
            "1/2 cup fresh mixed herbs (Vietnamese mint, Thai basil, mint)",
            "1/4 cup crushed roasted peanuts",
            "1 tbsp toasted sesame seeds",
            "Dressing: 3 tbsp calamansi juice, 2 tbsp fish sauce, 2 tbsp sugar, 1 minced garlic, 1 minced chilli"
          ],
          instructions: [
            {
              step: 1,
              title: "Rehydrate & Toast Shrimp",
              text: "Soak Tôm Khô Năm Thuý in warm water for 15 minutes. Drain and pat dry. Heat a dry skillet over medium heat and lightly toast the shrimp for 2-3 minutes until fragrant and crisp on the surface."
            },
            {
              step: 2,
              title: "Crisp Vegetables",
              text: "Julienne green papaya (or mango) and cucumber. Soak in ice water for 5 minutes for maximum crunch, then drain and spin dry."
            },
            {
              step: 3,
              title: "Whisk Dressing",
              text: "Combine calamansi juice, fish sauce, sugar, minced garlic, and chilli in a bowl. Whisk until sugar dissolves completely."
            },
            {
              step: 4,
              title: "Toss & Serve",
              text: "In a salad bowl, combine vegetables, herbs, and toasted Tôm Khô. Pour dressing right before serving, toss gently, and garnish with roasted peanuts and sesame seeds."
            }
          ],
          chefNote: "Lightly toasting the rehydrated shrimp revives their sun-cured essential oils, releasing a rich coastal aroma."
        },
        {
          id: "classic-claypot-braise",
          title: "Classic Claypot Braise",
          subtitle: "Rich caramelized fish sauce reduction with crispy pork belly, whole sun-dried shrimp, and cracked black pepper.",
          desc: "Slow-cooked pork belly and dried shrimp in a caramelized fish sauce reduction.",
          time: "45 MINS",
          prepTime: "15 MINS",
          cookTime: "30 MINS",
          servings: "3-4 Servings",
          level: "ADVANCED",
          imgKey: "RECIPE_CLAYPOT",
          ingredients: [
            "120g Tôm Khô Năm Thuý (soaked in warm water for 10 mins)",
            "150g Pork belly, cut into small cubes",
            "3 tbsp premium fish sauce",
            "2.5 tbsp coconut nectar or caramel syrup",
            "2 shallots & 3 garlic cloves, minced",
            "2 whole fresh chillies & 1 tsp coarse cracked black pepper",
            "2 green onions, chopped",
            "Steamed coastal vegetables (okra, cabbage, bitter melon) for serving"
          ],
          instructions: [
            {
              step: 1,
              title: "Render Pork Fat",
              text: "Heat a claypot over medium heat. Fry pork belly cubes until fat renders and pork lardons become crispy and golden brown. Reserve half for garnish."
            },
            {
              step: 2,
              title: "Sauté Aromatics & Shrimp",
              text: "In the rendered fat, sauté minced shallots and garlic until fragrant. Add drained Tôm Khô and toss for 2 minutes."
            },
            {
              step: 3,
              title: "Caramel Reduction",
              text: "Add fish sauce, coconut nectar, and 50ml warm water. Reduce heat to low and simmer gently in the claypot for 15-20 minutes until the sauce thickens into a glossy amber glaze."
            },
            {
              step: 4,
              title: "Finish & Serve",
              text: "Stir in cracked black pepper, fresh chillies, and green onions. Top with reserved crispy lardons and serve hot alongside fresh or steamed vegetables."
            }
          ],
          chefNote: "Claypot cooking retains heat evenly, allowing the natural sugars in the fish sauce and shrimp to caramelize gently."
        },
        {
          id: "calabash-shrimp-soup",
          title: "Calabash Gourd & Dried Shrimp Soup",
          subtitle: "A soul-warming traditional coastal soup where sweet gourd balances the deep umami of sun-dried shrimp.",
          desc: "A comforting traditional soup pairing sweet calabash gourd with rich sun-dried shrimp broth.",
          time: "25 MINS",
          prepTime: "10 MINS",
          cookTime: "15 MINS",
          servings: "4 Servings",
          level: "EASY",
          imgKey: "RECIPE_SOUP",
          ingredients: [
            "100g Tôm Khô Năm Thuý (soaked in warm water for 15 mins)",
            "1 fresh calabash gourd (~500g), peeled and thinly sliced",
            "3 cloves garlic, crushed",
            "2 shallots, minced",
            "2 tbsp fish sauce",
            "1 tbsp vegetable oil",
            "1 tsp fresh ground black pepper",
            "2 sprigs scallion & cilantro, finely chopped",
            "800ml water or light vegetable broth"
          ],
          instructions: [
            {
              step: 1,
              title: "Sauté Aromatics & Shrimp",
              text: "Heat oil in a pot over medium heat. Sauté crushed garlic and shallots until fragrant. Add rehydrated Tôm Khô and toss for 2 minutes until aromatic."
            },
            {
              step: 2,
              title: "Simmer Umami Broth",
              text: "Pour in 800ml water (including reserved shrimp soaking liquid). Bring to a gentle boil, skimming any foam, and simmer for 8 minutes to draw out deep umami flavor."
            },
            {
              step: 3,
              title: "Add Calabash Gourd",
              text: "Add sliced calabash gourd and fish sauce. Cook for 3-4 minutes until the gourd slices turn translucent yet retain a slight crisp bite."
            },
            {
              step: 4,
              title: "Finish & Serve",
              text: "Remove from heat. Stir in fresh ground black pepper, chopped scallions, and cilantro. Serve piping hot with jasmine rice."
            }
          ],
          chefNote: "Lightly bruising the rehydrated shrimp before sautéing releases concentrated natural juices into the golden broth."
        },
        {
          id: "shrimp-pickled-scallions",
          title: "Dried Shrimp with Pickled Scallions",
          subtitle: "An iconic Vietnamese celebratory delicacy pairing chewy dried shrimp with sweet & sour pickled scallion bulbs and century eggs.",
          desc: "An iconic Vietnamese holiday delicacy featuring sun-cured shrimp paired with sweet-and-sour pickled scallion bulbs.",
          time: "15 MINS",
          prepTime: "15 MINS",
          cookTime: "0 MINS",
          servings: "4 Servings",
          level: "EASY",
          imgKey: "RECIPE_KIEU",
          ingredients: [
            "150g Tôm Khô Năm Thuý (grade 1 large size)",
            "150g Pickled scallion bulbs (củ kiệu chua ngọt)",
            "2 century eggs (hột vịt bắc thảo), cooked and sliced",
            "2 tbsp sweet chili fish sauce dressing",
            "Fresh cilantro leaves for garnish"
          ],
          instructions: [
            {
              step: 1,
              title: "Infuse Sun-Dried Shrimp",
              text: "Rinse Tôm Khô Năm Thuý briefly in warm water, then soak in sweet-and-sour pickling juice from the củ kiệu jar for 15 minutes to infuse flavor and soften slightly."
            },
            {
              step: 2,
              title: "Slice Century Eggs",
              text: "Peel century eggs and slice each egg into 4-6 neat wedges using a sharp knife or string."
            },
            {
              step: 3,
              title: "Assemble Heritage Platter",
              text: "On a decorative vintage serving platter, arrange pickled scallion bulbs in a ring. Place rehydrated Tôm Khô proudly in the center and fan out sliced century eggs around the border."
            },
            {
              step: 4,
              title: "Drizzle & Serve",
              text: "Drizzle with sweet chili fish sauce glaze and garnish with fresh cilantro. Serve as a traditional festive appetizer."
            }
          ],
          chefNote: "Soaking the dried shrimp directly in pickled scallion syrup imparts a unique sweet-tangy chewiness."
        },
        {
          id: "shrimp-fried-rice",
          title: "Heritage Dried Shrimp Fried Rice",
          subtitle: "Fragrant jasmine rice tossed with crispy dried shrimp, garlic, scallions, and salted egg yolk.",
          desc: "Golden jasmine rice fried with crispy sun-dried shrimp, salted egg yolks, and fragrant garlic flakes.",
          time: "30 MINS",
          prepTime: "10 MINS",
          cookTime: "20 MINS",
          servings: "3-4 Servings",
          level: "EASY",
          imgKey: "RECIPE_FRIEDRICE",
          ingredients: [
            "120g Tôm Khô Năm Thuý (soaked for 10 mins and coarsely chopped)",
            "4 cups chilled cooked jasmine rice (leftover overnight rice)",
            "2 salted egg yolks, steamed and crumbled",
            "2 Chinese sausages (lạp xưởng), diced",
            "4 cloves garlic, minced & 2 shallots, minced",
            "2 eggs, beaten",
            "3 tbsp vegetable oil",
            "1.5 tbsp soy sauce & 1 tsp fish sauce",
            "Chopped scallions & cilantro for garnish"
          ],
          instructions: [
            {
              step: 1,
              title: "Crisp Shrimp & Sausage",
              text: "Heat 1 tbsp oil in a wok. Fry diced Chinese sausage and chopped Tôm Khô over medium heat for 4-5 minutes until crisp. Remove and set aside."
            },
            {
              step: 2,
              title: "Scramble Eggs",
              text: "Add remaining oil, sauté garlic and shallots until golden. Pour in beaten eggs and scramble gently."
            },
            {
              step: 3,
              title: "Fry Rice",
              text: "Add chilled jasmine rice, breaking up clumps. Stir-fry on high heat for 5 minutes. Add crumbled salted egg yolks, soy sauce, and fish sauce."
            },
            {
              step: 4,
              title: "Combine & Serve",
              text: "Toss back the crispy Tôm Khô and Chinese sausage. Stir constantly until rice grains dance in the wok. Finish with scallions and serve hot."
            }
          ],
          chefNote: "Using chilled overnight rice ensures every grain separates and absorbs the rich umami oil from the dried shrimp."
        }
      ],
      detail: {
        backToRecipes: "Back to Recipes",
        ingredients: "Ingredients Required",
        instructions: "Preparation Steps",
        servingsLabel: "Base Servings",
        prepTimeLabel: "Prep Time",
        cookTimeLabel: "Cook Time",
        totalTimeLabel: "Total Time",
        levelLabel: "Difficulty",
        chefTipTitle: "Master Artisan Note",
        itemsChecked: "prepped",
        interactiveServings: "Adjust Servings",
        relatedTitle: "More Heritage Recipes",
        shopCtaTitle: "Elevate this dish with genuine sun-dried shrimp",
        shopCtaButton: "Shop Tôm Khô Năm Thuý",
        printRecipe: "Print Recipe",
        shareRecipe: "Share Recipe",
        copied: "Link Copied to Clipboard!"
      },
      quote:
        "The sun-dried shrimp isn't just an ingredient; it is the seasoning that defines the soul of the dish.",
      processAlt: "Drying process",
      qualityNote: "QUALITY NOTE",
      qualityText:
        "Each shrimp undergoes 48 hours of natural solar curing to achieve its distinct concentrated flavor profile.",
      secretTitle: "The Secret Ingredient",
      secrets: [
        {
          title: "Concentrated Umami",
          desc: "Unlike fresh shrimp, the heritage sun-drying process intensifies the natural glutamates.",
        },
        {
          title: "Artisanal Texture",
          desc: "Our slow-curing method preserves a slight chewiness—a 'snap'—that adds tactile dimension.",
        },
        {
          title: "Coastal Terroir",
          desc: "The sea salt and Mekong Delta breeze impart a subtle minerality to each shrimp.",
        },
      ],
      shopCta: "SHOP THE COLLECTION",
    },
    shop: {
      eyebrow: "THE COLLECTION",
      title: "Shop Heritage Shrimp",
      addToCart: "ADD TO CART",
      categories: ["All", "Large Grade", "Medium Grade", "Specialty"],
      products: [
        {
          id: 1,
          name: "Tôm khô Năm Thuý 500g",
          price: 85.0,
          oldPrice: 110.0,
          tag: "SIGNATURE",
          imgKey: "HOME_PRODUCT",
          category: "Large Grade",
        },
        {
          id: 2,
          name: "Tôm Khô Năm Thuý 250g",
          price: 45.0,
          tag: "POPULAR",
          imgKey: "PROCESS_MACRO",
          category: "Medium Grade",
        },
        {
          id: 3,
          name: "Artisanal XO Base 300g",
          price: 55.0,
          imgKey: "PROCESS_TRAY",
          category: "Specialty",
        },
        {
          id: 4,
          name: "Tôm Khô Năm Thuý 1kg",
          price: 160.0,
          tag: "LIMITED",
          imgKey: "HOME_HERO",
          category: "Large Grade",
        },
      ],
      badges: [
        {
          icon: "local_shipping",
          title: "Global Shipping",
          desc: "Carefully packed for international journeys.",
        },
        {
          icon: "verified",
          title: "Purity Guaranteed",
          desc: "100% natural, chemical-free processing.",
        },
        {
          icon: "support_agent",
          title: "Dedicated Support",
          desc: "We're here for your culinary questions.",
        },
      ],
    },
  },
  vi: {
    common: {
      brand: "Tôm Khô Năm Thuý",
      languageLabel: "Ngôn ngữ",
      switchLanguage: "Đổi ngôn ngữ",
      currentLanguage: "VI",
      day: "Ngày",
    },
    nav: {
      story: "Câu chuyện",
      process: "Quy trình",
      shop: "Cửa hàng",
      recipes: "Công thức",
      cart: "Giỏ hàng",
      account: "Tài khoản",
      menu: "Mở menu",
      closeMenu: "Đóng menu",
    },
    footer: {
      tagline:
        "Chế tác bằng truyền thống, tuyển chọn cho khẩu vị hiện đại. Mang linh hồn ẩm thực Việt Nam đến những căn bếp toàn cầu.",
      experience: "TRẢI NGHIỆM",
      links: ["Bền vững", "Giao hàng & đổi trả", "Bán sỉ", "Liên hệ"],
      follow: "THEO DÕI",
      newsletter: "BẢN TIN",
      email: "Địa chỉ email",
      subscribe: "ĐĂNG KÝ",
      copyright:
        "© 2026 Tôm Khô Năm Thuý. Chế tác bằng truyền thống, tuyển chọn cho khẩu vị hiện đại.",
    },
    home: {
      heroAlt: "Tôm khô thượng hạng phơi nắng",
      heroEyebrow: "TRUYỀN THỐNG LÂU ĐỜI",
      heroTitle: "Tinh túy từ cánh đồng,",
      heroTitleAccent: "được gìn giữ bằng truyền thống",
      heroText:
        "Từ vùng nước giàu khoáng chất của Bạc Liêu, tôm được phơi nắng bằng phương pháp thủ công lưu truyền qua nhiều thế hệ.",
      heroCta: "KHÁM PHÁ BỘ SƯU TẬP",
      journeyEyebrow: "HÀNH TRÌNH",
      journeyTitle: "Từ cánh đồng vào bếp",
      journeyLead:
        "Bí quyết tạo nên vị umami sâu nằm trong nhịp điệu của tự nhiên. Chúng tôi chỉ thu hoạch vào thời điểm đẹp nhất của chu kỳ trăng, khi con tôm căng mọng nhất.",
      journeyBody:
        "Khác với sấy công nghiệp, quy trình của chúng tôi kéo dài ba ngày dưới nắng gay gắt. Sự bay hơi chậm cô đọng vị ngọt tự nhiên và tạo nên sắc hổ phách trong đặc trưng của di sản Bạc Liêu đích thực.",
      stats: [
        { value: "100%", label: "PHƠI NẮNG" },
        { value: "0%", label: "CHẤT BẢO QUẢN" },
        { value: "20%", label: "ĐỘ ẨM" },
      ],
      storyAlt: "Quy trình phơi thủ công",
      pullQuote:
        "Mặt trời là người thợ kiên nhẫn nhất, đánh thức những tầng vị mà thời gian và lửa không thể tạo ra.",
      signatureEyebrow: "DÒNG SẢN PHẨM ĐẶC TRƯNG",
      signatureTitle: "Tôm khô Bạc Liêu",
      productAlt: "Dòng Tôm khô Năm Thuý mùa 2026",
      limitedReserve: "PHIÊN BẢN GIỚI HẠN",
      tags: ["PHƠI NẮNG", "CỠ LỚN ĐẶC BIỆT", "NGỌT TỰ NHIÊN"],
      productTitle: "Tôm khô loại 1",
      productTitleAccent: "Trọng lượng: 500g",
      productDesc:
        "Dòng cao cấp nhất, tuyển chọn thủ công theo kích cỡ và màu sắc đồng đều. Từng con tôm được bóc vỏ bằng tay để giữ trọn cấu trúc thịt tinh tế.",
      orderNow: "ĐẶT HÀNG",
      shipping: "Miễn phí vận chuyển cho đơn hàng trên 300k",
      trustTitle: "Tinh khiết & Tin cậy",
      trustItems: [
        {
          icon: "verified",
          title: "Nguồn gốc chứng thực",
          desc: "Mỗi hũ có mã QR truy xuất đến đúng thời gian phơi và hạn sử dụng.",
        },
        {
          icon: "eco",
          title: "Khai thác có trách nhiệm",
          desc: "Chúng tôi hợp tác với nông dân địa phương dùng phương pháp nuôi bền vững, ít tác động.",
        },
      ],
      testimonials: [
        {
          name: "ELIZA VAN DER BELT",
          role: "BẾP TRƯỞNG BÁNH NGỌT SAO MICHELIN",
          quote:
            "Tôi đã thử nhiều thương hiệu, nhưng kết cấu của Tôm Khô Năm Thuý thật sự khác biệt. Nó như một miếng biển cả được cô đặc.",
        },
        {
          name: "DAVID NGUYEN",
          role: "NGƯỜI SÀNH ĂN TẠI GIA",
          quote:
            "Một khám phá ẩm thực đúng nghĩa. Màu hổ phách và độ trong là dấu hiệu của mẻ phơi nắng hoàn hảo.",
        },
      ],
    },
    process: {
      heroAlt: "Thuyền ven biển Bạc Liêu",
      heroEyebrow: "HÀNH TRÌNH ẨM THỰC",
      heroTitle: "Từ cánh đồng đến nắng trời",
      heroText:
        "Khám phá hành trình biến đổi ba ngày, nơi tôm Bạc Liêu tươi nhất gặp tay nghề thủ công và nắng Việt Nam.",
      sourceEyebrow: "01. NGUỒN GỐC",
      sourceTitle: "Vùng nuôi thâm canh tại Bạc Liêu",
      sourceText:
        "Nằm ở cực Nam Việt Nam, Bạc Liêu là một trong 6 tỉnh trọng điểm nuôi tôm của cả nước. Tôm sinh trưởng trong môi trường tự nhiên giàu dinh dưỡng, hấp thụ khoáng chất để tạo nên vị ngọt đặc trưng khó tìm thấy ở nơi nào khác.",
      sourceLocation: "Huyện Hồng Dân, tỉnh Cà Mau (Bạc Liêu cũ)",
      mangroveAlt: "Rừng ngập mặn",
      localityMap: "BẢN ĐỒ ĐỊA PHƯƠNG",
      localityName: "Cánh đồng điện gió Bạc Liêu",
      selectionEyebrow: "02. TUYỂN CHỌN",
      selectionTitle: "Nghệ thuật tuyển chọn thủ công",
      selectionSteps: [
        {
          imgKey: "PROCESS_HANDS",
          title: "Chọn lọc bằng tay",
          desc: "Mỗi mẻ tôm được kiểm tra bằng mắt. Chỉ những con chắc khỏe nhất mới được giữ lại.",
        },
        {
          imgKey: "PROCESS_FRESH",
          title: "Tươi ngay sau thu hoạch",
          desc: "Thời điểm là yếu tố quyết định. Việc phân loại bắt đầu trong vòng hai giờ sau khi thu hoạch.",
        },
        {
          imgKey: "PROCESS_TRAY",
          title: "Truyền thống chính xác",
          desc: "Những người thợ bậc thầy dựa vào kinh nghiệm qua nhiều thế hệ để nhận biết con tôm đạt độ ngon nhất.",
        },
      ],
      cureEyebrow: "03. PHƠI NẮNG",
      cureTitle: "72 giờ hong dưới nắng",
      cureText:
        "Khác với sấy nhiệt công nghiệp, quá trình bay hơi bằng nắng của chúng tôi chậm rãi và giàu biến chuyển. Mặt trời nhẹ nhàng rút ẩm, cô đặc vị ngọt tự nhiên.",
      cureDays: [
        {
          day: "1",
          title: "Tạo nền",
          desc: "Tôm được trải trên giàn tre cao để đón trọn nắng giữa ngày.",
        },
        {
          day: "2",
          title: "Trở đều",
          desc: "Từng con tôm được lật thủ công mỗi giờ để khô đều.",
        },
        {
          day: "3",
          title: "Hoàn thiện",
          desc: "Sắc đỏ đất nung đặc trưng đậm dần khi độ ẩm còn khoảng 15%.",
        },
      ],
      wideAlt: "Giàn phơi rộng",
      macroAlt: "Cận cảnh kết cấu",
      workerAlt: "Người thợ bên giàn phơi",
      peelingAlt: "Bóc vỏ bằng tay",
      badge: "TRUYỀN THỐNG KHÔNG CHẤT BẢO QUẢN",
      craftEyebrow: "04. TAY NGHỀ",
      craftTitle: "Bóc tay & đóng hũ",
      craftQuote:
        "Máy móc có thể tách vỏ, nhưng không thể cảm nhận linh hồn của con tôm.",
      craftText:
        "Sau khi phơi, vỏ tôm trở nên giòn. Nghệ nhân dùng kỹ thuật gõ nhẹ theo nhịp để tách vỏ mà không làm dập thịt. Công đoạn thủ công đầy tận tâm này giúp từng miếng tôm nguyên vẹn, rực màu và tinh khiết.",
      craftBullets: [
        "Bóc vỏ không dùng lực ép cơ học",
        "Đóng hũ thủy tinh để giữ độ tươi tối đa",
        "Cam kết di sản theo từng số lô",
      ],
      shopCta: "MUA BỘ SƯU TẬP HERITAGE",
      finalQuote:
        "Hương vị đi qua nhiều thế hệ, được nắng lưu giữ và bàn tay bảo tồn.",
      finalAttribution: "NGHỆ NHÂN PHƠI TÔM",
    },
    recipes: {
      badge: "Nghệ thuật ẩm thực",
      title: "Từ truyền thống đến bàn ăn",
      intro:
        "Khám phá linh hồn đa dụng của tôm khô phơi nắng thượng hạng. Từ nền vị umami đậm đà đến salad ven biển thanh nhẹ, những công thức này tôn vinh di sản Bạc Liêu.",
      signature: "Công thức đặc trưng",
      items: [
        {
          id: "heritage-xo-sauce",
          title: "Sốt XO Heritage",
          subtitle: "Sốt gia vị đậm đà sang vị, nấu chậm từ Tôm Khô Năm Thuý phơi nắng, sò điệp và thảo mộc.",
          desc: "Gia vị đậm đà, sang vị, là nền umami lý tưởng cho mì và các món xào.",
          time: "90 PHÚT",
          prepTime: "30 PHÚT",
          cookTime: "60 PHÚT",
          servings: "2 Hũ (~500g)",
          level: "TRUNG BÌNH",
          imgKey: "RECIPE_XO",
          signature: true,
          large: true,
          ingredients: [
            "150g Tôm Khô Năm Thuý (ngâm nước ấm 20 phút)",
            "100g Sò điệp khô (sò điệp Nhật/Việt), ngâm mềm",
            "100g Đùi heo muối Jinhua hoặc thịt xông khói, xắt hạt lựu nhỏ",
            "6 tép tỏi, băm nhỏ",
            "4 củ hành tím, băm nhỏ",
            "3 trái ớt tươi & 2 muỗng ớt bột",
            "250ml dầu ăn hoặc dầu đậu phộng",
            "2 muỗng rượu Thiệu Hưng (Shaoxing)",
            "2 muỗng nước tương thanh",
            "1 muỗng dầu hào",
            "1 muỗng đường nâu"
          ],
          instructions: [
            {
              step: 1,
              title: "Sơ chế hải sản khô",
              text: "Ngâm Tôm Khô Năm Thuý trong nước ấm 20 phút cho hơi mềm. Vớt ra ráo nước (giữ lại nước ngâm nấu canh) rồi cho vào máy xay nhấp nhả cho tơi sợi. Làm tương tự với sò điệp khô."
            },
            {
              step: 2,
              title: "Phi thơm hành tỏi",
              text: "Đun nóng 100ml dầu trong chảo sâu lòng với lửa vừa-nhỏ. Cho hành tím và tỏi băm vào phi vàng giòn thơm (5-7 phút). Vớt ra để riêng."
            },
            {
              step: 3,
              title: "Chiên chậm tôm & hải sản",
              text: "Cho thêm lượng dầu còn lại vào chảo. Cho tôm khô tơi sợi, sò điệp và thịt muối xắt nhỏ vào đảo liên tục trên lửa nhỏ 25-30 phút đến khi giòn rụm và ngả màu vàng đậm."
            },
            {
              step: 4,
              title: "Hòa vị & lên màu",
              text: "Thêm ớt bột, ớt tươi, hành tỏi đã phi, rượu, nước tương, dầu hào và đường. Đun rim lửa nhỏ thêm 10 phút đến khi dầu chuyển màu đỏ hổ phách sẫm trong suốt."
            },
            {
              step: 5,
              title: "Để nguội & đóng hũ",
              text: "Để sốt nguội hoàn toàn trước khi cho vào hũ thủy tinh đã tiệt trùng. Rót dầu ngập mặt sốt và bảo quản tủ lạnh dùng trong 3 tháng."
            }
          ],
          chefNote: "Chiên trên lửa nhỏ là chìa khóa vàng; không bao giờ dùng lửa lớn khiến tôm bị đắng."
        },
        {
          id: "bac-lieu-shrimp-salad",
          title: "Gỏi tôm khô",
          subtitle: "Đu đủ, xoài xanh giòn sần sật trộn tôm khô phơi nắng đậm đà cùng sốt tắc chua ngọt thanh mát.",
          desc: "Rau giòn trộn cùng Tôm Khô Năm Thuý đã ngâm mềm và nước sốt tắc tươi sáng.",
          time: "20 PHÚT",
          prepTime: "15 PHÚT",
          cookTime: "5 PHÚT",
          servings: "4 Phần",
          level: "DỄ",
          imgKey: "RECIPE_SALAD",
          ingredients: [
            "100g Tôm Khô Năm Thuý",
            "1 trái đu đủ xanh hoặc xoài xanh, bào sợi",
            "1 trái dưa leo bỏ ruột, bào sợi",
            "1/2 trái ớt chuông đỏ, thái mỏng",
            "1/2 chén rau thơm hỗn hợp (rau răm, húng lủi, húng quế)",
            "1/4 chén đậu phụng rang giã dập",
            "1 muỗng mè rang",
            "Nước sốt: 3 muỗng nước tắc/chanh, 2 muỗng nước mắm ngon, 2 muỗng đường, 1 tép tỏi băm, 1 trái ớt băm"
          ],
          instructions: [
            {
              step: 1,
              title: "Ngâm & rang sơ tôm",
              text: "Ngâm Tôm Khô Năm Thuý vào nước ấm 15 phút, vớt ra thấm khô. Cho lên chảo khô đảo nhẹ trên lửa vừa 2-3 phút cho tôm dậy mùi thơm và săn giòn bề mặt."
            },
            {
              step: 2,
              title: "Chuẩn bị rau củ giòn",
              text: "Bào sợi đu đủ/xoài và dưa leo. Ngâm vào tô nước đá 5 phút để tạo độ giòn tối đa, sau đó vớt ra vắt ráo."
            },
            {
              step: 3,
              title: "Pha nước sốt gỏi",
              text: "Hòa tan nước tắc, nước mắm, đường, tỏi băm và ớt băm trong chén cho đường tan hoàn toàn."
            },
            {
              step: 4,
              title: "Trộn & thưởng thức",
              text: "Trong tô lớn, trộn đều rau củ, rau thơm và Tôm Khô. Rưới nước sốt ngay trước khi ăn, trộn nhẹ tay và rắc đậu phụng, mè rang lên trên."
            }
          ],
          chefNote: "Rang sơ tôm khô sau khi ngâm giúp kích hoạt lớp dầu phơi nắng tự nhiên, giải phóng hương vị biển nồng nàn."
        },
        {
          id: "classic-claypot-braise",
          title: "Kho niêu truyền thống (Kho quẹt)",
          subtitle: "Nước mắm thắng đường thốt nốt kẹo sệt quánh cùng ba chỉ giòn rụm, tôm khô nguyên con và tiêu đen ớt hiểm.",
          desc: "Thịt ba chỉ và tôm khô nấu chậm trong nước mắm thắng màu đậm đà.",
          time: "45 PHÚT",
          prepTime: "15 PHÚT",
          cookTime: "30 PHÚT",
          servings: "3-4 Phần",
          level: "NÂNG CAO",
          imgKey: "RECIPE_CLAYPOT",
          ingredients: [
            "120g Tôm Khô Năm Thuý (ngâm nước ấm 10 phút)",
            "150g Thịt ba chỉ xắt hạt lựu/top mỡ",
            "3 muỗng nước mắm ngon Bạc Liêu/Phú Quốc",
            "2.5 muỗng mật hoa dừa hoặc nước màu đường thốt nốt",
            "2 củ hành tím & 3 tép tỏi băm",
            "2 trái ớt hiểm nguyên trái & 1 muỗng tiêu đập dập",
            "2 nhánh hành lá xắt nhỏ",
            "Rau luộc (đậu bắp, cải luộc, khổ qua) ăn kèm"
          ],
          instructions: [
            {
              step: 1,
              title: "Rán tép mỡ ba chỉ",
              text: "Cho thịt ba chỉ xắt nhỏ vào nồi đất rán lửa vừa cho ra bớt mỡ, miếng thịt giòn rụm chuyển màu vàng ươm. Vớt một nửa tép mỡ ra để riêng trang trí."
            },
            {
              step: 2,
              title: "Phi hành tỏi & tôm khô",
              text: "Dùng mỡ heo trong nồi, phi thơm hành tím và tỏi băm. Cho Tôm Khô Năm Thuý đã ráo nước vào đảo đều 2 phút."
            },
            {
              step: 3,
              title: "Sắc kẹo nước kho",
              text: "Cho nước mắm, nước màu thốt nốt và 50ml nước ấm vào nồi. Hạ lửa nhỏ riu riu đun 15-20 phút cho nước mắm kẹo quánh lại, màu hổ phách óng ánh."
            },
            {
              step: 4,
              title: "Hoàn thiện & thưởng thức",
              text: "Cho tiêu đập dập, ớt hiểm và hành lá vào. Trút phần tép mỡ giòn lên trên. Dùng nóng ngay trong nồi đất cùng cơm cháy hoặc rau củ luộc."
            }
          ],
          chefNote: "Nấu bằng nồi đất giữ nhiệt êm dịu, giúp vị ngọt của tôm khô và nước mắm thốt nốt kẹo lại mà không bị cháy khét."
        },
        {
          id: "calabash-shrimp-soup",
          title: "Canh bầu nấu tôm khô",
          subtitle: "Món canh ngọt mát đậm đà vị biển, sự kết hợp hoàn hảo giữa bầu thanh ngọt và tôm khô phơi nắng.",
          desc: "Món canh truyền thống thanh nhiệt, hòa quyện giữa bầu ngọt thanh và nước dùng tôm khô phơi nắng nồng nàn.",
          time: "25 PHÚT",
          prepTime: "10 PHÚT",
          cookTime: "15 PHÚT",
          servings: "4 Phần",
          level: "DỄ",
          imgKey: "RECIPE_SOUP",
          ingredients: [
            "100g Tôm Khô Năm Thuý (ngâm nước ấm 15 phút)",
            "1 trái bầu tươi (~500g), gọt vỏ, băm hoặc thái mỏng",
            "3 tép tỏi đập dập",
            "2 củ hành tím băm nhỏ",
            "2 muỗng nước mắm ngon Bạc Liêu",
            "1 muỗng dầu ăn",
            "1 muỗng tiêu xay tươi",
            "Hành lá, ngò rí xắt nhỏ",
            "800ml nước lọc (giữ lại nước ngâm tôm)"
          ],
          instructions: [
            {
              step: 1,
              title: "Phi thơm tôm khô",
              text: "Đun nóng dầu trong nồi. Cho tỏi và hành tím vào phi thơm. Cho Tôm Khô Năm Thuý đã ngâm mềm vào xào săn 2 phút cho dậy mùi thơm."
            },
            {
              step: 2,
              title: "Nấu nước dùng umami",
              text: "Trút 800ml nước (bao gồm cả nước ngâm tôm) vào nồi. Đun sôi nhẹ, hớt bọt và đun riu riu 8 phút để vị ngọt tự nhiên của tôm hòa vào nước dùng."
            },
            {
              step: 3,
              title: "Nấu bầu thanh ngọt",
              text: "Cho bầu thái mỏng và nước mắm vào. Nấu khoảng 3-4 phút cho bầu vừa chuyển màu trong suốt nhưng vẫn giữ được độ ngọt giòn."
            },
            {
              step: 4,
              title: "Hoàn thiện & thưởng thức",
              text: "Tắt bếp, rắc tiêu xay, hành lá và ngò rí lên trên. Dùng nóng cùng cơm trắng."
            }
          ],
          chefNote: "Đập dập nhẹ con tôm khô trước khi xào giúp tiết trọn vẹn vị umami tự nhiên vào nước canh."
        },
        {
          id: "shrimp-pickled-scallions",
          title: "Tôm khô củ kiệu",
          subtitle: "Món nhắm di sản không thể thiếu trong ngày lễ Tết, hòa quyện giữa tôm khô dẻo ngọt và củ kiệu chua ngọt giòn tan.",
          desc: "Món ngon di sản ngày Tết, kết hợp tôm khô phơi nắng dẻo thơm với củ kiệu chua ngọt và trứng bắc thảo ngậy bùi.",
          time: "15 PHÚT",
          prepTime: "15 PHÚT",
          cookTime: "0 PHÚT",
          servings: "4 Phần",
          level: "DỄ",
          imgKey: "RECIPE_KIEU",
          ingredients: [
            "150g Tôm Khô Năm Thuý (loại 1 cỡ lớn)",
            "150g Củ kiệu chua ngọt giòn",
            "2 quả trứng vịt bắc thảo, luộc chín thái múi cau",
            "2 muỗng nước mắm ớt đường kẹo",
            "Ngò rí trang trí"
          ],
          instructions: [
            {
              step: 1,
              title: "Ủ tôm khô thấm vị",
              text: "Rửa sơ Tôm Khô Năm Thuý qua nước ấm, sau đó ngâm tôm trực tiếp vào nước giấm đường của củ kiệu 15 phút cho tôm nở dẻo và ngấm vị chua ngọt."
            },
            {
              step: 2,
              title: "Cắt trứng bắc thảo",
              text: "Bóc vỏ trứng bắc thảo, dùng chỉ hoặc dao sắc cắt thành các múi cau đều nhau."
            },
            {
              step: 3,
              title: "Bày đĩa di sản",
              text: "Trên đĩa gốm mộc, xếp củ kiệu chua ngọt xung quanh. Trút Tôm Khô Năm Thuý dẻo ngọt vào giữa đĩa, xếp trứng bắc thảo vòng ngoài."
            },
            {
              step: 4,
              title: "Rưới sốt & thưởng thức",
              text: "Rưới nhẹ nước mắm ớt kẹo ngọt và trang trí ngò rí. Món ăn hoàn hảo cho các dịp sum họp gia đình."
            }
          ],
          chefNote: "Ngâm tôm khô trong nước kiệu là bí quyết giúp con tôm vừa dẻo mềm vừa ngấm vị chua ngọt tự nhiên."
        },
        {
          id: "shrimp-fried-rice",
          title: "Cơm chiên tôm khô",
          subtitle: "Cơm chiên giòn thơm lừng với tôm khô đảo giòn, trứng muối tơi bùi và hành phi thơm phức.",
          desc: "Cơm chiên hạt vàng ươm giòn rụm với tôm khô phơi nắng xào giòn, lòng đỏ trứng muối bùi béo.",
          time: "30 PHÚT",
          prepTime: "10 PHÚT",
          cookTime: "20 PHÚT",
          servings: "3-4 Phần",
          level: "DỄ",
          imgKey: "RECIPE_FRIEDRICE",
          ingredients: [
            "120g Tôm Khô Năm Thuý (ngâm 10 phút, giã nhẹ hoặc xắt hạt lựu)",
            "4 chén cơm nguội hạt xốp (để tủ lạnh qua đêm)",
            "2 lòng đỏ trứng muối, hấp chín giã dập",
            "2 cây lạp xưởng Mai Quế Lộ, xắt hạt lựu",
            "4 tép tỏi băm & 2 củ hành tím băm",
            "2 quả trứng gà đánh tan",
            "3 muỗng dầu ăn",
            "1.5 muỗng nước tương & 1 muỗng nước mắm ngon",
            "Hành lá, ngò rí, tiêu xay"
          ],
          instructions: [
            {
              step: 1,
              title: "Đảo giòn tôm & lạp xưởng",
              text: "Đun nóng 1 muỗng dầu trong chảo. Cho lạp xưởng và Tôm Khô Năm Thuý vào đảo trên lửa vừa 4-5 phút đến khi vàng giòn. Trút ra bát riêng."
            },
            {
              step: 2,
              title: "Phi thơm & chiên trứng",
              text: "Thêm dầu vào chảo, phi thơm tỏi hành băm. Rưới trứng gà đánh tan vào đảo nhanh tay cho trứng tơi nhỏ."
            },
            {
              step: 3,
              title: "Chiên cơm tơi hạt",
              text: "Cho cơm nguội vào tơi đều trên lửa lớn 5 phút. Cho lòng đỏ trứng muối giã dập, nước tương và nước mắm vào đảo cho cơm nhuộm màu vàng óng."
            },
            {
              step: 4,
              title: "Hòa vị & trình bày",
              text: "Trút tôm khô và lạp xưởng giòn trở lại chảo. Đảo đều tay trên lửa lớn cho hạt cơm săn lại. Rắc hành lá, tiêu xay và dùng nóng."
            }
          ],
          chefNote: "Dùng cơm nguội để tủ lạnh giúp hạt cơm săn giòn, thấm trọn vẹn lớp dầu tôm khô béo thơm."
        }
      ],
      detail: {
        backToRecipes: "Quay lại danh sách công thức",
        ingredients: "Nguyên liệu cần chuẩn bị",
        instructions: "Các bước thực hiện",
        servingsLabel: "Khẩu phần chuẩn",
        prepTimeLabel: "Chuẩn bị",
        cookTimeLabel: "Chế biến",
        totalTimeLabel: "Tổng thời gian",
        levelLabel: "Độ khó",
        chefTipTitle: "Ghi chú từ nghệ nhân",
        itemsChecked: "đã chuẩn bị",
        interactiveServings: "Điều chỉnh khẩu phần",
        relatedTitle: "Công thức di sản khác",
        shopCtaTitle: "Nâng tầm món ăn với Tôm Khô Năm Thuý phơi nắng nguyên chất",
        shopCtaButton: "Đặt mua Tôm Khô Năm Thuý",
        printRecipe: "In công thức",
        shareRecipe: "Chia sẻ công thức",
        copied: "Đã chép liên kết vào bộ nhớ tạm!"
      },
      quote:
        "Tôm khô phơi nắng không chỉ là nguyên liệu; đó là gia vị định hình linh hồn món ăn.",
      processAlt: "Quy trình phơi",
      qualityNote: "GHI CHÚ CHẤT LƯỢNG",
      qualityText:
        "Mỗi con tôm trải qua 48 giờ hong nắng tự nhiên để đạt hương vị cô đặc đặc trưng.",
      secretTitle: "Nguyên liệu bí mật",
      secrets: [
        {
          title: "Umami cô đặc",
          desc: "Khác với tôm tươi, quá trình phơi nắng Heritage làm vị glutamate tự nhiên trở nên đậm hơn.",
        },
        {
          title: "Kết cấu thủ công",
          desc: "Phương pháp hong chậm giữ lại độ dai nhẹ, một độ bật miệng tạo chiều sâu xúc giác.",
        },
        {
          title: "Dấu ấn biển",
          desc: "Muối biển và làn gió đồng bằng Mekong để lại vị khoáng nhẹ trên từng con tôm.",
        },
      ],
      shopCta: "MUA BỘ SƯU TẬP",
    },
    shop: {
      eyebrow: "BỘ SƯU TẬP",
      title: "Mua Tôm Khô Năm Thuý",
      addToCart: "ĐẶT HÀNG",
      categories: ["Tất cả", "Cỡ lớn", "Cỡ vừa", "Đặc sản"],
      products: [
        {
          id: 1,
          name: "Tôm Khô Năm Thuý 500g",
          price: 85.0,
          oldPrice: 110.0,
          tag: "ĐẶC TRƯNG",
          imgKey: "HOME_PRODUCT",
          category: "Cỡ lớn",
        },
        {
          id: 2,
          name: "Tôm Khô Năm Thuý 250g",
          price: 45.0,
          tag: "ĐƯỢC ƯA CHUỘNG",
          imgKey: "PROCESS_MACRO",
          category: "Cỡ vừa",
        },
        {
          id: 3,
          name: "Artisanal XO Base 300g",
          price: 55.0,
          imgKey: "PROCESS_TRAY",
          category: "Đặc sản",
        },
        {
          id: 4,
          name: "Tôm Khô Năm Thuý 1kg",
          price: 160.0,
          tag: "GIỚI HẠN",
          imgKey: "HOME_HERO",
          category: "Cỡ lớn",
        },
      ],
      badges: [
        {
          icon: "local_shipping",
          title: "Giao hàng toàn cầu",
          desc: "Đóng gói cẩn trọng cho hành trình quốc tế.",
        },
        {
          icon: "verified",
          title: "Cam kết tinh khiết",
          desc: "100% tự nhiên, chế biến không hóa chất.",
        },
        {
          icon: "support_agent",
          title: "Hỗ trợ tận tâm",
          desc: "Chúng tôi luôn sẵn sàng cho mọi câu hỏi ẩm thực của bạn.",
        },
      ],
    },
  },
} as const;

type Dictionary = (typeof translations)[Language];

interface I18nContextValue {
  language: Language;
  t: Dictionary;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "en";
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
  return storedLanguage === "vi" || storedLanguage === "en"
    ? storedLanguage
    : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      t: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
