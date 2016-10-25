var stress=0;
var result;
var factors = [];


$(function(){
  $("#warningSigns form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=warningSigns]:checked").each(function(){
      stress++;
      $("#healthSymptoms").show();
      $("#warningSigns").hide();
    });
  });
  $("#healthSymptoms form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=healthSymptoms]:checked").each(function(){
      stress+=2;
      $("#copingMethods").show();
      $("#healthSymptoms").hide();
    });
  });
  $("#copingMethods form").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=CopingMethods]:checked").each(function(){
      stress-=2;
      $("#copingMethods").hide();
      $("#stressResults").show();
    });
    if(stress<5){
      $("#stressResults").append("You're not stressed. Don't waste our time.");
    }
    else if (stress>5 && stress < 10) {
      $("#stressResults").append("You are a stressed, take it easy Bronus Henderson");
    }
    else{
      $("#stressResults").append("chill out bro. What are is am feel?");
    }

  });



});
