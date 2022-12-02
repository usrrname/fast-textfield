(()=>{"use strict";var e,a={658:(e,a,r)=>{var t=r(655),i=r(23),l=r(657),o=r(639);class n extends o.OI{constructor(){super(...arguments),this.label="",this.invalid=!1}}(0,t.gn)([(0,i.Lj)({attribute:"label"})],n.prototype,"label",void 0),(0,t.gn)([(0,i.Lj)({attribute:"invalid",mode:"boolean"}),l.LO],n.prototype,"invalid",void 0),(0,t.gn)([(0,i.Lj)({attribute:"validationmessage"})],n.prototype,"errorMessage",void 0),(0,t.gn)([(0,i.Lj)({attribute:"helptext"})],n.prototype,"helpText",void 0),(0,t.gn)([(0,i.Lj)({attribute:"optionality"})],n.prototype,"optionality",void 0),(0,t.gn)([(0,i.Lj)({attribute:"aria-errormessage"}),l.LO],n.prototype,"ariaErrormessage",void 0);var d=r(95),s=r(300),p=r(696),$=r(528);n.define({name:"custom-text-field",template:function(e={}){return d.d`
<template>
  ${(0,s.g)((e=>e.label),d.d`<label part="label" for="${e=>e.id}" 
    class="${e=>e.label?"label":"label label__hidden"}"
    value="${e=>e.label}" 
    id="label-${e=>e.id}">${e=>e.label}
  </label>

  ${(0,s.g)((e=>e.optionality),d.d`<span class="optionality">${e=>e.optionality}</span>`)}

  ${(0,s.g)((e=>e.helpText),d.d`<p id="helper-${e=>e.id}">${e=>e.helpText}</p>`)}
  `)}


  <div part="root" class="root">
    <div part="control" class="control">
      ${(0,$.m9)(e)}
      <input 
        id="${e=>e.id}" 
        name="${e=>e.name}"
        class="${e=>e.invalid?"control invalid":"control valid"}" 
        :start="${e=>e.start}"
        :end="${e=>e.end}" 
        :placeholder="${e=>{var a;return null!==(a=e.placeholder)&&void 0!==a?a:""}}" 
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}" 
        aria-controls="${e=>e.ariaControls}" 
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.helpText?`helper-${e.id}`:""}" 
        aria-invalid="${e=>e.invalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}" 
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.label?`label-${e.id}`:""}" 
        aria-describedby="${e=>e.helpText?`helper-${e=>e.id}`:""}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}" 
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}" 
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}" ?readonly="${e=>e.readOnly}" 
        ?required="${e=>e.required}"
        ?spellcheck="${e=>e.spellcheck}" list="${e=>e.list}" 
        maxlength="${e=>e.maxlength}"
        minlength="${e=>e.minlength}" 
        name="${e=>e.name}" 
        pattern="${e=>e.pattern}" 
        size="${e=>e.size}"
        tabindex="${e=>e.disabled?null:0}" 
        type="${e=>e.type}"
        :value="${e=>e.value}" 
        ${(0,p.i)("control")} />
      ${(0,$.LC)(e)}
    </div>
  </div>
</template>`}()})}},r={};function t(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}};return a[e](l,l.exports,t),l.exports}t.m=a,e=[],t.O=(a,r,i,l)=>{if(!r){var o=1/0;for(p=0;p<e.length;p++){for(var[r,i,l]=e[p],n=!0,d=0;d<r.length;d++)(!1&l||o>=l)&&Object.keys(t.O).every((e=>t.O[e](r[d])))?r.splice(d--,1):(n=!1,l<o&&(o=l));if(n){e.splice(p--,1);var s=i();void 0!==s&&(a=s)}}return a}l=l||0;for(var p=e.length;p>0&&e[p-1][2]>l;p--)e[p]=e[p-1];e[p]=[r,i,l]},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.j=982,(()=>{var e={982:0};t.O.j=a=>0===e[a];var a=(a,r)=>{var i,l,[o,n,d]=r,s=0;if(o.some((a=>0!==e[a]))){for(i in n)t.o(n,i)&&(t.m[i]=n[i]);if(d)var p=d(t)}for(a&&a(r);s<o.length;s++)l=o[s],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(p)},r=self.webpackChunktext_field_repro=self.webpackChunktext_field_repro||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))})();var i=t.O(void 0,[736],(()=>t(658)));i=t.O(i)})();