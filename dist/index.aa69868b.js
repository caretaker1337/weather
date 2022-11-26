window.onload = ()=>{
    const touchData = {
        touchendX: 0,
        touchendY: 0,
        touchstartX: 0,
        touchstartY: 0
    };
    const forecast = document.getElementsByClassName("forecast")[0];
    const clOpened = "forecast--opened";
    if (forecast) {
        forecast.addEventListener("touchstart", ({ changedTouches  })=>{
            touchData["touchstartX"] = changedTouches[0].screenX;
            touchData["touchstartY"] = changedTouches[0].screenY;
        }, false);
        forecast.addEventListener("touchend", ({ changedTouches  })=>{
            const { touchendY , touchstartY  } = touchData;
            touchData["touchendX"] = changedTouches[0].screenX;
            touchData["touchendY"] = changedTouches[0].screenY;
            if (touchendY < touchstartY) {
                forecast.classList.add(clOpened);
                console.log("Swiped up");
                console.log(forecast);
            }
            if (touchendY > touchstartY) {
                forecast.classList.remove(clOpened);
                console.log("Swiped down");
            }
        }, false);
    }
};

//# sourceMappingURL=index.aa69868b.js.map
