// variables
let addButton = document.getElementById('add');
let deleteButton = document.getElementById('delete');
let input = document.querySelector('[name="item"]')
let ul = document.getElementById('list');

// Even listeners
addButton.addEventListener('click', addItem);
deleteButton.addEventListener('click', deleteItem);


/*
*   methods
*/ 


// Shows last item on the shopping list
function showLastItem()
{
    let arrLength = ul.childElementCount;
    let text;
    let p = document.getElementById('last-item');

    if(arrLength>0){
        text = ul.lastChild.innerText.substr(0,1).toUpperCase()+ul.lastChild.innerText.substr(1).toLowerCase();
    } else {
        text = "La liste est vide";
    }
    p.innerText = text;
}

// Adds an item to the shopping list
function addItem(e)
{
    let value = input.value;

    if(value.length > 0)
    {
        let li = document.createElement('li');
        li.innerText = value.substr(0,1).toUpperCase()+value.substr(1).toLowerCase();
        ul.appendChild(li);
        input.value = '';

        showLastItem();
        e.preventDefault();
    }
    e.preventDefault();
}


// Delete a specific item or the last item if the user leaves the input empty
// if there're two of the same item in the last, the last one is deleted.
// input the input doesn't match any of the items in the list -> send an alert message
function deleteItem(e) {
    
    let value = input.value;
    let lastLi = ul.lastChild;
    let li = ul.children;
    let match = false;
    let index;
    
    if(value.length > 0)
    { 
        for (let i = 0; i < li.length; i++)
        {
            const item = li[i];
            
            if (item.innerText.toLowerCase() === value.toLowerCase())
            {
                index = i;
                match = true;
            } 
        }

        if (match)
        {
            ul.removeChild(li[index]);
            showLastItem();
            input.value = '';
        } 
        else 
        { 
            alert('Elément n\'existe pas.'); 
        }
        e.preventDefault();
    } 
    else 
    {
        ul.removeChild(lastLi);
        showLastItem();
        e.preventDefault();
    }    
}