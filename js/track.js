(function(){
  var U={};
  try{
    var P=new URLSearchParams(location.search);
    ["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].forEach(function(k){
      var v=P.get(k); if(v) sessionStorage.setItem(k,v);
      v=sessionStorage.getItem(k); if(v) U[k]=v;
    });
  }catch(e){}
  window.TRK={utm:U,ref:(U.utm_content||U.utm_campaign||"").replace(/[^\w-]/g,"")};
  window.trackLead=function(){};
  var id=(typeof CFG!=="undefined"&&CFG.pixelId)||"";
  if(!id) return;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");
  fbq("init",id); fbq("track","PageView");
  window.trackLead=function(w){fbq("track","Lead",{content_name:w||"whatsapp"})};
  document.addEventListener("click",function(e){
    var a=e.target.closest&&e.target.closest("a[href*='wa.me']");
    if(a) trackLead(a.id||"link-whatsapp");
  },true);
})();
