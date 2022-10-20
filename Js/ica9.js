const OhNo =  document.getElementById("Text");
        document.getElementById("Text").style.visibility="hidden";
        const btn = document.querySelector('button');
        btn.addEventListener('click', displayMessage);
        function randomValueFromArray(array){
            const random = Math.floor(Math.random()*array.length);
            return array[random];
        }
        const insertX = ["GOOD JOB PRESSING THE BUTTON","WHY WOULD YOU PRESS THE BUTTON??!!","SOMEBODY DECIDED TO PRESS THE BUTTON..."];
        
        function displayMessage(msgText) {
            const xItem = randomValueFromArray(insertX);
            const body = document.body;

            const panel = document.createElement('div');
            panel.setAttribute('class','msgBox');
            body.appendChild(panel);

            document.getElementById("Display").style.visibility="hidden";
            document.getElementById("Text").innerHTML = "UH OH.YOU PRESSED IT, DIDN'T YOU...";
            document.getElementById("Text").style.visibility="visible";


            const msg = document.createElement('p');
            msg.textContent = xItem;
            panel.appendChild(msg);
            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'X';
            panel.appendChild(closeBtn);
            closeBtn.addEventListener('click', () => {
                panel.parentNode.removeChild(panel);
                document.getElementById("Display").style.visibility="visible";
                document.getElementById("Text").style.visibility="hidden";
            }); 
        }