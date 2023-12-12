function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomNumbers(amount, min, max) {
  const uniqueNumbers = [];

  while (uniqueNumbers.length < amount) {
    const randomNumber = getRandomNumber(min, max);

    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
    }
  }

  return uniqueNumbers;
}

const randomNumbers = generateUniqueRandomNumbers(6, 1, 45); // 1부터 10까지 중복되지 않는 랜덤한 숫자 2개를 뽑음

document.write(randomNumbers);
