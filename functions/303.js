const function303 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
        };
        return function (e, i) {
            function n() {
                this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
        }
    }();
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(4),
        r = i(82),
        s = i(5),
        a = i(106),
        _ = function (t) {
            function e(e, i) {
                var n = t.call(this) || this;
                n._ImageManager = e, n._ev = i;
                var _ = new PIXI.Sprite(n._ImageManager.use(a.IMAGE_FILE.MSG_BOX));
                n.btn = new PIXI.Container;
                var l = new PIXI.Sprite(r.TUTORIAL_MAIN.getTexture(3));
                return l.anchor.set(.5, .5), n._btnOuter = new PIXI.Sprite(r.TUTORIAL_MAIN.getTexture(4)), n._btnOuter.anchor.set(.5, .5), n.btn.addChild(l, n._btnOuter), n.btn.width = n._btnOuter.width, n.btn.height = n._btnOuter.height, n.btn.position.set(s.default.width - Math.floor(n._btnOuter.width / 2) - 20, 170), n.message = new o.TextBox(27, 16777215), n.message.text = "", n.message.position.set(250, 85), n.position.set(0, 465), n.addChild(_, n.message, n.btn), n
            }
            return n(e, t), e.prototype.start = function () {
                createjs.Tween.get(this._btnOuter, {
                    loop: !0
                }).to({
                    rotation: 2 * Math.PI
                }, 6e3, createjs.Ease.linear)
            }, e.prototype.flashText = function (t, e) {
                var i = this;
                void 0 === e && (e = 40);
                var n = createjs.Tween.get(null, {
                    loop: !0
                }).wait(e).call(function () {
                    var e = t.substr(0, 1);
                    " " == i.message.text ? i.message.text = e : i.message.text += e, t = t.substr(1), 0 == t.length && (n.setPaused(!0), n = null)
                })
            }, e.prototype.dispose = function () {
                createjs.Tween.removeTweens(this._btnOuter)
            }, e
        }(PIXI.Container);
    e.MessageBoxView = _
}