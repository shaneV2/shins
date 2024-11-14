let initialItem = 3;
const breakpoints = {
    'sm': 640,
    'md': 768,
    'lg': 1024,
    'xl': 1280,
}
const items = document.querySelectorAll('.item');

export default function Carousel(){
    // Check if breakpoint is medium or larger
    if(window.innerWidth >= breakpoints['md']){
        // Go through all featured items
        // Change width and height of items (larger if current viewed otherwise, smaller)
        items.forEach((item, index) => {
            if(index == initialItem){
                // Set size for current item
                item.classList.remove('md:h-[275px]');
                item.classList.add('md:h-[324px]');
                item.classList.add('border-2');
                item.classList.add('md:w-[344px]');
            }else{
                // Set size for other items
                item.classList.remove('md:h-[324px]');
                item.classList.remove('border-2');
                item.classList.remove('md:w-[244px]');
                item.classList.add('md:h-[275px]');
                item.classList.add('md:w-[201px]');
            }
        });
    }
}

// Previous Function 
window.prev = () => {
    if(initialItem != 2){
        initialItem--; 
    }
    Carousel();
    items[initialItem].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
};

// Next Function
window.next = () => {
    if(initialItem != 8){
        initialItem++;
    }
    Carousel();
    items[initialItem].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
};

// Call the function
Carousel();

// Scrolling the initial item on browser load
items[initialItem].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
