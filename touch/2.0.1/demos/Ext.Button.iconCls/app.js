/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Panel', {
            fullscreen: true,
            bodyPadding: 20,
            layout: {
                layout: 'vbox',
                align: 'center'
            }, // layout
            defaults: {
                margin: 10,
                width: 200
            }, // defaults
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'action',
                    iconMask: true,
                    text: 'action'
                }, {
                    xtype: 'button',
                    iconCls: 'add',
                    iconMask: true,
                    text: 'add'
                }, {
                    xtype: 'button',
                    iconCls: 'arrow_down',
                    iconMask: true,
                    text: 'arrow_down'
                }, {
                    xtype: 'button',
                    iconCls: 'arrow_left',
                    iconMask: true,
                    text: 'arrow_left'
                }, {
                    xtype: 'button',
                    iconCls: 'arrow_right',
                    iconMask: true,
                    text: 'arrow_right'
                }, {
                    xtype: 'button',
                    iconCls: 'arrow_up',
                    iconMask: true,
                    text: 'arrow_up'
                }, {
                    xtype: 'button',
                    iconCls: 'compose',
                    iconMask: true,
                    text: 'compose'
                }, {
                    xtype: 'button',
                    iconCls: 'delete',
                    iconMask: true,
                    text: 'delete'
                }, {
                    xtype: 'button',
                    iconCls: 'home',
                    iconMask: true,
                    text: 'home'
                }, {
                    xtype: 'button',
                    iconCls: 'locate',
                    iconMask: true,
                    text: 'locate'
                }, {
                    xtype: 'button',
                    iconCls: 'maps',
                    iconMask: true,
                    text: 'maps'
                }, {
                    xtype: 'button',
                    iconCls: 'organize',
                    iconMask: true,
                    text: 'organize'
                }, {
                    xtype: 'button',
                    iconCls: 'refresh',
                    iconMask: true,
                    text: 'refresh'
                }, {
                    xtype: 'button',
                    iconCls: 'reply',
                    iconMask: true,
                    text: 'reply'
                }, {
                    xtype: 'button',
                    iconCls: 'search',
                    iconMask: true,
                    text: 'search'
                }, {
                    xtype: 'button',
                    iconCls: 'settings',
                    iconMask: true,
                    text: 'settings'
                }, {
                    xtype: 'button',
                    iconCls: 'star',
                    iconMask: true,
                    text: 'star'
                }, {
                    xtype: 'button',
                    iconCls: 'trash',
                    iconMask: true,
                    text: 'trash'
                }
            ] // items
        }); // create()
    } // launch
}); // application()
