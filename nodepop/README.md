# Instalar el pack json
npm i

# Cargar base de datos
npm run install_db

# Conectar servidor
npm run dev

### Filtros

    * Lista de anuncios
    http://localhost:3000/api/anuncios

    * Nombre
    http://localhost:3000/api/anuncios?name=(primeras letras o nombre completo)

    * Venta o busqueda
    http://localhost:3000/api/anuncios?sell=(true or false)

    * Limite
    http://localhost:3000/api/anuncios?limit=(numero)

    * Tag
    http://localhost:3000/api/anuncios?tags=(tag a buscar)

    * Precio
    http://localhost:3000/api/anuncios?price=(precio o rango de precio)
        -Mayores o iguales de: X-
        -Menores o iguales de: -X
        -Rango de precio: X-X
        -Precio unico: X
    * Orden
    http://localhost:3000/api/anuncios?sort=(parametro por el que colocar:nombre, precio,..)

    *Ejemplo:
    http://localhost:3000/api/anuncios?limit=4&sell=true&name=fo&tags=motor&sort=precio

    * Cargar imagenes
    http://localhost:3000/images/(nombre de la imagen)

# Desconexion del servidor
ctrl + C

# URLs Server
    API --->  http://ec2-3-19-219-165.us-east-2.compute.amazonaws.com/
    Web ---> 3.19.219.165
