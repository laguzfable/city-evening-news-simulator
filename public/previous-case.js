(function(){
var previousSnapshot=null,hasRenderedCase=false,isRestoring=false;
var button=document.getElementById('previousCaseBtn');
function snapshotCurrentCase(){
 var paper=document.querySelector('.paper'),slider=document.getElementById('violenceWeight'),headline=document.getElementById('headline');
 if(!paper||!headline||headline.textContent.trim()==='案件載入中')return null;
 return {html:paper.innerHTML,weight:slider?slider.value:'50',violenceCase:document.documentElement.getAttribute('data-violence-case'),violenceWeight:document.documentElement.getAttribute('data-violence-weight'),sexual:document.documentElement.getAttribute('data-random-sexual-assault')};
}
function updateButton(){if(button)button.disabled=!previousSnapshot}
window.restorePreviousCase=function(){
 if(!previousSnapshot||isRestoring)return;
 var paper=document.querySelector('.paper'),slider=document.getElementById('violenceWeight'),label=document.getElementById('violenceValue'),saved=previousSnapshot;
 if(!paper)return;
 isRestoring=true;
 paper.innerHTML=saved.html;
 if(slider)slider.value=saved.weight;
 if(label)label.textContent=saved.weight+'%';
 [['data-violence-case',saved.violenceCase],['data-violence-weight',saved.violenceWeight],['data-random-sexual-assault',saved.sexual]].forEach(function(x){if(x[1]===null)document.documentElement.removeAttribute(x[0]);else document.documentElement.setAttribute(x[0],x[1])});
 previousSnapshot=null;
 updateButton();
 isRestoring=false;
 window.dispatchEvent(new Event('resize'));
};
var previousGenerate=window.generateCase;
if(previousGenerate)window.generateCase=function(){
 if(hasRenderedCase&&!isRestoring)previousSnapshot=snapshotCurrentCase();
 var result=previousGenerate.apply(this,arguments);
 hasRenderedCase=true;
 updateButton();
 return result;
};
updateButton();
})();
