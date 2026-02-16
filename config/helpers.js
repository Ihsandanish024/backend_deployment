const ResponseObj = (issuccesfull,message ="internal server error",data,error)=>{
return{
    issuccesfull,
    message,
    data,
    error

}
}

module.exports = {ResponseObj}