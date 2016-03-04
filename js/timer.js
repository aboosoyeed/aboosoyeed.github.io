Timer=function(actuator){
  this.sec=0;
  this.min=0;
  this.hr=0;
  this.run();
  this.htmlActuator=actuator;
};

Timer.prototype.serialize=function(){
  return this.hr+":"+this.min+":"+this.sec;
};
Timer.serialize=function(totalSecs){
  if(totalSecs==undefined)
    return "NA"
  var hr=Math.floor(totalSecs/3600);
  totalSecs=totalSecs-hr*3600
  var min=Math.floor(totalSecs/60);
  totalSecs=totalSecs-min*60;
  var sec=totalSecs;
  return hr+":"+min+":"+sec;
};

Timer.prototype.set=function(totalSecs){
  this.hr=Math.floor(totalSecs/3600);
  totalSecs=totalSecs-this.hr*3600
  this.min=Math.floor(totalSecs/60);
  totalSecs=totalSecs-this.min*60;
  this.sec=totalSecs;
};

Timer.prototype.totalSecs=function() {
  return this.hr*3600+this.min*60+this.sec;
};

Timer.prototype.run = function () {
  var self=this;
  //this.clearContainer(this.timerContainer);
  setTimeout(function(){
    self.sec++;
    if(self.sec>59)
    {
      self.sec=0;
      self.min++;
    }
    if(self.min>59)
    {
      self.min=0;
      self.hr++;
    }

    self.htmlActuator.timerContainer.textContent=self.serialize();
    self.run();
  }, 1000);


};
