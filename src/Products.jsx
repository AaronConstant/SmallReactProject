
function Products () {

    let product1 = "Nourishing Body Lotion"; //you can create variables within this function and then access them within the return statement by placing them in {} to visualize/prompt them. 
    let product2 = "Fortifying Leave-In Conditioner";
    return(
        <ul>
            <li>Purifying Shampoo</li>
            <li>Deep Caretaker Mask Treatment</li>
            <li>{product1}</li>
            <li>{product2}</li>
        </ul>
    );
}

export default Products