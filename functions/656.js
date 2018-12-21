const function656 = function (t, e, i) {
    "use strict";
    var n = this && this.__extends || function () {
        var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
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
    Object.defineProperty(e, "__esModule", { value: !0 });
    var o = i(303), r = i(1), s = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._ImageManager = e, n._ev = i, n._onNext = function () {
                n.messageBox.interactive = !1, n._ev.emit("tutorial-next-scene")
            }, n.alpha = 0, n.messageBox = new o.MessageBoxView(n._ImageManager, n._ev), n.messageBox.message.text = "", n.messageBox.on(r.EventType.CLICK, n._onNext), n.addChild(n.messageBox), n
        }

        return n(e, t), e.prototype.start = function () {
            var t = this;
            this.messageBox.start(), createjs.Tween.get(this).to({ alpha: 1 }, 200, createjs.Ease.linear).call(function () {
                t.messageBox.interactive = !0, t.messageBox.buttonMode = !0, t._ev.emit("tutorial-play-voice", "tutorial", "021", function () {
                    t._ev.emit("tutorial-play-voice", "tutorial", "022")
                }), t.messageBox.flashText("\u63d0\u7763\u3001\u304a\u5f85\u3061\u3057\u3066\u3044\u307e\u3057\u305f\uff01\n\u300c\u8266\u968a\u3053\u308c\u304f\u3057\u3087\u3093\u2014\u8266\u3053\u308c\u2014\u300d\u306e\u4e16\u754c\u3078\u3088\u3046\u3053\u305d\u2014\u2014\u3002")
            })
        }, e.prototype.dispose = function () {
            this.messageBox.dispose(), this.messageBox.off(r.EventType.CLICK, this._onNext)
        }, e
    }(PIXI.Container);
    e.SceneSelectShipView = s
}