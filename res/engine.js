var gears,machines,guns,files,lathes = new Number();
gears=0,machines=0,guns = 0,files=0,lathes=0,cncs=0,waterjets=0;
//These all were dutluk, next time they will be using something delicious nomoomonomonom!
//Initializing
window.onload = function(){timing();};

//Manual Churning
$("#addonebtn").click(function(e){
  e.preventDefault();
  addone();
});
function addone(){
  gears++;
  writer();
}
//Writer
function writer(){
  $("#main .simplefile").html('<kbd>10</kbd> Simple File <span class="badge">'+files+'</span>');
  $("#main .metallathe").html('<kbd>100</kbd> Metal Lathe <span class="badge">'+lathes+'</span>');
  $("#main .cnc").html('<kbd>1K</kbd> CNC <span class="badge">'+cncs+'</span>');
  $("#main .waterjet").html('<kbd>500K</kbd> WaterJet <span class="badge">'+waterjets+'</span>');
  var rounded=Math.round(gears);
  if(rounded<999){
    banksy('GEARS',rounded);
  } else {
    var abbrivated=numeral(rounded).format('0.0a');
    banksy('GEARS',abbrivated);
  }
}
function banksy(text,number){
    $("#main .jtron").html('<i class="fa fa-cogs" aria-hidden="true"></i> '+number);
}
//Machine Purchase
$("#simple-file").click(function(e){
  e.preventDefault();
  if (gears>=10){
    files++;
    gears=gears-10;
  }
  writer();
});
$("#metal-lathe").click(function(e){
  e.preventDefault();
  if (gears>=100){
    lathes++;
    gears=gears-100;
  }
  writer();
});
$("#cnc").click(function(e){
  e.preventDefault();
  if (gears>=1000){
    cncs++;
    gears=gears-1000;
  }
  writer();
});
$("#water-jet").click(function(e){
  e.preventDefault();
  if (gears>=500000){
    waterjets++;
    gears=gears-500000;
  }
  writer();
});
//Timed Patented Number Master 5000!
function timing(){
  setInterval(numbermaster5k, 250);
}
function numbermaster5k(){
  for (i=0;i<files;i++){
    filing();
  }
  for (i=0; i<lathes;i++){
    lathing();
  }
  for (i=0; i<cncs;i++){
    cncing();
  }
  for (i=0; i<waterjets;i++){
    waterjetting();
  }
  writer();
}
//Machines Producing
function filing(){
  gears=gears+0.125;
}
function lathing(){
  gears=gears+2;
}
function cncing(){
  gears=gears+10;
}
function waterjetting(){
  gears=gears+50;
}
