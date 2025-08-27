let firstModule = ()=>{
    return "Shivi";
}


let myModule = ()=>{
    return 10;
}

// module.exports= firstModule;  // FOR DEFAULT EXPORTS IF WE CALL SINGLE FUNCTIONS -->>

module.exports= {firstModule, myModule};   // FOR NAMED EXPORTS -->>