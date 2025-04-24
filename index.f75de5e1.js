"use strict";
const largeImage = document.getElementById("largeImg");
const thumbs = document.getElementById("thumbs");
thumbs.addEventListener("click", (e)=>{
    e.preventDefault();
    const link = e.target.closest(".list-item__link");
    if (link !== null) largeImage.src = link.href;
});

//# sourceMappingURL=index.f75de5e1.js.map
