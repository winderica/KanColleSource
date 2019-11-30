const function581 = function (t, e, i) {
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
    var o = function (t) {
        function e(e) {
            var i = t.call(this) || this;
            return i._fileName = "", i._frame_index = 0, i._frameCount = 0, i._frameMax = 0, i._loopCount = 0, i._end = !1, i._offset = null, i._model = e, i._updateTexture(), i._updateAlpha(), i._updateFrameMax(), i._updateOffset(), i
        }
        return n(e, t), Object.defineProperty(e.prototype, "fileName", {
            get: function () {
                return this._fileName
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.isEnd = function () {
            return this._end
        }, e.prototype.getOffset = function () {
            return this._offset
        }, e.prototype.reset = function () {
            this._frame_index = 0, this._frameCount = 0, this._loopCount = 0, this._end = !1, this._updateTexture(), this._updateAlpha(), this._updateFrameMax()
        }, e.prototype.update = function () {
            if (this._end) return null;
            var t = this._model.frames[this._frame_index];
            this._frameCount++;
            var e = 0 == this._frame_index && 1 == this._frameCount && 0 == this._loopCount;
            if (this._frameCount < this._frameMax) return this._updateAlpha(), e ? t : null;
            if (this._frame_index + 1 < this._model.frames.length) this._frame_index = this._frame_index + 1, this._frameCount = 0, this._updateTexture(), this._updateAlpha(), this._updateFrameMax(), this._updateOffset();
            else {
                if (this._loopCount += 1, !(this._model.loopMax < 0 || this._loopCount <= this._model.loopMax)) return this._end = !0, e ? t : null;
                this._frame_index = 0, this._frameCount = 0, this._updateTexture(), this._updateAlpha(), this._updateFrameMax(), this._updateOffset()
            }
            return t = this._model.frames[this._frame_index], 0 == t.frame && (this._end = !0), t
        }, e.prototype._updateTexture = function () {
            var t = this._model.frames[this._frame_index];
            this._fileName != t.filename && (this._fileName = t.filename, "" == this._fileName ? this.texture = PIXI.Texture.EMPTY : this.texture = this._getTextureByName(this._fileName))
        }, e.prototype._updateAlpha = function () {
            var t = this._model.frames[this._frame_index];
            if (t.alpha[0] == t.alpha[1]) this.alpha = t.alpha[0];
            else {
                var e = (t.alpha[1] - t.alpha[0]) / (this._frameMax - 1),
                    i = t.alpha[0] + e * this._frameCount;
                i = Math.max(0, i), this.alpha = Math.min(1, i)
            }
        }, e.prototype._updateFrameMax = function () {
            var t = this._model.frames[this._frame_index];
            if (this._frameMax = t.frame, t.framerand > 0) {
                var e = Math.random() * t.framerand;
                this._frameMax = this._frameMax + Math.floor(e)
            }
        }, e.prototype._updateOffset = function () {
            null == this._offset && (this._offset = new PIXI.Point);
            var t = this._model.frames[this._frame_index],
                e = t.offsetData;
            null != e && e.length >= 2 && (this._offset.x = e[0], this._offset.y = e[1])
        }, e.prototype._getTextureByName = function (t) {
            var e = PIXI.utils.TextureCache[t];
            return e || PIXI.Texture.EMPTY
        }, e
    }(PIXI.Sprite);
    e.FurnitureLayer = o
}