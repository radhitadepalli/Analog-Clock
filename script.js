setInterval(()=>{
    let date=new Date();
    let hTime=date.getHours();
    let mTime=date.getMinutes();
    let sTime=date.getSeconds();
    let hrotation=30*hTime+(mTime/2)+(sTime/120);
    let mrotation=6*mTime+(sTime/10);
    let srotation=6*sTime;
    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000);