/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var createStore = require('../../utils/createStore');

module.exports = createStore({
    storeName: 'DelayedStore',
    handlers: {
        'DELAY': 'delay',
        'default': 'default'
    },
    initialize: function () {
        this.state = {};
        this.called = false;
        this.defaultCalled = false;
        this.actionHandled = null;
    },
    'default': function (payload, actionName) {
        this.defaultCalled = true;
        this.actionHandled = actionName;
    },
    delay: function (payload) {
        var self = this;
        self.called = true;
        self.state.page = 'delay';
        self.state.final = true;
    },
    getState: function () {
        return this.state;
    },
    dehydrate: function () {
        return this.state;
    },
    rehydrate: function (state) {
        this.state = state;
    }
});
