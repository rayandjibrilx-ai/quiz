const questions = [
    { question: "Which club won the first European Cup in 1956?", options: ["Real Madrid", "AC Milan", "Benfica", "Barcelona"], answer: "Real Madrid" },
    { question: "Who scored the fastest goal in World Cup history?", options: ["Hakan Şükür", "Miroslav Klose", "Ronaldo", "Thomas Müller"], answer: "Hakan Şükür" },
    { question: "Which country won the 1966 FIFA World Cup?", options: ["Brazil", "England", "Germany", "Argentina"], answer: "England" },
    { question: "Who scored the most goals in a single UEFA Champions League season?", options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"], answer: "Cristiano Ronaldo" },
    { question: "Which club is famously known as 'The Old Lady'?", options: ["Inter Milan", "Juventus", "AC Milan", "Roma"], answer: "Juventus" },
    { question: "Who won the Golden Boot at the 2014 FIFA World Cup?", options: ["Lionel Messi", "Thomas Müller", "James Rodríguez", "Neymar"], answer: "James Rodríguez" },
    { question: "Which country won the first Africa Cup of Nations?", options: ["Egypt", "Ghana", "Cameroon", "Nigeria"], answer: "Egypt" },
    { question: "Who scored Spain's winning goal in the 2010 World Cup final?", options: ["David Villa", "Xavi", "Andrés Iniesta", "Fernando Torres"], answer: "Andrés Iniesta" },
    { question: "Which club has won the most Copa Libertadores titles?", options: ["Boca Juniors", "River Plate", "Independiente", "Santos"], answer: "Independiente" },
    { question: "Who won three consecutive Ballon d'Or awards from 1983 to 1985?", options: ["Michel Platini", "Marco van Basten", "Johan Cruyff", "Franz Beckenbauer"], answer: "Michel Platini" },
    { question: "Which goalkeeper is nicknamed 'The Black Spider'?", options: ["Gordon Banks", "Lev Yashin", "Dino Zoff", "Peter Schmeichel"], answer: "Lev Yashin" },
    { question: "Which country hosted the 1994 FIFA World Cup?", options: ["Mexico", "USA", "Canada", "Brazil"], answer: "USA" },
    { question: "Who scored the famous 'Hand of God' goal?", options: ["Pelé", "Diego Maradona", "Zinedine Zidane", "Ronaldo"], answer: "Diego Maradona" },
    { question: "Which club won the 1999 UEFA Champions League final?", options: ["Bayern Munich", "Manchester United", "Real Madrid", "Barcelona"], answer: "Manchester United" },
    { question: "Which country shocked Europe by winning Euro 2004?", options: ["Portugal", "Greece", "Spain", "France"], answer: "Greece" },
    { question: "Who was the top scorer at the 2002 FIFA World Cup?", options: ["Ronaldo", "Rivaldo", "Miroslav Klose", "Ronaldinho"], answer: "Ronaldo" },
    { question: "Which club won the 2012 Champions League final?", options: ["Chelsea", "Bayern Munich", "Barcelona", "Real Madrid"], answer: "Chelsea" },
    { question: "Who scored Chelsea's equalizer in the 2012 Champions League final?", options: ["Frank Lampard", "Didier Drogba", "Juan Mata", "Fernando Torres"], answer: "Didier Drogba" },
    { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Italy", "Brazil", "Argentina"], answer: "Brazil" },
    { question: "Who scored Germany's winning goal in the 2014 World Cup final?", options: ["Thomas Müller", "Mario Götze", "Miroslav Klose", "Toni Kroos"], answer: "Mario Götze" },
    { question: "Which club did Cristiano Ronaldo join Manchester United from?", options: ["Porto", "Sporting CP", "Benfica", "Braga"], answer: "Sporting CP" },
    { question: "Who was the first African player to win the Ballon d'Or?", options: ["Samuel Eto'o", "George Weah", "Didier Drogba", "Yaya Touré"], answer: "George Weah" },
    { question: "Which country won the 2018 FIFA World Cup?", options: ["Croatia", "France", "Germany", "Brazil"], answer: "France" },
    { question: "Who won the Golden Boot at the 2018 World Cup?", options: ["Harry Kane", "Kylian Mbappé", "Antoine Griezmann", "Romelu Lukaku"], answer: "Harry Kane" },
    { question: "Which club did Erling Haaland join before Manchester City?", options: ["RB Salzburg", "Borussia Dortmund", "Molde", "Bayer Leverkusen"], answer: "Borussia Dortmund" },
    { question: "Who scored the fastest Premier League hat-trick?", options: ["Sadio Mané", "Mohamed Salah", "Sergio Agüero", "Harry Kane"], answer: "Sadio Mané" },
    { question: "Who is the Premier League's all-time leading scorer?", options: ["Wayne Rooney", "Alan Shearer", "Harry Kane", "Thierry Henry"], answer: "Alan Shearer" },
    { question: "Who is Arsenal's longest-serving manager?", options: ["Arsène Wenger", "George Graham", "Unai Emery", "Mikel Arteta"], answer: "Arsène Wenger" },
    { question: "Which team completed an unbeaten Premier League season in 2003–04?", options: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"], answer: "Arsenal" },
    { question: "Who scored Manchester City's title-winning goal in May 2012?", options: ["Carlos Tévez", "David Silva", "Sergio Agüero", "Mario Balotelli"], answer: "Sergio Agüero" },
    { question: "Which club won the Premier League in the 2015–16 season?", options: ["Arsenal", "Leicester City", "Tottenham", "Chelsea"], answer: "Leicester City" },
    { question: "Who managed Leicester City during their 2015–16 title win?", options: ["Claudio Ranieri", "Brendan Rodgers", "Nigel Pearson", "José Mourinho"], answer: "Claudio Ranieri" },
    { question: "Who won the 2019 UEFA Champions League final?", options: ["Liverpool", "Tottenham", "Manchester City", "Barcelona"], answer: "Liverpool" },
    { question: "Which club won the 2005 Champions League final in Istanbul?", options: ["Liverpool", "AC Milan", "Chelsea", "Barcelona"], answer: "Liverpool" },
    { question: "Which club won the 2006 Champions League final?", options: ["Barcelona", "Arsenal", "Real Madrid", "Bayern Munich"], answer: "Barcelona" },
    { question: "Which club did Lionel Messi join in 2021?", options: ["Inter Miami", "PSG", "Manchester City", "Al Hilal"], answer: "PSG" },
    { question: "Who won the FIFA World Cup as both a player and manager for West Germany?", options: ["Franz Beckenbauer", "Lothar Matthäus", "Jürgen Klinsmann", "Rudi Völler"], answer: "Franz Beckenbauer" },
    { question: "Who is the all-time top scorer in World Cup history?", options: ["Pelé", "Miroslav Klose", "Ronaldo", "Gerd Müller"], answer: "Miroslav Klose" },
    { question: "Which country hosted the 2006 FIFA World Cup?", options: ["France", "Germany", "South Africa", "Japan & South Korea"], answer: "Germany" },
    { question: "Which player won Euro 2016 with Portugal?", options: ["Cristiano Ronaldo", "Deco", "Figo", "Rui Costa"], answer: "Cristiano Ronaldo" },
    { question: "Who was the manager of Greece during Euro 2004?", options: ["Otto Rehhagel", "Fernando Santos", "Fatih Terim", "Lars Lagerbäck"], answer: "Otto Rehhagel" },
    { question: "Which player has the most official assists in football history?", options: ["Lionel Messi", "Kevin De Bruyne", "Thomas Müller", "Ryan Giggs"], answer: "Lionel Messi" },
    { question: "Who is the all-time top scorer for the Brazil national team?", options: ["Pelé", "Neymar", "Ronaldo", "Romário"], answer: "Neymar" },
    { question: "Which country won the 2021 Copa América?", options: ["Brazil", "Argentina", "Colombia", "Uruguay"], answer: "Argentina" },
    { question: "Who scored the winning goal in the 2022 World Cup final penalty shootout for Argentina?", options: ["Gonzalo Montiel", "Paulo Dybala", "Lionel Messi", "Enzo Fernández"], answer: "Gonzalo Montiel" },
    { question: "Who won the Golden Glove at the 2022 FIFA World Cup?", options: ["Dominik Livaković", "Emiliano Martínez", "Yassine Bounou", "Hugo Lloris"], answer: "Emiliano Martínez" },
    { question: "Which country finished 4th at the 2022 FIFA World Cup?", options: ["Croatia", "Morocco", "Netherlands", "England"], answer: "Morocco" },
    { question: "Who managed Real Madrid to three consecutive UEFA Champions League titles?", options: ["Carlo Ancelotti", "Zinedine Zidane", "José Mourinho", "Vicente del Bosque"], answer: "Zinedine Zidane" },
    { question: "Which player scored a bicycle kick in the 2018 Champions League final?", options: ["Gareth Bale", "Cristiano Ronaldo", "Karim Benzema", "Luka Modrić"], answer: "Gareth Bale" },
    { question: "Which German player scored five goals against Wolfsburg in nine minutes?", options: ["Robert Lewandowski", "Thomas Müller", "Marco Reus", "Erling Haaland"], answer: "Robert Lewandowski" },
    { question: "Which club is known as 'The Yellow Submarine'?", options: ["Villarreal", "Cadiz", "Borussia Dortmund", "Nantes"], answer: "Villarreal" },
    { question: "Who is the youngest player to score in a FIFA World Cup final?", options: ["Pelé", "Kylian Mbappé", "Lamine Yamal", "Gavi"], answer: "Pelé" },
    { question: "Which English club has won the most League Cups (EFL Cup)?", options: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"], answer: "Liverpool" },
    { question: "Who scored the winning goal for Bayern Munich in the 2013 Champions League final?", options: ["Arjen Robben", "Franck Ribéry", "Thomas Müller", "Mario Mandžukić"], answer: "Arjen Robben" },
    { question: "Which country won Euro 2020 (played in 2021)?", options: ["England", "Italy", "Spain", "Denmark"], answer: "Italy" },
    { question: "Who was named Player of the Tournament at Euro 2020?", options: ["Gianluigi Donnarumma", "Harry Kane", "Raheem Sterling", "Jorginho"], answer: "Gianluigi Donnarumma" },
    { question: "Which club was Zlatan Ibrahimović playing for when he scored his famous overhead kick against England?", options: ["PSG", "AC Milan", "Inter Milan", "LA Galaxy"], answer: "PSG" },
    { question: "Who is the highest-scoring defender in football history?", options: ["Ronald Koeman", "Sergio Ramos", "Fernando Hierro", "Daniel Passarella"], answer: "Ronald Koeman" },
    { question: "Which stadium is known as 'The Theatre of Dreams'?", options: ["Anfield", "Old Trafford", "Stamford Bridge", "Villa Park"], answer: "Old Trafford" },
    { question: "Which national team is nicknamed 'El Tri'?", options: ["Colombia", "Mexico", "Ecuador", "Chile"], answer: "Mexico" },
    { question: "Who won the Ballon d'Or in 2007?", options: ["Cristiano Ronaldo", "Lionel Messi", "Kaká", "Thierry Henry"], answer: "Kaká" },
    { question: "Who was the manager of Barcelona during their 2008–09 'Sextuple' season?", options: ["Pep Guardiola", "Frank Rijkaard", "Luis Enrique", "Tito Vilanova"], answer: "Pep Guardiola" },
    { question: "Which club did Luka Modrić play for before joining Real Madrid?", options: ["Dinamo Zagreb", "Tottenham Hotspur", "Ajax", "Sevilla"], answer: "Tottenham Hotspur" },
    { question: "Which country won the 1998 FIFA World Cup?", options: ["Brazil", "France", "Italy", "Croatia"], answer: "France" },
    { question: "Who scored two header goals in the 1998 World Cup final?", options: ["Zinedine Zidane", "Emmanuel Petit", "Thierry Henry", "Ronaldo"], answer: "Zinedine Zidane" },
    { question: "Which team won the FIFA Women's World Cup in 2019?", options: ["Netherlands", "USA", "England", "Sweden"], answer: "USA" },
    { question: "Which country won the FIFA Women's World Cup in 2023?", options: ["England", "Spain", "USA", "Australia"], answer: "Spain" },
    { question: "Who holds the record for most Premier League appearances?", options: ["Gareth Barry", "Ryan Giggs", "Frank Lampard", "James Milner"], answer: "Gareth Barry" },
    { question: "Which player scored 91 goals in a single calendar year (2012)?", options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Gerd Müller"], answer: "Lionel Messi" },
    { question: "Which Dutch club won three consecutive European Cups from 1971 to 1973?", options: ["PSV Eindhoven", "Feyenoord", "Ajax", "AZ Alkmaar"], answer: "Ajax" },
    { question: "Who is the manager with the most UEFA Champions League titles?", options: ["Carlo Ancelotti", "Zinedine Zidane", "Pep Guardiola", "Bob Paisley"], answer: "Carlo Ancelotti" },
    { question: "Which African country was the first to reach a FIFA World Cup quarter-final?", options: ["Cameroon", "Senegal", "Ghana", "Morocco"], answer: "Cameroon" },
    { question: "Which player was nicknamed 'The Golden Boy' of Italian football?", options: ["Gianni Rivera", "Roberto Baggio", "Francesco Totti", "Alessandro Del Piero"], answer: "Gianni Rivera" },
    { question: "Who scored the winning goal in the 2008 Champions League penalty shootout for Man Utd?", options: ["Edwin van der Sar (Save)", "Cristiano Ronaldo", "Wayne Rooney", "Ryan Giggs"], answer: "Edwin van der Sar (Save)" },
    { question: "Which club won the UEFA Europa League three times in a row from 2014 to 2016?", options: ["Sevilla", "Atletico Madrid", "Villarreal", "Benfica"], answer: "Sevilla" },
    { question: "Which country won Euro 1992 after being invited last minute?", options: ["Denmark", "Germany", "Sweden", "Netherlands"], answer: "Denmark" },
    { question: "Who scored the famous volley goal in the 2002 UEFA Champions League final?", options: ["Zinedine Zidane", "Raúl", "Michael Ballack", "Figo"], answer: "Zinedine Zidane" },
    { question: "Which country hosted the first FIFA World Cup in 1930?", options: ["Uruguay", "Argentina", "Brazil", "Italy"], answer: "Uruguay" },
    { question: "Who won the first FIFA World Cup in 1930?", options: ["Uruguay", "Argentina", "USA", "Yugoslavia"], answer: "Uruguay" },
    { question: "Who scored 60 league goals in a single English top-flight season (1927–28)?", options: ["Dixie Dean", "Jimmy Greaves", "Dixie Dean", "Alan Shearer"], answer: "Dixie Dean" },
    { question: "Which club was David Beckham playing for when he retired in 2013?", options: ["PSG", "LA Galaxy", "AC Milan", "Manchester United"], answer: "PSG" },
    { question: "Who holds the record for most clean sheets in Premier League history?", options: ["Petr Čech", "David de Gea", "David Seaman", "Pepe Reina"], answer: "Petr Čech" },
    { question: "Which country won Euro 2008, 2010 World Cup, and Euro 2012 consecutively?", options: ["Spain", "Germany", "France", "Italy"], answer: "Spain" },
    { question: "Who won the Ballon d'Or in 2018, breaking the Messi-Ronaldo streak?", options: ["Luka Modrić", "Antoine Griezmann", "Kylian Mbappé", "Mohamed Salah"], answer: "Luka Modrić" },
    { question: "Who is the all-time top scorer for the England national team?", options: ["Harry Kane", "Wayne Rooney", "Bobby Charlton", "Gary Lineker"], answer: "Harry Kane" },
    { question: "Which club played their home games at Highbury until 2006?", options: ["Arsenal", "Tottenham", "Chelsea", "West Ham"], answer: "Arsenal" },
    { question: "Who scored the winning goal in the 2016 UEFA Champions League final shootout?", options: ["Cristiano Ronaldo", "Sergio Ramos", "Gareth Bale", "Luka Modrić"], answer: "Cristiano Ronaldo" },
    { question: "Which national team is known as the 'Super Eagles'?", options: ["Nigeria", "Ghana", "Cameroon", "Ivory Coast"], answer: "Nigeria" },
    { question: "Who was the top scorer at the 2022 FIFA World Cup in Qatar?", options: ["Kylian Mbappé", "Lionel Messi", "Julian Alvarez", "Olivier Giroud"], answer: "Kylian Mbappé" },
    { question: "Which stadium hosted the 2014 FIFA World Cup final?", options: ["Maracanã", "Estádio do Morumbi", "Arena Corinthians", "Mineirão"], answer: "Maracanã" },
    { question: "Who scored the winning goal in the 2021 UEFA Champions League final for Chelsea?", options: ["Kai Havertz", "Mason Mount", "N'Golo Kanté", "Timo Werner"], answer: "Kai Havertz" },
    { question: "Which manager famously said 'I think I'm a special one'?", options: ["José Mourinho", "Pep Guardiola", "Jürgen Klopp", "Louis van Gaal"], answer: "José Mourinho" },
    { question: "Which player has won the most UEFA Champions League titles (6)?", options: ["Dani Carvajal", "Luka Modrić", "Paco Gento", "All of the above"], answer: "All of the above" },
    { question: "Which nation won the 1954 FIFA World Cup in 'The Miracle of Bern'?", options: ["West Germany", "Hungary", "Austria", "Uruguay"], answer: "West Germany" },
    { question: "Who scored the winning goal for Portugal in the Euro 2016 final?", options: ["Éder", "Cristiano Ronaldo", "Nani", "Ricardo Quaresma"], answer: "Éder" },
    { question: "Which club did Diego Maradona play for when he won two Serie A titles in 1987 and 1990?", options: ["Napoli", "Barcelona", "Boca Juniors", "Sevilla"], answer: "Napoli" },
    { question: "Who won the Ballon d'Or in 2004?", options: ["Andriy Shevchenko", "Ronaldinho", "Deco", "Thierry Henry"], answer: "Andriy Shevchenko" },
    { question: "Which player has made the most international appearances (caps) in men's football?", options: ["Cristiano Ronaldo", "Bader Al-Mutawa", "Soh Chin Ann", "Lionel Messi"], answer: "Cristiano Ronaldo" },
    { question: "Which club won the 2023 UEFA Champions League to complete a European Treble?", options: ["Manchester City", "Inter Milan", "Real Madrid", "Bayern Munich"], answer: "Manchester City" },
    { question: "Who scored the only goal in the 2023 UEFA Champions League final?", options: ["Rodri", "Erling Haaland", "Kevin De Bruyne", "Bernardo Silva"], answer: "Rodri" }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumberElement = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const progressBar = document.getElementById("progress-bar");
const quizElement = document.getElementById("quiz");
const resultElement = document.getElementById("result");
const finalScoreElement = document.getElementById("final-score");
const resultMessageElement = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");

function showQuestion() {
    answered = false;
    const current = questions[currentQuestion];
    
    questionNumberElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = option;
        button.type = "button";
        button.addEventListener("click", () => selectAnswer(button, option));
        optionsElement.appendChild(button);
    });

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
    scoreElement.textContent = `Score: ${score}`;

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish Quiz";
    } else {
        nextButton.textContent = "Next Question";
    }
}

function selectAnswer(button, selectedAnswer) {
    if (answered) return;
    answered = true;

    const correctAnswer = questions[currentQuestion].answer;
    const allOptions = document.querySelectorAll(".option");

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        allOptions.forEach(opt => {
            if (opt.textContent === correctAnswer) {
                opt.classList.add("correct");
            }
        });
    }

    allOptions.forEach(opt => {
        opt.disabled = true;
    });

    scoreElement.textContent = `Score: ${score}`;
}

nextButton.addEventListener("click", () => {
    if (!answered) {
        alert("Please choose an answer first!");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizElement.hidden = true;
    resultElement.hidden = false;
    finalScoreElement.textContent = `You scored ${score} out of ${questions.length}!`;

    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) {
        resultMessageElement.textContent = "🏆 Legendary! You really know your football!";
    } else if (percentage >= 50) {
        resultMessageElement.textContent = "⚽ Great job! Solid performance.";
    } else {
        resultMessageElement.textContent = "🔴 Keep studying and try again!";
    }

    progressBar.style.width = "100%";
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    answered = false;
    quizElement.hidden = false;
    resultElement.hidden = true;
    showQuestion();
});

showQuestion();
