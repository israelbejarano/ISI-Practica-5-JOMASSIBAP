/*

  Requisitos: 

  La nave del usuario disparar� 2 misiles si est� pulsada la tecla de
  espacio y ha pasado el tiempo de recarga del arma.

  El arma tendr� un tiempo de recarga de 0,25s, no pudi�ndose enviar
  dos nuevos misiles antes de que pasen 0,25s desde que se enviaron
  los anteriores



  Especificaci�n:

  - Hay que a�adir a la variable sprites la especificaci�n del sprite
    missile

  - Cada vez que el usuario presione la tecla de espacio se a�adir�n
    misiles al tablero de juego en la posici�n en la que est� la nave
    del usuario. En el c�digo de la clase PlayerSip es donde tienen
    que a�adirse los misiles

  - La clase PlayerMissile es la que implementa los misiles. Es
    importante que la creaci�n de los misiles sea poco costosa pues va
    a haber muchos disparos, para lo cual se declarar�n los m�todos de
    la clase en el prototipo

*/
describe("Clase PlayerMissileSpec", function(){
        var canvas, ctx;

    beforeEach(function(){
                loadFixtures('index.html');

                canvas = $('#game')[0];
                expect(canvas).toExist();

                ctx = canvas.getContext('2d');
                expect(ctx).toBeDefined();

    });

        it ("PlayerMissile.draw", function(){
                spyOn(SpriteSheet, "draw");                
                SpriteSheet.map = {
                        missile: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
                        callback: function(){}
                };
                Game = {width: 320, height: 480};
                var pmdraw = new PlayerMissile(2,2);
                
                pmdraw.draw(ctx);

                waits(300);
                expect(SpriteSheet.draw).toHaveBeenCalled();
                expect(SpriteSheet.draw.calls[0].args[1]).toEqual("missile");
                expect(SpriteSheet.draw.calls[0].args[2]).toEqual(pmdraw.x);
                expect(SpriteSheet.draw.calls[0].args[3]).toEqual(pmdraw.y);
        
        });


        it ("PlayerMissile.step", function(){
                var game = new GameBoard();
                var pmstep = new PlayerMissile(2,2);
                game.add(pmstep);
                spyOn(game, "remove");
                pmstep.step(2);
                        
                expect(game.remove).toHaveBeenCalled();
        });

});


