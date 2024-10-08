let completedTests = 0;

module.exports = {
    afterEach: async function() {
        completedTests++;
        if (completedTests < this.currentTest.parent.tests.length) {
            await browser.reloadSession();
        }
    },
    resetTestCounter: function() {
        completedTests = 0;
    }
};

const { addAttachment, addLabel } = require('@wdio/allure-reporter').default;

beforeEach(() => {
    addLabel('Enviroment', process.env.ENV || 'Desenvolvimento')
    addLabel('Browser', browser.capabilities.browserName)
    addLabel('Version', browser.capabilities.browserVersion)
});

afterEach(async function() {
    if (this.currentTest.state === 'failed') {
        const screenshot = await browser.takeScreenshot()
        addAttachment('Screenshot', Buffer.from(screenshot, 'base64'), 'image/png')
        
        const logs = await browser.getLogs('driver')
        addAttachment('Execution Logs', logs.join('\n'), 'text/plain')
    }
});