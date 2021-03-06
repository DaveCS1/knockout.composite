﻿ko.composite.registerModel(function (pubsub, data, pane) {
    var self = this;

    self.data = ko.observable();

    self.initialise = function () {
        return $.getJSON('../data/folder/' + data.folder, function (result) {
            self.data(result);
        });
    };
    
    self.selectMail = function (mail) {
        pubsub.publish('mailSelected', mail);
    };
});