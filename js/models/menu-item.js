function MenuItem(text, action, folder, sub, external){
	
	var self = this;
	
	self.text = ko.observable(text || '');
	self.action = ko.observable(action || '');
	self.folder = ko.observable(folder || '')
        self.external = ko.observable(external || false);
        self.sub = ko.observableArray(sub || []);
}