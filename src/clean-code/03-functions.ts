(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) { // o tambien dejar solo id como parametro
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
   
    interface Movie {
        // se recomienda ordenar ascendentemente 
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }
  //  function createMovie(title: string, description: string, rating: number, cast: string[] ) {
    function createMovie({ title, description, rating, cast } : Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }


    //  continue 
    // mal 
    const getPayAmountj = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }     
        return result;
    }

// mejor 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    
        if ( isDead ) return 1500; 

        if ( isSeparated ) return  2500;
        
        return isRetired ? 3000 : 4000;
        
        // if ( isRetired ) {
        //      return 3000;
        // } else{
        //     return 4000; 
        // }      
           
        // return result;
    }






    

})();




