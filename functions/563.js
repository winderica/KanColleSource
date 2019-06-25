const function563 = function (t, e, i) {
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
    var o = i(273),
        r = i(23),
        s = i(190),
        a = i(564),
        _ = i(565),
        u = i(566),
        l = i(568),
        c = i(578),
        h = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._animationFlg = !1, e._timeChkCount = 0, e.current_bgm_furniture = null, e.animate = function () {
                    if (e._animationFlg) {
                        if (e._timeChkCount == o.FurnitureConst.TIME_CHK_COUNT_MAX) {
                            e._timeChkCount = 0;
                            var t = new Date,
                                i = r.MathUtil.zeroPadding(t.getHours(), 2),
                                n = r.MathUtil.zeroPadding(t.getMinutes(), 2),
                                s = r.MathUtil.zeroPadding(t.getSeconds(), 2);
                            e._Floor.timeCheck(i, n, s), e._Wall.timeCheck(i, n, s), e._Window.timeCheck(i, n, s), e._Object.timeCheck(i, n, s), e._Chest.timeCheck(i, n, s), e._Desk.timeCheck(i, n, s)
                        }
                        e._timeChkCount++, requestAnimationFrame(e.animate), e._Floor.animate(), e._Wall.animate(), e._Window.animate(), e._Object.animate(), e._Chest.animate(), e._Desk.animate()
                    } else e._kaikyo.finalize(), e._shogo.stopAnimation(), e._Floor.restart(), e._Wall.restart(), e._Window.restart(), e._Object.restart(), e._Chest.restart(), e._Desk.restart()
                }, e._Floor = new l.Furniture(0), e._Wall = new l.Furniture(1), e._Window = new l.Furniture(2), e._Object = new l.Furniture(3), e._Chest = new l.Furniture(4), e._Desk = new l.Furniture(5), e._outside = new a.FurnitureOutside, e._outside.x = 294, e._sakura = new s.Sakura, e._isSakura = !1, e.addChild(e._Floor), e.addChild(e._Wall), e.addChild(e._outside), e.addChild(e._Window), e.addChild(e._Object), e.addChild(e._sakura), e.addChild(e._Chest), e.addChild(e._Desk), e._kaikyo = new _.Kaikyo, e.addChild(e._kaikyo), e._shogo = new u.Shogo, e.addChild(e._shogo), e
            }
            return n(e, t), Object.defineProperty(e.prototype, "outside", {
                get: function () {
                    return this._outside
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.activate = function () {
                this.animationFlag = !0
            }, e.prototype.deactivate = function () {
                this.animationFlag = !1
            }, Object.defineProperty(e.prototype, "animationFlag", {
                set: function (t) {
                    this._animationFlg != t && (this._animationFlg = t, t && (this._Floor.restart(), this._Wall.restart(), this._Window.restart(), this._Object.restart(), this._Chest.restart(), this._Desk.restart(), this.animate()))
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.updateAll = function (t) {
                if (this._isSakura = !1, this._Floor.update(t[0]), this._Wall.update(t[1]), this._Window.update(t[2]), this._Object.update(t[3]), this._Chest.update(t[4], this._kaikyo, this._shogo), this._Desk.update(t[5]), this._outside.update(), 235 == t[3] && (this._isSakura = !0), this._isSakura) {
                    var e = new PIXI.Rectangle(-600, -240, 600, 1200);
                    this._sakura.startAnimation(e, 4)
                } else this._sakura.stopAnimation(4)
            }, e.prototype.onMouseMove = function (t) {
                var e = t.getLocalPosition(this),
                    i = !1;
                return i = i || this._Floor.isHit(e), i = i || this._Wall.isHit(e), i = i || this._Window.isHit(e), i = i || this._Object.isHit(e), i = i || this._Chest.isHit(e), i = i || this._Desk.isHit(e)
            }, e.prototype.onClick = function (t) {
                for (var e = t.getLocalPosition(this), i = 0, n = this._getFurnitures(); i < n.length; i++) {
                    var o = n[i];
                    if (o.isHit(e)) {
                        if (o.isJukeBox()) {
                            new c.JukeBoxTask(o.id).JukeStart();
                            break
                        }
                        return o.isRadio() ? (this.current_bgm_furniture = o, this.stopGramophone()) : o.isGramo() && (this.current_bgm_furniture = o), o.clickAction(), !0
                    }
                }
                return !1
            }, e.prototype.stopGramophone = function () {
                this._getFurnitures().forEach(function (t, e, i) {
                    t.isGramo() && t.stopGramophone()
                })
            }, e.prototype._getFurnitures = function () {
                return [this._Desk, this._Chest, this._Object, this._Window, this._Wall, this._Floor]
            }, e
        }(PIXI.Container);
    e.FurnitureView = h
}