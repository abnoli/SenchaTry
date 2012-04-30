Ext.application({
    launch: function() {
        Ext.create('Ext.Container', {
            fullscreen: true,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                title: 'Ext.Audio'
            }, {
                xtype: 'audio',
                url: 'touch/examples/audio/crash.mp3'
            }]
        });
    }
});
