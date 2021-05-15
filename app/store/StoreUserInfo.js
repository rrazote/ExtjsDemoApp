Ext.define('DemoApp.store.StoreUserInfo', {
    extend: 'Ext.data.Store',

    alias: 'store.storeuserinfo',
    storeId: 'StoreUserInfo',
    model: 'DemoApp.model.ModelUserInfo',

    data: { items: [
        { 
            first_name: 'Reymond', 
            last_name: "Razote", 
            dob: "03/02/1984",
            ssn: '1234566789',
            description: 'I am hard working',
            home_phone: '123-123131',
            email: 'rrazote@yahoo.com',
            address: 'Baguio City',
            zip_code: '2600',
            city: 'Baguio',
            state_us: 'NA',
            country: 'Philippines'
        } 
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
