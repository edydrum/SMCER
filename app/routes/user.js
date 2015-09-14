module.exports = function(app) {
    var controller = app.controllers.user;

    app.route('/users')
        .get(controller.list)
        .post(controller.save);
    app.route('/users/:id')
        .get(controller.get)
        .put(controller.save)
        .delete(controller.delete);
};