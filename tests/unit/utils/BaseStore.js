/*globals describe,it */
"use strict";

var expect = require('chai').expect;
var BaseStore = require('../../../utils/BaseStore');

var contextMock = {
    dimensions: {}
};
var dispatcherMock = {
        getContext: function () {
            return contextMock;
        }
    };

describe('BaseStore', function () {
    it('Constructor', function () {
        var store = new BaseStore(dispatcherMock);
        expect(store.dispatcher).to.equal(dispatcherMock);
        expect(store.getContext()).to.equal(dispatcherMock.getContext());
    });

    it('change event management', function (done) {
        var store = new BaseStore(dispatcherMock);
        var payloadMock = {
            foo: 'bar'
        };
        store.addChangeListener(function (payload) {
            expect(payload.foo).to.equal('bar');
            done();
        });
        store.emitChange(payloadMock);
    });
});
