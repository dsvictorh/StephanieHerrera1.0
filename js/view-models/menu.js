function MenuViewModel(){

	var self = this;
	
	self.items = ko.observableArray([]);
	self.selectedItem = ko.observable();
	self.gallery = ko.observable(new GalleryModel());

	self.setSelectedItem = function(item){
		self.gallery().fadeSpeed(0);
		self.gallery().setSelectedImage(null);
		self.selectedItem(item);
		self.gallery().Update(item.folder());
	};
	
	self.Init();

}

MenuViewModel.prototype.Init = function(){

	this.items([
		new MenuItem('Home', 'home'),
                new MenuItem('About Me', 'about-me'),
                new MenuItem('Portfolio', 'subnav', null,
                [
                	new MenuItem('Children Illustrations', 'gallery', 'children-illustrations'),
			new MenuItem('Grownup Illustrations', 'gallery', 'grownup-illustrations'),
			new MenuItem('Ink & Traditional', 'gallery', 'ink-and-traditional'),
			new MenuItem('Speedy Stuff', 'gallery', 'speedy-stuff')
		]),
                new MenuItem('Blog', null, null, null, 'naneel.blogspot.com')
	]);
	
	this.setSelectedItem(this.items()[0]);
	
}