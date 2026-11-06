window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight - 20;
    canvas.width = window.innerWidth - 20;
    let painting = false;

    function startPosition(){
        painting = true;
    }
    function finishPosition(){
        painting = false;
    }

    function draw(e){
        if(!painting) return;
        ctx.lineWidth = 0.5;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX - 5, e.clientY - 5);
        ctx.stroke();
    }
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", (e) => {
        e.preventDefault();
        startPosition(e.touches[0]);
    });

    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        draw(e.touches[0]);
    });

    canvas.addEventListener("touchend", finishPosition);
});

