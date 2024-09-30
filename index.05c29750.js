document.querySelectorAll("form input").forEach(function(e){var t=(e.name.charAt(0).toUpperCase()+e.name.slice(1)).replace(/([A-Z])/g," $1").trim();e.placeholder=t;var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",e.id),r.textContent=t,e.parentElement.insertBefore(r,e)});
//# sourceMappingURL=index.05c29750.js.map
