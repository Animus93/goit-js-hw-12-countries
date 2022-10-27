import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const modal = (message) => alert({
    text: message,
    type: 'notice',
    delay: 2500,
    mouseReset: true,
    remove: true,
    destroy: true,
    dir1: 'down',
    maxOpen: 5,
    modalishFlash: true,
    positioned: true,

    
});

export default modal;

