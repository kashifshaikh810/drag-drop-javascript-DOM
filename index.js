const dragdivs = document.querySelectorAll("#drag-container div");
const dropdivs = document.querySelectorAll("#drop-container div");

Array.from(dragdivs).forEach((dragdiv) => {
  dragdiv.addEventListener("dragstart", (e) => {
    e.target.classList.add("dragging");
    e.dataTransfer.effectAllowed = "move"

    const className = e.target.getAttribute("data-image");

    e.dataTransfer.setData("text/plain", className)
  });

  dragdiv.addEventListener("dragend", (e) => {
    e.target.classList.remove("dragging");
    e.target.remove()
  });

});

Array.from(dropdivs).forEach((dropdiv) => {
  dropdiv.addEventListener("dragenter", (e) => {
    e.target.classList.add("drop-select");
    e.dataTransfer.dropEffect = "move"
  });

  dropdiv.addEventListener("dragleave", (e) => {
    e.target.classList.remove("drop-select");
  });

  dropdiv.addEventListener("dragover", (e) => {
      e.preventDefault();
  })

  dropdiv.addEventListener("drop", (e) => {
    e.stopPropagation();
    const className = e.dataTransfer.getData("text/plain");
    e.target.classList.add(className)
    e.target.classList.remove("drop-select");
    });
});

//dragstart
// drag
// dragend

// dragenter
// dragover
// dragleave
// drop
