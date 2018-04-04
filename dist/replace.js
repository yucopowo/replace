'use strict';

function isArray(o) {
    return Object.prototype.toString.call(o) == '[object Array]';
}

function replaceWith() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$string = _ref.string,
        string = _ref$string === undefined ? '' : _ref$string,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'append' : _ref$type,
        _ref$regx = _ref.regx,
        regx = _ref$regx === undefined ? '' : _ref$regx;

    var replacer = function () {
        if (type === 'prepend') {
            return string + '$&';
        } else if (type === 'replace') {
            return '' + string;
        }
        return '$&' + string;
    }();

    return html.replace(regx, replacer);
}

module.exports = function replace() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var arr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    var result = html;

    if (!isArray(arr)) {
        arr = [arr];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var option = _step.value;

            result = replaceWith(result, option);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
};