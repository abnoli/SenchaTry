/*global Ext:false */
Ext.application({
    launch: function() {
        Ext.Viewport.add({
            masked: {
                xtype: 'loadmask'
            }
        });
    }
});
