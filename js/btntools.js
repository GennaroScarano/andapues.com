const btntools = document.getElementById("btn-tools");
const btnText = document.getElementById("btn-text");
const btnIcon = document.getElementById("btn-icon");
const btnTitle = document.getElementById("btn-title");
const btnShadow = document.getElementById("btn-shadow");
const dur = 0.3;
const white = "#D1D9DF";
const transparent = "transparent";
const black = "#090909";
const red = "#FC0502";
const stagger = "-=0.3";
let playAni = false;

const btnBkg = document.createElement("img");
btnBkg.src = "./img/alien-and-ufo-gsap.svg";
btnBkg.alt = "Gennaro Scarano";
const src = document.getElementById("btn-bkg");
src.appendChild(btnBkg);

// Button setup
gsap.set(btnBkg, {
	backgroundColor: transparent,
	//borderBottom: `5px solid ${red}`
});
gsap.set(btnText, {
	xPercent: 0,
	yPercent: 650,
    scale: .8
});
gsap.set(btnIcon, {
	xPercent: 0,
	yPercent: -400,
	opacity: 1,
    scale: 1
});
gsap.set(btnTitle, {
	xPercent: 0,
	yPercent: -400,
	opacity: 1,
    scale: 1
});
gsap.set(btnShadow, {
	xPercent: 0,
	yPercent: 130,
    opacity: 0,
	scale: 1
});

// Setup timelines
let icons_tl = gsap.timeline({
	defaults: {
		duration: 0.4,
		ease: "back.out"
	}
});
let main_tl = gsap.timeline();

// Shake animation
const shake = () => {
	gsap.to(btntools, 0.5, {
		keyframes: {
			rotateZ: ["-3", "3", "-3", "3", "-3", "3", "-3", "3", "-3", "3", "0"]
		}
	});
};

// Icons spreading animation
icons_tl
	.to("#xd", {
		x: -140,
		y: -150,
		rotate: 10
	})
	.to(
		"#figma",
		{
			x: -165,
			y: 0,
			rotate: -20
		},
		stagger
	)
	.to(
		"#photoshop",
		{
			x: -110,
			y: 175,
			rotate: 10
		},
		stagger
	)
	.to(
		"#sketch",
		{
			x: 110,
			y: 170,
			rotate: -20
		},
		stagger
	)
	.to(
		"#illustrator",
		{
			x: 170,
			y: 5,
			rotate: 20
		},
		stagger
	)
	.to(
		"#javascript",
		{
			x: 150,
			y: -140,
			rotate: -10
		},
		stagger
	);
icons_tl.pause();

btntools.addEventListener("mousedown", () => {
	playAni = !playAni;

	if (playAni) {
		main_tl
			.to(btnBkg, dur, {
				scale: 1.2,
				//backgroundColor: black,
				//borderBottom: `5px solid ${black}`
			})
			.to(
				btnShadow,
				dur,
				{
					xPercent: 0,
					yPercent: 70,
					scale: 0.7,
					keyframes: {
						opacity: [0, 0, 1]
					},
					delay: 0.2
				},
				"<"
			)
			.to(
				btnText,
				dur,
				{
                    xPercent: 0,
	                yPercent: 680,
					color: red,
                    scale: 1
				},
				"<"
			)
			.to(
				btnIcon,
				dur,
				{
					xPercent: 0,
	                yPercent: 500,
                    scale: .3,
					keyframes: {
						opacity: [1, 0, 0]
					},
					delay: 0.2
				},
				"<"
			)
			.to(
				btnTitle,
				dur,
				{
					xPercent: 0,
	                yPercent: 500,
                    scale: .3,
					keyframes: {
						opacity: [1, 0, 0]
					},
					delay: 0.2
				},
				"<"
			)
			.add(shake)
			.add(icons_tl.play());
	} else {
		main_tl

			.to(btnIcon, dur, {
				xPercent: 0,
	            yPercent: -400,
                scale: 1,
				keyframes: {
					opacity: [0, 0, 1]
				}
			})
			.to(btnTitle, dur, {
				xPercent: 0,
	            yPercent: -400,
                scale: 1,
				keyframes: {
					opacity: [0, 0, 1]
				}
			})
			.add(icons_tl.reverse())
			.to(
				btnBkg,
				dur,
				{
					scale: 1
					//backgroundColor: white,
					//borderBottom: `5px solid ${red}`
				},
				"-=0.3"
			)
			.to(
				btnShadow,
				dur,
				{
					xPercent: 0,
					yPercent: 90,
					scale: 1,
                    keyframes: {
                        opacity: [1, 0, 0]
                    }
				},
				"-=0.3"
			)
			.to(
				btnText,
				dur,
				{
					xPercent: 0,
	                yPercent: 650,
					color: black,
                    scale: .8
				},
				"<"
			);
	}
});