axios.get('/games')
    .then(function (response) {
        let currentQuestion = 0;
        let questions = response.data;
        console.log(questions);

        let score = 0;
        function loadQuestion() {
            let head = document.querySelector("#exe");
            head.innerHTML = questions[currentQuestion].question;

            let options = document.querySelectorAll(".option");

            let currentOptions = questions[currentQuestion].incorrectAnswers;
            for (let i = 0; i < options.length; i++) {
                options[i].innerHTML = currentOptions[i];
            }
            correctAnswer = questions[currentQuestion].correctAnswer;

        }

        let selectedOption = null;

        function selectOption(optionIndex) {

            for (let i = 0; i < options.length; i++) {
                options[i].classList.remove("selected");
            }

            options[optionIndex].classList.add("selected");

            selectedOption = optionIndex;

            const nextButton = document.getElementById("next-btn");
            nextButton.style.display = "block";
        }

        function nextQuestion() {
            if (selectedOption === correctAnswer) {
                score = score + 1;
                console.log(score);
                console.log("Correct answer");

            } else {
                console.log("Wrong answer");
            }
            console.log("Current score: " + score);

            selectedOption = null;
            currentQuestion++;

            if (currentQuestion === questions.length) {
                const nextButton = document.getElementById("next-btn");
                nextButton.style.display = "none";
                let complete = document.createElement('h1');
                complete.innerText = 'Quiz Complete';
                let parent = nextButton.parentNode;
                let div = document.createElement("div");
                div.setAttribute('class', "result");

                parent.appendChild(div);
                div.appendChild(complete);
                let result = document.createElement('h1');
                result.innerHTML = `${(score / 10) * 100}%`
                div.appendChild(result);
                console.log("Final score: " + score);

                let suggestion = document.createElement("h1");

                if (result.innerHTML > `${90}%` && result.innerHTML <= `${100}%`) {
                    suggestion.innerHTML = 'Your Knowledge is <br /> Amazing';
                } else if (result.innerHTML > `${80}%` && result.innerHTML <= `${90}%`) {
                    suggestion.innerHTML = 'Excelent';
                } else if (result.innerHTML > `${70}%` && result.innerHTML <= `${80}%`) {
                    suggestion.innerHTML = 'Good <br /> Keep it up';
                } else if (result.innerHTML > `${60}%` && result.innerHTML <= `${70}%`) {
                    suggestion.innerHTML = 'It can be <br /> Better';
                } else if (result.innerHTML > `${50}%` && result.innerHTML <= `${60}%`) {
                    suggestion.innerHTML = 'Need Improvemrnt';
                } else if (result.innerHTML < `${50}%`) {
                    suggestion.innerHTML = 'Need Hard Work';
                }
                let backToHome = document.createElement('button');
                backToHome.innerText = "Back To Home";
                backToHome.setAttribute('class', "backToHome");
                backToHome.addEventListener('click', function () {
                    window.location.href = './index.html';
                });
                div.appendChild(suggestion);
                div.appendChild(backToHome);


            } else {
                loadQuestion();
            }


        }
        loadQuestion();

        const nextButton = document.getElementById("next-btn");
        nextButton.addEventListener("click", nextQuestion);


        let options = document.querySelectorAll(".option");

        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener("click", () => {
                selectOption(i);
            });
        }
        console.log(score)

    })
    .catch(function (error) {
        console.error(error);
    });