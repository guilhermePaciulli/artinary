function SquareBlock() {
    this.red = random(0, 255);
    this.green = random(0, 255);
    this.blue = random(0, 255);
    this.x = 0;
    this.y = 0;
    this.alpha = 0;
    this.neighbors = [];

    this.paint = function () {
        let c = color(this.red, this.green, this.blue);
        c.setAlpha(this.alpha);
        fill(c);
        square(this.x, this.y, SQUARE_SIZE);
    }

    this.reduceAlpha = function () {
        if (this.alpha > 0) { this.alpha -= 10; }
    }

    this.colorfy = function(times) {
        if(times < 0) { return; }
        this.alpha = 255;
        setTimeout(() => {
            this.neighbors.forEach(curr => {
                curr.colorfy(times - 1);
            });
        }, 100);
    }

}