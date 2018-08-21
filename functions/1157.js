const function1157 = function (t, e, i) {
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
    var o = i(0), r = i(11), s = i(8), a = i(9), _ = i(3), u = i(239), l = i(119), c = i(71), h = i(71), p = i(71),
        d = i(71), f = i(71), y = i(71), v = i(71), g = i(71), m = function (t) {
            function e() {
                var e = t.call(this) || this;
                return e._onInitialize = function () {
                    var t = _.DUTY_COMMON.getTexture(55), i = new PIXI.Sprite(t);
                    e.addChild(i), t = a.COMMON_MISC.getTexture(48), i = new PIXI.Sprite(t), i.position.set(171, 103), e.addChild(i), e._girl_layer = new s.AreaBox(0), o.default.view.overLayer.addChild(e._girl_layer), e.addChild(e._view);
                    var n = o.default.model.basic.getDutyExecutableCount();
                    e._view.initialize(n, e._onBack), e._view.update(e._data)
                }, e._onActivate = function () {
                    if (null != e._girl_layer) {
                        new d.TaskPosterGirl(e._girl_layer).start(function () {
                            e._girl_layer.parent.removeChild(e._girl_layer), e._girl_layer = null
                        })
                    }
                    e._view.activate()
                }, e._onDispose = function () {
                    e._view.dispose()
                }, e._onChangeType = function (t) {
                    new f.TaskUpdateDutyListData(1, t, e._data).start(function () {
                        e._view.update(e._data)
                    })
                }, e._onChangePage = function (t) {
                    var i = e._data.selected_type;
                    new f.TaskUpdateDutyListData(t, i, e._data).start(function () {
                        e._view.update(e._data)
                    })
                }, e._onSelectDuty = function (t) {
                    if (3 == t.status) {
                        if (0 == t.alert) {
                            var i = o.default.view.overLayer, n = new g.TaskTasseiDutySelect(i, t, e._data);
                            n.start(function () {
                                e._view.update(e._data)
                            })
                        }
                    } else if (2 == t.status) {
                        var n = new v.TaskExecutedDutySelect(t, e._data);
                        n.start(function () {
                            e._view.update(e._data)
                        })
                    } else {
                        var n = new y.TaskWaitedDutySelect(t, e._data);
                        n.start(function () {
                            e._view.update(e._data)
                        })
                    }
                }, e._onBack = function () {
                    o.default.scene.change(0)
                }, e._data = new u.DutyDataHolder, e._view = new l.DutyMainView(e._onChangeType, e._onChangePage, e._onSelectDuty), e
            }

            return n(e, t), e.prototype.getPreInitializeTask = function (t) {
                return new c.TaskDutyScenePreInitialize(this._data, this._onInitialize)
            }, e.prototype.getInitializeTask = function (t) {
                return new h.TaskDutySceneInitialize(this._data, this._onActivate)
            }, e.prototype.getFinalizeTask = function () {
                return new p.TaskDutySceneFinalize(this._onDispose)
            }, e
        }(r.SceneBase);
    e.DutyScene = m
}