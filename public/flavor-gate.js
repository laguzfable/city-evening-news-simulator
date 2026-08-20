(function(){
function enforceFlavorGate(){
 var story=document.getElementById('story'),summary=document.getElementById('summary'),subhead=document.getElementById('subhead'),evidence=document.getElementById('heroEvidence'),action=document.getElementById('heroAction'),badge=document.getElementById('heroFlavorBadge');
 var storyText=story?[].slice.call(story.querySelectorAll('p')).filter(function(p){return !p.classList.contains('restoredFlavorEvidence')&&!/調味料|調味並食用|調味後食用|口味相符/.test(p.textContent)}).map(function(p){return p.textContent}).join(' '):'',summaryText=summary?summary.textContent.replace(/現場調味料與鍋具殘留顯示[^。]*。?/g,''):'',subheadText=subhead?subhead.textContent.replace(/廚房查獲「[^」]+」調味料與血肉殘留/g,''):'',sourceText=[storyText,summaryText,subheadText].join(' ');
 var hasCannibalEvidence=/疑遭烹煮食用|懷疑涉有食屍行為|人體組織與日常食材混放|部分人體組織.{0,18}(?:遭|被|疑以).{0,12}(?:烹煮|食用)|胃內容物.{0,20}(?:人體組織|血肉)/.test(sourceText);
 if(hasCannibalEvidence)return;
 if(badge)badge.style.display='none';
 if(story){var nodes=story.querySelectorAll('.restoredFlavorEvidence,p'),i;for(i=nodes.length-1;i>=0;i--){if(nodes[i].classList.contains('restoredFlavorEvidence')||/調味料|調味並食用|調味後食用|口味相符/.test(nodes[i].textContent))nodes[i].remove()}}
 if(summary)summary.textContent=summary.textContent.replace(/\s*現場調味料與鍋具殘留顯示[^。]*。?/g,'');
 if(subhead)subhead.textContent=subhead.textContent.replace(/\s*廚房查獲「[^」]+」調味料與血肉殘留/g,'');
 if(evidence)evidence.textContent=evidence.textContent.replace(/；調味跡證：[^；，。]+/g,'');
 if(action)action.textContent=action.textContent.replace(/／分屍後食屍/g,'／分屍').replace(/分屍後食屍/g,'分屍').replace(/\s*｜[^｜]+$/,'');
 document.documentElement.setAttribute('data-cannibal-case','no');
 }
 var previous=window.generateCase;if(previous)window.generateCase=function(){var result=previous.apply(this,arguments);enforceFlavorGate();return result};
 enforceFlavorGate();
})();
