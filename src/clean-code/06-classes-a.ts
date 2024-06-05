(()=>{

    type Gender = 'M' | 'F';
   
    // formas de manejar las clases en typeScritp
    // version larga 
      // class Person {

    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

    //     constructor( name: string, gender: Gender, birthdate: Date){
    //         this.name = name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
  
    // }

    // version corta
    class Person {

        constructor( 
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
  
    }




    const newPerson =  new Person ('Oliver', 'M',new Date('1985-10-21'));
    console.log({newPerson});



})()