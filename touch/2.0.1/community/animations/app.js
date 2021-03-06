Ext.setup({
    onReady: function() {
        var viewport = Ext.Viewport;
        viewport.setLayout('auto');

        //example 1: animation inside show() method call
        viewport.add({
            xtype: 'button',
            text: 'inline animation',
            handler: function() {

                //add a hidden panel with showAnimation and hideAnimation
                var panel = Ext.Viewport.add({
                    xtype: 'panel',
                    width: 300,
                    height: 100,
                    html: 'panel.show(animationCfg);',
                    modal: true,
                    centered: true,
                    hideOnMaskTap: true,
                    hidden: true
                });

                //show the panel
                panel.show({
                    type: 'fadeIn',
                    duration: 1000
                });
            }
        });

        //example 2: showAnimation and hideAnimation config
        viewport.add({
            xtype: 'button',
            text: 'pre-defined animation',
            handler: function() {

                //add a hidden panel with showAnimation and hideAnimation
                var panel = Ext.Viewport.add({
                    xtype: 'panel',
                    width: 300,
                    height: 100,
                    html: 'Use showAnimation and hideAnimation configs',
                    modal: true,
                    centered: true,
                    hideOnMaskTap: true,
                    hidden: true,
                    showAnimation: {
                        type: 'flip'
                    },
                    hideAnimation: {
                        type: 'slideOut',
                        duration: 1000,
                        direction: 'down'
                    }
                });

                //show the panel
                panel.show();
            }
        });

        //example 3: animation within card layout
        viewport.add({
            xtype: 'button',
            text: 'card layout animation',
            handler: function() {

                //add a hidden panel with showAnimation and hideAnimation
                var panel = Ext.Viewport.add({
                    xtype: 'tabpanel',
                    width: 300,
                    height: 300,
                    modal: true,
                    centered: true,
                    hideOnMaskTap: true,
                    layout: {
                        type: 'card',
                        animation: {
                            type: 'pop'
                        }
                    },
                    items: [{
                        title: 'Tab 1',
                        style: 'background: #CCC'
                    },
                    {
                        title: 'Tab 2',
                        style: 'background: #999'
                    },
                    {
                        title: 'Tab 3',
                        style: 'background: #333',

                        //doesn't work, layout animation takes precedence
                        showAnimation: {
                            type: 'slide'
                        }
                    }]
                });
            }
        });
        
        //example 4: Ext.Anim
        viewport.add({
            xtype: 'button',
            text: 'Ext.Anim.run();',
            handler: function() {

                //create a simple component
                var cmp = Ext.Viewport.add({
                    xtype: 'container',
                    style: 'background: #F00;',
                    width: 300,
                    height: 300,
                    centered: true
                });
                
                //one animation
                Ext.Anim.run(cmp.element, 'fade', {
                    out: false,
                    duration: 2000,
                    after: function() {
                        
                        //other animation
                        Ext.Anim.run(cmp.element, 'slide', {
                            out: true,
                            duration: 1000,
                            after: function() {
                                cmp.destroy();
                            }
                        });
                    }
                });
            }
        });        
    }
});
