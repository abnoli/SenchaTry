/*global Ext:false */
Ext.application({
    name: 'Ext.Array.clean()',
    launch: function () {
        /* Create two arrays. The 'dirty' array contains empty items. The 'clean' array filters empty items using the static Ext.Array.clean() method. */
        var arr = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
        
        /* Create a panel to display the output. */
        var panel = Ext.create('Ext.Panel', {
            id: 'pan',
            title: 'Ext.Array.contains() Example',
            height: 200,
            bodyPadding: 10,
            padding: 20,
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'textfield',
                    id: 'key'
                }, {
                    xtype: 'button',
                    text: 'Check',
                    handler: function () {
                        var value = Ext.getCmp('key').getValue();
                        Ext.getCmp('foo').setText(" contains '" + value + "'? " + Ext.Array.contains(arr, value));
                    }
                }]
            }],
            items: [{
                xtype: 'label',
                text: JSON.stringify(arr)
            }, {
                xtype: 'label',
                id: 'foo',
                text: ''
            }],
            renderTo: Ext.getBody()
        });
    }
});
