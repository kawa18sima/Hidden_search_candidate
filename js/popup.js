let app = new Vue({
  el:"#app",
  data: {
    select:false
  },
  methods:{
    changeSelect:function(){
      this.select = !this.select;
      chrome.storage.local.set({display:this.select}, ()=>{});
    }
  },
  created:function(){
    chrome.storage.local.get(["display"], function(data){
      this.select = data.display;
    }.bind(this));
  }
});
