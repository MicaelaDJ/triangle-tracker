$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var side1 = parseInt($("#num1").val());
    var side2 = parseInt($("#num2").val());
    var side3 = parseInt($("#num3").val());

      if ('side1' === 'side2' && 'side1' === 'side3' && 'side2' === 'side3'){
        $("#triangle").after("Equilateral Triangle");
      }
      else if ('side1' === 'side2' && 'side1' !== 'side3' && 'side2' !== 'side3'){
        $("#triangle").after("Isosceles Triangle");
      }
      else if ('side1' !== 'side2' && 'side1' !== 'side3' && 'side2' !== 'side3'){
        $("#triangle").after("Scalene Triangle");
      }
      else{
        $("#triangle").after("Not a Triangle");
      }
      event.preventDefault();
  });
});
