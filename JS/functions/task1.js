const formatMessage=(type,message)=>{
    return `[${type.toUpperCase()}] ${message}`;
}


function showNotification(message,displayfn){
   displayfn(message);

}

const message= formatMessage('success','Data saved successfully');
showNotification(message,console.log);