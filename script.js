const homepage=document.querySelector('.homepage')
const nav=document.querySelector('nav')
const uname=document.querySelector('.username')
const userBack=document.querySelector('.userBack')
const input=document.querySelector('input')
const user=document.querySelector('.user')
const submit=document.querySelector('.submit')
const required=document.querySelector('.required')
const navresult=document.querySelector('.result-history')
const select=document.querySelector('.select')
const choose=document.querySelector('.choose')
const logo=document.querySelector('.logo')
const start=document.querySelector('.start')
const quiz=document.querySelector('.quiz')
const audio=document.querySelector('audio')
const time=document.querySelector('.timer')
const nextQua=document.querySelector('.time')
const main =document.querySelector('.main ')
const qua=document.querySelector('.qua')
const ans=document.querySelector('.div1')
const a1 =document.querySelector('.a ')
const b1 =document.querySelector('.b ')
const c1 =document.querySelector('.c ')
const  d1=document.querySelector('.d ')
const  opt=document.querySelectorAll('.div1') 
const button=document.querySelector('.next') 
const img=document.querySelectorAll('.answer') 
const title=document.querySelectorAll('.show') 
const collection1 = document.querySelector("#opt1") 
const collection2 = document.querySelector("#opt2") 
const collection3 = document.querySelector("#opt3") 
const collection4 = document.querySelector("#opt4") 
const progressBar = document.querySelector('.final-result')
const progressValue = document.querySelector('.progress-value')
const res1 =document.querySelector('.res1 ')
const h1=document.querySelector('.h1')
const details=document.querySelector('.details')
const reset=document.querySelector('.reset') 
const homepageButton =document.querySelector('.homepageButton') 
const bestscore=document.querySelector('.score') 
const volume=document.querySelector('.volume') 
const ResultHistory=document.querySelector('.history')
const list=document.querySelector('.list')
const viewResult=document.querySelector('.viewResult') 
const viewHistory=document.querySelector('.viewHistory')
const back=document.querySelector('.back')  



// variables
 
  
let c
let selectQuizType=false
let homeViewHistory=false // to check result history in home page 
let QuizStart=false // to start quiz
let wrongcount=0 // counts wrong options  
let rightcount=0 // counts right options
let skipcount=0  // counts skip questions
let skip=false   // check for skip
let count=0      // iterating question and options
let b=0          // set timer 
let right=''     
let hidden=false // showing warnings
let check=false  // to prevent multi-options 
let val=[]
let x=[]
let value=[] 
let vol=false
let best=0 
let closeHistory=false
let autocount=true 
let auto=false
let uSkip=false
let mainBlock=true
let type=''
let k= navresult.innerText 


required.classList.add('hidden')
choose.classList.add('hidden') 
uname.classList.add('hidden') 
main.classList.add('hidden')         // hide quiz page
quiz.classList.add('hidden')         // hide quiz page and result page logo   
viewResult.classList.add('hidden')   // result page hide
viewHistory.classList.add('hidden')  // history page hide
         
button.innerText='next'

 

select.addEventListener('click',(e)=>{
    e.stopPropagation() 
    select.classList.add('hidden')
    choose.classList.remove('hidden') 
    selectQuizType=true 
     
})   
 
choose.addEventListener('click',(e)=>{
    e.stopPropagation()
    type= e.target.innerText
    select.innerHTML=e.target.innerText
    select.classList.remove('hidden')
    choose.classList.add('hidden')
    selectQuizType=false
     
    if(homeViewHistory==true){
        closeHistory=false
        list.innerHTML=''
        
        for(i=1;i<resultHistory.length;i++){
             
            if((resultHistory[i].Type==='Frontend'|| resultHistory[i].Type==='Frontend ') && (select.innerText=='Frontend'||select.innerText=='Frontend ')){
                const li = document.createElement('li');    
                li.classList.add('list');
                li.innerHTML = `
                ${i}).   Right: ${resultHistory[i].Right},   Wrong: ${resultHistory[i].Wrong},   
                Skip: ${resultHistory[i].Skip},  Result: ${resultHistory[i].Result}%`;
                list.appendChild(li);  
            }
            else  if((resultHistory[i].Type==='Java'|| resultHistory[i].Type==='Java ') && (select.innerText=='Java'||select.innerText=='Java ')){
                const li = document.createElement('li');    
                li.classList.add('list');
                li.innerHTML = `
                ${i}).   Right: ${resultHistory[i].Right},   Wrong: ${resultHistory[i].Wrong},   
                Skip: ${resultHistory[i].Skip},  Result: ${resultHistory[i].Result}%`;
                list.appendChild(li);  
            }
            else  if((resultHistory[i].Type==='MySQL'|| resultHistory[i].Type==='MySQL ') && (select.innerText=='MySQL'||select.innerText=='MySQL ')){
                const li = document.createElement('li');    
                li.classList.add('list');
                li.innerHTML = `
                ${i}).   Right: ${resultHistory[i].Right},   Wrong: ${resultHistory[i].Wrong},   
                Skip: ${resultHistory[i].Skip},  Result: ${resultHistory[i].Result}%`;
                list.appendChild(li);  
            }
        } 
        navresult.innerText=k
             
    }   
}) 
    
 
 

// for view result history in home page 
 
navresult.addEventListener('click',(e)=>{
    e.stopPropagation()
    // open history page
    if(homeViewHistory==false){
        userClick=false
        choose.classList.add('hidden')
        select.classList.remove('hidden')
        logo.classList.add('hidden')
        nav.style.margin='5.5%'
        // adds.classList.add('hidden')
        start.classList.add('hidden')
        viewHistory.classList.remove('hidden')
        viewHistory1()
        homeViewHistory=true
        select.innerText='Filter'
    }
    
})

// for timer and iterating are start
function startQuiz(){
    if(QuizStart == true){
        b=60
        mainBlock=false
        vol=true 
        c=setInterval( a   ,1000)
    }
} 

 
const User=JSON.parse(localStorage.getItem('User')) || { 
    UserName:''
}

 
function checkAndOpen(){
     
    if(username=='' || username==' ' || username=='Name'){
        homepage.classList.add('hidden')
        uname.classList.remove('hidden')
        input.addEventListener('input',(e)=>{
                 
            User.UserName=e.target.value
            localStorage.setItem('User',JSON.stringify(User))
        })
    }
 
 
    else if(QuizStart == true){
        homepage.classList.add('hidden')
        uname.classList.add('hidden')
        main.classList.remove('hidden')
        quiz.classList.remove('hidden')
        QuizStart=true
        startQuiz()
        
        questionsSetup()
        volume1()
    }
}



// for start quiz 
 
if(User.UserName===""){
    user.innerText='Name'
     
}
else{
    user.innerText= User.UserName
} 

let username=user.innerText
start.addEventListener('click',()=>{
    QuizStart= true
    checkAndOpen()
     
})

let userClick=true
user.addEventListener('click',()=>{
    if(userClick==true){
        homepage.classList.add('hidden')
        viewHistory.classList.add('hidden')
        choose.classList.add('hidden')
        uname.classList.remove('hidden')
        input.addEventListener('input',(e)=>{
            User.UserName=e.target.value
                
        } )
    } 
     
    
    
})

userBack.addEventListener('click',()=>{
    uname.classList.add('hidden')
    homepage.classList.remove('hidden') 
})

submit.addEventListener('click',(e)=>{
    debugger
    if(User.UserName.length<5 && QuizStart == true){
         
        user.innerText= User.UserName 
        username=true
        checkAndOpen()
    } 
    else if(userClick==true  && User.UserName.length<5 && User.UserName.length>0){
        homepage.classList.remove('hidden')
        localStorage.setItem('User',JSON.stringify(User))     
        user.innerText=User.UserName
        uname.classList.add('hidden') 
        userClick==true
    }
    else{
        required.classList.remove('hidden')
        input.innerText=""
        required.innerText="Maximum 4 characters only"
    }
})


// localStorage data to store result history 
const resultHistory=JSON.parse(localStorage.getItem('resultHistory')) ||  [{
    Type:'',
    Right:'',
    Wrong:'',
    Skip:'',
    Result:''
}    ]



 //Questions abd options
const questions =[] 
const option1= []
const option2= [] 
const option3= [] 
const option4= [] 
const answer= [] 

function questionsSetup(){
     
    if(select.innerText==='Frontend ' || select.innerText==='Frontend'){
        const Frontend1=[ {question:"1. What is HTML", options1:"It is an backend language", options2:"It is an content of web page",options3:"It is used to style the web page",options4:"It is an database management",answers:"It is an content of web page",duration:""} ,
                      {question:"2. Why anchor tag's are used in HTML", options1:"To change font-style", options2:"Create web-page",options3:"To link another page",options4:"Refresh web page",answers:"To link another page",duration:""} ,
                      {question:"3. How many types of headers in HTML", options1:"6", options2:"4",options3:"3",options4:"5",answers:"6",duration:""} ,
                      {question:"4. Select wrong non replaced inline tag", options1:"Span tag", options2:"Anchor tag",options3:"Bold bold",options4:"iframe tag",answers:"iframe tag",duration:""} ,
                      {question:"5. What is field set", options1:"Create new form", options2:"Adding an boundary to form",options3:"Not a valid form tag",options4:"User defined HTML tag",answers:"Adding an boundary to form",duration:""},
                      {question:"6. Use of radio button", options1:"take only one item among all option", options2:"Select two option",options3:"Select more than one option",options4:"None of this",answers:"take only one item among all option",duration:""},
                      {question:"7. Use of form tag ", options1:"Link new web page", options2:"Collect the user inputs ",options3:"It is an image tag",options4:"Redirecting a page",answers:"Collect the user inputs",duration:""},
                      {question:"8. Correct example to replaced inline tag", options1:"form, img and a tag", options2:"form, table and list tag",options3:"span, iframe and video tag",options4:"iframe, img and video tag",answers:"iframe, img and video tag",duration:""},
                      {question:"9. loop is an attribute of", options1:"video  attribute", options2:"img  attribute",options3:"audio  attribute",options4:"both video & audio attribute",answers:"both video & audio attribute",duration:""},
                      {question:"10. CSS stands for", options1:"Cascading sheet style", options2:"Cascading script sheet",options3:"Cascading style sheet",options4:"Cascading style script",answers:"Cascading style sheet",duration:""},
                      {question:"11. Which tag is used to link external CSS ", options1:"Script tag", options2:"link tag",options3:"style tag",options4:"inline tag",answers:"link tag",duration:""} ,
                      {question:"12. h3 is which type of selector", options1:"id selector", options2:"Class selector",options3:"Pseudo selector",options4:"Element selector",answers:"Element selector",duration:""} ,
                      {question:"13. Highest specificity among this", options1:"Class selector", options2:"Id selector",options3:"Inline Style",options4:"Element selector",answers:"Inline Style",duration:""} ,
                      {question:"14. What is inheritance ", options1:"Over riding properties ", options2:"Adopting properties from child",options3:"Adopting properties from parent only",options4:"Adopting properties from parent, grand parent and root",answers:"Adopting properties from parent, grand parent and root",duration:""} ,
                      {question:"15. Inline elements are  ", options1:"Not support hight and width", options2:"Not support hight only",options3:"Not support  width only",options4:" support hight and width",answers:"Not support hight only",duration:""} ,
                      {question:"16. What is the default property of position ", options1:"Fixed", options2:"Static",options3:"Relative",options4:"Absolute",answers:"Static",duration:""} ,
                      {question:"17. value of 1em is", options1:"16px", options2:"10px",options3:"24px",options4:"18px",answers:"18px",duration:""} ,
                      {question:"18. What is the value of NaN  ", options1:"0", options2:"1",options3:"Undefined",options4:"NaN",answers:"NaN",duration:""} ,
                      {question:"19. Which method is used to add element in array", options1:"shift() and unshift()", options2:"push() and pop()",options3:"pop() and Shift()",options4:"push() and Unshift()",answers:"push() and Unshift()",duration:""} ,
                      {question:"20. Type of array is", options1:"Array", options2:"Function",options3:"Method",options4:"Object",answers:"Object",duration:""} ,
                      {question:"21. The variable before declaring this process is known as ", options1:"Call back", options2:"Call stack",options3:"Hosting",options4:"Local scope",answers:"Hosting",duration:""} ,
                      {question:"22. What is some() method", options1:"Any one condition become false program will be terminate", options2:"until condition become true program will terminate",options3:"All condition become false program will be terminate",options4:"All condition become true program will be terminate",answers:"until condition become true program will terminate",duration:""} ,
                      {question:"23. select the wrong statement for DOM", options1:"DOM is by default object", options2:"DOM is an tree like structure ",options3:"It manipulate only Window port",options4:"Every element have object",answers:"It manipulate only Window port",duration:""} ,
                      {question:"24 Truthy value of NaN", options1:"True", options2:"False",options3:"UNdefined",options4:"NaN",answers:"False",duration:""} ,
                      {question:"25. Math.ceil() is ", options1:"Remove decimal number", options2:" It returns nearest number",options3:"Returns removal decimal number and increased by 1",options4:"Returns random number",answers:"Returns removal decimal number and increased by 1",duration:""} , ]
    
    for(let i=0;i < Frontend1.length;i++){
        questions[i]=Frontend1[i].question
        option1[i]=Frontend1[i].options1
        option2[i]=Frontend1[i].options2
        option3[i]=Frontend1[i].options3
        option4[i]=Frontend1[i].options4
        answer[i]=Frontend1[i].answers
    } 

         
    }else if(select.innerText==='Java ' || select.innerText==='Java'){
        const Frontend1=[ {question:"1. Why Java is not a 100% object oriented", options1:"Because of non primitive data type", options2:"Because of OPP's concept",options3:"Because of dynamic programming",options4:"Because of primitive data type",answers:"Because of primitive data type",duration:""} ,
                      {question:"2. Why Java is platform independent", options1:"Compilation and execution happen in same platform", options2:"Java is Dynamic program",options3:"Compilation and execution happen in different platform",options4:"Java is portable",answers:"Compilation and execution happen in different platform",duration:""} ,
                      {question:"3. What is type-casting", options1:"Converting one data type to another data type", options2:"Changing an address of variable",options3:"Converting one variable to another variable",options4:"None of this",answers:"Converting one data type to another data type",duration:""} ,
                      {question:"4. Were string memory will be allocated", options1:"Code segment", options2:"Stack segment",options3:"Static segment",options4:"String pool",answers:"String pool",duration:""} ,
                      {question:"5. What is the capacity of StringBuilder ", options1:"18", options2:"24",options3:"16",options4:"20",answers:"16",duration:""},
                      {question:"6. Why Java is Rubiest", options1:"Because of OOP's concept", options2:"Because of Object Oriented",options3:"Because of Inheritance",options4:"Because of Garbage collector",answers:"Because of Garbage collector",duration:""} ,
                      {question:"7. Valid Drawback of Array", options1:"Array can grow and shrink", options2:"Allocate continuos memory allocation",options3:"Array can store heterogenous data",options4:"length is an method in Array",answers:"Allocate continuos memory allocation",duration:""} ,
                      {question:"8. What is method overloading", options1:"Method with a same name inside a same class", options2:"Same variables",options3:"Same objects",options4:"Same classes in same packages",answers:"Method with a same name inside a same class",duration:""} ,
                      {question:"9. this() is used to", options1:"Calling one method another", options2:"Calling one class to another class in different packages",options3:"Calling one constructor to constructor in a different class",options4:"Calling one constructor to constructor in same class",answers:"Calling one constructor to constructor in same class",duration:""} ,
                      {question:"10. What is encapsulation", options1:"Inheriting properties and behaviors", options2:"Providing Security",options3:"Method with a same name inside a same class",options4:"Calling one class to another",answers:"Providing Security",duration:""} ,
                      {question:"11. What is meta space", options1:"which can store instance members", options2:"Which can store Final variables",options3:"Which can store Static members",options4:"None of this",answers:"Which can store Static members",duration:""} ,
                      {question:"12. this. is used to", options1:"Calling one class to another class in different packages1", options2:"To overcome the shadowing problem",options3:"Calling one constructor to constructor in a same class",options4:"Calling one constructor to constructor in a different class",answers:"To overcome the shadowing problem",duration:""} ,
                      {question:"13. Use of static", options1:"Memory utilization", options2:"Space utilization",options3:"Security",options4:"Memory and Space utilization",answers:"Memory and Space utilization",duration:""} ,
                      {question:"14. Why multiple and cyclic inheritance not support Java", options1:"Because of Exception", options2:"Because of diamond shape",options3:"Because of interface",options4:"Because of OOP's",answers:"Because of diamond shape",duration:""} ,
                      {question:"15. Advantage of inheritance", options1:"Code Reusability", options2:"Security",options3:"Code maintenance",options4:"Code readability",answers:"Code Reusability",duration:""} ,
                      {question:"16. Parent reference converting to child object is known as ", options1:"Down casting", options2:"Up casting",options3:"Implicit type casting",options4:"Abstraction",answers:"Down casting",duration:""} ,
                      {question:"17. supper() is used to", options1:"Calling one method another", options2:"Calling one class to another class in different packages",options3:"Calling one constructor to constructor in a different class",options4:"Calling one constructor to constructor in same class",answers:"Calling one constructor to constructor in a different class",duration:""} ,
                      {question:"18. Run time polymorphism is also known as", options1:"Method overloading", options2:"Static binding",options3:"Early binding",options4:"Dynamic binding",answers:"Dynamic binding",duration:""} ,
                      {question:"19. Advantages of polymorphism", options1:"Code Reusability", options2:"Code flexibility",options3:"Code maintenance",options4:"Code readability",answers:"Code flexibility",duration:""} ,
                      {question:"20. What is the Aggregation Relationship", options1:"Is-A relationship", options2:"Has-A relationship",options3:"Both",options4:"None of this",answers:"Has-A relationship",duration:""}  ]
    
    for(let i=0;i< Frontend1.length;i++){
        questions[i]=Frontend1[i].question
        option1[i]=Frontend1[i].options1
        option2[i]=Frontend1[i].options2
        option3[i]=Frontend1[i].options3
        option4[i]=Frontend1[i].options4
        answer[i]=Frontend1[i].answers
    } 

         
    }

    else if(select.innerText==='MySQL ' || select.innerText==='MySQL'){
        const Frontend1=[ {question:"1. Entity can be represented by", options1:"Square shape", options2:"Circle shape",options3:"Diamond shape",options4:"Rectangle shape",answers:"Rectangle shape",duration:""} ,
                      {question:"2. Entity which dos not have key attribute known as", options1:"Simple attribute1", options2:"Conceptual entity",options3:"Weak Entity",options4:"Physical entity",answers:"Weak Entity",duration:""} ,
                      {question:"3. Key attribute can be represented by", options1:"Square shape", options2:"Circle shape",options3:"Ellipse",options4:"Underline",answers:"Underline",duration:""} ,
                      {question:"4. Derived attribute can be represented by", options1:"Ellipse", options2:"Double ellipse",options3:"Dotted Ellipse",options4:"Underline. ",answers:"Dotted Ellipse",duration:""} ,
                      {question:"5. What is relational schema", options1:"It is a data", options2:"It is a one database",options3:"It is column",options4:"None of this",answers:"It is a one database",duration:""},
                      {question:"6. What is primary key", options1:"Duplicates are not allowed", options2:"Duplicates are allowed",options3:"Null values are allowed",options4:"None of this",answers:"Duplicates are not allowed",duration:""},
                      {question:"7. Which key is used to insert values in table", options1:"Create", options2:"Show",options3:"Insert",options4:"Select",answers:"Insert",duration:""},
                      {question:"8. Which key is used to show table", options1:"Create", options2:"Show",options3:"Insert",options4:"Select",answers:"Select",duration:""},
                      {question:"9. Which one table level constraint", options1:"Primary key", options2:"Foreign key",options3:"Not null",options4:"Unique",answers:"Foreign key",duration:""},
                      {question:"10. What is the size of char datatype", options1:"255", options2:"260",options3:"254",options4:"240",answers:"255",duration:""},
                      {question:"11. Which command is used to modify table structure", options1:"Delete", options2:"Update",options3:"Drop",options4:"Alter",answers:"Alter",duration:""},
                      {question:"12. Truncate command will", options1:"Delete only column", options2:"Delete all data not a structure",options3:"Delete structure only",options4:"All of the above",answers:"Delete all data not a structure",duration:""},
                      {question:"13. Select is an", options1:"Data definition language", options2:"Data Query Language",options3:"Data Manipulation language",options4:"Data control language",answers:"Data Query Language",duration:""},
                      {question:"14. Describe is an", options1:"Data definition language", options2:"Data Query Language",options3:"Data Manipulation language",options4:"Data control language",answers:"Data definition language",duration:""},
                      {question:"15. Which one is single row function", options1:"count()", options2:"sum()",options3:"length()",options4:"avg()",answers:"length()",duration:""} ]
                      
    
    for(let i=0;i< Frontend1.length;i++){
        questions[i]=Frontend1[i].question
        option1[i]=Frontend1[i].options1
        option2[i]=Frontend1[i].options2
        option3[i]=Frontend1[i].options3
        option4[i]=Frontend1[i].options4
        answer[i]=Frontend1[i].answers
    } 

         
    }
} 
 
 
 // functions

// initialization

function initialize(){  
     
    for(let i=count;i<=count ; i++ ){
     
        qua.innerHTML=questions[i]
        a1.innerHTML=option1[i]
        b1.innerHTML=option2[i]
        c1.innerHTML=option3[i]
        d1.innerHTML=option4[i]
    }
}


// play and pause audio
function volume1(){
    if( vol==true && QuizStart == true){
        volume.innerHTML=`<img src="Images/volume up.png" >
                          <audio autoplay="" loop=""><source src="Images/music.mp3"  type="audio/mp3"> </audio>`
        vol=false 
    }else if( vol==false){
        volume.innerHTML=`<img src="Images/volume down.png" >`
        vol=true
    } 
}



// for track time
let t=false
function a(){

    if(mainBlock==true){
        clearInterval(c)
    }

    if(b==60 ){
        initialize()
    } 

    time.innerHTML=b
    if(b==59){
        time.classList.remove('display')
        time.classList.remove('orange') 
    }     
    else if( b<45 && b>25){
        time.classList.add('yellow')
         
    }
    else if(b>=10 && b<=25){
        time.classList.remove('yellow')
        time.classList.add('orange')
         
    } 
       
    else if(b<=10){
      
         
        if(b%2 != 0 && b>=1){
            
            time.classList.add('display')
            if(hidden==true && count < questions.length){
                nextQua.classList.add('display1')  
            }
        }    
        else{
            time.classList.remove('display')
            if(hidden==true && count < questions.length){
                nextQua.classList.remove('display1')  
            } 
        }
    } 


    function autonext(){
        if(count<option1.length  && check==true){
            b=5
            skip1() 
            auto=true
        }
         
    }

    if( b == 1 && count < option1.length-1){
        check=true    
        autonext()
    }

    if(b==0 && count == option1.length-1 && autocount==true && t==false){
        b=5 
         
        check=true
        nextQua.classList.remove('hidden')
        nextQua.innerText='wait for result'
        skipcount++
        hidden=true
        t=true 
    }
    if(b==0 && t==true){

        resultView()
        clearInterval(c)
    }
     
    b--


}

 
// for reset time and count

function reset1(){
    
        b=60
        count++
        auto=false
        vol=true
        volume1()
        check=false
        hidden=false
        autocount=true 
}


//shows warnings 
function warning(){
    nextQua.classList.remove('display1')
    if(count < option1.length-1){
        nextQua.innerText='Next Question starts in' 
    } else if(count == option1.length-1){
        nextQua.innerText='wait for result'
    }
}


// user skip the question 

function skip1(){
    let t=5
    function s(){
        
        if(t==4 && uSkip==true){
            nextQua.classList.remove('display1')
            nextQua.innerText='You skipped last question'
        }    

        else if(t==1 && uSkip==true){
            nextQua.classList.add('display1')
            nextQua.innerText='Next Question starts in'  
            uSkip=false
            clearInterval(r)
        }

        if(t==5 && auto==true){
                        
            nextQua.classList.remove('display1')
            nextQua.innerText='You skipped this  '
            volume2()
            b=5
            volume.innerHTML=`<img src="Images/volume up.png" >
                          <audio autoplay=""><source src="Images/wait.mp3"  type="audio/mp3"> </audio>`
             
            check=true
        } 

        else if(t==0 && auto==true){
            nextQua.classList.add('display1')
            nextQua.innerText=''
            reset1()
            skipcount++ 
            clearInterval(r)
        } 

        t--

    }

    let r=setInterval(s,1000)
                 
}

 
// to stop audio track at change and skip  
function volume2(){
     
    volume.innerHTML=`<img src="Images/volume up.png" >`
         
    
}


//check the chosen option right 
function validation(){
    
                
    if(answer[count]==collection1.innerText){
        collection1.childNodes[5].innerHTML="Right answer " 
        collection1.childNodes[5].style.color="green"
        collection1.childNodes[3].innerHTML=`<img   src="Images/correct.png" >` 
    }else if(answer[count]==collection2.innerText){
        collection2.childNodes[5].innerText="Right answer "
        collection2.childNodes[5].style.color="green" 
        collection2.childNodes[3].innerHTML=`<img   src="Images/correct.png" >` 
    }else if(answer[count]==collection3.innerText){
        collection3.childNodes[5].innerText="Right answer " 
        collection3.childNodes[5].style.color="green"
        collection3.childNodes[3].innerHTML=`<img   src="Images/correct.png" >` 
    }else if(answer[count]==collection4.innerText){
        collection4.childNodes[5].innerText="Right answer "
        collection4.childNodes[5].style.color="green"
        collection4.childNodes[3].innerHTML=`<img   src="Images/correct.png" >`   
    }
}


//checks the chosen option is wrong 
function notValid(){
    for(j=0;j<1;j++){
        x=collection1.classList
        if(val[1]==x[1]){
            collection1.childNodes[5].innerText="Wrong answer"
            collection1.childNodes[5].style.color="red"
            collection1.childNodes[3].innerHTML=`<img   src="Images/wrong.png" >`     
        }
        x=[]
        x=collection2.classList
        if(val[1]==x[1]){
            collection2.childNodes[5].innerText="Wrong answer"
            collection2.childNodes[5].style.color="red"
            collection2.childNodes[3].innerHTML=`<img   src="Images/wrong.png" >`         
        }
        x=[]
        x=collection3.classList
        if(val[1]==x[1]){
            collection3.childNodes[5].innerText="Wrong answer"
            collection3.childNodes[5].style.color="red"
            collection3.childNodes[3].innerHTML=`<img   src="Images/wrong.png" >`         
        }
        x=[]
        x=collection4.classList
        if(val[1]==x[1]){
        collection4.childNodes[5].innerText="Wrong answer" 
        collection4.childNodes[5].style.color="red"
        collection4.childNodes[3].innerHTML=`<img   src="Images/wrong.png" >` 
               
        }
        x=[] 
    } 

}


// to remove the chosen option after time out
function validatremove(){
                     
    collection1.childNodes[5].innerText="" 
    collection1.childNodes[3].innerHTML=""  

    collection2.childNodes[5].innerText="" 
    collection2.childNodes[3].innerHTML=""  
 
    collection3.childNodes[5].innerText="" 
    collection3.childNodes[3].innerHTML=""  

    collection4.childNodes[5].innerText=""
    collection4.childNodes[3].innerHTML=""  

}     

// it will gives the overall result
function detail(){
    details.innerHTML=`<h2 class="green1">Curet answers : ${rightcount}</h2>
                       <h2 class="red">wrong answers : ${wrongcount}</h2>
                       <h2 class="pink">Skep Questions : ${skipcount}</h2> `
}

// it will give the result view
function resultView(){

    clearInterval(c)  // after completing the quiz clear time interval
     
    main.classList.add('hidden')
    mainBlock=true
    viewResult.classList.remove('hidden')
    volume.innerHTML=`<img src="Images/volume down.png" >`
    progressBar.classList.remove('hidden')

    const view=  parseInt(rightcount /option1.length *100 )

   
      
    h1.innerText="Result : " + rightcount+"/" + questions.length 
     
    progressValue.style.width= `${view}%` // it will show the result in progress bar
    progressValue.style.transition=`width 4s linear` ;
    // it will give the feedback to the user
    if(view >=95 ){
        res1.innerText="Awesome "
        res1.style.color='Green'
    }
    else if(view >=85 && view <95 ){
        res1.innerText="Excellent"
        res1.style.color='lightgrey'
    }
    else if(view >=65 && view <85 ){
        res1.innerText="Good,Do some more practices "
        res1.style.color='orange'
    }
    else if(view >=45 && view <65 ){
        res1.innerText="Keep practices "
        res1.style.color='hotpink'
    }else{
        res1.innerText="Please do practice   "
        res1.style.color='red'
    }

    progressValue.firstElementChild.innerText=  parseInt(view)+"%"
    detail()

    const visitTime1=JSON.parse(localStorage.getItem('visitTime1')) ||  [{
        Attempt:''
    }]
    
    if(visitTime1[0].Attempt==''){
       visitTime1[0].Attempt=0
    }
    let t=visitTime1[0].Attempt
    t++
    visitTime1[0].Attempt=t 
    localStorage.setItem('visitTime1',JSON.stringify(visitTime1))
     
    // it will insert the result data in localStorage 
    for(let i=t;i<=t;i++){
        resultHistory.push({Type:select.innerText,Right:rightcount,Wrong:wrongcount,Skip:skipcount,Result:view})
        
        localStorage.setItem('resultHistory',JSON.stringify(resultHistory))
    }    
    
    
   let max = 0
   for(i = 1 ;i < resultHistory.length ;i++){
         
        if( (resultHistory[i].Result)>max && resultHistory[i].Type==select.innerText){
           max=resultHistory[i].Result
        } 
         
   }
   bestscore.innerText= ` high result ` + max

    reset.classList.remove('hidden')

}



// check history at result page and home page
function viewHistory1(){
    viewResult.classList.add('hidden') 
    main.classList.add('hidden')
    
    if(closeHistory==false){
        closeHistory=true
        list.innerHTML="" 
        for(i=1;i<resultHistory.length;i++){
            const li = document.createElement('li');
            li.classList.add('list');
            li.innerHTML = `
            ${i}). ${resultHistory[i].Type}  &nbsp; Right-${resultHistory[i].Right}, &nbsp;  
            Wrong-${resultHistory[i].Wrong}, &nbsp;  Skip-${resultHistory[i].Skip},  &nbsp;
            Result-${resultHistory[i].Result}%`;
            list.appendChild(li);
        
        }

       
    }   
} 


//it will return to result page
function viewHistory3(){
    viewResult.classList.remove('hidden')
     
    viewHistory.classList.add('hidden') 
    list.innerHTML = ''
    closeHistory=false
     
}


//function to  rest all page data
function resetAll(){
    viewResult.classList.add('hidden')
    nextQua.classList.add('display1')
    vol=true
    volume1()
    count=0
    b=60; 
     
    check=false
    hidden=false
    autocount=true
    wrongcount=0
    rightcount=0
    skipcount=0 
    mainBlock=false 
    button.innerText="next"
    reset.classList.add('hidden') 
}



volume.addEventListener('click',(e)=>{
    e.stopPropagation()
    volume1()
})

 
button.addEventListener('click',(e)=>{
    e.stopPropagation()
    if(check==false && b<=60){
        check==true
        hidden=true 
        autocount=false
        uSkip=true     
        volume2()
        let k=5
        function but(){
            
            
            if(k==5 && count < questions.length-1){
                b=5
                volume.innerHTML=`<img src="Images/volume up.png" >
                          <audio autoplay=""><source src="Images/wait.mp3"  type="audio/mp3"> </audio>` 
                check=true  
                warning()
            }
            if(k==0 && count == questions.length-2){
                button.innerText='result'
            }
            
            if(k==0){
                 
                if(count==questions.length-1  ){
                    skipcount++ 
                    nextQua.classList.add('display1')
                    resultView()
                    clearInterval(w) 
                } 
                else if(count < questions.length-1 ){ 
                    skip1() 
                    reset1() 
                    skipcount++ 
                     
                    clearInterval(w) 
                  
                }   
            }

            k--
        }

        const w=setInterval(but,1000)
        console.log(`'rightcount '+ ${rightcount} +'wrongcount '+${wrongcount}+ 'skipcount '+${skipcount}`)      

    }
})

 
// click option 
opt.forEach ((option) => {
    
    option.addEventListener("click", (e)=>{
        autocount=false    
         
        console.log(e.target.innerText) 
      
        if( check==false){
            check=true 
            volume2() 
            const res=e.target.innerText
            
            if(res === answer[count] && count <= questions.length-1 ){
                volume.innerHTML=`<img src="Images/volume up.png" >
                          <audio autoplay=""><source src="Images/right.mp3"  type="audio/mp3"> </audio>`
                e.target.parentElement.classList.add('right')
                val = e.target.parentElement.classList 
                        
                validation()
             
                let y=5
                hidden=true
                nextQua.classList.remove('display1')
                rightcount++ 
                function wait1(){
                    if(y==5 && count<questions.length-1){
                        b=5
                        nextQua.innerText='Next Question starts in'   
                    } 

                    else if(y==5 && count==questions.length-1){
                        b=5 
                        button.innerText='result'
                        nextQua.innerText="Please wait for result "
                         
                    } 
                     
                    if(y == 0 &&  count <  questions.length-1){
                        e.target.parentElement.classList.remove('right')
                        validatremove()
                        nextQua.classList.add('display1')
                        reset1()
                        clearInterval(waitTime1)
                        
                    }
                 
                    else if(y==0 && count==questions.length-1 ){
                        
                        e.target.parentElement.classList.remove('right') 
                        validatremove()  
                        resultView()
                        clearInterval(waitTime1)
                    }
                y--
            }

            const waitTime1=setInterval(wait1,1000)
        }
       
        else{
             
            val = e.target.parentElement.classList
            validation()
            notValid()
            volume.innerHTML=`<img src="Images/volume up.png" >
                          <audio autoplay=""><source src="Images/wrong.mp3"  type="audio/mp3"> </audio>`
            wrongcount++
            e.target.parentElement.classList.add('wrong') 
            val= e.target.classList
              
            e.target.parentElement.childNodes[2].innerText='Wrong answer'
             
            if(answer[count]==a1.innerText  ){
                right=a1.parentElement
                right.classList.add('right')
                validation()
            } 
            else if(answer[count]==b1.innerText){
                right=b1.parentElement
                right.classList.add('right')
                validation()
            }
            else if(answer[count]==c1.innerText){
                right=c1.parentElement
                right.classList.add('right')
                validation() 
            }
            else if(answer[count]==d1.innerText){
                right=d1.parentElement
                right.classList.add('right')
                validation() 
            }
            let z=5 
            hidden=true
            nextQua.classList.remove('display1')
            function wait(){ 
                
                if(z==5 && count!=questions.length-1){
                    b=5 
                    nextQua.innerText='Next Question starts in'   
                } 

                else if(z==5 && count==questions.length-1){
                    b=5
                    
                    button.innerText='result'
                    nextQua.innerText="Please wait for result "   
                   
                } 
                
                

                if(z==0 && count <= questions.length-2 ){
                    reset1()
                    nextQua.classList.add('display1')
                    right.classList.remove('right')
                    validatremove()
                    e.target.parentElement.classList.remove('wrong')
                    clearInterval(waitTime)
                    
                } 

                else if(count==questions.length-1 && z==0 ){
                    validatremove()
                    right.classList.remove('right')
                    e.target.parentElement.classList.remove('wrong')
                    resultView() 
                    clearInterval(waitTime)
                }
                z-- 
                

            } 
            const waitTime=setInterval(wait,1000)
        }

    }

    console.log(`'rightcount '+ ${rightcount} +'wrongcount '+${wrongcount}+ 'skipcount '+${skipcount}`)
})

   
} ) 

ResultHistory.addEventListener('click',(e)=>{
    back.classList.remove('hidden')        
    viewHistory.classList.remove('hidden')
    viewHistory1()  

})



back.addEventListener('click',(e)=>{
    e.stopPropagation()
    if(homeViewHistory==true){
        // adds.classList.remove('hidden')
        choose.classList.add('hidden')
        select.classList.remove('hidden')
        userClick=true
        nav.style.margin=''
        logo.classList.remove('hidden')
        start.classList.remove('hidden') 
        viewHistory.classList.add('hidden')
        homeViewHistory=false
        select.innerText='Frontend'
    }    
    else {
        viewHistory3()
    }
}) 

homepageButton.addEventListener('click',(e)=>{
    e.stopPropagation(e) 
    viewResult.classList.add('hidden')
    homepage.classList.remove('hidden')
    quiz.classList.add('hidden')
    QuizStart=false
    resetAll()
}) 
              

reset.addEventListener('click',(e)=>{
    e.stopPropagation()
    
    c=setInterval(a,1000)
    viewResult.classList.add('hidden')
    main.classList.remove('hidden') 
    resetAll()
}) 

                       