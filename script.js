const questions = [
    {
        question: "Which club won the first European Cup in 1956?",
        options: ["Real Madrid", "AC Milan", "Benfica", "Barcelona"],
        answer: "Real Madrid"
    },
    {
        question: "Who scored the fastest goal in World Cup history?",
        options: ["Hakan Şükür", "Miroslav Klose", "Ronaldo", "Thomas Müller"],
        answer: "Hakan Şükür"
    },
    {
        question: "Which country won the 1966 FIFA World Cup?",
        options: ["Brazil", "England", "Germany", "Argentina"],
        answer: "England"
    },
    {
        question: "Who scored the most goals in a single UEFA Champions League season?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which club is famously known as 'The Old Lady'?",
        options: ["Inter Milan", "Juventus", "AC Milan", "Roma"],
        answer: "Juventus"
    },
    {
        question: "Who won the Golden Boot at the 2014 FIFA World Cup?",
        options: ["Lionel Messi", "Thomas Müller", "James Rodríguez", "Neymar"],
        answer: "James Rodríguez"
    },
    {
        question: "Which country won the first Africa Cup of Nations?",
        options: ["Egypt", "Ghana", "Cameroon", "Nigeria"],
        answer: "Egypt"
    },
    {
        question: "Who scored Spain's winning goal in the 2010 World Cup final?",
        options: ["David Villa", "Xavi", "Andrés Iniesta", "Fernando Torres"],
        answer: "Andrés Iniesta"
    },
    {
        question: "Which club has won the most Copa Libertadores titles?",
        options: ["Boca Juniors", "River Plate", "Independiente", "Santos"],
        answer: "Independiente"
    },
    {
        question: "Who won three consecutive Ballon d'Or awards from 1983 to 1985?",
        options: ["Michel Platini", "Marco van Basten", "Johan Cruyff", "Franz Beckenbauer"],
        answer: "Michel Platini"
    },
    {
        question: "Which goalkeeper is nicknamed 'The Black Spider'?",
        options: ["Gordon Banks", "Lev Yashin", "Dino Zoff", "Peter Schmeichel"],
        answer: "Lev Yashin"
    },
    {
        question: "Which country hosted the 1994 FIFA World Cup?",
        options: ["Mexico", "USA", "Canada", "Brazil"],
        answer: "USA"
    },
    {
        question: "Who scored the famous 'Hand of God' goal?",
        options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldo"],
        answer: "Diego Maradona"
    },
    {
        question: "Which club won the 1999 UEFA Champions League final?",
        options: ["Bayern Munich", "Manchester United", "Real Madrid", "Barcelona"],
        answer: "Manchester United"
    },
    {
        question: "Which country shocked Europe by winning Euro 2004?",
        options: ["Portugal", "Greece", "Spain", "France"],
        answer: "Greece"
    },
    {
        question: "Who was the top scorer at the 2002 FIFA World Cup?",
        options: ["Ronaldo", "Rivaldo", "Miroslav Klose", "Ronaldinho"],
        answer: "Ronaldo"
    },
    {
        question: "Which club won the 2012 Champions League final?",
        options: ["Chelsea", "Bayern Munich", "Barcelona", "Real Madrid"],
        answer: "Chelsea"
    },
    {
        question: "Who scored Chelsea's equalizer in the 2012 Champions League final?",
        options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Fernando Torres"],
        answer: "Didier Drogba"
    },
    {
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Italy", "Brazil", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "Who scored Germany's winning goal in the 2014 World Cup final?",
        options: ["Thomas Müller", "Mario Götze", "Miroslav Klose", "Toni Kroos"],
        answer: "Mario Götze"
    },
    {
        question: "Which club did Cristiano Ronaldo join Manchester United from?",
        options: ["Porto", "Sporting CP", "Benfica", "Braga"],
        answer: "Sporting CP"
    },
    {
        question: "Who was the first African player to win the Ballon d'Or?",
        options: ["Samuel Eto'o", "George Weah", "Didier Drogba", "Yaya Touré"],
        answer: "George Weah"
    },
    {
        question: "Which club did George Weah join in 1995?",
        options: ["Chelsea", "AC Milan", "PSG", "Monaco"],
        answer: "AC Milan"
    },
    {
        question: "Which country won the 2018 FIFA World Cup?",
        options: ["Croatia", "France", "Germany", "Brazil"],
        answer: "France"
    },
    {
        question: "Who won the Golden Boot at the 2018 World Cup?",
        options: ["Harry Kane", "Kylian Mbappé", "Antoine Griezmann", "Romelu Lukaku"],
        answer: "Harry Kane"
    },
    {
        question: "Which club did Erling Haaland join before Manchester City?",
        options: ["RB Salzburg", "Borussia Dortmund", "Molde", "Bayer Leverkusen"],
        answer: "Borussia Dortmund"
    },
    {
        question: "Who scored the fastest Premier League hat-trick?",
        options: ["Sadio Mané", "Mohamed Salah", "Sergio Agüero", "Harry Kane"],
        answer: "Sadio Mané"
    },
    {
        question: "Who is the Premier League's all-time leading scorer?",
        options: ["Wayne Rooney", "Alan Shearer", "Harry Kane", "Thierry Henry"],
        answer: "Alan Shearer"
    },
    {
        question: "Who is Arsenal's longest-serving manager?",
        options: ["Arsène Wenger", "George Graham", "Unai Emery", "Mikel Arteta"],
        answer: "Arsène Wenger"
    },
    {
        question: "Who scored Arsenal's winning goal in the 2002 FA Cup final?",
        options: ["Robert Pirès", "Sylvain Wiltord", "Thierry Henry", "Dennis Bergkamp"],
        answer: "Sylvain Wiltord"
    },
    {
        question: "Which team completed an unbeaten Premier League season in 2003–04?",
        options: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"],
        answer: "Arsenal"
    },
    {
        question: "What nickname was given to Arsenal's 2003–04 team?",
        options: ["The Invincibles", "The Untouchables", "The Gunners", "The Immortals"],
        answer: "The Invincibles"
    },
    {
        question: "Who managed Manchester City when they won the Premier League in 2011–12?",
        options: ["Pep Guardiola", "Roberto Mancini", "Manuel Pellegrini", "José Mourinho"],
        answer: "Roberto Mancini"
    },
    {
        question: "Who scored Manchester City's famous last-minute title-winning goal in 2012?",
        options: ["Carlos Tévez", "David Silva", "Sergio Agüero", "Mario Balotelli"],
        answer: "Sergio Agüero"
    },
    {
        question: "Which club won the Premier League in the 2015–16 season?",
        options: ["Arsenal", "Leicester City", "Tottenham", "Chelsea"],
        answer: "Leicester City"
    },
    {
        question: "Who managed Leicester City during their 2015–16 title win?",
        options: ["Claudio Ranieri", "Brendan Rodgers", "Nigel Pearson", "José Mourinho"],
        answer: "Claudio Ranieri"
    },
    {
        question: "Who was Leicester City's top scorer during their 2015–16 title-winning season?",
        options: ["Jamie Vardy", "Riyad Mahrez", "Shinji Okazaki", "Leonardo Ulloa"],
        answer: "Jamie Vardy"
    },
    {
        question: "Who won Manchester United's first Premier League title?",
        options: ["Alex Ferguson", "Ron Atkinson", "David Moyes", "Louis van Gaal"],
        answer: "Alex Ferguson"
    },
    {
        question: "Who managed Manchester United during their 1992–93 Premier League title?",
        options: ["Alex Ferguson", "Ron Atkinson", "Matt Busby", "José Mourinho"],
        answer: "Alex Ferguson"
    },
    {
        question: "Who won the 2019 UEFA Champions League final?",
        options: ["Liverpool", "Tottenham", "Manchester City", "Barcelona"],
        answer: "Liverpool"
    },
    {
        question: "Who scored Liverpool's second goal in the 2019 Champions League final?",
        options: ["Mohamed Salah", "Divock Origi", "Sadio Mané", "Roberto Firmino"],
        answer: "Divock Origi"
    },
    {
        question: "Who managed Liverpool when they won the 2019 Champions League?",
        options: ["Jürgen Klopp", "Rafael Benítez", "Brendan Rodgers", "Kenny Dalglish"],
        answer: "Jürgen Klopp"
    },
    {
        question: "Which club won the 2005 Champions League final?",
        options: ["Liverpool", "AC Milan", "Chelsea", "Barcelona"],
        answer: "Liverpool"
    },
    {
        question: "Which Liverpool goalkeeper made the famous saves in the 2005 shootout?",
        options: ["Pepe Reina", "Jerzy Dudek", "Alisson", "David James"],
        answer: "Jerzy Dudek"
    },
    {
        question: "Which club won the 2006 Champions League final?",
        options: ["Barcelona", "Arsenal", "Real Madrid", "Bayern Munich"],
        answer: "Barcelona"
    },
    {
        question: "Who scored Barcelona's equalizer in the 2006 Champions League final?",
        options: ["Samuel Eto'o", "Ronaldinho", "Lionel Messi", "Ludovic Giuly"],
        answer: "Samuel Eto'o"
    },
    {
        question: "Who scored Lionel Messi's first senior goal for Barcelona?",
        options: ["Samuel Eto'o", "Ronaldinho", "Xavi", "Deco"],
        answer: "Ronaldinho"
    },
    {
        question: "Which club did Lionel Messi join in 2021?",
        options: ["Inter Miami", "PSG", "Manchester City", "Al Hilal"],
        answer: "PSG"
    },
    {
        question: "Which club did Lionel Messi join in 2023?",
        options: ["Barcelona", "Inter Miami", "PSG", "Al Nassr"],
        answer: "Inter Miami"
    },
    {
        question: "How many Ballon d'Or awards had Messi won by 2023?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Which country won the 2022 FIFA World Cup?",
        options: ["France", "Argentina", "Brazil", "Croatia"],
        answer: "Argentina"
    },
    {
        question: "Which country did Argentina defeat in the 2022 World Cup final?",
        options: ["France", "Croatia", "Brazil", "Netherlands"],
        answer: "France"
    },
    {
        question: "Who won the Golden Boot at the 2022 World Cup?",
        options: ["Lionel Messi", "Kylian Mbappé", "Olivier Giroud", "Julián Álvarez"],
        answer: "Kylian Mbappé"
    },
    {
        question: "Who scored a hat-trick in the 2022 World Cup final?",
        options: ["Lionel Messi", "Kylian Mbappé", "Ángel Di María", "Olivier Giroud"],
        answer: "Kylian Mbappé"
    },
    {
        question: "Which country finished third at the 2022 World Cup?",
        options: ["Morocco", "Croatia", "Belgium", "Brazil"],
        answer: "Croatia"
    },
    {
        question: "Which African country became the first to reach a World Cup semi-final?",
        options: ["Egypt", "Ghana", "Morocco", "Senegal"],
        answer: "Morocco"
    },
    {
        question: "Which African country reached the 1990 World Cup quarter-finals?",
        options: ["Cameroon", "Nigeria", "Ghana", "Algeria"],
        answer: "Cameroon"
    },
    {
        question: "Who scored twice for Cameroon against Colombia in the 1990 World Cup?",
        options: ["Roger Milla", "Samuel Eto'o", "Patrick Mboma", "Rigobert Song"],
        answer: "Roger Milla"
    },
    {
        question: "Which country won AFCON 2019?",
        options: ["Senegal", "Algeria", "Egypt", "Nigeria"],
        answer: "Algeria"
    },
    {
        question: "Who scored Algeria's winning goal in the 2019 AFCON final?",
        options: ["Riyad Mahrez", "Baghdad Bounedjah", "Islam Slimani", "Sofiane Feghouli"],
        answer: "Baghdad Bounedjah"
    },
    {
        question: "Which country won AFCON 2021?",
        options: ["Senegal", "Egypt", "Cameroon", "Algeria"],
        answer: "Senegal"
    },
    {
        question: "Who scored Senegal's decisive penalty in the AFCON 2021 final?",
        options: ["Sadio Mané", "Kalidou Koulibaly", "Idrissa Gueye", "Ismaïla Sarr"],
        answer: "Sadio Mané"
    },
    {
        question: "Which country hosted AFCON 2021?",
        options: ["Cameroon", "Egypt", "Ivory Coast", "Ghana"],
        answer: "Cameroon"
    },
    {
        question: "Which country won AFCON 2023?",
        options: ["Nigeria", "Ivory Coast", "Senegal", "Morocco"],
        answer: "Ivory Coast"
    },
    {
        question: "Who was named Player of the Tournament at AFCON 2023?",
        options: ["Victor Osimhen", "William Troost-Ekong", "Ademola Lookman", "Simon Adingra"],
        answer: "William Troost-Ekong"
    },
    {
        question: "Which club has won the most UEFA Champions League titles?",
        options: ["AC Milan", "Liverpool", "Real Madrid", "Bayern Munich"],
        answer: "Real Madrid"
    },
    {
        question: "Which club won the 2023 UEFA Champions League?",
        options: ["Manchester City", "Inter Milan", "Real Madrid", "Bayern Munich"],
        answer: "Manchester City"
    },
    {
        question: "Who scored the winning goal in the 2023 Champions League final?",
        options: ["Erling Haaland", "Rodri", "Bernardo Silva", "Ilkay Gündogan"],
        answer: "Rodri"
    },
    {
        question: "Who was Manchester City's manager when they won their first Champions League?",
        options: ["Pep Guardiola", "Roberto Mancini", "Manuel Pellegrini", "José Mourinho"],
        answer: "Pep Guardiola"
    },
    {
        question: "Which club lost the 2023 Champions League final?",
        options: ["Inter Milan", "AC Milan", "Liverpool", "Bayern Munich"],
        answer: "Inter Milan"
    },
    {
        question: "Who scored for Manchester United in the 2008 Champions League final?",
        options: ["Wayne Rooney", "Cristiano Ronaldo", "Carlos Tévez", "Ryan Giggs"],
        answer: "Cristiano Ronaldo"
    },
    {
        question: "Which club won the 2009 Champions League final?",
        options: ["Manchester United", "Barcelona", "Chelsea", "Arsenal"],
        answer: "Barcelona"
    },
    {
        question: "Who scored Barcelona's second goal in the 2009 Champions League final?",
        options: ["Samuel Eto'o", "Lionel Messi", "Xavi", "Andrés Iniesta"],
        answer: "Lionel Messi"
    },
    {
        question: "Which club lost the 2014 Champions League final?",
        options: ["Atlético Madrid", "Borussia Dortmund", "Bayern Munich", "Juventus"],
        answer: "Atlético Madrid"
    },
    {
        question: "Who scored Real Madrid's equalizer in the 2014 Champions League final?",
        options: ["Cristiano Ronaldo", "Gareth Bale", "Sergio Ramos", "Marcelo"],
        answer: "Sergio Ramos"
    },
    {
        question: "Which player was nicknamed 'The Phenomenon'?",
        options: ["Ronaldo Nazário", "Ronaldinho", "Romário", "Rivaldo"],
        answer: "Ronaldo Nazário"
    },
    {
        question: "Which country won the 2002 World Cup?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "Who scored both Brazil's goals in the 2002 World Cup final?",
        options: ["Rivaldo", "Ronaldinho", "Ronaldo", "Cafu"],
        answer: "Ronaldo"
    },
    {
        question: "Who won the Golden Ball at the 2006 World Cup?",
        options: ["Fabio Cannavaro", "Zinedine Zidane", "Andrea Pirlo", "Miroslav Klose"],
        answer: "Zinedine Zidane"
    },
    {
        question: "Which country won the 2006 World Cup?",
        options: ["France", "Italy", "Germany", "Brazil"],
        answer: "Italy"
    },
    {
        question: "Who scored Italy's final penalty in the 2006 World Cup final shootout?",
        options: ["Andrea Pirlo", "Fabio Grosso", "Francesco Totti", "Alessandro Del Piero"],
        answer: "Fabio Grosso"
    },
    {
        question: "Which country won the 2010 World Cup?",
        options: ["Germany", "Spain", "Netherlands", "Brazil"],
        answer: "Spain"
    },
    {
        question: "Who captained Spain during the 2010 World Cup?",
        options: ["Xavi", "Iker Casillas", "Carles Puyol", "Sergio Ramos"],
        answer: "Iker Casillas"
    },
    {
        question: "Who scored Spain's semi-final goal against Germany in 2010?",
        options: ["David Villa", "Carles Puyol", "Andrés Iniesta", "Fernando Torres"],
        answer: "Carles Puyol"
    },
    {
        question: "Which country reached the 2010 World Cup final but lost to Spain?",
        options: ["Germany", "Netherlands", "Uruguay", "Brazil"],
        answer: "Netherlands"
    },
    {
        question: "Who is the all-time leading scorer in FIFA World Cup history?",
        options: ["Ronaldo", "Miroslav Klose", "Gerd Müller", "Lionel Messi"],
        answer: "Miroslav Klose"
    },
    {
        question: "Who scored 14 World Cup goals for West Germany?",
        options: ["Gerd Müller", "Miroslav Klose", "Jürgen Klinsmann", "Karl-Heinz Rummenigge"],
        answer: "Gerd Müller"
    },
    {
        question: "Which country won the 1974 World Cup?",
        options: ["Brazil", "West Germany", "Netherlands", "Italy"],
        answer: "West Germany"
    },
    {
        question: "Who captained West Germany to the 1974 World Cup?",
        options: ["Gerd Müller", "Franz Beckenbauer", "Paul Breitner", "Sepp Maier"],
        answer: "Franz Beckenbauer"
    },
    {
        question: "Which country won the 1970 World Cup?",
        options: ["Brazil", "Italy", "Germany", "Argentina"],
        answer: "Brazil"
    },
    {
        question: "Who scored Brazil's final goal in the 1970 World Cup final?",
        options: ["Pelé", "Jairzinho", "Carlos Alberto", "Tostão"],
        answer: "Carlos Alberto"
    },
    {
        question: "How many goals did Pelé score in Brazil's 1958 semi-final?",
        options: ["1", "2", "3", "4"],
        answer: "3"
    },
    {
        question: "Which country hosted the 1958 World Cup?",
        options: ["Sweden", "Brazil", "France", "Switzerland"],
        answer: "Sweden"
    },
    {
        question: "Who became the youngest player to score in a World Cup?",
        options: ["Pelé", "Kylian Mbappé", "Michael Owen", "Lionel Messi"],
        answer: "Pelé"
    },
    {
        question: "Which club did Pelé play for in the United States?",
        options: ["New York Cosmos", "LA Galaxy", "Miami Fusion", "New York Red Bulls"],
        answer: "New York Cosmos"
    },

    // Extra questions
    {
        question: "Which player won the 2019 Ballon d'Or?",
        options: ["Lionel Messi", "Virgil van Dijk", "Cristiano Ronaldo", "Sadio Mané"],
        answer: "Lionel Messi"
    },
    {
        question: "Which country won Euro 2016?",
        options: ["France", "Portugal", "Germany", "Spain"],
        answer: "Portugal"
    },
    {
        question: "Who scored Portugal's winning goal in the Euro 2016 final?",
        options: ["Cristiano Ronaldo", "Éder", "Nani", "Ricardo Quaresma"],
        answer: "Éder"
    },
    {
        question: "Which club did Neymar join from Santos in 2013?",
        options: ["Barcelona", "Real Madrid", "PSG", "Manchester City"],
        answer: "Barcelona"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const finalScoreElement = document.getElementById("final-score");
const resultMessageElement = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionElement.textContent = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "option";
        button.type = "button";
        button.textContent = option;

        button.addEventListener("click", () => {
            selectAnswer(button, option, question.answer);
        });

        optionsElement.appendChild(button);
    });

    scoreElement.textContent = `Score: ${score}`;

    const progress =
        ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}

function selectAnswer(button, selected, correct) {

    if (answered) return;

    answered = true;

    const optionButtons =
        document.querySelectorAll(".option");

    optionButtons.forEach(optionButton => {

        optionButton.disabled = true;

        if (optionButton.textContent === correct) {
            optionButton.classList.add("correct");
        }
    });

    if (selected === correct) {

        button.classList.add("correct");
        score++;

    } else {

        button.classList.add("wrong");
    }

    scoreElement.textContent = `Score: ${score}`;
}

function showResult() {

    quizElement.hidden = true;
    resultElement.hidden = false;

    finalScoreElement.textContent =
        `Your score: ${score} / ${questions.length}`;

    const percentage =
        (score / questions.length) * 100;

    if (percentage >= 90) {
        resultMessageElement.textContent =
            "🔥 Incredible! You are a football expert!";
    } else if (percentage >= 70) {
        resultMessageElement.textContent =
            "👏 Excellent football knowledge!";
    } else if (percentage >= 50) {
        resultMessageElement.textContent =
            "⚽ Good job! Keep improving!";
    } else {
        resultMessageElement.textContent =
            "💪 Keep practicing and try again!";
    }
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    quizElement.hidden = false;
    resultElement.hidden = true;

    showQuestion();
}

nextButton.addEventListener("click", () => {

    if (!answered) {
        alert("Please choose an answer first.");
        return;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        showResult();
    }
});

restartButton.addEventListener("click", restartQuiz);

showQuestion();
