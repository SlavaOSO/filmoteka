!function(){var e={save:function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(t){console.error("Error during saving ".concat(e," to local strage; "),t.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(t){console.error("Error during getting ".concat(e," from localStorage: "),t.message)}},del:function(e){try{localStorage.removeItem(e)}catch(t){console.error("Error during deleting ".concat(e,"! from localStorage: "),t.message)}}};function t(t,n){var a=e.load(n);if(a){var c=a.map((function(e){var t=e.id,n=e.title,a=e.year,c=e.genres,i=e.rating,r=e.imgPath,o='<div class="filmoteka__item" data-id="'.concat(t,'">\n        <a class="filmoteka__item-link" href="./">\n            <div class="filmoteka__item-wrapper">\n                <img class="filmoteka-img" src="').concat(r,'" alt="" width="">\n                <div class="overlay-text">\n                    <h2 class="subtitle">').concat(n,'</h2>\n                    <p class="discription">');return c&&(o+='<span class="description__genre">'.concat(c,"</span>")),a&&(o+='<span class="description__year">'.concat(a,"</span>")),o+='<span class="rating">'.concat(i,"</span></p>\n                </div>\n            </div>\n        </a>\n        </div>")})).join("");t.insertAdjacentHTML("beforeend",c)}else t.insertAdjacentHTML("beforeend",'<div><p2 class="empty_text">It seems that there is no films here!</p2></div>')}function n(e){e.innerHTML=""}var a={mainContainer:document.querySelector(".filmoteka__container"),btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued")};console.log(a.btnQueued),console.log(a.btnWatched),t(a.mainContainer,"watched"),a.btnQueued.addEventListener("click",(function(){a.btnWatched.classList.remove("active-btn"),a.btnQueued.classList.add("active-btn"),n(a.mainContainer),t(a.mainContainer,"queued")})),a.btnWatched.addEventListener("click",(function(){a.btnQueued.classList.remove("active-btn"),a.btnWatched.classList.add("active-btn"),n(a.mainContainer),t(a.mainContainer,"watched")}))}();
//# sourceMappingURL=library.767e9ba6.js.map
