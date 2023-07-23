// sleep function to pause the execution of the code
function sleep() {
    return new Promise(resolve => setTimeout(resolve,1500));
}
export default async function sortElementInsertion(array) {
    const len = array.length;
   

    // Algorithm for sorting
    for (let i = 1; i < len; i++) {
        let j = i-1;
      
        const element = array[i];
        const childArray = document.querySelectorAll('.child');
        childArray[i].style.backgroundColor = "yellow";
        childArray[i].style.color = "black";
        await sleep();
       
        while(j>=0 && array[j]>element) {

            // changing colors of blocks
            childArray[j].style.backgroundColor = "lightBlue";
            childArray[j].style.color = "black";
           
            await sleep();
            const temp1 = getComputedStyle(childArray[j+1]).height;
            childArray[j+1].style.backgroundColor = "orange";
            childArray[j+1].style.color = "white";
            childArray[j+1].style.height = getComputedStyle(childArray[j]).height;
            childArray[j+1].textContent = array[j];
           
            childArray[j].style.height = temp1;
            childArray[j].textContent = element;
            childArray[j].style.backgroundColor = "yellow";


            array[j+1] = array[j];
            j--;
            
        }
        array[j+1] = element;
        console.log(`after ${i} pass`);
        console.log(array);
        childArray[j+1].style.backgroundColor="orange";
        childArray[j+1].style.color="white";
        childArray[j+1].textContent = element;
        await sleep();
    }
}