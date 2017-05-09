function Background(img) {
    this.img = img;
    this.speed = 0;
    this.junctionPosition = 0;
}

Background.prototype = {
    update: function() {
        this.junctionPosition += this.speed;

        if (this.junctionPosition > this.img.width) this.junctionPosition = 0;
    },

    draw: function() {
        var positionX = this.junctionPosition - this.img.width;
        ctx.drawImage(
            this.img,
            positionX, 0,
            this.img.width, this.img.height
        );

        positionX = this.junctionPosition;
        ctx.drawImage(
            this.img,
            positionX, 0,
            this.img.width, this.img.height
        );
    }
}