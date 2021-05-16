Ext.define('DemoApp.view.grid.UserInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.grid-userinfo',

    onActionColumnDeleteClick: function(view,ri,ci,item,e,rec){  
        console.log(ri);      
        Ext.MessageBox.show({
            title: 'Delete user?',
            msg: 'This will <font color="red"><b>PERMANENTLY</b></font> delete user. Proceed?',
            closable: false,
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.MessageBox.YESNO,
            fn: function(btn){
                if( btn == 'yes'){ 
                    console.log('test');
                    var store = Ext.getStore('StoreUserInfo');
                    store.removeAt(ri);
                    Ext.toast('User deleted!');
                }
            }
        })
    }

});
