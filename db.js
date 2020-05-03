let db = {}
this.db=db
const saveData = (key,data)=>{
    this.db[key]=data
}
const getData = (key)=>{
    return this.db[key]
}
const size = () =>{
    let i = 0;
    for ( const [key, value] of Object.entries(db)){
        i++
    }
    return i
}
  
module.exports = {getData:getData,saveData:saveData,size:size}
