function analyze() {
    var text = document.getElementById("text").value.trim();

    if (text === "") {
        document.getElementById("char").innerText = "0";
        document.getElementById("word").innerText = "0";
        document.getElementById("reverse").innerText = "Please enter some text.";
        return;
    }

    var charCount = text.length;

    var wordCount = text.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;

    var reverseText = text.split("").reverse().join("");

    document.getElementById("char").innerText = charCount;
    document.getElementById("word").innerText = wordCount;
    document.getElementById("reverse").innerText = reverseText;
}