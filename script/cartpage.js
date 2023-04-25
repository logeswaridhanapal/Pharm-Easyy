let cartdata=JSON.parse(localStorage.getItem("cart"))||[];
// console.log

display(cartdata)


function display(cartdata){
    
    let box=document.getElementById("cart")
    // box.innerHTML=null;

   cartdata.forEach((el,index)=>{
    // console.log(el)
            let card=document.createElement("div")
            card.setAttribute("id","card")
            card.style.border="1px solid gray"
        card.style.borderRadius="10px"
        
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
        
             let addbtn=document.createElement("button")
             addbtn.setAttribute("id","del")
             addbtn.innerText="DELETE"
             addbtn.onclick=()=>{
            del(index)
             }


         


            left.append(image)
            right.append(tit,pri,ta,off,addbtn)
           
             card.append(left,right)
             box.append(card)
        
    })

    
}


function del(index){
    let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

    let deldata=cartdata.splice(index,1)

  localStorage.setItem("cart",JSON.stringify(deldata))

//   display(deldata)

}