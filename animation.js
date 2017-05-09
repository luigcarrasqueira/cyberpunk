function Animation() {
    this.sprites = [];
    this.run = false;
}

Animation.prototype = {
    newSprite: function(sprite) {
        this.sprites.push(sprite);
    },

    on: function() {
        this.run = true;
        this.nextFrame();
    },

    off: function() {
        this.run = false;
    },

    nextFrame: function() {
        if (!this.run) return;

        this.clearScreen();

        for (let i in this.sprites) this.sprites[i].update();
        for (let i in this.sprites) this.sprites[i].draw();

        var that = this;
        requestAnimationFrame(function() {
            that.nextFrame();
        });
    },

    clearScreen: function() {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}

animation = new Animation();