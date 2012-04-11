Ext.application({
    launch: function () {
        Ext.define('Browser', {
            extend: 'Ext.data.Model'
        }); // define()
        
        var store = Ext.create('Ext.data.Store', {
            model: 'Browser',
            sorters: 'name',
            fields: ['name', 'value'],
            data: [{
                name: 'engineName',
                value: Ext.browser.engineName
            }, {
                name: 'engineVersion',
                value: Ext.browser.engineVersion
            }, {
                name: 'isSecure',
                value: Ext.browser.isSecure
            }, {
                name: 'isStrict',
                value: Ext.browser.isStrict
            }, {
                name: 'name',
                value: Ext.browser.name
            }, {
                name: 'userAgent',
                value: Ext.browser.userAgent
            }, {
                name: 'version',
                value: Ext.browser.version.toString()
            }, {
                name: 'is.Firefox',
                value: Ext.browser.is.Firefox
            }, {
                name: 'is.IE',
                value: Ext.browser.is.IE
            }, {
                name: 'is.Chrome',
                value: Ext.browser.is.Chrome
            }, {
                name: 'is.Safari',
                value: Ext.browser.is.Safari
            }, {
                name: 'is.Opera',
                value: Ext.browser.is.Opera
            }, {
                name: 'is.Dolfin',
                value: Ext.browser.is.Dolfin
            }, {
                name: 'is.webOSBrowser',
                value: Ext.browser.is.webOSBrowser
            }, {
                name: 'is.ChromeMobile',
                value: Ext.browser.is.ChromeMobile
            }, {
                name: 'is.Silk',
                value: Ext.browser.is.Silk
            }, {
                name: 'is.Other',
                value: Ext.browser.is.Other
            }] // data
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            itemTpl: '{name}: <code>{value}</code>',
            store: store
        }); // create()
    } // launch
}); // application()
