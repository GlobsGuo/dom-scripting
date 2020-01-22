function displayAccessKeys() {
    var links = document.getElementsByTagName("a");
    if (links.length < 1) return false;

    var akeys = new Array();
    for (var i = 0; i < links.length;i ++) {
        var currLink = links[i];
        if (!currLink.hasAttribute("accesskey")) continue;
        var key = currLink.getAttribute("accesskey");
        var text = currLink.lastChild.nodeValue;
        akeys[key] = text;
    }

    var list = document.createElement("ul");
    for (key in akeys) {
        var text = akeys[key];
        var str = key + ": " + text;
        var item = document.createElement("li");
        var itemText = document.createTextNode(str);
        item.appendChild(itemText);
        list.appendChild(item);
    }

    var header = document.createElement("h3");
    var hdrText = document.createTextNode("AccessKeys");
    header.appendChild(hdrText);
    document.body.appendChild(header);
    document.body.appendChild(list);
}

addLoadEvent(displayAccessKeys);