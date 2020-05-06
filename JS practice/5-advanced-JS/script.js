// function Cunstructor

/*var john = {

    name : 'John',
    yearOfbirth : '1991',
    job : 'teacher'
};

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfbirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.currentCity = 'Montreal';
Person.prototype.lastName = 'Smith';
Person.prototype.calculateAge = function(){
     console.log(2020-this.yearOfbirth);   
    }

var john  = new Person('John',1991,'teacher');
var jane = new Person('Jane',1996, 'designer');
var mark = new Person('Mark',1948, 'retired');
var jeff = new Person('Jeff',1978, 'manager');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
jeff.calculateAge();

console.log(john);
console.log(jane);
console.log(mark);
console.log(jeff);*/


//Object.Create 

/*
var personProto = {
    
    calculateAge : function(){
        console.log(2020-this.yearOfBirth);
    }
};

var john = Object.create(personProto);

john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,{
    
    name : {value : 'Jane'},
    yearOfBirth : {value : 1996},
    job: {value : 'designer'}
});
*/


// Primitives & Objects

// Primitives
/*
    var a = 23;
    var b = a;
    a = 46;

    console.log(a);
    console.log(b);

//objects

var obj1 = {
    
    name: 'John',
    age : 23
}

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 29;
var obj = {
    
    name : 'Suhel',
    city: 'Montreal'
};

function change(a,b){
    a = 30;
    b.city = 'Toronto';
}

change (age,obj);

console.log(age);
console.log(obj.city);
*/

// passing function as argumemt
/*
var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calcAge(el){
    return 2016-el;
}
function isFullAge(el){
    return el >= 18;
}
function maxHeartRate(el){
    
    if(el >= 18 & el <= 81){
        return Math.round(206.9-(0.67*el));
    }else{
        return -1;
    }
}
var ages = arrayCalc(years,calcAge);
var fullAge = arrayCalc(ages,isFullAge);
var hertRate = arrayCalc(ages,maxHeartRate);
console.log(ages);
console.log(fullAge);
console.log(hertRate);
*/
//Functions returning Functions

/*function jobInterviewQue(job){
    if(job === 'designer'){
        return function(name){
            console.log(name+', can you please explain what is UX design is?');
        }
        
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subjects do you teach '+ name + ' ?')
        }
    } else{
        return function(name){
            console.log('Hello'+ name +'What do you do?');
        }
    }      
}

var teacherQuestion = jobInterviewQue('teacher');
teacherQuestion('John');
var designerQuestion = jobInterviewQue('designer');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Shown');
designerQuestion('Nency');

jobInterviewQue('teacher')('Kavya');*/

//IIFE

/*function game(){
    
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();*/
/*

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

// Closures
/*function retirement(retirementAge){
    a = ' years left until retirement.'
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a );
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67)
retirementGermany(1991);
retirementUS(1991);
retirementIceland(1991);*/

//retirement(66)(1991);

/*
function jobInterviewQue(job){
    if(job === 'designer'){
        return function(name){
            console.log(name+', can you please explain what is UX design is?');
        }
        
    }else if(job === 'teacher'){
        return function(name){
            console.log('What subjects do you teach '+ name + ' ?')
        }
    } else{
        return function(name){
            console.log('Hello'+ name +'What do you do?');
        }
    }      
}

var teacherQuestion = jobInterviewQue('teacher');
teacherQuestion('John');
var designerQuestion = jobInterviewQue('designer');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Jane');
designerQuestion('Shown');
designerQuestion('Nency');

jobInterviewQue('teacher')('Kavya');
*/
/*
function jobInterviewQuestion(job){
    var a = ', what is your job'
  return function(name){
        if (job === 'designer'){
            console.log(name+', can you please explain what is UX design is?');
        } else if(job === 'teacher'){
            console.log('What subjects do you teach '+ name + ' ?')
        } else {
            console.log('Hello'+ name +'What do you do?');
        }
            
    }
}


jobInterviewQuestion('teacher')('John');
jobInterviewQuestion('designer')('Mark');*/

// Bind Call and Apply

/*
var sam = {
    name : 'Samir',
    age : 32,
    job : 'designer',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good '+ timeOfDay + ', Ladies and gentlemen! I\'m ' +this.name + ', I\'m a '+this.job+ ' and I\' m '+this.age+ ' years old.' );
        } else if(style === 'friendly'){
            console.log('Hey! What\'s up, I \'m '+this.name+ ', I \'m a '+this.job+ ' and I \'m '+this.age+ ' years old. Have nice '+timeOfDay+ '.');
        }
    }
};

var arju = {
    name : 'Arjuman',
    age : 26,
    job : 'teacher' 
};

sam.presentation('formal','morning');

sam.presentation.call(arju,'friendly','afternoon');

//sam.presentation.apply(arju,['friendly','afternoon']);

var samFriendly = sam.presentation.bind(sam,'friendly');
samFriendly('morning');
samFriendly('night');

var arjuFormal = sam.presentation.bind(arju,'formal');
arjuFormal('afternoon');



var years = [1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
function calcAge(el){
    return 2016-el;
}
function isFullAge(limit,el){
    return el >= limit;
}

var ages = arrayCalc(years,calcAge);

var fulljapan = arrayCalc(ages,isFullAge.bind(this,20));

console.log(fulljapan);
console.log(ages);
*/
//CODING CHALLANGE -7

/*1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that)*/

/*var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfbirth = yearOfBirth;
    this.job = job;    
}

Person.prototype.currentCity = 'Montreal';
Person.prototype.lastName = 'Smith';
Person.prototype.calculateAge = function(){
     console.log(2020-this.yearOfbirth);   
    }

var john  = new Person('John',1991,'teacher');
var jane = new Person('Jane',1996, 'designer');
var mark = new Person('Mark',1948, 'retired');
var jeff = new Person('Jeff',1978, 'manager');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
jeff.calculateAge();

console.log(john);
console.log(jane);
console.log(mark);
console.log(jeff);*/

(function(){
    function Question(question,answers,correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
    
    
    Question.prototype.displayQuestion = 
        function() {
        console.log(this.question);
        
        for(var i = 0;i<this.answers.length; i++){
            console.log(i + ': '+this.answers[i]);
        }
    }
    
    Question.prototype.checkAnswer = 
        function(ans , callback){
        var sc; 
        if(ans === this.correctAnswer){
            console.log('Correct answer!');
           sc = callback(true);
        } else {
            console.log('Wrong answer. Try again : )');
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score){
        console.log('Your Current score is :'+score);
        console.log('------------------------------');
    }
    
    var q1 = new Question('Is JavaScript is a coolest programming language in the world?' ['Yes', 'No'], 0);


    var q2 = new Question('What is the name of this course\'s teacher?',['John','Mical','Jonas'], 2);

    var q3 = new Question('What does best describe coding?', ['Boaring','Hard','Fun','Tedious'], 2);

    var questions = [q1,q2,q3];
    
    function result(){
        var sc = 0;
        return function(correctAnswer){
            if(correctAnswer){
                sc ++
            }
            return sc;
        }
    }
    
    var keepScore = result();
    
    function nextQuestion(){
        console.log('Question Length--------'+questions.length);
        var n = Math.floor(Math.random()*questions.length);

        questions[n].displayQuestion();
        
        var answer = prompt('Please select correct answer.') ; 
        
        if(answer !== 'exit'){ 
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        } else{
            
        }
        
            }
     
 nextQuestion();

})();

    












































































































