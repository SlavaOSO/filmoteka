var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequired76b=a);var o=a("34clH"),r=a("eTE0Z"),d=a("gnLbn"),c=a("jWOqs");let i=document.querySelectorAll(".eye");function l(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}["mousemove","touchmove"].forEach((e=>{document.body.addEventListener(e,(e=>{i.forEach((t=>{let n=t.getBoundingClientRect().left+t.clientWidth/2,a=t.getBoundingClientRect().top+t.clientHeight/2;const o=l()?e.touches[0].clientX:e.clientX,r=l()?e.touches[0].clientY:e.clientY;let d=Math.atan2(o-n,r-a)*(180/Math.PI)*-1+180;t.style.transform="rotate("+d+"deg)"}))}))}));var u=a("5SzY7"),s=a("z2zGY"),f=a("6WRUV");a("f5Zbu");var b=a("2l4hZ");const m=new(0,u.default);m.spinOn();const g={btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued"),mainContainer:document.querySelector(".filmoteka__container"),openModalBtn:document.querySelector(".modal-footer-open"),mainContainer:document.querySelector(".filmoteka__container"),enLangBTN:document.getElementById("e-lang-en"),uaLangBTN:document.getElementById("e-lang-ua")};g.enLangBTN.addEventListener("click",b.setLibraryLang.bind(null,"en")),g.uaLangBTN.addEventListener("click",b.setLibraryLang.bind(null,"ua"));const v=(0,b.langCurrent)();(0,d.libraryRender)("watched"),(0,b.setLibraryLang)(v),g.btnQueued.addEventListener("click",(function(){g.btnWatched.classList.remove("active-btn"),g.btnQueued.classList.add("active-btn"),(0,d.libraryRender)("queued")})),g.btnWatched.addEventListener("click",(function(){g.btnQueued.classList.remove("active-btn"),g.btnWatched.classList.add("active-btn"),(0,d.libraryRender)("watched")})),g.mainContainer.addEventListener("click",r.openModal),g.openModalBtn.addEventListener("click",o.openModalFooter),(0,c.default)(),m.spinOff(),(0,s.default)(),(0,f.default)();
//# sourceMappingURL=library.bbf5ea07.js.map
