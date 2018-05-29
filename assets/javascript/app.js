$(document).ready(function () {

    // cache the jquery references to needed elements
    // used by multiple objects and functions
    let qTextElement = $("#questionText");
    let pictureElement = $("#pictureHint");
    let ans1Element = $("#answer1");
    let ans2Element = $("#answer2");
    let ans3Element = $("#answer3");
    let ans4Element = $("#answer4");
    let numCorrectElement = $("#numCorrect");
    let totalQElement = $("#totalQuestions");
    let startButtonElement = $("#startButton");
    let nextButtonElement = $("#nextButton");
    let wholeQuizElement = $("#theQuiz");
    let allTheAnswerElements = $("#answers li");


    // object to keep track of question information
    function Question(text, correctAnswer, ans2, ans3, ans4) {
        this.questionText = text;
        this.correct = correctAnswer;
        this.answers = [correctAnswer, ans2, ans3, ans4];
        this.imgSrc = correctAnswer;
        // change wrestler name to match their image file
        this.imgSrc = this.imgSrc.replace(/\s/g, ""); // strip spaces
        this.imgSrc = this.imgSrc.replace(/\./g, ""); // strip periods
        this.imgSrc = "assets/images/" + this.imgSrc + ".jpg";
    }
    Question.prototype.updateQuestionText = function () {
        qTextElement.text(this.questionText);
    };
    Question.prototype.updateQuestionImage = function () {
        pictureElement.attr("src", this.imgSrc);
    };
    Question.prototype.updateAnswers = function () {
        shuffleArray(this.answers);
        ans1Element.text(this.answers[0]);
        ans2Element.text(this.answers[1]);
        ans3Element.text(this.answers[2]);
        ans4Element.text(this.answers[3]);
    };
    // print questions, image, and answers to the screen
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
            qTextElement.text("You are correct!");
        }
        else {
            qTextElement.text("Sorry, the correct answer is:");
        }
        ans1Element.text(this.correct);
        ans2Element.text("");
        ans3Element.text("");
        ans4Element.text("");
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

    // Object to keep track of the number of questions, corrects,
    // incorrects, and unanswered.  Prints info to screen.
    function GameScore() {
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
        numCorrectElement.text(this.numCorrect);
        totalQElement.text(this.numQuestions());
    };
    GameScore.prototype.printFinalResults = function () {
        ans1Element.text("Correct: " + score.numCorrect);
        ans2Element.text("Incorrect: " + score.numWrong);
        ans3Element.text("Unanswered: " + score.numNotAnswered);
        let percent = Math.floor(score.numCorrect * 100 / score.numQuestions());
        ans4Element.text("Percent Correct: " + percent + "%");

        if (percent > 90) {
            pictureElement.attr("src", "assets/images/weSaluteYou.jpg");
            qTextElement.text("Fantastic Job!");
        }
        else if (percent >= 70) {
            pictureElement.attr("src", "assets/images/okayJob.jpg");
            qTextElement.text("Slightly Above Average");
        }
        else {
            pictureElement.attr("src", "assets/images/ewwTerrible.jpg");
            qTextElement.text("You need to start watching the WWE Network.");
        }
    }

    let score = new GameScore;


    function GameTimer(seconds) {
        this.secondsLeftElement = $("#secondsLeft");
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
        this.secondsLeftElement.text(this.currentLeft);
        return this;
    }
    GameTimer.prototype.decrement = function () {
        this.currentLeft--;
        return this;
    }
    GameTimer.prototype.startInterval = function (callbackAfterTimeout) {
        this.reset();
        let self = this;

        this.timeout = setTimeout(function () {
            clearInterval(self.interval);
            callbackAfterTimeout();
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
        startButtonElement.hide().off();
        wholeQuizElement.show();
        score.reset().updateScore();
        shuffleArray(questionArray);  // shuffle the array of questions    
        goToState2DisplayQuestion();
    }

    // State 1: Wait for the user to click a button to start the game
    function state1StartGame() {
        // hide some of the stuff that is needed for showing 
        wholeQuizElement.hide();
        startButtonElement.show();
        nextButtonElement.hide();


        // wait for them to click the start button
        startButtonElement.click(startButtonCallback);
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
        allTheAnswerElements.addClass("highlight").click(function (event) {
            tenSecondTime.stopInterval();
            allTheAnswerElements.removeClass("highlight").off();
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
            allTheAnswerElements.removeClass("highlight").off();
            score.incrementNotAnswered();
            score.updateScore();
            goToState3DisplayAnswer(numOfCurrentQuestion, false);
        });
    }

    // State 3: Show the correct answer
    function goToState3DisplayAnswer (currentQuestion, gotAnswerCorrect) {
        questionArray[currentQuestion].printCorrectAnswer(gotAnswerCorrect);
        nextButtonElement.show();

        nextButtonElement.click(function () {
            fiveSecondTime.stopInterval();
            nextButtonElement.off();
            nextButtonElement.hide();
            goToState2DisplayQuestion();
        });

        fiveSecondTime.startInterval(function () {
            nextButtonElement.off();
            nextButtonElement.hide();
            goToState2DisplayQuestion();
        });

    }

    // State 4: Display results
    function goToState4EndGame() {
        score.printFinalResults();

        startButtonElement.text("Try Again!");
        // wait for them to click the start button
        startButtonElement.click(startButtonCallback);
        startButtonElement.show();
    }


});