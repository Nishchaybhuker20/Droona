// sleep function to pause the execution of the code
function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1500));
}
export default async function sortElementSelection(array) {
    const len = array.length;
    // console.log(len);

    // Algorithm for sorting
    for (let i = 0; i < len - 1; i++) {
        let min = i;
        
        const childArray = document.querySelectorAll('.child');
        childArray[i].style.backgroundColor = "greenyellow";
        childArray[i].style.color = "black";
       
        for (let j = i + 1; j < len; j++) {

            // changing colors of blocks

            childArray[j].style.backgroundColor = "lightBlue";
            childArray[j].style.color = "black";
            // console.log(array[j], array[j + 1]);
            await sleep();

            if (array[min] > array[j]) {
                
                childArray[min].style.backgroundColor = "yellow";
                childArray[min].style.color = "black";
                childArray[j].style.backgroundColor = "orange";
                childArray[j].style.color = "white";
                min = j;
                await sleep();
            }
            else {

                childArray[i].style.backgroundColor = "yellow";
                childArray[i].style.color = "black";

                childArray[j].style.backgroundColor = "yellow";
                childArray[j].style.color = "black";
            }
        }
        if (min !== i) {
            const temp = array[i];
            const tempStyle = getComputedStyle(childArray[i]).height;
            childArray[i].style.height = getComputedStyle(childArray[min]).height;
            childArray[i].textContent = childArray[min].textContent;
            childArray[min].textContent = temp;
            childArray[min].style.height = tempStyle;

            array[i] = array[min];
            array[min] = temp;

            childArray[i].style.backgroundColor="yellow";
            childArray[min].style.backgroundColor="yellow";
            childArray[i].style.color="black";
            childArray[min].style.color="black";
            await sleep();
        }


    }
}