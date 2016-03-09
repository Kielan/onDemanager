var env = app.get('env')
, _ = require("underscore");

_.each(process.env, function(value, key) {
    app.set(key, value);
});

app.set('issuerKey', 'jrVTX0FB9P3VU08Cz72MdSW425Had17b')
app.set('issuerSecret', '5Z9SU68w1ahMP8CgQjUaTKOmOY2I4bKa')
console.log('app.settings', app.settings);

console.log("Loaded Env Vars")
