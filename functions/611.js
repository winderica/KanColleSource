const function611 = function (t, e, i) {
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
    var o = i(193),
        r = i(194),
        s = i(195),
        a = i(196),
        _ = i(286),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._gear = new _.Gear, e._gear.position.set(1242, 758), e.addChild(e._gear), e._side = new PIXI.Sprite, e.addChild(e._side), e._btm = new PIXI.Sprite, e.addChild(e._btm), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                this.changeSkin(t), this._gear.activate()
            }, e.prototype.changeSkin = function (t) {
                101 == t || 102 == t ? (this._side.texture = o.PORT_SKIN_1.getTexture(13), this._btm.texture = o.PORT_SKIN_1.getTexture(11), this._btm.position.set(388, 706)) : 201 == t ? (this._side.texture = r.PORT_SKIN_2.getTexture(5), this._btm.texture = r.PORT_SKIN_2.getTexture(3), this._btm.position.set(382, 705)) : 301 == t ? (this._side.texture = s.PORT_SKIN_3.getTexture(5), this._btm.texture = s.PORT_SKIN_3.getTexture(3), this._btm.position.set(387, 707)) : 311 == t ? (this._side.texture = a.PORT_SKIN_3K.getTexture(21), this._btm.texture = a.PORT_SKIN_3K.getTexture(19), this._btm.position.set(387, 707)) : (this._side.texture = PIXI.Texture.EMPTY, this._btm.texture = PIXI.Texture.EMPTY);
                var e = PIXI.Texture.EMPTY;
                e = 101 == t || 102 == t ? o.PORT_SKIN_1.getTexture(2) : 201 == t ? r.PORT_SKIN_2.getTexture(2) : 301 == t ? s.PORT_SKIN_3.getTexture(2) : 311 == t ? a.PORT_SKIN_3K.getTexture(6) : PIXI.Texture.EMPTY, this._gear.setUp(e)
            }, e.prototype.update = function (t) {
                0 == t ? (this.visible = !0, this._gear.visible = !0) : 11 == t || 12 == t || 13 == t || 14 == t || 15 == t || 31 == t || 16 == t ? (this.visible = !0, this._gear.visible = !1) : (this.visible = !1, this._gear.visible = !1)
            }, e.prototype.dispose = function () {
                this._gear.dispose()
            }, e
        }(PIXI.Container);
    e.FrameLayer = u
}