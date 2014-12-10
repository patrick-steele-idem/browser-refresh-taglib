
var scriptUrl = process.env.BROWSER_REFRESH_URL;
if (!scriptUrl) {
    var port = process.env.BROWSER_REFRESH_PORT;
    if (port) {
        scriptUrl = 'http://localhost:' + port + '/browser-refresh.js';
    }
}

var enabled = scriptUrl != null;
var html;

if (enabled) {
    html = '<script src="' + scriptUrl + '"></script>';
}

exports.render = function(input, context) {
    if (enabled && input.enabled !== false) {
        context.write(html);
    }
};