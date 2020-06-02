;(function(window, document, undefined){
  "use strict";
  
  var stickySocialBar = document.querySelector(".sticky-social-bar");

  if(stickySocialBar){
    var url = location.href;
    var title = document.title;
    
    var shareLinks = {
      facebook: "https://facebook.com/sharer/sharer.php?u=" + String(url),
      twitter: "https://twitter.com/intent/tweet?text=" + String(title) + "&url=" + String(url),
      gplus: "https://plus.google.com/share?url=" + String(url)
    };
    
    var socialItems = stickySocialBar.querySelectorAll(".social-item a:not([href^=mailto])");

    [].forEach.call(socialItems, function(item){
      item.addEventListener("click", function(e){
        e.preventDefault();
        var social = this.getAttribute("data-social");

        window.open(shareLinks[social], "social", "menubar=1,resizable=1,width=500,height=300");
      });
    });
  }
})(window, document);