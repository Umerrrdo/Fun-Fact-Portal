class Question {
  constructor() {
    this.question = "";
    this.answer = undefined;
    this.options = [];
  }
}

// question = new Object();

question1 = new Question();
question1.question = "Q- How wide was the largest snowflake in the world?";
question1.options= ["15 inch", "17 inch", "18 inch", "14 inch"];
question1.answer = 1; 

question2 = new Question();
question2.question = "Q- How many times does a hummingbird's heart beat in a minute?";
question2.options= ["1059", "2452", "1260", "4000"];
question2.answer = 2;

question3 = new Question();
question3.question = "Q- From which country French Fries belongs?";
question3.options= ["France", "Italy", "Spain", "Belgium"];
question3.answer = 3;

question4 = new Question();
question4.question = "Q- A group of crows is called?";
question4.options = ["Kidnap","Murder","Scolvian","Jupiter"];
question4.answer = 1;

question5 = new Question();
question5.question= "Q- An elephant communicate through which sound?"
question5.options= ["Ultrasonic","Hydrophobic","Infrasonic","Sonar"];
question5.answer=2;

question6 = new Question();
question6.question="Q- A human nose can detect upto how many smells?";
question6.options=["1 trillion", "1 billion", "1 million", "10 million"];
question6.answer=0;

question7 = new Question();
question7.question="Q- A Koala can sleep pto how many hours a day?"
question7.options=["20 hours","24 hours","8 hours", "14 hours"]
question7.answer=0;

question8= new Question();
question8.question="Q- A flamboyance is?"
question8.options=["A group of flowers","A group of flames", "A group of flamingos", "A group of fireflies"]
question8.answer=2

question9 = new Question();
question9.question="Q- First computer is made of?";
question9.options=["Metal","Water","Fire","Wood"];
question9.answer=3;

question10= new Question();
question10.question="Q- A sneeze can travel at the speed of?";
question10.options=["140 mph","160mph","180mph","200mph"];
question10.answer=1;


Question=[question1,question2,question3,question4,question5,question6, question7,question8,question9,question10];


selectedList=[];
for (i=0; i<5; i++){
const randomNum = Math.floor(Math.random() * 10);
if(selectedList.includes(Question[randomNum])){
    i--;
}
else{
selectedList.push(Question[randomNum]);
}
}

console.log(selectedList);




var counter=0;
var score=0;

function checkAnswer(){
    var selectedOption = document.querySelector('input[name="question"]:checked').value;
    // console.log(selectedOption);
    // console.log(selectedList[counter].answer);
    if ( parseInt(selectedOption) === selectedList[counter].answer){
        score++;
    }
  counter++;
  quiz();
}

function quiz(){
    document.getElementById("btn").style.display="none";
    document.getElementById("next").style.display="none";
    
    if (counter<5){
      console.log(counter);
        document.getElementById("fact-container").innerHTML = `
        <h1 class="fact-title">Question ${counter+1}</h1>
        <p class="fun-fact-text">
        ${selectedList[counter].question}
        </p>
        <form class="option-container" id="option-container">
        <label for="question" class="fun-fact-text"
            ><input type="radio" name="question" value="0" />${selectedList[counter].options[0]}</label
        >
        <label for="question" class="fun-fact-text"
            ><input type="radio" name="question" value="1" />${selectedList[counter].options[1]}</label
        >
        <label for="question" class="fun-fact-text"
            ><input type="radio" name="question"  value="2" />${selectedList[counter].options[2]}</label
        >
        <label for="question" class="fun-fact-text"
            ><input type="radio" name="question"  value="3" />${selectedList[counter].options[3]}</label
        >
        </form>
        <button class="btn question" onclick="checkAnswer()">Next Question</button>
        `;
        
        // ANSWERING CHECKING PART
    }
    else{
        document.getElementById("fact-container").innerHTML = `
        <h1 class="fact-title">Your Score is ${score}</h1>
        <p class="fun-fact-text">
        Thanks for playing!
        </p>
        <div class="option-container">
        <button class="btn question"  ><a href="fact1.html" style="color:white; text-decoration:none">Go back to Fact</a></button>
        <button class="btn question"  ><a href="ready-for-quiz.html" style="color:white; text-decoration:none">Play Again</a></button>
        </div>
        `;
        counter=0;
        score=0;
    }
  
}

