//현재시간

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
      hours -= 12; //    24시간형 ->12시간형로 변경
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
  
  //to-do list 

  document.getElementById("add-btn").addEventListener("click", () => {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value;     // 할일목록을 입력   ( .trim() 썼다지움)
    
    if(todoText ===" "){
      alert('입력해주세요');
      return;
    }

    const todoList = document.getElementById("todo-list"); 
    const newTodo = document.createElement("li");  
    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', toggleComplete);
    checkbox.style = marginRight = "10px";
    const textNode=document.createTextNode(todoText);
  
    const deleteButton=document.createElement('button');    //list 삭제버튼 생성
    deleteButton.textContent='X';
    deleteButton.addEventListener('click',deleteTodo);      
      
    newTodo.appendChild(checkbox);
    newTodo.appendChild(textNode);
    newTodo.appendChild(deleteButton);
    todoList.appendChild(newTodo);
  
    todoInput.value = " ";
   
  })

  //checkbox에 클릭이벤트가 발생되었을때 함수 호출
  function toggleComplete(event){    
    const newTodo=event.target.parentElement;

    if(event.target.checked){               //체크박스가 체크되어있는지 확인
      newTodo.classList.add('complete');    // 체크되어 있다면 complete class Css 속성 적용(가운데 취소선)
    }else{
      newTodo.classList.remove('complete');
    }
  }
  //delteButton에 클릭이벤트가 발생되었을때 함수 호출
  function deleteTodo(event) {          
    const newTodo = event.target.parentElement;
    newTodo.remove();
  }
  
  //명언
  
  const quotes = ["The best way to predict the future is to invent it.", "Life is 10% what happens to us and 90% how we react to it.", "The only way to do great work is to love what you do.", "Your time is limited, don't waste it living someone else's life.", "The best revenge is massive success."];
  
  function showRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  showRandomQuote();
  setInterval(showRandomQuote, 10000);