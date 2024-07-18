


const gallery = document.querySelector(".Gallery");



class GalleryItem {
	constructor(item, index, dialog) {
		this.index = index;
		this.item = item;
		this.image = item.querySelector("img");
		this.src = this.image.src
		this.srcLarge = this.image.dataset.srcLarge;
		this.imageLarge = this.createImageHtml(this.srcLarge);
		this.dialog = dialog;

		this.image.addEventListener("click", () => {
			this.dialog.element.showModal();
			this.imageLarge.scrollIntoView({behavior: 'instant', block: "center", inline: "center"});
		}
		);
	}


	createImageHtml(src) {
		const image = new Image();
		image.src = src;
		image.loading = "lazy";

		return image;
	}

}

class GalleryDialog {
	constructor(dialog) {
		this.element = dialog;
		this.gallery = this.element.querySelector(".large-gallery");
		this.image = dialog.querySelector("img");
		this.closeButton = dialog.querySelector("#close");
		this.nextButton = dialog.querySelector("#next");
		this.prevButton = dialog.querySelector("#prev");

		this.closeButton.addEventListener("click", () => {
			this.element.close();
		});

		this.nextButton.addEventListener("click", () => {
			this.scrollNext();
		}
		);

		this.prevButton.addEventListener("click", () => {
			this.scrollPrev();
		}
		);
	}

	scrollNext() {
		this.gallery.scrollBy({
			top: 0,
			left: window.innerWidth,
			behaviour: "smooth",
		  });
	}

	scrollPrev() {
		this.gallery.scrollBy({
			top: 0,
			left: -window.innerWidth,
			behaviour: "smooth",
		  });
	}




	fill(src) {
		this.image.src = src;
	}

	clear() {
		this.image.src = "";
	}

}


class Gallery {
	constructor(gallery) {
		this.gallery = gallery;
		this.dialog = new GalleryDialog(document.querySelector("dialog"));
		this.items = [...gallery.querySelectorAll("li")].map( (item, index) => new GalleryItem(item, index, this.dialog));

		this.fillDialog(this.items);
	}

	fillDialog(items) {
		items.forEach( item => {
			const li = document.createElement("li");
			li.appendChild(item.imageLarge);
			this.dialog.gallery.appendChild(li);
		});
	}


}

const gallery1 = new Gallery(gallery);
