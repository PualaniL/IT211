/*
Pig Latin Translator 
Lovell Pualani
7-7-2023

- When the page fully loads
    -Define the translateToPigLatin function:
        - check if input is empty or a single character, return a message
        - split the input into words
        - for each word, translate into Pig Latin based on initial letters and PUSH to an array
        - Return the translated array as a string
    - Define the translate function
        -Get the input text
        -Call the function with the input text 
        -Set the ouput text 
    - Added a click event listener to the button 
        -call the translate function 

*/

document.addEventListener("DOMContentLoaded", function() {
    function translateToPigLatin(input) {
        if (!input || input.length === 1) {
            return "Input cannot be translated.";
        }
    
        let words = input.toLowerCase().split(" ");
    
        let translatedWords = words.map(word => {
            let translatedWord;
    
            if (isVowel(word[0])) {
                translatedWord = word + "way";
            } else if (!isVowel(word[0]) && !isVowel(word[1])) {
                translatedWord = word.slice(2) + word.slice(0, 2) + "ay";
            } else if (!isVowel(word[0])) {
                translatedWord = word.slice(1) + word[0] + "ay";
            } else {
                translatedWord = word;
            }
    
            return translatedWord.charAt(0).toUpperCase() + translatedWord.slice(1);
        });
    
        return translatedWords.join(" ").trim();
    }
    
    function isVowel(char) {
        return ["a", "e", "i", "o", "u"].includes(char);
    }
    
    function translate() {
        let input = document.getElementById('userInput').value;
        let translation = translateToPigLatin(input);
    
        document.getElementById('output').textContent = translation;
    }
    
    document.getElementById('translateButton').addEventListener("click", translate);
});