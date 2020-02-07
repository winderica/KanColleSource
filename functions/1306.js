const function1306 = function (t, e, i) {
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
    var o = i(5),
        r = i(251),
        s = i(12),
        a = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._txt_repair_complete = new s.Sprite, e._fairy_completed = new s.Sprite, e
            }
            return n(e, t), Object.defineProperty(e.prototype, "white", {
                get: function () {
                    return this._white
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "txt_repair_complete", {
                get: function () {
                    return this._txt_repair_complete
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "fairy_complete", {
                get: function () {
                    return this._fairy_completed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pattern", {
                get: function () {
                    return this._pattern
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.initilize = function () {
                this._white = new PIXI.Graphics, this._white.beginFill(16777215, 1), this._white.drawRect(0, 0, o.default.width, o.default.height), this._white.endFill(), this._txt_repair_complete = new PIXI.Sprite(r.MAP_ANCHORAGE_REPAIR.getTexture(15)), this._txt_repair_complete.position.set(o.default.width / 2 - this._txt_repair_complete.width / 2, o.default.height / 2 - this._txt_repair_complete.height / 2);
                var t = this._getFairyPattern();
                this._pattern = t.pattern, this._fairy_completed = new PIXI.Sprite(r.MAP_ANCHORAGE_REPAIR.getTexture(t.textureId)), this._fairy_completed.scale.set(.65), this._fairy_completed.anchor.set(.5), this._fairy_completed.position.set(t.position.x, t.position.y), this.addChild(this._white, this._txt_repair_complete, this._fairy_completed), this.alpha = 0
            }, e.prototype._getFairyPattern = function () {
                var t = [{
                    pattern: 0,
                    textureId: 3,
                    position: {
                        x: 1100,
                        y: 710
                    }
                }, {
                    pattern: 1,
                    textureId: 4,
                    position: {
                        x: 336,
                        y: -350
                    }
                }, {
                    pattern: 2,
                    textureId: 5,
                    position: {
                        x: 1080,
                        y: 590
                    }
                }, {
                    pattern: 3,
                    textureId: 6,
                    position: {
                        x: 1080,
                        y: 590
                    }
                }];
                return t[Math.floor(Math.random() * t.length)]
            }, e
        }(PIXI.Container);
    e.AnchorageRepairCompleteLayer = a
}