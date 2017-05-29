module.exports = {
    abortOnAssertionFailure : false,
    waitForConditionPollInterval : 500,
    waitForConditionTimeout : 5000,
    throwOnMultipleElementsReturned : true,
    rootDir : __dirname,
    'integration': {
        url: 'http://www.google.com',
        user: '',
        pass: ''
    },
    'acceptance': {
        url: 'http://www.google.com',
        user: '',
        pass: ''
    },
    'prod': {
        url: 'http://www.google.com',
        user: '',
        pass: ''
    },
    before: function(done) {
        done();
    },

// External after hook is ran at the very end of the tests run, after closing the Selenium session
    after: function(done) {
        done();
    },

    // This will be run before each test suite is started
    beforeEach: function(client, done) {
        done();
    },

    // This will be run after each test suite is finished
    afterEach: function(client, done) {
        console.log(client.currentTest);
        done();
    },

    reporter : function(results, done) {
        //console.log(results);
        done();
    }

};
