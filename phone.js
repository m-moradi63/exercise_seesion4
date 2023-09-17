
const sabad =[]
function add_to_phone(name , tel){
    
     const temp = {
        name ,
        tel
    }
    sabad.push(temp)

    console.log(sabad)


}
for (let i=1 ; i<100 ; i++){
    
    add_to_phone(prompt("please inter name:") , parseInt(prompt("please inter tel")))

}