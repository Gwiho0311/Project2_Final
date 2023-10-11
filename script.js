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
        <td>Menu</td>
      `;
      tableBody.appendChild(newRow);
    });
  });
  
  function btn() {
    alert('게시물을 삭제할까요?');
  }
  // 나머지 JavaScript 코드도 이 파일에 추가
  