var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

jugador_x = 10;
jugador_y = 10;

var jugador_objeto = "";
var bloque_objeto = "";


function JugadorUpdate()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        jugador_objeto = Img;
        jugador_objeto.scaleToWidth(150);
        jugador_objeto.scaleToHeight(150);
        jugador_objeto.set({
            top:jugador_y, 
            left:jugador_x
        });
        canvas.add(jugador_objeto);
    })
};

function New_Objeto(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        bloque_objeto = Img;
        bloque_objeto.scaleToWidth(block_image_width);
        bloque_objeto.scaleToHeight(block_image_height);
        bloque_objeto.set({
            top:jugador_y, 
            left:jugador_x
        });
        canvas.add(bloque_objeto);
    })
};

window.addEventListener("keydown", my_keydown);
//si no llamamos a window no se especifica que se trabajara con un codigo ASCII, esta nos ayuda a empezar a trabajar con el
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("se presiona la tecla p y la tecla shift al mismo tiempo");

        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("ancho_imagen_actual").innerHTML = block_image_width;
        document.getElementById("altura_imagen_actual").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == '77')
    {
        console.log("se presiona la tecla m y la tecla shift al mismo tiempo");

        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("ancho_imagen_actual").innerHTML = block_image_width;
        document.getElementById("altura_imagen_actual").innerHTML = block_image_height;
    }

    if(keyPressed == '38')
    {
        up(); 
        console.log("up"); 
    }

    if (keyPressed == '40')
    {
        down();
        console.log("down");
    } 

    if (keyPressed == '37')
    {
        left();
        console.log("left");
    } 

    if (keyPressed == '39')
    {
        right();
        console.log("right");
    } 

    if(keyPressed == '87')
    {
        New_Objeto('wall.jpg');
        console.log("se presiona tecla w se pone pared");
    }
    if(keyPressed == '67')
    {
        New_Objeto('cloud.jpg');
        console.log("se presiona tecla c se pone nube");
    }
    if(keyPressed == '84')
    {
        New_Objeto('trunk.jpg');
        console.log("se presiona tecla t se pone tronco");
    }
    if(keyPressed == '71')
    {
        New_Objeto('ground.png');
        console.log("se presiona tecla g se pone tierra");
    }
    if(keyPressed == '68')
    {
        New_Objeto('dark_green.png');
        console.log("se presiona tecla d se pone bloque verde oscuro");
    }
    if(keyPressed == '73')
    {
        New_Objeto('light_green.png');
        console.log("se presiona tecla i se pone bloque verde claro");
    }
    if(keyPressed == '89')
    {
        New_Objeto('yellow_wall.png');
        console.log("se presiona tecla y se pone pared amarilla");
    }
    if(keyPressed == '82')
    {
        New_Objeto('roof.jpg');
        console.log("se presiona tecla r se pone techo");
    }   
}
function up() 
    { 
        if(jugador_y >=0)
         { 
         jugador_y =jugador_y - block_image_height;
         console.log("ALtura del Bloque" + block_image_height);
         console.log("Cuando la flecha arriba es presionada, x = " + jugador_x + " , y = " +jugador_y);
         canvas.remove(jugador_objeto);
         JugadorUpdate();
        }
    }
    function down() 
    { 
        if(jugador_y <=500)
         { jugador_y = jugador_y + block_image_height;
         console.log("ALtura del Bloque" + block_image_height);
         console.log("Cuando la flecha abajo es presionada, x = " + jugador_x + " , y = " +jugador_y);
         canvas.remove(jugador_objeto);
         JugadorUpdate();
        }
    }
    function left() 
    { 
        if(jugador_y >=0)
         { jugador_x =jugador_x - block_image_width;
         console.log("Ancho del Bloque" + block_image_height);
         console.log("Cuando la flecha izquierda es presionada, x = " + jugador_x + " , y = " +jugador_y);
         canvas.remove(jugador_objeto);
         JugadorUpdate();
        }
    }
    function right() 
    { 
        if(jugador_y <=850)
         { jugador_x =jugador_x + block_image_width;
         console.log("Ancho del Bloque" + block_image_height);
         console.log("Cuando la flecha derecha es presionada, x = " + jugador_x + " , y = " +jugador_y);
         canvas.remove(jugador_objeto);
         JugadorUpdate();
        }
    }
