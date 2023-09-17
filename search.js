
const sabad =[]
function add_to_phone(name , tel ){
    
     const temp = {
        name ,
        tel
    }

    sabad.push(temp)
    console.log(sabad)
    }  
    let temp1 = 0
    function search_item(find){
        for(let i=0 ; i<sabad.length ; i++){
            if(find==sabad[i].name){
                temp1 = 1   
                console.log("result of your search:" , sabad[i])
                   }
                  
             }
             if(temp1==0) {
                console.log("not find")
              }
              else return
    }
          
    



for (let i=1 ; i<3 ; i++){
    
    add_to_phone(prompt("please inter name:") , parseInt(prompt("please inter tel")))

}
search_item(prompt("please inter search item")) 