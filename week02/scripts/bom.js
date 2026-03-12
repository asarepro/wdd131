const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

button.addEventListener('click',
    function () {
        if (input.value.trim() !== '') {
            const list_items = document.createElement('li');
            list_items.textContent = input.value;

            const deletButton = document.createElement('button');
            deletButton.textContent = '❌';

            deletButton.addEventListener('click',
                function () {
                    list.removeChild(list_items);
                    input.focus();
                })
            
            list_items.appendChild(deletButton);
            list.appendChild(list_items);

            input = '';

        }

        input.focus();
    }
)
