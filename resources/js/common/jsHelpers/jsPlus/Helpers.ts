import moment from 'moment';

export class Helpers {
    static clone(obj: any): any {
        return Object.assign({}, obj);
    }

    static getCurrentTime() {
        return moment().format('YYYY-MM-DD');
    }
}
