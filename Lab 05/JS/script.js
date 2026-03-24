function analyze() {

    var text = document.getElementById("text").value;

    
    var charCount = text.length;


    var wordCount;
    if (text.trim() === "") {
        wordCount = 0;
    } else {
        wordCount = text.trim().split(" ").length;
    }


    var reverseText = text.split("").reverse().join("");

    document.getElementById("char").innerText = charCount;
    document.getElementById("word").innerText = wordCount;
    document.getElementById("reverse").innerText = reverseText;
}