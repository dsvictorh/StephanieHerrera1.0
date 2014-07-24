var imageIndexer = new Array();
var imagesArray = new Array();
var changing = false;

imageIndexer['children-illustrations'] = 0;
imageIndexer['covers-and-typography'] = 1;
imageIndexer['exploring-3d'] = 2;
imageIndexer['grownup-illustrations'] = 3;
imageIndexer['ink-and-traditional'] = 4;
imageIndexer['speedy-stuff'] = 5;

imagesArray.push(['dreams', 'hansel-and-gretel-1', 'hansel-and-gretel-2', 'hansel-and-gretel-3', 'hansel-and-gretel-4', 'jack-and-the-beanstalk-1', 'jack-and-the-beanstalk-2', 'sun-and-snow-1', 'sun-and-snow-2']);
imagesArray.push(['']);
imagesArray.push(['']);
imagesArray.push(['emptyness', 'silent-hill-fanart']);
imagesArray.push(['alice', 'dancing-girl', 'evil-twins', 'freaky-siren', 'geisha', 'random-girl']);
imagesArray.push(['resident-evil-fanart', 'spitpaint-sun', 'white-moose-spitpaint']);

function mirrorHeight(origin,  mirror, speed){

	if(origin && mirror)
		mirror.animate({ height: origin.height() + 'px'}, speed);
}

$(window).resize(function(){
	mirrorHeight($('#selected-image'),   $('#thumbnails'), 0);
});
