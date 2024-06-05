(() => {

    // arreglo de temperaturas celsius
    const temperatureCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmails = users.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;

    // Otros ejercicios

    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;

    // Funciones

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }

    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    
})();


