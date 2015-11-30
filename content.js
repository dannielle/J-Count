var elements = document.getElementsByTagName('*');

function isTextNode(node) {
    return node.nodeType === 3;
}

function replaceJust(element) {
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (isTextNode(node)) {
            var originalHTML = node.innerHTML;
            console.log("pow");
            console.log(originalHTML);
            console.log("text is: " + node.text);
            if (originalHTML){
                var replacedHTML = originalHTML.replace(/just/gi, '<span style="background:yellow;font-style:oblique;font-weight:bold">just</span>');
                node.innerHTML = replacedHTML;
                console.log("hit");
            }
        }
        else if (node.childNodes.length > 0) {
            replaceJust(node);  // Not a text node or leaf, so check it's children
        }
    }
}

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    replaceJust(element);
}