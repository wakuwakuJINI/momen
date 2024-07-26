function updateClock() {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let days = date.getDate();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  let weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let ampm = "";
  if (hours >= 12) {
    hours -= 12; // 24시간제 ->12시간제로 변경
    ampm = "PM";
  } else {
    ampm = "AM!";
  }
  let dateStr = `${year}년 ${month}월 ${days}일 ${weeks[date.getDay()]}`;
  let timeStr = `${hours} : ${minutes} : ${seconds} ${ampm}`;

  document.getElementById("date").textContent = dateStr;
  document.getElementById("time").textContent = timeStr;
}

updateClock();

setInterval(updateClock, 1000);

// 시계아래쪽 Todo List
document.getElementById("add-btn").addEventListener("click", () => {
  const todoInput = document.getElementById("todo-input");
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    const todoList = document.getElementById("todo-list");
    const newTodo = document.createElement("li");

    const checkbox = documnent.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style = marginRight = "10px";

    newTodo.appendChild(checkBox);
    newTodo.appendChild(document.createTextNode(todoText));
    todoList.appendChild(newTodo);

    todoInput.value = "";
  }
});

//하단에 명언넣기

const quotes = ["The best way to predict the future is to invent it.", "Life is 10% what happens to us and 90% how we react to it.", "The only way to do great work is to love what you do.", "Your time is limited, don't waste it living someone else's life.", "The best revenge is massive success."];

function showRandomQuote() {
  const quoteElement = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}
showRandomQuote();
setInterval(showRandomQuote, 5000);
