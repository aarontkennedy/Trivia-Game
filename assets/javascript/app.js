$(document).ready(function () {

    function Question(text, correctAnswer, ans2, ans3, ans4) {
        this.questionText = text;
        this.correct = correctAnswer;
        this.answers = [correctAnswer, ans2, ans3, ans4];
        //debugger
        this.imgSrc = correctAnswer;
        this.imgSrc = this.imgSrc.replace(/\s/g, "");
        this.imgSrc = this.imgSrc.replace(/\./g, "");
        this.imgSrc = "assets/images/" + this.imgSrc + ".jpg";
    }

    Question.prototype.updateQuestionText = function () {
        $("#question h4").text(this.questionText);
    }

    Question.prototype.updateQuestionImage = function () {
        $("#pictureHint").attr("src", this.imgSrc);
    }

    Question.prototype.updateAnswers = function () {
        
        shuffleArray(this.answers);
        $("#answer1").text(this.answers[0]);
        $("#answer2").text(this.answers[1]);
        $("#answer3").text(this.answers[2]);
        $("#answer4").text(this.answers[3]);
    }


    var questionArray = [];

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

    shuffleArray(questionArray);
    questionArray[0].updateAnswers();
    questionArray[0].updateQuestionImage();
    questionArray[0].updateQuestionText();

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
    
     https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    
     */
    function shuffleArray(array) {
        // we are going to run through the array, starting at the lest element,
        // decrementing each iteration
        for (var i = array.length - 1; i > 0; i--) {
            // this line gets a random number between 0 and the current i value
            var j = Math.floor(Math.random() * (i + 1));
            // save the element value at the ith position
            var temp = array[i];
            // swap it with the jth position
            array[i] = array[j];
            array[j] = temp;
            // now we decrement and work on randomizing a smaller section of the array
        }
        // the don't return the array, arrays are passed by reference
        // you are already altering the original array
    }

});