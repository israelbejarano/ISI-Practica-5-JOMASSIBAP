describe ("Clase SpriteSpec",function(){

var canvas, ctx;

        beforeEach(function(){
                loadFixtures('index.html');

                canvas = $('#game')[0];
                expect(canvas).toExist();

                ctx = canvas.getContext('2d');
                expect(ctx).toBeDefined();
                
        });


	it("Sprite.merge", function(){

		var board = new Sprite();

		 board.merge({c1: '2', c2: '4'});

         expect(board['c1']).toBe('2');
         expect(board['c2']).toBe('4');

	});
	
	it("Sprite.setup", function(){

		var board = new Sprite();
		var sprites = {
			fire_ball: {sx: 0, sy: 64, w: 64, h: 64, frames: 12}	
		};
		var props = {y:1,x:1};
		spyOn(board, "setup");
		board.setup("fire_ball",props);
		expect(board.setup).toHaveBeenCalledWith("fire_ball",props);

	});
	
	it("Sprite.draw", function(){
		var board = new Sprite();
		
		SpriteSheet = {
			map: {fire_ball: {sx: 0, sy: 64, w: 64, h: 64, frames: 12}},
			draw: function(){}
		};
		
		spyOn(SpriteSheet, "draw");
		board.setup("fire_ball",{y:1,x:1});
		board.draw(ctx);
		runs(function(){
			expect(SpriteSheet.draw).toHaveBeenCalled();
		});
		
			
	});
	
	

});
