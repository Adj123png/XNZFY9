const wishes = [
  '2025 新年快乐！',
  '愿你新的一年万事如意！',
  '好运连连，财源滚滚！',
  '家庭幸福，平安健康！',
  '新的一年，心想事成！',
  '梦想成真，福气满满！'
];

const messageElement = document.getElementById('message');
let currentIndex = 0;
let currentCharIndex = 0;
let typingInterval;

function typeText() {
  if (currentCharIndex < wishes[currentIndex].length) {
    messageElement.textContent += wishes[currentIndex][currentCharIndex];
    messageElement.setAttribute('data-text', messageElement.textContent); // 更新伪元素内容
    currentCharIndex++;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      if (currentIndex < wishes.length - 1) {
        currentIndex++;
        currentCharIndex = 0;
        messageElement.textContent = '';
        typingInterval = setInterval(typeText, 50);
      }
    }, 1500);
  }
}

// 开始打字动画
typingInterval = setInterval(typeText, 50);
