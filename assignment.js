// Question number -1 // 1Km = 1000m

function kilometerToMeter(kilometer){
    if(kilometer > 0){
        var meter = kilometer * 1000;
    }
    else {
        console.log("Given Number is Negative")
    }
    return meter;
}
var result = kilometerToMeter(1.5);
console.log(result);

//Question number - 2 // 50TK 100TK 500TK

function budgetCalculator(watch, phone, laptop){
    if(phone < 0 || phone < 0 || laptop < 0){
        console.log("Given Number is Negative");
    }
    else{
        var totalProductCost = (watch * 50) + (phone * 100) + (laptop * 500);
    }
    return totalProductCost;
}
var result = budgetCalculator(1,0,1);
console.log(result);

// Question number - 3 // 1-10 days = 100TK , 11-20 days = 80TK, 21 - any = 50TK

function hotelCost(numberOfDay){
    if(numberOfDay <= 10){
        var totalCostOfHotel = numberOfDay * 100;
    }
    else if( numberOfDay > 10 && numberOfDay <=20){
        totalCostOfHotel = (numberOfDay - 10) * 1000 +  80;
    }
    else if(numberOfDay > 20){
        totalCostOfHotel = (numberOfDay - 20) * 1800 + 50;
    }
    else{
        console.log("Given Number is Negative");
    }
    return totalCostOfHotel;
}
var result = hotelCost(7);
console.log(result);

// Question number - 4 

function megaFriend(Name) {
    var longestWord = "";
  
    Name.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  var word = megaFriend(["Noyon", "Arif", "Moni", "Amjad"]);
  console.log(word);