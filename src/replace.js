function isArray(o){
    return Object.prototype.toString.call(o)=='[object Array]';
}

function replaceWith(html = '', {
    string = '',
    type = 'replace',
    regx = ''
} = {}) {

    const replacer = (function () {
        if (type === 'prepend') {
            return `${string}$&`;
        }
        else if (type === 'replace') {
            return `${string}`;
        }
        return `$&${string}`;
    })();

    return html.replace(regx, replacer);
}

module.exports = function replace(html = '', arr = []) {
    let result = html;

    if( !isArray(arr) ){
        arr = [arr];
    }

    for (const option of arr) {
        result = replaceWith(result, option)
    }
    return result;
};

