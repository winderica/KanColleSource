const function633 = function (t, e, i) {
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
        r = i(206),
        s = i(4),
        a = i(48),
        _ = i(6),
        l = i(9),
        u = function (t) {
            function e(e, i) {
                return t.call(this, e, i) || this
            }
            return n(e, t), Object.defineProperty(e.prototype, "model", {
                get: function () {
                    return this._model
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype._createContent = function () {
                var t = this;
                this._black = new PIXI.Graphics, this._black.beginFill(0, 1), this._black.drawRect(-270, -195, 540, 390), this._black.endFill(), this._black.alpha = 0, this._dialog.bg.addChild(this._black), this._img = new r.MapThumbnailImage, this._dialog.container.addChild(this._img), this._particle = new c, this._particle.initialize(), this._particle.position.set(0, -27), this._dialog.container.addChild(this._particle), this._text = new s.TextBox(25, 16774898), this._text.text = "\u65b0\u305f\u306a\u4f5c\u6226\u6d77\u57df\u3078\u306e\u51fa\u6483\u304c\u53ef\u80fd\u3067\u3059\uff01", this._text.x = -Math.round(this._text.width / 2), this._text.y = 97, this._dialog.container.addChild(this._text);
                var e = this.model.area_id,
                    i = this.model.map_no;
                this._img.setImage(e, i, function () {
                    var e = 488 / t._img.width;
                    t._img.scale.set(e), t._img.x = -Math.round(t._img.width / 2), t._img.y = -27 - Math.round(t._img.height / 2), t._particle.startAnimation(), t._showDialog()
                })
            }, e.prototype._showDialog = function () {
                var t = this;
                createjs.Tween.get(this._dialog.bg).to({
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 200).call(function () {
                    createjs.Tween.get(t._black).to({
                        alpha: 1
                    }, 200).call(function () {
                        t._showContent()
                    })
                })
            }, e.prototype._showContentComplete = function () {
                _.SE.play("243"), t.prototype._showContentComplete.call(this)
            }, e.prototype._removeContent = function () {
                this._removeChild(this._black), this._black = null, this._dialog.container.removeChild(this._img), this._img = null, this._particle.stopAnimation(), this._dialog.container.removeChild(this._particle), this._particle = null, this._dialog.container.removeChild(this._text), this._text.destroy(), this._text = null
            }, e.prototype._removeChild = function (t) {
                null != t && null != t.parent && t.parent.removeChild(t)
            }, e
        }(a.TaskRewardDialogBase);
    e.TaskRewardDialogMap = u;
    var c = function (t) {
            function e() {
                var e = t.call(this) || this;
                e._particles = [];
                for (var i = [222, 244, 199, -199, -177, -154, -132, -244, -222, -199, -177, -244, -222, -199], n = [-108, -87, -87, 19, 42, 64, 87, 19, 42, 64, 87, 64, 87, 109], o = 0; o < 14; o++) {
                    var r = new h;
                    r.x = i[o], r.y = n[o], e.addChild(r), e._particles.push(r)
                }
                return e
            }
            return n(e, t), e.prototype.initialize = function () {
                for (var t = 0, e = this._particles; t < e.length; t++) {
                    e[t].initialize()
                }
            }, e.prototype.startAnimation = function () {
                for (var t = 0, e = this._particles; t < e.length; t++) {
                    e[t].startAnimation()
                }
            }, e.prototype.stopAnimation = function () {
                for (var t = 0, e = this._particles; t < e.length; t++) {
                    e[t].stopAnimation()
                }
            }, e
        }(PIXI.Container),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._animation = function () {
                    e._img.rotation = Math.random() * Math.PI * 2;
                    var t = 2e3 * Math.random();
                    e._t1 = createjs.Tween.get(e._img).wait(t).to({
                        scaleX: 1,
                        scaleY: 1
                    }, 100).to({
                        scaleX: 0,
                        scaleY: 0
                    }, 200).call(e._animation), e._t2 = createjs.Tween.get(e).wait(t).to({
                        rotation: Math.random() * Math.PI / 5
                    }, 300)
                }, e._img = new o.Sprite, e._img.anchor.set(.5), e._img.scale.set(0), e.addChild(e._img), e
            }
            return n(e, t), e.prototype.initialize = function () {
                this._img.texture = l.COMMON_MISC.getTexture(115)
            }, e.prototype.startAnimation = function () {
                null == this._t1 && this._animation()
            }, e.prototype.stopAnimation = function () {
                null != this._t1 && (this._t1.setPaused(!0), this._t1 = null, this._t2.setPaused(!0), this._t2 = null)
            }, e
        }(PIXI.Container)
}