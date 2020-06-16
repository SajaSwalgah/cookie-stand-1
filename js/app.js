'use strict';
var LocationsArr = [];

var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hourArr);

function Location(name, minHourCus, maxHourCus, avgCusCook) {
    this.name = name;
    this.minHourCus = minHourCus;
    this.maxHourCus = maxHourCus;
    this.avgCusCook = avgCusCook;
    LocationsArr.push(this);
    this.randomCust = 0
    //this.RandomCus();
    //this.cookArr = cookArr;
}
console.log(this.name)
// Location.prototype.RandomCus = function(minHourCus,maxHourCus){
//     return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     console.log(`customer number${RandomCus}`);
// Location.prototype.RandomCus = function(minHourCus,maxHourCus){

// }


Location.prototype.getRandomCus = function (minHourCus, maxHourCus) {
   this.randomCust = generateRandomCus(minHourCus, maxHourCus);
   // Math.floor(Math.random() * (maxHourCus - minHourCus)) + minHourCus;
    //return randomCust
};

Location.prototype.finalArrResult = function (cookArr) {
    for (var i = 0; i < hourArr.length; i++) {
        cookArr = [hourArr[0], RandomCus(minHourCus, maxHourCus) * this.avgCusCook];

    }
    return cookArr

    console.log(hourArr[i]);
    console.log(RandomCus(minHourCus, maxHourCus))
    //this.finalArrResult(this.cookArr)
}

//console.log(Location.RandomCus(1,2))

Location.prototype.render = function () {
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = this.name;
    article.appendChild(h2);
   // var ul = document.createElement('ul');
    //article.appendChild(ul);

    var table = document.createElement('table');
    article.appendChild(table);

    var tr = document.createElement('tr');
    table.appendChild(tr);

    var th1 = document.createElement('th');
    th1.textContent = '6am'
    tr.appendChild(th1);
    var th2 = document.createElement('th');
    th2.textContent = '7am'
    tr.appendChild(th2);
    var th3 = document.createElement('th');
    th3.textContent = '8am'
    tr.appendChild(th3);
    var th4 = document.createElement('th');
    th4.textContent = '9am'
    tr.appendChild(th4);
    var th5 = document.createElement('th');
    th5.textContent = '10am'
    tr.appendChild(th5);
    var th6 = document.createElement('th');
    th6.textContent = '11am'
    tr.appendChild(th6);

    var tr2 = document.createElement('tr');
    var td = document.createElement('td');
  td.textContent = this.name;
  tr2.appendChild(td);
  
  var td2 = document.createElement('td');
  td2.textContent = this.randomCust;
  tr2.appendChild(td2);

  var td3 = document.createElement('td');
  td3.textContent = this.randomCust;
  tr2.appendChild(td3);

    table.appendChild(tr2);

}
// var totalCookies = 0

// for (var i = 0; i < hourArr.length; i++) {
//     var cookiesNum = Location.prototype.RandomCus(minHourCus, maxHourCus);
//     var li = document.createElement('li');
//     li.textContent = hourArr[i] + ' : ' + cookiesNum + ' cookies';
//     ul.appendChild(li);
//     totalCookies = totalCookies + cookiesNum

// }
// li.textContent = 'Total: ' + totalCookies + ' cookies';

// console.log(totalCookies)


var Seattle = new Location('Seattle', 23, 65, 6.3);
var Tokyo = new Location('Tokyo', 3, 24, 1.2);
// var Dubai = new Location('Dubai', 11, 38, 3.7, cookArr);
// var Paris = new Location('Paris', 20, 38, 2.3, cookArr);
// var Lima = new Location('Lima', 2, 16, 4.6, cookArr);


Seattle.getRandomCus(minHourCus, maxHourCus);
Seattle.render();
Seattle.finalArrResult(cookArr);

Tokyo.RandomCus(minHourCus, maxHourCus);
Tokyo.render();
Tokyo.finalArrResult(cookArr);

Dubai.RandomCus(minHourCus, maxHourCus);
Dubai.render();
Dubai.finalArrResult(cookArr);

Paris.RandomCus(minHourCus, maxHourCus);
Paris.render();
Paris.finalArrResult(cookArr);

Lima.RandomCus(minHourCus, maxHourCus);
Lima.render();
Lima.finalArrResult(cookArr);

console.log(Seattle);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(Lima);

for(var i = 0; i < LocationsArr.length; i++){
    LocationsArr[i].getRandomCus(minHourCus,maxHourCus);
    LocationsArr[i].render();
  }

function generateRandomCus(minHourCus, maxHourCus){
    var randomCust = Math.random();
    return Math.floor(randomCust * (maxHourCus - minHourCus + 1)) + minHourCus;
  }


// var Seattle = {
//     minHourCus: 23,
//     maxHourCus: 65,
//     avgCusCook: 6.3,
//     cookArr: [],

//     getNumCus: function (minHourCus, maxHourCus) {


//     },

//     RandomCus: function (minHourCus, maxHourCus) {

//         return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     },

// finalArrResult: function (cookArr) {
//         for (var i = 0; i < hourArr.length; i++) {
//             cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];

//         }
//         console.log(hourArr[i]);
// console.log(RandomCus(minHourCus, maxHourCus))
// this.finalArrResult(this.cookArr)
//     },
//   //  this.finalArrResult(this.cookArr)
// render : function(){
//     var parentElement = document.getElementById('Salmon Cookies');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = 'Seattle';
//     article.appendChild(h2);

//     // var p = document.createElement('p');
//     // p.textContent = Seattle ;
//     // article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//    var totalCookies = 0

//     for(var i = 0; i < hourArr.length; i++){
//         var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
//       var li = document.createElement('li');
//       li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
//       ul.appendChild(li);
//       totalCookies= totalCookies + cookiesNum

//     }
//     li.textContent ='Total: ' +totalCookies + ' cookies';

//     console.log(totalCookies)

// }

// }



// Seattle.render();
// //function RandomCus(minHourCus, maxHourCus) {
//     var randomCusNum = Math.random();
//     return Math.floor(randomCusNum * (maxHourCus - minHourCus + 1)) + minHourCus;
//}





// var Tokyo = {
//     minHourCus: 3,
//     maxHourCus: 24,
//     avgCusCook: 1.2,
//     cookArr: [],

//     getNumCus: function (minHourCus, maxHourCus) {


//     },

//     RandomCus: function (minHourCus, maxHourCus) {

//         return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     },

// finalArrResult: function (cookArr) {
//         for (var i = 0; i < hourArr.length; i++) {
//             cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];

//         }
//         console.log(hourArr[i]);
// console.log(RandomCus(minHourCus, maxHourCus))
// this.finalArrResult(this.cookArr)
//     },
//   //  this.finalArrResult(this.cookArr)
// render : function(){
//     // id of Salmon Cookies is in sales.html
//     var parentElement = document.getElementById('Salmon Cookies');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = 'Tokyo';
//     article.appendChild(h2);
//     // or article.append(h2);

//     // var p = document.createElement('p');
//     // p.textContent = Seattle ;
//     // article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//    var totalCookies = 0

//     for(var i = 0; i < hourArr.length; i++){
//         var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
//       var li = document.createElement('li');
//       li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
//       ul.appendChild(li);
//       totalCookies= totalCookies + cookiesNum

//     }
//     li.textContent ='Total: '+ totalCookies + ' cookies';

//     console.log(totalCookies)

// }

// }

// Tokyo.render();




// var Dubai = {
//     minHourCus: 11,
//     maxHourCus: 38,
//     avgCusCook: 3.7,
//     cookArr: [],

//     getNumCus: function (minHourCus, maxHourCus) {


//     },

//     RandomCus: function (minHourCus, maxHourCus) {

//         return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     },

// finalArrResult: function (cookArr) {
//         for (var i = 0; i < hourArr.length; i++) {
//             cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];

//         }
//         console.log(hourArr[i]);
// console.log(RandomCus(minHourCus, maxHourCus))
// this.finalArrResult(this.cookArr)
//     },
//   //  this.finalArrResult(this.cookArr)
// render : function(){
//     // id of Salmon Cookies is in sales.html
//     var parentElement = document.getElementById('Salmon Cookies');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = 'Dubai';
//     article.appendChild(h2);

//     // var p = document.createElement('p');
//     // p.textContent = Seattle ;
//     // article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//    var totalCookies = 0

//     for(var i = 0; i < hourArr.length; i++){
//         var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
//       var li = document.createElement('li');
//       li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
//       ul.appendChild(li);
//       totalCookies= totalCookies + cookiesNum

//     }
//     li.textContent ='Total: ' + totalCookies + ' cookies';

//     console.log(totalCookies)

// }

// }
// Dubai.render();



// var Paris = {
//     minHourCus: 20,
//     maxHourCus: 38,
//     avgCusCook: 2.3,
//     cookArr: [],

//     getNumCus: function (minHourCus, maxHourCus) {


//     },

//     RandomCus: function (minHourCus, maxHourCus) {

//         return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     },

// finalArrResult: function (cookArr) {
//         for (var i = 0; i < hourArr.length; i++) {
//             cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];

//         }
//         console.log(hourArr[i]);
// console.log(RandomCus(minHourCus, maxHourCus))
// this.finalArrResult(this.cookArr)
//     },
//   //  this.finalArrResult(this.cookArr)
// render : function(){
//     // id of Salmon Cookies is in sales.html
//     var parentElement = document.getElementById('Salmon Cookies');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = 'Paris';
//     article.appendChild(h2);

//     // var p = document.createElement('p');
//     // p.textContent = Seattle ;
//     // article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//    var totalCookies = 0

//     for(var i = 0; i < hourArr.length; i++){
//         var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
//       var li = document.createElement('li');
//       li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
//       ul.appendChild(li);
//       totalCookies= totalCookies + cookiesNum

//     }
//     li.textContent ='Total: '+ totalCookies + ' cookies';

//     console.log(totalCookies)

// }

// }

// Paris.render();



// var Lima = {
//     minHourCus: 2,
//     maxHourCus: 16,
//     avgCusCook: 4.6,

//     cookArr: [],

//     getNumCus: function (minHourCus, maxHourCus) {


//     },

//     RandomCus: function (minHourCus, maxHourCus) {

//         return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
//     },

// finalArrResult: function (cookArr) {
//         for (var i = 0; i < hourArr.length; i++) {
//             cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];

//         }
//         console.log(hourArr[i]);
// console.log(RandomCus(minHourCus, maxHourCus))
// this.finalArrResult(this.cookArr)
//     },
//   //  this.finalArrResult(this.cookArr)
// render : function(){
//     // id of Salmon Cookies is in sales.html
//     var parentElement = document.getElementById('Salmon Cookies');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = 'Lima';
//     article.appendChild(h2);

//     // var p = document.createElement('p');
//     // p.textContent = Seattle ;
//     // article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);


//    var totalCookies = 0

//     for(var i = 0; i < hourArr.length; i++){
//         var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
//       var li = document.createElement('li');
//       li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
//       ul.appendChild(li);
//       totalCookies=+ totalCookies + cookiesNum

//     }
//     li.textContent ='Total : ' +totalCookies + ' cookies';

//     console.log(totalCookies)

// }

// }
// Lima.render();