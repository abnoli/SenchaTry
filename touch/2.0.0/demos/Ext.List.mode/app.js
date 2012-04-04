Ext.application({
    launch: function () {
        Ext.create('Ext.List', {
            fullscreen: true,
            mode: 'MULTI',
            store: {
                fields: ['name'],
                data: [{
                    name: 'Red'
                }, {
                    name: 'Orange'
                }, {
                    name: 'Yellow'
                }, {
                    name: 'Green'
                }, {
                    name: 'Blue'
                }] // data
            }, // store
            itemTpl: '{name}',
            listeners: {
                selectionchange: function (list, records) {
                    var names = [];
                    Ext.Array.each(records, function (item) {
                        names.push('<li>' + item.data.name + '</li>');
                    }); // each()
                    Ext.Msg.alert('You selected ' + records.length + ' item(s)', '<ul>' + names.join('') + '</ul>');
                } // selectionchange
            } // listeners
        }); // create()
    } // launch
}); // application()
