$(document).ready(function () {

    // object to keep track of question information
    function Question(text, correctAnswer, ans2, ans3, ans4) {
        this.questionText = text;
        this.correct = correctAnswer;
        this.answers = [correctAnswer, ans2, ans3, ans4];
        this.imgSrc = correctAnswer;
        this.imgSrc = this.imgSrc.replace(/\s/g, ""); // strip spaces
        this.imgSrc = this.imgSrc.replace(/\./g, ""); // strip periods
        this.imgSrc = "assets/images/" + this.imgSrc + ".jpg";

        this.qTextElement = $("#questionText");
        this.pictureElement = $("#pictureHint");
        this.ans1Element = $("#answer1");
        this.ans2Element = $("#answer2");
        this.ans3Element = $("#answer3");
        this.ans4Element = $("#answer4");
    }

    Question.prototype.updateQuestionText = function () {
        this.qTextElement.text(this.questionText);
    };
    Question.prototype.updateQuestionImage = function () {
        this.pictureElement.attr("src", this.imgSrc);
    };
    Question.prototype.updateAnswers = function () {
        shuffleArray(this.answers);
        this.ans1Element.text(this.answers[0]);
        this.ans2Element.text(this.answers[1]);
        this.ans3Element.text(this.answers[2]);
        this.ans4Element.text(this.answers[3]);
    };
    Question.prototype.print = function () {
        this.updateQuestionText();
        this.updateQuestionImage();
        this.updateAnswers();
    };
    Question.prototype.isAnswerCorrect = function (answer) {
        if (answer == this.correct) {
            return true;
        }
        return false;
    }
    Question.prototype.printCorrectAnswer = function (gotAnswerCorrect) {
        if (gotAnswerCorrect) {
            this.qTextElement.text("You are correct!");
        }
        else {
            this.qTextElement.text("Sorry, the correct answer is:");
        }
        this.ans1Element.text(this.correct);
        this.ans2Element.text("");
        this.ans3Element.text("");
        this.ans4Element.text("");
    };


    // an array to hold all possible questions
    let questionArray = [];

    // initialization of the question array with questions
    questionArray.push(
        new Question("Who is this giant wrestler?", "Big Show", "Andre the Giant", "Sisco", "The Great Khali"));

    questionArray.push(
        new Question("Who is this champion of ROH?", "Jay Lethal", "Mark Briscoe", "Chris Benoit", "Mark Henry"));
    questionArray.push(
        new Question("Who is this sexy boy?", "Shawn Michaels", "Owen Hart", "Triple H", "Chyna"));

    questionArray.push(
        new Question("Who is this Canadian wrestler?", "Bret Hart", "Shawn Michaels", "Owen Hart", "John Cena"));

    questionArray.push(
        new Question("Who is this?", "John Cena", "Dolph Ziggler", "The Miz", "Triple H"));

    questionArray.push(
        new Question("Who is this WCW star?", "Sting", "Raven", "Vampiro", "Lex Luger"));

    questionArray.push(
        new Question("What is the name of this beast?", "Brock Lesnar", "Lex Luger", "Junkyard Dog", "Glacier"));

    questionArray.push(
        new Question("What is the nickname of this wrestler?", "Junkyard Dog", "Willie Mack", "Rowdy Piper", "Booker T"));
    questionArray.push(
        new Question("Who is this beer chuggin' wrestler?", "Stone Cold", "Beer City Bruiser", "Goldberg", "Willie Mack"));

    questionArray.push(
        new Question("Which tag team is this?", "Bushwackers", "Road Warriors", "The Golden Lovers", "The Bar"));

    questionArray.push(
        new Question("Who is this olympian and now pro wrestler?", "Kurt Angle", "Brock Lesnar", "Paul Heyman", "Chris Benoit"));

    questionArray.push(
        new Question("What is the name of this popular indpendent wrestler?", "The Mack", "Ric Flair", "Mark Henry", "Johnny Mundo"));

    questionArray.push(
        new Question("What is the name of this old school wrestler?", "Dusty Rhodes", "Ric Flair", "Hulk Hogan", "Brutus the Barber Beefcakes"));

    questionArray.push(
        new Question("Ooh yeah! Who is this?", "Macho Man", "Ultimate Warrior", "The Rock", "Kevin Nash"));

    questionArray.push(
        new Question("Who is the people's champion?", "The Rock", "John Cena", "Booker T", "Roman Reigns"));

    questionArray.push(
        new Question("What is the name of this popular wrestler?", "Eddie Guererro", "Chris Benoit", "Arn Anderson", "Rey Mysterio"));

    questionArray.push(
        new Question("Who is this?", "Mr. Perfect", "Arn Anderson", "Ric Flair", "Ted DiBiase"));

    questionArray.push(
        new Question("Who is the future leader of WWE?", "Triple H", "Dolph Ziggler", "Shawn Michaels", "Chyna"));

    questionArray.push(
        new Question("Who is arguably the most famous wrestler ever?", "Hulk Hogan", 'Marty "The Moth" Martinez', "Prince Puma", "AJ Styles"));

    questionArray.push(
        new Question("Who is this luchador?", "Pentagon Dark", "Fenix", "Drago", "Aerostar"));

    questionArray.push(
        new Question("Who is this classic 80's wrestler?", "Ultimate Warrior", "Test", "Sting", "Macho Man"));

    questionArray.push(
        new Question("Who is this famous wrestler from Japan?", "Io Shirai", "Sasha Banks", "Bayley", "The Wolf"));

    questionArray.push(
        new Question("Who is this?", "Sasha Banks", "Bayley", "Charlotte Flair", "Sexy Star"));

    questionArray.push(
        new Question("Who is this?", "Undertaker", "Kane", "Paul Bearer", "Matanza Cueto"));


    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
    
     https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    
     */
    function shuffleArray(array) {
        // we are going to run through the array, starting at the lest element,
        // decrementing each iteration
        for (let i = array.length - 1; i > 0; i--) {
            // this line gets a random number between 0 and the current i value
            let j = Math.floor(Math.random() * (i + 1));
            // save the element value at the ith position
            let temp = array[i];
            // swap it with the jth position
            array[i] = array[j];
            array[j] = temp;
            // now we decrement and work on randomizing a smaller section of the array
        }
        // the don't return the array, arrays are passed by reference
        // you are already altering the original array
    }

    function GameScore() {
        this.numCorrectElement = $("#numCorrect");
        this.totalQElement = $("#totalQuestions");
        this.reset();
    }

    GameScore.prototype.reset = function () {
        this.numCorrect = 0;
        this.numWrong = 0;
        this.numNotAnswered = 0;
        return this;
    };
    GameScore.prototype.incrementCorrect = function () {
        return this.numCorrect++;
    };
    GameScore.prototype.incrementWrong = function () {
        return this.numWrong++;
    };
    GameScore.prototype.incrementNotAnswered = function () {
        return this.numNotAnswered++;
    };
    GameScore.prototype.numQuestions = function () {
        //debugger
        return this.numNotAnswered + this.numCorrect + this.numWrong;
    };
    GameScore.prototype.updateScore = function () {
        this.numCorrectElement.text(this.numCorrect);
        this.totalQElement.text(this.numQuestions());
    };

    let score = new GameScore;


    function GameTimer(seconds) {
        this.seconds = seconds;
        this.reset();
    }
    GameTimer.prototype.reset = function () {
        this.currentLeft = this.seconds ;
        this.interval = null;
        this.timeout = null;
        return this;
    }
    GameTimer.prototype.print = function () {
        $("#secondsLeft").text(this.currentLeft);
        return this;
    }
    GameTimer.prototype.decrement = function () {
        this.currentLeft--;
        return this;
    }
    GameTimer.prototype.startInterval = function (callback) {
        this.reset();
        let self = this;

        this.timeout = setTimeout(function () {
            clearInterval(self.interval);
            callback();
        }, this.seconds*1000 + 1100);

        this.interval = setInterval(function () {
            self.print().decrement();
        }, 1000);
    }
    GameTimer.prototype.stopInterval = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.timeout) {
            clearInterval(this.timeout);
        }
    }
    let tenSecondTime = new GameTimer(15);
    let fiveSecondTime = new GameTimer(5);



    // start button callback function
    function startButtonCallback() {
        $("#startButton").hide().off();
        $("#theQuiz").show();
        score.reset().updateScore();
        shuffleArray(questionArray);  // shuffle the array of questions    
        goToState2DisplayQuestion();
    }

    // State 1: Wait for the user to click a button to start the game
    function state1StartGame() {
        // hide some of the stuff that is needed for showing 
        $("#theQuiz").hide();
        $("#startButton").show();

        // wait for them to click the start button
        $("#startButton").click(startButtonCallback);
    }
    state1StartGame();

    // State 2: Display a question
    function goToState2DisplayQuestion() {
        // what number question are we?
        let numOfCurrentQuestion = score.numQuestions();

        if (numOfCurrentQuestion >= 10) {
            return goToState4EndGame();
        }

        questionArray[numOfCurrentQuestion].print();

        // listen to the answer list li's to see if they are clicked
        $("#answers li").click(function (event) {
            tenSecondTime.stopInterval();
            $("#answers li").off();
            console.log($(this).text());
            let result = questionArray[numOfCurrentQuestion].isAnswerCorrect($(this).text());
            if (result) {
                score.incrementCorrect();
            }
            else {
                score.incrementWrong();
            }
            score.updateScore();
            goToState3DisplayAnswer(numOfCurrentQuestion, result);
        });

        // this is the timer
        tenSecondTime.startInterval(function () {
            $("#answers li").off();
            score.incrementNotAnswered();
            score.updateScore();
            goToState3DisplayAnswer(numOfCurrentQuestion, false);
        });
    }

    // State 3: Show the correct answer
    function goToState3DisplayAnswer (currentQuestion, gotAnswerCorrect) {
        questionArray[currentQuestion].printCorrectAnswer(gotAnswerCorrect);
        fiveSecondTime.startInterval(goToState2DisplayQuestion);
    }

    // State 4: Display results
    function goToState4EndGame() {
        $("#answer1").text("Correct: " + score.numCorrect);
        $("#answer2").text("Incorrect: " + score.numWrong);
        $("#answer3").text("Unanswered: " + score.numNotAnswered);
        let percent = Math.floor(score.numCorrect * 100 / score.numQuestions());
        $("#answer4").text("Percent Correct: " + percent + "%");

        if (percent > 90) {
            $("#pictureHint").attr("src", "assets/images/weSaluteYou.jpg");
            $("#question h4").text("Fantastic Job!");
        }
        else if (percent >= 70) {
            $("#pictureHint").attr("src", "assets/images/okayJob.jpg");
            $("#question h4").text("Slightly Above Average");
        }
        else {
            $("#pictureHint").attr("src", "assets/images/ewwTerrible.jpg");
            $("#question h4").text("You need to start watching the WWE Network.");
        }

        $("#startButton").text("Try Again!");
        // wait for them to click the start button
        $("#startButton").click(startButtonCallback);
        $("#startButton").show();
    }


});