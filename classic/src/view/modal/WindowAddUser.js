
Ext.define('DemoApp.view.modal.WindowAddUser',{
    extend: 'Ext.window.Window',
    xtype: 'windowadduser',
    alias: 'widget.windowadduser',
    itemId: 'WindowAddUser',
    requires: [
        'DemoApp.view.modal.WindowAddUserController',
        'DemoApp.view.modal.WindowAddUserModel',
        'Ext.window.Toast'
    ],

    controller: 'modal-adduser',
    viewModel: {
        type: 'modal-adduser'
    },
    modal: true,
    draggable: false,
    resizable: false,
    layout: 'fit',  
    title: 'Add User Information',
    items:[{
        xtype: 'form',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [{
            xtype: 'container',
            padding: '5 5 0 5',
            defaultType: 'textfield',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
                fieldLabel: 'First Name:',
                name: 'first_name',
                allowBlank: false 
            },{
                fieldLabel: 'Last Name:',
                name: 'last_name',
                allowBlank: false,
                padding: '0 10 0 10'
            },{
                xtype: 'datefield',
                fieldLabel: 'Date of Birth:',
                name: 'dob',
                allowBlank: false
            }]
        },{
            xtype: 'container',
            padding: '5 5 0 5',
            defaultType: 'textfield',
            layout: {
                type: 'fit',
                align: 'stretch'
            },
            items:[{
                fieldLabel: 'Description:',
                name: 'description' 
            }]
        },{
            xtype: 'container',
            padding: '5 5 0 5',
            defaultType: 'textfield',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
                fieldLabel: 'SSN:',
                name: 'ssn' 
            },{
                fieldLabel: 'Email:',
                name: 'email',  
                vtype: 'email',
                padding: '0 10 0 10'
            },{  
                fieldLabel: 'Home Phone',
                name: 'home_phone',
                inputMask: '(999) 999-9999'
            }]
        },{
            xtype: 'container',
            padding: '5 5 0 5',
            defaultType: 'textfield',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[ {
                fieldLabel: 'Address:',
                name: 'address', 
                padding: '0 10 0 0',
                flex: 2
            },{ 
                xtype: 'numberfield',
                fieldLabel: 'Zip Code:',
                minValue: 0,
                name: 'zip_code',
                hideTrigger: true
            }]
        },{
            xtype: 'container',
            padding: 5,
            defaultType: 'textfield',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items:[{
                fieldLabel: 'City:',
                name: 'city' 
            },{
                fieldLabel: 'State (US):',
                name: 'state_us', 
                padding: '0 10 0 10'
            },{ 
                fieldLabel: 'Country',
                name: 'country' 
            }]
        },{
            xtype: 'container',
            padding: 5,
            defaultType: 'textfield',
            layout: {
                type: 'hbox',
                align: 'center'
            },
            items:[{
                xtype: 'tbspacer',
                flex: 1
            },{
                xtype: 'button',
                text: 'Save',
                margin: '0 10 0 0',
                iconCls: 'x-fa fa-save',
                width: 90,
                listeners: {
                    click: 'onButtonClickSave'
                }
            },{
                xtype: 'button',
                text: 'Cancel',
                iconCls: 'x-fa fa-times',
                width: 90,
                listeners: {
                    click: 'onButtonClickClose'
                }
            } ]
        }]
    }]
});
