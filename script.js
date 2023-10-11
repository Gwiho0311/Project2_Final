// script.js

document.addEventListener("DOMContentLoaded", function () {
  // 로컬 스토리지에서 데이터 가져오기
  var vocabularyList = JSON.parse(localStorage.getItem("vocabularyList")) || [];

  // 테이블에 데이터 표시
  var tableBody = document.querySelector("table tbody");
  vocabularyList.forEach(function (word, index) {
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${index + 1}</td>
      <td>${word.level}</td>
      <td>${word.word}</td>
      <td>${word.meaning}</td>
      <td>${word.date}</td>
      <td>
        <button onclick="location.href='edit.html'">edit</button>
        <button onclick="btn()"> delete </button>
      </td>
    `;
    tableBody.appendChild(newRow);
  });
});

function btn() {
  alert('게시물을 삭제할까요?');
}

document.addEventListener("DOMContentLoaded", function () {
  var addButton = document.querySelector("button");
  addButton.addEventListener("click", function (event) {
    event.preventDefault();

    // 입력된 값 가져오기
    var number = document.getElementById("number1").value;
    var level = document.getElementById("level1").value;
    var word = document.getElementById("word1").value;
    var meaning = document.getElementById("meaning1").value;
    
    if (isNaN(number)) {
      alert("숫자만 입력 가능합니다.");
      return;
    }

    if (level !=  "*" && level != "**" && level != "***") {
      alert("*로 level을 표시해주세요.");
      return;
    }

    if (typeof word !== "string" || !isNaN(word)) {
      alert("문자만 입력 가능합니다.");
      return;
    }

    if (typeof meaning !== "string" || !isNaN(meaning)) {
      alert("문자만 입력 가능합니다.");
      return;
    }
    
    var date = new Date().toLocaleDateString(); // 현재 날짜 가져오기

    alert('게시물이 추가됩니다');
    
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 다른 코드

  // 수정 버튼 클릭 시 실행되는 이벤트 리스너
  var editButton = document.querySelector("#editButton");
  editButton.addEventListener("click", function (event) {
    event.preventDefault();

    // 입력된 값 가져오기
    var number = document.getElementById("number").value;
    var level = document.getElementById("level").value;
    var word = document.getElementById("word").value;
    var meaning = document.getElementById("meaning").value;

    if (isNaN(number)) {
      alert("숫자만 입력 가능합니다.");
      return;
    }

    if (level != "*" && level != "**" && level != "***") {
      alert("*로 level을 표시해주세요.");
      return;
    }

    if (typeof word !== "string" || !isNaN(word)) {
      alert("문자만 입력 가능합니다.");
      return;
    }

    if (typeof meaning !== "string" || !isNaN(meaning)) {
      alert("문자만 입력 가능합니다.");
      return;
    }

    // 수정에 관련된 alert만 표시
   
    alert('게시물을 수정할까요?');
    
  });

  // 다른 코드
});
