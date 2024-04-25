let addCardBtn = document.getElementById('addCard');

let todoContiner = document.getElementById('todo');

addCardBtn.addEventListener("click", ()=>{
    let superCard = document.createElement("div")
    superCard.style.backgroundColor = "red"
     let card  = document.createElement("div")
     card.className = "card";
     card.innerText = "Test Card"
     // lets make this card editable: 
     card.setAttribute("contenteditable", "true")
        superCard.append(card)
     

      // this keyword - todo
     card.addEventListener("click", (event_details)=>{
        //   let clickedCard = event_details.target
            //  console.log(card.innerText)
            //  console.log(card.innerHTML)
          if(card.innerText == "Test Card"){
               card.innerText = ""
          }
     })


     // this keyword - todo
     card.addEventListener("blur", (event_details)=>{
           let blurredCard = event_details.target

           // get parent of the blurred card
              let parentOfBluuredCard = blurredCard.parentElement
    
           // delete the card if it is empty

           if(blurredCard.innerText==""){
                   parentOfBluuredCard.remove()
           }
     })

    //  selector with 3 options => todo, progress, done
     let selector = document.createElement("select")
     selector.innerHTML = `
            <option value="todo">Todo</option>
            <option value="progress">Progress</option>
            <option value="done">Done</option>
     `

     superCard.append(selector)
      
     selector.addEventListener("change", (event_details)=>{
          let selectedElement = event_details.target 
          let selectedValue = selectedElement.value  // progress => lets move the card to progress
          // get the column in which card is to be moved:

          let columnTobeMoved = document.getElementById(selectedValue)
        //   console.log(columnTobeMoved)
         
         columnTobeMoved.append(superCard)  // closures(supercard, card)


     })


     todoContiner.append(superCard)

})



// function hello(){
//       let card 

//       function test(){
//           console.log(card)
//       }
// }