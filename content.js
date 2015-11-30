var elements = document.getElementsByTagName('*');

function isTextNode(node) {
    return node.nodeType === 3;
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (isTextNode(node)) {
            var text = node.nodeValue;
            var replacedText = text.replace(/just/gi, '<span style="background:yellow;font-style:oblique;font-weight:bold">just</span>');
            
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}