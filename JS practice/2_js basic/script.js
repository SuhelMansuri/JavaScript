/*var firstName = 'Suhel';
console.log(firstName);

var lastName = 'Mansuri';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

// 
/************************
*Type Corcion
*************************/

/*var firstName = 'Suhel';
var age = 28;

console.log(firstName + ' '+ age);

var job, isMarried;
job = 'Engineer';
isMarried = true;

console.log(firstName + ' is a ' + age +' year old ' + job + '. Is he Married? ' +isMarried);

// 

/************************
*variable Mutation
*************************/
/*
age = 'Twenty Eight';
job = 'Qulity Checker';

alert(firstName + ' is a ' + age +' year old ' + job + '. Is he Married? ' +isMarried);

var lastName = prompt('What is his last Name');
console.log(firstName + ' ' + lastName);*/

// Basic operatours
//var year, yearSuhel, yearArjuman;


/************************
*Math Operator
*************************/


/*
 now = 2020;
 ageSuhel = 29;
 ageArjuman = 26;

yearSuhel = now - ageSuhel;
yearArjuman = now - ageArjuman;

console.log(' Suhel birth year '+yearSuhel);
console.log(' Arjuman birth year '+yearArjuman);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


var suhelOlder = ageSuhel > ageArjuman ;
console.log(suhelOlder);

console.log(typeof suhelOlder);

console.log(typeof ageSuhel);
 console.log(typeof 'Suhel is older then Arjuman');
var x;
console.log(x);
*/






/************************
*Operator Precedence
*************************/

/*var now = 2020;
var yearSuhel = 1991;
var fullAge = 18;

var isFullAge = now - yearSuhel >= fullAge;
console.log(isFullAge);

var ageSuhel = now - yearSuhel;
var ageArjuman = 26;

var average = (ageArjuman+ageSuhel)/2;

console.log(average);
 
var x,y;

x = y =  (3+5) * 4 - 6 ;

console.log(x, y);

x *= 2;

console.log(x);

x += 10;
console.log(x);

x--;
console.log(x);*/

/*var massSuhel = 80;
var massArjuman = 45;

var hightSuhel = 1.80;
var hightArjuman = 1.69;

var BMIsuhel = massSuhel/(hightSuhel * hightSuhel);
console.log(' BMI Suhel--'+BMIsuhel);

console.log(typeof BMIsuhel);

var BMIarjuman = massArjuman/(hightArjuman * hightArjuman);
console.log(' BMI Arjuman--'+BMIarjuman);

var higherBMI = BMIsuhel > BMIarjuman;
console.log(higherBMI);

console.log(' Is SuhelBMI higher then ArjumanBMI ? '+higherBMI +'!');*/



/************************
*If else Statments
*************************/

/*
var firstName = 'Suhel';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName+ ' is married!');
}
else{
    console.log(firstName+' will hopefully marry soon :');
}
 
isMarried = true;

if (isMarried){
    console.log(firstName+ ' is married!');
}
else{
    console.log(firstName+' will hopefully marry soon :');
}


var massSuhel = 80;
var massArjuman = 45;

var hightSuhel = 1.80;
var hightArjuman = 1.69;

var BMIsuhel = massSuhel/(hightSuhel * hightSuhel);



var BMIarjuman = massArjuman/(hightArjuman * hightArjuman);



if(BMIsuhel > BMIarjuman){
    console.log('Suhel\'s BMI is higher than Arjuman\'s BMI ');
} else {
    console.log('Arjuman\'s BMI is higher than Suhel\'s BMI ');
}

//console.log(' Is SuhelBMI higher then ArjumanBMI ? '+higherBMI +'!');
*/



/************************
*Boolean logic
*************************/

/*var firstName = 'Suhel';
var age = 20;

if (age < 13){
    console.log(firstName+' is a boy.');
}else if (age >= 13 && age < 20){
    console.log(firstName+' is a teenager.');
}else if (age >= 20 && age < 30){
    console.log(firstName+' is a young.');
}else{
    console.log(firstName+' is a man.');
}*/



/************************
*The Ternary Operator and swich statments
*************************/

/*var firstName = 'Suhel';
var age = 22;

//Ternary Operator

age >= 21 ? console.log(firstName+' can  Marry! ') :
console.log(firstName+' can not Marry! ');

var ageMarry = age >= 21 ? 'can Marry' : 'can not Marry';

console.log(ageMarry);*/

/*
if (age >= 21)
    {
        var ageMerry = 'can Marry'
    }
else{
         var ageMerry = 'can not Marry'
}
*/


// Swich Statments

/*var job = 'home';

switch(job) {
    
    case 'teacher' :
    case 'instructor' :
    console.log(firstName+' teaches to students how to code.');
    break;
        
    case 'driver' :
    console.log(firstName+' drives uber in Montreal.');
    break;
        
    case 'designer' :
    console.log(firstName+' designs beutiful websites.');
    break;
    
    default :
    console.log(firstName+' not working any where from this occupation list.');
}*/
//firstName = 'Suhel';
/*age = 17;
switch(true) {
        
    case  age < 13 :
    console.log(firstName+' is a boy.');
    break;
        
    case age >= 13 && age < 20:
    console.log(firstName+' is a teenager.');
    break;
        
    case age >= 20 && age < 30:
    console.log(firstName+' is a young.');
    break;
        
    default:
    console.log(firstName+' is a man.');
       
}*/





/************************
*Truth and Falsy values and equality operators 
*************************/

// Falsy Values: undefined, null, 0, '', NaN
//True values : not falsy values


/*
var height;
height = 23;

if (height  || height === 0) {
    
    console.log(' variable is dedfined. ');
} else {
    console.log(' variable has not been defined. ');
}


// Equality operators

if (height === '23')
    {
        console.log('The == operators does type coercion!');
    }


*/
/************************
*Coding Challange 2
*************************/





/*var JhonAvgScr = (89+120+121)/3;
var MikeAvgScr = (116+94+120)/3;
var MaryAvgScr = (97+128+105)/3;

console.log('Jhons team average score :'+JhonAvgScr);
console.log('Mikes team average score :'+MikeAvgScr);
console.log('Marys team average score :'+MaryAvgScr);




if((JhonAvgScr > MikeAvgScr) && (JhonAvgScr > MaryAvgScr)) 
   {
    console.log('Jhone team is winner!, average score is : '+JhonAvgScr);
}
else if ((MikeAvgScr > JhonAvgScr) && (MikeAvgScr >                  MaryAvgScr)){
     console.log('Mike team is winner!, average score is : '+MikeAvgScr);
} else if(MaryAvgScr > JhonAvgScr && MaryAvgScr > MikeAvgScr) {
          console.log('Marys team is winner!, average score is : '+MaryAvgScr); 
    }else
{
       
console.log('There is a draw!');

}*/

/*

if(JhonAvgScr > MikeAvgScr)
    {
        console.log('Jhone team is winner!, average score is : '+JhonAvgScr);
    }
else if(MikeAvgScr > JhonAvgScr){
 
    console.log('Mike team is winner!, average score is : '+MikeAvgScr);
}else{
    console.log('There is a draw!');
}
*/




/************************
*Functions
*************************/

/*
function calculateAge(birthYear)
{
    return 2020 - birthYear;
}


var ageSuhel = calculateAge(1991);
var ageArjuman = calculateAge(1994);
var ageSahil = calculateAge(1995);

console.log(ageSuhel,ageArjuman,ageSahil);

function yearUntilRetirement(year,firstName)
{
    var age = calculateAge(year);
    var retirment = 68-age;
    
    if(retirment > 0)
        {
            console.log(firstName+' retires in '+retirment+' years. ');
        } else {
            console.log(firstName+' is already retired before '+retirment*(-1) + ' years.');
        }
    
}

yearUntilRetirement(1948,'Suhel');
yearUntilRetirement(1994,'Arjuman');
yearUntilRetirement(1995,'Sahil');
*/

/************************
*Functions Statements and Expressions
*************************/

// Function declaration

//Function Expression

/*
var whatDoYouDo = function(job, firstName) {
    
    switch(job) {
            
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drive cab in Montreal.';
        case 'designer':
            return firstName + ' design beautiful websites.';
        default:
            return firstName + ' does work some where else.';
    }
}


console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('driver','Mark'));
*/



/************************
*Arrays
*************************/

/*var names = ['John','Mark','Jane'];
var years = new Array(1990,1969,1948);

console.log(names);
console.log(names.length);

names[1]='Ben';
names[names.length]='Mary';
console.log(names);

// diffrent data types

var John = ['John','Smith',1990,'designer',false]

John.push('blue');
John.unshift('Mr.');
console.log(John);

John.pop();
John.pop();
John.shift();
console.log(John);

console.log(John.indexOf(1991));

var isDesigner = John.indexOf('designer') === -1 ? 'Jhon is NOT a designer.' :'Jhone IS a designer.'

console.log(isDesigner);*/


/************************
*Coding Challange 3
*************************/

/*
function tipCalculator(billAmount)
{
    var percentage;
    
    if (billAmount < 50)
        {
            percentage = 0.2
        }
    else if(billAmount >= 50 && billAmount < 200)
        {
            percentage = .15
        }
    else
        {
            percentage = .1
        }
    return percentage * billAmount;
}

console.log(tipCalculator(200));

var bills = [124,48,268];
console.log(bills);
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

console.log(tips);

var totalBills = [(bills[0]+tips[0]),
                  (bills[1]+tips[1]),
                  (bills[2]+tips[2]),];
console.log(totalBills);

*/

/************************
*Objects and properties
*************************/

/*
var John = 
    {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1991,
        family: ['Jane','Mark','Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    };
console.log(John.firstName);
console.log(John['lastName']);
var x = 'birthYear';
console.log(John.birthYear);

John.job = 'designer';
John['isMarried'] = true;
console.log(John);


var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear= 1994;

console.log(jane);
*/
/************************
*Objects and Methods
*************************/

/*
var john = 
    {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1991,
        family: ['Jane','Mark','Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,
        calcAge: function(){
            this.age = 2020-this.birthYear
        }
    };

john.calcAge();
console.log(john);
*/

/************************
*Coading chalange 4
*************************/


/*
var john = 
    {
        firstName : 'John',
        lastName : 'Smith',
        mass : 80,
        height: 1.68,

        johnBMI : function()
        {
            this.BMI = this.mass / (this.height * this.height);
        }
    };
var jhoneBmi = john.johnBMI();

console.log(john.BMI);

var mark = 
    {
        
        firstName :  'Mark',
        lastName :  'Smith',
        mass : 90,
        height : 1.58,
        
        markBMI : function()
        {
            this.BMI = this.mass / (this.height * this.height);
        }
    };

var markBmi = mark.markBMI();
console.log(mark.BMI);


if (mark.BMI > john.BMI)
    {
        console.log(mark.firstName+' '+mark.lastName+' has highesr BMI, BMI is : '+mark.BMI);
    }
else if (john.BMI > mark.BMI)
    {
        console.log(john.firstName+' '+john.lastName+' has highesr BMI, BMI is : '+john.BMI);
    }
else
    {
        console.log('Both have same BMI');
    }

*/


/************************
*Loops and Iteration
*************************/

// for loop
/*
for(var i=1; i<=20; i+= 2)
    {
        console.log(i);
    }

var john = ['John','Smith',1990,'designer',false]


for (var i=0; i<john.length; i++){
    console.log(john[i]);
}


// while loop
console.log('While--------');
var i=0;
while(i < john.length)
{
    console.log(john[i]);
    i++
}
*/


// Continue and Break statements


/*var john = ['John','Smith',1990,'designer',false,'blue']

console.log('Continue--------');
for (var i=0; i<john.length; i++){
    if(typeof(john[i]) !== 'string') continue;
    console.log(john[i]);
}
console.log('Break--------');

for (var i=0; i<john.length; i++){
    if(typeof(john[i]) !== 'string') break;
    console.log(john[i]);
}

console.log('Reverse--------');

for (var i=john.length; i>0; i--)
{    
    console.log(john[i]);
}*/

/************************
*Coading chalange 5
*************************/


var john = {
    
    fullName : 'John Smith',
    bills : [124,48,268,180,42],
    
    tipCalculatour : function()
    {
        this.tips = [];
        this.finalBill = [];  
        
        for(var i =0; i<this.bills.length; i++)
            {
               var bill = this.bills[i]
               var percentage;
                
                if(bill <= 50)
                    {
                       percentage = 0.2;
                    }
                else if(bill > 50 &&                           bill < 200)
                    {
                       percentage = 0.15;
                    }
                else
                    {
                       percentage = 0.10;
                    }
               
               this.tips[i] = bill * percentage ;
                
                this.finalBill[i] = bill + this.tips[i];
                
            }
        console.log('John Paid tips : '+this.tips);
console.log('John paid final amount with tip to restorents : '+this.finalBill);
    }
}


    

var mark = {
    
    fullName : 'Mark Danial',
    bills : [77,475,110,45],
    
    calcTip : function()
    {
        this.tips = [];
        this.finalBill = [];
        
        for(var i = 0; i<this.bills.length; i++)
        {
            var bill = this.bills[i];
            var percentage;
            if(bill < 100)
            {
                percentage =  0.2 ;
            }
            else if(bill >= 100 && bill<300)
            {
                percentage = 0.1 ;            
            }
            else
            {
                percentage = 0.25 ;
            }
            
            this.tips[i] = bill * percentage;
            this.finalBill[i] = this.tips[i]+this.bills[i]
        }
    }
}



function avgTip(tips)
{
   var sum = 0;
    for(var i=0; i<tips.length;i++)
    {
        sum = sum + tips[i];
      
    }
     return sum / tips.length;
}

john.tipCalculatour();
mark.calcTip();

console.log(john);
console.log(mark);

john.average = avgTip(john.tips);
mark.average = avgTip(mark.tips);

console.log(john,mark);


if (john.average > mark.average)
    {
        console.log(john.fullName+'\'s family pays higher tips with an average of $'+john.average);
    }
    else if(mark.average > john.average)
        {
            console.log(mark.fullName+'\'s family pays higher tips with an average of $'+mark.average);
    
        }
    else{
            console.log('Average is same');
        }





































































