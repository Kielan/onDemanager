var env = app.get('env')
, _ = require("underscore");

_.each(process.env, function(value, key) {
    app.set(key, value);
});

console.log("Loaded Env Vars")
