const _0x5356c0 = _0x4070;

function _0x4070(_0x1d459b, _0x481bc7) {
    const _0x416fd6 = _0x416f();
    return _0x4070 = function(_0x40707d, _0x43134f) {
        _0x40707d = _0x40707d - 0x7f;
        let _0x6bbca3 = _0x416fd6[_0x40707d];
        return _0x6bbca3;
    }, _0x4070(_0x1d459b, _0x481bc7);
}(function(_0x3e929f, _0x360016) {
    const _0x1541cf = _0x4070,
        _0x44b155 = _0x3e929f();
    while (!![]) {
        try {
            const _0x466e5d = -parseInt(_0x1541cf(0x9e)) / 0x1 + parseInt(_0x1541cf(0xaa)) / 0x2 + -parseInt(_0x1541cf(0x7f)) / 0x3 * (-parseInt(_0x1541cf(0x9b)) / 0x4) + parseInt(_0x1541cf(0x86)) / 0x5 * (parseInt(_0x1541cf(0x8b)) / 0x6) + -parseInt(_0x1541cf(0xa6)) / 0x7 * (-parseInt(_0x1541cf(0x8e)) / 0x8) + parseInt(_0x1541cf(0x84)) / 0x9 * (-parseInt(_0x1541cf(0x90)) / 0xa) + -parseInt(_0x1541cf(0x8f)) / 0xb * (parseInt(_0x1541cf(0xa4)) / 0xc);
            if (_0x466e5d === _0x360016) break;
            else _0x44b155['push'](_0x44b155['shift']());
        } catch (_0x3b067f) {
            _0x44b155['push'](_0x44b155['shift']());
        }
    }
}(_0x416f, 0xdcced));
let xClickz = document[_0x5356c0(0x8a)](_0x5356c0(0xa3)),
    tClickz = document['getElementById'](_0x5356c0(0xa5)),
    refUrlx = document[_0x5356c0(0x8a)](_0x5356c0(0xa2)),
    airdropBtn = document[_0x5356c0(0x8a)]('airdropsubmitbtn');
var xClickedz = ![],
    tClickedz = ![];
window[_0x5356c0(0x97)](_0x5356c0(0xae), function() {
    const _0x57b42f = _0x5356c0;
    xClickedz = localStorage['getItem']('xClicked'), tClickedz = localStorage[_0x57b42f(0x92)](_0x57b42f(0x99)), xClickedz && (xClickz['style'][_0x57b42f(0xa1)] = '#bf900233'), tClickedz && (tClickz[_0x57b42f(0x9c)]['background'] = _0x57b42f(0xac));
});
import {
    initializeApp
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';

function _0x416f() {
    const _0x4d6dd1 = ['addEventListener', 'innerHTML', 'tClicked', '1:846690829674:web:0aae0bab7145cf0f145113', '4jspBcw', 'style', 'catch', '1668470OTXsJF', 'getElementsByClassName', 'onclick', 'background', 'refurl', 'xicon', '12TMeUEf', 'ticon', '4652004rlFXOC', 'Verify\x20you\x20are\x20a\x20human', 'then', 'Task\x20Error!\x20<br>\x20<p\x20style=\x22margin-top:\x2020px;\x20font-size:\x2014px;\x20color:\x20#595959;\x20font-weight:\x20500;\x22>Join\x20the\x20telegram,\x20follow\x20the\x20X\x20and\x20retweet!</p>', '2802694QVWGYL', 'swal2-container', '#bf900233', 'swal2-title', 'load', 'true', 'hcaptcha', '4740222thEjlW', 'click', 'length', 'flex', 'new-users-d7559.appspot.com', '54IMFlHR', 'modal-backdrop', '5wsbtzc', 'new-users-d7559', 'display', 'users', 'getElementById', '3788052GjpOdA', 'https://new-users-d7559-default-rtdb.firebaseio.com', 'setAttribute', '8IpvDcl', '5527082vlRXFv', '2003290XjNXDt', 'value', 'getItem', 'Enter\x20a\x20valid\x20address', 'succesReload()', 'getResponse', 'AIzaSyDahkJxaxks-wJbiYXDoJSmSfpmRrAngQk'];
    _0x416f = function() {
        return _0x4d6dd1;
    };
    return _0x416f();
}
import {
    getDatabase,
    ref,
    set,
    get,
    onValue
} from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';
const firebaseConfig = {
        'apiKey': _0x5356c0(0x96),
        'authDomain': 'new-users-d7559.firebaseapp.com',
        'databaseURL': _0x5356c0(0x8c),
        'projectId': _0x5356c0(0x87),
        'storageBucket': _0x5356c0(0x83),
        'messagingSenderId': '846690829674',
        'appId': _0x5356c0(0x9a)
    },
    app = initializeApp(firebaseConfig),
    database = getDatabase(app),
    userRef = ref(database, _0x5356c0(0x89));

function pushUser(_0x58cc20) {
    const _0x50d241 = _0x5356c0;
    set(ref(database, 'users/' + _0x58cc20), {
        'address': _0x58cc20,
        'point': 0x0
    })[_0x50d241(0xa8)]()[_0x50d241(0x9d)](_0x44f1bc => {
        alert(_0x44f1bc);
    });
}
onValue(userRef, function(_0x15620e) {}), xClickz[_0x5356c0(0x97)]('click', function() {
    const _0x6cef92 = _0x5356c0;
    xClickz[_0x6cef92(0x9c)][_0x6cef92(0xa1)] = _0x6cef92(0xac), xClickedz = !![], localStorage['setItem']('xClicked', 'true');
}), tClickz[_0x5356c0(0x97)](_0x5356c0(0x80), function() {
    const _0x82c04b = _0x5356c0;
    tClickz[_0x82c04b(0x9c)][_0x82c04b(0xa1)] = _0x82c04b(0xac), tClickedz = !![], localStorage['setItem'](_0x82c04b(0x99), _0x82c04b(0xaf));
}), airdropBtn['addEventListener'](_0x5356c0(0x80), function() {
    const _0xed7525 = _0x5356c0;
    var _0x445f3e = window[_0xed7525(0xb0)][_0xed7525(0x95)]();
    if (xClickedz && tClickedz) {
        if (refUrlx[_0xed7525(0x91)] === '') document[_0xed7525(0x8a)]('swal2-title')['innerHTML'] = 'Please\x20enter\x20your\x20SOL\x20address', document[_0xed7525(0x9f)](_0xed7525(0xab))[0x0][_0xed7525(0x9c)]['display'] = _0xed7525(0x82);
        else {
            if (refUrlx[_0xed7525(0x91)][_0xed7525(0x81)] > 0xc) {
                if (_0x445f3e !== '') {
                    pushUser(refUrlx[_0xed7525(0x91)]);
                    const _0x359d64 = document[_0xed7525(0x9f)](_0xed7525(0x85))[0x0];
                    document[_0xed7525(0x8a)](_0xed7525(0xad))[_0xed7525(0x98)] = '<img\x20src=\x22/assets/images/background/checkz.png\x22\x20style=\x22width:\x2025%;\x20height:\x2025%;\x22/>\x20<br>\x20Submission\x20successful';
                    const _0x383de3 = document[_0xed7525(0x8a)]('closeBtn');
                    _0x383de3[_0xed7525(0x8d)](_0xed7525(0xa0), _0xed7525(0x94)), document[_0xed7525(0x9f)](_0xed7525(0xab))[0x0][_0xed7525(0x9c)]['display'] = _0xed7525(0x82);
                } else alert(_0xed7525(0xa7));
            } else document[_0xed7525(0x8a)](_0xed7525(0xad))['innerHTML'] = _0xed7525(0x93), document[_0xed7525(0x9f)](_0xed7525(0xab))[0x0]['style'][_0xed7525(0x88)] = _0xed7525(0x82);
        }
    } else document[_0xed7525(0x8a)](_0xed7525(0xad))[_0xed7525(0x98)] = _0xed7525(0xa9), document[_0xed7525(0x9f)]('swal2-container')[0x0]['style'][_0xed7525(0x88)] = 'flex';
});