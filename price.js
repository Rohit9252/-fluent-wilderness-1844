function change(){
 let a= document.getElementById("vary")
 
 let b=document.getElementById("very")
 let c=document.getElementById("vary1")
 if(c.innerText==="$120"){
    c.innerText="$135"
 }
 else if(c.innerText==="$135"){
    c.innerText="$120"
 }

 if(a.innerText==="$60"){
    a.innerText="$75"
 }
 else if( a.innerText==="$75"){
    a.innerText="$60"
 }
 if(b.innerText==="Contact Us"){
    b.innerText="Annual Plan"
 }
else if( b.innerText==="Annual Plan"){
    b.innerText="Contact Us"
 }



 console.log(a.innerText)

 
}