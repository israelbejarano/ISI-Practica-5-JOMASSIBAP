describe("objeto FireBall",function(){
	var canvas, ctx;

	beforeEach(function(){ // antes de cada test se cargan las siguientes variables y se hacen comprobaciones
	loadFixtures('index.html');
	
	canvas = $('#game')[0];
	expect(canvas).toExist();
	
	ctx = canvas.getContext('2d'); // necesario para los mtodos draw
	expect(ctx).toBeDefined();
		
	expect (FireBallI).toBeDefined(); // me aseguro de que FireBall ha sido definido
	expect (FireBallD).toBeDefined();
    });
    

	
	it ("objeto FireBallI.draw",function(){
		SpriteSheet = { // creamos un objeto dummy SpriteSheet y que en su map tiene almacenado un sprite missile.
  			map : {fire_ball: {sx: 0, sy: 64, w: 64, h: 64, frames: 12}},
  			draw: function() {}
		};
		var miFireBallI = new FireBallI (10,10); // creamos un nuevo objeto missile.
		spyOn (SpriteSheet, "draw");
		miFireBallI.draw(ctx);
		runs(function(){
			expect (SpriteSheet.draw).toHaveBeenCalled(); // deber llamar a SpriteSheet.draw
			expect (SpriteSheet.draw.calls[0].args[0]).toBe (ctx); // comprobamos que el orden de argumentos es el correcto.
			expect (SpriteSheet.draw.calls[0].args[1]).toBe ('fire_ball');
			expect (SpriteSheet.draw.calls[0].args[2]).toBe (miFireBallI.x);
			expect (SpriteSheet.draw.calls[0].args[3]).toBe (miFireBallI.y);
		});
	});
	
	it ("objeto FireBallI.step", function(){
		var miboard = new GameBoard();
		var miFireBallI = new FireBallI (10,10);
		miboard.add (miFireBallI); // aadimos miFireBallI a board para que miMissile pueda referenciar a board.
		spyOn(miboard, "collide");
		var dt = 1;
		miFireBallI.step(dt);
		runs(function(){
			expect (miboard.collide).toHaveBeenCalled(); // se debera haber llamado a remove
		});
		
	});
	
	it ("objeto FireBallD.draw",function(){
		SpriteSheet = { // creamos un objeto dummy SpriteSheet y que en su map tiene almacenado un sprite missile.
  			map : {fire_ball: {sx: 0, sy: 64, w: 64, h: 64, frames: 12}},
  			draw: function() {}
		};
		var miFireBallD = new FireBallD (10,10); // creamos un nuevo objeto missile.
		spyOn (SpriteSheet, "draw");
		miFireBallD.draw(ctx);
		runs(function(){
			expect (SpriteSheet.draw).toHaveBeenCalled(); // deber llamar a SpriteSheet.draw
			expect (SpriteSheet.draw.calls[0].args[0]).toBe (ctx); // comprobamos que el orden de argumentos es el correcto.
			expect (SpriteSheet.draw.calls[0].args[1]).toBe ('fire_ball');
			expect (SpriteSheet.draw.calls[0].args[2]).toBe (miFireBallD.x);
			expect (SpriteSheet.draw.calls[0].args[3]).toBe (miFireBallD.y);
		});
	});
	
	it ("objeto FireBallD.step", function(){
		var miboard = new GameBoard();
		var miFireBallD = new FireBallD (10,10);
		miboard.add (miFireBallD); // aadimos miFireBallI a board para que miMissile pueda referenciar a board.
		spyOn(miboard, "collide");
		var dt = 1;
		miFireBallD.step(dt);
		runs(function(){
			expect (miboard.collide).toHaveBeenCalled(); // se debera haber llamado a remove
		});
		
	});







});
