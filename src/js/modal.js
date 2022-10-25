import { alert, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const modal = (message) => alert({
    text: message,
    type: 'info',

});

export default modal;

