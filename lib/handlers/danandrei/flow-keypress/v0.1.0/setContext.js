'use strict';

module.exports = (event, state, args, next) => {
    let data = event.data || {};

    let context = args.context || data.context;

    if (!context) {
        return next();
    }

    state.keypress.setContext(context);

    next();
};