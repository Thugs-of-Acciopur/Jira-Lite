let addCardBtn = document.getElementById('addCard');

let todoContiner = document.getElementById('todo');

let count = 1
addCardBtn.addEventListener("click", ()=>{
     let card  = document.createElement("div")
     card.className = "card";
     card.id = "card" + count++
     card.innerText = "Test Card"
     // lets make this card editable: 
     card.setAttribute("contenteditable", "true")
     // let make the card draggable
     card.setAttribute("draggable", "true")
     todoContiner.append(card)

      // this keyword - todo
     card.addEventListener("click", (event_details)=>{
        //   let clickedCard = event_details.target
             console.log(card.innerText)
             console.log(card.innerHTML)
          if(card.innerText == "Test Card"){
               card.innerText = ""
          }
     })


     // this keyword - todo
        card.addEventListener("blur", (event_details)=>{
           let blurredCard = event_details.target

           // delete the card if it is empty

           if(blurredCard.innerText==""){
                blurredCard.remove()
           }
     })


     // dragstart event
     // dragend event
    
     card.addEventListener("dragstart", (event_details)=>{
          card.style.opacity = "0.2"  
          // usinf the unique id of the card => store the id of the card in the dataTransfer object
          event_details.dataTransfer.setData("text", card.id)
     })

     card.addEventListener("dragend", ()=>{
        card.style.opacity = "1.0" 
     })


     // dragover, dragenter , drop

    //  todoContiner.addEventListener("dragover", (event_details)=>{
    //       event_details.preventDefault()
    //  })
    //  todoContiner.addEventListener("dragenter", (event_details)=>{
    //       event_details.preventDefault()
    //  })
    // todoContiner.addEventListener("drop", (event_details)=>{
    //         event_details.preventDefault()   
    // })

    // progress, done


    let dragEvents = ["dragover", "dragenter", "drop"]

    dragEvents.forEach((drag)=>{
        let container = document.querySelectorAll(".column")

        for(let t of container){ // t => todo, progress, done
              t.addEventListener(drag, (event_details)=>{
                    event_details.preventDefault()
              
                    if(drag == "drop"){
                        let cardId = event_details.dataTransfer.getData("text")
                        let draggedCard = document.getElementById(cardId)
                        let columnTobeMoved =  event_details.target
                        columnTobeMoved.append(draggedCard)
                    }
            })
        }

    })
    
    





})


