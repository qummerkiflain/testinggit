function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function loadCSS(e) {
    var t = window.document.createElement("link"),
        n = window.document.getElementsByTagName("head")[0],
        i = document.getElementsByClassName("critical-css");
    t.rel = "stylesheet", t.href = e, t.media = "only x", t.onload = function() {
        t.media = "all", setTimeout(function() {
            for (var e = i.length - 1; e >= 0; e--) i[e].parentNode.removeChild(i[e])
        }, 1580)
    }, n.append(t)
}

function _extends() {
    return _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }, _extends.apply(this, arguments)
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}

function _extends() {
    return _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }, _extends.apply(this, arguments)
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
}
var _createClass2 = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
if (function(e) {
        e.forEach(function(e) {
            e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function() {
                    var e = Array.prototype.slice.call(arguments),
                        t = document.createDocumentFragment();
                    e.forEach(function(e) {
                        var n = e instanceof Node;
                        t.appendChild(n ? e : document.createTextNode(String(e)))
                    }), this.appendChild(t)
                }
            })
        })
    }([Element.prototype, Document.prototype, DocumentFragment.prototype]), loadCSS("assets/benBond.css?v=201812"), "serviceWorker" in navigator && "undefined" != typeof Cache && Cache.prototype.addAll) {
    var caches_images = function() {
            window.caches.open("precache-v2").then(function(e) {
                return e.addAll(PRECACHE)
            }).then(function() {
                return console.log("pwa content is now available offline")
            })["catch"](function() {
                return console.log("something went wrong")
            })
        },
        PRECACHE = ["./pietschmann-moments", "./travel", "/assets/image/ben-Bond-header-3000.jpg", "/assets/mpviewer/assets/asset.png", "/assets/mpviewer/assets/empty-pixel.png", "/assets/mpviewer/assets/classic-loader.gif", "/assets/benBond.css", "/assets/benBond.js", "/assets/mpviewer.css", "/assets/mpviewer/beach.jpg", "/assets/mpviewer/berkeley.jpg", "/assets/mpviewer/california.jpg", "/assets/mpviewer/fish.jpg", "/assets/mpviewer/fairfax-scoop-ice-cream.jpg", "/assets/mpviewer/melissa-leong.jpg", "/assets/mpviewer/germany.jpg", "/assets/mpviewer/wattwandern.jpg", "/assets/mpviewer/running.jpg", "/assets/mpviewer/napa.jpg", "/assets/mpviewer/mochi.jpg", "/assets/mpviewer/spoke.jpg", "/assets/mpviewer/google-optimized/berkeley.jpg", "/assets/mpviewer/google-optimized/california.jpg", "/assets/mpviewer/google-optimized/fish.jpg", "/assets/mpviewer/hamburg.jpg", "/assets/wp/mpviewer/images/IMG_3258-150x150.jpg", "/assets/wp/mpviewer/images/IMG_3258-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_5295-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5295-2000x1125.jpg", "/assets/wp/mpviewer/images/IMG_3738-150x150.jpg", "/assets/wp/mpviewer/images/IMG_3738-2000x1138.jpg", "/assets/wp/mpviewer/images/IMG_2911-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2911-2000x1125.jpg", "/assets/wp/mpviewer/images/IMG_4405-150x150.jpg", "/assets/wp/mpviewer/images/IMG_4405-1600x1200.jpg", "/assets/wp/mpviewer/images/IMG_3862-150x150.jpg", "/assets/wp/mpviewer/images/IMG_3862-1584x2816.jpg", "/assets/wp/mpviewer/images/IMG_3063_edited-150x150.jpg", "/assets/wp/mpviewer/images/IMG_3063_edited-1124x2055.jpg", "/assets/wp/mpviewer/images/Picture004-150x150.jpg", "/assets/wp/mpviewer/images/Picture004-2000x826.jpg", "/assets/wp/mpviewer/images/Picture278-150x150.jpg", "/assets/wp/mpviewer/images/Picture278-2000x1500.jpg", "/assets/wp/mpviewer/images/Picture-199-150x150.jpg", "/assets/wp/mpviewer/images/Picture-199-2000x1500.jpg", "/assets/wp/mpviewer/images/Picture-194-150x150.jpg", "/assets/wp/mpviewer/images/Picture-194-2000x1500.jpg", "/assets/wp/mpviewer/images/Picture174-150x150.jpg", "/assets/wp/mpviewer/images/Picture174-2000x1085.jpg", "/assets/wp/mpviewer/images/Picture-234-150x150.jpg", "/assets/wp/mpviewer/images/Picture-234-2000x1500.jpg", "/assets/wp/mpviewer/images/Picture274-150x150.jpg", "/assets/wp/mpviewer/images/Picture274-2000x1610.jpg", "/assets/wp/mpviewer/images/Picture-241-150x150.jpg", "/assets/wp/mpviewer/images/Picture-241-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_8580-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8580-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6732-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6732-2000x1593.jpg", "/assets/wp/mpviewer/images/IMG_6801-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6801-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6839-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6839-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_7548-150x150.jpg", "/assets/wp/mpviewer/images/IMG_7548-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_7156-150x150.jpg", "/assets/wp/mpviewer/images/IMG_7156-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_2613-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2613-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_7304-150x150.jpg", "/assets/wp/mpviewer/images/IMG_7304-2000x1358.jpg", "/assets/wp/mpviewer/images/IMG_8324-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8324-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_8760-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8760-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_8312_2-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8312_2-2000x2129.jpg", "/assets/wp/mpviewer/images/IMG_8287-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8287-2000x1643.jpg", "/assets/wp/mpviewer/images/Picture309-150x150.jpg", "/assets/wp/mpviewer/images/Picture309-2000x1574.jpg", "/assets/wp/mpviewer/images/Picture308-150x150.jpg", "/assets/wp/mpviewer/images/Picture308-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_8488-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8488-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_8474-150x150.jpg", "/assets/wp/mpviewer/images/IMG_8474-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_7720-150x150.jpg", "/assets/wp/mpviewer/images/IMG_7720-1540x1939.jpg", "/assets/wp/mpviewer/images/IMG_7662-150x150.jpg", "/assets/wp/mpviewer/images/IMG_7662-2000x1422.jpg", "/assets/wp/mpviewer/images/IMG_2346-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2346-1407x1539.jpg", "/assets/wp/mpviewer/images/IMG_2374-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2374-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2379-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2379-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2381-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2381-2000x1126.jpg", "/assets/wp/mpviewer/images/IMG_2331-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2331-1229x1741.jpg", "/assets/wp/mpviewer/images/IMG_2341-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2341-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2347-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2347-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2332-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2332-1407x2109.jpg", "/assets/wp/mpviewer/images/IMG_2351-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2351-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2263-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2263-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2191-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2191-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2199-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2199-1407x2500.jpg", "/assets/wp/mpviewer/images/IMG_2304-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2304-2000x1126.jpg", "/assets/wp/mpviewer/images/IMG_1911-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1911-2000x1093.jpg", "/assets/wp/mpviewer/images/IMG_1576-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1576-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6177-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6177-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6196-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6196-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6172-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6172-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6214-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6214-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6205-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6205-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6204-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6204-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_6209-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6209-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6229-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6229-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6315-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6315-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6427-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6427-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_6429-150x150.jpg", "/assets/wp/mpviewer/images/IMG_6429-2000x1772.jpg", "/assets/wp/mpviewer/images/IMG_5423-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5423-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5909-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5909-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5900-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5900-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5892-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5892-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5889-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5889-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5890-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5890-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5887-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5887-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5796-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5796-2000x1029.jpg", "/assets/wp/mpviewer/images/IMG_5771-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5771-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5774-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5774-2000x2165.jpg", "/assets/wp/mpviewer/images/IMG_5682-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5682-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5676-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5676-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5671-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5671-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5658-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5658-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5632-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5632-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5630-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5630-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5591-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5591-2000x1905.jpg", "/assets/wp/mpviewer/images/IMG_5588-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5588-2000x2205.jpg", "/assets/wp/mpviewer/images/IMG_5524-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5524-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5516-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5516-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5567-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5567-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5493-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5493-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5515-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5515-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5480-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5480-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5473-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5473-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5500-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5500-1841x1770.jpg", "/assets/wp/mpviewer/images/IMG_5474-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5474-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5467-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5467-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_5456-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5456-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_5403-150x150.jpg", "/assets/wp/mpviewer/images/IMG_5403-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9914-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9914-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9944-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9944-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9909-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9909-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9910-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9910-1875x1912.jpg", "/assets/wp/mpviewer/images/IMG_9869-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9869-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9858-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9858-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9537-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9537-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9928-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9928-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9518-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9518-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9510-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9510-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9482-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9482-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9478-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9478-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9285-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9285-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_9226-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9226-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_9221-150x150.jpg", "/assets/wp/mpviewer/images/IMG_9221-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_0790-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0790-2000x1801.jpg", "/assets/wp/mpviewer/images/IMG_0781-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0781-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0794-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0794-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0580-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0580-2000x2052.jpg", "/assets/wp/mpviewer/images/IMG_0638-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0638-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0640-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0640-1499x2500.jpg", "/assets/wp/mpviewer/images/IMG_0726-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0726-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0705-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0705-2000x1490.jpg", "/assets/wp/mpviewer/images/IMG_0632-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0632-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0619-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0619-2000x2055.jpg", "/assets/wp/mpviewer/images/IMG_0524-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0524-1838x2500.jpg", "/assets/wp/mpviewer/images/IMG_0506-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0506-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0475-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0475-2000x1435.jpg", "/assets/wp/mpviewer/images/IMG_0464-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0464-1933x2500.jpg", "/assets/wp/mpviewer/images/IMG_0303-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0303-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_0289-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0289-1506x2500.jpg", "/assets/wp/mpviewer/images/IMG_0279-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0279-1384x2500.jpg", "/assets/wp/mpviewer/images/IMG_0274-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0274-1809x2500.jpg", "/assets/wp/mpviewer/images/IMG_0271-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0271-1560x2500.jpg", "/assets/wp/mpviewer/images/IMG_0261-1-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0261-1-2000x1772.jpg", "/assets/wp/mpviewer/images/IMG_0260-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0260-1848x2500.jpg", "/assets/wp/mpviewer/images/IMG_0259-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0259-1724x2500.jpg", "/assets/wp/mpviewer/images/IMG_0225-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0225-1661x2500.jpg", "/assets/wp/mpviewer/images/IMG_0230-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0230-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_0139-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0139-1875x2500.jpg", "/assets/wp/mpviewer/images/IMG_0235-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0235-1677x2500.jpg", "/assets/wp/mpviewer/images/IMG_0229-150x150.jpg", "/assets/wp/mpviewer/images/IMG_0229-1660x2500.jpg", "/assets/wp/mpviewer/images/IMG_1226-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1226-2000x1488.jpg", "/assets/wp/mpviewer/images/IMG_1374-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1374-2000x1543.jpg", "/assets/wp/mpviewer/images/IMG_1371-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1371-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_1122-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1122-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_1345-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1345-1776x2112.jpg", "/assets/wp/mpviewer/images/IMG_1185-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1185-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_1164-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1164-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_1186-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1186-2000x2525.jpg", "/assets/wp/mpviewer/images/IMG_2131_edited-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2131_edited-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_1610-150x150.jpg", "/assets/wp/mpviewer/images/IMG_1610-2000x1500.jpg", "/assets/wp/mpviewer/images/IMG_2126-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2126-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_2178-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2178-2000x2667.jpg", "/assets/wp/mpviewer/images/IMG_2168-1-150x150.jpg", "/assets/wp/mpviewer/images/IMG_2168-1-2000x1500.jpg", "/assets/wp/mpviewer/images/DSC_0884-150x150.jpg", "/assets/wp/mpviewer/images/DSC_0884-2000x953.jpg", "/assets/wp/mpviewer/images/DSC_1044-150x150.jpg", "/assets/wp/mpviewer/images/DSC_1044-2000x1034.jpg", "/assets/wp/mpviewer/images/DSC_0946-150x150.jpg", "/assets/wp/mpviewer/images/DSC_0946-2000x1180.jpg", "/assets/wp/mpviewer/images/DSC_0985-150x150.jpg", "/assets/wp/mpviewer/images/DSC_0985-2000x2202.jpg", "/assets/wp/mpviewer/images/DSC_1060-150x150.jpg", "/assets/wp/mpviewer/images/DSC_1060-1537x2310.jpg", "/assets/wp/mpviewer/images/lion-150x150.jpg", "/assets/wp/mpviewer/images/shark-150x150.jpg", "/assets/wp/mpviewer/images/DSC_1075-150x150.jpg", "/assets/wp/mpviewer/images/DSC_1075-1537x2310.jpg", "/assets/wp/mpviewer/lion.mp4", "/assets/wp/mpviewer/shark.mp4"];
    navigator.serviceWorker.register("/sw.js").then(function(e) {
        setTimeout(function() {
            caches_images()
        }, 1100)
    });
    var deferredPrompt, pwa_banner = document.getElementById("progressive-banner");
    if (null !== pwa_banner) {
        var iosPrompt = function() {
            return ["iPhone", "iPad", "iPod"].includes(navigator.platform)
        };
        window.addEventListener("beforeinstallprompt", function(e) {
            e.preventDefault(), deferredPrompt = e, pwa_banner.style.display = "block"
        }), iosPrompt() && !navigator.standalone && (pwa_banner.style.display = "block"), pwa_banner.addEventListener("click", function(e) {
            pwa_banner.style.display = "none", iosPrompt() ? $("#iosbanner").modal() : (deferredPrompt.prompt(), deferredPrompt.userChoice.then(function(e) {
                "accepted" === e.outcome, deferredPrompt = null
            }))
        })
    }
}! function(e, t) {
    "use strict";
    "object" === ("undefined" == typeof module ? "undefined" : _typeof2(module)) && "object" === _typeof2(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = me.type(e);
        return "function" !== n && !me.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function a(e, t, n) {
        return me.isFunction(t) ? me.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n
        }) : Ce.test(t) ? me.filter(t, e, n) : (t = me.filter(t, e), me.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function s(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return me.each(e.match(Ae) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function l(e) {
        return e
    }

    function u(e) {
        throw e
    }

    function c(e, t, n, i) {
        var r;
        try {
            e && me.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && me.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function p() {
        ne.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), me.ready()
    }

    function d() {
        this.expando = me.expando + d.uid++
    }

    function f(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Fe.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(He, "-$&").toLowerCase(), n = e.getAttribute(i), "string" == typeof n) {
                try {
                    n = f(n)
                } catch (r) {}
                Le.set(e, t, n)
            } else n = void 0;
        return n
    }

    function m(e, t, n, i) {
        var r, a = 1,
            s = 20,
            o = i ? function() {
                return i.cur()
            } : function() {
                return me.css(e, t, "")
            },
            l = o(),
            u = n && n[3] || (me.cssNumber[t] ? "" : "px"),
            c = (me.cssNumber[t] || "px" !== u && +l) && Re.exec(me.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do a = a || ".5", c /= a, me.style(e, t, c + u); while (a !== (a = o() / l) && 1 !== a && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument,
            i = e.nodeName,
            r = Ve[i];
        return r ? r : (t = n.body.appendChild(n.createElement(i)), r = me.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Ve[i] = r, r)
    }

    function v(e, t) {
        for (var n, i, r = [], a = 0, s = e.length; a < s; a++) i = e[a], i.style && (n = i.style.display, t ? ("none" === n && (r[a] = Pe.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && Be(i) && (r[a] = g(i))) : "none" !== n && (r[a] = "none", Pe.set(i, "display", n)));
        for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
        return e
    }

    function w(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? me.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Pe.set(e[n], "globalEval", !t || Pe.get(t[n], "globalEval"))
    }

    function x(e, t, n, i, r) {
        for (var a, s, o, l, u, c, p = t.createDocumentFragment(), d = [], f = 0, h = e.length; f < h; f++)
            if (a = e[f], a || 0 === a)
                if ("object" === me.type(a)) me.merge(d, a.nodeType ? [a] : a);
                else if (Ke.test(a)) {
            for (s = s || p.appendChild(t.createElement("div")), o = (Ue.exec(a) || ["", ""])[1].toLowerCase(), l = Xe[o] || Xe._default, s.innerHTML = l[1] + me.htmlPrefilter(a) + l[2], c = l[0]; c--;) s = s.lastChild;
            me.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
        } else d.push(t.createTextNode(a));
        for (p.textContent = "", f = 0; a = d[f++];)
            if (i && me.inArray(a, i) > -1) r && r.push(a);
            else if (u = me.contains(a.ownerDocument, a), s = w(p.appendChild(a), "script"), u && y(s), n)
            for (c = 0; a = s[c++];) Qe.test(a.type || "") && n.push(a);
        return p
    }

    function b() {
        return !0
    }

    function _() {
        return !1
    }

    function M() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function j(e, t, n, i, r, a) {
        var s, o;
        if ("object" === ("undefined" == typeof t ? "undefined" : _typeof2(t))) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (o in t) j(e, o, n, i, t[o], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = _;
        else if (!r) return e;
        return 1 === a && (s = r, r = function(e) {
            return me().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = me.guid++)), e.each(function() {
            me.event.add(this, t, r, i, n)
        })
    }

    function C(e, t) {
        return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e
    }

    function I(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function T(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function S(e, t) {
        var n, i, r, a, s, o, l, u;
        if (1 === t.nodeType) {
            if (Pe.hasData(e) && (a = Pe.access(e), s = Pe.set(t, a), u = a.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; n < i; n++) me.event.add(t, r, u[r][n])
            }
            Le.hasData(e) && (o = Le.access(e), l = me.extend({}, o), Le.set(t, l))
        }
    }

    function k(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function E(e, t, i, r) {
        t = ae.apply([], t);
        var a, s, o, l, u, c, p = 0,
            d = e.length,
            f = d - 1,
            h = t[0],
            m = me.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !fe.checkClone && it.test(h)) return e.each(function(n) {
            var a = e.eq(n);
            m && (t[0] = h.call(this, n, a.html())), E(a, t, i, r)
        });
        if (d && (a = x(t, e[0].ownerDocument, !1, e, r), s = a.firstChild, 1 === a.childNodes.length && (a = s), s || r)) {
            for (o = me.map(w(a, "script"), I), l = o.length; p < d; p++) u = a, p !== f && (u = me.clone(u, !0, !0), l && me.merge(o, w(u, "script"))), i.call(e[p], u, p);
            if (l)
                for (c = o[o.length - 1].ownerDocument, me.map(o, T), p = 0; p < l; p++) u = o[p], Qe.test(u.type || "") && !Pe.access(u, "globalEval") && me.contains(c, u) && (u.src ? me._evalUrl && me._evalUrl(u.src) : n(u.textContent.replace(at, ""), c))
        }
        return e
    }

    function A(e, t, n) {
        for (var i, r = t ? me.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || me.cleanData(w(i)), i.parentNode && (n && me.contains(i.ownerDocument, i) && y(w(i, "script")), i.parentNode.removeChild(i));
        return e
    }

    function G(e, t, n) {
        var i, r, a, s, o = e.style;
        return n = n || lt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || me.contains(e.ownerDocument, e) || (s = me.style(e, t)), !fe.pixelMarginRight() && ot.test(s) && st.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
    }

    function D(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function N(e) {
        if (e in ht) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
            if (e = ft[n] + t, e in ht) return e
    }

    function O(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = N(e) || e), t
    }

    function P(e, t, n) {
        var i = Re.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function L(e, t, n, i, r) {
        var a, s = 0;
        for (a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2) "margin" === n && (s += me.css(e, n + We[a], !0, r)), i ? ("content" === n && (s -= me.css(e, "padding" + We[a], !0, r)), "margin" !== n && (s -= me.css(e, "border" + We[a] + "Width", !0, r))) : (s += me.css(e, "padding" + We[a], !0, r), "padding" !== n && (s += me.css(e, "border" + We[a] + "Width", !0, r)));
        return s
    }

    function F(e, t, n) {
        var i, r = lt(e),
            a = G(e, t, r),
            s = "border-box" === me.css(e, "boxSizing", !1, r);
        return ot.test(a) ? a : (i = s && (fe.boxSizingReliable() || a === e.style[t]), "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]), a = parseFloat(a) || 0, a + L(e, t, n || (s ? "border" : "content"), i, r) + "px")
    }

    function H(e, t, n, i, r) {
        return new H.prototype.init(e, t, n, i, r)
    }

    function q() {
        gt && (ne.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(q) : e.setTimeout(q, me.fx.interval), me.fx.tick())
    }

    function R() {
        return e.setTimeout(function() {
            mt = void 0
        }), mt = me.now()
    }

    function W(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) n = We[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function B(e, t, n) {
        for (var i, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function $(e, t, n) {
        var i, r, a, s, o, l, u, c, p = "width" in t || "height" in t,
            d = this,
            f = {},
            h = e.style,
            m = e.nodeType && Be(e),
            g = Pe.get(e, "fxshow");
        n.queue || (s = me._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
            s.unqueued || o()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--, me.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (i in t)
            if (r = t[i], vt.test(r)) {
                if (delete t[i], a = a || "toggle" === r, r === (m ? "hide" : "show")) {
                    if ("show" !== r || !g || void 0 === g[i]) continue;
                    m = !0
                }
                f[i] = g && g[i] || me.style(e, i)
            } if (l = !me.isEmptyObject(t), l || !me.isEmptyObject(f)) {
            p && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], u = g && g.display, null == u && (u = Pe.get(e, "display")), c = me.css(e, "display"), "none" === c && (u ? c = u : (v([e], !0), u = e.style.display || u, c = me.css(e, "display"), v([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === me.css(e, "float") && (l || (d.done(function() {
                h.display = u
            }), null == u && (c = h.display, u = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (g ? "hidden" in g && (m = g.hidden) : g = Pe.access(e, "fxshow", {
                display: u
            }), a && (g.hidden = !m), m && v([e], !0), d.done(function() {
                m || v([e]), Pe.remove(e, "fxshow");
                for (i in f) me.style(e, i, f[i])
            })), l = B(m ? g[i] : 0, i, d), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0))
        }
    }

    function V(e, t) {
        var n, i, r, a, s;
        for (n in e)
            if (i = me.camelCase(n), r = t[i], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), s = me.cssHooks[i], s && "expand" in s) {
                a = s.expand(a), delete e[i];
                for (n in a) n in e || (e[n] = a[n], t[n] = r)
            } else t[i] = r
    }

    function z(e, t, n) {
        var i, r, a = 0,
            s = z.prefilters.length,
            o = me.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = mt || R(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, a = 1 - i, s = 0, l = u.tweens.length; s < l; s++) u.tweens[s].run(a);
                return o.notifyWith(e, [u, a, n]), a < 1 && l ? n : (l || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
            },
            u = o.promise({
                elem: e,
                props: me.extend({}, t),
                opts: me.extend(!0, {
                    specialEasing: {},
                    easing: me.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || R(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = me.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (V(c, u.opts.specialEasing); a < s; a++)
            if (i = z.prefilters[a].call(u, e, c, u.opts)) return me.isFunction(i.stop) && (me._queueHooks(u.elem, u.opts.queue).stop = me.proxy(i.stop, i)), i;
        return me.map(c, B, u), me.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), me.fx.timer(me.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function U(e) {
        var t = e.match(Ae) || [];
        return t.join(" ")
    }

    function Q(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function X(e, t, n, i) {
        var r;
        if (Array.isArray(t)) me.each(t, function(t, r) {
            n || St.test(e) ? i(e, r) : X(e + "[" + ("object" === ("undefined" == typeof r ? "undefined" : _typeof2(r)) && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== me.type(t)) i(e, t);
        else
            for (r in t) X(e + "[" + r + "]", t[r], n, i)
    }

    function K(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                a = t.toLowerCase().match(Ae) || [];
            if (me.isFunction(n))
                for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function Y(e, t, n, i) {
        function r(o) {
            var l;
            return a[o] = !0, me.each(e[o] || [], function(e, o) {
                var u = o(t, n, i);
                return "string" != typeof u || s || a[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var a = {},
            s = e === qt;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function Z(e, t) {
        var n, i, r = me.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && me.extend(!0, e, i), e
    }

    function J(e, t, n) {
        for (var i, r, a, s, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in o)
                if (o[r] && o[r].test(i)) {
                    l.unshift(r);
                    break
                } if (l[0] in n) a = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                s || (s = r)
            }
            a = a || s
        }
        if (a) return a !== l[0] && l.unshift(a), n[a]
    }

    function ee(e, t, n, i) {
        var r, a, s, o, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (a = c.shift(); a;)
            if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
                if ("*" === a) a = l;
                else if ("*" !== l && l !== a) {
            if (s = u[l + " " + a] || u["* " + a], !s)
                for (r in u)
                    if (o = r.split(" "), o[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (a = o[0], c.unshift(o[1]));
                        break
                    } if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (p) {
                    return {
                        state: "parsererror",
                        error: s ? p : "No conversion from " + l + " to " + a
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var te = [],
        ne = e.document,
        ie = Object.getPrototypeOf,
        re = te.slice,
        ae = te.concat,
        se = te.push,
        oe = te.indexOf,
        le = {},
        ue = le.toString,
        ce = le.hasOwnProperty,
        pe = ce.toString,
        de = pe.call(Object),
        fe = {},
        he = "3.2.1",
        me = function Xt(e, t) {
            return new Xt.fn.init(e, t)
        },
        ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        we = /-([a-z])/g,
        ye = function(e, t) {
            return t.toUpperCase()
        };
    me.fn = me.prototype = {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: te.sort,
        splice: te.splice
    }, me.extend = me.fn.extend = function() {
        var e, t, n, i, r, a, s = arguments[0] || {},
            o = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" === ("undefined" == typeof s ? "undefined" : _typeof2(s)) || me.isFunction(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
            if (null != (e = arguments[o]))
                for (t in e) n = s[t], i = e[t], s !== i && (u && i && (me.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && me.isPlainObject(n) ? n : {}, s[t] = me.extend(u, a, i)) : void 0 !== i && (s[t] = i));
        return s
    }, me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== ue.call(e)) && (!(t = ie(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && pe.call(n) === de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : _typeof2(e)) || "function" == typeof e ? le[ue.call(e)] || "object" : "undefined" == typeof e ? "undefined" : _typeof2(e)
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(we, ye)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ge, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? me.merge(n, "string" == typeof e ? [e] : e) : se.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : oe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i, r = [], a = 0, s = e.length, o = !n; a < s; a++) i = !t(e[a], a), i !== o && r.push(e[a]);
            return r
        },
        map: function(e, t, n) {
            var r, a, s = 0,
                o = [];
            if (i(e))
                for (r = e.length; s < r; s++) a = t(e[s], s, n), null != a && o.push(a);
            else
                for (s in e) a = t(e[s], s, n), null != a && o.push(a);
            return ae.apply([], o)
        },
        guid: 1,
        proxy: function Kt(e, t) {
            var n, i, Kt;
            if ("string" == typeof t && (n = e[t], t = e, e = n), me.isFunction(e)) return i = re.call(arguments, 2), Kt = function() {
                return e.apply(t || this, i.concat(re.call(arguments)))
            }, Kt.guid = e.guid = e.guid || me.guid++, Kt
        },
        now: Date.now,
        support: fe
    }), "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]), me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var xe = function(e) {
        function t(e, t, n, i) {
            var r, a, s, o, l, u, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!i && ((t ? t.ownerDocument || t : R) !== D && G(t), t = t || D, O)) {
                if (11 !== h && (l = ve.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (d && (s = d.getElementById(r)) && H(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(r)), n
                    } if (_.qsa && !z[e + " "] && (!P || !P.test(e))) {
                    if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(be, _e) : t.setAttribute("id", o = q), u = I(e), a = u.length; a--;) u[a] = "#" + o + " " + f(u[a]);
                        c = u.join(","), d = we.test(e) && p(t.parentNode) || t
                    }
                    if (c) try {
                        return Z.apply(n, d.querySelectorAll(c)), n
                    } catch (m) {} finally {
                        o === q && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(oe, "$1"), t, n, i)
        }

        function n() {
            function e(n, i) {
                return t.push(n + " ") > M.cacheLength && delete e[t.shift()], e[n + " "] = i
            }
            var t = [];
            return e
        }

        function i(e) {
            return e[q] = !0, e
        }

        function r(e) {
            var t = D.createElement("fieldset");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function a(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) M.attrHandle[n[i]] = t
        }

        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function o(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && je(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function p(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function f(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function h(e, t, n) {
            var i = t.dir,
                r = t.next,
                a = r || i,
                s = n && "parentNode" === a,
                o = B++;
            return t.first ? function(t, n, r) {
                for (; t = t[i];)
                    if (1 === t.nodeType || s) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var u, c, p, d = [W, o];
                if (l) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || s)
                            if (p = t[q] || (t[q] = {}), c = p[t.uniqueID] || (p[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                            else {
                                if ((u = c[a]) && u[0] === W && u[1] === o) return d[2] = u[2];
                                if (c[a] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function m(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function g(e, n, i) {
            for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
            return i
        }

        function v(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), u && t.push(o)));
            return s
        }

        function w(e, t, n, r, a, s) {
            return r && !r[q] && (r = w(r)), a && !a[q] && (a = w(a, s)), i(function(i, s, o, l) {
                var u, c, p, d = [],
                    f = [],
                    h = s.length,
                    m = i || g(t || "*", o.nodeType ? [o] : o, []),
                    w = !e || !i && t ? m : v(m, d, e, o, l),
                    y = n ? a || (i ? e : h || r) ? [] : s : w;
                if (n && n(w, y, o, l), r)
                    for (u = v(y, f), r(u, [], o, l), c = u.length; c--;)(p = u[c]) && (y[f[c]] = !(w[f[c]] = p));
                if (i) {
                    if (a || e) {
                        if (a) {
                            for (u = [], c = y.length; c--;)(p = y[c]) && u.push(w[c] = p);
                            a(null, y = [], u, l)
                        }
                        for (c = y.length; c--;)(p = y[c]) && (u = a ? ee(i, p) : d[c]) > -1 && (i[u] = !(s[u] = p))
                    }
                } else y = v(y === s ? y.splice(h, y.length) : y), a ? a(null, s, y, l) : Z.apply(s, y)
            })
        }

        function y(e) {
            for (var t, n, i, r = e.length, a = M.relative[e[0].type], s = a || M.relative[" "], o = a ? 1 : 0, l = h(function(e) {
                    return e === t
                }, s, !0), u = h(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, i) {
                    var r = !a && (i || n !== k) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }]; o < r; o++)
                if (n = M.relative[e[o].type]) c = [h(m(c), n)];
                else {
                    if (n = M.filter[e[o].type].apply(null, e[o].matches), n[q]) {
                        for (i = ++o; i < r && !M.relative[e[i].type]; i++);
                        return w(o > 1 && m(c), o > 1 && f(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, o < i && y(e.slice(o, i)), i < r && y(e = e.slice(i)), i < r && f(e))
                    }
                    c.push(n)
                } return m(c)
        }

        function x(e, n) {
            var r = n.length > 0,
                a = e.length > 0,
                s = function(i, s, o, l, u) {
                    var c, p, d, f = 0,
                        h = "0",
                        m = i && [],
                        g = [],
                        w = k,
                        y = i || a && M.find.TAG("*", u),
                        x = W += null == w ? 1 : Math.random() || .1,
                        b = y.length;
                    for (u && (k = s === D || s || u); h !== b && null != (c = y[h]); h++) {
                        if (a && c) {
                            for (p = 0, s || c.ownerDocument === D || (G(c), o = !O); d = e[p++];)
                                if (d(c, s || D, o)) {
                                    l.push(c);
                                    break
                                } u && (W = x)
                        }
                        r && ((c = !d && c) && f--, i && m.push(c))
                    }
                    if (f += h, r && h !== f) {
                        for (p = 0; d = n[p++];) d(m, g, s, o);
                        if (i) {
                            if (f > 0)
                                for (; h--;) m[h] || g[h] || (g[h] = K.call(l));
                            g = v(g)
                        }
                        Z.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (W = x, k = w), m
                };
            return r ? i(s) : s
        }
        var b, _, M, j, C, I, T, S, k, E, A, G, D, N, O, P, L, F, H, q = "sizzle" + 1 * new Date,
            R = e.document,
            W = 0,
            B = 0,
            $ = n(),
            V = n(),
            z = n(),
            U = function(e, t) {
                return e === t && (A = !0), 0
            },
            Q = {}.hasOwnProperty,
            X = [],
            K = X.pop,
            Y = X.push,
            Z = X.push,
            J = X.slice,
            ee = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            re = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            oe = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            pe = new RegExp(ae),
            de = new RegExp("^" + ie + "$"),
            fe = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + re),
                PSEUDO: new RegExp("^" + ae),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            we = /[+~]/,
            ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            xe = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            _e = function(e, t) {
                return t ? "\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Me = function() {
                G()
            },
            je = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Z.apply(X = J.call(R.childNodes), R.childNodes), X[R.childNodes.length].nodeType
        } catch (Ce) {
            Z = {
                apply: X.length ? function(e, t) {
                    Y.apply(e, J.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, G = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : R;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, N = D.documentElement, O = !C(D), R !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Me, !1) : n.attachEvent && n.attachEvent("onunload", Me)), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ge.test(D.getElementsByClassName), _.getById = r(function(e) {
                return N.appendChild(e).id = q, !D.getElementsByName || !D.getElementsByName(q).length
            }), _.getById ? (M.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, M.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (M.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, M.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n, i, r, a = t.getElementById(e);
                    if (a) {
                        if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
                        for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                            if (n = a.getAttributeNode("id"), n && n.value === e) return [a]
                    }
                    return []
                }
            }), M.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return a
            }, M.find.CLASS = _.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e)
            }, L = [], P = [], (_.qsa = ge.test(D.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + q + "-]").length || P.push("~="), e.querySelectorAll(":checked").length || P.push(":checked"), e.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && P.push(":enabled", ":disabled"), N.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), P.push(",.*:")
            })), (_.matchesSelector = ge.test(F = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = F.call(e, "*"), F.call(e, "[s!='']:x"), L.push("!=", ae)
            }), P = P.length && new RegExp(P.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(N.compareDocumentPosition), H = t || ge.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === R && H(R, e) ? -1 : t === D || t.ownerDocument === R && H(R, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0,
                    r = e.parentNode,
                    a = t.parentNode,
                    o = [e],
                    l = [t];
                if (!r || !a) return e === D ? -1 : t === D ? 1 : r ? -1 : a ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (r === a) return s(e, t);
                for (n = e; n = n.parentNode;) o.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; o[i] === l[i];) i++;
                return i ? s(o[i], l[i]) : o[i] === R ? -1 : l[i] === R ? 1 : 0
            }, D) : D
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && G(e), n = n.replace(ce, "='$1']"), _.matchesSelector && O && !z[n + " "] && (!L || !L.test(n)) && (!P || !P.test(n))) try {
                var i = F.call(e, n);
                if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {}
            return t(n, D, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && G(e), H(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && G(e);
            var n = M.attrHandle[t.toLowerCase()],
                i = n && Q.call(M.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== i ? i : _.attributes || !O ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, _e)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                i = 0,
                r = 0;
            if (A = !_.detectDuplicates, E = !_.sortStable && e.slice(0), e.sort(U), A) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return E = null, e
        }, j = t.getText = function(e) {
            var t, n = "",
                i = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += j(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[i++];) n += j(t);
            return n
        }, M = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = I(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var a = t.attr(r, e);
                        return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var a = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        o = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var u, c, p, d, f, h, m = a !== s ? "nextSibling" : "previousSibling",
                            g = t.parentNode,
                            v = o && t.nodeName.toLowerCase(),
                            w = !l && !o,
                            y = !1;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (d = t; d = d[m];)
                                        if (o ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild], s && w) {
                                for (d = g, p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === W && u[1], y = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (y = f = 0) || h.pop();)
                                    if (1 === d.nodeType && ++y && d === t) {
                                        c[e] = [W, f, y];
                                        break
                                    }
                            } else if (w && (d = t, p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === W && u[1], y = f), y === !1)
                                for (;
                                    (d = ++f && d && d[m] || (y = f = 0) || h.pop()) && ((o ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++y || (w && (p = d[q] || (d[q] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [W, y]), d !== t)););
                            return y -= r, y === i || y % i === 0 && y / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, a = M.pseudos[e] || M.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[q] ? a(n) : a.length > 1 ? (r = [e, e, "", n], M.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = a(e, n), s = r.length; s--;) i = ee(e, r[s]), e[i] = !(t[i] = r[s])
                    }) : function(e) {
                        return a(e, 0, r)
                    }) : a
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [],
                        n = [],
                        r = T(e.replace(oe, "$1"));
                    return r[q] ? i(function(e, t, n, i) {
                        for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
                    }) : function(e, i, a) {
                        return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(ye, xe),
                        function(t) {
                            return (t.textContent || t.innerText || j(t)).indexOf(e) > -1
                        }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !M.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, M.pseudos.nth = M.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) M.pseudos[b] = o(b);
        for (b in {
                submit: !0,
                reset: !0
            }) M.pseudos[b] = l(b);
        return d.prototype = M.filters = M.pseudos, M.setFilters = new d, I = t.tokenize = function(e, n) {
            var i, r, a, s, o, l, u, c = V[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (o = e, l = [], u = M.preFilter; o;) {
                i && !(r = le.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = ue.exec(o)) && (i = r.shift(), a.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), o = o.slice(i.length));
                for (s in M.filter) !(r = fe[s].exec(o)) || u[s] && !(r = u[s](r)) || (i = r.shift(), a.push({
                    value: i,
                    type: s,
                    matches: r
                }), o = o.slice(i.length));
                if (!i) break
            }
            return n ? o.length : o ? t.error(e) : V(e, l).slice(0)
        }, T = t.compile = function(e, t) {
            var n, i = [],
                r = [],
                a = z[e + " "];
            if (!a) {
                for (t || (t = I(e)), n = t.length; n--;) a = y(t[n]), a[q] ? i.push(a) : r.push(a);
                a = z(e, x(r, i)), a.selector = e
            }
            return a
        }, S = t.select = function(e, t, n, i) {
            var r, a, s, o, l, u = "function" == typeof e && e,
                c = !i && I(e = u.selector || e);
            if (n = n || [], 1 === c.length) {
                if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && O && M.relative[a[1].type]) {
                    if (t = (M.find.ID(s.matches[0].replace(ye, xe), t) || [])[0], !t) return n;
                    u && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !M.relative[o = s.type]);)
                    if ((l = M.find[o]) && (i = l(s.matches[0].replace(ye, xe), we.test(a[0].type) && p(t.parentNode) || t))) {
                        if (a.splice(r, 1), e = i.length && f(a), !e) return Z.apply(n, i), n;
                        break
                    }
            }
            return (u || T(e, c))(i, t, !O, n, !t || we.test(e) && p(t.parentNode) || t), n
        }, _.sortStable = q.split("").sort(U).join("") === q, _.detectDuplicates = !!A, G(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), t
    }(e);
    me.find = xe, me.expr = xe.selectors, me.expr[":"] = me.expr.pseudos, me.uniqueSort = me.unique = xe.uniqueSort, me.text = xe.getText, me.isXMLDoc = xe.isXML, me.contains = xe.contains, me.escapeSelector = xe.escape;
    var be = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && me(e).is(n)) break;
                    i.push(e)
                } return i
        },
        _e = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Me = me.expr.match.needsContext,
        je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        Ce = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? me.find.matchesSelector(i, e) ? [i] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, me.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(me(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (me.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n);
            return i > 1 ? me.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(a(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(a(this, e || [], !0))
        },
        is: function(e) {
            return !!a(this, "string" == typeof e && Me.test(e) ? me(e) : e || [], !1).length
        }
    });
    var Ie, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Se = me.fn.init = function(e, t, n) {
            var i, r;
            if (!e) return this;
            if (n = n || Ie, "string" == typeof e) {
                if (i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof me ? t[0] : t, me.merge(this, me.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), je.test(i[1]) && me.isPlainObject(t))
                        for (i in t) me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                return r = ne.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : me.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(me) : me.makeArray(e, this)
        };
    Se.prototype = me.fn, Ie = me(ne);
    var ke = /^(?:parents|prev(?:Until|All))/,
        Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (me.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && me(e);
            if (!Me.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && me.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        } return this.pushStack(a.length > 1 ? me.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(me(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), me.each({
        parent: function Yt(e) {
            var Yt = e.parentNode;
            return Yt && 11 !== Yt.nodeType ? Yt : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return s(e, "nextSibling")
        },
        prev: function(e) {
            return s(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _e(e.firstChild)
        },
        contents: function(e) {
            return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), me.merge([], e.childNodes))
        }
    }, function(e, t) {
        me.fn[e] = function(n, i) {
            var r = me.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = me.filter(i, r)), this.length > 1 && (Ee[e] || me.uniqueSort(r), ke.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ae = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : me.extend({}, e);
        var t, n, i, r, a = [],
            s = [],
            l = -1,
            u = function() {
                for (r = r || e.once, i = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
                e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
            },
            c = {
                add: function() {
                    return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
                        me.each(t, function(t, n) {
                            me.isFunction(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== me.type(n) && i(n)
                        })
                    }(arguments), n && !t && u()), this
                },
                remove: function() {
                    return me.each(arguments, function(e, t) {
                        for (var n;
                            (n = me.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? me.inArray(e, a) > -1 : a.length > 0
                },
                empty: function() {
                    return a && (a = []), this
                },
                disable: function() {
                    return r = s = [], a = n = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return r = s = [], n || t || (a = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, me.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2],
                    ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                r = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return me.Deferred(function(t) {
                            me.each(n, function(n, i) {
                                var r = me.isFunction(e[i[4]]) && e[i[4]];
                                a[i[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, i, r) {
                        function a(t, n, i, r) {
                            return function() {
                                var o = this,
                                    c = arguments,
                                    p = function() {
                                        var e, p;
                                        if (!(t < s)) {
                                            if (e = i.apply(o, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            p = e && ("object" === ("undefined" == typeof e ? "undefined" : _typeof2(e)) || "function" == typeof e) && e.then, me.isFunction(p) ? r ? p.call(e, a(s, n, l, r), a(s, n, u, r)) : (s++, p.call(e, a(s, n, l, r), a(s, n, u, r), a(s, n, l, n.notifyWith))) : (i !== l && (o = void 0, c = [e]), (r || n.resolveWith)(o, c))
                                        }
                                    },
                                    d = r ? p : function() {
                                        try {
                                            p()
                                        } catch (e) {
                                            me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= s && (i !== u && (o = void 0, c = [e]), n.rejectWith(o, c))
                                        }
                                    };
                                t ? d() : (me.Deferred.getStackHook && (d.stackTrace = me.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var s = 0;
                        return me.Deferred(function(e) {
                            n[0][3].add(a(0, e, me.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(a(0, e, me.isFunction(t) ? t : l)), n[2][3].add(a(0, e, me.isFunction(i) ? i : u))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? me.extend(e, r) : r
                    }
                },
                a = {};
            return me.each(n, function(e, t) {
                var s = t[2],
                    o = t[5];
                r[t[1]] = s.add, o && s.add(function() {
                    i = o
                }, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = s.fireWith
            }), r.promise(a), t && t.call(a, a), a
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                i = Array(n),
                r = re.call(arguments),
                a = me.Deferred(),
                s = function(e) {
                    return function(n) {
                        i[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || a.resolveWith(i, r)
                    }
                };
            if (t <= 1 && (c(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || me.isFunction(r[n] && r[n].then))) return a.then();
            for (; n--;) c(r[n], s(n), a.reject);
            return a.promise()
        }
    });
    var Ge = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ge.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, me.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var De = me.Deferred();
    me.fn.ready = function(e) {
        return De.then(e)["catch"](function(e) {
            me.readyException(e)
        }), this
    }, me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (e === !0 ? --me.readyWait : me.isReady) || (me.isReady = !0, e !== !0 && --me.readyWait > 0 || De.resolveWith(ne, [me]))
        }
    }), me.ready.then = De.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(me.ready) : (ne.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
    var Ne = function Zt(e, t, n, i, r, a, s) {
            var o = 0,
                l = e.length,
                u = null == n;
            if ("object" === me.type(n)) {
                r = !0;
                for (o in n) Zt(e, t, o, n[o], !0, a, s)
            } else if (void 0 !== i && (r = !0, me.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                    return u.call(me(e), n)
                })), t))
                for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
        },
        Oe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[me.camelCase(t)] = n;
            else
                for (i in t) r[me.camelCase(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t), t = t in i ? [t] : t.match(Ae) || []), n = t.length;
                    for (; n--;) delete i[t[n]]
                }(void 0 === t || me.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t)
        }
    };
    var Pe = new d,
        Le = new d,
        Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        He = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return Le.hasData(e) || Pe.hasData(e)
        },
        data: function(e, t, n) {
            return Le.access(e, t, n)
        },
        removeData: function(e, t) {
            Le.remove(e, t)
        },
        _data: function(e, t, n) {
            return Pe.access(e, t, n)
        },
        _removeData: function(e, t) {
            Pe.remove(e, t)
        }
    }), me.fn.extend({
        data: function Jt(e, t) {
            var n, i, Jt, r = this[0],
                a = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (Jt = Le.get(r), 1 === r.nodeType && !Pe.get(r, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = me.camelCase(i.slice(5)), h(r, i, Jt[i])));
                    Pe.set(r, "hasDataAttrs", !0)
                }
                return Jt
            }
            return "object" === ("undefined" == typeof e ? "undefined" : _typeof2(e)) ? this.each(function() {
                Le.set(this, e)
            }) : Ne(this, function(t) {
                var n;
                if (r && void 0 === t) {
                    if (n = Le.get(r, e), void 0 !== n) return n;
                    if (n = h(r, e), void 0 !== n) return n
                } else this.each(function() {
                    Le.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Le.remove(this, e)
            })
        }
    }), me.extend({
        queue: function en(e, t, n) {
            var en;
            if (e) return t = (t || "fx") + "queue", en = Pe.get(e, t), n && (!en || Array.isArray(n) ? en = Pe.access(e, t, me.makeArray(n)) : en.push(n)), en || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = me.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = me._queueHooks(e, t),
                s = function() {
                    me.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, s, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Pe.get(e, n) || Pe.access(e, n, {
                empty: me.Callbacks("once memory").add(function() {
                    Pe.remove(e, [t + "queue", n])
                })
            })
        }
    }), me.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = me.queue(this, e, t);
                me._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = me.Deferred(),
                a = this,
                s = this.length,
                o = function() {
                    --i || r.resolveWith(a, [a])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) n = Pe.get(a[s], e + "queueHooks"), n && n.empty && (i++, n.empty.add(o));
            return o(), r.promise(t)
        }
    });
    var qe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + qe + ")([a-z%]*)$", "i"),
        We = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
        },
        $e = function(e, t, n, i) {
            var r, a, s = {};
            for (a in t) s[a] = e.style[a], e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t) e.style[a] = s[a];
            return r
        },
        Ve = {};
    me.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? me(this).show() : me(this).hide()
            })
        }
    });
    var ze = /^(?:checkbox|radio)$/i,
        Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Qe = /^$|\/(?:java|ecma)script/i,
        Xe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
    var Ke = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = ne.documentElement,
        Ze = /^key/,
        Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, s, o, l, u, c, p, d, f, h, m, g = Pe.get(e);
            if (g)
                for (n.handler && (a = n, n = a.handler, r = a.selector), r && me.find.matchesSelector(Ye, r), n.guid || (n.guid = me.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return "undefined" != typeof me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ae) || [""], u = t.length; u--;) o = et.exec(t[u]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (p = me.event.special[f] || {}, f = (r ? p.delegateType : p.bindType) || f, p = me.event.special[f] || {}, c = me.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && me.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, a), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, h, s) !== !1 || e.addEventListener && e.addEventListener(f, s)), p.add && (p.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), me.event.global[f] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, u, c, p, d, f, h, m, g = Pe.hasData(e) && Pe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(Ae) || [""], u = t.length; u--;)
                    if (o = et.exec(t[u]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f) {
                        for (p = me.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = l[f] || [], o = o[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = d.length; a--;) c = d[a], !r && m !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(a, 1), c.selector && d.delegateCount--, p.remove && p.remove.call(e, c));
                        s && !d.length && (p.teardown && p.teardown.call(e, h, g.handle) !== !1 || me.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) me.event.remove(e, f + t[u], n, i, !0);
                me.isEmptyObject(l) && Pe.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, a, s, o = me.event.fix(e),
                l = new Array(arguments.length),
                u = (Pe.get(this, "events") || {})[o.type] || [],
                c = me.event.special[o.type] || {};
            for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (o.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, o) !== !1) {
                for (s = me.event.handlers.call(this, o, u), t = 0;
                    (r = s[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = r.elem, n = 0;
                        (a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, i = ((me.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l), void 0 !== i && (o.result = i) === !1 && (o.preventDefault(), o.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, o), o.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s, o = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || u.disabled !== !0)) {
                        for (a = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? me(r, this).index(u) > -1 : me.find(r, this, null, [u]).length), s[r] && a.push(i);
                        a.length && o.push({
                            elem: u,
                            handlers: a
                        })
                    } return u = this, l < t.length && o.push({
                elem: u,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[me.expando] ? e : new me.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== M() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === M() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return r(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, me.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : _, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && me.extend(this, t), this.timeStamp = e && e.timeStamp || me.now(), void(this[me.expando] = !0)) : new me.Event(e, t)
    }, me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: _,
        isPropagationStopped: _,
        isImmediatePropagationStopped: _,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, me.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ze.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, me.event.addProp), me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                return r && (r === i || me.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), me.fn.extend({
        on: function(e, t, n, i) {
            return j(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return j(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, me(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" === ("undefined" == typeof e ? "undefined" : _typeof2(e))) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = _), this.each(function() {
                me.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        it = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function tn(e, t, n) {
            var i, r, a, s, tn = e.cloneNode(!0),
                o = me.contains(e.ownerDocument, e);
            if (!(fe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (s = w(tn), a = w(e), i = 0, r = a.length; i < r; i++) k(a[i], s[i]);
            if (t)
                if (n)
                    for (a = a || w(e), s = s || w(tn), i = 0, r = a.length; i < r; i++) S(a[i], s[i]);
                else S(e, tn);
            return s = w(tn, "script"), s.length > 0 && y(s, !o && w(e, "script")), tn
        },
        cleanData: function(e) {
            for (var t, n, i, r = me.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (Oe(n)) {
                    if (t = n[Pe.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
                        n[Pe.expando] = void 0
                    }
                    n[Le.expando] && (n[Le.expando] = void 0)
                }
        }
    }), me.fn.extend({
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return Ne(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return E(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = C(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return E(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (me.cleanData(w(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ne(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Xe[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (me.cleanData(w(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return E(this, arguments, function(t) {
                var n = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(w(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var n, i = [], r = me(e), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), me(r[s])[t](n), se.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var st = /^margin/,
        ot = new RegExp("^(" + qe + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (o) {
                o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Ye.appendChild(s);
                var t = e.getComputedStyle(o);
                n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", r = "4px" === t.marginRight, Ye.removeChild(s), o = null
            }
        }
        var n, i, r, a, s = ne.createElement("div"),
            o = ne.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", fe.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), me.extend(fe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), i
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), a
            }
        }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/,
        ct = /^--/,
        pt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        dt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ft = ["Webkit", "Moz", "ms"],
        ht = ne.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = G(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function nn(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = me.camelCase(t),
                    l = ct.test(t),
                    nn = e.style;
                return l || (t = O(o)), s = me.cssHooks[t] || me.cssHooks[o], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : nn[t] : (a = "undefined" == typeof n ? "undefined" : _typeof2(n), "string" === a && (r = Re.exec(n)) && r[1] && (n = m(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (me.cssNumber[o] ? "" : "px")), fe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (nn[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? nn.setProperty(t, n) : nn[t] = n)), void 0)
            }
        },
        css: function(e, t, n, i) {
            var r, a, s, o = me.camelCase(t),
                l = ct.test(t);
            return l || (t = O(o)), s = me.cssHooks[t] || me.cssHooks[o], s && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = G(e, t, i)), "normal" === r && t in dt && (r = dt[t]), "" === n || n ? (a = parseFloat(r), n === !0 || isFinite(a) ? a || 0 : r) : r
        }
    }), me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) return !ut.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, i) : $e(e, pt, function() {
                    return F(e, t, i)
                })
            },
            set: function(e, n, i) {
                var r, a = i && lt(e),
                    s = i && L(e, t, i, "border-box" === me.css(e, "boxSizing", !1, a), a);
                return s && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = me.css(e, t)), P(e, n, s)
            }
        }
    }), me.cssHooks.marginLeft = D(fe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(G(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + We[i] + t] = a[i] || a[i - 2] || a[0];
                return r
            }
        }, st.test(e) || (me.cssHooks[e + t].set = P)
    }), me.fn.extend({
        css: function(e, t) {
            return Ne(this, function(e, t, n) {
                var i, r, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = lt(e), r = t.length; s < r; s++) a[t[s]] = me.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? me.style(e, t, n) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), me.Tween = H, H.prototype = {
        constructor: H,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || me.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (me.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, me.fx = H.prototype.init, me.fx.step = {};
    var mt, gt, vt = /^(?:toggle|show|hide)$/,
        wt = /queueHooks$/;
    me.Animation = me.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return m(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                me.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ae);
                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [$],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), me.speed = function(e, t, n) {
            var i = e && "object" === ("undefined" == typeof e ? "undefined" : _typeof2(e)) ? me.extend({}, e) : {
                complete: n || !n && t || me.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !me.isFunction(t) && t
            };
            return me.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in me.fx.speeds ? i.duration = me.fx.speeds[i.duration] : i.duration = me.fx.speeds._default), null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                me.isFunction(i.old) && i.old.call(this), i.queue && me.dequeue(this, i.queue)
            }, i
        }, me.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Be).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = me.isEmptyObject(e),
                    a = me.speed(t, n, i),
                    s = function() {
                        var t = z(this, me.extend({}, e), a);
                        (r || Pe.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        a = me.timers,
                        s = Pe.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && wt.test(r) && i(s[r]);
                    for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
                    !t && n || me.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = Pe.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        a = me.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, me.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), me.each(["toggle", "show", "hide"], function(e, t) {
            var n = me.fn[t];
            me.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, r)
            }
        }), me.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            me.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), me.timers = [], me.fx.tick = function() {
            var e, t = 0,
                n = me.timers;
            for (mt = me.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || me.fx.stop(), mt = void 0
        }, me.fx.timer = function(e) {
            me.timers.push(e), me.fx.start()
        }, me.fx.interval = 13, me.fx.start = function() {
            gt || (gt = !0, q())
        }, me.fx.stop = function() {
            gt = null
        }, me.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, me.fn.delay = function(t, n) {
            return t = me.fx ? me.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", fe.checkOn = "" !== e.value, fe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", fe.radioValue = "t" === e.value
        }();
    var yt, xt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return Ne(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }), me.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? me.prop(e, t, n) : (1 === a && me.isXMLDoc(e) || (r = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void me.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = me.find.attr(e, t), null == i ? void 0 : i))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!fe.radioValue && "radio" === t && r(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(Ae);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return t === !1 ? me.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = xt[t] || me.find.attr;
        xt[t] = function(e, t, i) {
            var r, a, s = t.toLowerCase();
            return i || (a = xt[s], xt[s] = r, r = null != n(e, t, i) ? s : null, xt[s] = a), r
        }
    });
    var bt = /^(?:input|select|textarea|button)$/i,
        _t = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Ne(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e]
            })
        }
    }), me.extend({
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && me.isXMLDoc(e) || (t = me.propFix[t] || t, r = me.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), fe.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }), me.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, s, o, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).addClass(e.call(this, t, Q(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (s = 0; a = t[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        o = U(i), r !== o && n.setAttribute("class", o)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, s, o, l = 0;
            if (me.isFunction(e)) return this.each(function(t) {
                me(this).removeClass(e.call(this, t, Q(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ae) || []; n = this[l++];)
                    if (r = Q(n), i = 1 === n.nodeType && " " + U(r) + " ") {
                        for (s = 0; a = t[s++];)
                            for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
                        o = U(i), r !== o && n.setAttribute("class", o)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = "undefined" == typeof e ? "undefined" : _typeof2(e);
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(n) {
                me(this).toggleClass(e.call(this, n, Q(this), t), t)
            }) : this.each(function() {
                var t, i, r, a;
                if ("string" === n)
                    for (i = 0, r = me(this), a = e.match(Ae) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Q(this), t && Pe.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Pe.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + U(Q(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var Mt = /\r/g;
    me.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0]; {
                if (arguments.length) return i = me.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? e.call(this, n, me(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = me.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Mt, "") : null == n ? "" : n)
            }
        }
    }), me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : U(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, i, a = e.options,
                        s = e.selectedIndex,
                        o = "select-one" === e.type,
                        l = o ? null : [],
                        u = o ? s + 1 : a.length;
                    for (i = s < 0 ? u : o ? s : 0; i < u; i++)
                        if (n = a[i], (n.selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
                            if (t = me(n).val(), o) return t;
                            l.push(t)
                        } return l
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = me.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = me.inArray(me.valHooks.option.get(i), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = me.inArray(me(e).val(), t) > -1
            }
        }, fe.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var jt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, n, i, r) {
            var a, s, o, l, u, c, p, d = [i || ne],
                f = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = o = i = i || ne, 3 !== i.nodeType && 8 !== i.nodeType && !jt.test(f + me.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[me.expando] ? t : new me.Event(f, "object" === ("undefined" == typeof t ? "undefined" : _typeof2(t)) && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : me.makeArray(n, [t]), p = me.event.special[f] || {}, r || !p.trigger || p.trigger.apply(i, n) !== !1)) {
                if (!r && !p.noBubble && !me.isWindow(i)) {
                    for (l = p.delegateType || f, jt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) d.push(s), o = s;
                    o === (i.ownerDocument || ne) && d.push(o.defaultView || o.parentWindow || e)
                }
                for (a = 0;
                    (s = d[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : p.bindType || f, c = (Pe.get(s, "events") || {})[t.type] && Pe.get(s, "handle"), c && c.apply(s, n), c = u && s[u], c && c.apply && Oe(s) && (t.result = c.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = f, r || t.isDefaultPrevented() || p._default && p._default.apply(d.pop(), n) !== !1 || !Oe(i) || u && me.isFunction(i[f]) && !me.isWindow(i) && (o = i[u], o && (i[u] = null), me.event.triggered = f, i[f](), me.event.triggered = void 0, o && (i[u] = o)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = me.extend(new me.Event, n, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(i, null, t)
        }
    }), me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return me.event.trigger(e, t, n, !0)
        }
    }), me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), fe.focusin = "onfocusin" in e, fe.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = Pe.access(i, t);
                r || i.addEventListener(e, n, !0), Pe.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = Pe.access(i, t) - 1;
                r ? Pe.access(i, t, r) : (i.removeEventListener(e, n, !0), Pe.remove(i, t))
            }
        }
    });
    var Ct = e.location,
        It = me.now(),
        Tt = /\?/;
    me.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                var n = me.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e)) me.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) X(n, e[n], t, r);
        return i.join("&")
    }, me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && At.test(this.nodeName) && !Et.test(e) && (this.checked || !ze.test(e))
            }).map(function(e, t) {
                var n = me(this).val();
                return null == n ? null : Array.isArray(n) ? me.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Gt = /%20/g,
        Dt = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lt = /^(?:GET|HEAD)$/,
        Ft = /^\/\//,
        Ht = {},
        qt = {},
        Rt = "*/".concat("*"),
        Wt = ne.createElement("a");
    Wt.href = Ct.href, me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Z(Z(e, me.ajaxSettings), t) : Z(me.ajaxSettings, e)
        },
        ajaxPrefilter: K(Ht),
        ajaxTransport: K(qt),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var u, d, f, x, b, _ = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, s = o || "", M.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (x = J(h, M, i)), x = ee(h, x, M, u), u ? (h.ifModified && (b = M.getResponseHeader("Last-Modified"), b && (me.lastModified[a] = b), b = M.getResponseHeader("etag"), b && (me.etag[a] = b)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = x.state, d = x.data, f = x.error, u = !f)) : (f = _, !t && _ || (_ = "error", t < 0 && (t = 0))), M.status = t, M.statusText = (n || _) + "", u ? v.resolveWith(m, [d, _, M]) : v.rejectWith(m, [M, _, f]), M.statusCode(y), y = void 0, p && g.trigger(u ? "ajaxSuccess" : "ajaxError", [M, h, u ? d : f]), w.fireWith(m, [M, _]), p && (g.trigger("ajaxComplete", [M, h]), --me.active || me.event.trigger("ajaxStop")))
            }
            "object" === ("undefined" == typeof t ? "undefined" : _typeof2(t)) && (n = t, t = void 0), n = n || {};
            var r, a, s, o, l, u, c, p, d, f, h = me.ajaxSetup({}, n),
                m = h.context || h,
                g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
                v = me.Deferred(),
                w = me.Callbacks("once memory"),
                y = h.statusCode || {},
                x = {},
                b = {},
                _ = "canceled",
                M = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!o)
                                for (o = {}; t = Ot.exec(s);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, x[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) M.always(e[M.status]);
                            else
                                for (t in e) y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return r && r.abort(t), i(0, t), this
                    }
                };
            if (v.promise(M), h.url = ((t || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ae) || [""], null == h.crossDomain) {
                u = ne.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host
                } catch (j) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = me.param(h.data, h.traditional)), Y(Ht, h, n, M), c) return M;
            p = me.event && h.global, p && 0 === me.active++ && me.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Lt.test(h.type), a = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Gt, "+")) : (f = h.url.slice(a.length), h.data && (a += (Tt.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (a = a.replace(Nt, "$1"), f = (Tt.test(a) ? "&" : "?") + "_=" + It++ + f), h.url = a + f), h.ifModified && (me.lastModified[a] && M.setRequestHeader("If-Modified-Since", me.lastModified[a]), me.etag[a] && M.setRequestHeader("If-None-Match", me.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && M.setRequestHeader("Content-Type", h.contentType), M.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) M.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(m, M, h) === !1 || c)) return M.abort();
            if (_ = "abort", w.add(h.complete), M.done(h.success), M.fail(h.error), r = Y(qt, h, n, M)) {
                if (M.readyState = 1, p && g.trigger("ajaxSend", [M, h]), c) return M;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    M.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(x, i)
                } catch (j) {
                    if (c) throw j;
                    i(-1, j)
                }
            } else i(-1, "No Transport");
            return M
        },
        getJSON: function(e, t, n) {
            return me.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }), me.each(["get", "post"], function(e, t) {
        me[t] = function(e, n, i, r) {
            return me.isFunction(n) && (r = r || i, i = n, n = void 0), me.ajax(me.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, me.isPlainObject(e) && e))
        }
    }), me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])), t = me(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(n) {
                me(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes)
            }), this
        }
    }), me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e)
    }, me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = me.ajaxSettings.xhr();
    fe.cors = !!$t && "withCredentials" in $t, fe.ajax = $t = !!$t, me.ajaxTransport(function(t) {
        var n, i;
        if (fe.cors || $t && !t.crossDomain) return {
            send: function(r, a) {
                var s, o = t.xhr();
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) o[s] = t.xhrFields[s];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) o.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = n(), i = o.onerror = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function() {
                    4 === o.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e), e
            }
        }
    }), me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Vt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Vt.pop() || me.expando + "_" + It++;
            return this[e] = !0, e
        }
    }), me.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, a, s, o = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(zt, "$1" + r) : t.jsonp !== !1 && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || me.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", a = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === a ? me(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Vt.push(r)), s && me.isFunction(a) && a(s[0]), s = a = void 0
        }), "script"
    }), fe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), me.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var i, r, a;
        return t || (fe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = ne.location.href, t.head.appendChild(i)) : t = ne), r = je.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, a), a && a.length && me(a).remove(), me.merge([], r.childNodes))
    }, me.fn.load = function(e, t, n) {
        var i, r, a, s = this,
            o = e.indexOf(" ");
        return o > -1 && (i = U(e.slice(o)), e = e.slice(0, o)), me.isFunction(t) ? (n = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : _typeof2(t)) && (r = "POST"), s.length > 0 && me.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    }, me.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o, l, u, c = me.css(e, "position"),
                p = me(e),
                d = {};
            "static" === c && (e.style.position = "relative"), o = p.offset(), a = me.css(e, "top"), l = me.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1, u ? (i = p.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), me.isFunction(t) && (t = t.call(e, n, me.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : p.css(d)
        }
    }, me.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                me.offset.setOffset(this, e, t)
            });
            var t, n, i, r, a = this[0];
            if (a) return a.getClientRects().length ? (i = a.getBoundingClientRect(), t = a.ownerDocument, n = t.documentElement, r = t.defaultView, {
                top: i.top + r.pageYOffset - n.clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === me.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
                    top: i.top + me.css(e[0], "borderTopWidth", !0),
                    left: i.left + me.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - i.top - me.css(n, "marginTop", !0),
                    left: t.left - i.left - me.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position");) e = e.offsetParent;
                return e || Ye
            })
        }
    }), me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        me.fn[e] = function(i) {
            return Ne(this, function(e, i, r) {
                var a;
                return me.isWindow(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r ? a ? a[t] : e[i] : void(a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = D(fe.pixelPosition, function(e, n) {
            if (n) return n = G(e, t), ot.test(n) ? me(e).position()[t] + "px" : n
        })
    }), me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            me.fn[i] = function(r, a) {
                var s = arguments.length && (n || "boolean" != typeof r),
                    o = n || (r === !0 || a === !0 ? "margin" : "border");
                return Ne(this, function(t, n, r) {
                    var a;
                    return me.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? me.css(t, n, o) : me.style(t, n, r, o)
                }, t, s ? r : void 0, s)
            }
        })
    }), me.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0)
    }, me.isArray = Array.isArray, me.parseJSON = JSON.parse, me.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var Ut = e.jQuery,
        Qt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Qt), t && e.jQuery === me && (e.jQuery = Ut), me
    }, t || (e.jQuery = e.$ = me), me
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t)
    }) : "object" === ("undefined" == typeof module ? "undefined" : _typeof2(module)) && "object" === _typeof2(module.exports) ? exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function t(e) {
        var t = 7.5625,
            n = 2.75;
        return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
    }
    e.easing.jswing = e.easing.swing;
    var n = Math.pow,
        i = Math.sqrt,
        r = Math.sin,
        a = Math.cos,
        s = Math.PI,
        o = 1.70158,
        l = 1.525 * o,
        u = o + 1,
        c = 2 * s / 3,
        p = 2 * s / 4.5;
    e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t) {
            return e.easing[e.easing.def](t)
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return 1 - (1 - e) * (1 - e)
        },
        easeInOutQuad: function(e) {
            return e < .5 ? 2 * e * e : 1 - n(-2 * e + 2, 2) / 2
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 - n(1 - e, 3)
        },
        easeInOutCubic: function(e) {
            return e < .5 ? 4 * e * e * e : 1 - n(-2 * e + 2, 3) / 2
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return 1 - n(1 - e, 4)
        },
        easeInOutQuart: function(e) {
            return e < .5 ? 8 * e * e * e * e : 1 - n(-2 * e + 2, 4) / 2
        },
        easeInQuint: function(e) {
            return e * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 - n(1 - e, 5)
        },
        easeInOutQuint: function(e) {
            return e < .5 ? 16 * e * e * e * e * e : 1 - n(-2 * e + 2, 5) / 2
        },
        easeInSine: function(e) {
            return 1 - a(e * s / 2)
        },
        easeOutSine: function(e) {
            return r(e * s / 2)
        },
        easeInOutSine: function(e) {
            return -(a(s * e) - 1) / 2
        },
        easeInExpo: function(e) {
            return 0 === e ? 0 : n(2, 10 * e - 10)
        },
        easeOutExpo: function(e) {
            return 1 === e ? 1 : 1 - n(2, -10 * e)
        },
        easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? n(2, 20 * e - 10) / 2 : (2 - n(2, -20 * e + 10)) / 2
        },
        easeInCirc: function(e) {
            return 1 - i(1 - n(e, 2))
        },
        easeOutCirc: function(e) {
            return i(1 - n(e - 1, 2))
        },
        easeInOutCirc: function(e) {
            return e < .5 ? (1 - i(1 - n(2 * e, 2))) / 2 : (i(1 - n(-2 * e + 2, 2)) + 1) / 2
        },
        easeInElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : -n(2, 10 * e - 10) * r((10 * e - 10.75) * c)
        },
        easeOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : n(2, -10 * e) * r((10 * e - .75) * c) + 1
        },
        easeInOutElastic: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -(n(2, 20 * e - 10) * r((20 * e - 11.125) * p)) / 2 : n(2, -20 * e + 10) * r((20 * e - 11.125) * p) / 2 + 1
        },
        easeInBack: function(e) {
            return u * e * e * e - o * e * e
        },
        easeOutBack: function(e) {
            return 1 + u * n(e - 1, 3) + o * n(e - 1, 2)
        },
        easeInOutBack: function(e) {
            return e < .5 ? n(2 * e, 2) * (2 * (l + 1) * e - l) / 2 : (n(2 * e - 2, 2) * ((l + 1) * (2 * e - 2) + l) + 2) / 2
        },
        easeInBounce: function(e) {
            return 1 - t(1 - e)
        },
        easeOutBounce: t,
        easeInOutBounce: function(e) {
            return e < .5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2
        }
    })
});
var Util = function(e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function n() {
            return {
                bindType: o.end,
                delegateType: o.end,
                handle: function(t) {
                    if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }
        }

        function i() {
            return ("undefined" == typeof window || !window.QUnit) && {
                end: "transitionend"
            }
        }

        function r(t) {
            var n = this,
                i = !1;
            return e(this).one(u.TRANSITION_END, function() {
                i = !0
            }), setTimeout(function() {
                i || u.triggerTransitionEnd(n)
            }, t), this
        }

        function a() {
            o = i(), e.fn.emulateTransitionEnd = r, u.supportsTransitionEnd() && (e.event.special[u.TRANSITION_END] = n())
        }

        function s(t) {
            return t = "function" == typeof e.escapeSelector ? e.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
        }
        var o = !1,
            l = 1e6,
            u = {
                TRANSITION_END: "bsTransitionEnd",
                getUID: function(e) {
                    do e += ~~(Math.random() * l); while (document.getElementById(e));
                    return e
                },
                getSelectorFromElement: function(t) {
                    var n = t.getAttribute("data-target");
                    n && "#" !== n || (n = t.getAttribute("href") || ""), "#" === n.charAt(0) && (n = s(n));
                    try {
                        var i = e(document).find(n);
                        return i.length > 0 ? n : null
                    } catch (r) {
                        return null
                    }
                },
                reflow: function(e) {
                    return e.offsetHeight
                },
                triggerTransitionEnd: function(t) {
                    e(t).trigger(o.end)
                },
                supportsTransitionEnd: function() {
                    return Boolean(o)
                },
                isElement: function(e) {
                    return (e[0] || e).nodeType
                },
                typeCheckConfig: function(e, n, i) {
                    for (var r in i)
                        if (Object.prototype.hasOwnProperty.call(i, r)) {
                            var a = i[r],
                                s = n[r],
                                o = s && u.isElement(s) ? "element" : t(s);
                            if (!new RegExp(a).test(o)) throw new Error(e.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + o + '" ') + ('but expected type "' + a + '".'))
                        }
                }
            };
        return a(), u
    }($),
    Modal = function(e) {
        var t = "modal",
            n = "4.0.0",
            i = "bs.modal",
            r = "." + i,
            a = ".data-api",
            s = e.fn[t],
            o = 300,
            l = 150,
            u = 27,
            c = {
                backdrop: !0,
                keyboard: !0,
                focus: !0,
                show: !0
            },
            p = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
                show: "boolean"
            },
            d = {
                HIDE: "hide" + r,
                HIDDEN: "hidden" + r,
                SHOW: "show" + r,
                SHOWN: "shown" + r,
                FOCUSIN: "focusin" + r,
                RESIZE: "resize" + r,
                CLICK_DISMISS: "click.dismiss" + r,
                KEYDOWN_DISMISS: "keydown.dismiss" + r,
                MOUSEUP_DISMISS: "mouseup.dismiss" + r,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + r,
                CLICK_DATA_API: "click" + r + a
            },
            f = {
                SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                BACKDROP: "modal-backdrop",
                OPEN: "modal-open",
                FADE: "fade",
                SHOW: "show"
            },
            h = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            },
            m = function() {
                function a(t, n) {
                    this._config = this._getConfig(n), this._element = t, this._dialog = e(t).find(h.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }
                var s = a.prototype;
                return s.toggle = function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, s.show = function(t) {
                    var n = this;
                    if (!this._isTransitioning && !this._isShown) {
                        Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) && (this._isTransitioning = !0);
                        var i = e.Event(d.SHOW, {
                            relatedTarget: t
                        });
                        e(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(f.OPEN), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(d.CLICK_DISMISS, h.DATA_DISMISS, function(e) {
                            return n.hide(e)
                        }), e(this._dialog).on(d.MOUSEDOWN_DISMISS, function() {
                            e(n._element).one(d.MOUSEUP_DISMISS, function(t) {
                                e(t.target).is(n._element) && (n._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function() {
                            return n._showElement(t)
                        }))
                    }
                }, s.hide = function(t) {
                    var n = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var i = e.Event(d.HIDE);
                        if (e(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE);
                            r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(d.FOCUSIN), e(this._element).removeClass(f.SHOW), e(this._element).off(d.CLICK_DISMISS), e(this._dialog).off(d.MOUSEDOWN_DISMISS), r ? e(this._element).one(Util.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o) : this._hideModal()
                        }
                    }
                }, s.dispose = function() {
                    e.removeData(this._element, i), e(window, document, this._element, this._backdrop).off(r), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, s.handleUpdate = function() {
                    this._adjustDialog()
                }, s._getConfig = function(e) {
                    return e = _extends({}, c, e), Util.typeCheckConfig(t, e, p), e
                }, s._showElement = function(t) {
                    var n = this,
                        i = Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && Util.reflow(this._element), e(this._element).addClass(f.SHOW), this._config.focus && this._enforceFocus();
                    var r = e.Event(d.SHOWN, {
                            relatedTarget: t
                        }),
                        a = function() {
                            n._config.focus && n._element.focus(), n._isTransitioning = !1, e(n._element).trigger(r)
                        };
                    i ? e(this._dialog).one(Util.TRANSITION_END, a).emulateTransitionEnd(o) : a()
                }, s._enforceFocus = function() {
                    var t = this;
                    e(document).off(d.FOCUSIN).on(d.FOCUSIN, function(n) {
                        document !== n.target && t._element !== n.target && 0 === e(t._element).has(n.target).length && t._element.focus()
                    })
                }, s._setEscapeEvent = function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(d.KEYDOWN_DISMISS, function(e) {
                        e.which === u && (e.preventDefault(), t.hide())
                    }) : this._isShown || e(this._element).off(d.KEYDOWN_DISMISS)
                }, s._setResizeEvent = function() {
                    var t = this;
                    this._isShown ? e(window).on(d.RESIZE, function(e) {
                        return t.handleUpdate(e)
                    }) : e(window).off(d.RESIZE)
                }, s._hideModal = function() {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
                        e(document.body).removeClass(f.OPEN), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(d.HIDDEN)
                    })
                }, s._removeBackdrop = function() {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, s._showBackdrop = function(t) {
                    var n = this,
                        i = e(this._element).hasClass(f.FADE) ? f.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var r = Util.supportsTransitionEnd() && i;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = f.BACKDROP, i && e(this._backdrop).addClass(i), e(this._backdrop).appendTo(document.body), e(this._element).on(d.CLICK_DISMISS, function(e) {
                                return n._ignoreBackdropClick ? void(n._ignoreBackdropClick = !1) : void(e.target === e.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()))
                            }), r && Util.reflow(this._backdrop), e(this._backdrop).addClass(f.SHOW), !t) return;
                        if (!r) return void t();
                        e(this._backdrop).one(Util.TRANSITION_END, t).emulateTransitionEnd(l)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(f.SHOW);
                        var a = function() {
                            n._removeBackdrop(), t && t()
                        };
                        Util.supportsTransitionEnd() && e(this._element).hasClass(f.FADE) ? e(this._backdrop).one(Util.TRANSITION_END, a).emulateTransitionEnd(l) : a()
                    } else t && t()
                }, s._adjustDialog = function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, s._resetAdjustments = function() {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, s._checkScrollbar = function() {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, s._setScrollbar = function() {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        e(h.FIXED_CONTENT).each(function(n, i) {
                            var r = e(i)[0].style.paddingRight,
                                a = e(i).css("padding-right");
                            e(i).data("padding-right", r).css("padding-right", parseFloat(a) + t._scrollbarWidth + "px")
                        }), e(h.STICKY_CONTENT).each(function(n, i) {
                            var r = e(i)[0].style.marginRight,
                                a = e(i).css("margin-right");
                            e(i).data("margin-right", r).css("margin-right", parseFloat(a) - t._scrollbarWidth + "px")
                        }), e(h.NAVBAR_TOGGLER).each(function(n, i) {
                            var r = e(i)[0].style.marginRight,
                                a = e(i).css("margin-right");
                            e(i).data("margin-right", r).css("margin-right", parseFloat(a) + t._scrollbarWidth + "px")
                        });
                        var n = document.body.style.paddingRight,
                            i = e("body").css("padding-right");
                        e("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                    }
                }, s._resetScrollbar = function() {
                    e(h.FIXED_CONTENT).each(function(t, n) {
                        var i = e(n).data("padding-right");
                        "undefined" != typeof i && e(n).css("padding-right", i).removeData("padding-right")
                    }), e(h.STICKY_CONTENT + ", " + h.NAVBAR_TOGGLER).each(function(t, n) {
                        var i = e(n).data("margin-right");
                        "undefined" != typeof i && e(n).css("margin-right", i).removeData("margin-right")
                    });
                    var t = e("body").data("padding-right");
                    "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
                }, s._getScrollbarWidth = function() {
                    var e = document.createElement("div");
                    e.className = f.SCROLLBAR_MEASURER, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, a._jQueryInterface = function(t, n) {
                    return this.each(function() {
                        var r = e(this).data(i),
                            s = _extends({}, a.Default, e(this).data(), "object" === ("undefined" == typeof t ? "undefined" : _typeof2(t)) && t);
                        if (r || (r = new a(this, s), e(this).data(i, r)), "string" == typeof t) {
                            if ("undefined" == typeof r[t]) throw new TypeError('No method named "' + t + '"');
                            r[t](n)
                        } else s.show && r.show(n)
                    })
                }, _createClass(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return c
                    }
                }]), a
            }();
        return e(document).on(d.CLICK_DATA_API, h.DATA_TOGGLE, function(t) {
            var n, r = this,
                a = Util.getSelectorFromElement(this);
            a && (n = e(a)[0]);
            var s = e(n).data(i) ? "toggle" : _extends({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var o = e(n).one(d.SHOW, function(t) {
                t.isDefaultPrevented() || o.one(d.HIDDEN, function() {
                    e(r).is(":visible") && r.focus()
                })
            });
            m._jQueryInterface.call(e(n), s, this)
        }), e.fn[t] = m._jQueryInterface, e.fn[t].Constructor = m, e.fn[t].noConflict = function() {
            return e.fn[t] = s, m._jQueryInterface
        }, m
    }($),
    ScrollSpy = function(e) {
        var t = "scrollspy",
            n = "4.0.0",
            i = "bs.scrollspy",
            r = "." + i,
            a = ".data-api",
            s = e.fn[t],
            o = {
                offset: 10,
                method: "auto",
                target: ""
            },
            l = {
                offset: "number",
                method: "string",
                target: "(string|element)"
            },
            u = {
                ACTIVATE: "activate" + r,
                SCROLL: "scroll" + r,
                LOAD_DATA_API: "load" + r + a
            },
            c = {
                DROPDOWN_ITEM: "dropdown-item",
                DROPDOWN_MENU: "dropdown-menu",
                ACTIVE: "active"
            },
            p = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            },
            d = {
                OFFSET: "offset",
                POSITION: "position"
            },
            f = function() {
                function a(t, n) {
                    var i = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(n), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.LIST_ITEMS + ",") + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(u.SCROLL, function(e) {
                        return i._process(e)
                    }), this.refresh(), this._process()
                }
                var s = a.prototype;
                return s.refresh = function() {
                    var t = this,
                        n = this._scrollElement === this._scrollElement.window ? d.OFFSET : d.POSITION,
                        i = "auto" === this._config.method ? n : this._config.method,
                        r = i === d.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                    var a = e.makeArray(e(this._selector));
                    a.map(function(t) {
                        var n, a = Util.getSelectorFromElement(t);
                        if (a && (n = e(a)[0]), n) {
                            var s = n.getBoundingClientRect();
                            if (s.width || s.height) return [e(n)[i]().top + r, a]
                        }
                        return null
                    }).filter(function(e) {
                        return e
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).forEach(function(e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, s.dispose = function() {
                    e.removeData(this._element, i), e(this._scrollElement).off(r), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, s._getConfig = function(n) {
                    if (n = _extends({}, o, n), "string" != typeof n.target) {
                        var i = e(n.target).attr("id");
                        i || (i = Util.getUID(t), e(n.target).attr("id", i)), n.target = "#" + i
                    }
                    return Util.typeCheckConfig(t, n, l), n
                }, s._getScrollTop = function() {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, s._getScrollHeight = function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, s._getOffsetHeight = function() {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, s._process = function() {
                    var e = this._getScrollTop() + this._config.offset,
                        t = this._getScrollHeight(),
                        n = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= n) {
                        var i = this._targets[this._targets.length - 1];
                        return void(this._activeTarget !== i && this._activate(i))
                    }
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) {
                        var a = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]);
                        a && this._activate(this._targets[r])
                    }
                }, s._activate = function(t) {
                    this._activeTarget = t, this._clear();
                    var n = this._selector.split(",");
                    n = n.map(function(e) {
                        return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]')
                    });
                    var i = e(n.join(","));
                    i.hasClass(c.DROPDOWN_ITEM) ? (i.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(c.ACTIVE), i.addClass(c.ACTIVE)) : (i.addClass(c.ACTIVE), i.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS + ", " + p.LIST_ITEMS).addClass(c.ACTIVE), i.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(c.ACTIVE)), e(this._scrollElement).trigger(u.ACTIVATE, {
                        relatedTarget: t
                    })
                }, s._clear = function() {
                    e(this._selector).filter(p.ACTIVE).removeClass(c.ACTIVE)
                }, a._jQueryInterface = function(t) {
                    return this.each(function() {
                        var n = e(this).data(i),
                            r = "object" === ("undefined" == typeof t ? "undefined" : _typeof2(t)) && t;
                        if (n || (n = new a(this, r), e(this).data(i, n)), "string" == typeof t) {
                            if ("undefined" == typeof n[t]) throw new TypeError('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, _createClass(a, null, [{
                    key: "VERSION",
                    get: function() {
                        return n
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return o
                    }
                }]), a
            }();
        return e(window).on(u.LOAD_DATA_API, function() {
            for (var t = e.makeArray(e(p.DATA_SPY)), n = t.length; n--;) {
                var i = e(t[n]);
                f._jQueryInterface.call(i, i.data())
            }
        }), e.fn[t] = f._jQueryInterface, e.fn[t].Constructor = f, e.fn[t].noConflict = function() {
            return e.fn[t] = s, f._jQueryInterface
        }, f
    }($);
! function(e) {
    function t(e) {
        return new RegExp("^" + e + "$")
    }

    function n(e, t) {
        for (var n = Array.prototype.slice.call(arguments).splice(2), i = e.split("."), r = i.pop(), a = 0; a < i.length; a++) t = t[i[a]];
        return t[r].apply(this, n)
    }
    var i = [],
        r = {
            options: {
                prependExistingHelpBlock: !1,
                sniffHtml: !0,
                preventSubmit: !0,
                submitError: !1,
                submitSuccess: !1,
                semanticallyStrict: !1,
                autoAdd: {
                    helpBlocks: !0
                },
                filter: function() {
                    return !0
                }
            },
            methods: {
                init: function(t) {
                    var n = e.extend(!0, {}, r);
                    n.options = e.extend(!0, n.options, t);
                    var o = this,
                        l = e.unique(o.map(function() {
                            return e(this).parents("form")[0]
                        }).toArray());
                    return e(l).bind("submit", function(t) {
                        var i = e(this),
                            r = 0,
                            a = i.find("input,textarea,select").not("[type=submit],[type=image]").filter(n.options.filter);
                        a.trigger("submit.validation").trigger("validationLostFocus.validation"), a.each(function(t, n) {
                            var i = e(n),
                                a = i.parents(".form-group").first();
                            a.hasClass("warning") && (a.removeClass("warning").addClass("error"), r++)
                        }), a.trigger("validationLostFocus.validation"), r ? (n.options.preventSubmit && t.preventDefault(), i.addClass("error"), e.isFunction(n.options.submitError) && n.options.submitError(i, t, a.jqBootstrapValidation("collectErrors", !0))) : (i.removeClass("error"), e.isFunction(n.options.submitSuccess) && n.options.submitSuccess(i, t))
                    }), this.each(function() {
                        var t = e(this),
                            r = t.parents(".form-group").first(),
                            o = r.find(".help-block").first(),
                            l = t.parents("form").first(),
                            u = [];
                        if (!o.length && n.options.autoAdd && n.options.autoAdd.helpBlocks && (o = e('<div class="help-block" />'), r.find(".controls").append(o), i.push(o[0])), n.options.sniffHtml) {
                            var c = "";
                            if (void 0 !== t.attr("pattern") && (c = "Not in the expected format<!-- data-validation-pattern-message to override -->", t.data("validationPatternMessage") && (c = t.data("validationPatternMessage")), t.data("validationPatternMessage", c), t.data("validationPatternRegex", t.attr("pattern"))), void 0 !== t.attr("max") || void 0 !== t.attr("aria-valuemax")) {
                                var p = void 0 !== t.attr("max") ? t.attr("max") : t.attr("aria-valuemax");
                                c = "Too high: Maximum of '" + p + "'<!-- data-validation-max-message to override -->", t.data("validationMaxMessage") && (c = t.data("validationMaxMessage")), t.data("validationMaxMessage", c), t.data("validationMaxMax", p)
                            }
                            if (void 0 !== t.attr("min") || void 0 !== t.attr("aria-valuemin")) {
                                var d = void 0 !== t.attr("min") ? t.attr("min") : t.attr("aria-valuemin");
                                c = "Too low: Minimum of '" + d + "'<!-- data-validation-min-message to override -->", t.data("validationMinMessage") && (c = t.data("validationMinMessage")), t.data("validationMinMessage", c), t.data("validationMinMin", d)
                            }
                            void 0 !== t.attr("maxlength") && (c = "Too long: Maximum of '" + t.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->", t.data("validationMaxlengthMessage") && (c = t.data("validationMaxlengthMessage")), t.data("validationMaxlengthMessage", c), t.data("validationMaxlengthMaxlength", t.attr("maxlength"))), void 0 !== t.attr("minlength") && (c = "Too short: Minimum of '" + t.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->", t.data("validationMinlengthMessage") && (c = t.data("validationMinlengthMessage")), t.data("validationMinlengthMessage", c), t.data("validationMinlengthMinlength", t.attr("minlength"))), void 0 === t.attr("required") && void 0 === t.attr("aria-required") || (c = n.builtInValidators.required.message, t.data("validationRequiredMessage") && (c = t.data("validationRequiredMessage")), t.data("validationRequiredMessage", c)), void 0 !== t.attr("type") && "number" === t.attr("type").toLowerCase() && (c = n.builtInValidators.number.message,
                                t.data("validationNumberMessage") && (c = t.data("validationNumberMessage")), t.data("validationNumberMessage", c)), void 0 !== t.attr("type") && "email" === t.attr("type").toLowerCase() && (c = "Not a valid email address<!-- data-validator-validemail-message to override -->", t.data("validationValidemailMessage") ? c = t.data("validationValidemailMessage") : t.data("validationEmailMessage") && (c = t.data("validationEmailMessage")), t.data("validationValidemailMessage", c)), void 0 !== t.attr("minchecked") && (c = "Not enough options checked; Minimum of '" + t.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->", t.data("validationMincheckedMessage") && (c = t.data("validationMincheckedMessage")), t.data("validationMincheckedMessage", c), t.data("validationMincheckedMinchecked", t.attr("minchecked"))), void 0 !== t.attr("maxchecked") && (c = "Too many options checked; Maximum of '" + t.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->", t.data("validationMaxcheckedMessage") && (c = t.data("validationMaxcheckedMessage")), t.data("validationMaxcheckedMessage", c), t.data("validationMaxcheckedMaxchecked", t.attr("maxchecked")))
                        }
                        void 0 !== t.data("validation") && (u = t.data("validation").split(",")), e.each(t.data(), function(e, t) {
                            var n = e.replace(/([A-Z])/g, ",$1").split(",");
                            "validation" === n[0] && n[1] && u.push(n[1])
                        });
                        var f = u,
                            h = [];
                        do e.each(u, function(e, t) {
                            u[e] = a(t)
                        }), u = e.unique(u), h = [], e.each(f, function(i, r) {
                            if (void 0 !== t.data("validation" + r + "Shortcut")) e.each(t.data("validation" + r + "Shortcut").split(","), function(e, t) {
                                h.push(t)
                            });
                            else if (n.builtInValidators[r.toLowerCase()]) {
                                var s = n.builtInValidators[r.toLowerCase()];
                                "shortcut" === s.type.toLowerCase() && e.each(s.shortcut.split(","), function(e, t) {
                                    t = a(t), h.push(t), u.push(t)
                                })
                            }
                        }), f = h; while (f.length > 0);
                        var m = {};
                        e.each(u, function(i, r) {
                            var s = t.data("validation" + r + "Message"),
                                o = void 0 !== s,
                                l = !1;
                            if (s = s ? s : "'" + r + "' validation failed <!-- Add attribute 'data-validation-" + r.toLowerCase() + "-message' to input to change this message -->", e.each(n.validatorTypes, function(n, i) {
                                    void 0 === m[n] && (m[n] = []), l || void 0 === t.data("validation" + r + a(i.name)) || (m[n].push(e.extend(!0, {
                                        name: a(i.name),
                                        message: s
                                    }, i.init(t, r))), l = !0)
                                }), !l && n.builtInValidators[r.toLowerCase()]) {
                                var u = e.extend(!0, {}, n.builtInValidators[r.toLowerCase()]);
                                o && (u.message = s);
                                var c = u.type.toLowerCase();
                                "shortcut" === c ? l = !0 : e.each(n.validatorTypes, function(n, i) {
                                    void 0 === m[n] && (m[n] = []), l || c !== n.toLowerCase() || (t.data("validation" + r + a(i.name), u[i.name.toLowerCase()]), m[c].push(e.extend(u, i.init(t, r))), l = !0)
                                })
                            }
                            l || e.error("Cannot find validation info for '" + r + "'")
                        }), o.data("original-contents", o.data("original-contents") ? o.data("original-contents") : o.html()), o.data("original-role", o.data("original-role") ? o.data("original-role") : o.attr("role")), r.data("original-classes", r.data("original-clases") ? r.data("original-classes") : r.attr("class")), t.data("original-aria-invalid", t.data("original-aria-invalid") ? t.data("original-aria-invalid") : t.attr("aria-invalid")), t.bind("validation.validation", function(i, r) {
                            var a = s(t),
                                o = [];
                            return e.each(m, function(i, s) {
                                (a || a.length || r && r.includeEmpty || n.validatorTypes[i].blockSubmit && r && r.submitting) && e.each(s, function(e, r) {
                                    n.validatorTypes[i].validate(t, a, r) && o.push(r.message)
                                })
                            }), o
                        }), t.bind("getValidators.validation", function() {
                            return m
                        }), t.bind("submit.validation", function() {
                            return t.triggerHandler("change.validation", {
                                submitting: !0
                            })
                        }), t.bind(["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") + ".validation", function(i, a) {
                            var u = s(t),
                                c = [];
                            r.find("input,textarea,select").each(function(n, i) {
                                var r = c.length;
                                if (e.each(e(i).triggerHandler("validation.validation", a), function(e, t) {
                                        c.push(t)
                                    }), c.length > r) e(i).attr("aria-invalid", "true");
                                else {
                                    var s = t.data("original-aria-invalid");
                                    e(i).attr("aria-invalid", void 0 !== s && s)
                                }
                            }), l.find("input,select,textarea").not(t).not('[name="' + t.attr("name") + '"]').trigger("validationLostFocus.validation"), c = e.unique(c.sort()), c.length ? (r.removeClass("success error").addClass("warning"), n.options.semanticallyStrict && 1 === c.length ? o.html(c[0] + (n.options.prependExistingHelpBlock ? o.data("original-contents") : "")) : o.html('<ul role="alert"><li>' + c.join("</li><li>") + "</li></ul>" + (n.options.prependExistingHelpBlock ? o.data("original-contents") : ""))) : (r.removeClass("warning error success"), u.length > 0 && r.addClass("success"), o.html(o.data("original-contents"))), "blur" === i.type && r.removeClass("success")
                        }), t.bind("validationLostFocus.validation", function() {
                            r.removeClass("success")
                        })
                    })
                },
                destroy: function() {
                    return this.each(function() {
                        var t = e(this),
                            n = t.parents(".form-group").first(),
                            r = n.find(".help-block").first();
                        t.unbind(".validation"), r.html(r.data("original-contents")), n.attr("class", n.data("original-classes")), t.attr("aria-invalid", t.data("original-aria-invalid")), r.attr("role", t.data("original-role")), i.indexOf(r[0]) > -1 && r.remove()
                    })
                },
                collectErrors: function(t) {
                    var n = {};
                    return this.each(function(t, i) {
                        var r = e(i),
                            a = r.attr("name"),
                            s = r.triggerHandler("validation.validation", {
                                includeEmpty: !0
                            });
                        n[a] = e.extend(!0, s, n[a])
                    }), e.each(n, function(e, t) {
                        0 === t.length && delete n[e]
                    }), n
                },
                hasErrors: function() {
                    var t = [];
                    return this.each(function(n, i) {
                        t = t.concat(e(i).triggerHandler("getValidators.validation") ? e(i).triggerHandler("validation.validation", {
                            submitting: !0
                        }) : [])
                    }), t.length > 0
                },
                override: function(t) {
                    r = e.extend(!0, r, t)
                }
            },
            validatorTypes: {
                callback: {
                    name: "callback",
                    init: function(e, t) {
                        return {
                            validatorName: t,
                            callback: e.data("validation" + t + "Callback"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(e, t, i) {
                        if (i.lastValue === t && i.lastFinished) return !i.lastValid;
                        if (i.lastFinished === !0) {
                            i.lastValue = t, i.lastValid = !0, i.lastFinished = !1;
                            var r = i,
                                a = e;
                            n(i.callback, window, e, t, function(e) {
                                r.lastValue === e.value && (r.lastValid = e.valid, e.message && (r.message = e.message), r.lastFinished = !0, a.data("validation" + r.validatorName + "Message", r.message), setTimeout(function() {
                                    a.trigger("change.validation")
                                }, 1))
                            })
                        }
                        return !1
                    }
                },
                ajax: {
                    name: "ajax",
                    init: function(e, t) {
                        return {
                            validatorName: t,
                            url: e.data("validation" + t + "Ajax"),
                            lastValue: e.val(),
                            lastValid: !0,
                            lastFinished: !0
                        }
                    },
                    validate: function(t, n, i) {
                        return "" + i.lastValue == "" + n && i.lastFinished === !0 ? i.lastValid === !1 : (i.lastFinished === !0 && (i.lastValue = n, i.lastValid = !0, i.lastFinished = !1, e.ajax({
                            url: i.url,
                            data: "value=" + n + "&field=" + t.attr("name"),
                            dataType: "json",
                            success: function(e) {
                                "" + i.lastValue == "" + e.value && (i.lastValid = !!e.valid, e.message && (i.message = e.message), i.lastFinished = !0, t.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                    t.trigger("change.validation")
                                }, 1))
                            },
                            failure: function() {
                                i.lastValid = !0, i.message = "ajax call failed", i.lastFinished = !0, t.data("validation" + i.validatorName + "Message", i.message), setTimeout(function() {
                                    t.trigger("change.validation")
                                }, 1)
                            }
                        })), !1)
                    }
                },
                regex: {
                    name: "regex",
                    init: function(e, n) {
                        return {
                            regex: t(e.data("validation" + n + "Regex"))
                        }
                    },
                    validate: function(e, t, n) {
                        return !n.regex.test(t) && !n.negative || n.regex.test(t) && n.negative
                    }
                },
                required: {
                    name: "required",
                    init: function(e, t) {
                        return {}
                    },
                    validate: function(e, t, n) {
                        return !(0 !== t.length || n.negative) || !!(t.length > 0 && n.negative)
                    },
                    blockSubmit: !0
                },
                match: {
                    name: "match",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.data("validation" + t + "Match") + '"]').first();
                        return n.bind("validation.validation", function() {
                            e.trigger("change.validation", {
                                submitting: !0
                            })
                        }), {
                            element: n
                        }
                    },
                    validate: function(e, t, n) {
                        return t !== n.element.val() && !n.negative || t === n.element.val() && n.negative
                    },
                    blockSubmit: !0
                },
                max: {
                    name: "max",
                    init: function(e, t) {
                        return {
                            max: e.data("validation" + t + "Max")
                        }
                    },
                    validate: function(e, t, n) {
                        return parseFloat(t, 10) > parseFloat(n.max, 10) && !n.negative || parseFloat(t, 10) <= parseFloat(n.max, 10) && n.negative
                    }
                },
                min: {
                    name: "min",
                    init: function(e, t) {
                        return {
                            min: e.data("validation" + t + "Min")
                        }
                    },
                    validate: function(e, t, n) {
                        return parseFloat(t) < parseFloat(n.min) && !n.negative || parseFloat(t) >= parseFloat(n.min) && n.negative
                    }
                },
                maxlength: {
                    name: "maxlength",
                    init: function(e, t) {
                        return {
                            maxlength: e.data("validation" + t + "Maxlength")
                        }
                    },
                    validate: function(e, t, n) {
                        return t.length > n.maxlength && !n.negative || t.length <= n.maxlength && n.negative
                    }
                },
                minlength: {
                    name: "minlength",
                    init: function(e, t) {
                        return {
                            minlength: e.data("validation" + t + "Minlength")
                        }
                    },
                    validate: function(e, t, n) {
                        return t.length < n.minlength && !n.negative || t.length >= n.minlength && n.negative
                    }
                },
                maxchecked: {
                    name: "maxchecked",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return n.bind("click.validation", function() {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            maxchecked: e.data("validation" + t + "Maxchecked"),
                            elements: n
                        }
                    },
                    validate: function(e, t, n) {
                        return n.elements.filter(":checked").length > n.maxchecked && !n.negative || n.elements.filter(":checked").length <= n.maxchecked && n.negative
                    },
                    blockSubmit: !0
                },
                minchecked: {
                    name: "minchecked",
                    init: function(e, t) {
                        var n = e.parents("form").first().find('[name="' + e.attr("name") + '"]');
                        return n.bind("click.validation", function() {
                            e.trigger("change.validation", {
                                includeEmpty: !0
                            })
                        }), {
                            minchecked: e.data("validation" + t + "Minchecked"),
                            elements: n
                        }
                    },
                    validate: function(e, t, n) {
                        return n.elements.filter(":checked").length < n.minchecked && !n.negative || n.elements.filter(":checked").length >= n.minchecked && n.negative
                    },
                    blockSubmit: !0
                }
            },
            builtInValidators: {
                email: {
                    name: "Email",
                    type: "shortcut",
                    shortcut: "validemail"
                },
                validemail: {
                    name: "Validemail",
                    type: "regex",
                    regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}",
                    message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
                },
                passwordagain: {
                    name: "Passwordagain",
                    type: "match",
                    match: "password",
                    message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
                },
                positive: {
                    name: "Positive",
                    type: "shortcut",
                    shortcut: "number,positivenumber"
                },
                negative: {
                    name: "Negative",
                    type: "shortcut",
                    shortcut: "number,negativenumber"
                },
                number: {
                    name: "Number",
                    type: "regex",
                    regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
                    message: "Must be a number<!-- data-validator-number-message to override -->"
                },
                integer: {
                    name: "Integer",
                    type: "regex",
                    regex: "[+-]?\\d+",
                    message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
                },
                positivenumber: {
                    name: "Positivenumber",
                    type: "min",
                    min: 0,
                    message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
                },
                negativenumber: {
                    name: "Negativenumber",
                    type: "max",
                    max: 0,
                    message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
                },
                required: {
                    name: "Required",
                    type: "required",
                    message: "This is required<!-- data-validator-required-message to override -->"
                },
                checkone: {
                    name: "Checkone",
                    type: "minchecked",
                    minchecked: 1,
                    message: "Check at least one option<!-- data-validation-checkone-message to override -->"
                }
            }
        },
        a = function(e) {
            return e.toLowerCase().replace(/(^|\s)([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            })
        },
        s = function(t) {
            var n = t.val(),
                i = t.attr("type");
            return "checkbox" === i && (n = t.is(":checked") ? n : ""), "radio" === i && (n = e('input[name="' + t.attr("name") + '"]:checked').length > 0 ? n : ""), n
        };
    e.fn.jqBootstrapValidation = function(t) {
        return r.methods[t] ? r.methods[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== ("undefined" == typeof t ? "undefined" : _typeof2(t)) && t ? (e.error("Method " + t + " does not exist on jQuery.jqBootstrapValidation"), null) : r.methods.init.apply(this, arguments)
    }, e.jqBootstrapValidation = function(t) {
        e(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments)
    }
}(jQuery), $(function() {
        $("input,textarea").jqBootstrapValidation({
            preventSubmit: !0,
            submitError: function(e, t, n) {},
            submitSuccess: function(e, t) {
                t.preventDefault();
                var n = $("input#name").val(),
                    i = $("input#email").val(),
                    r = $("textarea#message").val(),
                    a = n;
                a.indexOf(" ") >= 0 && (a = n.split(" ").slice(0, -1).join(" ")), console.log(i), $.ajax({
                    url: "mail/contact_me.php",
                    type: "GET",
                    data: {
                        name: n,
                        email: i,
                        message: r
                    },
                    cache: !1,
                    success: function(e) {
                        console.log(e), $(".btn-circle.btn-xl").addClass("go-fly"), setTimeout(function() {
                            $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").append("<strong>Thanks!</strong>"), $("#success > .alert-success").append("</div>")
                        }, 2300), setTimeout(function() {
                            $(".btn-circle.btn-xl").removeClass("go-fly"), $("#success").html("")
                        }, 11100), $("#contactForm").trigger("reset")
                    },
                    error: function(e) {
                        console.log(e), $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append("<strong>Sorry " + a + ", it seems that my mail server is not responding. Please try again later!"), $("#success > .alert-danger").append("</div>"), $("#contactForm").trigger("reset")
                    }
                })
            },
            filter: function() {
                return $(this).is(":visible")
            }
        }), $('a[data-toggle="tab"]').click(function(e) {
            e.preventDefault(), $(this).tab("show")
        })
    }), $("#name").focus(function() {
        $("#success").html("")
    }),
    function() {
        function e() {}

        function t(e) {
            return null == e ? e === c ? g : h : A && A in Object(e) ? n(e) : i(e)
        }

        function n(e) {
            var t = S.call(e, A),
                n = e[A];
            try {
                e[A] = c;
                var i = !0
            } catch (r) {}
            var a = k.call(e);
            return i && (t ? e[A] = n : delete e[A]), a
        }

        function i(e) {
            return k.call(e)
        }

        function r(e, t, n) {
            function i(t) {
                var n = g,
                    i = v;
                return g = v = c, _ = t, y = e.apply(i, n)
            }

            function r(e) {
                return _ = e, x = setTimeout(l, t), M ? i(e) : y
            }

            function a(e) {
                var n = e - b,
                    i = e - _,
                    r = t - n;
                return j ? D(r, w - i) : r
            }

            function o(e) {
                var n = e - b,
                    i = e - _;
                return b === c || n >= t || n < 0 || j && i >= w
            }

            function l() {
                var e = N();
                return o(e) ? p(e) : void(x = setTimeout(l, a(e)))
            }

            function p(e) {
                return x = c, C && g ? i(e) : (g = v = c, y)
            }

            function f() {
                x !== c && clearTimeout(x), _ = 0, g = b = v = x = c
            }

            function h() {
                return x === c ? y : p(N())
            }

            function m() {
                var e = N(),
                    n = o(e);
                if (g = arguments, v = this, b = e, n) {
                    if (x === c) return r(b);
                    if (j) return x = setTimeout(l, t), i(b)
                }
                return x === c && (x = setTimeout(l, t)), y
            }
            var g, v, w, y, x, b, _ = 0,
                M = !1,
                j = !1,
                C = !0;
            if ("function" != typeof e) throw new TypeError(d);
            return t = u(t) || 0, s(n) && (M = !!n.leading, j = "maxWait" in n, w = j ? G(u(n.maxWait) || 0, t) : w, C = "trailing" in n ? !!n.trailing : C), m.cancel = f, m.flush = h, m
        }

        function a(e, t, n) {
            var i = !0,
                a = !0;
            if ("function" != typeof e) throw new TypeError(d);
            return s(n) && (i = "leading" in n ? !!n.leading : i, a = "trailing" in n ? !!n.trailing : a), r(e, t, {
                leading: i,
                maxWait: t,
                trailing: a
            })
        }

        function s(e) {
            var t = "undefined" == typeof e ? "undefined" : _typeof2(e);
            return null != e && ("object" == t || "function" == t)
        }

        function o(e) {
            return null != e && "object" == ("undefined" == typeof e ? "undefined" : _typeof2(e))
        }

        function l(e) {
            return "symbol" == ("undefined" == typeof e ? "undefined" : _typeof2(e)) || o(e) && t(e) == m
        }

        function u(e) {
            if ("number" == typeof e) return e;
            if (l(e)) return f;
            if (s(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = s(t) ? t + "" : t
            }
            if ("string" != typeof e) return 0 === e ? e : +e;
            e = e.replace(v, "");
            var n = y.test(e);
            return n || x.test(e) ? b(e.slice(2), n ? 2 : 8) : w.test(e) ? f : +e
        }
        var c, p = "4.17.5",
            d = "Expected a function",
            f = NaN,
            h = "[object Null]",
            m = "[object Symbol]",
            g = "[object Undefined]",
            v = /^\s+|\s+$/g,
            w = /^[-+]0x[0-9a-f]+$/i,
            y = /^0b[01]+$/i,
            x = /^0o[0-7]+$/i,
            b = parseInt,
            _ = "object" == ("undefined" == typeof global ? "undefined" : _typeof2(global)) && global && global.Object === Object && global,
            M = "object" == ("undefined" == typeof self ? "undefined" : _typeof2(self)) && self && self.Object === Object && self,
            j = _ || M || Function("return this")(),
            C = "object" == ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) && exports && !exports.nodeType && exports,
            I = C && "object" == ("undefined" == typeof module ? "undefined" : _typeof2(module)) && module && !module.nodeType && module,
            T = Object.prototype,
            S = T.hasOwnProperty,
            k = T.toString,
            E = j.Symbol,
            A = E ? E.toStringTag : c,
            G = Math.max,
            D = Math.min,
            N = function() {
                return j.Date.now()
            };
        e.debounce = r, e.throttle = a, e.isObject = s, e.isObjectLike = o, e.isSymbol = l, e.now = N, e.toNumber = u, e.VERSION = p, "function" == typeof define && "object" == _typeof2(define.amd) && define.amd ? (j._ = e, define(function() {
            return e
        })) : I ? ((I.exports = e)._ = e, C._ = e) : j._ = e
    }.call(this), ! function(e, t) {
        "object" == ("undefined" == typeof exports ? "undefined" : _typeof2(exports)) ? module.exports = t(require("jquery")): "function" == typeof define && define.amd ? define(["jquery"], t) : t(e.jQuery)
    }(this, function(e) {
        var t = function(e, t) {
                var n, i = document.createElement("canvas");
                e.appendChild(i), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
                var r = i.getContext("2d");
                i.width = i.height = t.size;
                var a = 1;
                window.devicePixelRatio > 1 && (a = window.devicePixelRatio, i.style.width = i.style.height = [t.size, "px"].join(""), i.width = i.height = t.size * a, r.scale(a, a)), r.translate(t.size / 2, t.size / 2), r.rotate((-.5 + t.rotate / 180) * Math.PI);
                var s = (t.size - t.lineWidth) / 2;
                t.scaleColor && t.scaleLength && (s -= t.scaleLength + 2), Date.now = Date.now || function() {
                    return +new Date
                };
                var o = function(e, t, n) {
                        n = Math.min(Math.max(-1, n || 0), 1);
                        var i = 0 >= n;
                        r.beginPath(), r.arc(0, 0, s, 0, 2 * Math.PI * n, i), r.strokeStyle = e, r.lineWidth = t, r.stroke()
                    },
                    l = function() {
                        var e, n;
                        r.lineWidth = 1, r.fillStyle = t.scaleColor, r.save();
                        for (var i = 24; i > 0; --i) i % 6 === 0 ? (n = t.scaleLength, e = 0) : (n = .6 * t.scaleLength, e = t.scaleLength - n), r.fillRect(-t.size / 2 + e, 0, n, 1), r.rotate(Math.PI / 12);
                        r.restore()
                    },
                    u = function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                            window.setTimeout(e, 1e3 / 60)
                        }
                    }(),
                    c = function() {
                        t.scaleColor && l(), t.trackColor && o(t.trackColor, t.lineWidth, 1)
                    };
                this.getCanvas = function() {
                    return i
                }, this.getCtx = function() {
                    return r
                }, this.clear = function() {
                    r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
                }, this.draw = function(e) {
                    t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? n ? r.putImageData(n, 0, 0) : (c(), n = r.getImageData(0, 0, t.size * a, t.size * a)) : (this.clear(), c()) : this.clear(), r.lineCap = t.lineCap;
                    var i;
                    i = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, o(i, t.lineWidth, e / 100)
                }.bind(this), this.animate = function(e, n) {
                    var i = Date.now();
                    t.onStart(e, n);
                    var r = function() {
                        var a = Math.min(Date.now() - i, t.animate.duration),
                            s = t.easing(this, a, e, n - e, t.animate.duration);
                        this.draw(s), t.onStep(e, n, s), a >= t.animate.duration ? t.onStop(e, n) : u(r)
                    }.bind(this);
                    u(r)
                }.bind(this)
            },
            n = function(e, n) {
                var i = {
                    barColor: "#ef1e25",
                    trackColor: "#f9f9f9",
                    scaleColor: "#dfe0e0",
                    scaleLength: 5,
                    lineCap: "round",
                    lineWidth: 3,
                    size: 110,
                    rotate: 0,
                    animate: {
                        duration: 1e3,
                        enabled: !0
                    },
                    easing: function(e, t, n, i, r) {
                        return t /= r / 2, 1 > t ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
                    },
                    onStart: function() {},
                    onStep: function() {},
                    onStop: function() {}
                };
                if ("undefined" != typeof t) i.renderer = t;
                else {
                    if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                    i.renderer = SVGRenderer
                }
                var r = {},
                    a = 0,
                    s = function() {
                        this.el = e, this.options = r;
                        for (var t in i) i.hasOwnProperty(t) && (r[t] = n && "undefined" != typeof n[t] ? n[t] : i[t], "function" == typeof r[t] && (r[t] = r[t].bind(this)));
                        r.easing = "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? jQuery.easing[r.easing] : i.easing, "number" == typeof r.animate && (r.animate = {
                            duration: r.animate,
                            enabled: !0
                        }), "boolean" != typeof r.animate || r.animate || (r.animate = {
                            duration: 1e3,
                            enabled: r.animate
                        }), this.renderer = new r.renderer(e, r), this.renderer.draw(a), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
                    }.bind(this);
                this.update = function(e) {
                    return e = parseFloat(e), r.animate.enabled ? this.renderer.animate(a, e) : this.renderer.draw(e), a = e, this
                }.bind(this), this.disableAnimation = function() {
                    return r.animate.enabled = !1, this
                }, this.enableAnimation = function() {
                    return r.animate.enabled = !0, this
                }, s()
            };
        e.fn.easyPieChart = function(t) {
            return this.each(function() {
                var i;
                e.data(this, "easyPieChart") || (i = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new n(this, i)))
            })
        }
    }),
    function(e) {
        "use strict";

        function t(e) {
            var t = window.getComputedStyle(e),
                i = d.exec(t.backgroundImage)[1],
                r = t.backgroundColor;
            n(i, r, function(t) {
                e.style.backgroundImage = "url(" + t + ")"
            })
        }

        function n(e, t, n) {
            var i = document.createElement("img");
            i.src = e, i.onload = function() {
                var e = document.createElement("canvas");
                e.width = this.naturalWidth, e.height = this.naturalHeight;
                var i = e.getContext("2d");
                i.globalCompositeOperation = "multiply", i.drawImage(this, 0, 0), i.fillStyle = t, i.fillRect(0, 0, e.width, e.height);
                var r = e.toDataURL("image/jpeg");
                n(r)
            }
        }

        function i(e, t) {
            var n = e.getBoundingClientRect(),
                i = n.top + t,
                r = n.bottom;
            return i < window.innerHeight && r >= 0
        }

        function r() {
            var e = w.pop();
            if (void 0 === e) return void clearInterval(x);
            y || (y = !0, g.text("").css("opacity", 1));
            var e = g.text() + "" + e;
            g.text(e)
        }

        function a(e, t, n) {
            var i = e < 0 ? e * -1 : e,
                r = Math.round,
                a = parseInt;
            if (t.length > 7) {
                var s = t.split(","),
                    o = (n ? n : e < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","),
                    l = a(s[0].slice(4)),
                    u = a(s[1]),
                    c = a(s[2]);
                return "rgb(" + (r((a(o[0].slice(4)) - l) * i) + l) + "," + (r((a(o[1]) - u) * i) + u) + "," + (r((a(o[2]) - c) * i) + c) + ")"
            }
            var s = a(t.slice(1), 16),
                o = a((n ? n : e < 0 ? "#000000" : "#FFFFFF").slice(1), 16),
                p = s >> 16,
                d = s >> 8 & 255,
                f = 255 & s;
            return "#" + (16777216 + 65536 * (r(((o >> 16) - p) * i) + p) + 256 * (r(((o >> 8 & 255) - d) * i) + d) + (r(((255 & o) - f) * i) + f)).toString(16).slice(1)
        }

        function s(e) {
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return t ? {
                r: parseInt(t[1], 16),
                g: parseInt(t[2], 16),
                b: parseInt(t[3], 16)
            } : null
        }
        var o = e("html"),
            l = e("body"),
            u = e("[data-toggle=collapse-side]"),
            c = u.attr("data-target"),
            p = u.attr("data-target-2");
        if (u.click(function(t) {
                e(c).toggleClass("in show"), e(p).toggleClass("out")
            }), e(".nav-link").on("click", function() {
                u.click()
            }), mpviewer_album === !1) {
            var d = /(?:\(['|"]?)(.*?)(?:['|"]?\))/;
            document.addEventListener("DOMContentLoaded", function() {
                var e = window.getComputedStyle(document.body).backgroundBlendMode;
                "undefined" == typeof e && t(document.getElementById("hero"))
            }, !1), e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                    var t = e(this.hash);
                    if (t = t.length ? t : e("[name=" + this.hash.slice(1) + "]"), t.length) return e("html, body").animate({
                        scrollTop: t.offset().top - 54
                    }, 1e3, "easeInOutExpo"), !1
                }
            }), l.scrollspy({
                target: "#mainNav",
                offset: 56
            });
            var f = document.getElementById("skills"),
                h = !1,
                m = function() {
                    if (e("#mainNav").offset().top > 100 ? e("#mainNav").addClass("navbar-shrink") : e("#mainNav").removeClass("navbar-shrink"), i(f, -200) && h === !1) {
                        h = !0, e(".chart").easyPieChart({
                            trackColor: f.style.backgroundColor,
                            scaleColor: !1,
                            animate: 3e3,
                            barColor: "#495057",
                            lineWidth: 20,
                            size: 150
                        });
                        var t = e("#work").find("img");
                        e.each(t, function(n, i) {
                            var r = e(t[n]),
                                a = r.data("src");
                            r.attr("src", a)
                        })
                    }
                };
            e(window).on("scroll", _.throttle(m, 300));
            var g = e(".intro-heading"),
                v = "with <code>",
                w = v.split("").reverse(),
                y = !1,
                x = setInterval(function() {
                    r()
                }, 200),
                b = ["#36d6fe", "#38c593", "#fed136"],
                M = 0;
            setInterval(function() {
                l.addClass("color-transition"), document.documentElement.style.setProperty("--ms__primary", b[M]), document.documentElement.style.setProperty("--ms__primary__darken", a(-.2, b[M]));
                var e = s(b[M]);
                document.documentElement.style.setProperty("--ms__primary__opac", "rgba(" + e.r + ", " + e.g + ", " + e.b + ", 0.7)"), M++, 3 === M && (M = 0), setTimeout(function() {
                    l.removeClass("color-transition")
                }, 2e3)
            }, 18588);
            var j;
            e(".work-modal").on("show.bs.modal", function(t) {
                if (j = e(t.relatedTarget), j.addClass("focus-class"), e(".navbar").addClass("d-none"), o.addClass("modal-open"), !e(this).hasClass("loaded")) {
                    e(this).addClass("loaded");
                    var n = e(this).find(".modal-body img");
                    e.each(n, function(t, i) {
                        var r = e(n[t]),
                            a = r.data("src");
                        r.attr("src", a)
                    })
                }
            }), e(".work-modal").on("hide.bs.modal", function(e) {
                o.removeClass("modal-open")
            }), e(".work-modal").on("hidden.bs.modal", function(t) {
                e(".navbar").removeClass("d-none"), j.removeClass("focus-class")
            }), window.onload = function(t) {
                var n, i = 0,
                    r = 0,
                    a = e(".slider");
                a.find("div").each(function(t, n) {
                    i += e(n).outerWidth(), r++
                }), n = Math.round(2 * i) / 2, i = i > n ? n + .5 : n, a.width(i).addClass("active"), l.addClass("transition-on"), m()
            };
            var C = function() {
                function e(t) {
                    var n = this;
                    _classCallCheck(this, e), this.element = t, this.img = t.querySelector("img"), this.img.addEventListener("load", function() {
                        n.setBackground()
                    }), this.img.complete && this.setBackground()
                }
                return _createClass2(e, [{
                    key: "setBackground",
                    value: function() {
                        var e = "undefined" != typeof this.img.currentSrc ? this.img.currentSrc : this.img.src;
                        this.img.style.display = "none", this.element.style.backgroundImage = 'url("' + e + '")'
                    }
                }]), e
            }();
            if ("objectFit" in document.documentElement.style == !1)
                for (var I = document.querySelectorAll(".responsive-background-image"), M = 0, T = I.length; M < T; M++) new C(I[M])
        }
    }(jQuery);
var Modernizr = function(e, t, n) {
        function i(e) {
            v.cssText = e
        }

        function r(e, t) {
            return ("undefined" == typeof e ? "undefined" : _typeof2(e)) === t
        }

        function a(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function s(e, t) {
            for (var i in e) {
                var r = e[i];
                if (!a(r, "-") && v[r] !== n) return "pfx" != t || r
            }
            return !1
        }

        function o(e, t, i) {
            for (var a in e) {
                var s = t[e[a]];
                if (s !== n) return i === !1 ? e[a] : r(s, "function") ? s.bind(i || t) : s
            }
            return !1
        }

        function l(e, t, n) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                a = (e + " " + x.join(i + " ") + i).split(" ");
            return r(t, "string") || r(t, "undefined") ? s(a, t) : (a = (e + " " + b.join(i + " ") + i).split(" "), o(a, t, n))
        }
        var u, c, p, d = "2.6.2",
            f = {},
            h = t.documentElement,
            m = "modernizr",
            g = t.createElement(m),
            v = g.style,
            w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            y = "Webkit Moz O ms",
            x = y.split(" "),
            b = y.toLowerCase().split(" "),
            _ = {},
            M = [],
            j = M.slice,
            C = function(e, n, i, r) {
                var a, s, o, l, u = t.createElement("div"),
                    c = t.body,
                    p = c || t.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) o = t.createElement("div"), o.id = r ? r[i] : m + (i + 1), u.appendChild(o);
                return a = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), u.id = m, (c ? u : p).innerHTML += a, p.appendChild(u), c || (p.style.background = "", p.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(p)), s = n(u, e), c ? u.parentNode.removeChild(u) : (p.parentNode.removeChild(p), h.style.overflow = l), !!s
            },
            I = {}.hasOwnProperty;
        p = r(I, "undefined") || r(I.call, "undefined") ? function(e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return I.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = j.call(arguments, 1),
                i = function r() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var a = new i,
                            s = t.apply(a, n.concat(j.call(arguments)));
                        return Object(s) === s ? s : a
                    }
                    return t.apply(e, n.concat(j.call(arguments)))
                };
            return i
        }), _.csstransforms3d = function() {
            var e = !!l("perspective");
            return e
        };
        for (var T in _) p(_, T) && (c = T.toLowerCase(), f[c] = _[T](), M.push((f[c] ? "" : "no-") + c));
        return f.addTest = function(e, t) {
            if ("object" == ("undefined" == typeof e ? "undefined" : _typeof2(e)))
                for (var i in e) p(e, i) && f.addTest(i, e[i]);
            else {
                if (e = e.toLowerCase(), f[e] !== n) return f;
                t = "function" == typeof t ? t() : t, "undefined" != typeof enableClasses && enableClasses && (h.className += " " + (t ? "" : "no-") + e), f[e] = t
            }
            return f
        }, i(""), g = u = null, f._version = d, f._prefixes = w, f._domPrefixes = b, f._cssomPrefixes = x, f.testProp = function(e) {
            return s([e])
        }, f.testAllProps = l, f.testStyles = C, f.prefixed = function(e, t, n) {
            return t ? l(e, t, n) : l(e, "pfx")
        }, f
    }(window, document),
    fullScreenApi = {
        ok: !1,
        is: function() {
            return !1
        },
        request: function() {},
        cancel: function() {},
        event: "",
        prefix: ""
    },
    browserPrefixes = "webkit moz o ms khtml".split(" ");
if ("undefined" != typeof document.cancelFullScreen) fullScreenApi.ok = !0;
else
    for (var i = 0, il = browserPrefixes.length; i < il; i++)
        if (fullScreenApi.prefix = browserPrefixes[i], "undefined" != typeof document[fullScreenApi.prefix + "CancelFullScreen"]) {
            fullScreenApi.ok = !0;
            break
        } fullScreenApi.ok && (fullScreenApi.event = fullScreenApi.prefix + "fullscreenchange", fullScreenApi.is = function() {
    switch (this.prefix) {
        case "":
            return document.fullScreen;
        case "webkit":
            return document.webkitIsFullScreen;
        default:
            return document[this.prefix + "FullScreen"]
    }
}, fullScreenApi.request = function(e) {
    return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
}, fullScreenApi.cancel = function(e) {
    return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
});
var fullScreenApi = {
        ok: !1,
        is: function() {
            return !1
        },
        request: function() {},
        cancel: function() {},
        event: "",
        prefix: ""
    },
    browserPrefixes = "webkit moz o ms khtml".split(" ");
if ("undefined" != typeof document.cancelFullScreen) fullScreenApi.ok = !0;
else
    for (var i = 0, il = browserPrefixes.length; i < il; i++)
        if (fullScreenApi.prefix = browserPrefixes[i], "undefined" != typeof document[fullScreenApi.prefix + "CancelFullScreen"]) {
            fullScreenApi.ok = !0;
            break
        } fullScreenApi.ok && (fullScreenApi.event = fullScreenApi.prefix + "fullscreenchange", fullScreenApi.is = function() {
        switch (this.prefix) {
            case "":
                return document.fullScreen;
            case "webkit":
                return document.webkitIsFullScreen;
            default:
                return document[this.prefix + "FullScreen"]
        }
    }, fullScreenApi.request = function(e) {
        return "" === this.prefix ? e.requestFullScreen() : e[this.prefix + "RequestFullScreen"]()
    }, fullScreenApi.cancel = function(e) {
        return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
    }),
    function(e, t, n, i, r) {
        "use strict";

        function a() {}

        function s(e, t, n) {
            return Math.max(isNaN(t) ? -(1 / 0) : t, Math.min(isNaN(n) ? 1 / 0 : n, e))
        }

        function o(e) {
            return e.match(/ma/) && e.match(/-?\d+(?!d)/g)[e.match(/3d/) ? 12 : 4]
        }

        function l(e) {
            return Yt ? +o(e.css("transform")) : +e.css("left").replace("px", "")
        }

        function u(e, t) {
            var n = {};
            return Yt ? n.transform = "translate3d(" + (e + (t ? .001 : 0)) + "px,0,0)" : n.left = e, n
        }

        function c(e) {
            return {
                "transition-duration": e + "ms"
            }
        }

        function p(e, t) {
            return +String(e).replace(t || "px", "") || r
        }

        function d(e) {
            return /%$/.test(e) && p(e, "%")
        }

        function f(e) {
            return (!!p(e) || !!p(e, "%")) && e
        }

        function h(e, t, n, i) {
            return (e - (i || 0)) * (t + (n || 0))
        }

        function m(e, t, n, i) {
            return -Math.round(e / (t + (n || 0)) - (i || 0))
        }

        function g(e) {
            var t = e.data();
            if (!t.tEnd) {
                var n = e[0],
                    i = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        msTransition: "MSTransitionEnd",
                        transition: "transitionend"
                    };
                n.addEventListener(i[Modernizr.prefixed("transition")], function(e) {
                    t.tProp && e.propertyName.match(t.tProp) && t.onEndFn()
                }, !1), t.tEnd = !0
            }
        }

        function v(e, t, n, i) {
            var r, a = e.data();
            a && (a.onEndFn = function() {
                r || (r = !0, clearTimeout(a.tT), n())
            }, a.tProp = t, clearTimeout(a.tT), a.tT = setTimeout(function() {
                a.onEndFn()
            }, 1.5 * i), g(e))
        }

        function w(e, t, n) {
            if (e.length) {
                var i = e.data();
                Yt ? (e.css(c(0)), i.onEndFn = a, clearTimeout(i.tT)) : e.stop();
                var r = y(t, function() {
                    return l(e)
                });
                return e.css(u(r, n)), r
            }
        }

        function y() {
            for (var e, t = 0, n = arguments.length; t < n && (e = t ? arguments[t]() : arguments[t], "number" != typeof e); t++);
            return e
        }

        function x(e, t) {
            return Math.round(e + (t - e) / 1.5)
        }

        function b(e) {
            var n = t.createElement("a");
            return n.href = e, n
        }

        function _(e, t) {
            if ("string" != typeof e) return e;
            e = b(e);
            var n, i;
            if (e.host.match(/youtube\.com/) && e.search) {
                if (n = e.search.split("v=")[1]) {
                    var r = n.indexOf("&");
                    r !== -1 && (n = n.substring(0, r)), i = "youtube"
                }
            } else e.host.match(/youtube\.com|youtu\.be/) ? (n = e.pathname.replace(/^\/(embed\/|v\/)?/, "").replace(/\/.*/, ""), i = "youtube") : e.host.match(/vimeo\.com/) && (i = "vimeo", n = e.pathname.replace(/^\/(video\/)?/, "").replace(/\/.*/, ""));
            return n && i || !t || (n = e.href, i = "custom"), !!n && {
                id: n,
                type: i,
                s: e.search.replace(/^\?/, "")
            }
        }

        function M(e, t, n, r) {
            for (var a = 0, s = e.length; a < s; a++) {
                var o = e[a];
                if (o.i === n && o.thumbsReady) {
                    var l = {
                        videoReady: !0
                    };
                    l[fn] = l[mn] = l[hn] = !1, r.splice(a, 1, i.extend({}, o, l, t));
                    break
                }
            }
        }

        function j(e) {
            function t(e, t, r) {
                var a = e.children("img").eq(0),
                    s = e.attr("href"),
                    o = e.attr("src"),
                    l = a.attr("src"),
                    u = t.video,
                    c = !!r && _(s, u === !0);
                c ? s = !1 : c = u, n(e, a, i.extend(t, {
                    video: c,
                    img: t.img || s || o || l,
                    thumb: t.thumb || l || o || s
                }))
            }

            function n(e, t, n) {
                var r = n.thumb && n.img !== n.thumb,
                    a = p(n.width || e.attr("width")),
                    s = p(n.height || e.attr("height"));
                i.extend(n, {
                    width: a,
                    height: s,
                    thumbratio: L(n.thumbratio || p(n.thumbwidth || t && t.attr("width") || r || a) / p(n.thumbheight || t && t.attr("height") || r || s))
                })
            }
            var r = [];
            return e.children().each(function() {
                var e = i(this),
                    a = P(i.extend(e.data(), {
                        id: e.attr("id")
                    }));
                if (e.is("a, img")) t(e, a, !0);
                else {
                    if (e.is(":empty")) return;
                    n(e, null, i.extend(a, {
                        html: this,
                        _html: e.html()
                    }))
                }
                r.push(a)
            }), r
        }

        function C(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight
        }

        function I(e) {
            return !i.contains(t.documentElement, e)
        }

        function T(e, t, n) {
            e() ? t() : setTimeout(function() {
                T(e, t)
            }, n || 100)
        }

        function S(e) {
            n.replace(n.protocol + "//" + n.host + n.pathname.replace(/^\/?/, "/") + n.search + "#" + e)
        }

        function k(e, t, n) {
            var i = e.data(),
                r = i.measures;
            if (r && (!i.l || i.l.W !== r.width || i.l.H !== r.height || i.l.r !== r.ratio || i.l.w !== t.w || i.l.h !== t.h || i.l.m !== n)) {
                var a = r.width,
                    o = r.height,
                    l = t.w / t.h,
                    u = r.ratio >= l,
                    c = "scaledown" === n,
                    p = "contain" === n,
                    d = "cover" === n;
                u && (c || p) || !u && d ? (a = s(t.w, 0, c ? a : 1 / 0), o = a / r.ratio) : (u && d || !u && (c || p)) && (o = s(t.h, 0, c ? o : 1 / 0), a = o * r.ratio),
                    e.css({
                        width: Math.ceil(a),
                        height: Math.ceil(o),
                        marginLeft: Math.floor(-a / 2),
                        marginTop: Math.floor(-o / 2)
                    }), i.l = {
                        W: r.width,
                        H: r.height,
                        r: r.ratio,
                        w: t.w,
                        h: t.h,
                        m: n
                    }
            }
            return !0
        }

        function E(e, t, n) {
            return t !== n && (e <= t ? "left" : e >= n ? "right" : "left right")
        }

        function A(e, t, n, i) {
            if (!n) return !1;
            if (!isNaN(e)) return e - (i ? 0 : 1);
            for (var r, a = 0, s = t.length; a < s; a++) {
                var o = t[a];
                if (o.id === e) {
                    r = a;
                    break
                }
            }
            return r
        }

        function G(e, t, n) {
            n = n || {}, e.each(function() {
                var e, r = i(this),
                    s = r.data();
                s.clickOn || (s.clickOn = !0, i.extend(V(r, {
                    onStart: function(t) {
                        e = t, (n.onStart || a).call(this, t)
                    },
                    onMove: n.onMove || a,
                    onTouchEnd: n.onTouchEnd || a,
                    onEnd: function(i) {
                        i.moved || n.tail.checked || t.call(this, e)
                    }
                }), n.tail))
            })
        }

        function D(e, t) {
            return '<div class="' + e + '">' + (t || "") + "</div>"
        }

        function N(e) {
            return "[object Array]" == Object.prototype.toString.call(e) && i.map(e, function(e) {
                return i.extend({}, e)
            })
        }

        function O(e, t) {
            Ut.scrollLeft(e).scrollTop(t)
        }

        function P(e) {
            if (e) {
                var t = {};
                return i.each(e, function(e, n) {
                    t[e.toLowerCase()] = n
                }), t
            }
        }

        function L(e) {
            if (e) {
                var t = +e;
                return isNaN(t) ? (t = e.split("/"), +t[0] / +t[1] || r) : t
            }
        }

        function F(e, t) {
            e.preventDefault(), t && e.stopPropagation()
        }

        function H(e, t, n, i) {
            t && (e.addEventListener ? e.addEventListener(t, n, !!i) : e.attachEvent("on" + t, n))
        }

        function q(e) {
            return e ? ">" : "<"
        }

        function R(e, t) {
            var n, r, s, o = e[0],
                l = {
                    prevent: {}
                };
            return H(o, rn, function(e) {
                var o = e.wheelDeltaY || -1 * e.deltaY || 0,
                    u = e.wheelDeltaX || -1 * e.deltaX || 0,
                    c = Math.abs(u) && !Math.abs(o),
                    p = q(u < 0),
                    d = r === p,
                    f = i.now(),
                    h = f - s < an;
                r = p, s = f, c && l.ok && (!l.prevent[p] || n) && (F(e, !0), n && d && h || (t.shift && (n = !0, clearTimeout(l.t), l.t = setTimeout(function() {
                    n = !1
                }, on)), (t.onEnd || a)(e, t.shift ? p : u)))
            }), l
        }

        function W(e, t) {
            var n = e.data(),
                r = Math.round(t.pos),
                s = function() {
                    n.sliding = !1, (t.onEnd || a)()
                };
            "undefined" != typeof t.overPos && t.overPos !== t.pos && (r = t.overPos, s = function() {
                W(e, i.extend({}, t, {
                    overPos: t.pos,
                    time: Math.max(sn, t.time / 2)
                }))
            });
            var o = i.extend(u(r), t.width && {
                width: t.width
            });
            n.sliding = !0, Yt ? (e.css(i.extend(c(t.time), o)), t.time > 10 ? v(e, "transform", s, t.time) : s()) : e.stop().animate(o, t.time, gn, s)
        }

        function B(e, t, n, r, s, o) {
            var l = "undefined" != typeof o;
            if (l || (s.push(arguments), Array.prototype.push.call(arguments, s.length), !(s.length > 1))) {
                e = e || i(e), t = t || i(t);
                var u = e[0],
                    c = t[0],
                    p = "crossfade" === r.method,
                    d = function h() {
                        if (!h.done) {
                            h.done = !0;
                            var e = (l || s.shift()) && s.shift();
                            e && B.apply(this, e), (r.onEnd || a)(!!e)
                        }
                    },
                    f = r.time / (o || 1);
                n.removeClass(Ke + " " + Xe), e.stop().addClass(Ke), t.stop().addClass(Xe), p && c && e.fadeTo(0, 0), e.fadeTo(p ? f : 0, 1, p && d), t.fadeTo(f, 0, d), u && p || c || d()
            }
        }

        function $(e) {
            var t = (e.touches || [])[0] || e;
            e._x = t.pageX, e._y = t.clientY
        }

        function V(n, r) {
            function s(e) {
                return f = i(e.target), y.checked = g = v = !1, p || y.flow || e.touches && e.touches.length > 1 || e.which > 1 || Gn && Gn.type !== e.type && Nn || (g = r.select && f.is(r.select, w)) ? g : (m = "touchstart" === e.type, v = f.is("a, a *", w), $(e), d = Gn = e, Dn = e.type.replace(/down|start/, "move").replace(/Down/, "Move"), h = y.control, (r.onStart || a).call(w, e, {
                    control: h,
                    $target: f
                }), p = y.flow = !0, void(m && !y.go || F(e)))
            }

            function o(e) {
                if (e.touches && e.touches.length > 1 || nn && !e.isPrimary || Dn !== e.type || !p) return p && l(), void(r.onTouchEnd || a)();
                $(e);
                var t = Math.abs(e._x - d._x),
                    n = Math.abs(e._y - d._y),
                    i = t - n,
                    s = (y.go || y.x || i >= 0) && !y.noSwipe,
                    o = i < 0;
                m && !y.checked ? (p = s) && F(e) : (F(e), (r.onMove || a).call(w, e, {
                    touch: m
                })), y.checked = y.checked || s || o
            }

            function l(e) {
                (r.onTouchEnd || a)();
                var t = p;
                y.control = p = !1, t && (y.flow = !1), !t || v && !y.checked || (e && F(e), Nn = !0, clearTimeout(On), On = setTimeout(function() {
                    Nn = !1
                }, 1e3), (r.onEnd || a).call(w, {
                    moved: y.checked,
                    $target: f,
                    control: h,
                    touch: m,
                    startEvent: d,
                    aborted: !e || "MSPointerCancel" === e.type
                }))
            }

            function u() {
                y.flow || setTimeout(function() {
                    y.flow = !0
                }, 10)
            }

            function c() {
                y.flow && setTimeout(function() {
                    y.flow = !1
                }, an)
            }
            var p, d, f, h, m, g, v, w = n[0],
                y = {};
            return nn ? (w[tn]("MSPointerDown", s, !1), t[tn]("MSPointerMove", o, !1), t[tn]("MSPointerCancel", l, !1), t[tn]("MSPointerUp", l, !1)) : (w[tn] && (w[tn]("touchstart", s, !1), w[tn]("touchmove", o, !1), w[tn]("touchend", l, !1), t[tn]("touchstart", u, !1), t[tn]("touchend", c, !1), t[tn]("touchcancel", c, !1), e[tn]("scroll", c, !1)), n.on("mousedown", s), Qt.on("mousemove", o).on("mouseup", l)), n.on("click", "a", function(e) {
                y.checked && F(e)
            }), y
        }

        function z(e, t) {
            function n(n) {
                c = p = n._x, g = i.now(), m = [
                    [g, c]
                ], d = f = S.noMove ? 0 : w(e, (t.getPos || a)(), t._001), (t.onStart || a).call(I, n)
            }

            function r(e, t) {
                y = T.min, b = T.max, _ = T.snap, M = e.altKey, C = !1, j = t.control, j || n(e)
            }

            function o(r, s) {
                j && (j = !1, n(r)), S.noSwipe || (p = r._x, m.push([i.now(), p]), f = d - (c - p), h = E(f, y, b), f <= y ? f = x(f, y) : f >= b && (f = x(f, b)), S.noMove || (e.css(u(f, t._001)), C || (C = !0, s.touch || nn || e.addClass(ct)), (t.onMove || a).call(I, r, {
                    pos: f,
                    edge: h
                })))
            }

            function l(n) {
                if (!j) {
                    n.touch || nn || e.removeClass(ct), v = (new Date).getTime();
                    for (var r, o, l, u, c, h, g, w, x, C = v - an, T = null, S = sn, k = t.friction, E = m.length - 1; E >= 0; E--) {
                        if (r = m[E][0], o = Math.abs(r - C), null === T || o < l) T = r, u = m[E][1];
                        else if (T === C || o > l) break;
                        l = o
                    }
                    g = s(f, y, b);
                    var A = u - p,
                        G = A >= 0,
                        D = v - T,
                        N = D > an,
                        O = !N && f !== d && g === f;
                    _ && (g = s(Math[O ? G ? "floor" : "ceil" : "round"](f / _) * _, y, b), y = b = g), O && (_ || g === f) && (x = -(A / D), S *= s(Math.abs(x), t.timeLow, t.timeHigh), c = Math.round(f + x * S / k), _ || (g = c), (!G && c > b || G && c < y) && (h = G ? y : b, w = c - h, _ || (g = h), w = s(g + .03 * w, h - 50, h + 50), S = Math.abs((f - w) / (x / k)))), S *= M ? 10 : 1, (t.onEnd || a).call(I, i.extend(n, {
                        pos: f,
                        newPos: g,
                        overPos: w,
                        time: S,
                        moved: N ? _ : Math.abs(f - d) > (_ ? 0 : 3)
                    }))
                }
            }
            var c, p, d, f, h, m, g, v, y, b, _, M, j, C, I = e[0],
                T = e.data(),
                S = {};
            return S = i.extend(V(t.$wrap, {
                onStart: r,
                onMove: o,
                onTouchEnd: t.onTouchEnd,
                onEnd: l,
                select: t.select,
                control: t.control
            }), S)
        }

        function R(e, t) {
            var n, r, s, o = e[0],
                l = {
                    prevent: {}
                };
            return o[tn] && o[tn](rn, function(e) {
                var o = e.wheelDeltaY || -1 * e.deltaY || 0,
                    u = e.wheelDeltaX || -1 * e.deltaX || 0,
                    c = Math.abs(u) > Math.abs(o),
                    p = q(u < 0),
                    d = r === p,
                    f = i.now(),
                    h = f - s < an;
                r = p, s = f, c && l.ok && (!l.prevent[p] || n) && (F(e, !0), n && d && h || (t.shift && (n = !0, clearTimeout(l.t), l.t = setTimeout(function() {
                    n = !1
                }, on)), (t.onEnd || a)(e, t.shift ? p : u)))
            }, !1), l
        }

        function R(e, t) {
            var n, r, s, o = e[0],
                l = {
                    prevent: {}
                };
            return o[tn] && o[tn](rn, function(e) {
                var o = e.wheelDeltaY || -1 * e.deltaY || 0,
                    u = e.wheelDeltaX || -1 * e.deltaX || 0,
                    c = Math.abs(u) > Math.abs(o),
                    p = q(u < 0),
                    d = r === p,
                    f = i.now(),
                    h = f - s < an;
                r = p, s = f, c && l.ok && (!l.prevent[p] || n) && (F(e, !0), n && d && h || (t.shift && (n = !0, clearTimeout(l.t), l.t = setTimeout(function() {
                    n = !1
                }, on)), (t.onEnd || a)(e, t.shift ? p : u)))
            }, !1), l
        }

        function U() {
            i.each(i.mpviewer.instances, function(e, t) {
                t.index = e
            })
        }

        function Q(e) {
            i.mpviewer.instances.push(e), U()
        }

        function X(e) {
            i.mpviewer.instances.splice(e.index, 1), U()
        }
        if (mpviewer_album !== !1) {
            var K, Y, Z, J, ee, te, ne, ie, re, ae, se, oe, le, ue, ce, pe, de, fe, he, me, ge, ve, we, ye, xe, be, _e = "mpviewer",
                Me = "fullscreen",
                je = _e + "__wrap",
                Ce = je + "--css3",
                Ie = je + "--video",
                Te = je + "--fade",
                Se = je + "--slide",
                ke = je + "--no-controls",
                Ee = je + "--no-shadows",
                Ae = je + "--pan-y",
                Ge = je + "--rtl",
                De = _e + "__stage",
                Ne = De + "__frame",
                Oe = Ne + "--video",
                Pe = De + "__shaft",
                Le = De + "--only-active",
                Fe = _e + "__grab",
                He = _e + "__pointer",
                qe = _e + "__nav",
                Re = qe + "-wrap",
                We = qe + "__shaft",
                Be = qe + "--dots",
                $e = qe + "--thumbs",
                Ve = qe + "__frame",
                ze = Ve + "--dot",
                Ue = Ve + "--thumb",
                Qe = _e + "__fade",
                Xe = Qe + "-front",
                Ke = Qe + "-rear",
                Ye = _e + "__shadow",
                Ze = Ye + "s",
                Je = Ze + "--left",
                et = Ze + "--right",
                tt = _e + "__active",
                nt = _e + "__select",
                it = _e + "--hidden",
                rt = _e + "--fullscreen",
                at = _e + "__error",
                st = _e + "__loading",
                ot = _e + "__loaded",
                lt = ot + "--full",
                ut = ot + "--img",
                ct = _e + "__grabbing",
                pt = _e + "__img",
                dt = pt + "--full",
                ft = _e + "__dot",
                ht = _e + "__thumb",
                mt = ht + "-border",
                gt = _e + "__html",
                vt = _e + "__video",
                wt = vt + "-play",
                yt = vt + "-close",
                xt = _e + "__caption",
                bt = _e + "__caption__wrap",
                _t = _e + "-thumbborder",
                Mt = _e + "__navprev",
                jt = _e + "__navnext",
                Ct = _e + "-image-nav-left",
                It = _e + "-image-nav-right",
                Tt = _e + "-image-nav-left-arrow",
                St = _e + "-image-nav-right-arrow",
                kt = _e + "-thumbnails",
                Et = _e + "-thumblist",
                At = _e + "-thumbfull",
                Gt = _e + "-pagination",
                Dt = _e + "-thumbgridpage",
                Nt = _e + "-thumbgridpage_current",
                Ot = _e + "-thumbgridpage_total",
                Pt = _e + "-pagination-prev",
                Lt = _e + "-pagination-next",
                Ft = _e + "-control-button",
                Ht = _e + "-Gofullscreen",
                qt = _e + "-autoplay",
                Rt = _e + "-togglethumbs",
                Wt = _e + "-counter",
                Bt = _e + "-total",
                $t = _e + "-current",
                Vt = _e + "-loader",
                gt = _e + "__html",
                zt = _e + "__spinner",
                Ut = i(e),
                Qt = i(t),
                Xt = "quirks" === n.hash.replace("#", ""),
                Kt = Modernizr.csstransforms3d,
                Yt = Kt && !Xt,
                Zt = (Kt || "CSS1Compat" === t.compatMode, fullScreenApi.ok),
                Jt = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
                en = !Yt || Jt,
                tn = "addEventListener",
                nn = e.navigator.msPointerEnabled,
                rn = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll",
                an = 250,
                sn = 300,
                on = 1400,
                ln = 5e3,
                un = 5,
                cn = 70,
                pn = 500,
                dn = 333,
                fn = "$stageFrame",
                hn = "$navDotFrame",
                mn = "$navThumbFrame",
                gn = "swing",
                vn = !1,
                wn = !1,
                yn = !1,
                xn = 12,
                bn = i("body").css("background-color"),
                _n = '<div id="socialbtbar" class="socialbtbar" style="display:block;"><a id="facebookshare"  title="facebook"></a><a id="googleplus" title="google"></a><a id="download"  title="Download Image"></a><a id="pinterest"  title="pintrest"></a><a id="twitterbird"  title="twitter"></a><div id="socialelarge" style="display:block;"></div></div>',
                Mn = mpviewer_album.length,
                jn = Mn,
                Cn = Mn,
                In = "",
                Tn = "",
                Sn = "";
            i("#minimal_picture_viewer");
            i.idleTimer = function(e, n, a) {
                a = i.extend({
                    startImmediately: !0,
                    idle: !1,
                    enabled: !0,
                    timeout: 3e4,
                    events: "mousemove keydown DOMMouseScroll mousewheel mousedown touchstart touchmove"
                }, a), n = n || t;
                var s = i(n),
                    o = s.data("idleTimerObj") || {},
                    l = function c(e) {
                        "number" == typeof e && (e = r);
                        var t = i.data(e || n, "idleTimerObj");
                        t.idle = !t.idle;
                        var s = +new Date - t.olddate;
                        if (t.olddate = +new Date, t.idle && s < a.timeout) return t.idle = !1, clearTimeout(i.idleTimer.tId), void(a.enabled && (i.idleTimer.tId = setTimeout(c, a.timeout)));
                        var o = i.Event(i.data(n, "idleTimer", t.idle ? "idle" : "active") + ".idleTimer");
                        i(n).trigger(o)
                    },
                    u = function(e) {
                        var t = e.data("idleTimerObj") || {};
                        t.enabled = !1, clearTimeout(t.tId), e.off(".idleTimer")
                    };
                if (o.olddate = o.olddate || +new Date, "number" == typeof e) a.timeout = e;
                else {
                    if ("destroy" === e) return u(s), this;
                    if ("getElapsedTime" === e) return +new Date - o.olddate
                }
                s.on(i.trim((a.events + " ").split(" ").join(".idleTimer ")), function() {
                    var e = i.data(this, "idleTimerObj");
                    clearTimeout(e.tId), e.enabled && (e.idle && l(this), e.tId = setTimeout(l, e.timeout))
                }), o.idle = a.idle, o.enabled = a.enabled, o.timeout = a.timeout, a.startImmediately && (o.tId = setTimeout(l, o.timeout)), s.data("idleTimer", "active"), s.data("idleTimerObj", o)
            }, i.fn.idleTimer = function(e, t) {
                return t || (t = {}), this[0] ? i.idleTimer(e, this[0], t) : this
            };
            var kn, En = {
                    lines: 12,
                    length: 15,
                    width: 2,
                    radius: 17,
                    corners: 1,
                    rotate: 15,
                    color: "rgba(128, 128, 128, .75)",
                    hwaccel: !0
                },
                An = {
                    top: "auto",
                    left: "auto",
                    className: ""
                };
            ! function(e, t) {
                kn = t()
            }(this, function() {
                function e(e, n) {
                    var i, r = t.createElement(e || "div");
                    for (i in n) r[i] = n[i];
                    return r
                }

                function n(e) {
                    for (var t = 1, n = arguments.length; t < n; t++) e.appendChild(arguments[t]);
                    return e
                }

                function i(e, t, n, i) {
                    var r = ["opacity", t, ~~(100 * e), n, i].join("-"),
                        a = .01 + n / i * 100,
                        s = Math.max(1 - (1 - e) / t * (100 - a), e),
                        o = d.substring(0, d.indexOf("Animation")).toLowerCase(),
                        l = o && "-" + o + "-" || "";
                    return h[r] || (m.insertRule("@" + l + "keyframes " + r + "{0%{opacity:" + s + "}" + a + "%{opacity:" + e + "}" + (a + .01) + "%{opacity:1}" + (a + t) % 100 + "%{opacity:" + e + "}100%{opacity:" + s + "}}", m.cssRules.length), h[r] = 1), r
                }

                function a(e, t) {
                    var n, i, a = e.style;
                    for (t = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < f.length; i++)
                        if (n = f[i] + t, a[n] !== r) return n;
                    if (a[t] !== r) return t
                }

                function s(e, t) {
                    for (var n in t) e.style[a(e, n) || n] = t[n];
                    return e
                }

                function o(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) e[i] === r && (e[i] = n[i])
                    }
                    return e
                }

                function l(e) {
                    for (var t = {
                            x: e.offsetLeft,
                            y: e.offsetTop
                        }; e = e.offsetParent;) t.x += e.offsetLeft, t.y += e.offsetTop;
                    return t
                }

                function u(e, t) {
                    return "string" == typeof e ? e : e[t % e.length]
                }

                function c(e) {
                    return "undefined" == typeof this ? new c(e) : void(this.opts = o(e || {}, c.defaults, g))
                }

                function p() {
                    function t(t, n) {
                        return e("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', n)
                    }
                    m.addRule(".spin-vml", "behavior:url(#default#VML)"), c.prototype.lines = function(e, i) {
                        function r() {
                            return s(t("group", {
                                coordsize: c + " " + c,
                                coordorigin: -l + " " + -l
                            }), {
                                width: c,
                                height: c
                            })
                        }

                        function a(e, a, o) {
                            n(d, n(s(r(), {
                                rotation: 360 / i.lines * e + "deg",
                                left: ~~a
                            }), n(s(t("roundrect", {
                                arcsize: i.corners
                            }), {
                                width: l,
                                height: i.width,
                                left: i.radius,
                                top: -i.width >> 1,
                                filter: o
                            }), t("fill", {
                                color: u(i.color, e),
                                opacity: i.opacity
                            }), t("stroke", {
                                opacity: 0
                            }))))
                        }
                        var o, l = i.length + i.width,
                            c = 2 * l,
                            p = 2 * -(i.width + i.length) + "px",
                            d = s(r(), {
                                position: "absolute",
                                top: p,
                                left: p
                            });
                        if (i.shadow)
                            for (o = 1; o <= i.lines; o++) a(o, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                        for (o = 1; o <= i.lines; o++) a(o);
                        return n(e, d)
                    }, c.prototype.opacity = function(e, t, n, i) {
                        var r = e.firstChild;
                        i = i.shadow && i.lines || 0, r && t + i < r.childNodes.length && (r = r.childNodes[t + i], r = r && r.firstChild, r = r && r.firstChild, r && (r.opacity = n))
                    }
                }
                var d, f = ["webkit", "Moz", "ms", "O"],
                    h = {},
                    m = function() {
                        var i = e("style", {
                            type: "text/css"
                        });
                        return n(t.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet
                    }(),
                    g = {
                        lines: 12,
                        length: 7,
                        width: 5,
                        radius: 10,
                        rotate: 0,
                        corners: 1,
                        color: "#000",
                        direction: 1,
                        speed: 1,
                        trail: 100,
                        opacity: .25,
                        fps: 20,
                        zIndex: 2e9,
                        className: "spinner",
                        top: "auto",
                        left: "auto",
                        position: "relative"
                    };
                c.defaults = {}, o(c.prototype, {
                    spin: function(t) {
                        this.stop();
                        var n, i, r = this,
                            a = r.opts,
                            o = r.el = s(e(0, {
                                className: a.className
                            }), {
                                position: a.position,
                                width: 0,
                                zIndex: a.zIndex
                            }),
                            u = a.radius + a.length + a.width;
                        if (t && (t.insertBefore(o, t.firstChild || null), i = l(t), n = l(o), s(o, {
                                left: ("auto" == a.left ? i.x - n.x + (t.offsetWidth >> 1) : parseInt(a.left, 10) + u) + "px",
                                top: ("auto" == a.top ? i.y - n.y + (t.offsetHeight >> 1) : parseInt(a.top, 10) + u) + "px"
                            })), o.setAttribute("role", "progressbar"), r.lines(o, r.opts), !d) {
                            var c, p = 0,
                                f = (a.lines - 1) * (1 - a.direction) / 2,
                                h = a.fps,
                                m = h / a.speed,
                                g = (1 - a.opacity) / (m * a.trail / 100),
                                v = m / a.lines;
                            ! function w() {
                                p++;
                                for (var e = 0; e < a.lines; e++) c = Math.max(1 - (p + (a.lines - e) * v) % m * g, a.opacity), r.opacity(o, e * a.direction + f, c, a);
                                r.timeout = r.el && setTimeout(w, ~~(1e3 / h))
                            }()
                        }
                        return r
                    },
                    stop: function() {
                        var e = this.el;
                        return e && (clearTimeout(this.timeout), e.parentNode && e.parentNode.removeChild(e), this.el = r), this
                    },
                    lines: function(t, r) {
                        function a(t, n) {
                            return s(e(), {
                                position: "absolute",
                                width: r.length + r.width + "px",
                                height: r.width + "px",
                                background: t,
                                boxShadow: n,
                                transformOrigin: "left",
                                transform: "rotate(" + ~~(360 / r.lines * l + r.rotate) + "deg) translate(" + r.radius + "px,0)",
                                borderRadius: (r.corners * r.width >> 1) + "px"
                            })
                        }
                        for (var o, l = 0, c = (r.lines - 1) * (1 - r.direction) / 2; l < r.lines; l++) o = s(e(), {
                            position: "absolute",
                            top: 1 + ~(r.width / 2) + "px",
                            transform: r.hwaccel ? "translate3d(0,0,0)" : "",
                            opacity: r.opacity,
                            animation: d && i(r.opacity, r.trail, c + l * r.direction, r.lines) + " " + 1 / r.speed + "s linear infinite"
                        }), r.shadow && n(o, s(a("#000", "0 0 4px #000"), {
                            top: "2px"
                        })), n(t, n(o, a(u(r.color, l), "0 0 1px rgba(0,0,0,.1)")));
                        return t
                    },
                    opacity: function(e, t, n) {
                        t < e.childNodes.length && (e.childNodes[t].style.opacity = n)
                    }
                });
                var v = s(e("group"), {
                    behavior: "url(#default#VML)"
                });
                return !a(v, "transform") && v.adj ? p() : d = a(v, "animation"), c
            });
            var Gn, Dn, Nn, On;
            if (i.mpviewer = function(a, o) {
                    function g() {
                        i.each(pi, function(e, t) {
                            if (!t.i) {
                                t.i = Xi++;
                                var n = t.video;
                                if (n) {
                                    var i = {};
                                    t.video = n, t.thumbsReady = !0, M(pi, {
                                        img: i.img,
                                        thumb: i.thumb
                                    }, t.i, Vi), mpviewer_album = pi, re = "1"
                                }
                            }
                        })
                    }

                    function v(e, t, n, i, r, a, s, o, l) {
                        var u = "";
                        In = "", Tn = "", Sn = "";
                        for (var c = 0; c < Mn; c++) {
                            if (jn == c) return !1;
                            c >= e - xn && c <= t - xn && (Sn += '<div id="g' + c + '" class="mpviewer-image thumbradius"></div>', a.push(c)), c >= e && c <= t && (o ? u = c == l ? "active" : "" : c == n || c == l ? (u = "active", ce = c) : u = "", In += '<div id="g' + c + '" class="mpviewer-image thumbradius ' + u + '"></div>', i.push(c)), c >= e + xn && c <= t + xn && (Tn += '<div id="g' + c + '" class="mpviewer-image thumbradius"></div>', r.push(c)), c == e && (te = c)
                        }
                    }

                    function x(e, n, r, a, s, o, l, u, c) {
                        if (ir[0].firstChild) {
                            var p = i(ir.find("div")[0]).attr("id");
                            p != "g" + e || 1 == ne || 1 == ae ? (ir.empty(), v(e, n, r, a, s, o, l, u, c)) : ce != r && (i("#g" + ce).removeClass("active"), i("#g" + r).addClass("active"), ce = r)
                        } else v(e, n, r, a, s, o, l, u, c);
                        if (1 == ae) var d = i(t).width(),
                            f = "none";
                        else var d = 300;
                        de = l + 1, fe = i('<div id="page' + l + '" style="left:0px" class="mpviewer-page ' + l + '"></div>').append(In), he = i('<div id="page' + (l + 1) + '" style="left:' + d + "px;display: " + f + ';" class="mpviewer-page ' + (l + 1) + '"></div>').append(Tn), me = i('<div style="left:-' + d + 'px" class="mpviewer-page ' + (l - 1) + '"></div>').append(Sn), or.html(l + 1);
                        for (var h = 0; h < a.length; h++) {
                            var m = a[h];
                            ye = "undefined" != typeof mpviewer_album[m].video ? '<div class="mpviewer__video-play sidethbvideoplay"><svg viewBox="0 0 473.20001220703125 535.4000244140625" width="100%" height="100%"><path d="M439.7 233.2L61.1 19C27.5 0 0 19.2 0 61.7v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1z"></path></svg></div>' : "", pe = mpviewer_album[m].thumb;
                            var g = '<img class="thumbradius" src="' + pe + ' " ><div class="thumbframe thumbradius"></div>' + ye;
                            fe.find("#g" + m).html(g)
                        }
                        for (var h = 0; h < s.length; h++) {
                            var m = s[h];
                            xe = "undefined" != typeof mpviewer_album[m].video ? '<div class="mpviewer__video-play sidethbvideoplay"><svg viewBox="0 0 473.20001220703125 535.4000244140625" width="100%" height="100%"><path d="M439.7 233.2L61.1 19C27.5 0 0 19.2 0 61.7v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1z"></path></svg></div>' : "", pe = mpviewer_album[m].thumb;
                            var g = '<img class="thumbradius" src="' + pe + ' " ><div class="thumbframe thumbradius"></div>' + xe;
                            he.find("#g" + m).html(g)
                        }
                        for (var h = 0; h < o.length; h++) {
                            var m = o[h];
                            be = "undefined" != typeof mpviewer_album[m].video ? '<div class="mpviewer__video-play sidethbvideoplay"><svg viewBox="0 0 473.20001220703125 535.4000244140625" width="100%" height="100%"><path d="M439.7 233.2L61.1 19C27.5 0 0 19.2 0 61.7v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1z"></path></svg></div>' : "", pe = mpviewer_album[m].thumb;
                            var g = '<img class="thumbradius" src="' + pe + ' " ><div class="thumbframe thumbradius"></div>' + be;
                            me.find("#g" + m).html(g)
                        }
                        ir.append(fe, he, me), ir.css({
                            transition: "0ms",
                            transform: "translate3d(0, 0, 0)",
                            left: 0
                        })
                    }

                    function b(e, n, r) {
                        function a() {
                            return Math.floor(u / xn)
                        }
                        if (ue = i(t).width(), ue >= 782 && "side" == thumbs && 1 != ie ? (nr.show(), xn = 12) : nr.hide(), "none" == thumbs) return !1;
                        1 == ae && (xn = Math.floor(i(t).width() / 86) * Math.floor((nr.height() - 40) / 86));
                        var s = new Array,
                            o = new Array,
                            l = new Array,
                            u = e || Pr,
                            n = n,
                            c = a(),
                            p = c * xn,
                            d = p + (xn - 1);
                        x(p, d, u, s, o, l, c, n, r), c > 0 ? ur.show() : ur.hide();
                        var f = p + 1 + xn;
                        f <= Cn ? cr.show() : cr.hide();
                        var h, m = Math.floor(Mn / xn),
                            g = Mn / xn;
                        if (h = m != g ? m + 1 : g, lr.html("-" + h), h <= 1 ? ar.hide() : ar.show(), 1 == ae) {
                            var v = '<div id="thb" class="mpviewer-control-button"><div class="mpviewer-Gofullscreen"></div><div class="mpviewer-togglethumbs"></div></div>';
                            Ji.animate({
                                left: ue
                            }, 400, function() {}), nr.animate({
                                left: 0
                            }, 400, function() {
                                i("#page1").show(), 0 == i("#thb").length && nr.prepend(v)
                            })
                        } else Ji.animate({
                            left: ""
                        }, 400, function() {})
                    }

                    function _(e, n, r) {
                        var a = parseInt(te, 10) - xn,
                            s = !0,
                            o = Pr;
                        1 == ae && (n = i(t).width()), te == xn && (a = 1), H(e, n, r, a, s, o)
                    }

                    function C(e, n, r) {
                        var a = parseInt(te, 10) + xn,
                            s = !0,
                            o = Pr;
                        1 == ae && (n = -i(t).width()), H(e, n, r, a, s, o)
                    }

                    function H(e, t, n, i, r, a) {
                        if (Yt) {
                            if (1 == ge) return clearTimeout(ve), clearTimeout(we), b(i, r, a), ge = !0, $(n), !1;
                            ir.css({
                                transition: "" + e + "ms",
                                transform: "translate3d(" + t + "px, 0, 0)"
                            }), ge = !0, ve = setTimeout(function() {
                                b(i, r, a)
                            }, e), $(n)
                        } else ge = !1, ir.stop(!0, !0).animate({
                            left: t
                        }, e, function() {
                            b(i, r, a), ge = !1
                        })
                    }

                    function $(e) {
                        we = setTimeout(function() {
                            ge = !1
                        }, e)
                    }

                    function V() {
                        nr.css({
                            background: "",
                            height: "",
                            left: "0"
                        }), i("#page1").show()
                    }

                    function U(e) {
                        var t = "keydown." + _e,
                            n = "keydown." + _e + zi,
                            i = "resize." + _e + zi;
                        e ? (Qt.on(n, function(e) {
                            mi && 27 === e.keyCode ? (e.preventDefault(), ii(mi, !0, !0)) : (Vi.fullScreen || o.keyboard && !Vi.index) && (27 === e.keyCode ? (e.preventDefault(), Vi.cancelFullScreen()) : 39 === e.keyCode || 40 === e.keyCode && Vi.fullScreen ? (e.preventDefault(), Vi.show({
                                index: ">",
                                slow: e.altKey,
                                direct: !0
                            })) : 37 === e.keyCode || 38 === e.keyCode && Vi.fullScreen ? (e.preventDefault(), Vi.show({
                                index: "<",
                                slow: e.altKey,
                                direct: !0
                            })) : 32 === e.keyCode ? (e.preventDefault(), gr.click()) : 70 === e.keyCode && (e.preventDefault(), Vi[(Vi.fullScreen ? "cancel" : "request") + "FullScreen"]()))
                        }), Vi.index || Qt.off(t).on(t, "textarea, input, select", function(e) {
                            !Y.hasClass(Me) && e.stopPropagation()
                        }), Ut.on(i, Vi.resize)) : (Qt.off(n), Ut.off(i))
                    }

                    function Z(e) {
                        e !== Z.f && (e ? (a.html("").addClass(Ui).append(Zi).before(Yi), Q(Vi)) : (Zi.detach(), Yi.detach(), a.html(Ki.urtext).removeClass(Ui), X(Vi)), U(e), Z.f = e)
                    }

                    function ee() {
                        pi = Vi.data = pi || N(o.data) || j(a), di = Vi.size = pi.length, le = di * (un + cn), xr.html("/" + di), g(), Pr = vt(Pr), di && Z(!0)
                    }

                    function Qe() {
                        var e = di < 2 || mi;
                        Hr.noMove = e || Ei, Hr.noSwipe = e || !o.swipe, er.toggleClass(Fe, !Hr.noMove && !Hr.noSwipe), nn && Zi.toggleClass(Ae, !Hr.noSwipe)
                    }

                    function Xe(e) {
                        e === !0 && (e = ""), o.autoplay = Math.max(+e || ln, 1.5 * Di)
                    }

                    function Ke(e) {
                        return e ? "add" : "remove"
                    }

                    function Ye() {
                        Vi.options = o = P(o), Ei = "crossfade" === o.transition || "dissolve" === o.transition, ji = o.loop && (di > 2 || Ei), Di = +o.transitionduration || sn, Oi = "rtl" === o.direction;
                        var e = {
                            add: [],
                            remove: []
                        };
                        di > 1 ? (Ci = o.nav, Ti = "top" === o.navposition, e.remove.push(nt), fr.toggle(o.arrows)) : (Ci = !1, fr.hide()), Gn(), hi = new kn(i.extend(En, o.spinner, An, {
                            direction: Oi ? -1 : 1
                        })), Rn(), o.autoplay && Xe(o.autoplay), Ai = p(o.thumbwidth) || cn, Gi = p(o.thumbheight) || cn, qr.ok = Wr.ok = o.trackpad && !en, Qe(), Xn(o, !0), Ii = "thumbs" === Ci, Ii ? (Nn(di, "navThumb"), fi = Cr, $i = mn, _r.addClass($e).removeClass(Be)) : "dots" === Ci ? (Nn(di, "navDot"), fi = jr, $i = hn, _r.addClass(Be).removeClass($e)) : (Ci = !1, _r.removeClass($e + " " + Be)), Ci && (Ti ? br.insertBefore(Ji) : br.insertAfter(Ji), Fn.nav = !1, Fn(fi, Mr, "nav")), Si = o.allowfullscreen, Si ? (mr.prependTo(hr).attr("title", "Go Fullscreen"), ki = Zt && "native" === Si) : (mr.detach(), ki = !1), e[Ke(Ei)].push(Te), e[Ke(!Ei)].push(Se), e[Ke(Oi)].push(Ge), Ni = o.shadows && !en, e[Ke(!Ni)].push(Ee), Zi.addClass(e.add.join(" ")).removeClass(e.remove.join(" ")), Lr = i.extend({}, o)
                    }

                    function ct(e) {
                        return e < 0 ? (di + e % di) % di : e >= di ? e % di : e
                    }

                    function vt(e) {
                        return s(e, 0, di - 1)
                    }

                    function Xt(e) {
                        return ji ? ct(e) : vt(e)
                    }

                    function Kt(e) {
                        return !!(e > 0 || ji) && e - 1
                    }

                    function Jt(e) {
                        return !!(e < di - 1 || ji) && e + 1
                    }

                    function tn() {
                        kr.min = ji ? -(1 / 0) : -h(di - 1, Fr.w, o.margin, wi), kr.max = ji ? 1 / 0 : -h(0, Fr.w, o.margin, wi), kr.snap = Fr.w + o.margin
                    }

                    function rn() {
                        Er.min = Math.min(0, Fr.w - 100 - Mr.width()), Er.max = 0, Mr.toggleClass(Fe, !(Rr.noMove = Er.min === Er.max))
                    }

                    function on(e, t, n) {
                        if ("number" == typeof e) {
                            e = new Array(e);
                            var r = !0
                        }
                        return i.each(e, function(e, i) {
                            if (r && (i = e), "number" == typeof i) {
                                var a = pi[ct(i)];
                                if (a) {
                                    var s = "$" + t + "Frame",
                                        o = a[s];
                                    n.call(this, e, i, a, o, s, o && o.data())
                                }
                            }
                        })
                    }

                    function gn(e, t, n, i) {
                        (!Pi || "*" === Pi && i === Mi) && (e = f(o.width) || f(e) || pn, t = f(o.height) || f(t) || dn, Vi.resize({
                            width: e,
                            ratio: o.ratio || n || e / t
                        }, 0, i === Mi || "*"))
                    }

                    function vn(e, t, n, r, a) {
                        on(e, t, function(e, s, l, u, c, p) {
                            function d(e) {
                                var t = ct(s);
                                Kn(e, {
                                    index: t,
                                    src: b,
                                    frame: pi[t]
                                })
                            }

                            function f() {
                                w.remove(), i.mpviewer.cache[b] = "error", l.html && "stage" === t || !_ || _ === b ? (!b || l.html || g ? "stage" === t && (u.trigger("f:load").removeClass(st + " " + at).addClass(ot), d("load"), gn()) : (u.trigger("f:error").removeClass(st).addClass(at), d("error")), p.state = "error", !(di > 1 && pi[s] === l) || l.html || l.deleted || l.video || g || (l.deleted = !0, Vi.splice(s, 1))) : (l[x] = b = _, vn([s], t, n, r, !0))
                            }

                            function h() {
                                i.mpviewer.measures[b] = y.measures = i.mpviewer.measures[b] || {
                                    width: v.width,
                                    height: v.height,
                                    ratio: v.width / v.height
                                }, gn(y.measures.width, y.measures.height, y.measures.ratio, s), w.off("load error").addClass(pt + (g ? " " + dt : "")).prependTo(u), k(w, n || Fr, r || l.fit || o.fit), i.mpviewer.cache[b] = p.state = "loaded", setTimeout(function() {
                                    u.trigger("f:load").removeClass(st + " " + at).addClass(ot + " " + (g ? lt : ut)), "stage" === t && d("load")
                                }, 5)
                            }

                            function m() {
                                var e = 10;
                                T(function() {
                                    return !Wi || !e-- && !en
                                }, function() {
                                    h()
                                })
                            }
                            if (u) {
                                if (l.video) return Gn(), void u.trigger("f:load").removeClass(st + " " + at).addClass(ot);
                                var g = Vi.fullScreen && l.full && l.full !== l.img && !p.$full && "stage" === t;
                                if (!p.$img || a || g) {
                                    var v = new Image,
                                        w = i(v),
                                        y = w.data();
                                    p[g ? "$full" : "$img"] = w;
                                    var x = "stage" === t ? g ? "full" : "img" : "thumb",
                                        b = l[x],
                                        _ = g ? null : l["stage" === t ? "thumb" : "img"];
                                    if ("navThumb" === t && (u = p.$wrap), !b) return void f();
                                    i.mpviewer.cache[b] ? ! function M() {
                                        "error" === i.mpviewer.cache[b] ? f() : "loaded" === i.mpviewer.cache[b] ? setTimeout(m, 0) : setTimeout(M, 100)
                                    }() : (i.mpviewer.cache[b] = "*", w.on("load", m).on("error", f)), p.state = "", v.src = b
                                }
                            }
                        })
                    }

                    function _n(e) {
                        Or.append(hi.spin().el).appendTo(e)
                    }

                    function Gn() {
                        Or.detach(), hi && hi.stop()
                    }

                    function Dn() {
                        var e = Vi.activeFrame[fn];
                        e && !e.data().state && (_n(e), e.on("f:load f:error", function() {
                            e.off("f:load f:error"), Gn()
                        }))
                    }

                    function Nn(e, t) {
                        on(e, t, function(e, n, r, a, s, l) {
                            a || (a = r[s] = Zi[s].clone(), l = a.data(), l.data = r, "stage" === t ? (r.html && i('<div class="' + gt + '"></div>').append(r._html ? i(r.html).removeAttr("id").html(r._html) : r.html).appendTo(a), o.captions && r.caption && i(D(xt, D(bt, r.caption))).appendTo(a), r.video && a.addClass(Oe).append(Gr.clone()).append('<div class="mpviewer__video"><video loop><source src="' + r.video + '" type="video/mp4"></video>'), tr = tr.add(a)) : "navDot" === t ? jr = jr.add(a) : "navThumb" === t && (l.$wrap = a.children(":first"), Cr = Cr.add(a), a.append(Ir.clone()), r.video && (yn = !0, a.addClass("videothmb").append(Gr.clone()))))
                        })
                    }

                    function On(e, t, n) {
                        return e && e.length && k(e, t, n)
                    }

                    function Pn(e) {
                        on(e, "stage", function(e, t, n, r, a, s) {
                            if (r) {
                                Vr[fn][ct(t)] = r.css(i.extend({
                                    left: Ei ? 0 : h(t, Fr.w, o.margin, wi)
                                }, Ei && c(0))), I(r[0]) && (r.appendTo(er), ii(n.$video));
                                var l = n.fit || o.fit;
                                On(s.$img, Fr, l), On(s.$full, Fr, l)
                            }
                        })
                    }

                    function Ln(e, t) {
                        if ("thumbs" === Ci && !isNaN(e)) {
                            var n = -e,
                                r = -e + Fr.w;
                            Cr.each(function() {
                                var e = i(this),
                                    a = e.data(),
                                    s = a.eq,
                                    o = {
                                        h: Gi
                                    },
                                    l = "cover";
                                o.w = a.w, a.l + a.w < n || a.l > r || On(a.$img, o, l) || t && vn([s], "navThumb", o, l)
                            })
                        }
                    }

                    function Fn(e, t, n) {
                        if (!Fn[n]) {
                            var r = "nav" === n && Ii,
                                a = 0;
                            t.append(e.filter(function() {
                                for (var e, t = i(this), n = t.data(), r = 0, a = pi.length; r < a; r++)
                                    if (n.data === pi[r]) {
                                        e = !0, n.eq = r;
                                        break
                                    } return e || t.remove() && !1
                            }).sort(function(e, t) {
                                return i(e).data().eq - i(t).data().eq
                            }).each(function() {
                                if (r) {
                                    var e = i(this),
                                        t = e.data(),
                                        n = Math.round(Gi * t.data.thumbratio) || Ai;
                                    t.l = a, t.w = n, e.css({
                                        width: n
                                    }), a += n + o.thumbmargin
                                }
                            })), Fn[n] = !0
                        }
                    }

                    function Hn(e) {
                        return e - zr > Fr.w / 3
                    }

                    function qn(e) {
                        return !(ji || Pr + e && Pr - di + e || mi)
                    }

                    function Rn() {
                        qr.ok && (qr.prevent = {
                            "<": qn(0),
                            ">": qn(1)
                        })
                    }

                    function Wn(e) {
                        var t, n, i = e.data();
                        return Ii ? (t = i.l, n = i.w) : (t = e.position().left, n = e.width()), {
                            c: t + n / 2,
                            min: -t + 10 * o.thumbmargin,
                            max: -t + Fr.w - n - 10 * o.thumbmargin
                        }
                    }

                    function Bn(e) {
                        var t = Vi.activeFrame[$i].data();
                        W(Ar, {
                            time: .9 * e,
                            pos: t.l,
                            width: t.w - 2 * o.thumbborderwidth
                        })
                    }

                    function $n(e) {
                        var t = pi[e.guessIndex][$i];
                        if (t) {
                            var n = Er.min !== Er.max,
                                i = n && Wn(Vi.activeFrame[$i]),
                                r = n && (e.keep && $n.l ? $n.l : s((e.coo || Fr.w / 2) - Wn(t).c, i.min, i.max)),
                                a = n && s(r, Er.min, Er.max),
                                o = .9 * e.time;
                            Er.min == a && Sr.hide(), Er.max == a && Tr.hide(), oe >= le && (a = 0), W(Mr, {
                                time: o,
                                pos: a || 0,
                                onEnd: function() {
                                    Ln(a, !0)
                                }
                            }), ni(_r, E(a, Er.min, Er.max)), $n.l = r
                        }
                    }

                    function Vn() {
                        zn($i), $r[$i].push(Vi.activeFrame[$i].addClass(tt))
                    }

                    function zn(e) {
                        for (var t = $r[e]; t.length;) t.shift().removeClass(tt)
                    }

                    function Un(e) {
                        var t = Vr[e];
                        i.each(vi, function(e, n) {
                            delete t[ct(n)]
                        }), i.each(t, function(e, n) {
                            delete t[e], n.detach()
                        })
                    }

                    function Qn(e) {
                        wi = yi = Pr;
                        var t = Vi.activeFrame,
                            n = t[fn];
                        n && (yn === !0 && (n.hasClass("mpviewer__stage__frame--video") ? i("body").addClass("videoframe") : i("body").removeClass("videoframe videoplaying")), zn(fn), $r[fn].push(n.addClass(tt)), e || Vi.show.onEnd(!0), w(er, 0, !0), Un(fn), Pn(vi), tn(), rn())
                    }

                    function Xn(e, t) {
                        e && i.extend(Fr, {
                            width: e.width || Fr.width,
                            height: e.height,
                            minwidth: e.minwidth,
                            maxwidth: e.maxwidth,
                            minheight: e.minheight,
                            maxheight: e.maxheight,
                            ratio: L(e.ratio)
                        }) && !t && i.extend(o, {
                            width: Fr.width,
                            height: Fr.height,
                            minwidth: Fr.minwidth,
                            maxwidth: Fr.maxwidth,
                            minheight: Fr.minheight,
                            maxheight: Fr.maxheight,
                            ratio: Fr.ratio
                        })
                    }

                    function Kn(e, t) {
                        a.trigger(_e + ":" + e, [Vi, t])
                    }

                    function Yn() {
                        clearTimeout(Zn.t), Wi = 1, o.stopautoplayontouch ? Vi.stopAutoplay() : qi = !0
                    }

                    function Zn() {
                        Zn.t = setTimeout(function() {
                            Wi = 0
                        }, sn + an)
                    }

                    function Jn() {
                        qi = !(!mi && !Br)
                    }

                    function ei() {
                        if (clearTimeout(ei.t), !o.autoplay || qi) return void(Vi.autoplay && (Vi.autoplay = !1, Kn("stopautoplay")));
                        Vi.autoplay || (Vi.autoplay = !0, Kn("startautoplay"));
                        var e = Pr,
                            t = Vi.activeFrame[fn].data();
                        T(function() {
                            return t.state || e !== Pr
                        }, function() {
                            ei.t = setTimeout(function() {
                                qi || e !== Pr || Vi.show(ji ? q(!Oi) : ct(Pr + (Oi ? -1 : 1)))
                            }, o.autoplay)
                        })
                    }

                    function ti() {
                        Vi.fullScreen && (Vi.fullScreen = !1, wn = !1, mr.attr("title", "Enter Fullscreen").find("svg").toggle(), 0 != Br && (Ei = !1, Zi.removeClass(Te).addClass(Se)), i("#gallery").css("background", ""), Zt && fullScreenApi.cancel(Qi), Y.removeClass(Me), K.removeClass(Me), a.removeClass(rt).insertAfter(Yi), Fr = i.extend({}, Ri), ii(mi, !0, !0), oi("x", !1), Vi.resize(), vn(vi, "stage"), O(Fi, Li), Kn("fullscreenexit"))
                    }

                    function ni(e, t) {
                        Ni && (e.removeClass(Je + " " + et), t && !mi && e.addClass(t.replace(/^|\s/g, " " + Ze + "--")))
                    }

                    function ii(e, t, n) {
                        t && (i("body").removeClass("videoplaying"), Zi.removeClass(Ie), mi = !1, Qe()), e && e !== mi && (e[0].pause(), Kn("unloadvideo")), n && (Jn(), ei())
                    }

                    function ri(e) {
                        Zi.toggleClass(ke, e)
                    }

                    function ai(e) {
                        if (!Hr.flow) {
                            var t = e ? e.pageX : ai.x,
                                n = t && !qn(Hn(t)) && o.click;
                            ai.p === n || !Ei && o.swipe || !Ji.toggleClass(He, n) || (ai.p = n, ai.x = t)
                        }
                    }

                    function si(e, t) {
                        var n = e.target,
                            a = i(n);
                        mi ? a.parents(".mpviewer__video-close")[0] === Nr && ii(mi, !0, !0) : Kn("stagetap", r, function() {
                            t ? ri() : o.click && Vi.show({
                                index: e.shiftKey || !Hn(e._x) ? "<" : ">",
                                slow: e.altKey,
                                direct: !0
                            })
                        })
                    }

                    function oi(e, t) {
                        Hr[e] = Rr[e] = t
                    }

                    function oi(e, t) {
                        Hr[e] = Rr[e] = t
                    }

                    function li(e, t) {
                        var n = i(this).data().eq;
                        oe < le && (0 == n ? Tr.hide() : Tr.show(), n == di - 1 ? Sr.hide() : Sr.show());
                        var r;
                        r = n < Pr ? 30 : 0, Vi.show({
                            index: n,
                            slow: e.altKey,
                            direct: !0,
                            coo: e._x - _r.offset().left - r,
                            time: t
                        })
                    }

                    function ui() {
                        if (ee(), Ye(), !ui.i) {
                            ui.i = !0;
                            var e = o.startindex;
                            (e || o.hash && n.hash) && (Mi = A(e || n.hash.replace(/^#/, ""), pi, 0 === Vi.index || e, e)), Pr = wi = yi = xi = Mi = Xt(Mi) || 0
                        }
                        di ? (mi && ii(mi, !0), vi = [], Un(fn), Vi.show({
                            index: Pr,
                            time: 0
                        }), Vi.resize()) : Vi.destroy()
                    }

                    function ci() {
                        ci.ok || (ci.ok = !0, Kn("ready"))
                    }
                    K = K || i("html"), Y = Y || i("body");
                    var pi, di, fi, hi, mi, gi, vi, wi, yi, xi, bi, _i, Mi, ji, Ci, Ii, Ti, Si, ki, Ei, Ai, Gi, Di, Ni, Oi, Pi, Li, Fi, Hi, qi, Ri, Wi, Bi, $i, Vi = this,
                        zi = i.now(),
                        Ui = _e + zi,
                        Qi = a[0],
                        Xi = 1,
                        Ki = a.data(),
                        Yi = i(D(it)),
                        Zi = i(D(je)),
                        Ji = i(D(De)).appendTo(Zi),
                        er = (Ji[0], i(D(Pe)).appendTo(Ji)),
                        tr = i(),
                        nr = i(D(kt)).appendTo(Zi),
                        ir = i(D(Et)).appendTo(nr),
                        rr = i(D(At)).appendTo(nr),
                        ar = i(D(Gt)).appendTo(nr),
                        sr = i(D(Dt)).appendTo(ar),
                        or = i(D(Nt)).appendTo(sr),
                        lr = i(D(Ot)).appendTo(sr),
                        ur = i(D(Pt)).appendTo(ar),
                        cr = i(D(Lt)).appendTo(ar),
                        pr = i(D(Ct)),
                        dr = i(D(It)),
                        fr = pr.add(dr).appendTo(Ji),
                        hr = (i(D(Tt)).appendTo(pr), i(D(St)).appendTo(dr), i(D(Ft)).prependTo(Zi)),
                        mr = i(D(Ht)).html('<svg viewBox="0 0 384 384" id="si-ionic-android-expand" width="100%" height="100%"><path d="M332.795 332.8H256V384h128V256h-51.205zm.005-281.595V128H384V0H256v51.205zM51.205 51.2H128V0H0v128h51.205zM51.2 332.795V256H0v128h128v-51.205z"></path></svg><svg style="display:none" viewBox="0 0 384 384" width="100%" height="100%"><path d="M0 307.2h76.795V384H128V256H0v51.2zM76.795 76.8H0V128h128V0H76.795v76.8zM256 384h51.2v-76.8H384V256H256v128zm51.2-307.2V0H256v128h128V76.8h-76.8z"></path></svg>'),
                        gr = i(D(qt)).appendTo(hr).attr("title", "Play").html('<svg viewBox="0 0 473.20001220703125 535.4000244140625" width="100%" height="100%"><path d="M439.7 233.2L61.1 19C27.5 0 0 19.2 0 61.7v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1z"></path></svg><svg style="display:none" viewBox="0 0 512 512" width="100%" height="100%"><path d="M139.6 0H46.5C20.9 0 0 20.9 0 46.5v418.9C0 491.1 20.9 512 46.5 512h93.1c25.7 0 46.5-20.9 46.5-46.5v-419C186.2 20.9 165.3 0 139.6 0zm325.9 0h-93.1c-25.7 0-46.5 20.9-46.5 46.5v418.9c0 25.7 20.9 46.5 46.5 46.5h93.1c25.7 0 46.5-20.9 46.5-46.5V46.5C512 20.9 491.1 0 465.5 0z"></path></svg>'),
                        vr = i(D(Rt)).appendTo(hr).attr("title", "Show All Thumbs").html('<svg viewBox="0 0 512 512" width="100%" height="100%"><path d="M186.2 139.6h139.6V0H186.2v139.6zM372.4 0v139.6H512V0H372.4zM0 139.6h139.6V0H0v139.6zm186.2 186.2h139.6V186.2H186.2v139.6zm186.2 0H512V186.2H372.4v139.6zM0 325.8h139.6V186.2H0v139.6zM186.2 512h139.6V372.4H186.2V512zm186.2 0H512V372.4H372.4V512zM0 512h139.6V372.4H0V512z"></path></svg>'),
                        wr = (i(D(Vt)), i(D(Wt)).appendTo(Ji)),
                        yr = i(D($t)).appendTo(wr),
                        xr = i(D(Bt)).appendTo(wr),
                        br = i(D(Re)),
                        _r = i(D(qe)).appendTo(br),
                        Mr = i(D(We)).appendTo(_r),
                        jr = i(),
                        Cr = i(),
                        Ir = i(D(_t)),
                        Tr = i(D(Mt)).appendTo(br),
                        Sr = i(D(jt)).appendTo(br),
                        kr = er.data(),
                        Er = Mr.data(),
                        Ar = i(D(mt)).appendTo(Mr),
                        Gr = i(D(wt)).html('<svg viewBox="0 0 473.20001220703125 535.4000244140625" width="100%" height="100%"><path d="M439.7 233.2L61.1 19C27.5 0 0 19.2 0 61.7v412c0 42.5 27.5 61.7 61.1 42.7l378.6-214.1c33.5-19.1 33.5-50.1 0-69.1z"></path></svg>'),
                        Dr = i(D(yt)).appendTo(Ji).html('<svg viewBox="0 0 391.20001220703125 391.20001220703125" width="100%" height="100%"><path d="M377.1 326.2L246.5 195.6 377.1 65c14.1-14.1 14.1-36.8 0-50.9C363 0 340.3 0 326.2 14.1L195.6 144.7 65 14.1C50.9 0 28.2 0 14.1 14.1 0 28.2 0 50.9 14.1 65l130.6 130.6L14.1 326.2C0 340.3 0 363 14.1 377.1c14.1 14.1 36.8 14.1 50.9 0l130.6-130.6 130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"></path></svg>'),
                        Nr = Dr[0],
                        Or = i(D(zt)),
                        Pr = !1,
                        Lr = {},
                        Fr = {},
                        Hr = {},
                        qr = {},
                        Rr = {},
                        Wr = {},
                        Br = !0,
                        $r = {},
                        Vr = {},
                        zr = 0,
                        Ur = [];
                    Zi[fn] = i(D(Ne)), Zi[mn] = i(D(Ve + " " + Ue, D(ht))), Zi[hn] = i(D(Ve + " " + ze, D(ft))), $r[fn] = [], $r[mn] = [], $r[hn] = [], Vr[fn] = {}, Zi.addClass(Yt ? Ce : wrapCss2Class), Ki.mpviewer = this, z(ir, {
                        onStart: Yn,
                        onEnd: function Xr(e) {
                            function Xr() {
                                function t() {
                                    W(ir, {
                                        time: 400,
                                        pos: 0,
                                        onEnd: function() {}
                                    })
                                }
                                if ("mpviewer-pagination-next" == e.$target.attr("class")) 1 == ge ? C(0, 0, 400) : C(400, -300, 400);
                                else if ("mpviewer-pagination-prev" == e.$target.attr("class")) 1 == ge ? _(0, 0, 400) : _(400, 300, 400);
                                else {
                                    if (!e.moved && e.$target.hasClass("thumbradius")) {
                                        Vi.stopVideo();
                                        var n = e.$target.parent().attr("id");
                                        1 == ae && Vi.togglethumbs(), n = n.substr(1) - 1, Vi.show(n + 1)
                                    }
                                    var i = Math.ceil(Mn / xn) - 1,
                                        r = Math.floor(Mn / xn) * xn,
                                        a = !1,
                                        s = !1,
                                        o = e.$target.parent().attr("id");
                                    a = e.$target.hasClass(i), s = e.$target.hasClass(0), 1 == de && (s = !0), de == i + 1 && (a = !0), o && (o.substring(1) < xn && (s = !0), o.substring(1) >= r && (a = !0));
                                    e.newPos > 111 && 1 != s ? 1 == e.$target.hasClass("mpviewer-thumbnails") && Mn < xn ? t() : _(400, 300) : e.newPos < -111 && 1 != a ? 1 == e.$target.hasClass("mpviewer-thumbnails") ? t() : C(400, -300, 100) : t()
                                }
                            }
                            Zn(), Xr()
                        },
                        timeLow: .5,
                        timeHigh: 2,
                        friction: 5,
                        $wrap: nr
                    });
                    var Qr = !1;
                    Vi.togglethumbs = function() {
                        0 == Qr ? (Qr = !0, nr.hide().css({
                            background: bn,
                            height: "auto"
                        })) : (i("#page1").hide(), nr.animate({
                            left: -ue
                        }, 400, function() {
                            V()
                        }), Qr = !1, i(e).width() <= 430 && nr.hide()), 1 == ae ? (ae = !1, i("#thb").remove(), rr.empty(), i("#gallery").removeClass("fullpagethumbs")) : (ae = !0, i("#gallery").addClass("fullpagethumbs")), ir.empty(), b()
                    }, nr.on("click", ".mpviewer-togglethumbs", function() {
                        nr.animate({
                            left: -ue
                        }, 400, function() {
                            Vi.togglethumbs()
                        })
                    }), nr.on("click", ".mpviewer-Gofullscreen", function() {
                        Vi[(Vi.fullScreen ? "cancel" : "request") + "FullScreen"]()
                    }), Tr.on("click", function() {
                        var t = i(e).width(),
                            n = t - 100,
                            r = l(Mr),
                            r = Math.abs(r) - n;
                        Sr.show(), r < 0 && (r = 0, Tr.hide()), Mr.css(u(-r)), Ln(-r, !0)
                    }), Sr.on("click", function() {
                        var t = i(e).width(),
                            n = t - 125,
                            r = l(Mr),
                            r = Math.abs(r) + n;
                        Tr.show(), le - n <= r && (r = le - (n + 15), Sr.hide()), Mr.css(u(-r)), Ln(-r, !0)
                    });
                    Zi.idleTimer(5800), Zi.on("idle.idleTimer", function() {
                        return ae !== !0 && qi !== !0 && Br !== !0 && void(wn !== !0 ? (i(this).addClass("mpviewer__wrap--no-controls"), ie = !0, Vi.resize()) : wn = !1)
                    }), Zi.on("active.idleTimer", function() {
                        return ae !== !0 && qi !== !0 && Br !== !0 && (i(this).removeClass("mpviewer__wrap--no-controls"), ie = !1, void Vi.resize())
                    }), mr.on("click", function() {
                        Vi[(Vi.fullScreen ? "cancel" : "request") + "FullScreen"]()
                    }), gr.on("click", function() {
                        0 != Br ? (Ei = "crossfade", Zi.removeClass(Se).addClass(Te), Vi.show(">"), Vi.startAutoplay(3e3), gr.attr("title", "Pause").find("svg").toggle()) : (0 == wn && (Ei = !1, Zi.removeClass(Te).addClass(Se), tr.find(D).removeClass("mpviewer__fade-front mpviewer__fade-rear"), Vi.resize()), Vi.stopAutoplay(), gr.attr("title", "Play").find("svg").toggle())
                    }), vr.click(function() {
                        nr.animate({
                            left: -ue
                        }, 300, function() {
                            Vi.togglethumbs()
                        })
                    }), Zi.on("click", ".mpviewer__stage__shaft .mpviewer__video-play", function(e) {
                        e.preventDefault(), Vi.playVideo()
                    }), Zi.on("click", ".thumbradius .mpviewer__video-play", function(e) {
                        var t = i(e.target).parents(".thumbradius").attr("id");
                        t = t.substr(1) - 1, Vi.show(t + 1)
                    }), Vi.startAutoplay = function(e) {
                        return Vi.autoplay ? this : (qi = Br = !1, Xe(e || o.autoplay), ei(), this)
                    }, Vi.stopAutoplay = function() {
                        return Vi.autoplay && (qi = Br = !0, ei()), this
                    }, Vi.show = function(e) {
                        var t;
                        "object" !== ("undefined" == typeof e ? "undefined" : "undefined" == typeof e ? "undefined" : _typeof2(e)) ? (t = e, e = {}) : t = e.index, t = ">" === t ? yi + 1 : "<" === t ? yi - 1 : "<<" === t ? 0 : ">>" === t ? di - 1 : t, t = isNaN(t) ? A(t, pi, !0) : t, t = "undefined" == typeof t ? Pr || 0 : t, Vi.activeIndex = Pr = Xt(t), bi = Kt(Pr), _i = Jt(Pr), vi = [Pr, bi, _i], yi = ji ? t : Pr;
                        var n = Math.abs(xi - yi),
                            i = y(e.time, function() {
                                return Math.min(Di * (1 + (n - 1) / 12), 2 * Di)
                            }),
                            r = e.overPos;
                        e.slow && (i *= 10), Vi.activeFrame = gi = pi[Pr], ii(mi, gi.i !== pi[ct(wi)].i), Nn(vi, "stage"), Pn(en ? [yi] : [yi, Kt(yi), Jt(yi)]), oi("go", !0), Kn("show", {
                            user: e.user,
                            time: i
                        });
                        var a = Vi.show.onEnd = function(t) {
                            a.ok || (a.ok = !0, Dn(), vn(vi, "stage"), t || Qn(!0), Kn("showend", {
                                user: e.user
                            }), oi("go", !1), Rn(), ai(), Jn(), ei())
                        };
                        if (Ei) {
                            var l = gi[fn],
                                u = Pr !== xi ? pi[xi][fn] : null;
                            B(l, u, tr, {
                                time: i,
                                method: o.transition,
                                onEnd: a
                            }, Ur)
                        } else W(er, {
                            pos: -h(yi, Fr.w, o.margin, wi),
                            overPos: r,
                            time: i,
                            onEnd: a,
                            _001: !0
                        });
                        if (Ci) {
                            Vn();
                            var c = vt(Pr + s(yi - xi, -1, 1));
                            $n({
                                time: i,
                                coo: c !== Pr && e.coo,
                                guessIndex: "undefined" != typeof e.coo ? c : Pr
                            }), Ii && Bn(i)
                        }
                        return Hi = "undefined" != typeof xi && xi !== Pr, xi = Pr, hashURL === !0 && o.hash && Hi && !Vi.eq && S(gi.id || Pr + 1), b(), yr.html(Pr + 1), this
                    }, Vi.requestFullScreen = function() {
                        return Si && !Vi.fullScreen && (Li = Ut.scrollTop(), Fi = Ut.scrollLeft(), O(0, 0), oi("x", !0), Ri = i.extend({}, Fr), a.addClass(rt).appendTo(Y.addClass(Me)), K.addClass(Me), ii(mi, !0, !0), Vi.fullScreen = !0, i("#gallery").css("background", bn), wn = !0, Ei = "crossfade", Zi.removeClass(Se).addClass(Te), mr.attr("title", "Exit Fullscreen").find("svg").toggle(), ki && (fullScreenApi.request(Qi), wn = !0), Vi.resize(), vn(vi, "stage"), Kn("fullscreenenter")), this
                    }, Vi.cancelFullScreen = function() {
                        return ki && fullScreenApi.is() ? fullScreenApi.cancel(t) : ti(), this
                    }, t.addEventListener && t.addEventListener(fullScreenApi.event, function() {
                        !pi || fullScreenApi.is() || mi || ti()
                    }, !1), Vi.resize = function(t) {
                        if ("1" == re ? (re = "2", J = br.detach()) : "2" == re && (re = ""), 1 == ae) {
                            var n = 86 * Mn / Math.floor(se / 86) + 85;
                            rr.width(n).css({
                                transition: "0ms",
                                transform: "translate3d(0px, 0, 0)"
                            })
                        }
                        if (ne = !0, b(), ne = !1, !pi) return this;
                        var r, a, o, u;
                        if (r = i(e).innerHeight(), u = i(e).innerWidth() - 15, "2" == re && Zi.append(J), a = i(over).length > 0 ? i(over).outerHeight() : 0, o = i(below).length > 0 ? i(below).outerHeight() : 0, 1 == Vi.fullScreen && (a = 0, o = 0), r = parseInt(r) - parseInt(a) - parseInt(o) - 3, 1 == ie && (nr.hide(), br.hide(), Ji.css({
                                marginRight: 11,
                                marginLeft: 0
                            })), "side" != thumbs || 1 == ie) {
                            1 != ie && br.show();
                            var c = 300,
                                h = Math.max(r, c);
                            Ji.css({
                                width: u,
                                height: h - (Ci ? _r.height() : 0)
                            }), se = Ji.height(), oe = Ji.width()
                        } else {
                            if (u >= 782) {
                                var c = 400,
                                    m = -311,
                                    h = Math.max(r, c);
                                Ji.css({
                                    width: u + m,
                                    marginRight: 11,
                                    marginLeft: 300,
                                    height: h
                                }), er.css({
                                    marginBottom: "",
                                    height: ""
                                }), nr.show(), J = br.detach()
                            } else {
                                var c = 323,
                                    m = 0;
                                br.show(), Zi.append(J), h = Math.max(r, c), Ji.css({
                                    width: u + m,
                                    marginRight: 0,
                                    marginLeft: 0,
                                    height: parseInt(h) - (Ci ? _r.height() : 0)
                                }), 1 != ae && (nr.hide(), ir.empty())
                            }
                            se = Ji.height(), oe = Ji.width()
                        }
                        var g = arguments[1] || 0,
                            v = arguments[2],
                            n = oe,
                            w = Ji.height(),
                            y = n / w,
                            x = Ut.height() - (Ci ? _r.height() : 0);
                        if (f(n) && (Zi.css({
                                width: u,
                                minWidth: u,
                                maxWidth: u
                            }), n = Fr.w = oe, w = d(w) / 100 * x || p(w), w = w || y && n / y)) {
                            if (n = Math.round(n), w = Fr.h = Math.round(s(w, d(Fr.minheight) / 100 * x || p(Fr.minheight), d(Fr.maxheight) / 100 * x || p(Fr.maxheight))), Qn(), Ji.addClass(Le).stop().animate({
                                    width: n,
                                    height: w
                                }, g, function() {
                                    Ji.removeClass(Le)
                                }), Ci) {
                                if (n >= le) {
                                    var _ = (le + 92) / 2;
                                    Tr.hide(), Sr.hide()
                                } else {
                                    var _ = n / 2,
                                        o = l(Mr);
                                    n -= 92, 0 != o && Tr.show(), Sr.show()
                                }
                                var M = le + 92,
                                    j = -1;
                                n <= le && (j = 46, M = n), br.css({
                                    width: "100%",
                                    maxWidth: le + 92,
                                    left: "50%",
                                    marginLeft: -_,
                                    position: "relative"
                                }), _r.stop().animate({
                                    width: M
                                }, g).css({
                                    marginLeft: j
                                }), $n({
                                    guessIndex: Pr,
                                    time: g,
                                    keep: !0
                                }), Ii && Fn.nav && Bn(g)
                            }
                            Pi = v || !0, ci()
                        }
                        return zr = Ji.offset().left, this
                    }, Vi.setOptions = function(e) {
                        return i.extend(o, e), ui(), this
                    }, Vi.destroy = function() {
                        return Vi.cancelFullScreen(), Vi.stopAutoplay(), pi = Vi.data = null, Z(), vi = [], Un(fn), this
                    }, Vi.playVideo = function() {
                        var e = Vi.activeFrame;
                        e.video;
                        return mi = i(e.$stageFrame[0]).find("video"), i("body").addClass("videoplaying"), Qe(), Zi.addClass(Ie), mi[0].play(), Kn("loadvideo"), this
                    }, Vi.stopVideo = function() {
                        return ii(mi, !0, !0), this
                    }, Ji.on("mousemove", ai), Hr = z(er, {
                        onStart: Yn,
                        onMove: function(e, t) {
                            ni(Ji, t.edge)
                        },
                        onTouchEnd: Zn,
                        onEnd: function(e) {
                            ni(Ji);
                            var t = (nn && !Bi || e.touch) && o.arrows;
                            if (e.moved || t && e.pos !== e.newPos) {
                                var n = m(e.newPos, Fr.w, o.margin, wi);
                                Vi.show({
                                    index: n,
                                    time: Ei ? Di : e.time,
                                    overPos: e.overPos,
                                    user: !0
                                })
                            } else e.aborted || si(e.startEvent, t)
                        },
                        getPos: function() {
                            return -h(yi, Fr.w, o.margin, wi)
                        },
                        _001: !0,
                        timeLow: 1,
                        timeHigh: 1,
                        friction: 2,
                        select: "." + nt + ", ." + nt + " *",
                        $wrap: Ji
                    }), Rr = z(Mr, {
                        onStart: Yn,
                        onMove: function(e, t) {
                            ni(_r, t.edge)
                        },
                        onTouchEnd: Zn,
                        onEnd: function Kr(e) {
                            function Kr() {
                                $n.l = e.newPos, Jn(), ei(), Ln(e.newPos, !0)
                            }
                            if (e.moved) e.pos !== e.newPos ? (W(Mr, {
                                time: e.time,
                                pos: e.newPos,
                                overPos: e.overPos,
                                onEnd: Kr
                            }), oe <= le && (e.newPos == Er.min ? Sr.hide() : Sr.show(), e.newPos == Er.max ? Tr.hide() : Tr.show()), Ln(e.newPos), Ni && ni(_r, E(e.newPos, Er.min, Er.max))) : Kr();
                            else {
                                var t = e.$target.closest("." + Ve, Mr)[0];
                                t && li.call(t, e.startEvent)
                            }
                        },
                        timeLow: .5,
                        timeHigh: 2,
                        friction: 5,
                        $wrap: _r
                    }), qr = R(Ji, {
                        shift: !0,
                        onEnd: function(e, t) {
                            Yn(), Zn(), Vi.show({
                                index: t,
                                slow: e.altKey
                            })
                        }
                    }), Wr = R(_r, {
                        onEnd: function(e, t) {
                            Yn(), Zn();
                            var n = w(Mr) + .25 * t;
                            Mr.css(u(s(n, Er.min, Er.max))), Ni && ni(_r, E(n, Er.min, Er.max)), Wr.prevent = {
                                "<": n >= Er.max,
                                ">": n <= Er.min
                            }, clearTimeout(Wr.t), Wr.t = setTimeout(function() {
                                Ln(n, !0)
                            }, an), Ln(n)
                        }
                    }), Zi.hover(function() {
                        setTimeout(function() {
                            Wi || (Bi = !0, ri(!Bi))
                        }, 0)
                    }, function() {
                        Bi && (Bi = !1, ri(!Bi))
                    }), G(fr, function(e) {
                        F(e), Vi.show({
                            index: fr.index(this) ? ">" : "<",
                            slow: e.altKey,
                            user: !0
                        })
                    }, {
                        onStart: function() {
                            Yn(), Hr.control = !0
                        },
                        onTouchEnd: Zn,
                        tail: Hr
                    }), i.each("load push pop shift unshift reverse sort splice".split(" "), function(e, t) {
                        Vi[t] = function() {
                            return pi = pi || [], "load" !== t ? Array.prototype[t].apply(pi, arguments) : arguments[0] && "object" === _typeof(arguments[0]) && arguments[0].length && (pi = N(arguments[0])), ui(), Vi
                        }
                    }), ui()
                }, i.fn.mpviewer = function(t) {
                    return this.each(function() {
                        var n = this,
                            r = i(this),
                            a = r.data(),
                            s = a.mpviewer;
                        s ? s.setOptions(t) : T(function() {
                            return !C(n)
                        }, function() {
                            a.urtext = r.html(), new i.mpviewer(r, i.extend({}, {
                                width: null,
                                minwidth: null,
                                maxwidth: "100%",
                                height: null,
                                minheight: null,
                                maxheight: null,
                                ratio: null,
                                margin: un,
                                glimpse: 0,
                                nav: "dots",
                                navposition: "bottom",
                                thumbwidth: cn,
                                thumbheight: cn,
                                thumbmargin: un,
                                thumbborderwidth: un,
                                allowfullscreen: "native",
                                fit: "contain",
                                transition: "slide",
                                transitionduration: sn,
                                captions: !0,
                                hash: !0,
                                startindex: 0,
                                loop: !0,
                                autoplay: !1,
                                stopautoplayontouch: !0,
                                keyboard: !0,
                                arrows: !0,
                                click: !0,
                                swipe: !0,
                                trackpad: !0,
                                direction: "ltr",
                                shadows: !0,
                                spinner: null
                            }, e.mpviewerDefaults, t, a))
                        })
                    })
                }, i.mpviewer.instances = [], i.mpviewer.cache = {}, i.mpviewer.measures = {}, i = i || {}, i.mpviewer = i.mpviewer || {}, "slider" == thumbs) {
                var ue, ce, pe, Pn, Ln, Fn, Hn, qn = function(e) {
                        var e = e,
                            t = new Array,
                            n = si,
                            i = n - 4,
                            r = n + 4;
                        Wn(i, r, n, t, e)
                    },
                    Rn = function(e, t, n, r) {
                        for (var a = [], s = 0; s < Mn; s++) {
                            var o = i('<div id="g' + (s + 1) + '" class="inactive_image"  style="left:' + oe + "px; position:absolute; overflow:hidden; margin-right:" + ai + "px; float:; width:" + Widths[s] + 'px;" ></div>');
                            li[s] = o, s == si && o.toggleClass(), s >= e && s <= t && (r.push(s), a.push(o))
                        }
                        ni.append(a)
                    },
                    Wn = function(e, n, r, a, s) {
                        if (ni[0].firstChild) {
                            var o = i(ni.find("div").first()).attr("id").substr(1) - 2,
                                l = i(ni.find("div").last()).attr("id").substr(1);
                            "prev" == s ? o != -1 && (ni.prepend(li[o]), a.push(o), l - r >= 4 && li[l - 1].remove()) : l != Mn && l - 4 == r && (ni.append(li[l]), a.push(l), o + 5 <= r && 1 != looping && li[o + 1].remove())
                        } else Rn(e, n, r, a);
                        var u;
                        i(t).width() > 1100 && (u = "large");
                        for (var c = 0; c < a.length; c++) {
                            var p = a[c];
                            if ("large" == u) var d = mpviewer_album[p].large;
                            else var d = mpviewer_album[p].img;
                            var f = parseInt(p, 10) + 1,
                                h = i('<img style="width:100%; height:100%; display:none" src="' + d + ' " >');
                            h[0].onload = function() {
                                i(this).show(), Vn()
                            }, h.attr("src", d);
                            var m;
                            m = i('<span class="caption" style="width:100%; height:100%; position:absolute; top:0%; left:0%"><p> ' + mpviewer_album[p].caption + "</p></span>"), i("#g" + f).append(h, m)
                        }
                    },
                    Bn = function() {
                        return "ontouchstart" in e || "onmsgesturechange" in e
                    },
                    $n = function(e) {
                        i("#gallery").toggleClass(ke, e)
                    },
                    Vn = function() {
                        oi++, 4 == oi && zn()
                    },
                    zn = function(t) {
                        var n, r, a = 0,
                            s = i(e).width();
                        n = i(over).length > 0 ? i(over).outerHeight() : 0, r = i(below).length > 0 ? i(below).outerHeight() : 0;
                        var o = Math.max(i(e).height() - n - r, 258);
                        i("#minimal_picture_viewer").height(o - 5), ni.width(s + 100);
                        for (var l = 0; l < Mn; l++) {
                            var u = Ratio[l],
                                c = o,
                                p = u * c;
                            p >= s && (p = s, c = p / u), p / u > o && (p = u * o, c = o);
                            var d = (o - c) / 2;
                            li[l].css({
                                background: "none",
                                width: p,
                                border: l,
                                height: c - 5,
                                left: a,
                                marginTop: d
                            }), Widths[l] = p, a = parseInt(a, 10) + parseInt(Widths[l], 10) + parseInt(2 * ai, 10), ni.width(ni.width() + p + 2 * ai)
                        }
                        oi >= 2 && (ei(), i("#gallery").fadeTo("slow", 1)), t && ei()
                    },
                    Un = function() {
                        for (var e = 0; e < Cn; e++) li[e].addClass("inactive_image"), e == si && li[e].removeClass("inactive_image");
                        1 == ui && S(si), 0 == si ? i("#left-arrow").hide() : i("#left-arrow").show()
                    },
                    Qn = function(t) {
                        1 == vn && (clearInterval(ee), vn = !1);
                        var n = t || 1;
                        if (0 == si) return !0;
                        for (var r = "prev", a = 0, s = 0; s < si - n; s++) a += Widths[s] + 2 * ai;
                        var o = i(e).width() / 2,
                            l = o - Widths[si - n] / 2;
                        a = l - a, qn(r), ti(a, 400), 2 == n ? (si--, qn(r)) : 3 == n && (si--, qn(r), si--, qn(r)), si--, Un()
                    },
                    Xn = function(t, n) {
                        "slide" != t && (clearInterval(ee), vn = !1);
                        var r = n || 1;
                        if (si + r > Cn) {
                            si = Cn - 1, oi = Cn - 1;
                            for (var a = 0, s = 0; s < Cn - 1; s++) a += Widths[s] + 2 * ai;
                            var o = i(e).width() / 2,
                                l = o - Widths[Cn - 1] / 2,
                                a = l - a - ai;
                            return ti(a, 200), !1
                        }
                        if (si + 1 != Cn) {
                            for (var a = 0, s = 0; s < si + r; s++) a += Widths[s] + 2 * ai;
                            var o = i(e).width() / 2,
                                l = o - Widths[si + r] / 2;
                            a = l - a, qn(), 2 == r ? (si++, qn()) : 3 == r && (si++, qn(), si++, qn()), ti(a, 400), si++, Un()
                        } else {
                            si = 0, oi = 0, e.location.hash = "", n = 1;
                            var u = i(ni.find("div").first()).attr("id").substr(1);
                            if (1 == looping && 1 == u) {
                                var c = (Widths[0] + 2 * ai) / 2,
                                    o = i(e).width() / 2;
                                c = o - c - ai, ti(c, 1e3, Jn), Yt && setTimeout(function() {
                                    Jn()
                                }, 1001)
                            } else Zn()
                        }
                    },
                    Kn = function() {
                        Xn("slide")
                    },
                    Yn = function() {
                        0 == vn ? (vn = !0, ee = setInterval(Kn, 3500)) : (clearInterval(ee), vn = !1)
                    },
                    Zn = function() {
                        i("#left-arrow").hide(), ni.empty(), qn()
                    },
                    Jn = function() {
                        i("#left-arrow").hide(), Un()
                    },
                    ei = function() {
                        var t = 0;
                        si < 0 && (si = 0, Un());
                        for (var n = 0; n < si; n++) t += Widths[n] + 2 * ai;
                        var r = i(e).width() / 2,
                            a = r - Widths[si] / 2,
                            t = a - t - ai;
                        ti(t, 200), 1 == ui && S(si + 1)
                    },
                    ti = function(e, t, n) {
                        Yt ? ni.css({
                            transition: "" + t + "ms",
                            transform: "translate3d(" + e + "px, 0, 0)"
                        }) : ni.stop(!0, !0).animate({
                            left: e
                        }, t, function() {
                            n && n()
                        })
                    },
                    Mn = mpviewer_album.length,
                    Cn = Mn,
                    ni = i("<div></div>"),
                    ii = i('<div class="mpviewer-image-nav-left left-arrow"><div id="left-arrow" style="display:none" class="mpviewer-image-nav-left-arrow left-arrow"></div></div>'),
                    ri = i('<div class="mpviewer-image-nav-right right-arrow"><div id="right-arrow" class="mpviewer-image-nav-right-arrow right-arrow"></div></div>'),
                    ai = 5,
                    si = 0,
                    oi = 0,
                    li = new Array,
                    ui = !1;
                i("#gallery").empty().mouseleave(function() {
                    i(this).addClass("mpviewer__wrap--no-controls")
                }).append(ni, ii, ri, _n).addClass("minimalAutoViewer mpviewer__wrap--no-controls ").css({
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "relative",
                    opacity: "0",
                    "z-index": "5"
                }), ni.css({
                    position: "absolute",
                    "z-index": "11"
                }), Bn() && (Fn = !0), i("#gallery").hover(function() {
                    setTimeout(function() {
                        Fn || (Hn = !0, $n(!Hn))
                    }, 0)
                }, function() {
                    Hn && (Hn = !1, $n(!Hn))
                }), i("#gallery").idleTimer(3e3), i("#gallery").on("idle.idleTimer", function() {
                    i(this).addClass("mpviewer__wrap--no-controls")
                }), i("#gallery").on("active.idleTimer", function() {
                    i(this).removeClass("mpviewer__wrap--no-controls")
                }), i(e).resize(function() {
                    zn(!0)
                }), i(t).keydown(function(e) {
                    37 == e.which && Qn(), 39 == e.which && Xn(), 32 == e.which && Yn()
                }), si = 0, Y = i("body"), z(ni, {
                    onStart: function() {
                        Pn = l(ni), Yn()
                    },
                    onMove: function(e, t) {},
                    onEnd: function fi(t) {
                        function fi() {
                            Ln = (Widths[0] + 2 * ai) / 2;
                            var n = i(e).width() / 2;
                            if (Ln = n - Ln - ai, t.pos > parseInt(Ln) && ti(parseInt(Ln), 200), !t.moved && t.$target.hasClass("right-arrow")) return Xn(), !1;
                            if (!t.moved && t.$target.hasClass("left-arrow")) return Qn(), !1;
                            if (!t.moved) return !1;
                            var r, a;
                            parseInt(Pn) < t.pos ? (t.pos + Widths[0] / 2 > n && (t.pos = 10 * t.pos), r = Math.abs(t.pos) - Math.abs(parseInt(Pn)), a = Math.abs(r) < Widths[si] / 2 + Widths[si - 1] ? 1 : Math.abs(r) < Widths[si] / 2 + Widths[si - 1] + Widths[si - 2] ? 2 : 3, 1 == si && a >= 2 && (a = 1), 2 == si && 3 == a && (a = 2), Qn(a)) : (r = Math.abs(parseInt(Pn)) - Math.abs(t.pos), 0 == si && t.pos < 0 && (r = Math.abs(t.pos) + i(e).width() / 2 - Widths[0]), a = Math.abs(r) < Widths[si] / 2 + Widths[si + 1] ? 1 : Math.abs(r) < Widths[si] / 2 + Widths[si + 1] + Widths[si + 2] ? 2 : 3, si == Cn - 3 && 3 == a && (a = 2), Xn(!1, a))
                        }
                        fi()
                    },
                    timeLow: .5,
                    timeHigh: 2,
                    friction: 5,
                    $wrap: i("#gallery")
                }), i("footer").css("opacity", 0), i("#minimal_picture_viewer").css({
                    position: "relative",
                    right: -8e3
                }), qn(), i("#minimal_picture_viewer").animate({
                    right: 0
                }, 800, function() {
                    i("footer").fadeTo("slow", 1, function() {
                        setTimeout(function() {
                            Yn()
                        }, 700)
                    })
                }), e.onload = function(e) {
                    zn()
                }
            } else {
                var ci, pi = "bottom";
                "none" != thumbs ? (ci = "dots" != thumbs ? "thumbs" : "dots", "top" == thumbs && (pi = "top")) : ci = "false";
                var di = i("#gallery").mpviewer({
                    loop: looping,
                    data: mpviewer_album,
                    nav: ci,
                    navposition: pi
                });
                Z = di.data("mpviewer"), e.mpviewerAPI = Z
            }
        }
    }(window, document, location, window.jQuery);