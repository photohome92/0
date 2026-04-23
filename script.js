let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS ================= */
const products = {
frames:{name:"Frames",price:1599,desc:"Premium quality wall frames.\nPerfect for home & office decoration.",folder:"frame"},
mirrorframes:{name:"Mirror Frames",price:2000,desc:"Elegant mirror finish frames.\nAdds luxury and modern look.",folder:"mirrorframe"},
magicmirrorframes:{name:"Magic Mirror Frames",price:2000,desc:"Smart magic mirror effect frames.\nChanges look with lighting.",folder:"magicmirrorframe"},
whitemug:{name:"White Mug",price:799,desc:"Classic white ceramic mug.\nPerfect for daily use.",folder:"whitemug"},
colourmug:{name:"Colour Mug",price:1099,desc:"Bright colorful mugs.\nStylish and fun design.",folder:"colourmug"},
heartmug:{name:"Heart Mug",price:1199,desc:"Heart-shaped romantic mug.\nPerfect gift for loved ones.",folder:"heartmug"},
magicmug:{name:"Magic Mug",price:1199,desc:"Heat reveal magic mug.\nDesign appears with hot liquid.",folder:"magicmug"},
shirtwhite:{name:"White Shirt",price:799,desc:"Simple white shirt.\nComfortable daily wear.",folder:"shirtwhite"},
shirtcolour:{name:"Colour Shirt",price:1499,desc:"Trendy colorful shirt.\nPremium stylish look.",folder:"shirtcolour"},
flyers:{name:"Flyers",price:699,desc:"High quality business flyers.\nMarketing and promotion.",folder:"flyer"},
visitingcards:{name:"Visiting Cards",price:1999,desc:"Premium visiting cards.\nProfessional business look.",folder:"visitingcard"},
canvas:{name:"Canvas Prints",price:1399,desc:"Photo canvas prints.\nWall decoration art.",folder:"canvas"},
framedcanvas:{name:"Framed Canvas",price:1599,desc:"Framed canvas artwork.\nElegant home decor.",folder:"framedcanvas"},
birthdaycard:{name:"Birthday Cards",price:499,desc:"Greeting cards.\nSpecial moments celebration.",folder:"birthdaycard"},
lunchbox:{name:"Lunch Box",price:699,desc:"Durable lunch box.\nDaily food storage.",folder:"lunchbox"},
waterbottle:{name:"Water Bottle",price:899,desc:"Strong water bottle.\nPortable daily use.",folder:"waterbottle"},
tempbottle:{name:"Temperature Bottle",price:1499,desc:"Hot & cold bottle.\nTemperature control feature.",folder:"tempbottle"},
wallet:{name:"Wallet",price:1299,desc:"Premium leather wallet.\nMultiple card slots.",folder:"wallet"},
keyring:{name:"Keyring",price:499,desc:"Stylish keyring.\nDaily accessory item.",folder:"keyring"},
chain:{name:"Chain",price:499,desc:"Fashion chain.\nLightweight stylish wear.",folder:"chain"},
ring:{name:"Ring",price:245,desc:"Simple stylish ring.\nAffordable fashion accessory.",folder:"ring"},
album:{name:"Album",price:999,desc:"Photo memory album.\nStore precious moments.",folder:"album"},
cushion:{name:"Cushion",price:749,desc:"Soft cushion.\nComfortable home use.",folder:"cushion"}
};

/* ================= LOAD ================= */
window.addEventListener("DOMContentLoaded", () => {

let grid = document.getElementById("productGrid");

/* HOME PAGE */
if(grid){
for(let id in products){
let p = products[id];

grid.innerHTML += `
<div class="card" onclick="openProduct('${id}')">
<img src="images/${p.folder}1.jpg">

<div class="info">
<h3>${p.name}</h3>
<p class="price">Rs ${p.price}</p>
<p class="desc">${p.desc}</p>

<button class="cart-btn2" onclick="event.stopPropagation(); addToCart('${p.name}',${p.price})">
Add To Cart
</button>

</div>
</div>
`;
}
}

/* PRODUCT PAGE */
let current = localStorage.getItem("product");

if(current && products[current]){
let p = products[current];

document.getElementById("name").innerText = p.name;
document.getElementById("desc").innerText = p.desc;
document.getElementById("price").innerText = "Rs " + p.price;

window.images = [
`images/${p.folder}1.jpg`,
`images/${p.folder}2.jpg`
];

window.index = 0;
showImg();
}

});

/* ================= FUNCTIONS ================= */

/* 🔥 FIXED TYPO HERE */
function openProduct(id){
localStorage.setItem("product",id);
location.href="product.html";
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added 🛒");
}

function addToCartSingle(){
let id = localStorage.getItem("product");
let p = products[id];
cart.push({name:p.name,price:p.price});
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added 🛒");
}

/* ================= SLIDER ================= */
function showImg(){
let img = document.getElementById("mainImg");
if(img){
img.src = window.images[window.index];
}
}

function nextImg(){
window.index = (window.index + 1) % window.images.length;
showImg();
}

function prevImg(){
window.index = (window.index - 1 + window.images.length) % window.images.length;
showImg();
}