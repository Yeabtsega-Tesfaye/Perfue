window.addEventListener("load", () => {
	// Marquee Animation
	const marqueeContent = document.querySelector(".marquee-content");
	if (marqueeContent) {
		const clone = marqueeContent.innerHTML;
		marqueeContent.insertAdjacentHTML("beforeend", clone);

		let marqueeSpeed = 10;

		const marqueeAnim = gsap.to(".marquee-content", {
			x: () => -marqueeContent.scrollWidth / 2,
			duration: marqueeSpeed,
			repeat: -1,
			ease: "linear",
		});

		ScrollTrigger.create({
			onUpdate: (self) => {
				const fasterSpeed = 5;
				marqueeAnim.duration(self.direction > 0 ? fasterSpeed : marqueeSpeed);
			},
		});
	}

	// Center Image Floating Animation
	const centerImage = document.querySelector(".center-image");
	if (centerImage) {
		gsap.to(centerImage, {
			y: 20,
			duration: 2,
			repeat: -1,
			yoyo: true,
			ease: "power1.inOut",
		});
	}

	// Center Image Rotation Animation
	const centerImageImg = document.querySelector(".center-image img");
	if (centerImageImg) {
		gsap.to(centerImageImg, {
			rotation: 60,
			scrollTrigger: {
				trigger: centerImageImg,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
				onUpdate: (self) => {
					const rotation = -70 + self.progress * 90;
					gsap.set(centerImageImg, { rotation: rotation });
				},
			},
		});
	}


	const accordItems = document.querySelectorAll(".accord-item");
	if (accordItems.length) {
		gsap.set(accordItems, { opacity: 0, y: 20 });

		gsap.to(accordItems, {
             opacity: 1,
             y: 0,
             duration: 0.6,
             stagger: 0.3,
             scrollTrigger: {
             	trigger: ".accord-list",
             	start: "top 80%",
             	toggleActions: "play none none reverse",
             },
		});
	}


	const gallery = document.querySelector(".gallery");
	const galleryClone = gallery.innerHTML;
	gallery.insertAdjacentHTML("beforeend", galleryClone);

	gsap.to(".gallery", {
		x: () => -gallery.scrollWidth / 2,
		duration: 15,
		repeat: -1,
		ease: "linear"
	});


	gsap.fromTo(".video-wrapper", {
		scale: 0.8, opacity: 0
	},
       {
       	scale: 1,
       	opacity: 1,
       	scrollTrigger: {
       		trigger: ".video",
       		start: "top 80%",
       		end: "bottom 20%",
       		scrub: true,
       		markers: false,
       	}
       }
	);
});
