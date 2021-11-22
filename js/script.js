var applicazione = new Vue ({
    el : "#app",
    data : {
        emails :[]
    },
    mounted(){
        const self = this;
        // for (let i = 0 ; i < 10 ; i++){
        // axios
        // .get("https://flynn.boolean.careers/exercises/api/random/mail")
        // .then(function(risultato){
        // let email = risultato.data.response;
        // self.emails.push(email);
        // })
        // }

        let i = 0;
        while ( i < 10 ){
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risultato) => {
                console.log('then');
                let email = risultato.data.response;
                this.emails.push(email);
            });
            i++;
        }
        
    }


})