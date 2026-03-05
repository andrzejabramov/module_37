function checkPalindrome(word) {
    // Приводим слово к нижнему регистру и удаляем пробелы
    const cleanWord = word.toLowerCase().replace(/\s+/g, '');
    // Разворачиваем слово
    const reversedWord = cleanWord.split('').reverse().join('');

    if (cleanWord === reversedWord) {
        console.log(`✅ Слово "${word}" является палиндромом`);
    } else {
        console.log(`❌ Слово "${word}" не является палиндромом`);
    }
}

// Тесты
checkPalindrome("довод");
checkPalindrome("топот");
checkPalindrome("привет");
checkPalindrome("А роза упала на лапу Азора");