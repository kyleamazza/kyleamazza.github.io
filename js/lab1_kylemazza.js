window.addEventListener('load', function() {
    function initButtonHandlers() {
        var buttons = Array.from(document.getElementsByTagName('button'));
        buttons.map(function(btn) {
            btn.addEventListener("click", function() {
                var input = btn.previousElementSibling;
                var textToTransform = input.parentElement.previousElementSibling;
                var buttonTextNode = btn.childNodes[0];
                var transformType = "" + buttonTextNode.nodeValue;

                input.value = getTransformedText(textToTransform, transformType);

                isWord("hello");
            });
        });
    }

    function handleButtonClick(e) {

    }
    
    function getTransformedText(textToTransform, transformType) {
        if (transformType === "Encode") {
            return encodeText(textToTransform);
        }
        return decodeText(textToTransform);
    }

    function encodeText(text) {
        return "encodeeeeeererere";
    }

    function decodeText(text) {
        return "decodeeee";
    }

    function isWord(word) {
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    console.log(xhr.responseText);
                } else {
                    console.log("Error");
                }
            }
        }
        xhr.open("GET", "https://od-api.oxforddictionaries.com/api/v1/entries/en/" + word);

        xhr.setRequestHeader("Content-Type", "text/html");
        xhr.setRequestHeader("app_key", "90f6683c722bb84981940ef04c2a47b6");
        xhr.setRequestHeader("app_id", "fa942116");

        xhr.send();
    }

    initButtonHandlers();
});