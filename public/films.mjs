axios.get('/movies')
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
            const nextButton = document.getElementById("next-btn");
            nextButton.style.display = 'none';



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


            }

            selectedOption = null;
            currentQuestion++;

            options.forEach(function (option) {
                option.classList.remove("selected");
            });

            if (currentQuestion === questions.length) {
                const nextButton = document.getElementById("next-btn");
                nextButton.style.display = "none";
                let complete = document.createElement('h1');
                complete.style.backgroundColor = '#b1b1f7';
                complete.style.padding = '1rem';
                complete.style.width = 'max-content';
                complete.style.alignSelf = 'center';
                complete.innerText = 'Quiz Complete';
                let parent = nextButton.parentNode;
                let div = document.createElement("div");
                div.setAttribute('class', "result");

                parent.appendChild(div);
                div.appendChild(complete);
                let result = document.createElement('h1');
                let precentage = (score / 10) * 100
                result.innerHTML = `You scored &nbsp; ${precentage}%`
                div.appendChild(result);

                let suggestion = document.createElement("h1");

                if (precentage > 90 && precentage <= 100) {
                    suggestion.style.backgroundColor = '#b1b1f7';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
                    suggestion.innerHTML = 'Your Knowledge is <br /> Amazing';
                } else if (precentage > 80 && precentage <= 90) {
                    suggestion.style.backgroundColor = 'rgb(151 241 198)';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
                    suggestion.innerHTML = 'Excelent';
                } else if (precentage > 70 && precentage <= 80) {
                    suggestion.style.backgroundColor = 'rgb(223 243 136)';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
                    suggestion.innerHTML = 'Good <br /> Keep it up';
                } else if (precentage > 60 && precentage <= 70) {
                    suggestion.style.backgroundColor = 'rgb(237 193 76)';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
                    suggestion.innerHTML = 'It can be <br /> Better';
                } else if (precentage > 50 && precentage <= 60) {
                    suggestion.style.backgroundColor = 'rgb(237 126 76)';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
                    suggestion.innerHTML = 'Need Improvemrnt';
                } else if (precentage < 50) {
                    suggestion.style.backgroundColor = 'rgb(239 45 45)';
                    suggestion.style.padding = '1rem';
                    suggestion.style.width = 'max-content';
                    suggestion.style.alignSelf = 'center';
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

