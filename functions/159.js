const function159 = function (t, e, i) {
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
    var o = i(753), r = i(754), s = i(9), a = function (t) {
        function e(e, i, n, o) {
            var a = t.call(this) || this;
            a._nowLevel = 0, a.PLACE_INFOS = e;
            var _ = {}, l = {}, u = new PIXI.Container, c = [], h = 0;
            for (var p in e) if (!1 !== e.hasOwnProperty(p)) {
                var d = e[p];
                for (var f in d) if (!1 !== d.hasOwnProperty(f)) {
                    var y = i.clone(), m = d[f], v = m.x, g = m.y, b = m.r;
                    y.x = v, y.y = g, y.rotation = Math.PI / 180 * b, _[f] = y, l[f] = createjs.Tween.get(y), u.addChild(y), c.push("m" + (h + 1)), h++
                }
            }
            var w = new PIXI.Sprite(o), x = new PIXI.Sprite(s.COMMON_MISC.getTexture(18)), I = new r.SupplyFloor;
            I.position.set(0, 165);
            var T = new PIXI.Graphics;
            return T.beginFill(0, 0), T.drawRect(0, 0, 137, 317), T.endFill(), a.addChild(I, w, x, u, T), a._materials = _, a._mask = T, a._floor = I, a._lastTweens = l, a._materialContainer = u, a._materialKeys = c, a.MAGIC_NUMBER = n, a.MATERIAL_COUNT = h, a
        }

        return n(e, t), e.prototype.dispose = function () {
            for (var t in this.PLACE_INFOS) if (!1 !== this.PLACE_INFOS.hasOwnProperty(t)) {
                var e = this.PLACE_INFOS[t];
                for (var i in e) if (!1 !== e.hasOwnProperty(i)) {
                    var n = this._lastTweens[i], o = this._materials[i];
                    n && createjs.Tween.removeTweens(n.target), o && o.dispose(), this._lastTweens[i] = null, this._materials[i] = null
                }
            }
            this._materialContainer.removeChildren(), this._floor.dispose(), this._materialKeys = null, this._nowLevel = null, this._lastTweens = null, this._materials = null, this._materialContainer = null, this._mask = null, this._floor = null, this._materialKeys = null, this._nowLevel = null, this.PLACE_INFOS = null, this.MATERIAL_COUNT = null, this.MAGIC_NUMBER = null, this.removeChildren()
        }, e.prototype.update = function (t) {
            var e = 3 * Math.ceil(t / this.MAGIC_NUMBER);
            e = Math.min(this.MATERIAL_COUNT, e);
            var i, n, o, r = this._nowLevel;
            r < e ? (i = r, n = e, o = function (t) {
                t.updateRandomTexture(), t.playAdd()
            }) : r > e && (i = e, n = r, o = function (t) {
                t.playRemove()
            });
            for (var s = this, a = i; a < n; a++) !function (t) {
                var e = s._materialKeys[t], n = s._materials[e], r = 50 * (t - i), a = createjs.Tween.get(n),
                    _ = s._lastTweens[e];
                a.wait(r).call(function () {
                    _.setPaused(!0), o(n)
                }), s._lastTweens[e] = a
            }(a);
            this._nowLevel = e
        }, e.prototype.playSupply = function (t) {
            var e = this, i = this._nowLevel, n = function () {
            }, o = function () {
                e._floor.close(t)
            }, r = function () {
                for (var t = 0; t < i; t++) !function (t) {
                    var r = e._materialKeys[t], s = e._materials[r], a = 50 * (t - 0), _ = createjs.Tween.get(s),
                        l = n;
                    t == i - 1 && (l = o);
                    var u = function () {
                        return s.playDrop(l)
                    };
                    _.wait(a).call(u).play(null)
                }(t)
            };
            this._floor.open(r), this._nowLevel = 0
        }, e
    }(PIXI.Container), _ = function (t) {
        function e() {
            var e = {
                floor_00: {
                    m1: { x: 50, y: 167, r: 0 },
                    m2: { x: 83, y: 161, r: 0 },
                    m3: { x: 65, y: 168, r: 0 },
                    m7: { x: 32, y: 162, r: 0 },
                    m9: { x: 98, y: 156, r: 0 },
                    m11: { x: 17, y: 159, r: 0 }
                },
                floor_01: {
                    m4: { x: 53, y: 141, r: 0 },
                    m5: { x: 74, y: 141, r: 0 },
                    m8: { x: 38, y: 137, r: 0 },
                    m12: { x: 101, y: 131, r: 0 },
                    m13: { x: 15, y: 134, r: 0 },
                    m14: { x: 86, y: 135, r: 0 }
                },
                floor_02: {
                    m6: { x: 65, y: 116, r: 0 },
                    m10: { x: 35, y: 110, r: 0 },
                    m15: { x: 50, y: 114, r: 0 },
                    m16: { x: 83, y: 108, r: 0 },
                    m17: { x: 18, y: 107, r: 0 },
                    m19: { x: 98, y: 104, r: 0 }
                },
                floor_03: {
                    m18: { x: 42, y: 84, r: 0 },
                    m20: { x: 78, y: 87, r: 0 },
                    m21: { x: 26, y: 81, r: 0 },
                    m22: { x: 57, y: 89, r: 0 },
                    m23: { x: 90, y: 83, r: 0 }
                },
                floor_04: {
                    m24: { x: 90, y: 56, r: 0 },
                    m25: { x: 57, y: 62, r: 0 },
                    m26: { x: 72, y: 63, r: 0 },
                    m27: { x: 27, y: 54, r: 0 },
                    m30: { x: 39, y: 57, r: 0 }
                },
                floor_05: {
                    m28: { x: 71, y: 38, r: 0 },
                    m29: { x: 87, y: 30, r: 0 },
                    m32: { x: 51, y: 35, r: 0 },
                    m31: { x: 32, y: 30, r: 0 }
                },
                floor_06: { m33: { x: 80, y: 8, r: 0 }, m34: { x: 39, y: 8, r: 0 }, m35: { x: 60, y: 11, r: 0 } },
                floor_07: {
                    m36: { x: 14, y: 173, r: 0 },
                    m37: { x: 29, y: 179, r: 0 },
                    m38: { x: 77, y: 176, r: 0 },
                    m39: { x: 23, y: 152, r: 0 },
                    m40: { x: 104, y: 176, r: 0 }
                }
            }, i = s.COMMON_MISC.getTexture(13);
            return t.call(this, e, new o.SupplyMaterial(0), 50, i) || this
        }

        return n(e, t), e
    }(a);
    e.FuelContainer = _;
    var l = function (t) {
        function e() {
            var e = {
                floor_00: {
                    m1: { x: 27, y: 174, r: 0 },
                    m2: { x: 66, y: 177, r: -11.2 },
                    m3: { x: 48, y: 174, r: 24.7 },
                    m4: { x: 84, y: 174, r: 9.7 },
                    m5: { x: 48, y: 168, r: 0 },
                    m6: { x: 77, y: 164, r: 13.2 },
                    m7: { x: 39, y: 165, r: 0 },
                    m8: { x: 66, y: 159, r: 0 },
                    m9: { x: 86, y: 159, r: 21.4 },
                    m10: { x: 36, y: 159, r: 9.2 }
                },
                floor_01: {
                    m11: { x: 23, y: 152, r: 0 },
                    m12: { x: 68, y: 167, r: 42.3 },
                    m13: { x: 59, y: 153, r: 24.7 },
                    m14: { x: 77, y: 150, r: .7 },
                    m15: { x: 53, y: 149, r: -22 },
                    m16: { x: 80, y: 149, r: 33.6 },
                    m17: { x: 26, y: 146, r: -21 },
                    m18: { x: 69, y: 134, r: 13.7 },
                    m19: { x: 41, y: 140, r: 9.7 },
                    m20: { x: 54, y: 144, r: 9.2 }
                },
                floor_02: {
                    m21: { x: 21, y: 129, r: 0 },
                    m22: { x: 62, y: 134, r: -11.2 },
                    m23: { x: 44, y: 129, r: 24.7 },
                    m24: { x: 80, y: 129, r: 9.7 },
                    m25: { x: 44, y: 123, r: 0 },
                    m26: { x: 72, y: 120, r: 13.2 },
                    m27: { x: 33, y: 120, r: 0 },
                    m28: { x: 60, y: 114, r: 0 },
                    m29: { x: 84, y: 125, r: -26.2 },
                    m30: { x: 32, y: 114, r: 9.2 }
                },
                floor_03: {
                    m31: { x: 33, y: 119, r: -23 },
                    m32: { x: 69, y: 108, r: 21.2 },
                    m33: { x: 26, y: 95, r: 24.7 },
                    m34: { x: 14, y: 105, r: 9.7 },
                    m35: { x: 51, y: 114, r: -11.2 },
                    m36: { x: 41, y: 93, r: 13.2 },
                    m37: { x: 81, y: 105, r: -1.5 },
                    m38: { x: 75, y: 99, r: -14.2 },
                    m39: { x: 21, y: 87, r: 9.2 },
                    m40: { x: 56, y: 87, r: 15.2 }
                },
                floor_04: {
                    m41: { x: 24, y: 80, r: 0 },
                    m42: { x: 65, y: 89, r: -11.2 },
                    m43: { x: 47, y: 84, r: 24.7 },
                    m44: { x: 83, y: 86, r: 9.7 },
                    m45: { x: 47, y: 80, r: 0 },
                    m46: { x: 75, y: 75, r: 13.2 },
                    m47: { x: 36, y: 77, r: 0 },
                    m48: { x: 63, y: 71, r: 0 },
                    m49: { x: 89, y: 65, r: 32.7 },
                    m50: { x: 36, y: 66, r: 9.2 }
                },
                floor_05: {
                    m51: { x: 21, y: 72, r: 0 },
                    m52: { x: 69, y: 63, r: 21.2 },
                    m53: { x: 26, y: 56, r: 24.7 },
                    m54: { x: 20, y: 71, r: 9.7 },
                    m55: { x: 51, y: 74, r: -11.2 },
                    m56: { x: 45, y: 56, r: 13.2 },
                    m57: { x: 81, y: 65, r: -1.5 },
                    m58: { x: 75, y: 59, r: -14.2 },
                    m59: { x: 21, y: 47, r: 9.2 },
                    m60: { x: 56, y: 47, r: 15.2 }
                },
                floor_06: {
                    m61: { x: 21, y: 41, r: 0 },
                    m62: { x: 62, y: 45, r: -11.2 },
                    m63: { x: 44, y: 41, r: 24.7 },
                    m64: { x: 80, y: 41, r: 9.7 },
                    m65: { x: 44, y: 35, r: 0 },
                    m66: { x: 72, y: 30, r: 13.2 },
                    m67: { x: 33, y: 32, r: 0 },
                    m68: { x: 60, y: 26, r: 0 },
                    m69: { x: 81, y: 21, r: 24.4 },
                    m70: { x: 33, y: 32, r: 9.2 }
                },
                floor_07: {
                    m71: { x: 29, y: 32, r: -25.7 },
                    m72: { x: 48, y: 23, r: 0 },
                    m73: { x: 72, y: 14, r: 16 },
                    m74: { x: 35, y: 12, r: 9.7 },
                    m75: { x: 60, y: 8, r: 0 },
                    m76: { x: 42, y: 0, r: 22.1 },
                    m77: { x: 84, y: 192, r: 0 },
                    m78: { x: 81, y: 173, r: 24.7 },
                    m79: { x: 53, y: 186, r: 8 },
                    m80: { x: 17, y: 194, r: -5.5 }
                }
            }, i = s.COMMON_MISC.getTexture(3);
            return t.call(this, e, new o.SupplyMaterial(1), 25, i) || this
        }

        return n(e, t), e
    }(a);
    e.AmmoContainer = l;
    var u = function (t) {
        function e() {
            var e = {
                floor_00: {
                    m1: { x: 24, y: 174, r: 0 },
                    m2: { x: 63, y: 177, r: -11.2 },
                    m3: { x: 45, y: 174, r: 24.7 },
                    m4: { x: 81, y: 174, r: 9.7 },
                    m5: { x: 47, y: 165, r: 0 },
                    m6: { x: 74, y: 164, r: 13.2 },
                    m7: { x: 36, y: 165, r: 0 },
                    m8: { x: 63, y: 159, r: 0 },
                    m9: { x: 83, y: 159, r: 21.4 },
                    m10: { x: 33, y: 159, r: 9.2 }
                },
                floor_01: {
                    m11: { x: 23, y: 152, r: 0 },
                    m12: { x: 68, y: 167, r: 42.3 },
                    m13: { x: 59, y: 153, r: 24.7 },
                    m14: { x: 77, y: 150, r: .7 },
                    m15: { x: 53, y: 149, r: -22 },
                    m16: { x: 80, y: 149, r: 33.6 },
                    m17: { x: 26, y: 146, r: -21 },
                    m18: { x: 69, y: 134, r: 13.7 },
                    m19: { x: 41, y: 140, r: 9.7 },
                    m20: { x: 54, y: 144, r: 9.2 }
                },
                floor_02: {
                    m21: { x: 21, y: 129, r: 0 },
                    m22: { x: 62, y: 134, r: -11.2 },
                    m23: { x: 44, y: 129, r: 24.7 },
                    m24: { x: 80, y: 129, r: 9.7 },
                    m25: { x: 44, y: 123, r: 13.2 },
                    m26: { x: 72, y: 120, r: 0 },
                    m27: { x: 33, y: 120, r: 0 },
                    m28: { x: 60, y: 114, r: 0 },
                    m29: { x: 84, y: 125, r: -26.2 },
                    m30: { x: 32, y: 114, r: 9.2 }
                },
                floor_03: {
                    m31: { x: 33, y: 119, r: -23 },
                    m32: { x: 69, y: 104, r: 21.2 },
                    m33: { x: 26, y: 95, r: 24.7 },
                    m34: { x: 14, y: 105, r: 9.7 },
                    m35: { x: 51, y: 114, r: -11.2 },
                    m36: { x: 41, y: 93, r: 13.2 },
                    m37: { x: 81, y: 105, r: -1.5 },
                    m38: { x: 75, y: 99, r: -14.2 },
                    m39: { x: 21, y: 87, r: 9.2 },
                    m40: { x: 56, y: 87, r: 15.2 }
                },
                floor_04: {
                    m41: { x: 24, y: 80, r: 0 },
                    m42: { x: 65, y: 89, r: -11.2 },
                    m43: { x: 47, y: 84, r: 24.7 },
                    m44: { x: 83, y: 86, r: 9.7 },
                    m45: { x: 47, y: 80, r: 0 },
                    m46: { x: 75, y: 75, r: 13.2 },
                    m47: { x: 36, y: 77, r: 0 },
                    m48: { x: 63, y: 71, r: 0 },
                    m49: { x: 89, y: 65, r: 32.7 },
                    m50: { x: 36, y: 66, r: 9.2 }
                },
                floor_05: {
                    m51: { x: 21, y: 72, r: -13.1 },
                    m52: { x: 69, y: 63, r: 21.2 },
                    m53: { x: 26, y: 56, r: 24.7 },
                    m54: { x: 20, y: 71, r: 9.7 },
                    m55: { x: 51, y: 74, r: -11.2 },
                    m56: { x: 45, y: 56, r: 13.2 },
                    m57: { x: 81, y: 65, r: -1.5 },
                    m58: { x: 75, y: 59, r: -14.2 },
                    m59: { x: 21, y: 47, r: 9.2 },
                    m60: { x: 56, y: 47, r: 15.2 }
                },
                floor_06: {
                    m61: { x: 21, y: 41, r: 0 },
                    m62: { x: 62, y: 45, r: -11.2 },
                    m63: { x: 44, y: 41, r: 24.7 },
                    m64: { x: 80, y: 41, r: 9.7 },
                    m65: { x: 44, y: 35, r: 0 },
                    m66: { x: 72, y: 30, r: 13.2 },
                    m67: { x: 33, y: 32, r: 0 },
                    m68: { x: 60, y: 26, r: 0 },
                    m69: { x: 81, y: 21, r: 24.4 },
                    m70: { x: 32, y: 26, r: 9.2 }
                },
                floor_07: {
                    m71: { x: 29, y: 32, r: -25.7 },
                    m72: { x: 48, y: 23, r: 0 },
                    m73: { x: 72, y: 14, r: 16 },
                    m74: { x: 35, y: 12, r: 9.7 },
                    m75: { x: 60, y: 8, r: 0 },
                    m76: { x: 42, y: 0, r: 22.1 },
                    m77: { x: 84, y: 192, r: 0 },
                    m78: { x: 81, y: 173, r: 24.7 },
                    m79: { x: 53, y: 186, r: 8 },
                    m80: { x: 17, y: 194, r: -5.5 }
                }
            }, i = s.COMMON_MISC.getTexture(3);
            return t.call(this, e, new o.SupplyMaterial(2), 25, i) || this
        }

        return n(e, t), e
    }(a);
    e.BauxContainer = u
}