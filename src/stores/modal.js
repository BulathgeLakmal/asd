import {defineStore} from 'pinia';

export default defineStore('modal' , {
    state : () => ({
        isOpen : false,
        onBlur : '',
        warning1 : false,
        footerWarn : false,
    })
});