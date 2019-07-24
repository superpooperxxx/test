const btn = document.getElementById('btn');

btn.addEventListener('click', mail);

function mail(){
        const textarea = document.getElementById('content');
        if(textarea.value != ''){
                const xhr = new XMLHttpRequest();
                const message = 'message='+textarea.value;
                xhr.open('POST', 'mail.php', true);
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                xhr.onload = function(){
                        console.log(this.responseText);
                }
                xhr.send(message)
        }else console.log('ты здоровый?');
}