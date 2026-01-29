
const shop = document.getElementById("shop");


/* PRODUCT NAMES (EXACT ORDER) */

const names = [
"Makeup Brushes","BB Cream","Nail Polish","FOUNDATION","Lipglose","Maskara","Compact Powder","Liquid Eyeshadow","High Lighter",
"Primer","Foundation","MakeUp Fixer","Under Eye Cream","Face Wash","Beauty Soap","Vitamin C serum","Day Cream","Night Cream","Sun Block","Moisturizer",
"Charcoal Mask","Face Mask","Hand Cream","Foot Cream","Lip Balm","Maskara","Hair Serum","Hair Mask","Body Lotion","Body Mist",
"Rose Water","Aloe Gel","Eye Shadow","Makeup Brush","Beauty Blender","Face Scrub","Cleanser","Toner","Peel Off Mask","Gold Facial",
"Pearl Cream","Whitening Cream","Acne Gel","Dark Spot Cream","Face Oil","Glow Serum","Matte Lipstick","Lip Tint","Beauty Kit","Makeup Set","flower jelly lipstick","Chery Blossom Baursde","kalwanji black seed shampoo","hairfall solution shampoo","elvive hyaluron pure","rosemary shampoo","keratin smooth shampoo","face hair removel","shimmer powder shiner","christine waterproof foundation stick","dark circle puffiness serum",
"Blossom Pour femme perfume","Heavenly Vibes perfume","Living floral perfume","smart collection perfume","mutual love Pour femme perfume","marry me intense perfume","body&blast pink rose mist","lady blue perfume","smart collection perfume ","Irresistible Inspired By Romance perfume","nail polish remover","eyelashes with magnatic liquid",
"eyebrow pen waterproof","veet hair removel lotion ","halawa finger wax","turtle wax","strawberry finger wax ","lubna's wonder wax",
"makeup water proof pencil","Matte color lipstick pencil","super skin glowing serum","Feminine Intimate Cleansing and Moisturizing",
"Strawberry Lip Color Changing Lipstick Balm","New Best Rice Raw Pulp Kit Rejuvenating + Rice","QT Quetee Beauty Cheek & Lip Tint",
"Dermacol Makeup Cover Foundation ","LESSXCOCO Blue Rose Lipstick ","BIOAQUA Rice Serum","Niacinamide Skin care Super Serum",
"BB Cream Liquid Foundation","Whitening Cream ","Rice Extract Serum","Silk Concealer Lightweight","Pond's Bright Beauty Facewash",
"BIOAQUA Rice Face Wash","BIOAQUA Anti wrinkle Face Wash","Bioaqua Peach Glowing Extract Cleanser","Biorey Cleara Facewash",
"Bioaqua Vitamin C Cleanser Face Wash","BIOAQUA Sea Fennel Hyaluronic  Face Wash","Bioaqua Salicylic Acid Acne Removal Cleanser",
"Hyaluronic Acid Moisturizing and Smooth Face Wash","BIOAQUA Blueberry Wonder Facial Cleanser","Vitaman C Face Wash  Cleanse",
"Aloe Vera Anti Acne Refine Face Wash","Niacinamide Whitening Fade Dark Spots Face Wash",
"Makeup Brushes Chubby Foundation Brush","Facewash  Skin Care Products | For All Skin Types ","COSMET PK lip gloss Transparent Lip Shiner Gloss",
"Eyelashes Growth Serum","Crystal Flower Jelly Lipstick","MUICIN V9+  Day & Night Skin Polish Cream",
"Vitamin C 3in1 Skin Polish","Rice Whitening Ultra Glowing Facial Kit For All Skin Types","Sheglam Pout Pillow Cushion Hydrating Lip Gloss",
"Hydrating Tinted Lip Balm - Soft, Smooth & Glowing","Heng Fang 4 Pcs Hey Girl Wonder Tube Lipstick Set",
"Liquid Shiny Highlighter Eyeshadow Glitter Shimmer","LIQUID BLUSH  PremiumLiquid Blush Natural Colors",
"Floral Hair Dye Shampoo - Natural Black Hair","Hair Color Touch-Up Stick – Instant Gray Root Concealer Wand",
"Lichen Black Hair Color Shampoo No-Stain Hair Dye Shampoo","KalaKola Hairwell Shampoo Hair Color",
"L'Oreal Paris - LOreal Elvive 6 Oil Nourish Shampoo","Hello Hair Herbal Shampoo Natural Hair Care",
"Anti Dandruff Shampoo","Sunsilk Black Shine Shampoo","Mayamay Olive Shampoo","HerbGlow Herbal Shampoo",
"Aloe Vera Shampoo","Sunsilk Smooth and Manageable Shampoo","MECLAY LONDON THICK & DENSE Shampoo","Cactus and Gergir vatika hair fall control shampoo",
"Vatika Black & Strong Shampoo Black Olive","vatika natural hair growth garlic shampoo",
"MEDORA Nail Enamel- TOP COAT","Matte Liquid Nail Polish","Christine  Nail Polish - Shade","Christine Nail Polish  Shade","MEDORA Nail Enamel RUSTY GOLD",
"Swiss Miss Silk Lacquer Nail Polish Plump","Christine Matte Nail Enamel  Nail Polish","Christine  Nail Polish",
"Color Studio Aqua Breathable Nail Polish","Mode Love White Nail Polish","Dark Maroon Nail Polish",
"French Manicure Nail Polish Kit - White , Nude & Clear Shades","Comset  nailpaints","30 pieces/strip Champagne",
"Monja White Pearl Chrome Nail Powder","Acrylic Fake Nails Transparent Organizer",
"Soft Color Contact Lenses","Fashion Lenses","Circle Grey, Lens","Soft Color Contact Lenses","Waterproof Makeup Storage Bag",
"Skin Tonic – Facial Toner for Healthy Skin","Sweet Beauty  FALSE NAIL GLUE WITH BRUSH","Contact Lenses Applicator & Tweezer",
"Ice Cream Magic Lip gloss","matte lipstick Metal Box","Liquid Blush  Lip gloss","Lattafa Yara Body Spray",
"Momento Fleur Body Spray","Eterna Elisa Long Lasting Body Mist","Hemani WB - Body Spray","ARMAF Club De Nuit Perfume Body Spray",
"Secret Body Spray Secret Perfume  Fragrance","Blue Lady Body Spray","Hair Removal Spray","Eclaire Body Spray",
"Glame Hair Removal Spray","Lattafa Khamrah Body Spray","She Is Body Spray","Brand's Next Body Spray","Maahru Body Mist",
"Leisure – A Touch Of Affection!! – Body Spray","Body Spray Deodorants Perfumed","Dream Broche Body Spray",
"Rasasi Relation Body Spray","Lattafa Maahir Body Spray","Bliss Kiss Body Mist","Golden Pearl Oud Body Lotion",
"Golden Pearl  Intensive Care","biocos whitening Body Lotion","Glam & Curious | Body Lotion","Cocoa & Shea Body Butter",
"Skin White Lotion Shea Butter","SilverSea Coconut Milk  Body Lotion","BIOAQUA Peach Body Lotion Skin Care","Nivia Body Lotion",
"Tijarat Makeup Deals","Korean 3D Design Nails","TV Parlour  Chromic Nails | Artificial Nails","MUICIN V9+ Lazy Girl Day & Night Skin Polish Cream",
"whitening cream for Body Parts","Biocos Beauty Cream Formula Pack","Guaranteed Bridal Rice Cream for Glowing & Fair Skin",
"Moon Touch Treatment Cream","Haya Beauty Cream by Rabi Pirzada","Kelly Pearl Cream","Haya Beauty Cream","Mokeru Hair Straight Hair Cream With Comb Wash",
"Aloe Vera Gel Soothing Moisture","TV Parlour Double Wear Foundation Base Waterproof Moisturizing","XQMBB Cream - XQM BB Multifunction Cream",
"PINK Coco Lotion Coconut Oil Hydrating Body Lotion","The Best Family Moisturizing Lotion","Beautyvoc - Papaya Body Lotion",
"Sahla Whitening Lotion","HairBrush multicolor","hair brush","paddle Hair Brush","Foldable Mini Small Comb Portable Carry Mirror Press",
"Hair Brush","Helen Christy Unbreakable Hair Brush Steel Wire","Hair Brush, Cute Cat Ear Detangling Comb with Mirror On Back",
"Bamboo Wood Hair Brush","Mark Spencer Paddle Hair Brush","Enacolor Massage Airbag Comb Portable Antistatic Fluffy Air",
"Trendy Vented Curved Hair Brushes Wet & Dry","Round long Shape Smoothest Most Useful Hair brush",
"Mini Hair Straightener","2 in 1 Hair Straightener and Curler","Remngton Keratin Protect Intelligent Hair Straightener",
"Professional Hair Straightener","Professional series with Temperature Control Setting ","Professional Electric Hair Straightener",
"Rimengton Professional Keratin Therapy Hair Straightener","Straightener Electric Ceramic Professional Flat Hair",
"Nova Hair Dryer","Professional Hair Dryer with Diffuser - Keratin Protect Hair Dryer Unisex","Professional Hair Dryer – Hot & Cold Air",
"Professional Foldable Hair Dryer","accufix cometics aha-bha body wash","bleach soap bar for face and body wash",
"Guanjing Kojic Acid Soap 7 Days Glowing & Moisturizig body Soap","Glutathione Soap - New Glutathione Clearly Natural Transparent Glycerin",
"Vitamin C And Hyaluronic Acid Soap Bar","Delesh Body Factor Shower Gel Royal Lalic","Hemani - Advance Whitening Soap",
"Oriflame North  Sub Zero Soap Bar","Sea Salt Soap Detoxifies Pores Cleanses & Moisturizing Skin Soap",
"Milky Soap  Bar For Body And Face  Nourishes Skin","Black Seed  For Body And Face Anti-Aging Soap Bar","WBM Loles Soap Bar  Beauty Soap Natural Floral Fragrance",
"Hair dye Instant Temporary Coloring","Premium Salon Hair Dyeing Kit","Set of hair dye color bowl and brushes",
"Hair oil applicator comb bottle","Electric Hair Remover & Precision Eyebrow Trimmer","Headband Accessories bath Makeup Hair Wrap",
"OMG Bow Makeup Headband","New Fashion Butterfly Pearl Tassel Hair Clip","Repair & Protect Keratin Reconstruct Conditioner",
"Rosemary Herbal Conditioner","Marshmellow Leave-In Hair Conditioner","Sunsilk Soft And Smooth Conditioner",
"Eden Roc Leave In Conditioner","Moroccan Argan Oil Conditioner Sulfate Free","Tresemme Keratin Smooth Serum",
"Botanique Hair Growth Serum","pen perfume impressions for girls","Contour Stick HD Shaping Contour Stick",
"Highlight & Contour Stick","Concealer Contour Stick","Contouring Highlighters Stick Nose Shadow Blusher",
"O.TWO.O  Glow Lift Contour Stick","Hello Hair Hair Color Dark Brown",
];
function renderProducts(list){

shop.innerHTML = "";

list.forEach(p=>{
shop.innerHTML += `
<div class="card">
<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<div class="price">${p.price}</div>
<button class="shopbtn" onclick="order('${p.name}')">SHOP</button>
</div>`;
});

}


const products = [];

for(let i=1;i<=270;i++){
products.push({
name: names[i-1],
price: "Price On Request",
img: `images/${i}.png`
});
}

/* DRAW PRODUCTS */

function draw(){
shop.innerHTML="";
products.forEach(p=>{
shop.innerHTML+=`
<div class="card">
<img src="${p.img}" loading="lazy">
<h3>${p.name}</h3>
<div class="price">${p.price}</div>
<button class="shopbtn" onclick="order('${p.name}')">SHOP</button>
</div>
`;
});
}

/* WHATSAPP */

function order(name){
let msg=`Hello Nisar Luxe Beauty,%0AProduct:%0A${name}`;
window.open(`https://wa.me/923368644181?text=${msg}`,"_blank");
}

draw();

/* STOP BRAND MOVEMENT */

window.onload=()=>{
const brand=document.querySelector("h1");
if(brand){
brand.style.animation="none";
brand.style.transform="none";
brand.style.textShadow="none";
}
};

/* SIMPLE FAST SLIDER */

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function showSlide(n){
slides.forEach(s=>s.style.display="none");
slides[n].style.display="block";
}

function autoSlide(){
slideIndex++;
if(slideIndex >= slides.length){
slideIndex = 0;
}
showSlide(slideIndex);
}

if(slides.length > 0){
showSlide(slideIndex);
setInterval(autoSlide,2000); // fast mobile
}
const searchInput = document.getElementById("searchInput");

let searchTimer;

searchInput.addEventListener("input", ()=>{

clearTimeout(searchTimer);

searchTimer = setTimeout(()=>{

const value = searchInput.value.toLowerCase();

if(value.length < 3){
renderProducts(products);
return;
}

const filtered = products.filter(p =>
p.name.toLowerCase().includes(value)
);

renderProducts(filtered);

},250);

});
function filterCat(cat){

document.querySelectorAll(".card").forEach(card=>{

let name = card.innerText.toLowerCase();

let map = {
face:["face"],
body:["body"],
perfume:["perfume"],
soap:["soap"],
shampoo:["shampoo"],
conditioner:["conditioner"],
brush:["brush"],
dryer:["dryer"],
lipstick:["lip"],
nail:["nail"],
cream:["cream"],
lotion:["lotion"],
makeup:["makeup"],
serum:["serum"],
wax:["wax"],
lens:["lens"],
spray:["spray"],
mist:["mist"],
nails:["artificial"],
foundation:["foundation"]
};

if(cat==="all"){
card.style.display="block";
return;
}

let found=false;

map[cat].forEach(word=>{
if(name.includes(word)) found=true;
});

card.style.display = found ? "block":"none";

});

}
function toggleCats(){
let m=document.getElementById("catMenu");
m.style.display = m.style.display==="block"?"none":"block";
}
