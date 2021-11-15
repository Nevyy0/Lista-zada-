{
    const tasks = [
        {
            content: "Nauczyc się html",
            done: true,
        },
        {
            content: "Ukonczyć kurs",
            done: false,
        },
    ];

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const render = () => {
        let htmlString ="";
    
        for (const task of tasks) {
            htmlString += `
            <li
                class="list__item${task.done ?  " list__item--done" : ""}"
            >
            <button class="js-done"></button>
            ${task.content}
            <button class="js-remove"></button>
            <div class="linia"></div>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        
        removeButtons.forEach((removeButtons, index) => {
            removeButtons.addEventListener("click", () => {
                tasks.splice(index, 1 );
                render();
            });
        });
        

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        
        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };
    

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        
        if(newTaskContent === ""){
            return;

        }
        addNewTask(newTaskContent);
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    }
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();
}