 let isNightMode=false;
            const body=document.querySelector("body");
            const icon=document.querySelector(".switch .icon")
            const toggle= document.querySelector(".toggle");
            const switchBtn = document.querySelector(".toggle .switch");
            toggle.addEventListener("click",() =>{
                isNightMode=!isNightMode;
                if(isNightMode){
                    icon.style.opacity=0;
                    setTimeout(()=>{
                        icon.innerHTML="&#9789";
                        icon.style.opacity=1;
                    },300)
                }else{
                    icon.style.opacity=0;
                    setTimeout(()=>{
                        icon.innerHTML="&#9728";
                        icon.style.opacity=1;
                    },300)
                }
                toggle.classList.toggle("night");
                switchBtn.classList.toggle("toggledNight");
                body.classList.toggle("dark");
                icon.classList.toggle("icon-color");
            })
