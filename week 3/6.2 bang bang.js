//Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!" 

const countdown = (num) =>{
    id = setInterval( () => {
        console.log(num);
        num--;
        if(num <= 0){
            clearInterval(id);
            console.log("bang bang")
        }
    }, 1000);
};
