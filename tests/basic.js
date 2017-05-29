module.exports = {
    'Open Site and Screenshot' : function (client) {
        var search = require(client.globals.rootDir+'/custom-commands/search.js')

        client
            .url(client.globals.url)
            .maximizeWindow()
            .pause(3000)
            .saveScreenshot('screenshots/test.jpeg');
        search(client, "test");
        client.end();
    }
};