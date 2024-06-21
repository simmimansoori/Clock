const currentTime = () => {
        
    let curTime = new Date();
    let Time = curTime.toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'});
    document.getElementById("clock").innerText = Time;
  
  } 

  currentTime();
  
  const intervalId = setInterval( () => {
      currentTime();
  }, 1000); 
  
  // setTimeout( () => clearInterval(intervalId) ,5000);
  
