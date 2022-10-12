class Block {
    constructor( x, w, m, v ) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.v = v;
		this.m = m;
    }

    update() {
        this.x += this.v;
    }
	
	hitWall() {
		return ( this.x <= 0 || this.x >= width );
	}
	
	reverse() {
		this.v *= -1;
	}	
	
	collide( other ) {
		return !( this.x + this.w < other.x ||
			this.x > other.x + other.w );
	}
	
	bounce( other ) {
		let sumM = this.m + other.m;
		let newV = ( this.m - other.m ) / sumM * this.v;
		newV += ( 2.0 * other.m / sumM ) * other.v;
		return newV;
	}	
	

    show() {
        image( blockImg, this.x, this.y, this.w, this.w );
    }
}