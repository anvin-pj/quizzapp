const quizzes = {
    HTML: [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hypermedia Textual Markup Language", correct: false },
                { text: "Hyper Text Markup Language", correct: true },
                { text: "High Tech Multimedia Language", correct: false },
                { text: "Home Tool Management Language", correct: false },
                { text: "Hyperlink and Text Markup Language", correct: false }
            ],
        },
        {
            question: "Which tag is used to create a hyperlink?",
            answers: [
                { text: "link", correct: false },
                { text: "a", correct: true },
                { text: "href", correct: false },
                { text: "hyperlink", correct: false },
                { text: "url", correct: false },
            ],
        },
        {
            question: "Which attribute specifies the destination of a hyperlink?",
            answers: [
                { text: "src", correct: false },
                { text: "href", correct: true },
                { text: "link", correct: false },
                { text: "url", correct: false },
                { text: "target", correct: false },
            ],
        },
        {
            question: "What does the <br> tag do?",
            answers: [
                { text: "It creates a line break.", correct: true },
                { text: "It inserts a horizontal line.", correct: false },
                { text: "It creates a new paragraph.", correct: false },
                { text: "It breaks the page into sections.", correct: false },
                { text: "It makes text bold.", correct: false },
            ],
        },
        {
            question: "Which element is used for the largest heading?",
            answers: [
                { text: "h1", correct: true },
                { text: "h6", correct: false },
                { text: "header", correct: false },
                { text: "title", correct: false },
                { text: "big", correct: false },
            ],
        }
    ],
    Programming: [
        {
            question: "Which of the following is NOT a programming language?",
            answers: [
                { text: "Python", correct: false },
                { text: "HTML", correct: false },
                { text: "Java", correct: false },
                { text: "Photoshop", correct: true },
                { text: "C++", correct: false }
            ]
        },
        {
            question: "Which programming language is primarily used for web development?",
            answers: [
                { text: "Python", correct: false },
                { text: "JavaScript", correct: true },
                { text: "C#", correct: false },
                { text: "Java", correct: false },
                { text: "Ruby", correct: false }
            ]
        },
        {
            question: "What does OOP stand for in programming?",
            answers: [
                { text: "Object Oriented Programming", correct: true },
                { text: "Object Operations Programming", correct: false },
                { text: "Open Object Programming", correct: false },
                { text: "Object Operative Programming", correct: false },
                { text: "Ordered Object Programming", correct: false }
            ]
        },
        {
            question: "Which of the following is a statically typed language?",
            answers: [
                { text: "Java", correct: true },
                { text: "JavaScript", correct: false },
                { text: "Python", correct: false },
                { text: "Ruby", correct: false },
                { text: "PHP", correct: false }
            ]
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answers: [
                { text: "//", correct: true },
                { text: "#", correct: false },
                { text: "/*", correct: false },
                { text: "!--", correct: false },
                { text: "/*...*/", correct: true }
            ]
        }
    ],
    DataStructures: [
        {
            question: "Which data structure follows the Last In, First Out (LIFO) principle?",
            answers: [
                { text: "Queue", correct: false },
                { text: "Linked List", correct: false },
                { text: "Stack", correct: true },
                { text: "Array", correct: false },
                { text: "Tree", correct: false }
            ]
        },
        {
            question: "Which of the following is a linear data structure?",
            answers: [
                { text: "Stack", correct: true },
                { text: "Tree", correct: false },
                { text: "Graph", correct: false },
                { text: "Hash Table", correct: false },
                { text: "Matrix", correct: false }
            ]
        },
        {
            question: "What is the time complexity of accessing an element in an array?",
            answers: [
                { text: "O(n)", correct: false },
                { text: "O(log n)", correct: false },
                { text: "O(1)", correct: true },
                { text: "O(n log n)", correct: false },
                { text: "O(n^2)", correct: false }
            ]
        },
        {
            question: "Which data structure is used for implementing recursion?",
            answers: [
                { text: "Queue", correct: false },
                { text: "Stack", correct: true },
                { text: "Linked List", correct: false },
                { text: "Array", correct: false },
                { text: "Tree", correct: false }
            ]
        },
        {
            question: "What is a key feature of a linked list?",
            answers: [
                { text: "Elements are stored in contiguous memory locations.", correct: false },
                { text: "It has a fixed size.", correct: false },
                { text: "Elements can be easily inserted or deleted.", correct: true },
                { text: "It is faster than an array for searching.", correct: false },
                { text: "It requires more memory than an array.", correct: false }
            ]
        }
    ],
    Algorithms: [
        {
            question: "Which of the following sorting algorithms has a worst-case time complexity of O(n^2)?",
            answers: [
                { text: "Merge Sort", correct: false },
                { text: "Quick Sort", correct: false },
                { text: "Bubble Sort", correct: true },
                { text: "Insertion Sort", correct: false },
                { text: "Selection Sort", correct: false }
            ]
        },
        {
            question: "Which algorithm is used to find the shortest path in a graph?",
            answers: [
                { text: "Dijkstra's Algorithm", correct: true },
                { text: "Merge Sort", correct: false },
                { text: "Bubble Sort", correct: false },
                { text: "Binary Search", correct: false },
                { text: "Depth First Search", correct: false }
            ]
        },
        {
            question: "What is the time complexity of a binary search algorithm?",
            answers: [
                { text: "O(n)", correct: false },
                { text: "O(log n)", correct: true },
                { text: "O(n log n)", correct: false },
                { text: "O(n^2)", correct: false },
                { text: "O(1)", correct: false }
            ]
        },
        {
            question: "Which of the following is a divide and conquer algorithm?",
            answers: [
                { text: "Quick Sort", correct: true },
                { text: "Bubble Sort", correct: false },
                { text: "Linear Search", correct: false },
                { text: "Stack", correct: false },
                { text: "Queue", correct: false }
            ]
        },
        {
            question: "Which algorithm is used for finding the greatest common divisor (GCD) of two numbers?",
            answers: [
                { text: "Euclidean Algorithm", correct: true },
                { text: "Merge Sort", correct: false },
                { text: "Quick Sort", correct: false },
                { text: "Binary Search", correct: false },
                { text: "Depth First Search", correct: false }
            ]
        }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizSection = document.getElementById("quiz-section");
const topicSelection = document.getElementById("topic-selection");

function startQuiz(topic) {
    // Hide the topic selection and show the quiz section
    topicSelection.style.display = "none";
    quizSection.style.display = "block";

    // Set the current quiz based on the selected topic
    currentQuiz = quizzes[topic];
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuiz[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuiz.length - 1) {
        handleNextButton();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${currentQuiz.length}!`;
    nextButton.style.display = "none"; // Hide the Next button after the quiz ends

    // Create and show the Play Again button
    const playAgainButton = document.createElement("button");
    playAgainButton.innerHTML = "Play Again";
    playAgainButton.classList.add("btn");
    playAgainButton.addEventListener("click", () => {
        location.reload(); // Reload the page to return to topic selection
    });
    document.querySelector(".quiz").appendChild(playAgainButton);

    // Create and show the Logout button
    const logoutButton = document.createElement("button");
    logoutButton.innerHTML = "Logout";
    logoutButton.classList.add("btn");
    logoutButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to the login page
    });
    document.querySelector(".quiz").appendChild(logoutButton);
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
        showQuestion();
    }
}
