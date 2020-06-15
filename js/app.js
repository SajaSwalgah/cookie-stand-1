'use strict';
console.log('hhh')
var hourArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hourArr);


var Seattle = {
    minHourCus: 23,
    maxHourCus: 65,
    avgCusCook: 6.3,
    cookArr: [],

    getNumCus: function (minHourCus, maxHourCus) {


    },

    RandomCus: function (minHourCus, maxHourCus) {
        
        return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
    },

finalArrResult: function (cookArr) {
        for (var i = 0; i < hourArr.length; i++) {
            cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];
            
        }
        console.log(hourArr[i]);
console.log(RandomCus(minHourCus, maxHourCus))
this.finalArrResult(this.cookArr)
    },
  //  this.finalArrResult(this.cookArr)
render : function(){
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Seattle';
    article.appendChild(h2);

    // var p = document.createElement('p');
    // p.textContent = Seattle ;
    // article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
   

   var totalCookies = 0
  
    for(var i = 0; i < hourArr.length; i++){
        var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
      var li = document.createElement('li');
      li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
      ul.appendChild(li);
      totalCookies= totalCookies + cookiesNum
     
    }
    li.textContent ='Total: ' +totalCookies + ' cookies';
    
    console.log(totalCookies)
    
}

}

Seattle.render();
// //function RandomCus(minHourCus, maxHourCus) {
//     var randomCusNum = Math.random();
//     return Math.floor(randomCusNum * (maxHourCus - minHourCus + 1)) + minHourCus;
//}





var Tokyo = {
    minHourCus: 3,
    maxHourCus: 24,
    avgCusCook: 1.2,
    cookArr: [],

    getNumCus: function (minHourCus, maxHourCus) {


    },

    RandomCus: function (minHourCus, maxHourCus) {
        
        return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
    },

finalArrResult: function (cookArr) {
        for (var i = 0; i < hourArr.length; i++) {
            cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];
            
        }
        console.log(hourArr[i]);
console.log(RandomCus(minHourCus, maxHourCus))
this.finalArrResult(this.cookArr)
    },
  //  this.finalArrResult(this.cookArr)
render : function(){
    // id of Salmon Cookies is in sales.html
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Tokyo';
    article.appendChild(h2);
    // or article.append(h2);

    // var p = document.createElement('p');
    // p.textContent = Seattle ;
    // article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
   

   var totalCookies = 0
  
    for(var i = 0; i < hourArr.length; i++){
        var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
      var li = document.createElement('li');
      li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
      ul.appendChild(li);
      totalCookies= totalCookies + cookiesNum
     
    }
    li.textContent ='Total: '+ totalCookies + ' cookies';
    
    console.log(totalCookies)
    
}

}

Tokyo.render();




var Dubai = {
    minHourCus: 11,
    maxHourCus: 38,
    avgCusCook: 3.7,
    cookArr: [],

    getNumCus: function (minHourCus, maxHourCus) {


    },

    RandomCus: function (minHourCus, maxHourCus) {
        
        return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
    },

finalArrResult: function (cookArr) {
        for (var i = 0; i < hourArr.length; i++) {
            cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];
            
        }
        console.log(hourArr[i]);
console.log(RandomCus(minHourCus, maxHourCus))
this.finalArrResult(this.cookArr)
    },
  //  this.finalArrResult(this.cookArr)
render : function(){
    // id of Salmon Cookies is in sales.html
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Dubai';
    article.appendChild(h2);

    // var p = document.createElement('p');
    // p.textContent = Seattle ;
    // article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
   

   var totalCookies = 0
  
    for(var i = 0; i < hourArr.length; i++){
        var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
      var li = document.createElement('li');
      li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
      ul.appendChild(li);
      totalCookies= totalCookies + cookiesNum
     
    }
    li.textContent ='Total: ' + totalCookies + ' cookies';
    
    console.log(totalCookies)
    
}

}
Dubai.render();



var Paris = {
    minHourCus: 20,
    maxHourCus: 38,
    avgCusCook: 2.3,
    cookArr: [],

    getNumCus: function (minHourCus, maxHourCus) {


    },

    RandomCus: function (minHourCus, maxHourCus) {
        
        return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
    },

finalArrResult: function (cookArr) {
        for (var i = 0; i < hourArr.length; i++) {
            cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];
            
        }
        console.log(hourArr[i]);
console.log(RandomCus(minHourCus, maxHourCus))
this.finalArrResult(this.cookArr)
    },
  //  this.finalArrResult(this.cookArr)
render : function(){
    // id of Salmon Cookies is in sales.html
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Paris';
    article.appendChild(h2);

    // var p = document.createElement('p');
    // p.textContent = Seattle ;
    // article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
   

   var totalCookies = 0
  
    for(var i = 0; i < hourArr.length; i++){
        var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
      var li = document.createElement('li');
      li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
      ul.appendChild(li);
      totalCookies= totalCookies + cookiesNum
     
    }
    li.textContent ='Total: '+ totalCookies + ' cookies';
    
    console.log(totalCookies)
    
}

}

Paris.render();



var Lima = {
    minHourCus: 2,
    maxHourCus: 16,
    avgCusCook: 4.6,

    cookArr: [],

    getNumCus: function (minHourCus, maxHourCus) {


    },

    RandomCus: function (minHourCus, maxHourCus) {
        
        return Math.floor(Math.random() * (maxHourCus-minHourCus))  + minHourCus;
    },

finalArrResult: function (cookArr) {
        for (var i = 0; i < hourArr.length; i++) {
            cookArr = [hourArr[0], RandomCus(maxHourCus, maxHourCus) * this.avgCusCook];
            
        }
        console.log(hourArr[i]);
console.log(RandomCus(minHourCus, maxHourCus))
this.finalArrResult(this.cookArr)
    },
  //  this.finalArrResult(this.cookArr)
render : function(){
    // id of Salmon Cookies is in sales.html
    var parentElement = document.getElementById('Salmon Cookies');

    var article = document.createElement('article');
    parentElement.appendChild(article);

    var h2 = document.createElement('h2');
    h2.textContent = 'Lima';
    article.appendChild(h2);

    // var p = document.createElement('p');
    // p.textContent = Seattle ;
    // article.appendChild(p);

    var ul = document.createElement('ul');
    article.appendChild(ul);
   

   var totalCookies = 0
  
    for(var i = 0; i < hourArr.length; i++){
        var cookiesNum = this.RandomCus(this.minHourCus,this.maxHourCus);
      var li = document.createElement('li');
      li.textContent = hourArr[i] + ' : ' +cookiesNum + ' cookies';
      ul.appendChild(li);
      totalCookies=+ totalCookies + cookiesNum
     
    }
    li.textContent ='Total : ' +totalCookies + ' cookies';
    
    console.log(totalCookies)
    
}

}
Lima.render();