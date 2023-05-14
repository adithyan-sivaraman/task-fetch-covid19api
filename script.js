
var h1 = document.createElement("h1");
h1.textContent = "Covid 19 Tracker";
h1.setAttribute("style","margin-top:50px;text-align:center")
document.body.append(h1)
  
var div = document .createElement("div");
div.id="data";
div.style.width ="100%";
div.style.marginTop ="20px";
div.style.display ="flex";
div.style.flexDirection ="column";
div.style.justifyContent ="center";
div.style.alignItems ="center";


var input = document.createElement("input");
input.type = "text";
input.id = "name";
input.style.width = "20%";
input.placeholder = "Enter the country name";

var btn = document.createElement("button");
btn.className = "btn btn-primary";
btn.style.width="100px";
btn.textContent ="Search";
btn.style.marginTop ="10px";
btn.addEventListener("click",bar)
div.append(input,btn)
document.body.append(div)


  async function bar(){

    try {
      var name = document.getElementById("name").value
      var url = `https://api.covid19api.com/dayone/country/${name}`
      var request = await  fetch(url)

      let para = document.querySelectorAll("p");
          if(para.length>0){
            para.forEach((p)=>{
              p.remove()
            })
          }
       
        if(request){
          var text = await request.json()
          console.log(text[text.length-1])
         var active = text[text.length-1].Active
          var deaths = text[text.length-1].Deaths
          var recovered = text[text.length-1].Recovered

          console.log(active);
          console.log(deaths);
          console.log(recovered);

          
          var p1 = document.createElement("p");
          
          p1.className ="text-primary";
          p1.textContent = "No of Active Cases: "+active
          p1.style.marginTop="20px"
          document.getElementById("data").append(p1)

          var p2 = document.createElement("p");
   
          p2.className ="text-primary";
          p2.textContent = "No of Deaths: "+deaths
          document.getElementById("data").append(p2)

          var p3 = document.createElement("p");
         
          p3.className ="text-primary";
          p3.textContent = "No of Recovered: "+recovered
          document.getElementById("data").append(p3)

        }
       
       
    } catch (error) {
      console.log(error);
      console.log("no records found")
          var p = document.createElement("p");
          p.className ="text-primary";
          p.textContent = "No records found"
          p.style.marginTop ="20px"
          document.getElementById("data").append(p)
    }
  }
