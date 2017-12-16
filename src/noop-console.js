(function (noop) {
  "use strict";
  if (typeof(window.console) === "undefined") {
    window.console = {
      assert: noop,
      clear: noop,
      count: noop,
      debug: noop,
      dir: noop,
      dirxml: noop,
      error: noop,
      group: noop,
      groupCollapsed: noop,
      groupEnd: noop,
      info: noop,
      log: noop,
      profile: noop,
      profileEnd: noop,
      table: noop,
      time: noop,
      timeEnd: noop,
      timeStamp: noop,
      trace: noop,
      warn: noop
    };
  }
}(function () {}));
