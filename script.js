var request= new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
var result = JSON.parse(request.response);
console.log(result);
//a. Get all the countries from the Asia continent /region using the Filter function

var con = result.filter((ele)=>ele.region==="Asia").map((ele)=> ele.name);
console.log(con);

//b.Get all the countries with a population of less than 2 lakhs using Filter function

var popu = result.filter((ele)=> ele.population< 200000).map((ele)=>ele.name);
console.log(popu);

//c. Print the following details name, capital, flag using forEach function
var res1 = result.forEach((ele)=> console.log(ele.name,ele.capital,ele.flag));

//d.Print the total population of countries using reduce function

var res2 = result.reduce((acc,cv)=>acc+cv.population,0);
console.log(res2);

//e.Print the country which uses US Dollars as currency.

result.filter(element=>{
    for (let key in element.currencies){

        if(element.currencies[key].code==="USD"){
            console.log(element.name)
        }
    }
})
 


}



    


 