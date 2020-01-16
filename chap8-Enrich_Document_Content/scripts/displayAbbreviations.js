function displayAbbreviations() {
    // compatibility check
    if (!document.getElementsByTagName) return false;
    if (!document.createTextNode) return false;
    if (!document.createElement) return false;

    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;

    // get the abbreviations list
    var defs = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var abbr = abbreviations[i];
        // to support explorer before IE6
        if (abbr.childNodes.length < 1) return false;
        var definition = abbr.getAttribute("title");
        var key = abbr.lastChild.nodeValue;
        defs[key] = definition;
    }

    // create description list
    var dlist = document.createElement("dl");
    for (key in defs) {
        var definition = defs[key];
        var dt = document.createElement("dt");
        var dt_text = document.createTextNode(key);
        dt.appendChild(dt_text);

        var dd = document.createElement("dd");
        var dd_text = document.createTextNode(definition);
        dd.appendChild(dd_text);

        dlist.appendChild(dt);
        dlist.appendChild(dd);
    }

    // create header of description list
    var abbr_header = document.createElement("h2");
    var hdr_text = document.createTextNode("Abbreviations");
    abbr_header.appendChild(hdr_text);

    // attach the description list to body
    //var body = document.getElementsByTagName("body")[0];
    var body = document.body;
    body.appendChild(abbr_header);
    body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);
