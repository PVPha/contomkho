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
          title: "Heritage XO Sauce",
          desc: "A decadent, savory condiment that serves as the ultimate umami bomb for noodles and stir-fries.",
          time: "90 MINS",
          level: "INTERMEDIATE",
          imgKey: "RECIPE_XO",
          signature: true,
          large: true,
        },
        {
          title: "Bạc Liêu Shrimp Salad",
          desc: "Crisp vegetables tossed with rehydrated heritage shrimp and a zesty calamansi dressing.",
          time: "20 MINS",
          level: "EASY",
          imgKey: "RECIPE_SALAD",
        },
        {
          title: "Classic Claypot Braise",
          desc: "Slow-cooked pork belly and dried shrimp in a caramelized fish sauce reduction.",
          time: "45 MINS",
          level: "ADVANCED",
          imgKey: "RECIPE_CLAYPOT",
        },
      ],
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
          title: "Sốt XO Heritage",
          desc: "Gia vị đậm đà, sang vị, là nền umami lý tưởng cho mì và các món xào.",
          time: "90 PHÚT",
          level: "TRUNG BÌNH",
          imgKey: "RECIPE_XO",
          signature: true,
          large: true,
        },
        {
          title: "Gỏi tôm khô Bạc Liêu",
          desc: "Rau giòn trộn cùng Tôm Khô Năm Thuý đã ngâm mềm và nước sốt tắc tươi sáng.",
          time: "20 PHÚT",
          level: "DỄ",
          imgKey: "RECIPE_SALAD",
        },
        {
          title: "Kho niêu truyền thống",
          desc: "Thịt ba chỉ và tôm khô nấu chậm trong nước mắm thắng màu đậm đà.",
          time: "45 PHÚT",
          level: "NÂNG CAO",
          imgKey: "RECIPE_CLAYPOT",
        },
      ],
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
