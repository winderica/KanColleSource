const function291 = function (t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n = function () {
        function t() {}
        return t.Sequence = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new a(t)
        }, t.Parallel = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            return new d(t)
        }, t.Delay = function (t) {
            return new _(t)
        }, t.Call = function (t) {
            return new l(t)
        }, t.Condition = function (e, i, n) {
            return void 0 === n && (n = function () {
                return t.DoNothing()
            }), new s(e, i, n)
        }, t.DoNothing = function () {
            return new r
        }, t.WaitForTask = function (t, e) {
            return new h(t, e)
        }, t.LoopFor = function (t, e) {
            return new p(t, e)
        }, t.Value = function (t, e, i, n, o, r) {
            return void 0 === n && (n = createjs.Ease.linear), void 0 === o && (o = function () {}), void 0 === r && (r = !1), new c(t, e, i, o, n, r)
        }, t.WaitForFrame = function (t) {
            return new u(t)
        }, t.Tick = function (t, e) {
            return new o(t, e)
        }, t.SILENT = function () {}, t.ENDLESS = t.SILENT, t
    }();
    e.$_$ = n;
    var o = function () {
            function t(t, e) {
                var i = this;
                this.onTick = function (t) {
                    var e = t;
                    i._checkCall() ? i._onTick(e) : (createjs.Ticker.removeEventListener("tick", i.onTick), i._onComplete())
                }, this._onTick = e, this._checkCall = t
            }
            return t.prototype.execute = function (t) {
                createjs.Ticker.addEventListener("tick", this.onTick), this._onComplete = t
            }, t.prototype.dispose = function () {
                this._onTick = null, this._checkCall = null, this._onComplete = null
            }, t.prototype.interrupt = function () {
                createjs.Ticker.removeEventListener("tick", this.onTick)
            }, t.prototype.interruptible = function () {
                return !0
            }, t
        }(),
        r = function () {
            function t() {}
            return t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {}, t.prototype.execute = function (t) {
                t()
            }, t.prototype.dispose = function () {}, t
        }(),
        s = function () {
            function t(t, e, i) {
                this._testCondition = t, this._trueCase = e, this._falseCase = i
            }
            return t.prototype.interruptible = function () {
                return this._job.interruptible()
            }, t.prototype.interrupt = function () {
                this._job.interrupt(), this._trueCase = function () {}, this._falseCase = function () {}, this._testCondition = function () {}
            }, t.prototype.execute = function (t) {
                var e = this._testCondition(),
                    i = e ? this._trueCase() : this._falseCase();
                this._job = i, i.execute(t)
            }, t.prototype.dispose = function () {
                this._job.dispose(), this._job = null, this._testCondition = null, this._trueCase = null, this._falseCase = null
            }, t
        }(),
        a = function () {
            function t(t) {
                var e = this;
                this._next = function () {
                    if (e._job && e._job.dispose(), e._job = null, e._seek < e._tasks.length) {
                        var t = e._tasks[e._seek++],
                            i = t();
                        e._job = i, i.execute(e._next)
                    } else e._onComplete()
                }, this._tasks = t
            }
            return t.prototype.push = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                1 == t.length ? this._tasks.push(t[0]) : this._tasks = this._tasks.concat(t)
            }, t.prototype.execute = function (t) {
                this._onComplete = t, this._start()
            }, t.prototype._start = function () {
                this._seek = 0, this._next()
            }, t.prototype.interruptible = function () {
                return this._job && this._job.interruptible(), !0
            }, t.prototype.interrupt = function () {
                this._job && this._job.interrupt()
            }, t.prototype.dispose = function () {
                var t = this;
                this._job && this._job.dispose(), this._job = null, this._tasks.forEach(function (e, i) {
                    t._tasks[i] = null
                }), this._onComplete = null
            }, t
        }(),
        _ = function () {
            function t(t) {
                this._duration = t
            }
            return t.prototype.execute = function (t) {
                var e = createjs.Tween.get(this).wait(this._duration),
                    i = e.call(t);
                this._tween = i, i.play(null)
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target)
            }, t.prototype.dispose = function () {
                this._tween = null, this._duration = null
            }, t
        }(),
        l = function () {
            function t(t) {
                this._call = t
            }
            return t.prototype.execute = function (t) {
                this._call(), t()
            }, t.prototype.dispose = function () {
                this._call = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {}, t
        }(),
        u = function () {
            function t(t) {
                this._frame = t
            }
            return t.prototype.execute = function (t) {
                var e = createjs.Tween.get(this, {
                    useTicks: !0
                }).wait(this._frame).call(function () {
                    t()
                });
                this._tween = e, e.play(null)
            }, t.prototype.dispose = function () {
                this._tween = null, this._frame = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target)
            }, t
        }(),
        c = function () {
            function t(t, e, i, n, o, r) {
                var s = this;
                this._complete = function () {
                    s._tween.removeEventListener("change", s.__onUpdate__), s.__onUpdate__(), s.__onComplete__()
                }, this.__onComplete__ = function () {
                    s._onComplete && s._onComplete()
                }, this.__onUpdate__ = function () {
                    s._onUpadte && s._onUpadte(s._target)
                }, this._target = t, this._to = e, this._duration = i, this._onUpadte = n, this._easing = o
            }
            return t.prototype.execute = function (t) {
                var e = this;
                this._onComplete = t;
                var i = createjs.Tween.get(this._target).to(this._to, this._duration, this._easing).call(function () {
                    e._complete()
                });
                i.addEventListener("change", this.__onUpdate__), this._tween = i, i.play(null)
            }, t.prototype.dispose = function () {
                this._target = null, this._to = null, this._duration = null, this._tween = null, this._easing = null, this._onUpadte = null
            }, t.prototype.interruptible = function () {
                return !0
            }, t.prototype.interrupt = function () {
                createjs.Tween.removeTweens(this._tween.target), this._complete = function () {}, this.__onUpdate__ = function () {}, this._onComplete = null, this._onUpadte = null
            }, t
        }(),
        h = function () {
            function t(t, e) {
                var i = this;
                this._completeLoopJob = function () {
                    i._loopJob.dispose(), i._loopJob = null, i._startLoopJob()
                }, this._completeMainJob = function () {
                    i._mainJob.dispose(), i._mainJob = null
                }, this._mainTask = t, this._loopTask = e
            }
            return t.prototype.execute = function (t) {
                this._onComplete = t, this._startMainJob(), this._startLoopJob()
            }, t.prototype._startMainJob = function () {
                var t = this._mainTask();
                this._mainJob = t, t.execute(this._completeMainJob)
            }, t.prototype._startLoopJob = function () {
                if (null == this._mainJob) this._onComplete();
                else {
                    var t = this._loopTask();
                    this._loopJob = t, t.execute(this._completeLoopJob)
                }
            }, t.prototype.dispose = function () {
                this._loopTask = null, this._mainTask = null, this._loopJob = null, this._mainJob = null, this._onComplete = null
            }, t.prototype.interrupt = function () {
                this._loopJob && this._loopJob.interrupt(), this._mainJob && this._mainJob.interrupt()
            }, t.prototype.interruptible = function () {
                var t = !0;
                return this._loopJob && (t = t && this._loopJob.interruptible()), this._mainJob && (t = t && this._mainJob.interruptible()), t
            }, t
        }(),
        p = function () {
            function t(t, e) {
                var i = this;
                this._for_ = function () {
                    if (i._job && i._job.dispose(), i._job = null, i._checkCondition()) {
                        var t = i._task();
                        i._job = t, t.execute(i._for_)
                    } else i._onComplete()
                }, this._checkCondition = t, this._task = e
            }
            return t.prototype.execute = function (t) {
                this._onComplete = t, this._for_()
            }, t.prototype.interruptible = function () {
                return !this._job || this._job.interruptible()
            }, t.prototype.interrupt = function () {
                this._for_ = function () {}, this._job && this._job.interrupt()
            }, t.prototype.dispose = function () {
                this._job && this._job.dispose(), this._onComplete = null, this._job = null, this._checkCondition = null
            }, t
        }(),
        d = function () {
            function t(t) {
                var e = this;
                this._complete_call = function () {
                    e._doneCounter++, e._tasks.length <= e._doneCounter && e._onComplete()
                }, this._tasks = t, this._jobs = [], this._doneCounter = 0
            }
            return t.prototype.push = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                1 == t.length ? this._tasks.push(t[0]) : this._tasks = this._tasks.concat(t)
            }, t.prototype.interruptible = function () {
                var t = !0;
                return this._jobs.forEach(function (e) {
                    var i = e.interruptible();
                    t = t && i
                }), t
            }, t.prototype.interrupt = function () {
                this._jobs.forEach(function (t) {
                    return t.interrupt()
                }), this._onComplete = function () {}
            }, t.prototype.execute = function (t) {
                this._onComplete = t, this.__call__()
            }, t.prototype.__call__ = function () {
                var t = this;
                if (0 == this._tasks.length) return void this._complete_call();
                this._tasks.forEach(function (e) {
                    var i = e();
                    t._jobs.push(i), i.execute(t._complete_call)
                })
            }, t.prototype.dispose = function () {
                var t = this;
                this._jobs.forEach(function (e, i) {
                    e.dispose(), t._jobs[i] = null
                }), this._jobs = null, this._complete_call = null, this._tasks.forEach(function (e, i) {
                    t._tasks[i] = null
                }), this._onComplete = null, this._doneCounter = null
            }, t
        }()
}