const function370 = function (t, e, i) {
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
    var o = i(53), r = i(985), s = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._type = e, i._black = new PIXI.Sprite, i._key = new PIXI.Sprite, i._cloud = new r.MapThumbnailLockedCloud, i._text = new PIXI.Container, i
        }

        return n(e, t), e.prototype.initialize = function (t) {
            this._black.texture = this._getBlackTexture(), this._key.texture = o.SALLY_SORTIE.getTexture(30), this._cloud.initialize(), this._text.visible = !0, this._text.removeChildren();
            var e = new PIXI.Sprite;
            0 == t ? e.texture = o.SALLY_SORTIE.getTexture(42) : 1 == t ? e.texture = o.SALLY_SORTIE.getTexture(43) : 3 == t ? e.texture = o.SALLY_SORTIE.getTexture(44) : this._text.visible = !1, 1 == this._text.visible && (e.x = -Math.round(e.width / 2), e.y = -Math.round(e.height / 2), this._text.addChild(e)), this._setPositions(), this.addChild(this._black), this.addChild(this._key), this.addChild(this._cloud), this.addChild(this._text)
        }, e.prototype.activate = function () {
            this._cloud.activate()
        }, e.prototype.deactivate = function () {
            this._cloud.deactivate()
        }, e.prototype._getBlackTexture = function () {
            switch (this._type) {
                case 3:
                    return o.SALLY_SORTIE.getTexture(36);
                case 4:
                    return o.SALLY_SORTIE.getTexture(35)
            }
            return PIXI.Texture.EMPTY
        }, e.prototype._setPositions = function () {
            3 == this._type ? (this._key.position.set(470, 14), this._cloud.position.set(491, 53), this._text.position.set(490, 99)) : 4 == this._type && (this._key.position.set(218, 42), this._cloud.position.set(239, 81), this._text.position.set(240, 152))
        }, e
    }(PIXI.Container);
    e.MapThumbnailLocked = s
}