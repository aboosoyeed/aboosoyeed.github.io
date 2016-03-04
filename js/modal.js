Modal={
  show:function(callback){
    document.querySelector(".modal").setAttribute("class","modal");
    document.querySelector(".modal-backdrop").setAttribute("class","modal-backdrop");
    callback();
  },
  hide:function(){
    document.querySelector(".modal").setAttribute("class","modal hide");
    document.querySelector(".modal-backdrop").setAttribute("class","modal-backdrop hide");
  }

}
