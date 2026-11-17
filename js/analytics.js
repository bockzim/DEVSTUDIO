(function(){
  var C=(typeof CFG!=="undefined"?CFG:{}), ref=(window.TRK&&TRK.ref)||"";
  if(C.clarityId){
    (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",C.clarityId);
    if(ref) clarity("set","anuncio",ref);
  }
  if(C.gaId){
    var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+C.gaId;document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
    gtag("js",new Date());gtag("config",C.gaId);
  }
  var old=window.trackLead;
  window.trackLead=function(w){
    if(old) old(w);
    if(C.gaId&&window.gtag) gtag("event","whatsapp_click",{local:w||"whatsapp",anuncio:ref});
    if(C.clarityId&&window.clarity) clarity("event","whatsapp_click");
  };
})();
