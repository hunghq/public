var logAppender = function (message) {
    $('#output').append(message);
    $('#output').append('<br />');
};

function log(message) {
    console.log(message);

    if (typeof logAppender == 'function') {
        logAppender(message);
    }
}
