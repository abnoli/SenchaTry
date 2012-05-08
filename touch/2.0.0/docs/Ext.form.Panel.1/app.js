Ext.application({
    launch: function () {
        var form = Ext.create('Ext.form.Panel', {
            fullscreen: true,
            items: [{
                xtype: 'textfield',
                name: 'name',
                label: 'Name'
            }, {
                xtype: 'emailfield',
                name: 'email',
                label: 'Email'
            }, {
                xtype: 'passwordfield',
                name: 'password',
                label: 'Password'
            }]
        });
    } // launch
}); // application()
