const function587 = function (t, e, i) {
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
    var o = i(1),
        r = i(196),
        s = i(197),
        a = i(279),
        _ = i(280),
        l = function (t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return n(e, t), e.prototype.initialize = function () {
                this._background.texture = r.PORT_SKIN_3.getTexture(0), this._background.position.set(-40, -49), this._content.initialize(), this._content.position.set(67, 58), this._hit_area.interactive = !0, this._hit_area.buttonMode = !0, this._hit_area.on(o.EventType.CLICK, this._onClick), this._startAnimation()
            }, e
        }(a.CircleContentSkin2);
    e.CircleContentSkin3 = l;
    var u = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e._background = new PIXI.Sprite, e.addChild(e._background), e._content = new c, e.addChild(e._content), e._hit_area = new PIXI.Graphics, e._hit_area.beginFill(0, 0), e._hit_area.drawCircle(0, 0, 95), e._hit_area.endFill(), e._hit_area.position.set(68, 60), e.addChild(e._hit_area), e
        }
        return n(e, t), e.prototype.initialize = function () {
            this._background.texture = s.PORT_SKIN_3K.getTexture(2), this._background.position.set(-40, -49), this._content.initialize(), this._content.position.set(67, 58), this._hit_area.interactive = !0, this._hit_area.buttonMode = !0, this._hit_area.on(o.EventType.CLICK, this._onClick), this._startAnimation()
        }, e
    }(l);
    e.CircleContentSkin3k = u;
    var c = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return n(e, t), e.prototype._getTexture = function (t) {
            return 11 == t ? s.PORT_SKIN_3K.getTexture(7) : 12 == t ? s.PORT_SKIN_3K.getTexture(9) : 13 == t ? s.PORT_SKIN_3K.getTexture(11) : 14 == t ? s.PORT_SKIN_3K.getTexture(15) : 15 == t ? s.PORT_SKIN_3K.getTexture(13) : 31 == t ? s.PORT_SKIN_3K.getTexture(0) : 16 == t ? s.PORT_SKIN_3K.getTexture(17) : s.PORT_SKIN_3K.getTexture(4)
        }, e.prototype._getTextureOver = function (t) {
            return 11 == t ? s.PORT_SKIN_3K.getTexture(8) : 12 == t ? s.PORT_SKIN_3K.getTexture(10) : 13 == t ? s.PORT_SKIN_3K.getTexture(12) : 14 == t ? s.PORT_SKIN_3K.getTexture(16) : 15 == t ? s.PORT_SKIN_3K.getTexture(14) : 31 == t ? s.PORT_SKIN_3K.getTexture(1) : 16 == t ? s.PORT_SKIN_3K.getTexture(18) : s.PORT_SKIN_3K.getTexture(5)
        }, e
    }(_.CircleContentWithSwitching)
}