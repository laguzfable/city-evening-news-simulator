(function(){
function finalMotiveConsistency(){
 var hero=document.getElementById('heroMotive'),motive=String(hero&&hero.textContent||'').replace(/^(疑因|原因)[:：]\s*/,'').replace(/…$/,'').trim();if(!motive)return;
 var story=document.getElementById('story'),summary=document.getElementById('summary'),question=document.getElementById('heroQuestion'),flash=document.getElementById('flashText'),suspect=(document.getElementById('heroSuspectLabel')||{}).textContent||'涉案者',result=(document.getElementById('heroResult')||{}).textContent||'',storyText=story&&story.textContent||'';
 [story,summary].forEach(function(el){if(!el)return;el.innerHTML=el.innerHTML.replace(/(曾因|疑因|起因疑與|談到|處理|協調|為)(?:了)?「[^」]+」/g,function(all,prefix){return prefix+'「'+motive+'」'}).replace(/，之後犯案後/g,'，犯案後').replace(/，之後[^，。；]{0,35}，之後/g,'，之後')});
 if(question){var q;if(/復合|分手|感情|前任|曖昧|交往|劈腿|吃醋/.test(motive))q='感情糾紛為何演變成命案？';else if(/錢|債|款|投資|賭|借|薪資|帳/.test(motive))q='金錢爭議為何演變成命案？';else if(/工作|職場|主管|同事|排班|加班/.test(motive))q='職場積怨為何失控？';else if(/鄰居|垃圾|停車|電梯|噪音|社區/.test(motive))q='生活小事為何釀成殺機？';else q='一場爭執為何失控？';question.textContent=q}
 if(flash&&/死亡|不治|身亡|肢解|分屍/.test(result+' '+storyText))flash.textContent='警方表示，'+suspect+'已到案說明，目前全案朝殺人及湮滅證據等罪嫌方向持續偵辦。';
}
var previous=window.generateCase;
if(previous)window.generateCase=function(){
 var result=previous.apply(this,arguments);
 finalMotiveConsistency();
 var weapon=(document.getElementById('heroWeaponLabel')||{}).textContent||'';
 if(window.reconcileFinalWeaponMethod)window.reconcileFinalWeaponMethod(weapon);else if(window.reconcileFlexibleWeaponNarrative)window.reconcileFlexibleWeaponNarrative(weapon);
 if(window.refreshHookHeadline)window.refreshHookHeadline();
 return result;
};
var weapon=(document.getElementById('heroWeaponLabel')||{}).textContent||'';
finalMotiveConsistency();
if(window.reconcileFinalWeaponMethod)window.reconcileFinalWeaponMethod(weapon);else if(window.reconcileFlexibleWeaponNarrative)window.reconcileFlexibleWeaponNarrative(weapon);
if(window.refreshHookHeadline)window.refreshHookHeadline();
})();
