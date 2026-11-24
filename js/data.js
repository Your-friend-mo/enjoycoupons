// Catalog of Top & Trending Coupons for Enjoy Coupons Clone
(function () {
  const COUPONS = [
    {
      slug: 'aliexpress-coupons-deals',
      brand: 'AliExpress',
      title: "AliExpress's Coupons & Deals",
      category: 'PROMO',
      ratings: 3548,
      couponsLeft: 612,
      isTop: true,
      isTrending: true,
      description: 'Save up to 70% on global electronics, fashion, and home essentials with verified promo codes.',
      about: 'AliExpress connects shoppers worldwide with millions of affordable products across tech, home, and style. Use our verified AliExpress coupons for instant cart discounts and free shipping perks.',
      tips: 'Stack store coupons with AliExpress sitewide promo codes during seasonal sales to maximize your savings at checkout.',
      art: { style: 'aliexpress' },
      offers: [
        { shortTitle: '$50 OFF', title: '$50 OFF Site-Wide Orders Over $150', verified: 'Verified 1 Day Ago | 2.1k uses today', masked: 'AliE*******', code: 'ALIEX50SAVE' },
        { shortTitle: '60% OFF', title: '60% OFF Flash Deals & Tech Accessories', verified: 'Verified 1 Day Ago | 1.4k uses today', masked: 'Ali6*******', code: 'ALI60FLASH' }
      ]
    },
    {
      slug: 'amazon-coupons-deals',
      brand: 'Amazon',
      title: "Amazon's Coupons & Deals",
      category: 'DEAL',
      ratings: 11372,
      couponsLeft: 486,
      isTop: true,
      isTrending: true,
      description: 'Up to 60% Off Select Styles - Join The Amazon Mailing List for Exclusive Prime Deals.',
      about: 'Amazon offers everyday savings across electronics, fashion, groceries, and home goods. Apply verified Amazon promo codes to unlock extra discounts on eligible items.',
      tips: 'Clip on-page digital coupons and combine them with our verified promo codes at checkout for deeper discounts.',
      art: { style: 'amazon' },
      offers: [
        { shortTitle: '$100 OFF', title: '$100 Amazon Promo Code Site-Wide', verified: 'Verified 1 Day Ago | 4.3k uses today', masked: 'Amzn*******', code: 'AMZN100VIP' },
        { shortTitle: '40% OFF', title: '40% OFF Select Electronics & Home Essentials', verified: 'Verified 1 Day Ago | 2.9k uses today', masked: 'Prim*******', code: 'PRIME40NOW' }
      ]
    },
    {
      slug: 'fashion-nova-free-discount-code',
      brand: 'Fashion Nova',
      title: 'Fashion Nova Free Discount Code',
      category: 'PROMO',
      ratings: 7746,
      couponsLeft: 329,
      isTop: true,
      isTrending: true,
      description: 'Score up to 50% off trending dresses, denim, loungewear, and accessories sitewide.',
      about: 'Fashion Nova delivers runway-inspired styles at accessible prices. Enjoy verified Fashion Nova promo codes for huge savings on new arrivals and clearance drops.',
      tips: 'Sign up for SMS alerts and apply a sitewide code at checkout to get free express shipping on qualifying orders.',
      art: { style: 'fashionnova' },
      offers: [
        { shortTitle: '50% OFF', title: '50% OFF Your Entire Fashion Nova Order', verified: 'Verified 1 Day Ago | 3.1k uses today', masked: 'Nova*******', code: 'NOVA50STYLE' },
        { shortTitle: '$40 OFF', title: '$40 OFF Orders Over $100 + Free Shipping', verified: 'Verified 2 Days Ago | 1.7k uses today', masked: 'FN40*******', code: 'FN40FREE' }
      ]
    },
    {
      slug: 'ebay-coupons-deals',
      brand: 'eBay',
      title: 'eBay Coupons & Deals',
      category: 'PROMO',
      ratings: 854,
      couponsLeft: 415,
      isTop: true,
      isTrending: false,
      description: 'Extra 20% off certified refurbished tech, sneakers, collectibles, and auto parts.',
      about: 'eBay is the global marketplace for new, vintage, and certified refurbished finds. Use verified eBay coupons to save instantly on qualifying Buy It Now purchases.',
      tips: 'Watch items in your cart and check Certified Refurbished categories where coupon codes apply most reliably.',
      art: { style: 'ebay' },
      offers: [
        { shortTitle: '25% OFF', title: '25% OFF Certified Refurbished Electronics', verified: 'Verified 1 Day Ago | 1.2k uses today', masked: 'eBay*******', code: 'EBAYTECH25' },
        { shortTitle: '$30 OFF', title: '$30 OFF Sneakers & Collectibles', verified: 'Verified 2 Days Ago | 940 uses today', masked: 'Save*******', code: 'EBAY30DROP' }
      ]
    },
    {
      slug: 'nike-100-promo-code',
      brand: 'Nike',
      title: 'Nike $100 Promo Code',
      category: 'PROMO',
      ratings: 3862,
      couponsLeft: 538,
      isTop: true,
      isTrending: true,
      description: 'Up to 60% Off Select Styles - Join The Nike Mailing List To Receive Insider Info on Sales.',
      about: 'Nike is a world leader in athletic footwear, apparel, and sports gear. Save big on Air Max, Jordan, running shoes, and activewear with our verified Nike discounts and promotion codes.',
      tips: 'Up to 60% Off Select Styles - Join The Nike Mailing List To Receive Insider Info on Sales & New Arrivals.',
      art: { style: 'nike' },
      offers: [
        { shortTitle: '$100 OFF', title: '$100 Nike Promo Code Site-Wide', verified: 'Verified 1 Day Ago | 1.8k uses today', masked: 'Nike*******', code: 'NIKE100OFF' },
        { shortTitle: '50% OFF', title: '50% OFF Nike Clothing!', verified: 'Verified 1 Day Ago | 1.5k uses today', masked: 'Swsh*******', code: 'NIKE50GEAR' }
      ]
    },
    {
      slug: 'gymshark-discount-codes',
      brand: 'GymShark',
      title: "GymShark's Discount Codes 2023",
      category: 'PROMO',
      ratings: 4283,
      couponsLeft: 863,
      isTop: true,
      isTrending: true,
      description: 'Save on Seamless leggings, training hoodies, and performance gym wear.',
      about: 'GymShark designs high-performance conditioning apparel and accessories for athletes and everyday lifters. Unlock exclusive GymShark promo codes before they run out.',
      tips: 'Students and first-time buyers can stack seasonal sale markdowns with verified checkout codes.',
      art: { style: 'gymshark' },
      offers: [
        { shortTitle: '30% OFF', title: '30% OFF GymShark Site-Wide Apparel', verified: 'Verified 1 Day Ago | 2.0k uses today', masked: 'GymS*******', code: 'SHARK30FIT' },
        { shortTitle: '$25 OFF', title: '$25 OFF Orders Over $75 + Free Shipping', verified: 'Verified 1 Day Ago | 1.1k uses today', masked: 'Lift*******', code: 'GYM25SHIP' }
      ]
    },
    {
      slug: 'casetify-promo-codes-deals',
      brand: 'Casetify',
      title: "Casetify's Promo Codes & Deals",
      category: 'PROMO',
      ratings: 4521,
      couponsLeft: 864,
      isTop: true,
      isTrending: true,
      description: 'Get verified discounts on Impact Cases, MagSafe accessories, and custom tech gear.',
      about: 'Casetify creates ultra-protective, customizable phone cases and watch bands with global artist collaborations. Use these verified Casetify codes to save on every order.',
      tips: 'Bundle a phone case with a screen protector or MagSafe wallet to unlock automatic multi-item savings.',
      art: { style: 'casetify' },
      offers: [
        { shortTitle: '25% OFF', title: '25% OFF Custom Impact & Bounce Cases', verified: 'Verified 1 Day Ago | 1.9k uses today', masked: 'Case*******', code: 'CASE25VIP' },
        { shortTitle: 'BUY 2', title: 'Buy 2 Get 1 Free Accessories Promo', verified: 'Verified 2 Days Ago | 980 uses today', masked: 'B2G1*******', code: 'CASETIFYB2G1' }
      ]
    },
    {
      slug: 'skims-free-discount-codes',
      brand: 'Skims',
      title: 'Skims Free Discount Codes',
      category: 'PROMO',
      ratings: 1734,
      couponsLeft: 196,
      isTop: true,
      isTrending: true,
      description: 'Save on Soft Lounge dresses, shapewear, and everyday bodysuits.',
      about: 'Skims offers solutions-oriented shapewear, loungewear, and essentials designed for every body. Grab a verified Skims discount code to save on your next haul.',
      tips: 'Shop Skims multi-packs and apply a verified promo code at checkout for free standard shipping.',
      art: { style: 'skims' },
      offers: [
        { shortTitle: '30% OFF', title: '30% OFF Skims Loungewear & Shapewear', verified: 'Verified 1 Day Ago | 1.3k uses today', masked: 'Skim*******', code: 'SKIMS30NOW' },
        { shortTitle: '$35 OFF', title: '$35 OFF Orders Over $100', verified: 'Verified 2 Days Ago | 760 uses today', masked: 'Soft*******', code: 'SKIMS35VIP' }
      ]
    },
    {
      slug: 'spotify-premium-coupon-code',
      brand: 'Spotify',
      title: 'Spotify Premium Coupon Code',
      category: 'FREE',
      ratings: 6210,
      couponsLeft: 312,
      isTop: true,
      isTrending: true,
      description: 'Enjoy ad-free music, offline downloads, and podcasts with a Spotify Premium code.',
      about: 'Spotify Premium unlocks unlimited ad-free streaming, high-quality audio, and offline listening across all devices. Redeem a verified coupon code for extended free months.',
      tips: 'Redeem your code via the Spotify web account page so the promotional months apply immediately.',
      art: { style: 'spotify' },
      offers: [
        { shortTitle: '3 MOS', title: '3 Months FREE Spotify Premium Individual', verified: 'Verified 1 Day Ago | 2.8k uses today', masked: 'Spot*******', code: 'SPOTIFY3FREE' },
        { shortTitle: '50% OFF', title: '50% OFF Annual Premium Upgrade', verified: 'Verified 1 Day Ago | 1.2k uses today', masked: 'Play*******', code: 'SPOT50YEAR' }
      ]
    },
    {
      slug: 'chatgpt-plus-free-subscription',
      brand: 'ChatGPT Plus',
      title: 'Chatgpt Plus FREE Subscription',
      category: 'FREE',
      ratings: 8420,
      couponsLeft: 148,
      isTop: true,
      isTrending: true,
      description: 'Unlock priority access, faster responses, and advanced AI tools with verified promo codes.',
      about: 'ChatGPT Plus gives you priority access to the newest AI models, image creation, file analysis, and faster response speeds. Claim a verified promo credit while supplies last.',
      tips: 'Apply promotional credits in your Billing settings before your next monthly renewal date.',
      art: { style: 'chatgpt' },
      offers: [
        { shortTitle: '1 MO FREE', title: '1 Month FREE ChatGPT Plus Subscription', verified: 'Verified 1 Day Ago | 3.9k uses today', masked: 'GptP*******', code: 'GPTPLUS1MO' },
        { shortTitle: '$20 OFF', title: '$20 Credit Toward Plus or Team Plan', verified: 'Verified 1 Day Ago | 1.6k uses today', masked: 'Open*******', code: 'AI20CREDIT' }
      ]
    },
    {
      slug: 'crunchyroll-free-subscription-coupon',
      brand: 'Crunchyroll',
      title: 'Crunchyroll Free Subscription Coupon',
      category: 'FREE',
      ratings: 4921,
      couponsLeft: 404,
      isTop: true,
      isTrending: false,
      description: 'Stream thousands of ad-free anime episodes simulcast directly from Japan.',
      about: 'Crunchyroll is the premier destination for anime streaming, simulcasts, and manga. Use our verified Crunchyroll coupon codes for Mega Fan perks and free months.',
      tips: 'Redeem guest passes and promo codes in your Crunchyroll web account before launching the TV app.',
      art: { style: 'crunchyroll' },
      offers: [
        { shortTitle: '60 DAYS', title: '60 Days FREE Crunchyroll Mega Fan', verified: 'Verified 1 Day Ago | 2.2k uses today', masked: 'Crun*******', code: 'CRUNCH60VIP' },
        { shortTitle: '40% OFF', title: '40% OFF Annual Anime Membership', verified: 'Verified 2 Days Ago | 890 uses today', masked: 'Anim*******', code: 'ANIME40OFF' }
      ]
    },
    {
      slug: 'apple-music-free-subscription',
      brand: 'Apple Music',
      title: 'Apple Music Free Subscription',
      category: 'FREE',
      ratings: 3157,
      couponsLeft: 519,
      isTop: true,
      isTrending: false,
      description: 'Get Lossless Audio and Spatial Audio free for up to 3 months on iOS, Android, and Mac.',
      about: 'Apple Music features over 100 million songs ad-free with Spatial Audio and live lyrics. Redeem a verified promo code to enjoy free months of Apple Music.',
      tips: 'Open the Apple Music app and tap Redeem Gift Card or Code to activate your promotional trial.',
      art: { style: 'applemusic' },
      offers: [
        { shortTitle: '3 MOS', title: '3 Months FREE Apple Music Subscription', verified: 'Verified 1 Day Ago | 1.9k uses today', masked: 'Appl*******', code: 'AMUSIC3MOS' },
        { shortTitle: '1 MO FREE', title: '1 Month Free for Returning Subscribers', verified: 'Verified 2 Days Ago | 920 uses today', masked: 'Tune*******', code: 'APPLE1BACK' }
      ]
    },
    {
      slug: 'disney-plus-free-subscription',
      brand: 'Disney+',
      title: 'Disney + Free Subscription',
      category: 'FREE',
      ratings: 4452,
      couponsLeft: 277,
      isTop: true,
      isTrending: true,
      description: 'Watch Disney, Pixar, Marvel, Star Wars, and National Geographic in 4K UHD.',
      about: 'Disney+ brings together blockbuster movies, original series, and timeless classics in one streaming home. Use verified Disney+ codes to unlock free months or bundle savings.',
      tips: 'Check bundle eligibility to combine Disney+ and Hulu at a lower combined monthly rate.',
      art: { style: 'disney' },
      offers: [
        { shortTitle: '2 MOS', title: '2 Months FREE Disney+ Premium No Ads', verified: 'Verified 1 Day Ago | 2.4k uses today', masked: 'Disn*******', code: 'DISNEY2FREE' },
        { shortTitle: '50% OFF', title: '50% OFF Annual Disney+ Subscription', verified: 'Verified 1 Day Ago | 1.1k uses today', masked: 'Plus*******', code: 'DPLUS50YR' }
      ]
    },
    {
      slug: 'the-sims-4-expansion-code',
      brand: 'The Sims 4',
      title: 'The Sims 4 Free Expansion Code',
      category: 'PROMO',
      ratings: 5982,
      couponsLeft: 641,
      isTop: true,
      isTrending: false,
      description: 'Unlock expansion packs, game packs, and stuff packs for PC, Mac, and Console.',
      about: 'Build worlds and tell stories in The Sims 4. Grab verified promo codes for huge discounts on expansion bundles and kits.',
      tips: 'Redeem PC codes directly inside the EA App under Redeem Code for instant library activation.',
      art: { style: 'sims4' },
      offers: [
        { shortTitle: '60% OFF', title: '60% OFF The Sims 4 Expansion Packs', verified: 'Verified 1 Day Ago | 1.6k uses today', masked: 'Sims*******', code: 'SIMS4PACK60' },
        { shortTitle: 'FREE KIT', title: 'Free Bonus Stuff Pack Promo Code', verified: 'Verified 2 Days Ago | 830 uses today', masked: 'Plum*******', code: 'SIMSKITFREE' }
      ]
    },
    {
      slug: 'uber-eats-promo-code',
      brand: 'Uber Eats',
      title: 'Uber Eats Promo Code',
      category: 'PROMO',
      ratings: 385,
      couponsLeft: 931,
      isTop: false,
      isTrending: true,
      description: 'Promo Code can be redeemed on the app',
      about: 'Order from your favorite local restaurants, coffee shops, and grocery stores with fast delivery from Uber Eats. Apply verified codes in the app for instant meal discounts.',
      tips: 'Open Account > Promotions in the Uber Eats app and add your promo code before placing your order.',
      art: { style: 'ubereats' },
      offers: [
        { shortTitle: '$25 OFF', title: '$25 OFF Your Next Uber Eats Delivery Order', verified: 'Verified 1 Day Ago | 2.6k uses today', masked: 'Eats*******', code: 'EATS25NOW' },
        { shortTitle: '40% OFF', title: '40% OFF 2 Orders of $20 or More', verified: 'Verified 1 Day Ago | 1.9k uses today', masked: 'Uber*******', code: 'UBEREATS40' }
      ]
    },
    {
      slug: 'microsoft-rewards-points-code',
      brand: 'Microsoft Rewards',
      title: 'Microsoft Rewards Points Code',
      category: 'FREE',
      ratings: 1582,
      couponsLeft: 86,
      isTop: false,
      isTrending: true,
      description: 'Code can be redeemed To Microsoft Website and App.',
      about: 'Earn and redeem Microsoft Rewards points for Xbox Gift Cards, Game Pass Ultimate, Amazon cards, and more. Claim verified bonus point codes today.',
      tips: 'Sign in to rewards.microsoft.com to apply your bonus code directly to your Microsoft account balance.',
      art: { style: 'msrewards' },
      offers: [
        { shortTitle: '5,000 PTS', title: '5,000 Bonus Microsoft Rewards Points Code', verified: 'Verified 1 Day Ago | 3.2k uses today', masked: 'Msft*******', code: 'MSREWARD5K' },
        { shortTitle: '$10 CARD', title: '$10 Microsoft & Xbox Store Promo Code', verified: 'Verified 1 Day Ago | 1.4k uses today', masked: 'Xbox*******', code: 'MSFT10GIFT' }
      ]
    },
    {
      slug: 'uber-promo-code',
      brand: 'Uber',
      title: 'Uber Promo Code',
      category: 'PROMO',
      ratings: 345,
      couponsLeft: 742,
      isTop: false,
      isTrending: true,
      description: "Sign up with a friend's referral code and get a discount on your next rides.",
      about: 'Get reliable rides anywhere in minutes with Uber. Save on airport trips, daily commutes, and Uber Comfort with verified ride promo codes.',
      tips: 'Add your promo code under Wallet > Promotions in the Uber app prior to requesting a ride.',
      art: { style: 'uber' },
      offers: [
        { shortTitle: '$30 OFF', title: '$30 OFF Your Next Uber Ride', verified: 'Verified 1 Day Ago | 1.7k uses today', masked: 'Ride*******', code: 'UBER30RIDE' },
        { shortTitle: '50% OFF', title: '50% OFF 3 Rides Up to $15 Each', verified: 'Verified 2 Days Ago | 990 uses today', masked: 'GoUb*******', code: 'UBER50TRIP' }
      ]
    },
    {
      slug: 'lyft-coupons-deals',
      brand: 'Lyft',
      title: "Lyft's Coupons & Deals",
      category: 'PROMO',
      ratings: 4892,
      couponsLeft: 942,
      isTop: false,
      isTrending: true,
      description: 'Save up to 50% on your next 2 Lyft rides in participating cities.',
      about: 'Lyft gets you there with friendly rideshare drivers, bikes, and scooters. Apply verified Lyft promo codes in the Rewards tab for instant ride credits.',
      tips: 'Link your Lyft account with airline or hotel partners to earn bonus points on every discounted ride.',
      art: { style: 'lyft' },
      offers: [
        { shortTitle: '50% OFF', title: '50% OFF Your Next 2 Lyft Rides', verified: 'Verified 1 Day Ago | 2.1k uses today', masked: 'Lyft*******', code: 'LYFT50GO' },
        { shortTitle: '$20 OFF', title: '$20 Lyft Ride Credit for Airport Trips', verified: 'Verified 1 Day Ago | 1.0k uses today', masked: 'Pink*******', code: 'LYFT20AIR' }
      ]
    },
    {
      slug: 'airbnb-coupon-codes',
      brand: 'Airbnb',
      title: 'Airbnb Coupon Codes',
      category: 'PROMO',
      ratings: 4673,
      couponsLeft: 1273,
      isTop: false,
      isTrending: true,
      description: 'Save up to $100 on unique vacation rentals, cabins, and city stays worldwide.',
      about: 'Airbnb lets you book unique homes, beach villas, and local experiences around the globe. Use verified Airbnb coupon codes to lower your total booking price.',
      tips: 'Apply your coupon code on the final Confirm and Pay screen; weekly stays also unlock automatic host discounts.',
      art: { style: 'airbnb' },
      offers: [
        { shortTitle: '$100 OFF', title: '$100 OFF Qualifying Airbnb Home Stays', verified: 'Verified 1 Day Ago | 2.5k uses today', masked: 'Airb*******', code: 'AIRBNB100STAY' },
        { shortTitle: '20% OFF', title: '20% OFF Weekend Getaways & Cabins', verified: 'Verified 2 Days Ago | 1.3k uses today', masked: 'Stay*******', code: 'AIR20TRIP' }
      ]
    },
    {
      slug: 'doordash-promo-codes',
      brand: 'DoorDash',
      title: 'DoorDash Promo Codes & Deals',
      category: 'PROMO',
      ratings: 5120,
      couponsLeft: 688,
      isTop: true,
      isTrending: true,
      description: 'Get $0 delivery fees and up to 50% off restaurant & grocery delivery.',
      about: 'DoorDash delivers meals, convenience items, and groceries right to your door. Apply verified DoorDash promo codes at checkout for instant savings.',
      tips: 'Try DashPass free trials alongside promo codes to eliminate service and delivery fees.',
      art: { style: 'doordash' },
      offers: [
        { shortTitle: '50% OFF', title: '50% OFF Your Next DoorDash Order (Up to $20)', verified: 'Verified 1 Day Ago | 3.0k uses today', masked: 'Dash*******', code: 'DASH50EAT' },
        { shortTitle: '$15 OFF', title: '$15 OFF Grocery & Convenience Orders', verified: 'Verified 1 Day Ago | 1.4k uses today', masked: 'Door*******', code: 'DD15FRESH' }
      ]
    },
    {
      slug: 'target-promo-codes',
      brand: 'Target',
      title: "Target's Promo Codes & Deals",
      category: 'DEAL',
      ratings: 3290,
      couponsLeft: 510,
      isTop: true,
      isTrending: true,
      description: 'Save on home decor, electronics, groceries, and everyday essentials with Target Circle.',
      about: 'Target combines style and everyday value across home, tech, beauty, and apparel. Use verified Target promo codes online or with Drive Up pickup.',
      tips: 'Join Target Circle for free to stack automatic category offers with checkout promo codes.',
      art: { style: 'target' },
      offers: [
        { shortTitle: '$25 OFF', title: '$25 OFF Orders Over $100 Sitewide', verified: 'Verified 1 Day Ago | 1.8k uses today', masked: 'Targ*******', code: 'TARGET25NOW' },
        { shortTitle: '20% OFF', title: '20% OFF Home, Bedding & Kitchen Gear', verified: 'Verified 2 Days Ago | 920 uses today', masked: 'Bull*******', code: 'HOME20TGT' }
      ]
    },
    {
      slug: 'sephora-beauty-promo-code',
      brand: 'Sephora',
      title: 'Sephora Free Discount Code',
      category: 'PROMO',
      ratings: 4190,
      couponsLeft: 394,
      isTop: true,
      isTrending: true,
      description: 'Up to 30% off skincare, fragrance, and makeup plus free deluxe samples.',
      about: 'Sephora is the premier beauty destination featuring luxury and clean skincare, makeup, and fragrance brands. Unlock verified Sephora promo codes for instant savings.',
      tips: 'Beauty Insiders can stack free sample bags with select percentage-off promotional codes.',
      art: { bg: '#000000', fg: '#ffffff', accent: '#ffffff', label: 'SEPHORA', sub: 'BEAUTY INSIDER' },
      offers: [
        { shortTitle: '20% OFF', title: '20% OFF Sitewide Beauty & Skincare Event', verified: 'Verified 1 Day Ago | 2.3k uses today', masked: 'Seph*******', code: 'SEPHORA20VIP' },
        { shortTitle: 'FREE GIFT', title: 'Free Deluxe Sample Bag With $35 Order', verified: 'Verified 1 Day Ago | 1.1k uses today', masked: 'Glow*******', code: 'BEAUTYBAG' }
      ]
    },
    {
      slug: 'shein-coupon-codes',
      brand: 'SHEIN',
      title: 'SHEIN Promo Codes & Coupons',
      category: 'PROMO',
      ratings: 6840,
      couponsLeft: 755,
      isTop: true,
      isTrending: true,
      description: 'Extra 25% off trendy fashion, accessories, and home finds with free shipping.',
      about: 'SHEIN brings thousands of daily new arrivals in fashion, beauty, and home decor. Use verified SHEIN coupon codes to take extra savings off already low prices.',
      tips: 'Check in daily on the SHEIN app for bonus points that stack on top of checkout promo codes.',
      art: { bg: '#111111', fg: '#ffffff', accent: '#d839bf', label: 'SHEIN', sub: 'FASHION & HOME' },
      offers: [
        { shortTitle: '25% OFF', title: '25% OFF Orders Over $49 Site-Wide', verified: 'Verified 1 Day Ago | 3.7k uses today', masked: 'Shei*******', code: 'SHEIN25VIP' },
        { shortTitle: 'FREE SHIP', title: 'Free Express Shipping + 15% OFF', verified: 'Verified 1 Day Ago | 2.0k uses today', masked: 'Sh15*******', code: 'SHEIN15SHIP' }
      ]
    },
    {
      slug: 'armored-core-vi-game-code',
      brand: 'Armored Core VI',
      title: 'Armored Core VI Game Code',
      category: 'PROMO',
      ratings: 91,
      couponsLeft: 8211,
      isTop: false,
      isTrending: true,
      description: 'Digital PC Steam & Console discount code for Armored Core VI: Fires of Rubicon.',
      about: 'Experience fast-paced mech combat in Armored Core VI: Fires of Rubicon. Claim verified digital key discount codes for Steam, PlayStation, and Xbox.',
      tips: 'Verify your platform region before redeeming digital store codes.',
      art: { bg: '#1c1f26', fg: '#f4a261', accent: '#e76f51', label: 'ARMORED CORE', sub: 'FIRES OF RUBICON' },
      offers: [
        { shortTitle: '45% OFF', title: '45% OFF Armored Core VI Digital Edition', verified: 'Verified 1 Day Ago | 640 uses today', masked: 'ACVI*******', code: 'RUBICON45' },
        { shortTitle: '$20 OFF', title: '$20 OFF Deluxe Edition Game Code', verified: 'Verified 2 Days Ago | 410 uses today', masked: 'Mech*******', code: 'AC6DELUXE20' }
      ]
    },
    {
      slug: 'starbucks-rewards-promo-code',
      brand: 'Starbucks',
      title: 'Starbucks Free Drink Promo Code',
      category: 'FREE',
      ratings: 2840,
      couponsLeft: 432,
      isTop: false,
      isTrending: true,
      description: 'Get a BOGO handcrafted beverage or bonus Stars in the Starbucks app.',
      about: 'Treat yourself to handcrafted espresso drinks, refreshers, and bakery favorites at Starbucks. Redeem verified codes in the Starbucks app for bonus Stars and drink deals.',
      tips: 'Load your promo code in the Starbucks app before ordering ahead to skip the line.',
      art: { bg: '#00704A', fg: '#ffffff', accent: '#cde8df', label: 'STARBUCKS', sub: 'REWARDS' },
      offers: [
        { shortTitle: 'BOGO', title: 'Buy One Get One Free Handcrafted Drink', verified: 'Verified 1 Day Ago | 2.2k uses today', masked: 'Sbux*******', code: 'SBUXBOGO26' },
        { shortTitle: '150 STARS', title: '150 Bonus Stars on Your Next App Order', verified: 'Verified 1 Day Ago | 1.1k uses today', masked: 'Star*******', code: 'STARS150FREE' }
      ]
    },
    {
      slug: 'adidas-promo-codes',
      brand: 'Adidas',
      title: "Adidas's Coupons & Promo Codes",
      category: 'PROMO',
      ratings: 3115,
      couponsLeft: 590,
      isTop: false,
      isTrending: true,
      description: 'Save up to 40% on Ultraboost, Samba, Gazelle, and athletic apparel.',
      about: 'Adidas blends iconic sportswear heritage with modern performance tech. Apply verified Adidas promo codes for extra savings on footwear and adiClub exclusives.',
      tips: 'Join adiClub for free shipping and early access to limited sneaker drops.',
      art: { bg: '#000000', fg: '#ffffff', accent: '#ffffff', label: 'adidas', sub: 'ORIGINALS' },
      offers: [
        { shortTitle: '35% OFF', title: '35% OFF Full-Price & Sale Footwear', verified: 'Verified 1 Day Ago | 1.9k uses today', masked: 'Adid*******', code: 'ADIDAS35GO' },
        { shortTitle: '$40 OFF', title: '$40 OFF Orders of $120 or More', verified: 'Verified 2 Days Ago | 870 uses today', masked: '3Str*******', code: 'STRIPES40' }
      ]
    }
  ];

  // Attach pre-rendered SVG art URLs
  COUPONS.forEach(function (item) {
    item.image = window.EnjoyArt.makeBrandSvg(item.art);
  });

  window.ENJOY_COUPONS = COUPONS;
})();
