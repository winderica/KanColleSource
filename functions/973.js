const function973 = function (t, e, i) {
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
    var o = i(12),
        r = i(42),
        s = i(974),
        a = i(0),
        _ = i(14),
        l = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.anchor.set(.5), e._content = new PIXI.Sprite, e.addChild(e._content), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "selectView", {
                get: function () {
                    return this._createSelectView(), this._selectView
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initialize = function (t) {
                var e = a.default.settings.path_root + "img/sally/event_maesetsu",
                    i = "?version=" + _.UIImageLoader.getVersion("sally");
                switch (this.texture = r.SALLY_EVENT.getTexture(5), t) {
                    case 441:
                        this._content.position.set(-303, -227), this._content.texture = PIXI.Texture.fromImage(e + "/233_a4ce6.png" + i);
                        break;
                    case 442:
                        this._content.position.set(-286, -228), this._content.texture = PIXI.Texture.fromImage(e + "/234_d6775.png" + i);
                        break;
                    case 443:
                        this._content.position.set(-295, -216), this._content.texture = PIXI.Texture.fromImage(e + "/235_5caf8.png" + i);
                        break;
                    case 444:
                        this._content.position.set(-309, -223), this._content.texture = PIXI.Texture.fromImage(e + "/236_c9c552.png" + i);
                        break;
                    case 445:
                        this._content.position.set(-307, -221), this._content.texture = PIXI.Texture.fromImage(e + "/237_d9557a.png" + i);
                        break;
                    default:
                        this._content.texture = PIXI.Texture.EMPTY
                }
            }, e.prototype.showSelectView = function () {
                return this._content.visible = !1, this._createSelectView(), this.addChild(this._selectView), this._selectView
            }, e.prototype.dispose = function () {
                null != this._selectView && this._selectView.dispose()
            }, e.prototype._createSelectView = function () {
                null == this._selectView && (this._selectView = new s.OperationSelectView)
            }, e
        }(o.Sprite);
    e.MapIntroBoard = l
}