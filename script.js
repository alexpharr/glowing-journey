const selectHotspot = (e) => {
  const clickedHotspot = e.target.closest(".lg-hotspot");
  const container = clickedHotspot.parentElement;

  // Handle hotspots within the same image
  const hotspots = container.querySelectorAll(".lg-hotspot");
  hotspots.forEach((hotspot) => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });

  // Prevent further propagation to document click listener
  e.stopPropagation();
};

(() => {
  const buttons = document.querySelectorAll(".lg-hotspot__button");
  buttons.forEach((button) => {
    button.addEventListener("click", selectHotspot);
  });

  // Add an event listener to the document to handle clicks outside hotspots
  document.addEventListener("click", () => {
    const selectedHotspots = document.querySelectorAll(".lg-hotspot--selected");
    selectedHotspots.forEach((hotspot) => {
      hotspot.classList.remove("lg-hotspot--selected");
    });
  });
})();
