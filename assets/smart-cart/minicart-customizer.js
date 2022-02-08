/**
 * Minicart PayPal-link interception
 * 05.04.2016
 *
 * [ 	Minicart.js is modified - disabled cart-window popup when adding/changeing items;
 * 		html/css theme changed. ]
 *
 * Insert these lines in HTML
 * <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
 * <script src="plugins/minicart/dist/minicart.js"></script>
 * <script src="minicart-customizer.js"></script>
 *
 */
(function(){function y(b){var a={};decodeURIComponent(b).split("&").forEach(function(b){b=b.split("=");a[b[0]]=(b[1]||"").replace(/\+/g," ")});return a}function q(b){var a=0,d=document.querySelector("#smart-cart"),c=document.querySelector("#smart-cart-qty"),e={};minicartPaypal.minicart.cart.subtotal(e);e=e.currency;minicartPaypal.minicart.cart.items().forEach(function(c){a+=c._data.quantity});1==b&&setTimeout(function(){d.smScale(400,18);c.smColorSwap(400);setTimeout(function(){d.smScale(400,12);
c.smColorSwap(400);setTimeout(function(){d.smScale(400,18);c.smColorSwap(400);setTimeout(function(){d.smScale(400,12);c.smColorSwap(400)},400)},400)},400)},400);0<a?(d.smFadeTo(200,1),c.innerText=a?a:""):(c.innerText=a?a:0,d.smFadeTo(200,0));z()}function v(){var b;b=window.innerWidth<=d.site_width?d.side_offset:(window.innerWidth-d.site_width)/2+d.side_offset;switch(n){case 0:e.style.left=b+"px";e.style.right="initial";break;case 1:e.style.left="initial",e.style.right=b+"px"}}function z(){h||(h=setInterval(function(){window.paypal?
(document.querySelector("#paypal-button-container").innerHTML="",[paypal.FUNDING.PAYPAL,paypal.FUNDING.CREDIT,paypal.FUNDING.CARD].forEach(function(b){b=paypal.Buttons({style:{shape:"pill"},fundingSource:b,createOrder:function(a,b){var c=minicartPaypal.minicart.cart._items.map(function(c){var a={};a.name=c._data.item_name;a.unit_amount={currency_code:minicartPaypal.minicart.cart._settings.currency_code,value:parseFloat(c._data.amount).toFixed(2)};a.quantity=c._data.quantity;return a});c.forEach(function(a){});
return b.order.create({purchase_units:[{amount:{currency_code:minicartPaypal.minicart.cart._settings.currency_code,value:parseFloat(minicartPaypal.minicart.cart.total()).toFixed(2),breakdown:{item_total:{currency_code:minicartPaypal.minicart.cart._settings.currency_code,value:parseFloat(minicartPaypal.minicart.cart.total()).toFixed(2)}}},items:c}]})},onApprove:function(a,b){return b.order.capture().then(function(a){minicartPaypal.minicart.cart.remove();a=document.createElement("div");a.classList.add("modal");
a.innerHTML='\n\t\t\t\t\t\t\t\t<div id="approve-window" class="modal-dialog display-7" style="display:flex;height:auto;">\n\t\t\t\t\t\t\t\t\t<div class="modal-content" style="height:auto;">\n\t\t\t\t\t\t\t\t\t\t<div class="modal-header" style="border:none;">\n\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="modal-body align-center">\n\t\t\t\t\t\t\t\t\t\t\t<h6 class="display-5">Thank your for your purchase</h6>\n\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-primary">Close</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="modal-footer" style="border:none;display:block;">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>';
(new bootstrap.Modal(a)).show()})}});b.isEligible()&&b.render("#paypal-button-container")}),clearInterval(h)):document.querySelector("#paypal-button-container .dummy-template-paypal").innerText="Error: Invalid PayPal Client ID."},1E3))}function A(){if(!w&&document.body){switch(d.shopcart_position){case "left":n=0;break;case "right":n=1;break;default:console.log("Shopcart position (orientation) is wrong");return}minicartPaypal.minicart.render({strings:{button:d.checkout_button.replace(),cartTitle:d.cartTitle}});
window.location.href==d.returnURL&&(minicartPaypal.minicart.reset(),window.location=window.location.origin+window.location.pathname);var b=document.createElement("div");b.innerHTML=d.shopcartHtml;document.querySelector("body").append(b);b=document.createElement("style");b.innerHTML="#giftcard-to-smartcart {font-size: "+d.gift_icon_size+"px; color: "+d.gift_icon_color+"; background-color: "+d.gift_back_color+"}";document.querySelector("body").append(b);window.addEventListener("resize",function(){v()});
q();document.querySelector("#smart-cart").addEventListener("click",function(a){a.stopPropagation();minicartPaypal.minicart.view.show();minicartPaypal.minicart.view.redraw()});document.addEventListener("click",function(a){var b=a.target.getAttribute("href");if(b){var c=new URL(b),m=c.searchParams.get("cmdsm")||"";if("_cart"===m)a.stopPropagation(),a.preventDefault(),r=!0,c=y(b.substring(b.indexOf("?")+1)),!1!==minicartPaypal.minicart.cart.add({amount:c.amount,bn:c.bn,business:c.business,currency_code:c.currency_code,
item_name:c.item_name,item_number:c.item_number,shipping:c.shipping,shipping2:c.shipping2,"return":d.returnURL,cancel_return:d.cancel_returnURL,notifyURL:d.notifyURL})&&e&&(e.smFadeTo(200,1),q(!0)),r=!1;else if("_xclick"===m){var g=function(){t||(t=setInterval(function(){window.paypal?(h.innerHTML="",[paypal.FUNDING.PAYPAL,paypal.FUNDING.CREDIT,paypal.FUNDING.CARD].forEach(function(a){a=paypal.Buttons({style:{shape:"pill"},fundingSource:a,createOrder:function(a,b){return b.order.create({purchase_units:[{style:{layout:"horizontal"},
amount:{currency_code:k,value:l*f.quantity,breakdown:{item_total:{currency_code:k,value:l*f.quantity}}},items:[{name:f.name||"",unit_amount:{currency_code:k,value:l},quantity:f.quantity}]}]})},onApprove:function(a,b){return b.order.capture().then(function(a){minicartPaypal.minicart.cart.remove();a=document.createElement("div");a.classList.add("modal");a.innerHTML='\n\t\t\t\t\t\t\t\t\t\t\t<div id="approve-window" class="modal-dialog display-7" style="display:flex;height:auto;">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="modal-content" style="height:auto;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="modal-header" style="border:none;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="modal-body align-center">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="display-5">Thank you for your order!</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="btn btn-primary">Close</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="modal-footer" style="border:none;display:block;">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>';
(new bootstrap.Modal(a)).show()})}});a.isEligible()&&a.render(h)}),clearInterval(t)):h.querySelector(".dummy-template-paypal").innerText="Error: Invalid PayPal Client ID."},1E3))};a.preventDefault();a.stopPropagation();a=document.createElement("div");a.classList.add("modal");var l=c.searchParams.get("amount")||"",k=c.searchParams.get("currency_code")||"",c=c.searchParams.get("item_name")||"",f={};f.name=c;f.quantity=1;a.innerHTML='\n\t\t\t\t<div id="buy-now-window" class="modal-dialog display-7" style="display:flex;height:auto;">\n\t\t\t\t\t<div class="modal-content" style="height:auto;">\n\t\t\t\t\t\t<div class="modal-header" style="border:none;">\n\t\t\t\t\t\t\t<h6 class="modal-title" id="staticBackdropLabel"><b>Buy Now</b></h6>\n\t\t\t\t\t\t\t<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-body">\n\t\t\t\t\t\t\t<div class="row my-3">\n\t\t\t\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t\t\t\t<div class="item-name">'+
(c||"Item Name not found")+'</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="minicart-details-quantity col-auto">\n\t\t\t\t\t\t\t\t\t<span class="smartcart-minus">&minus;</span>\n\t\t\t\t\t\t\t\t\t<input type="number" class="smartcart-quantity" value="'+f.quantity+'" autocomplete="off"/>\n\t\t\t\t\t\t\t\t\t<span class="smartcart-plus">&plus;</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="row align-items-center">\n\t\t\t\t\t\t\t\t<div class="col">\n\t\t\t\t\t\t\t\t\t<div class="item-price align-right">'+
(l+" "+k)+'</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="modal-footer" style="border:none;display:block;">\n\t\t\t\t\t\t\t<div id="paypal-button-buynow">\n\t\t\t\t\t\t\t\t<div class="dummy-template-paypal">PAYPAL LOADING</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>';var n=new bootstrap.Modal(a),h=a.querySelector("#paypal-button-buynow"),t=void 0;a.addEventListener("shown.bs.modal",function(a){g()});var c=a.querySelector(".smartcart-minus"),
p=a.querySelector(".smartcart-quantity"),b=a.querySelector(".smartcart-plus"),u=a.querySelector(".item-price");c.addEventListener("click",function(a){1>=parseInt(f.quantity)||(f.quantity=parseInt(f.quantity)-1,p.value=f.quantity,u.innerText=parseFloat(p.value*l).toFixed(2)+" "+k,g())});b.addEventListener("click",function(a){f.quantity=parseInt(f.quantity)+1;p.value=f.quantity;u.innerText=parseFloat(p.value*l).toFixed(2)+" "+k;g()});p.addEventListener("change",function(a){f.quantity=parseInt(a.target.value);
p.value=f.quantity;u.innerText=parseFloat(a.target.value*l).toFixed(2)+" "+k;g()});a.addEventListener("hidden.bs.modal",function(a){n.dispose()});n.show()}}});minicartPaypal.minicart.cart.on("change",function(a){r||q()});minicartPaypal.minicart.cart.on("remove",function(){q()});e=document.querySelector("#smart-cart");e.style.top=d.shopcart_top_offset+"px";e.style.fontSize=d.shopcart_icon_size+"px";e.style.width=d.shopcart_icon_size+18+"px";e.style.height=d.shopcart_icon_size+18+"px";e.style.color=
d.shopcart_icon_color;e.style.backgroundColor=d.shopcart_back_color;e.querySelector("span").style.fontSize=d.sc_count_size+"px";e.querySelector("span").style.color=d.sc_count_color;e.querySelector("span").style.backgroundColor=d.sc_count_back_color;b={};minicartPaypal.minicart.cart.subtotal(b);b=b.currency;shopcartWidth=e.offsetWidth;v();w=!0}}function m(b){for(var a in b)x.hasOwnProperty(a)&&(d[a]=b[a]);document.addEventListener("DOMContentLoaded",function(){A()})}var x={shopcart_position:"right",
site_width:1150,side_offset:20,shopcart_top_offset:220,gift_icon_color:"#14142b",gift_back_color:"#fedb01",gift_icon_size:15,shopcart_icon_color:"#fedb01",shopcart_back_color:"#14142b",shopcart_icon_size:64,sc_count_color:"#14142b",sc_count_back_color:"#fedb01",sc_count_size:16,returnURL:window.location.origin+window.location.pathname+"?success",cancel_returnURL:window.location.origin+window.location.pathname+"?failure",shopcartCSSLink:'<link rel="stylesheet" href="smart-cart/minicart-theme.css" type="text/css">',
giftCardHtml:'<i id="giftcard-to-smartcart" class="shoppingcart-icons">&#xe308;</i>',shopcartHtml:'<i id="smart-cart" role="button" class="shoppingcart-icons display-7" data-placement="left"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 19H5.2l-3-15H0V2h3.8l.8 4H23l-1.2 9H6.4l.4 2H21v2zM6 13h14l.7-5H5l1 5zm2 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg><span id="smart-cart-qty"></span></div></i>',
checkout_button:"Pay with",cartTitle:"Your Cart"},d=x,w=!1,r=!1,e,n;Element.prototype.smFadeTo=function(b,a){function d(){c.style.display="none"}var c=this;c.style.transitionDuration=b+"ms";c.style.opacity=a;0===a?c.addEventListener("transitionend",d(),{once:!0}):(c.removeEventListener("transitionend",d()),c.style.display="flex")};Element.prototype.smScale=function(b,a){this.style.transitionDuration=b+"ms";this.style.transitionTimingFunction="ease-out";this.style.padding=a+"px"};Element.prototype.smColorSwap=
function(b){this.style.transitionDuration=b+"ms";b=this.style.color;this.style.color=this.style.backgroundColor;this.style.backgroundColor=b};var g=document.createElement("div");g.classList.add("payment-notification-\u0441ontainer");g.style.position="absolute";g.style.top="0";g.style.right="0";var h=void 0;if("undefined"===typeof minicartPaypal||"undefined"===typeof minicartPaypal.minicart)return-1;window.mcSmartCartOptions&&m(window.mcSmartCartOptions);"function"===typeof define&&define.amd?define(function(){return m}):
"object"==typeof exports?module.exports=m:window.mcSmartCart=m})();mcSmartCart("undefined"===typeof smartCartDefSettings?null:smartCartDefSettings);
