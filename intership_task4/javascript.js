  const quizData = [
      {
        question: "Which skill is best for desiging?",
        options: ["JavaScript", "React", "Css"],
        correct: 3
      },
      {
        question: "Which is One JavaScript's library?",
        options: ["React", "Bootstrap", "JavaScript"],
        correct: 1
      },
      {
        question: "Which Css property is used for flow items from left to right?",
        options: ["flex", "grid", "align-items"],
        correct: 0
      }
    ];

    let current_Question = 0;
    let score = 0;
    const questionEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("next_btn");

    function questiondone() {
      const q = quizData[current_Question];
      questionEl.textContent = q.question;
      answersEl.innerHTML = "";
      q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="answer" value="${i}"> ${opt}
        `;
        answersEl.appendChild(label);
        answersEl.appendChild(document.createElement("br"));
      });
    }

    function getSelected() {
      const answers = document.querySelectorAll('input[name="answer"]');
      for (const ans of answers) {
        if (ans.checked) return parseInt(ans.value);
      }
      return null;
    }

    nextBtn.addEventListener("click", () => {
      const selected = getSelected();
      if (selected === null) {
        alert("Please select an answer before proceeding!");
        return;
      }

      if (selected === quizData[current_Question].correct) score++;

      current_Question++;

      if (current_Question < quizData.length) {
        questiondone();
      } else {
        document.querySelector(".main_div").innerHTML =
         ` <h2> Your Score: ${score} / ${quizData.length} </h2>`;
      }
    });
  
    questiondone();