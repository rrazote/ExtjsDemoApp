/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DemoApp.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'DemoApp.view.grid.UserInfo'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'border',
        align: 'stretch'
    },

    items:[{
        xtype: 'container',
        region: 'west',  
        cls: 'west-container',
        width: 150,
        layout: {
            type: 'vbox',
            align: 'center'
        },
        items:[{
            xtype: 'label',
            text: 'Demo App',
            cls: 'west-title',
            width: 150
        },{
            xtype: 'button',
            text: 'Add New User',  
            margin: '5 0 0 0', 
            iconCls: 'x-fa fa-plus', 
            listeners: {
                click: 'onButtonAddUser'
            }
        }]
    },{
        xtype: 'grid-userinfo',
        region: 'center' 
    }]
});
