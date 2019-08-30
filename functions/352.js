const function352 = function (t, e, i) {
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
    var o = i(0),
        r = i(2),
        s = i(18),
        a = i(24),
        _ = i(25),
        l = i(26),
        u = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e.NUM_TEXTURE_M = [67, 68, 69, 70, 71, 72, 73, 74, 75, 76], e.PULS_TEXTURE = [87, 88, 89], e._setTexture = function (t) {
                    e.texture = l.SALLY_AIRUNIT.getTexture(t)
                }, e._fairy = new PIXI.Sprite, e.addChild(e._fairy), e._area = new PIXI.Sprite, e._area.position.set(5, 5), e.addChild(e._area), e._distanceLayer = new PIXI.Container, e.addChild(e._distanceLayer), e._text = new PIXI.Sprite(l.SALLY_AIRUNIT.getTexture(132)), e._text.position.set(5, 46), e._distanceLayer.addChild(e._text), e._distance1 = new PIXI.Sprite, e._distanceLayer.addChild(e._distance1), e._distance2 = new PIXI.Sprite, e._distanceLayer.addChild(e._distance2), e._plusNum = new PIXI.Sprite, e._distanceLayer.addChild(e._plusNum), e
            }
            return n(e, t), e.prototype.initialize = function (t) {
                var e = _.MathUtil.zeroPadding(t, 3),
                    i = "./resources/area/airunit/" + e + ".png";
                i = i + "?" + s.START_TIME, this._area.texture = PIXI.Texture.fromImage(i)
            }, e.prototype.update = function (t, e, i, n) {
                var o = this;
                this._stopLoadImage(), e > 0 ? (this._load_task = new c(e, this._fairy), this._load_task.start(function () {
                    o._load_task = null
                })) : this._fairy.texture = PIXI.Texture.EMPTY, this._stopAnimation(), 1 == t ? this._t = createjs.Tween.get(null, {
                    loop: !0
                }).call(this._setTexture, [0]).wait(150).call(this._setTexture, [1]).wait(150) : 2 == t ? this.texture = l.SALLY_AIRUNIT.getTexture(2) : 3 == t ? this._t = createjs.Tween.get(null, {
                    loop: !0
                }).call(this._setTexture, [3]).wait(150).call(this._setTexture, [4]).wait(150) : this.texture = PIXI.Texture.EMPTY;
                var r = i,
                    s = n;
                if (this._distanceLayer.visible = !1, this._plusNum.visible = !1, this._distance2.visible = !1, r > 0) {
                    switch (this._distanceLayer.visible = !0, s) {
                        case 1:
                        case 2:
                        case 3:
                            this._plusNum.visible = !0, this._plusNum.texture = l.SALLY_AIRUNIT.getTexture(this.PULS_TEXTURE[s - 1])
                    }
                    if (r >= 10) {
                        var a = r.toString().split(""),
                            _ = parseInt(a[0]),
                            u = parseInt(a[1]);
                        this._distance2.visible = !0, this._distance1.position.set(86, 35), this._distance2.position.set(102, 35), this._plusNum.position.set(120, 40), this._distance1.texture = l.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_M[_]), this._distance2.texture = l.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_M[u])
                    } else this._distance1.position.set(86, 35), this._plusNum.position.set(102, 40), this._distance1.texture = l.SALLY_AIRUNIT.getTexture(this.NUM_TEXTURE_M[r])
                }
            }, e.prototype.dispose = function () {
                this.removeChildren(), this._distanceLayer.removeChildren(), this._stopLoadImage(), this._stopAnimation()
            }, e.prototype._stopLoadImage = function () {
                null != this._load_task && (this._load_task.cancel(), this._load_task = null)
            }, e.prototype._stopAnimation = function () {
                null != this._t && (this._t.setPaused(!0), this._t = null)
            }, e
        }(PIXI.Sprite);
    e.AirUnitPanelBanner = u;
    var c = function (t) {
        function e(e, i) {
            var n = t.call(this) || this;
            return n._mst_id = e, n._target = i, n
        }
        return n(e, t), e.prototype._start = function () {
            var t = this;
            this._l = new a.SlotLoader, this._l.add(this._mst_id, "airunit_fairy"), this._l.load(function () {
                null != t._target && (t._target.texture = o.default.resources.getSlotitem(t._mst_id, "airunit_fairy"), t._endTask())
            })
        }, e.prototype.cancel = function () {
            this._endTask()
        }, e.prototype._endTask = function () {
            this._target = null, this._l = null, t.prototype._endTask.call(this)
        }, e
    }(r.TaskBase)
}