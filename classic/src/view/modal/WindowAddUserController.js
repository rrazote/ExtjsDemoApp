Ext.define('DemoApp.view.modal.WindowAddUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.modal-adduser',

    onButtonClickClose: function(me){
        me.up('#WindowAddUser').destroy();
    },

    onButtonClickSave: function(me){
        var win = me.up('#WindowAddUser');
        var form = win.down('form');
        if(form.isValid()){
            var formValues = form.getValues();
            var store = Ext.getStore('StoreUserInfo'); 
            store.add(formValues);
            Ext.toast('User has been added!');            
            win.destroy();
            
        } else {
            Ext.toast('There are invalid inputs.');
        }
        
    }

});
