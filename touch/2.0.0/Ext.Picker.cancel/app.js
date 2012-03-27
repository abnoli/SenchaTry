Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'toolbar',
                docked: 'top',
                items: [{
                    text: 'show Picker',
                    handler: function () {
                        picker.show();
                    } // handler
                }] // items (toolbar)
            }] // items (panel)
        }); // create()
        
        var picker = Ext.create('Ext.Picker', {
            slots: [{
                name: 'color',
                data: [{
                    text: 'Red',
                    value: '#f00'
                }, {
                    text: 'Orange',
                    value: '#ffb600'
                }, {
                    text: 'Yellow',
                    value: '#ff0'
                }, {
                    text: 'Green',
                    value: '#80ff4d'
                }, {
                    text: 'Blue',
                    value: '#009dff'
                }] // data
            }], // slots
            listeners: {
                change: function (picker, value, oldValue) {
                    Ext.Msg.alert('You selected:', value.color);
                }, // change
                cancel: function (picker) {
                    Ext.Msg.alert('You hit cancel', '');
                } // cancel
            } // listeners
        }); // create()
        Ext.Viewport.add(picker);
    } // launch
}); // application()
