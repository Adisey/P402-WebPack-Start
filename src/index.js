import _ from 'lodash';
import moment from 'moment';

moment.locale('ru');
function component() {
    let element = document.createElement('div');

    // Lodash, now imported by this script
    moment.locale('ru');
    element.innerHTML = _.join(['Hello', 'webpack', moment().format('LLLL')], ' ');

    return element;
}

document.body.appendChild(component());