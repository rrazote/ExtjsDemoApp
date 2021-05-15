/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('DemoApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
 
    onButtonAddUser: function(me,e,opts){
        // var storeUserInfo = Ext.getStore('StoreUserInfo');
        // console.log(storeUserInfo);
        var window = Ext.create('widget.windowadduser');
        window.show();
    } 
});
