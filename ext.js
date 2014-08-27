(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Should be working!'};
    };

    //=====My blocks=====
    ext.when_true_hat = function(boolean) {
        while (!boolean) {};
        return true;

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['h', 'when %b', 'when_true_hat']
        ]
    };

    // Register the extension
    ScratchExtensions.register("wizzwizz4's Extra Blocks for Scratch!", descriptor, ext);
})({});