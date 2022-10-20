addEventListener('load', function(e) {
  console.log('npm');
});
function textColor(bgColor) {
  return net.run(bgColor).black > .5 ? "black" : "white";
}

function toRGB(bgColor) {
    return "rgb(" + Math.floor(bgColor.r * 255) +
             ", " + Math.floor(bgColor.g * 255) + 
             ", " + Math.floor(bgColor.b * 255) + ")"
}

function toDiv(bg, txt) {
    return '<div style="padding: 6px; background: ' + toRGB(bg) + 
           '; color: '+txt+'">'+ toRGB(bg) + '</div>'
}

function sample() {
    var results = [];
    for (var i = 0; i < 50; i++) {
        var bg = {r: Math.random(), g: Math.random(), b: Math.random()}
        var txt = textColor(bg);

        results.push(toDiv(bg, txt));
    }
    return results;
}

sample().join("\n");
