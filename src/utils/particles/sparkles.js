window.onload = function () {
  let numberOfParticles = parseInt(window.innerWidth / 15) || 100;
  console.log(numberOfParticles);

  Particles.init({
    selector: ".sparkles",
    color: ["#DA0463", "#404B69"],
    maxParticles: numberOfParticles,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 800,
        options: {
          color: "#00C9B1",
          maxParticles: 80,
          connectParticles: false,
        },
      },
    ],
  });
};
