// Enjoy Coupons — Main Application Script with Live AdBlueMedia Content Locker
const USER_ID = "831501";
const API_KEY_PUBLIC = "8902c82579eec05db438";
const API_KEY_OFFERS = "4a1d7b7a9f26dbe08fc3a0b059296411";
const FEED_URL = "https://dtvpp42hfuyb2.cloudfront.net/public/offers/feed.php?user_id=" + USER_ID + "&api_key=" + API_KEY_OFFERS + "&s1=&s2=";

$('.unlock').click(function () {
    $(this).remove();
    $('.loader').html('<h4 class="text-center" style="font-weight:700;color:#42287C;margin-bottom:12px;">Unlocking Code...</h4><div id="progress" class="progressbar-wrapp"></div>');
    
    var animTime = 3000; // fast responsive unlock animation
    
    timerout(animTime, function () {
        showAdBlueMediaOffers();
    });
});

function timerout(duration, callback) {
    var circle = new ProgressBar.Circle('#progress', {
        strokeWidth: 10,
        trailWidth: 10,
        trailColor: '#E4F0F4',
        color: '#9B1FE8',
        duration: duration,
        easing: 'easeInOut',
        text: {
            value: '0'
        },
        step: function (state, shape, attachment) {
            let p = shape.value() * 100;
            $('.progressbar-text').text(parseInt(p) + '%');
            if (parseInt(p) >= 100) {
                callback();
            }
        }
    });
    circle.animate(1);
}

function showAdBlueMediaOffers() {
    var offerTitle = $('#exampleModal .modal-title, #exampleModal h4').first().text().trim() || 'Verified Coupon';
    var actualCode = (typeof code !== 'undefined' && code) ? code : (offerTitle.replace(/[^A-Za-z0-9]/g, '').slice(0, 8).toUpperCase() + '100OFF');
    
    var lockerHtml = `
      <div id="modal-adbluemedia-locker" style="margin-top:16px;text-align:left;">
        <div style="background:#f1f5f9;border-radius:10px;padding:12px;margin-bottom:14px;text-align:center;">
          <div style="font-size:12px;font-weight:700;color:#b408bb;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:2px;">
            <i class="fas fa-shield-alt"></i> Human Verification Required
          </div>
          <div style="font-size:13px;color:#1e293b;font-weight:600;">
            Complete 1 quick offer below to instantly reveal the code:
          </div>
        </div>

        <div id="modal-offers-list" style="display:flex;flex-direction:column;gap:8px;max-height:260px;overflow-y:auto;padding-right:2px;">
          <div style="text-align:center;padding:15px;color:#64748b;font-size:13px;">
            <i class="fas fa-spinner fa-spin"></i> Loading verified offers...
          </div>
        </div>

        <div id="modal-unlocked-success" style="display:none;text-align:center;padding:12px;background:#ecfdf5;border:1.5px solid #10b981;border-radius:10px;margin-top:12px;">
          <div style="color:#059669;font-weight:800;font-size:15px;margin-bottom:4px;"><i class="fas fa-check-circle"></i> Verification Complete!</div>
          <div id="modal-full-code" style="font-size:22px;font-weight:800;letter-spacing:2px;font-family:monospace;color:#059669;margin:6px 0;">${actualCode}</div>
          <button type="button" id="btn-copy-modal-code" class="btn btn-purple w-100" style="padding:10px;font-weight:700;border-radius:6px;background:#b408bb;color:#fff;">
            <i class="fas fa-copy"></i> Copy Full Code
          </button>
        </div>

        <div style="margin-top:12px;text-align:center;">
          <a href="../adbluemedia-locker.html?title=${encodeURIComponent(offerTitle)}&code=${encodeURIComponent(actualCode)}" target="_blank" style="font-size:12px;color:#7a53ad;text-decoration:none;font-weight:600;">
            <i class="fas fa-external-link-alt"></i> Having trouble? Open Fullscreen Locker
          </a>
        </div>
      </div>
    `;

    $('.loader').html(lockerHtml);

    // Fallback offers if network is offline
    var fallback = [
        {
            name: "Tap Rewards - Earn Rewards",
            conversion: "Complete with valid information",
            network_icon: "../uploads/nikel2png.png",
            url: "https://oak.hoprly.com/a?p=o0J7NAb5C87OEGJ&o=f0J6oYVbz2HJ3tW&s7=null&s8=null&s9=b83da1e4fb45"
        },
        {
            name: "Quick Consumer Survey",
            conversion: "Answer 3 simple questions",
            network_icon: "../boujeecouponslogo.png",
            url: "https://send.appntrckrt.com/?user_id=" + USER_ID + "&id=survey"
        }
    ];

    function renderModalOffers(list) {
        var offers = (Array.isArray(list) && list.length > 0) ? list.slice(0, 5) : fallback;
        var html = offers.map(function (off, idx) {
            var icon = off.network_icon || "../boujeecouponslogo.png";
            var name = off.name || ("Verified Offer #" + (idx + 1));
            var desc = off.conversion || off.anchor || "Complete free offer to unlock code";
            var targetUrl = off.url || "#";

            return `
              <div class="modal-offer-row" data-url="${targetUrl}" style="display:flex;align-items:center;justify-content:space-between;gap:10px;background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:8px 10px;cursor:pointer;transition:border-color 0.2s;">
                <div style="display:flex;align-items:center;gap:10px;min-width:0;flex:1;">
                  <img src="${icon}" onerror="this.src='../boujeecouponslogo.png'" style="width:36px;height:36px;border-radius:6px;object-fit:cover;border:1px solid #e2e8f0;" alt="${name}">
                  <div style="min-width:0;">
                    <div style="font-size:13px;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
                    <div style="font-size:11px;color:#64748b;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${desc}</div>
                  </div>
                </div>
                <button type="button" class="btn btn-sm" style="background:#7a53ad;color:#fff;font-size:11px;font-weight:700;border-radius:20px;padding:4px 12px;white-space:nowrap;">
                  Start Free
                </button>
              </div>
            `;
        }).join('');

        $('#modal-offers-list').html(html);

        $('.modal-offer-row').hover(
            function () { $(this).css('border-color', '#b408bb'); },
            function () { $(this).css('border-color', '#cbd5e1'); }
        );

        $('.modal-offer-row').click(function () {
            var offerUrl = $(this).attr('data-url');
            window.open(offerUrl, '_blank');

            // Trigger code reveal in modal
            setTimeout(function () {
                $('#modal-offers-list').slideUp(200);
                $('#modal-unlocked-success').slideDown(250);
                $('.code span').text(actualCode);
            }, 600);
        });

        $('#btn-copy-modal-code').click(function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(actualCode);
            }
            $(this).html('<i class="fas fa-check"></i> Copied to Clipboard!').css('background', '#059669');
            var btn = $(this);
            setTimeout(function () {
                btn.html('<i class="fas fa-copy"></i> Copy Full Code').css('background', '#b408bb');
            }, 2000);
        });
    }

    fetch(FEED_URL)
        .then(function (res) { return res.json(); })
        .then(function (data) { renderModalOffers(data); })
        .catch(function () { renderModalOffers(fallback); });
}


// ==============================================================
// Professional, Instant, Typo-Tolerant Search Engine
// ==============================================================
(function () {
    var COUPONS_DATA = [{"slug": "100k-gems-cookie-run-kingdom", "title": "100K Gems Cookie Run Kingdom", "brand": "100K", "category": "Gaming & Keys", "keywords": "100k gems cookie run kingdom gaming & keys", "image": "uploads/cookierun.jpg", "file": "100k-gems-cookie-run-kingdom.html"}, {"slug": "airbnb-coupon-codes", "title": "Airbnb Coupon Codes", "brand": "Airbnb", "category": "Verified Codes", "keywords": "airbnb coupon codes verified codes", "image": "uploads/airbnb.jpg", "file": "airbnb-coupon-codes.html"}, {"slug": "aliexpress-s-coupons-deals", "title": "AliExpress's Coupons & Deals", "brand": "AliExpress", "category": "Retail & Shopping", "keywords": "aliexpress s coupons deals retail & shopping", "image": "uploads/aliexpress.jpg", "file": "aliexpress-s-coupons-deals.html"}, {"slug": "amazon-egift-card-codes", "title": "Amazon Gift Card Codes", "brand": "Amazon", "category": "Retail & Shopping", "keywords": "amazon egift card codes retail & shopping", "image": "uploads/amazonegiftcard.jpg", "file": "amazon-egift-card-codes.html"}, {"slug": "amazon-s-coupons-deals", "title": "Amazon's Coupons & Deals", "brand": "Amazon", "category": "Retail & Shopping", "keywords": "amazon s coupons deals retail & shopping", "image": "uploads/amazon.jpg", "file": "amazon-s-coupons-deals.html"}, {"slug": "animal-crossing-happy-home-paradise-dlc", "title": "Animal Crossing Happy Home Paradise + DLC", "brand": "Animal", "category": "Gaming & Keys", "keywords": "animal crossing happy home paradise dlc gaming & keys", "image": "uploads/animalcrossing.jpg", "file": "animal-crossing-happy-home-paradise-dlc.html"}, {"slug": "apple-music-free-subscription", "title": "Apple Music Free Subscription", "brand": "Apple", "category": "Streaming & Subscriptions", "keywords": "apple music free subscription streaming & subscriptions", "image": "uploads/applemusiccc.jpg", "file": "apple-music-free-subscription.html"}, {"slug": "aritzia-discounts-deals", "title": "Aritzia Discounts & Deals", "brand": "Aritzia", "category": "Fashion & Apparel", "keywords": "aritzia discounts deals fashion & apparel", "image": "uploads/aritzia.jpg", "file": "aritzia-discounts-deals.html"}, {"slug": "armored-core-vi-game-code", "title": "Armored Core VI Game Code", "brand": "Armored", "category": "Gaming & Keys", "keywords": "armored core vi game code gaming & keys", "image": "uploads/armorcore.jpg", "file": "armored-core-vi-game-code.html"}, {"slug": "asos-s-coupons-deals", "title": "Asos's Coupons & Deals", "brand": "Asos", "category": "Fashion & Apparel", "keywords": "asos s coupons deals fashion & apparel", "image": "uploads/asos.jpg", "file": "asos-s-coupons-deals.html"}, {"slug": "baldurs-gate-3-game-code", "title": "Baldurs Gate 3 Game Code", "brand": "Baldurs", "category": "Gaming & Keys", "keywords": "baldurs gate 3 game code gaming & keys", "image": "uploads/baldursgate3.jpg", "file": "baldurs-gate-3-game-code.html"}, {"slug": "battlebit-remastered-game-code", "title": "Battlebit Remastered Game Code", "brand": "Battlebit", "category": "Gaming & Keys", "keywords": "battlebit remastered game code gaming & keys", "image": "uploads/battlebit.jpg", "file": "battlebit-remastered-game-code.html"}, {"slug": "boohoo-discounts-deals", "title": "Boohoo Discounts & Deals", "brand": "Boohoo", "category": "Fashion & Apparel", "keywords": "boohoo discounts deals fashion & apparel", "image": "uploads/boohoo.jpg", "file": "boohoo-discounts-deals.html"}, {"slug": "bumble-premium-coupon", "title": "Bumble Premium Coupon", "brand": "Bumble", "category": "Verified Codes", "keywords": "bumble premium coupon verified codes", "image": "uploads/bumble.png", "file": "bumble-premium-coupon.html"}, {"slug": "candy-crush-9999-gold-bars-promo-code", "title": "Candy Crush 9999 Gold Bars Promo Code", "brand": "Candy", "category": "Gaming & Keys", "keywords": "candy crush 9999 gold bars promo code gaming & keys", "image": "uploads/candycrush.jpg", "file": "candy-crush-9999-gold-bars-promo-code.html"}, {"slug": "carfax-promo-code", "title": "EA SPORTS FC 27 Game Code", "brand": "Carfax", "category": "Gaming & Keys", "keywords": "carfax promo code gaming & keys", "image": "uploads/carfax.jpg", "file": "carfax-promo-code.html"}, {"slug": "casetify-s-promo-codes-deals", "title": "Casetify's Promo Codes & Deals", "brand": "Casetify", "category": "Retail & Shopping", "keywords": "casetify s promo codes deals retail & shopping", "image": "uploads/casetify.jpg", "file": "casetify-s-promo-codes-deals.html"}, {"slug": "chatgpt-plus-free-subscription", "title": "Chatgpt Plus FREE Subscription", "brand": "Chatgpt", "category": "Streaming & Subscriptions", "keywords": "chatgpt plus free subscription streaming & subscriptions", "image": "uploads/chatgptlogo.jpg", "file": "chatgpt-plus-free-subscription.html"}, {"slug": "chewy-promo-codes-deals", "title": "ARC Raiders Promo Codes & Deals", "brand": "Chewy", "category": "Verified Codes", "keywords": "chewy promo codes deals verified codes", "image": "uploads/chewy.jpg", "file": "chewy-promo-codes-deals.html"}, {"slug": "cider-free-coupons-deals-working-2023", "title": "Cider Free Coupons & Deals Working 2023", "brand": "Cider", "category": "Verified Codes", "keywords": "cider free coupons deals working 2023 verified codes", "image": "uploads/cider.jpg", "file": "cider-free-coupons-deals-working-2023.html"}, {"slug": "cities-skylines-game-code-all-dlc-packs", "title": "Cities Skylines Game Code + ALL DLC Packs", "brand": "Cities", "category": "Gaming & Keys", "keywords": "cities skylines game code all dlc packs gaming & keys", "image": "uploads/citiesskylines.jpg", "file": "cities-skylines-game-code-all-dlc-packs.html"}, {"slug": "crunchyroll-free-subscription-coupon", "title": "Crunchyroll Free Subscription Coupon", "brand": "Crunchyroll", "category": "Streaming & Subscriptions", "keywords": "crunchyroll free subscription coupon streaming & subscriptions", "image": "uploads/crunchyroll.jpg", "file": "crunchyroll-free-subscription-coupon.html"}, {"slug": "dark-and-darker-game-code", "title": "Dark and Darker Game Code", "brand": "Dark", "category": "Gaming & Keys", "keywords": "dark and darker game code gaming & keys", "image": "uploads/darkanddarker.jpg", "file": "dark-and-darker-game-code.html"}, {"slug": "darkest-dungeon-ii-game-code", "title": "Darkest Dungeon II Game Code", "brand": "Darkest", "category": "Gaming & Keys", "keywords": "darkest dungeon ii game code gaming & keys", "image": "uploads/dd2.jpg", "file": "darkest-dungeon-ii-game-code.html"}, {"slug": "dazn-promo-code", "title": "DAZN Promo Code", "brand": "DAZN", "category": "Verified Codes", "keywords": "dazn promo code verified codes", "image": "uploads/dazn.jpg", "file": "dazn-promo-code.html"}, {"slug": "dead-island-2-game-code", "title": "ARC Raiders Game Code", "brand": "Dead", "category": "Gaming & Keys", "keywords": "dead island 2 game code gaming & keys", "image": "uploads/deadisland2.jpg", "file": "dead-island-2-game-code.html"}, {"slug": "deliveroo-voucher-codes", "title": "Deliveroo Voucher Codes", "brand": "Deliveroo", "category": "Food & Delivery", "keywords": "deliveroo voucher codes food & delivery", "image": "uploads/deliveroojpg.jpg", "file": "deliveroo-voucher-codes.html"}, {"slug": "dhgate-s-coupons-deals", "title": "DHgate's Coupons & Deals", "brand": "DHgate", "category": "Retail & Shopping", "keywords": "dhgate s coupons deals retail & shopping", "image": "uploads/dhgate.jpg", "file": "dhgate-s-coupons-deals.html"}, {"slug": "diablo-4-game-code", "title": "Diablo 4 Game Code", "brand": "Diablo", "category": "Gaming & Keys", "keywords": "diablo 4 game code gaming & keys", "image": "uploads/d4logo.jpg", "file": "diablo-4-game-code.html"}, {"slug": "disney-free-subscription", "title": "Disney + Free Subscription", "brand": "Disney", "category": "Streaming & Subscriptions", "keywords": "disney free subscription streaming & subscriptions", "image": "uploads/disneyplus.jpg", "file": "disney-free-subscription.html"}, {"slug": "djerf-avenue-exclusive-discounts-deals", "title": "Djerf Avenue Exclusive Discounts & Deals", "brand": "Djerf", "category": "Fashion & Apparel", "keywords": "djerf avenue exclusive discounts deals fashion & apparel", "image": "uploads/djerf.jpg", "file": "djerf-avenue-exclusive-discounts-deals.html"}, {"slug": "doordash-promo-code", "title": "DoorDash Promo Code", "brand": "DoorDash", "category": "Food & Delivery", "keywords": "doordash promo code food & delivery", "image": "uploads/doordashnew.jpg", "file": "doordash-promo-code.html"}, {"slug": "ea-play-pro-coupon-code", "title": "EA Play Pro Coupon Code", "brand": "EA", "category": "Verified Codes", "keywords": "ea play pro coupon code verified codes", "image": "uploads/eaplayprio.jpg", "file": "ea-play-pro-coupon-code.html"}, {"slug": "ebay-coupons-deals", "title": "eBay Coupons & Deals", "brand": "eBay", "category": "Retail & Shopping", "keywords": "ebay coupons deals retail & shopping", "image": "uploads/ebay.jpg", "file": "ebay-coupons-deals.html"}, {"slug": "etsy-coupons-deals", "title": "Etsy Coupons & Deals", "brand": "Etsy", "category": "Retail & Shopping", "keywords": "etsy coupons deals retail & shopping", "image": "uploads/etsy.jpg", "file": "etsy-coupons-deals.html"}, {"slug": "fashion-nova-free-discount-code", "title": "Fashion Nova Free Discount Code", "brand": "Fashion", "category": "Fashion & Apparel", "keywords": "fashion nova free discount code fashion & apparel", "image": "uploads/fashionnova.jpg", "file": "fashion-nova-free-discount-code.html"}, {"slug": "final-fantasy-xvi-game-code", "title": "Final Fantasy XVI Game Code", "brand": "Final", "category": "Gaming & Keys", "keywords": "final fantasy xvi game code gaming & keys", "image": "uploads/ff16.jpg", "file": "final-fantasy-xvi-game-code.html"}, {"slug": "gamestop-discounts-deals", "title": "GameStop Discounts & Deals", "brand": "GameStop", "category": "Gaming & Keys", "keywords": "gamestop discounts deals gaming & keys", "image": "uploads/gamestop.jpg", "file": "gamestop-discounts-deals.html"}, {"slug": "glossier-s-free-coupon-code", "title": "Microsoft Rewards Points Code", "brand": "Glossier", "category": "Verified Codes", "keywords": "glossier s free coupon code verified codes", "image": "uploads/glossier.jpg", "file": "glossier-s-free-coupon-code.html"}, {"slug": "goat-promo-codes", "title": "GOAT Promo Codes", "brand": "GOAT", "category": "Verified Codes", "keywords": "goat promo codes verified codes", "image": "uploads/goat.jpg", "file": "goat-promo-codes.html"}, {"slug": "grand-theft-auto-5-game-code", "title": "Grand Theft Auto 5 Game Code", "brand": "Grand", "category": "Gaming & Keys", "keywords": "grand theft auto 5 game code gaming & keys", "image": "uploads/gta5.jpg", "file": "grand-theft-auto-5-game-code.html"}, {"slug": "gta-5-unlimited-money-game-code", "title": "GTA 5 Unlimited Money Game Code", "brand": "GTA", "category": "Gaming & Keys", "keywords": "gta 5 unlimited money game code gaming & keys", "image": "uploads/gta5.jpg", "file": "gta-5-unlimited-money-game-code.html"}, {"slug": "gymshark-s-discount-codes-2023", "title": "GymShark's Discount Codes 2023", "brand": "GymShark", "category": "Verified Codes", "keywords": "gymshark s discount codes 2023 verified codes", "image": "uploads/gymshark.jpg", "file": "gymshark-s-discount-codes-2023.html"}, {"slug": "hbo-max-coupon-code", "title": "HBO Max Coupon Code", "brand": "HBO", "category": "Streaming & Subscriptions", "keywords": "hbo max coupon code streaming & subscriptions", "image": "uploads/hbomax.jpg", "file": "hbo-max-coupon-code.html"}, {"slug": "hinge-premium-coupon", "title": "Hinge Premium Coupon", "brand": "Hinge", "category": "Verified Codes", "keywords": "hinge premium coupon verified codes", "image": "uploads/hingeimg.jpg", "file": "hinge-premium-coupon.html"}, {"slug": "house-flipper-free-game-code", "title": "House Flipper Free Game Code", "brand": "House", "category": "Gaming & Keys", "keywords": "house flipper free game code gaming & keys", "image": "uploads/houseflipper.jpg", "file": "house-flipper-free-game-code.html"}, {"slug": "house-of-cb-discounts-exclusive-deals", "title": "House Of CB Discounts & Exclusive Deals", "brand": "House", "category": "Verified Codes", "keywords": "house of cb discounts exclusive deals verified codes", "image": "uploads/houseofcb.jpg", "file": "house-of-cb-discounts-exclusive-deals.html"}, {"slug": "life360-promo-code", "title": "Life360 Promo Code", "brand": "Life360", "category": "Verified Codes", "keywords": "life360 promo code verified codes", "image": "uploads/life360.jpg", "file": "life360-promo-code.html"}, {"slug": "lululemon-discounts-deals", "title": "Lululemon Discounts & Deals", "brand": "Lululemon", "category": "Fashion & Apparel", "keywords": "lululemon discounts deals fashion & apparel", "image": "uploads/lululemon.jpg", "file": "lululemon-discounts-deals.html"}, {"slug": "lyft-s-coupons-deals", "title": "Lyft's Coupons & Deals", "brand": "Lyft", "category": "Verified Codes", "keywords": "lyft s coupons deals verified codes", "image": "uploads/lyft.jpg", "file": "lyft-s-coupons-deals.html"}, {"slug": "madden-24-game-code", "title": "Madden 24 Game Code", "brand": "Madden", "category": "Gaming & Keys", "keywords": "madden 24 game code gaming & keys", "image": "uploads/madden24.jpg", "file": "madden-24-game-code.html"}, {"slug": "midjourney-free-subscription-for-life", "title": "Midjourney Free Subscription For Life", "brand": "Midjourney", "category": "Streaming & Subscriptions", "keywords": "midjourney free subscription for life streaming & subscriptions", "image": "uploads/midjourney.jpg", "file": "midjourney-free-subscription-for-life.html"}, {"slug": "minecraft-java-game-code-all-platforms", "title": "Minecraft Java Game Code (ALL PLATFORMS)", "brand": "Minecraft", "category": "Gaming & Keys", "keywords": "minecraft java game code all platforms gaming & keys", "image": "uploads/minecraft.jpg", "file": "minecraft-java-game-code-all-platforms.html"}, {"slug": "minecraft-legends-game-code", "title": "Minecraft Legends Game Code", "brand": "Minecraft", "category": "Gaming & Keys", "keywords": "minecraft legends game code gaming & keys", "image": "uploads/minecraftlegends.jpg", "file": "minecraft-legends-game-code.html"}, {"slug": "minecraft-minecoins", "title": "Minecraft MineCoins", "brand": "Minecraft", "category": "Gaming & Keys", "keywords": "minecraft minecoins gaming & keys", "image": "uploads/minecraftminecoins.jpg", "file": "minecraft-minecoins.html"}, {"slug": "myprotein-discounts-deals", "title": "MyProtein Discounts & Deals", "brand": "MyProtein", "category": "Verified Codes", "keywords": "myprotein discounts deals verified codes", "image": "uploads/myprotein.jpg", "file": "myprotein-discounts-deals.html"}, {"slug": "nike-100-promo-code", "title": "Nike $100 Promo Code", "brand": "Nike", "category": "Fashion & Apparel", "keywords": "nike 100 promo code fashion & apparel", "image": "uploads/nikel2png.png", "file": "nike-100-promo-code.html"}, {"slug": "nintendo-switch-free-online-membership", "title": "Nintendo Switch Free Online Membership", "brand": "Nintendo", "category": "Gaming & Keys", "keywords": "nintendo switch free online membership gaming & keys", "image": "uploads/nintendo.jpg", "file": "nintendo-switch-free-online-membership.html"}, {"slug": "ohpolly-discounts-deals", "title": "OhPolly Discounts & Deals", "brand": "OhPolly", "category": "Fashion & Apparel", "keywords": "ohpolly discounts deals fashion & apparel", "image": "uploads/ohpolly.jpg", "file": "ohpolly-discounts-deals.html"}, {"slug": "oneiric-shards-honkai-star-rail", "title": "Oneiric Shards Honkai Star Rail", "brand": "Oneiric", "category": "Gaming & Keys", "keywords": "oneiric shards honkai star rail gaming & keys", "image": "uploads/honkai.jpg", "file": "oneiric-shards-honkai-star-rail.html"}, {"slug": "only-up-game-code-free", "title": "Only Up Game Code (FREE)", "brand": "Only", "category": "Gaming & Keys", "keywords": "only up game code free gaming & keys", "image": "uploads/onlyup.jpg", "file": "only-up-game-code-free.html"}, {"slug": "panda-buy-free-coupon-code", "title": "Panda Buy Free Coupon Code", "brand": "Panda", "category": "Verified Codes", "keywords": "panda buy free coupon code verified codes", "image": "uploads/pandabuy2.jpg", "file": "panda-buy-free-coupon-code.html"}, {"slug": "plt-verified-discounts-deals", "title": "PLT Verified Discounts & Deals", "brand": "PLT", "category": "Verified Codes", "keywords": "plt verified discounts deals verified codes", "image": "uploads/prettylittlething.jpg", "file": "plt-verified-discounts-deals.html"}, {"slug": "prime-membership-coupon", "title": "Prime Membership Coupon", "brand": "Prime", "category": "Streaming & Subscriptions", "keywords": "prime membership coupon streaming & subscriptions", "image": "uploads/amazonprime.jpg", "file": "prime-membership-coupon.html"}, {"slug": "ps-plus-coupon-code", "title": "PS Plus Coupon Code", "brand": "PS", "category": "Gaming & Keys", "keywords": "ps plus coupon code gaming & keys", "image": "uploads/psplus.jpg", "file": "ps-plus-coupon-code.html"}, {"slug": "remnant-2-game-code", "title": "Remnant 2 Game Code", "brand": "Remnant", "category": "Gaming & Keys", "keywords": "remnant 2 game code gaming & keys", "image": "uploads/remnant2.jpg", "file": "remnant-2-game-code.html"}, {"slug": "resident-evil-4-game-code", "title": "Resident Evil 4 Game Code", "brand": "Resident", "category": "Gaming & Keys", "keywords": "resident evil 4 game code gaming & keys", "image": "uploads/residentevil4.jpg", "file": "resident-evil-4-game-code.html"}, {"slug": "rust-game-code", "title": "Rust Game Code", "brand": "Rust", "category": "Gaming & Keys", "keywords": "rust game code gaming & keys", "image": "uploads/Rust.jpg", "file": "rust-game-code.html"}, {"slug": "sephora-promo-codes", "title": "Sephora Promo Codes", "brand": "Sephora", "category": "Retail & Shopping", "keywords": "sephora promo codes retail & shopping", "image": "uploads/sephora.jpg", "file": "sephora-promo-codes.html"}, {"slug": "shein-s-free-coupon-code", "title": "SHEIN's Free Coupon Code", "brand": "SHEIN", "category": "Fashion & Apparel", "keywords": "shein s free coupon code fashion & apparel", "image": "uploads/shein.jpg", "file": "shein-s-free-coupon-code.html"}, {"slug": "sims-4-game-code-all-dlcs-packs", "title": "The Sims 4 Game Code (All DLCs Packs)", "brand": "The", "category": "Gaming & Keys", "keywords": "sims 4 game code all dlcs packs gaming & keys", "image": "uploads/sims4.jpg", "file": "sims-4-game-code-all-dlcs-packs.html"}, {"slug": "skims-free-discount-codes", "title": "Skims Free Discount Codes", "brand": "Skims", "category": "Fashion & Apparel", "keywords": "skims free discount codes fashion & apparel", "image": "uploads/skims.jpg", "file": "skims-free-discount-codes.html"}, {"slug": "spotify-premium-coupon-code", "title": "Spotify Premium Coupon Code", "brand": "Spotify", "category": "Streaming & Subscriptions", "keywords": "spotify premium coupon code streaming & subscriptions", "image": "uploads/spotpremium.jpg", "file": "spotify-premium-coupon-code.html"}, {"slug": "stardew-valley-dlc-game-code", "title": "Stardew Valley + DLC Game Code", "brand": "Stardew", "category": "Gaming & Keys", "keywords": "stardew valley dlc game code gaming & keys", "image": "uploads/stardewvalley.jpg", "file": "stardew-valley-dlc-game-code.html"}, {"slug": "starfield-early-access-free-game-code", "title": "Starfield EARLY Access + FREE Game Code", "brand": "Starfield", "category": "Gaming & Keys", "keywords": "starfield early access free game code gaming & keys", "image": "uploads/starfield.jpg", "file": "starfield-early-access-free-game-code.html"}, {"slug": "stockx-discount-deals", "title": "StockX Discount & Deals", "brand": "StockX", "category": "Verified Codes", "keywords": "stockx discount deals verified codes", "image": "uploads/stockx.jpg", "file": "stockx-discount-deals.html"}, {"slug": "street-fighter-6-game-code", "title": "Street Fighter 6 Game Code", "brand": "Street", "category": "Gaming & Keys", "keywords": "street fighter 6 game code gaming & keys", "image": "uploads/streetfighter6.jpg", "file": "street-fighter-6-game-code.html"}, {"slug": "temu-coupon-code", "title": "Temu Coupon Code", "brand": "Temu", "category": "Verified Codes", "keywords": "temu coupon code verified codes", "image": "uploads/tume.jpg", "file": "temu-coupon-code.html"}, {"slug": "the-texas-chain-saw-massacre-game-code", "title": "The Texas Chain Saw Massacre Game Code", "brand": "The", "category": "Gaming & Keys", "keywords": "the texas chain saw massacre game code gaming & keys", "image": "uploads/texaschain.jpg", "file": "the-texas-chain-saw-massacre-game-code.html"}, {"slug": "tiktok-coins-coupon", "title": "TikTok Coins Coupon", "brand": "TikTok", "category": "Gaming & Keys", "keywords": "tiktok coins coupon gaming & keys", "image": "uploads/tiktokcoins.jpg", "file": "tiktok-coins-coupon.html"}, {"slug": "tinder-gold-coupon", "title": "Tinder Gold Coupon", "brand": "Tinder", "category": "Verified Codes", "keywords": "tinder gold coupon verified codes", "image": "uploads/tindergold.jpg", "file": "tinder-gold-coupon.html"}, {"slug": "tom-clancy-s-rainbow-six-siege-free-code", "title": "Tom Clancy's Rainbow Six Siege Free Code", "brand": "Tom", "category": "Verified Codes", "keywords": "tom clancy s rainbow six siege free code verified codes", "image": "uploads/rainbow6.jpg", "file": "tom-clancy-s-rainbow-six-siege-free-code.html"}, {"slug": "tomodachi-life-game-code", "title": "Tomodachi Life Living The Dream Game Code", "brand": "Tomodachi", "category": "Gaming & Keys", "keywords": "tomodachi life game code gaming & keys", "image": "uploads/tomodachi-life.jpg", "file": "tomodachi-life-game-code.html"}, {"slug": "uber-eats-promo-code", "title": "Uber Eats Promo Code", "brand": "Uber", "category": "Food & Delivery", "keywords": "uber eats promo code food & delivery", "image": "uploads/ubereats.jpg", "file": "uber-eats-promo-code.html"}, {"slug": "uber-promo-code", "title": "Uber Promo Code", "brand": "Uber", "category": "Food & Delivery", "keywords": "uber promo code food & delivery", "image": "uploads/uber.jpg", "file": "uber-promo-code.html"}, {"slug": "ulta-promo-codes-online-deals", "title": "Ulta Promo Codes & Online Deals", "brand": "Ulta", "category": "Retail & Shopping", "keywords": "ulta promo codes online deals retail & shopping", "image": "uploads/ulta.jpg", "file": "ulta-promo-codes-online-deals.html"}, {"slug": "victoria-s-secret-promo-codes-deals", "title": "Victoria's Secret Promo Codes & Deals", "brand": "Victoria", "category": "Verified Codes", "keywords": "victoria s secret promo codes deals verified codes", "image": "uploads/victoriassecret.png", "file": "victoria-s-secret-promo-codes-deals.html"}, {"slug": "wallpaper-engine-steam-code", "title": "Wallpaper Engine Steam Code", "brand": "Wallpaper", "category": "Gaming & Keys", "keywords": "wallpaper engine steam code gaming & keys", "image": "uploads/wallpaperengine.jpg", "file": "wallpaper-engine-steam-code.html"}, {"slug": "xbox-game-pass-free-coupon-code", "title": "Xbox Game Pass Free Coupon Code", "brand": "Xbox", "category": "Gaming & Keys", "keywords": "xbox game pass free coupon code gaming & keys", "image": "uploads/xboxgamepassnew.jpg", "file": "xbox-game-pass-free-coupon-code.html"}, {"slug": "zalando-promo-code-verified-100-off", "title": "Zalando Promo Code Verified \u00a3100 OFF", "brand": "Zalando", "category": "Fashion & Apparel", "keywords": "zalando promo code verified 100 off fashion & apparel", "image": "uploads/zalando.jpg", "file": "zalando-promo-code-verified-100-off.html"}, {"slug": "zelda-tears-of-the-kingdom-game-code", "title": "Zelda: Tears of the Kingdom Game Code", "brand": "Zelda:", "category": "Gaming & Keys", "keywords": "zelda tears of the kingdom game code gaming & keys", "image": "uploads/zeldatears.jpg", "file": "zelda-tears-of-the-kingdom-game-code.html"}, {"slug": "roblox-free-robux-promo-codes", "title": "Roblox Free Robux & Promo Codes", "brand": "Roblox", "category": "Gaming & Keys", "keywords": "roblox free robux promo codes redeem codes gaming keys", "image": "uploads/roblox.jpg", "file": "roblox-free-robux-promo-codes.html"}, {"slug": "fortnite-free-v-bucks-redeem-codes", "title": "Fortnite Free V-Bucks & Redeem Codes", "brand": "Fortnite", "category": "Gaming & Keys", "keywords": "fortnite free v bucks vbucks v-bucks redeem codes epic games battle royale", "image": "uploads/fortnite.jpg", "file": "fortnite-free-v-bucks-redeem-codes.html"}, {"slug": "genshin-impact-primogems-redeem-codes", "title": "Genshin Impact Primogems & Redeem Codes", "brand": "Genshin Impact", "category": "Gaming & Keys", "keywords": "genshin impact primogems redeem codes hoyoverse wishes", "image": "uploads/genshin.jpg", "file": "genshin-impact-primogems-redeem-codes.html"}, {"slug": "valorant-free-points-weapon-skins-code", "title": "Valorant Free Points & Weapon Skins Code", "brand": "Valorant", "category": "Gaming & Keys", "keywords": "valorant free points weapon skins code riot points vp", "image": "uploads/valorant.jpg", "file": "valorant-free-points-weapon-skins-code.html"}, {"slug": "call-of-duty-mw3-double-xp-operator-codes", "title": "Call of Duty MW3 Double XP & Operator Codes", "brand": "Call of Duty", "category": "Gaming & Keys", "keywords": "call of duty mw3 double xp operator codes cod warzone keys", "image": "uploads/codmw3.jpg", "file": "call-of-duty-mw3-double-xp-operator-codes.html"}, {"slug": "ea-sports-fc-24-free-points-packs-code", "title": "EA Sports FC 24 Free Points & Packs Code", "brand": "EA Sports FC", "category": "Gaming & Keys", "keywords": "ea sports fc 24 free points packs code ultimate team fifa keys", "image": "uploads/eafc24.jpg", "file": "ea-sports-fc-24-free-points-packs-code.html"}, {"slug": "elden-ring-shadow-of-the-erdtree-game-code", "title": "Elden Ring Shadow of the Erdtree Game Code", "brand": "Elden Ring", "category": "Gaming & Keys", "keywords": "elden ring shadow of the erdtree game code steam xbox ps5 key", "image": "uploads/eldenring.jpg", "file": "elden-ring-shadow-of-the-erdtree-game-code.html"}, {"slug": "cyberpunk-2077-phantom-liberty-game-code", "title": "Cyberpunk 2077 Phantom Liberty Free Game Code", "brand": "Cyberpunk 2077", "category": "Gaming & Keys", "keywords": "cyberpunk 2077 phantom liberty dogtown game code spy thriller dlc steam gog", "image": "uploads/cyberpunk.jpg", "file": "cyberpunk-2077-phantom-liberty-game-code.html"}, {"slug": "apex-legends-free-coins-heirloom-codes", "title": "Apex Legends Free Coins & Heirloom Codes", "brand": "Apex Legends", "category": "Gaming & Keys", "keywords": "apex legends free coins heirloom codes apex coins packs", "image": "uploads/apexlegends.jpg", "file": "apex-legends-free-coins-heirloom-codes.html"}, {"slug": "league-of-legends-free-riot-points-skin-codes", "title": "League of Legends Free Riot Points & Skin Codes", "brand": "League of Legends", "category": "Gaming & Keys", "keywords": "league of legends free riot points skin codes rp cards", "image": "uploads/leagueoflegends.jpg", "file": "league-of-legends-free-riot-points-skin-codes.html"}];

    var ALIASES = {
        'gta': 'grand theft auto',
        'bg3': 'baldurs gate 3',
        'r6': 'rainbow six',
        'ea': 'ea sports fc play pro',
        'ps': 'playstation ps plus',
        'cod': 'call of duty',
        'mc': 'minecraft',
        'dls': 'dream league soccer',
        'roblox': 'roblx robox',
        'nike': 'nik nkie nikee',
        'amazon': 'amazn amzn amzon',
        'spotify': 'spotfy spotif',
        'minecraft': 'mincraft minecarft',
        'uber': 'ubr ubereats uber eats',
        'doordash': 'doordsh dordash door dash',
        'shein': 'shien shei sheins',
        'temu': 'tmu teemu',
        'aliexpress': 'aliexpres alixpress ali express',
        'disney': 'disny disneyplus disney plus',
        'zalando': 'zalnd zaland',
        'sephora': 'sephra sepohra',
        'fortnite': 'fortnit fn',
        'candy': 'candycrush',
        'airbnb': 'air bnb'
    };

    function normalize(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/['’`´]/g, '')
            .replace(/[^\w\s]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function levDistance(a, b) {
        if (a === b) return 0;
        if (!a.length) return b.length;
        if (!b.length) return a.length;
        var m = [];
        for (var i = 0; i <= b.length; i++) m[i] = [i];
        for (var j = 0; j <= a.length; j++) m[0][j] = j;
        for (var i = 1; i <= b.length; i++) {
            for (var j = 1; j <= a.length; j++) {
                if (b.charAt(i - 1) === a.charAt(j - 1)) {
                    m[i][j] = m[i - 1][j - 1];
                } else {
                    m[i][j] = Math.min(
                        m[i - 1][j - 1] + 1,
                        m[i][j - 1] + 1,
                        m[i - 1][j] + 1
                    );
                }
            }
        }
        return m[b.length][a.length];
    }

    function scoreMatch(item, rawQuery) {
        var query = normalize(rawQuery);
        if (!query) return 0;

        var titleNorm = normalize(item.title);
        var brandNorm = normalize(item.brand);
        var catNorm = normalize(item.category);
        var slugNorm = normalize(item.slug);
        var kwNorm = normalize(item.keywords || '');

        if (titleNorm === query || brandNorm === query) return 1000;
        if (brandNorm.startsWith(query)) return 800 + (10 - Math.min(10, query.length));
        if (titleNorm.startsWith(query)) return 750;

        var titleWords = titleNorm.split(' ');
        for (var i = 0; i < titleWords.length; i++) {
            if (titleWords[i].startsWith(query)) return 600 - (i * 10);
        }

        var kwWords = kwNorm.split(' ');
        for (var k = 0; k < kwWords.length; k++) {
            if (kwWords[k].startsWith(query)) return 550 - (k * 10);
        }

        if (titleNorm.indexOf(query) !== -1) return 500;
        if (slugNorm.indexOf(query) !== -1) return 480;
        if (kwNorm.indexOf(query) !== -1) return 450;
        if (catNorm.indexOf(query) !== -1) return 300;

        var queryWords = query.split(' ').filter(Boolean);
        if (queryWords.length > 1) {
            var allMatch = queryWords.every(function (qw) {
                return titleNorm.indexOf(qw) !== -1 || catNorm.indexOf(qw) !== -1;
            });
            if (allMatch) return 550;
        }

        for (var aliasKey in ALIASES) {
            if (query === aliasKey || query.startsWith(aliasKey) || ALIASES[aliasKey].indexOf(query) !== -1) {
                var expanded = ALIASES[aliasKey];
                if (titleNorm.indexOf(aliasKey) !== -1 || expanded.indexOf(brandNorm) !== -1 || titleNorm.indexOf(expanded.split(' ')[0]) !== -1) {
                    return 520;
                }
            }
        }

        if (query.length >= 3) {
            var maxBrandDist = brandNorm.length <= 4 ? 1 : (brandNorm.length <= 7 ? 2 : 3);
            var bDist = levDistance(query, brandNorm);
            if (bDist <= maxBrandDist) {
                return 400 - (bDist * 50);
            }

            for (var w = 0; w < titleWords.length; w++) {
                var tw = titleWords[w];
                if (tw.length >= 3) {
                    var maxWordDist = tw.length <= 4 ? 1 : 2;
                    var wDist = levDistance(query, tw);
                    if (wDist <= maxWordDist) {
                        return 350 - (wDist * 40);
                    }
                }
            }
        }

        return 0;
    }

    function highlightMatch(text, query) {
        if (!query || !query.trim()) return text;
        var cleanQ = query.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var reg = new RegExp('(' + cleanQ + ')', 'gi');
        return text.replace(reg, '<span style="background:rgba(180,8,187,0.18);color:#42287C;font-weight:800;border-radius:2px;padding:0 2px;">$1</span>');
    }

    var selectedIdx = -1;
    var searchTimer = null;

    function renderSearchResults(query) {
        var q = query.trim();
        var inSubdir = window.location.pathname.indexOf('/coupon/') !== -1;

        if (!q) {
            $('.search-wrap').empty().hide();
            selectedIdx = -1;
            return;
        }

        var scored = [];
        for (var i = 0; i < COUPONS_DATA.length; i++) {
            var it = COUPONS_DATA[i];
            var s = scoreMatch(it, q);
            if (s > 0) {
                scored.push({ item: it, score: s });
            }
        }

        scored.sort(function (a, b) { return b.score - a.score; });
        var matches = scored.slice(0, 8).map(function (x) { return x.item; });

        var html = '';

        if (matches.length > 0) {
            html += '<div class="search-results-box" style="background:#ffffff;border-radius:12px;box-shadow:0 12px 35px rgba(0,0,0,0.18);border:1px solid rgba(66,40,124,0.12);padding:8px;max-height:420px;overflow-y:auto;">';
            html += '<div style="font-size:11px;font-weight:700;color:#64748b;padding:6px 10px;text-transform:uppercase;letter-spacing:0.5px;display:flex;justify-content:space-between;border-bottom:1px solid #f1f5f9;margin-bottom:6px;">';
            html += '<span><i class="fas fa-bolt text-warning me-1"></i> ' + scored.length + ' Verified Match' + (scored.length > 1 ? 'es' : '') + '</span>';
            html += '<span style="color:#b408bb;">Use Arrow Keys &crarr;</span>';
            html += '</div>';

            for (var m = 0; m < matches.length; m++) {
                var item = matches[m];
                var targetUrl = inSubdir ? item.file : ('coupon/' + item.file);
                var targetImg = inSubdir ? ('../' + item.image) : item.image;
                var highlightedTitle = highlightMatch(item.title, q);

                html += '<a href="' + targetUrl + '" class="search-result-item" data-index="' + m + '" style="text-decoration:none;color:inherit;display:block;">';
                html += '  <div class="d-flex justify-content-between single-coupon mx-0 mb-2" style="background:#f8fafc;border-radius:10px;padding:8px 10px;border:1px solid #e2e8f0;transition:all 0.15s ease;">';
                html += '    <div class="d-flex w-75 align-items-center">';
                html += '      <div style="background-image:url(' + targetImg + ');background-size:cover;background-position:center;width:44px;height:44px;border-radius:8px;flex-shrink:0;margin-right:10px;border:1px solid #e2e8f0;" class="bg-image single-coupon-image d-flex align-items-end" role="img" aria-label="' + item.title + '">';
                html += '      </div>';
                html += '      <div class="content d-flex flex-column justify-content-center" style="min-width:0;">';
                html += '        <h6 class="mb-0 mb-lg-1" style="color:#42287C;font-weight:700;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + highlightedTitle + '</h6>';
                html += '        <div class="d-flex align-items-center rating-wrapp" style="font-size:11px;">';
                html += '          <div class="text-warning me-2"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>';
                html += '          <span class="text-muted" style="font-size:11px;">' + item.category + ' &bull; 100% Free</span>';
                html += '        </div>';
                html += '      </div>';
                html += '    </div>';
                html += '    <div class="w-25 d-flex flex-column justify-content-center pe-1 ps-2">';
                html += '      <button type="button" class="btn btn-purple btn btn-search px-1 h-auto mb-0 position-relative py-2 w-100" style="font-size:11px;font-weight:700;border-radius:6px;background:#b408bb;color:#fff;">Get Code</button>';
                html += '    </div>';
                html += '  </div>';
                html += '</a>';
            }
            html += '</div>';
        } else {
            // Helpful Empty State with Trending Suggestions
            var trending = COUPONS_DATA.slice(0, 3);
            html += '<div class="search-results-box" style="background:#ffffff;border-radius:12px;box-shadow:0 12px 35px rgba(0,0,0,0.18);border:1px solid rgba(66,40,124,0.12);padding:14px 12px;text-align:center;">';
            html += '  <div style="font-size:13px;color:#64748b;margin-bottom:10px;"><i class="fas fa-search me-1"></i> No exact matches for "<b>' + q + '</b>"</div>';
            html += '  <div style="font-size:11px;font-weight:700;color:#42287C;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Popular Trending Coupons Today:</div>';
            for (var t = 0; t < trending.length; t++) {
                var trItem = trending[t];
                var trUrl = inSubdir ? trItem.file : ('coupon/' + trItem.file);
                var trImg = inSubdir ? ('../' + trItem.image) : trItem.image;
                html += '<a href="' + trUrl + '" class="search-result-item" data-index="' + t + '" style="text-decoration:none;color:inherit;display:block;margin-bottom:6px;">';
                html += '  <div class="d-flex justify-content-between align-items-center" style="background:#f8fafc;border-radius:8px;padding:6px 10px;border:1px solid #e2e8f0;text-align:left;">';
                html += '    <div class="d-flex align-items-center" style="min-width:0;">';
                html += '      <div style="background-image:url(' + trImg + ');background-size:cover;background-position:center;width:32px;height:32px;border-radius:6px;flex-shrink:0;margin-right:8px;"></div>';
                html += '      <span style="font-size:13px;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + trItem.title + '</span>';
                html += '    </div>';
                html += '    <span style="font-size:11px;font-weight:700;color:#b408bb;white-space:nowrap;">Get Code &rarr;</span>';
                html += '  </div>';
                html += '</a>';
            }
            html += '</div>';
        }

        $('.search-wrap').html(html).show();
        selectedIdx = -1;

        $('.search-result-item').hover(
            function () {
                $('.search-result-item .single-coupon').css('background', '#f8fafc').css('border-color', '#e2e8f0');
                $(this).find('.single-coupon').css('background', '#fdf4ff').css('border-color', '#b408bb');
            },
            function () {
                $(this).find('.single-coupon').css('background', '#f8fafc').css('border-color', '#e2e8f0');
            }
        );
    }

    function updateActiveItem($items) {
        $items.find('.single-coupon').css('background', '#f8fafc').css('border-color', '#e2e8f0');
        if (selectedIdx >= 0 && selectedIdx < $items.length) {
            var $cur = $items.eq(selectedIdx);
            $cur.find('.single-coupon').css('background', '#fdf4ff').css('border-color', '#b408bb');
            $cur[0].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    var $inputs = $('#search-form input, input[type="search"], .search-input');

    $inputs.on('input keyup', function (e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === 'Escape') {
            return;
        }
        var query = $(this).val();
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
            renderSearchResults(query);
        }, 80);
    });

    $inputs.on('focus', function () {
        var q = $(this).val();
        if (q && q.trim()) {
            renderSearchResults(q);
        }
    });

    $inputs.on('keydown', function (e) {
        var $items = $('.search-result-item');
        if (!$items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIdx = (selectedIdx + 1) % $items.length;
            updateActiveItem($items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIdx = (selectedIdx - 1 + $items.length) % $items.length;
            updateActiveItem($items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIdx >= 0 && selectedIdx < $items.length) {
                window.location.href = $items.eq(selectedIdx).attr('href');
            } else if ($items.length > 0) {
                window.location.href = $items.eq(0).attr('href');
            }
        } else if (e.key === 'Escape') {
            $('.search-wrap').empty().hide();
            selectedIdx = -1;
        }
    });

    $('#search-form').on('submit', function (e) {
        e.preventDefault();
        var $items = $('.search-result-item');
        if (selectedIdx >= 0 && selectedIdx < $items.length) {
            window.location.href = $items.eq(selectedIdx).attr('href');
        } else if ($items.length > 0) {
            window.location.href = $items.eq(0).attr('href');
        }
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest('#search-form, .search-wrap, input[type="search"], .search-input').length) {
            $('.search-wrap').empty().hide();
            selectedIdx = -1;
        }
    });
})();


// Slick Responsive Carousel
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});