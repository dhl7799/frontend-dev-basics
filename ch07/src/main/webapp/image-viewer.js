imageViewer = {
	
	init: function() {
		$(document).ready(function() {
			$("#btn-change").click(function() {
				imageViewer._changeImage();
			});
			$("#btn-slideshow").click(function() {
				if(imageViewer._valid){
					imageViewer._valid = false;
					clearInterval(imageViewer._repeating);
				}
				else{
					imageViewer._valid = true;
					imageViewer._repeating = setInterval(function() {
						imageViewer._changeImage();
					}, 2000);
				}
				
			});
		});
	},
	_valid: false,
	_currentIndex: -1,
	
	_repeating : null,
					
	_changeImage: function() {
		var index = Math.floor(Math.random() * this._images.length);

		while (imageViewer._currentIndex == index) {
			index = Math.floor(Math.random() * this._images.length);
		}
		console.log(index);
		imageViewer._currentIndex = index;
		$('.image').children('img').attr('src', 'images/' + imageViewer._images[index].file);
	},

	_images: [{
		name: '국화',
		file: 'Chrysanthemum.jpg'
	}, {
		name: '사막',
		file: 'Desert.jpg'
	}, {
		name: '수국',
		file: 'Hydrangeas.jpg'
	}, {
		name: '젤리피쉬',
		file: 'Jellyfish.jpg'
	}, {
		name: '코알라',
		file: 'Koala.jpg'
	}, {
		name: '등대',
		file: 'Lighthouse.jpg'
	}, {
		name: '펭귄',
		file: 'Penguins.jpg'
	}, {
		name: '튤립',
		file: 'Tulips.jpg'
	}]
};