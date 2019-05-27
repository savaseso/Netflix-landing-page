const tabItems = document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder();
    this.classList.add('tab-border')
    removeShow();
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    tabContentItem.classList.add('show')
}

function removeBorder(){
    tabItems.forEach(elem=>elem.classList.remove('tab-border')
    )
}

function removeShow(){
    contentItems.forEach(item=>item.classList.remove('show'))
}

tabItems.forEach(element=>element.addEventListener('click',selectItem))
    
