module.exports = function(env) {
    process.env.app = env.app;
    return require(`./webpack/${env.config}.js`)
};