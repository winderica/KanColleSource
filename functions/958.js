const function958 = function (t, e, i) {
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
    var o = i(12), r = i(42), s = i(959), a = function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.anchor.set(.5), e._content = new PIXI.Sprite, e.addChild(e._content), e
        }

        return n(e, t), Object.defineProperty(e.prototype, "selectView", {
            get: function () {
                return this._createSelectView(), this._selectView
            }, enumerable: !0, configurable: !0
        }), e.prototype.initialize = function (t) {
            this.texture = r.SALLY_EVENT.getTexture(12), 411 == t ? (this._content.position.set(-321, -222), this._content.texture = r.SALLY_EVENT.getTexture(36)) : 412 == t ? (this._content.position.set(-333, -231), this._content.texture = r.SALLY_EVENT.getTexture(37)) : 413 == t ? (this._content.position.set(-341, -231), this._content.texture = r.SALLY_EVENT.getTexture(38)) : 414 == t ? (this._content.position.set(-326, -225), this._content.texture = r.SALLY_EVENT.getTexture(39)) : 415 == t ? (this._content.position.set(-323, -227), this._content.texture = r.SALLY_EVENT.getTexture(40)) : 416 == t ? (this._content.position.set(-353, -231), this._content.texture = r.SALLY_EVENT.getTexture(0)) : 417 == t ? (this._content.position.set(-321, -221), this._content.texture = r.SALLY_EVENT.getTexture(1)) : this._content.texture = PIXI.Texture.EMPTY
        }, e.prototype.showSelectView = function () {
            return this._content.visible = !1, this._createSelectView(), this.addChild(this._selectView), this._selectView
        }, e.prototype.dispose = function () {
            null != this._selectView && this._selectView.dispose()
        }, e.prototype._createSelectView = function () {
            null == this._selectView && (this._selectView = new s.OperationSelectView)
        }, e
    }(o.Sprite);
    e.MapIntroBoard = a
}