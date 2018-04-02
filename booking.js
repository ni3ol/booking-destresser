console.log('Hello Nicol');

function on_page_change() {
  //Search accommodation
  remove('.easter-banner-container');
  remove('.raf-promo-pe');
  remove('.js_sr_persuation_msg'); // There's only 1 like it!
  remove('.free-cancel-persuasion'); // Risk free, cancel at any time.
  remove('.sr_hotel_expectation__wrapper'); // 90% of reviews say that this property matched or exceeded expectations
  remove('.sr_vr_intent--banner '); // Holiday rentals might be an option for you.
  remove('.vpm_3rfte-container '); // 3 reasons to visit
  remove('.sr-sort-dropdown-container'); // Review score and price
  remove('.sr_warnings__content'); //
  remove('.sr_item sr_separator'); // Deal add
  remove('.u-font-weight-bold'); // Deal add
  remove('.sr_separator_first'); // Deal add
  remove('.sr_autoextend_divider'); // Deal add
  remove('.sr_autoextend_divider__container'); // Deal add
  remove('.sr_trending_attractions '); // Sliding adds
  remove('.show'); // Sliding adds
  remove('.vpm_nd_links'); // Have you considered staying further afield?
  remove('.sd-banner'); // Sign in deal add
  remove('.sd-banner--animated'); // Sign in deal add
  remove('.psst'); // Sign in deal add
  remove('.new_hotel__badge'); // Just added!
  remove('.bk-icon-wrapper'); // Dot rating
  remove('.uc_account'); // Register and sign in
  remove('.popover-trigger'); //
  remove('.js-raf-center-bar-link'); // Link friends and earn
  remove('.sr__guest-favorite'); // Guest favorite
  remove('.d-deal-b'); // Great value today
  remove('.try_another_search_3'); // Try another search
  remove('.footer-wrapper'); // Footer adds
  remove('.join_banner_small'); //List your place
  remove('.searchform-subscribe-box-container'); // Sign in to see discounts
  remove('.unified-postcard'); //
  remove('.sh-postcard'); //
  remove('.unified-postcard__pe'); //
  remove('.unified-postcard--padding'); //
  remove('.bh-carousel-wrap'); //
  remove('.d-bh-promotion--container '); //
  remove('#top-destinations-block'); //

  //Select room
  remove('.hp-lists'); // List your holiday home
  remove('.js-hp-wl-sidebar'); //
  remove('.hide'); //
  remove('.bpg_holder_light_block'); // We price check
  remove('#subheader-wrap'); // Directory
  remove('.fe_banner'); // People looking!
  remove('.fe_banner__w-icon'); //
  remove('.fe_banner__grey'); //
  remove('.fe-banner-icon__hp-people-looking'); //
  remove('.topbook_pricematch '); // Price match
  remove('.althotelsDiv2'); // Sliding reviews
  remove('.use_sprites_no_back'); //
  remove('.featured_reviewer'); //
  remove('.share_center'); // Share button
  remove('.share_center_new_short_urls'); //
  remove('.share_center_button'); //
  remove('.share_center_svg'); //
  remove('.best-review-score'); //
  remove('.hp-gallery-review '); // Overall score
  remove('.b-button'); // Reserve your holiday home stay
  remove('.b-button_primary'); //
  remove('.book_now_button_handler'); //
  remove('.public_transport_options'); // Transport side duplication
  remove('.hp_sidebar_usp_box'); // Like this one, but not sure yet?
  remove('.hp-sidebar-block'); //
  remove('.hp_sidebar-similar'); //
  remove('.hp-social_proof'); // Duplicate reviews on side
  remove('.hp-social-proof-review_score'); //
  remove('.property-highlights'); // Guests love..
  remove('.ph-icon-fill-color'); //
  remove('.chain-content '); // Stay in Footstay duplicate
  remove('.hp-description--property-name-best-seller'); //One of the bestsellers in Melborne!
  remove('.yellowfy_bestseller'); //
  remove('.dtri'); //
  remove('.inline-feedback'); // Missing some information?
  remove('.inline-feedback_bordered-light'); //
  remove('.inline-feedback_description'); //
  remove('.hp_desc_important_facilities'); // More facilities duplication!
  remove('.bpg_hp_no_availability'); // We price match
  remove('.hp-availability-block-usp'); //
  remove('.hprt-table-cheapest-block-banner'); // Lowest price alert
  remove('.hprt-table-cheapest-block-banner-fix'); //
  remove('.hprt-table-cheapest-block-banner-active'); //
  remove('.similar_alternative_hotels'); //
  remove('.hp_sidebar_top_ranked'); //
  remove('.hp_cs_back_to_search'); // Bottom search
  remove('#althotels-wrapper'); //
  remove('.map_static_zoom'); // Side map
  remove('.show_map'); //
  remove('.map_static_hover'); //
  remove('.map_static_button_hoverstate'); //
  remove('.maps-more-static-focus'); //
  remove('#viewmorealt'); //
  remove('.hp_useful_links_header'); //
  remove('.hprt-reservation-message2'); // One other person looking now
  remove('.hp-blue-sans-rack-rate'); // Old rate
  remove('.lastbooked-style-bold'); // In high demand
  remove('.sr-header-endorsments'); //
  remove('.sidebox'); //
  remove('box');
  remove('sr_sidebar_map_redesign')
  remove('.sr_city_guide_banner');
};

function remove(selector) {
  var results = document.querySelectorAll(selector);
  for (var i = 0; i < results.length; i++) {
    var result = results[i];
    result.remove();
  }
}

var target = document.getElementById('bodyconstraint');
var observer = new MutationObserver(on_page_change);

observer.observe(target, {
  childList: true,
  subtree: true
});
