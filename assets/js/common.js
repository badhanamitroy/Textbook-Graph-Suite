// assets/js/common.js
(function(){
  "use strict";

  // Small DOM helper
  window.$id = (id) => document.getElementById(id);

  // parse "w,h" => [w,h] or null
  window.parsePair = (s) => {
    if (typeof s !== "string") return null;
    const [a,b] = s.split(",").map(t => Number(String(t).trim()));
    if (!Number.isFinite(a) || !Number.isFinite(b)) return null;
    return [a,b];
  };

  // clamp
  window.clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

  // timestamp for downloads
  window.isoStamp = () => new Date().toISOString().replace(/[:.]/g,'-');
})();
