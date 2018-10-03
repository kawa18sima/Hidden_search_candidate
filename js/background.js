window.onload = function(){
  chrome.storage.local.get(["display"], function(data){
    let getData = document.getElementsByClassName("sbdd_a")[0];
    if(data.display){
      getData.parentNode.removeChild(getData);
    }
  });
}
