
const tl = new TimelineMax();
const tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('#first-fig', .3, {x:-200, opacity: 0});
tl.from('#second-fig', .3, {scale: 0}, "=-.5");
tl.from('#third-fig', .3, {x:200, opacity: 0});

tl2.from('#fourth-fig', .5, {y:100, opacity: 0});
tl2.from('#fifth-fig', .5, {opacity: 0});
tl2.from('#sixth-fig', .5, {y:-100, opacity: 0});

const firstScene = new ScrollMagic.Scene({
  triggerElement: "#second-h1"
})
  .setTween(tl)
		.addTo(controller);

const secondScene = new ScrollMagic.Scene({
  triggerElement: "#first-img"
})
  .setTween(tl2)
		.addTo(controller);
