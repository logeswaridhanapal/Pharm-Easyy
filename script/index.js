let newlaunch =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U65148/baidyanath-nagpur-mahamanjisthadi-kadha-ayurvedic-blood-purifier-syrup-450-ml-2-1655533130.jpg?dim=1440x0",
        title:"Baidyanath Nagpur Mahamanjisthadi Kadha,450 Ml",
        price:"MRP ₹210.00",
        tax:"Inclusive of all taxes",
        offer:"6% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/P71315/pharmeasy-vitamin-b-complex-with-folic-acid-improves-energy-heart-eye-health-bottle-of-60-2-1659444053.jpg?dim=1440x0",
        title:"Pharmeasy Vitamin B Complex With Folic Acid - Improves Energy",
        price:"MRP ₹649.00",
        tax:"Inclusive of all taxes",
        offer:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/U13516/fixderma-kairfoll-anti-hair-loss-conditioner-200ml-2-1652259133.jpg?dim=1440x0",
        title:"Fixderma Kairfoll Anti Hair Loss Conditioner 200ml",
        price:" MRP ₹825.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0",
        title:"Godrej Hit Flies & Mosquitoes Black Insect Killer (Spray)-400 Ml",
        price:"MRP ₹225.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0",
        title:"Liveasy Wellness Pain Relief Spray 55gm",
        price:"MRP ₹199.00",
        tax:"Inclusive of all taxes",
        offer:"30% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E00158/all-out-ultra-mosquito-repellant-refills-pack-of-6-2-1645196377.jpg?dim=1440x0",
        title:"All Out Ultra Mosquito Repellant Refills (Pack Of 6)",
        price:"MRP ₹438.00",
        tax:"Inclusive of all taxes",
        offer:"40% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/H98890/liveasy-essentials-paper-cotton-buds-100s-2-1675416986.jpg?dim=1440x0",
        title:"Liveasy Essentials Paper Cotton Buds...",
        price:"MRP ₹65.00",
        tax:"Inclusive of all taxes",
        offer:"25% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/Z08870/pharmeasy-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1672661091.jpg?dim=1440x0",
        title:"Pharmeasy Vitamin C (990mg)With Zinc...",
        price:"MRP ₹439.45",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/R78914/fash-x-gel-face-wash-200ml-2-1670827713.jpg?dim=1440x0",
        title:"New Flash X Gel Face Wash 200ml",
        price:"MRP ₹370.50",
        tax:"Inclusive of all taxes",
        offer:"22% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E29038/liveasy-essentials-diabetic-orthopedic-slippers-style-2-men-black-size-uk-10-2-1671742785.jpg?dim=1440x0",
        title:"Liveasy Essentials Diabetics &...",
        price:"MRP ₹1099.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/P20145/desquamar-soap-free-face-cleanser-ph-5-6-for-all-skin-types-100ml-2-1671258700.jpg?dim=1440x0",
        title:"Desquamar Soap-free Face Cleanser Ph 5-6...",
        price:"MRP ₹300.70",
        tax:"Inclusive of all taxes",
        offer:"17% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O41553/stayfree-secure-cottony-regular-18s-2-1666017704.jpg?dim=1440x0",
        title:"Stayfree Secure Cottony Regular 18s",
        price:"MRP ₹145.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/T06623/vicks-zzzquil-natura-10s-chewable-gummies-2-1672054447.jpg?dim=1440x0",
        title:"Vicks Zzzquil Natura 10s Chewable...",
        price:"MRP ₹199.00",
        tax:"Inclusive of all taxes",
        offer:"10% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/Q59316/huggies-complete-comfort-wonder-pants-with-aloe-vera-xl-size-baby-diaper-pants-56-count-2-1671744797.jpg?dim=1440x0",
        title:"Huggies Complete Comfort Wonder Pant...",
        price:"MRP ₹1199.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
        
    },
]


localStorage.setItem("newlaunchcart",JSON.stringify(newlaunch))

let newlaunchdata=JSON.parse(localStorage.getItem("newlaunchcart"))||[];

 console.log(newlaunchdata)

displayNewLaunch(newlaunchdata)


function displayNewLaunch(newlaunchdata){

    let container1=document.getElementById("newlaunches")

    newlaunchdata.forEach((el,index)=>{
   
     let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){

        localStorage.setItem("productlist",JSON.stringify(newlaunchdata[index]))
        window.location.href="product.html"
     })

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price

     let ta=document.createElement("h5")
     ta.innerText=el.tax

     let off=document.createElement("h4")
     off.innerText=el.offer
   
     card.append(image,tit,pri,ta,off)
     container1.append(card)
        
    } );
}



let trendingnear =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/U65148/baidyanath-nagpur-mahamanjisthadi-kadha-ayurvedic-blood-purifier-syrup-450-ml-2-1655533130.jpg?dim=1440x0",
        title:"Shelcal 500mg Strip Of 15 Tablets",
        price:"MRP ₹131.30",
        tax:"Inclusive of all taxes",
        offer:"5% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1672136925.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/P71315/pharmeasy-vitamin-b-complex-with-folic-acid-improves-energy-heart-eye-health-bottle-of-60-2-1659444053.jpg?dim=1440x0",
        title:"Everherb Karela Jamun Juice Helps Maintains Healthy",
        price:"MRP ₹649.00",
        tax:"Inclusive of all taxes",
        offer:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/U13516/fixderma-kairfoll-anti-hair-loss-conditioner-200ml-2-1652259133.jpg?dim=1440x0",
        title:"Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        price:" MRP ₹849.00",
        tax:"Inclusive of all taxes",
        offer:"13% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/207833/calcimax-forte-plus-strip-of-30-tablets-2-1671741016.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/H68051/godrej-hit-flies-mosquitoes-black-insect-killer-spray-400-ml-2-1641793715.jpg?dim=1440x0",
        title:"Calcimax Forte Plus<br>Strip Of 30 Tablets",
        price:"MRP ₹285.00",
        tax:"Inclusive of all taxes",
        offer:"14% OFF"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0",
        title:"Pharmeasy Pill Box Organizer",
        price:"MRP ₹499.00",
        tax:"Inclusive of all taxes",
        offer:"40% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1669655023.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/E00158/all-out-ultra-mosquito-repellant-refills-pack-of-6-2-1645196377.jpg?dim=1440x0",
        title:"Accu-chek Active<br>Glucometer Test Strips...",
        price:"MRP ₹1049.00",
        tax:"Inclusive of all taxes",
        offer:"10% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/G19614/liveasy-essentials-adhesive-bandages-box-of-100-1-1641791579.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/H98890/liveasy-essentials-paper-cotton-buds-100s-2-1675416986.jpg?dim=1440x0",
        title:"Liveasy Essentials Adhesive Bandages...",
        price:"MRP ₹199.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-1-1671740677.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/Z08870/pharmeasy-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1672661091.jpg?dim=1440x0",
        title:"Supradyn Multivitamin Tablets Strip Of 15",
        price:"MRP ₹158.78",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I01037/uv-doux-spf-50-tube-of-50gm-sunscreen-gel-1-1671740775.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/R78914/fash-x-gel-face-wash-200ml-2-1670827713.jpg?dim=1440x0",
        title:"Acne Uv Spf 50 Gel 50gm",
        price:"MRP ₹875.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/149350/refresh-tears-05-bottle-of-10ml-eye-drops-1-1671740741.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/E29038/liveasy-essentials-diabetic-orthopedic-slippers-style-2-men-black-size-uk-10-2-1671742785.jpg?dim=1440x0",
        title:"Refresh Tears 05 Bottle Of 10ml Eye Drops",
        price:"MRP ₹1099.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1669655391.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/P20145/desquamar-soap-free-face-cleanser-ph-5-6-for-all-skin-types-100ml-2-1671258700.jpg?dim=1440x0",
        title:"Unwanted 72 Strip Of 1 Tablet",
        price:"MRP ₹300.70",
        tax:"Inclusive of all taxes",
        offer:"17% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1669710365.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/O41553/stayfree-secure-cottony-regular-18s-2-1666017704.jpg?dim=1440x0",
        title:"Accu Chek Instant Glucometer Test Strips Box Of 50",
        price:"MRP ₹145.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
        
    },
]


localStorage.setItem("trendingnearcart",JSON.stringify(trendingnear))

let trendingneardata=JSON.parse(localStorage.getItem("trendingnearcart"))||[];

 console.log(trendingneardata)

displayTrendingNear(trendingneardata)


function displayTrendingNear(trendingneardata){

    let container1=document.getElementById("trendings")

    trendingneardata.forEach((el,index)=>{
   
     let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){

        localStorage.setItem("productlist",JSON.stringify(trendingneardata[index]))
        window.location.href="product.html"
     })

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price

     let ta=document.createElement("h5")
     ta.innerText=el.tax

     let off=document.createElement("h4")
     off.innerText=el.offer
   
     card.append(image,tit,pri,ta,off)
     container1.append(card)
        
    } );
}


 let wellness =[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1654168216.jpg?dim=1440x0",
        title:"Dr Morepen Gluco One Bg 03 Glucometer Test Strips Box Of 50",
        price:"MRP ₹849.00",
        tax:"Inclusive of all taxes",
        offer:"45% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/G19614/liveasy-essentials-adhesive-bandages-box-of-100-1-1641791579.jpg?dim=1440x0",
        title:"Liveasy Essentials Adhesive Bandages - Box Of 100",
        price:"MRP ₹199.00",
        tax:"Inclusive of all taxes",
        offer:"25% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/000665/accu-chek-active-glucometer-test-strips-box-of-50-1-1654077435.jpg?dim=1440x0",
        title:"Accu-Chek Active Glucometer Test Strips Box Of 50",
        price:" MRP ₹1049.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I00631/cetaphil-gentle-skin-cleanser-250ml-2-1632774266.jpg?dim=1440x0",
        title:"Cetaphil Gentle Skin Cleanser - 250ml",
        price:"MRP ₹563.00",
        tax:"Inclusive of all taxes",
        offer:"25% OFF"
    },

    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1664428023.jpg?dim=1440x0",
        title:"Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        price:"MRP ₹399.00", tax:"Inclusive of all taxes",
        offer:"30% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/105900/himalaya-liv52-ds-tablets-60s-2-1654078613.jpg?dim=1440x0",
        title:"Himalaya Liv.52 Ds Tablets - 60's",
        price:"MRP ₹170.00",
        tax:"Inclusive of all taxes",
        offer:"40% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/B39499/pharmeasy-hot-water-bag-blue-2-1656420198.jpg?dim=1440x0",
        title:"Pharmeasy Hot Water Bag - Relieves Pain - Relaxes Sore Muscles - Improves Blood Supply - Blue - 2l",
        price:"MRP ₹349.00",
        tax:"Inclusive of all taxes",
        offer:"35% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/266249/depura-60000-iu-vitamin-d3-oral-solution-helps-bones-healthy-aids-in-boosting-immunity-sugarfree-2-1654077895.jpg?dim=1440x0",
        title:"Depura, 60000 Iu Vitamin D3 Oral Solution,Helps Bones Healthy, Aids In Boosting Immunity, Sugarfree",
        price:"MRP  ₹94.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1641787823.jpg?dim=1440x0",
        title:"Unwanted 72 Strip Of 1 Tablet",
        price:"MRP ₹110.00",
        tax:"Inclusive of all taxes",
        offer:"35% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I32680/accu-chek-instant-glucometer-test-strips-box-of-50-1-1654166925.jpg?dim=1440x0",
        title:"Accu-Chek Instant Glucometer Test Strips Box Of 50",
        price:"MRP ₹1049.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I40164/durex-extra-dots-packet-of-10-condoms-3-1654166124.jpg?dim=1440x0",
        title:"Durex Extra Dots Packet Of 10 Condoms",
        price:"MRP ₹245.00",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I39010/whisper-ultra-clean-size-xl-plus-sanitary-pads-packet-of-44-2-1654166470.jpg?dim=1440x0",
        title:"Whisper Ultra Clean Size Xl Plus Sanitary Pads Packet Of 44",
        price:"MRP ₹549.00",
        tax:"Inclusive of all taxes",
        offer:"33% OFF"
    },
]

localStorage.setItem("wellnesscart",JSON.stringify(wellness))

let wellnessdata=JSON.parse(localStorage.getItem("wellnesscart"))||[];

 console.log(wellnessdata)

displayWellness(wellnessdata)


function displayWellness(wellnessdata){

    let container1=document.getElementById("wellnessessen")

    wellnessdata.forEach((el,index)=>{
   
     let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){

        localStorage.setItem("productlist",JSON.stringify(wellnessdata[index]))
        window.location.href="product.html"
     })

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price

     let ta=document.createElement("h5")
     ta.innerText=el.tax

     let off=document.createElement("h4")
     off.innerText=el.offer
   
     card.append(image,tit,pri,ta,off)
     container1.append(card)
        
    } );
}
 

let dealsofday=[
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/U92247/toothsi-electro-rechargeable-electric-toothbrush-with-2-replaceable-heads-sonic-technology-1-1650108808.jpg?dim=1440x0",
    title:"Toothsi Electro Rechargeable Electric Toothbrush (With 2 Replaceable Heads) - Sonic Technology",
    price:"MRP ₹899.55",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/I09432/neurobion-forte-tablet-30s-2-1656661904.jpg?dim=1440x0",
    title:"Neurobion Forte Tablet 30's",
    price:"MRP ₹31.23",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/082015/himalaya-gasex-tablets-100s-2-1641399057.jpg?dim=1440x0",
    title:"Himalaya Gasex Tablets - 100's",
    price:"MRP ₹136.00",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/270552/revital-h-men-multivitamin-with-calcium-zinc-ginseng-for-immunity-strong-bones-energy-30-capsules-2-1654077741.jpg?dim=1440x0",
    title:"Revital H Men Multivitamin With Calcium, Zinc & Ginseng For Immunity, Strong Bones & Energy (30 Capsules)",
    price:"MRP ₹263.55",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/V31511/liveasy-essentials-diabetic-orthopedic-slippers-style-2-women-brown-size-uk-7-2-1655896250.jpg?dim=1440x0",
    title:"Liveasy Essentials Diabetic & Orthopedic Slippers (Style 2) - Women Brown- Size Uk-7",
    price:"MRP ₹519.00",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products/M15866/kidrich-d3-bottle-of-5ml-oral-solution-1-1663157621.jpg?dim=1440x0",
    title:"Kidrich D3 Bottle Of 5ml Oral Solution",
    price:"MRP ₹38.25",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/269287/muout-plus-powder-119gm-2-1641531916.jpg?dim=1440x0",
    title:"Muout Plus Powder 119gm",
    price:"MRP ₹266.48",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products/L69317/new-polybion-active-sugar-free-bottle-of-100ml-syrup-1-1648457630.jpg?dim=1440x0",
    title:"New Polybion Active Sugar Free Bottle Of 100ml Syrup",
    price:"MRP ₹76.67",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1664427941.jpg?dim=1440x0",
    title:"Everherb (By Pharmeasy) Aloe Vera Juice With Pulp - Rejuvenates Skin & Hair - 1 Litre Bottle",
    price:"MRP ₹199.50",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
},
{
    img:"https://cdn01.pharmeasy.in/dam/products_otc/X96596/power-gummies-hair-vitamins-with-biotin-multivitamin-gummies-2-month-pack-bottle-120-gummies-1-1654233091.jpg?dim=1440x0",
    title:"Power Gummies Hair Vitamins With Biotin Multivitamin Gummies (2 Month Pack) Bottle - 120 Gummies",
    price:"MRP ₹2185.00",
    tax:"Inclusive of all taxes",
    offer:"45% OFF"
}]

localStorage.setItem("dealsofdaycart",JSON.stringify(dealsofday))

let dealsofdaydata=JSON.parse(localStorage.getItem("dealsofdaycart"))||[];

 console.log(dealsofdaydata)

displayDealsofday(dealsofdaydata)


function displayDealsofday(dealsofdaydata){

    let container1=document.getElementById("dealoftheday")

    dealsofdaydata.forEach((el,index)=>{
   
     let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){

        localStorage.setItem("productlist",JSON.stringify(dealsofdaydata[index]))
        window.location.href="product.html"
     })

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price

     let ta=document.createElement("h5")
     ta.innerText=el.tax

     let off=document.createElement("h4")
     off.innerText=el.offer
   
     card.append(image,tit,pri,ta,off)
     container1.append(card)
        
    } );
}
 

let spotlightarr=[
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1664428023.jpg?dim=360x0",
        title:"Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1l",
        price:"MRP ₹207.48",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg?dim=360x0",
        title:"Liveasy Wellness Calcium, Magnesium, Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs",
        price:"MRP ₹569.75",
        tax:"Inclusive of all taxes",
        offer:"35% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1661760039.jpg?dim=360x0",
        title:"Liveasy Wellness Multivitamin Multimineral - Immunity Booster - Complete Nutrition - Bottle Of 60",
        price:"MRP ₹384.54",
        tax:"Inclusive of all taxes",
        offer:"25% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/Q83701/pharmeasy-all-in-one-vaporizer-1-1654233812.jpg?dim=360x0",
        title:"Pharmeasy All-in -one Vaporizer",
        price:"MRP ₹269.55",
        tax:"Inclusive of all taxes",
        offer:"5% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/O31911/everherb-by-pharmeasy-ashwagandha-immunity-booster-capsules-anxiety-stress-relief-bottle-of-60-2-1661760071.jpg?dim=360x0",
        title:"Everherb (By Pharmeasy) Ashwagandha - Immunity Booster Capsules - Anxiety & Stress Relief - Bottle Of 60",
        price:"MRP ₹311.00",
        tax:"Inclusive of all taxes",
        offer:"25% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/N70299/everherb-by-pharmeasy-shilajit-500mg-natural-vigour-improvement-strength-stamina-for-men-bottle-of-60-2-1661760185.jpg?dim=360x0",
        title:"Everherb (By Pharmeasy) Shilajit 500mg - Natural Vigour Improvement - Strength & Stamina For Men - Bottle Of 60",
        price:"MRP ₹499.50",
        tax:"Inclusive of all taxes",
        offer:"22% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products/159115/shelcal-500mg-strip-of-15-tablets-2-1674482021.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/U65148/baidyanath-nagpur-mahamanjisthadi-kadha-ayurvedic-blood-purifier-syrup-450-ml-2-1655533130.jpg?dim=1440x0",
        title:"Shelcal 500mg Strip Of 15 Tablets",
        price:"MRP ₹131.30",
        tax:"Inclusive of all taxes",
        offer:"5% OFF"

    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1669349726.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/D90191/liveasy-wellness-pain-relief-spray-55gm-2-1659963248.jpg?dim=1440x0",
        title:"Pharmeasy Pill Box Organizer",
        price:"MRP ₹499.00",
        tax:"Inclusive of all taxes",
        offer:"40% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/177755/unwanted-72-strip-of-1-tablet-2-1669655391.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/P20145/desquamar-soap-free-face-cleanser-ph-5-6-for-all-skin-types-100ml-2-1671258700.jpg?dim=1440x0",
        title:"Unwanted 72 Strip Of 1 Tablet",
        price:"MRP ₹300.70",
        tax:"Inclusive of all taxes",
        offer:"17% OFF"
        
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/I01037/uv-doux-spf-50-tube-of-50gm-sunscreen-gel-1-1671740775.jpg?dim=1440x0://cdn01.pharmeasy.in/dam/products_otc/R78914/fash-x-gel-face-wash-200ml-2-1670827713.jpg?dim=1440x0",
        title:"Acne Uv Spf 50 Gel 50gm",
        price:"MRP ₹875.00",
        tax:"Inclusive of all taxes",
        offer:"15% OFF"
    },
    {
        img:"https://cdn01.pharmeasy.in/dam/products_otc/165555/supradyn-multivitamin-tablets-strip-of-15-s-1-1671740677.jpg?dim=1440x0https://cdn01.pharmeasy.in/dam/products_otc/Z08870/pharmeasy-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1672661091.jpg?dim=1440x0",
        title:"Supradyn Multivitamin Tablets Strip Of 15",
        price:"MRP ₹158.78",
        tax:"Inclusive of all taxes",
        offer:"20% OFF"
    },
]


localStorage.setItem("spotlightarrcart",JSON.stringify(spotlightarr))

let spotlightarrdata=JSON.parse(localStorage.getItem("spotlightarrcart"))||[];

 console.log(spotlightarrdata)

displaySpotlightarr(spotlightarrdata)


function displaySpotlightarr(spotlightarrdata){

    let container1=document.getElementById("spotlight")

    spotlightarrdata.forEach((el,index)=>{
   
     let card=document.createElement("div")
     card.setAttribute("id","card")
     card.addEventListener("click",function(){

        localStorage.setItem("productlist",JSON.stringify(spotlightarrdata[index]))
        window.location.href="product.html"
     })

     let image=document.createElement("img")
     image.src=el.img

     let tit=document.createElement("h3")
     tit.innerText=el.title

     let pri=document.createElement("p")
     pri.innerText=el.price

     let ta=document.createElement("h5")
     ta.innerText=el.tax

     let off=document.createElement("h4")
     off.innerText=el.offer
   
     card.append(image,tit,pri,ta,off)
     container1.append(card)
        
    } );
}