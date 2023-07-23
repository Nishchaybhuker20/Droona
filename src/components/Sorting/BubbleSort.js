function sleep() {
    return new Promise(resolve => setTimeout(resolve, 1500));
}
export default async function sortElementBubble(array) {
    const len = array.length;
   
    // Algorithm for sorting
    for (let i = 0; i < len - 1; i++) {
        const childArray = document.querySelectorAll('.child');
        for (let j = 0; j < len - i - 1; j++) {

            // changing colors of blocks

            childArray[j].style.backgroundColor = "greenyellow";
            childArray[j].style.color = "black";
            childArray[j + 1].style.backgroundColor = "lightBlue";
            childArray[j + 1].style.color = "black";
            console.log(array[j], array[j + 1]);
            await sleep();
            
            if (array[j] > array[j + 1]) {

                // swapping
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                childArray[j + 1].style.backgroundColor = "orange";
                childArray[j + 1].style.color = "white";
                childArray[j].style.backgroundColor = "orange";
                childArray[j].style.color = "white";
                console.log(array);

                const tempStyle = getComputedStyle(childArray[j]).height;
                childArray[j].style.height = getComputedStyle(childArray[j + 1]).height;
                childArray[j].textContent = childArray[j + 1].textContent;
                childArray[j + 1].textContent = temp;
                childArray[j + 1].style.height = tempStyle;
                sleep();
            }
            else {

                childArray[j + 1].style.backgroundColor = "orange";
                childArray[j + 1].style.color = "white";

                childArray[j].style.backgroundColor = "orange";
                childArray[j].style.color = "white";
            }


        }
       
        sleep();
       

    }
}
