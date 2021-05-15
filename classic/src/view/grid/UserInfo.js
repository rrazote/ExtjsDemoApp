
Ext.define('DemoApp.view.grid.UserInfo',{
    extend: 'Ext.grid.Panel',
    xtype: 'grid-userinfo',
    itemId: 'GridUserInfo',
    requires: [
        'DemoApp.view.grid.UserInfoController',
        'DemoApp.view.grid.UserInfoModel'
    ],

    controller: 'grid-userinfo',
    viewModel: {
        type: 'grid-userinfo'
    },
    
    flex: 1,
    padding: 10,
    layout: {
        type: 'fit'
    },

    store: 'StoreUserInfo',

    cls: 'user-info-grid',

    columns: [{
        text: 'First Name',
        dataIndex: 'first_name',
        flex: 1
    },{
        text: 'Last Name',
        dataIndex: 'last_name',
        flex: 1
    },{
        text: 'Date of Birth',
        dataIndex: 'dob',
        flex: 1
    },{
        text: 'SSN',
        dataIndex: 'ssn',
        flex: 1
    },{
        text: 'Description',
        dataIndex: 'description',
        flex: 1
    },{
        text: 'Home Phone',
        dataIndex: 'home_phone',
        flex: 1
    },{
        text: 'Email',
        dataIndex: 'email',
        flex: 1
    },{
        text: 'Address',
        dataIndex: 'address',
        flex: 1
    },{
        text: 'Zip Code',
        dataIndex: 'zip_code',
        flex: 1
    },{
        text: 'City',
        dataIndex: 'city',
        flex: 1
    },{
        text: 'State(US)',
        dataIndex: 'state_us',
        flex: 1
    },{
        text: 'Country',
        dataIndex: 'country',
        flex: 1
    }]
});
