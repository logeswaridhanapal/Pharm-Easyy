let productdata=JSON.parse(localStorage.getItem("productlist"))||[];

let cart=JSON.parse(localStorage.getItem("cart"))||[];

displayproduct(productdata)

function displayproduct(el){
    // console.log(el)

    let box=document.getElementById("product")
    box.innerHTML=null;

    let card=document.createElement("div")
    card.setAttribute("id","card")

    let left=document.createElement("div")
    left.setAttribute("id","left")

    let right=document.createElement("div")
    right.setAttribute("id","right")
   

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

     let addcart=document.createElement("button")
     addcart.setAttribute("id","add")
     addcart.innerText="Add To Cart"
    

    
     addcart.addEventListener("click",function(){
     
     cart.push(productdata)
     localStorage.setItem("cart",JSON.stringify(cart))
     alert("Item Added To Cart Successfully")

     })

     left.append(image)
     right.append(tit,pri,ta,off,addcart)
   
     card.append(left,right)
     box.append(card)
}