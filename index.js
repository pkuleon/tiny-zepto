(function(global){
const $q = (s) => {
  let res = []
  if (!s) res = []
  else if (typeof s === 'string')
    if (s.trim()[0] === '<') { let d=document.createElement('div'); d.innerHTML=s.trim(); res=[...d.children] }
    else res = [...document.querySelectorAll(s)]
  else if (s instanceof Element) res=[s]
  else if (s instanceof NodeList || Array.isArray(s)) res=[...s]
  return {
    eq(i){return i===undefined?res:res[i]},
    forEach(f){res.forEach((e,i)=>f(e,i));return this},
    html(t){return t===undefined?res[0]?.innerHTML:this.forEach(e=>e.innerHTML=String(t))},
    text(t){return t===undefined?res[0]?.textContent:this.forEach(e=>e.textContent=t)},
    addClass(c){return this.forEach(e=>e.classList.add(c))},
    removeClass(c){return this.forEach(e=>e.classList.remove(c))},
    hasClass(c){return res.some(e=>e.classList.contains(c))},
    attr(k,v){return v===undefined?res[0]?.getAttribute(k):this.forEach(e=>e.setAttribute(k,v))},
    css(k,v){return v===undefined?res[0]?.style[k]:this.forEach(e=>e.style[k]=v)},
    on(ev,f,o){return this.forEach(e=>e.addEventListener(ev,f,o))},
    off(ev,f,o){return this.forEach(e=>e.removeEventListener(ev,f,o))},
    append(n){return this.forEach(e=>e.append(n.cloneNode(true)))},
    find(s){let r=[];this.forEach(e=>r.push(...e.querySelectorAll(s)));return $q(r)},
    data(k,v){return v===undefined?res[0]?.dataset[k]:this.forEach(e=>e.dataset[k]=v)},
    remove(){return this.forEach(e=>e.remove())}
  }
}
if(typeof module!=='undefined') module.exports=$q;
else global.$q=$q;
})(typeof window!=='undefined'?window:this);
