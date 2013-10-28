describe("Clase GameBoardSpec", function(){
        var canvas, ctx;

    beforeEach(function(){
        loadFixtures('index.html');

        canvas = $('#game')[0];
        expect(canvas).toExist();

        ctx = canvas.getContext('2d');
        expect(ctx).toBeDefined();

    });

        it("add", function(){
                var objeto = "hola";
                var miobjeto = new GameBoard();
                miobjeto.add(objeto);
                expect(miobjeto.objects).toEqual(["hola"]);
        });
/*
        it ("add", function(){
        spyOn(GameBoard, "add");
        var miobjeto = new GameBoard;
        miobjeto.add();
        expect(GameBoard.add()).toHaveBeenCalled;
        });
*/
        it("remove + resetRemoved + finalizeRemoved", function(){
                var pos1 = "pos1";
                var myremove = new GameBoard();
                
                myremove.add(pos1);
                
                myremove.resetRemoved();
                myremove.remove(pos1);
                myremove.finalizeRemoved();                
                
                expect(myremove.objects[0]).toEqual(undefined);
                //Preguntar porque no se puede hacer con un:
                // spyOn(myremove, "resetRemoved");)                
                // expect(myremove.resetRemoved()).toHaveBeenCalled();
                // expect(myremove.finalizeRemoved()).toHaveBeenCalled();
        });
        
        it ("iterate", function(){
                var myiterate = new GameBoard();
                spyOn(myiterate, "iterate"); // ¿porqué aquí se puede llamar?

                myiterate.iterate("remove", ctx);

                expect(myiterate.iterate).toHaveBeenCalled();                
        });

        it ("detect", function(){
                var mydetect = new GameBoard();
                var p1 = "p1"
                var tdetect = function(){
                        return true;
                }
                mydetect.add(p1);        
                spyOn(mydetect, "detect");
                mydetect.detect(tdetect);
        
                expect(mydetect.detect).toHaveBeenCalledWith(tdetect);
                expect(mydetect.detect).not.toBeFalsy();         
        });

        it ("step", function(){
                var mystep = new GameBoard();
                var dt = 30 / 1000;
                
                spyOn(mystep, "iterate");
                mystep.step(dt);
        
                expect(mystep.iterate).toHaveBeenCalledWith('step',dt);                
        });

        it ("draw", function(){
                var mydraw = new GameBoard();
                
                spyOn(mydraw, "iterate");
                mydraw.draw(ctx);
                
                expect(mydraw.iterate).toHaveBeenCalledWith('draw',ctx);
        });

        it ("overlap", function(){
                var myoverlap = new GameBoard();
                var o1 = {w:2,h:2,x:0,y:0};
                var o2 = {w:2,h:2,x:4,y:4};

                runs( function() {
                        expect(myoverlap.overlap(o1,o2)).toBeFalsy();
                });                
        });

        it ("collide", function(){
                var mycollide = new GameBoard();
                var o1 = {w:2,h:2,x:0,y:0};
                var o2 = {w:2,h:2,x:4,y:4};
                runs( function() {
                        expect(mycollide.collide(o1,o2)).toBeFalsy();
                });        
        });
});


