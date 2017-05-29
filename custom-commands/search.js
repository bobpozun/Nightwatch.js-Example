module.exports = function(client,text) {
    var google = client.page.main();
    return google
        .assert.visible('@search_text')
        .setValue('@search_text', text)
        .assert.visible('@search_button')
        .click('@search_button');
};
