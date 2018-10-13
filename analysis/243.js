const function243 = function (t, e, i) {
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
    var o = i(5), r = i(0), s = i(65), a = i(8), _ = i(40), u = i(66), l = i(205), c = i(1268), h = i(207),
        p = i(1), d = function (t) {
            function e(e, i, n, u, l) {
                void 0 === l && (l = null);
                var c = t.call(this) || this;
                return c._moveCard = function () {
                    null != c._pre_task && (c._pre_task.dispose(), c._pre_task = null), c._play_bgm && r.default.sound.bgm.play(132, !0, 1e3);
                    var t = new PIXI.Point(c._insert.card.x, c._insert.card.y),
                        e = new PIXI.Point(o.default.width / 2, o.default.height / 2),
                        i = new PIXI.Point(t.x + 300, t.y), n = new PIXI.Point(e.x + 150, e.y + 150);
                    s.TweenUtil.create3BezierTween(c._insert.card, t, i, n, e, 700), createjs.Tween.get(c._insert.card).to({
                        scaleX: .86,
                        scaleY: .86,
                        rotation: 4 * Math.PI
                    }, 700).to({ scaleX: 1, scaleY: 1 }, 133).wait(700).call(function () {
                        c._insert.particle.activate()
                    }).wait(1e3).call(c._flash)
                }, c._flash = function () {
                    var t = c._mst_id, e = c._count, i = r.default.model.useItem.get(t), n = null == i ? "" : i.name;
                    c._bonus.alpha = 1, c._bonus.initialize(t, e, n), createjs.Tween.get(c._insert.card).to({ alpha: 0 }, 800), createjs.Tween.get(c._insert.bg_dark).to({ alpha: 0 }, 800), createjs.Tween.get(c._insert.flash).to({
                        scaleX: 3.5,
                        scaleY: 3.5
                    }, 800), createjs.Tween.get(c._insert).wait(800).to({ alpha: 0 }, 200).call(function () {
                        c._layer.removeChild(c._insert), c._insert.dispose(), c._insert = null, c._showBonus()
                    })
                }, c._showMessageBox = function () {
                    createjs.Tween.get(c._bonus.message_box).to({ y: 480 }, 300).call(c._waitClick)
                }, c._waitClick = function () {
                    c._bonus.message_box.activate();
                    var t = new _.GearBtnHome;
                    t.position.set(1140, 660), t.initialize(), t.activate(), c._bonus.addChild(t);
                    var e = new a.AreaBox(0);
                    e.interactive = !0, e.buttonMode = !0, c._bonus.addChild(e), e.once(p.EventType.CLICK, function () {
                        c._bonus.removeChild(e), c._finalize(t)
                    })
                }, c._layer = e, c._mst_id = i, c._count = n, c._pre_task = l, c._play_bgm = u, c
            }

            return n(e, t), e.prototype._start = function () {
                this._bonus = new c.BonusUseItem, this._bonus.alpha = 0, this._layer.addChild(this._bonus), this._insert = new l.BonusInsert, this._loadBG()
            }, e.prototype._loadBG = function () {
                var t = this;
                this._bonus.bg.initiailzeForUseitem(function () {
                    t._loadImage()
                })
            }, e.prototype._loadImage = function () {
                var t = this, e = new u.UseitemLoader;
                e.add(this._mst_id, 1), e.load(function () {
                    t._insert.preload(function () {
                        t._showInsert()
                    })
                })
            }, e.prototype._showInsert = function () {
                this._insert.initialize(6), this._insert.alpha = 0, this._insert.card.scale.set(.38), this._insert.card.position.set(o.default.width / 2 - 228, o.default.height / 2 + 521), this._insert.flash.position.set(o.default.width / 2, o.default.height / 2), this._layer.addChild(this._insert), createjs.Tween.get(this._insert).to({ alpha: 1 }, 500).call(this._moveCard)
            }, e.prototype._showBonus = function () {
                this._bonus.particle.activate(), createjs.Tween.get(this._bonus.white).to({ alpha: 0 }, 500).call(this._showMessageBox)
            }, e.prototype._finalize = function (t) {
                var e = this;
                this._play_bgm && r.default.sound.bgm.fadeOut(1200), createjs.Tween.get(t).to({ alpha: 0 }, 300).call(function () {
                    t.deactivate(), e._bonus.removeChild(t), e._endTask()
                })
            }, e.prototype.dispose = function () {
                this._bonus.dispose(), this._layer.removeChild(this._bonus), this._layer = null, this._bonus = null
            }, e
        }(h.TaskBonusBase);
    e.TaskBonusUseItem = d
}