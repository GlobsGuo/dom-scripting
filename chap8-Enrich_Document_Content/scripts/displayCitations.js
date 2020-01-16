function displayCitations() {
    // compatibility check
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    var quotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < quotes.length; i++) {
        var quote = quotes[i];
        var url = quote.getAttribute("cite");
        if (!url) continue;

        // lastChild attribute may not work as expected,
        // we use our custom 'lastChildElement' here.
        var quoteChildren = quote.getElementsByTagName("*");
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];

        // create a link element
        var link = document.createElement("a");
        var linkText = document.createTextNode("source");
        link.appendChild(linkText);
        link.setAttribute("href", url);

        // use a superscript to hold the link
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}

addLoadEvent(displayCitations);
