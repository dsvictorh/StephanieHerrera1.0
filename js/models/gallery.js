function GalleryModel(){

	var self = this;

	self.folder = ko.observable();	
	self.images = ko.observableArray([]);
	self.selectedImage = ko.observable();
	self.fadeSpeed = ko.observable(0);

	self.setSelectedImage = function(image){
		self.selectedImage(image);
		self.fadeSpeed(400);
	};
}

GalleryModel.prototype.Update = function(folder){
	
	this.folder(folder);	
	var index;
	
	if((index = imageIndexer[folder]) !== undefined){
		this.images(imagesArray[index]);
		this.setSelectedImage(this.images()[0]);	
	}
	
}


ko.bindingHandlers.changeImage = {
	update: function (element, valueAccessor, allBindingsAccessor){
		var image = ko.utils.unwrapObservable(valueAccessor()),
		data = allBindingsAccessor();
		
		if(image){
			$('#content').addClass('transition');
			$(element).fadeOut(data.speed)
                         .delay(100)
                         .queue(function(next){ $(this).attr('src', 'img/gallery/' + data.folder + '/full/' + image + '.jpg'); next(); })
                         .delay(100)
			.load(function(){
                               if(!changing){
                                      changing = true;
                                      $(element).fadeIn(data.speed, function(){
                                             $('#content').removeClass('transition');
                                             mirrorHeight($('#selected-image'),   $('#thumbnails'),  data.speed);
				             $('#thumbnails').fadeIn(data.speed);      
                                             changing = false;
			              });
                               }
			});
		}
	}
}

