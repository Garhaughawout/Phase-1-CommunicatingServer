/* ----------------------------------------------------- 
    VOCABULARY TERMS
----------------------------------------------------- */

/*

    - JSON (JavaScript Object Notation): file format standardized across languages
    - API (Application Programming Interface): inputted/outputted data to/from a server
    - `fetch`: a call to an API
    - GET request: a `fetch` call to retrieve data

    - good variable names contain code and descriptive naming

*/

/* ----------------------------------------------------- 
    GET REQUEST
----------------------------------------------------- */

fetch("http://localhost:3000/characters")
    .then((resp) => resp.json())
    .then((data) => renderCharArray(data))    

function renderCharArray(data) {
    data.forEach(character => {
        (character) 
            // selecting the Unordered List and then creating the necessary elements for displaying the information.
            const characterList = document.querySelector("#characters")
            const li = document.createElement("li")
            const image = document.createElement("img")

            image.src = character.image

            li.innerHTML = `
                <p>${character.name}</p>
                <h3>${character.age}</h3>
                ${image.outerHTML}
                `
            characterList.append(li)
            
            
            // event listeners for the list items
            li.addEventListener("mouseover", () => {
                li.style.border = "1px solid black"
            })
            li.addEventListener("mouseout", () => {
                li.style.border = "none"
            })
        }
    )
}