var gears,machines,guns,files,lathes = new Number();
var Data = localStorage.getItem("simpleData");
//These all were dutluk, next time they will be using something delicious nomoomonomonom!
//Kookiies
if (Data == null){

  gears=0,machines=0,guns = 0,files=0,lathes=0,cncs=0,waterjets=0;
  localStorage.setItem("simpleData",[[gears,machines,guns,files,lathes,cncs,waterjets]]);
} else {
  var arrayed = Data.split(',');
  gears=Math.round(arrayed[0]),machines=Math.round(arrayed[1]),guns = Math.round(arrayed[2]),files=Math.round(arrayed[3]),lathes=Math.round(arrayed[4]),cncs=Math.round(arrayed[5]),waterjets=Math.round(arrayed[6]);
}
//Initializing
setInterval(numbermaster5k, 250);
setInterval(purchaseable, 250);
setInterval(autoSave, 1000);
//Autosave
function autoSave(){
  localStorage.setItem("simpleData",[Math.round(gears),Math.round(machines),Math.round(guns),Math.round(files),Math.round(lathes),Math.round(cncs),Math.round(waterjets)]);
}
//Manual Churning
$("#addonebtn").click(function(e){
  e.preventDefault();
  addone();
});
function addone(){
  gears++;
  writer();
}
//Price Calculator
function priceCalc(value){
  return Math.round(15*(Math.pow(1.15,value)));
}
function priceLathes(value){
  return Math.round(100*(Math.pow(1.15,value)));
}
function priceCnc(value){
  return Math.round(1100*(Math.pow(1.15,value)));
}
function priceWjet(value){
  return Math.round(12000*(Math.pow(1.15,value)));
}
//Writer
function writer(){
  $("#main .simplefile").html('<kbd>'+priceCalc(files)+'</kbd> Simple File <span class="badge">'+files+'</span>');
  $("#main .metallathe").html('<kbd>'+priceLathes(lathes)+'</kbd> Metal Lathe <span class="badge">'+lathes+'</span>');
  $("#main .cnc").html('<kbd>'+priceCnc(cncs)+'</kbd> CNC <span class="badge">'+cncs+'</span>');
  $("#main .waterjet").html('<kbd>'+priceWjet(waterjets)+'</kbd> WaterJet <span class="badge">'+waterjets+'</span>');
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
    document.title= number + ' | GEARS · MACHINES · GUNS';
}
//Machine Availability
var filebutton = document.getElementById("simple-file");
var lathebutton = document.getElementById("metal-lathe");
var cncbutton = document.getElementById("cnc");
var wjetbutton = document.getElementById("water-jet");
function purchaseable(){
  if (gears>=priceCalc(files)){
      filebutton.disabled = false;
      }
      else {
        filebutton.disabled = true;
      }
  if (gears>=priceLathes(lathes)){
      lathebutton.disabled = false;
      }
      else {
      lathebutton.disabled = true;
      }
  if (gears>=priceCnc(cncs)){
      cncbutton.disabled = false;
      }
      else {
        cncbutton.disabled = true;
      }
  if (gears>=priceWjet(waterjets)){
      wjetbutton.disabled = false;
      }
      else {
      wjetbutton.disabled = true;
      }
}
//Machine Purchase
$("#simple-file").click(function(e){
  e.preventDefault();
  if (gears>=priceCalc(files)){
    files++;
    gears-=priceCalc(files-1);
  }
  writer();
});
$("#metal-lathe").click(function(e){
  e.preventDefault();
  if (gears>=priceLathes(lathes)){
    lathes++;
    gears-=priceLathes(lathes-1);
  }
  writer();
});
$("#cnc").click(function(e){
  e.preventDefault();
  if (gears>=priceCnc(cncs)){
    cncs++;
    gears-=priceCnc(cncs-1);
  }
  writer();
});
$("#water-jet").click(function(e){
  e.preventDefault();
  if (gears>=priceWjet(waterjets)){
    waterjets++;
    gears-=priceWjet(waterjets-1);
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
  gears+=0.025;
}
function lathing(){
  gears+=0.25;
}
function cncing(){
  gears+=2;
}
function waterjetting(){
  gears+=12;
}
