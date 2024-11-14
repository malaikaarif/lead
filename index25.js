    //     chrome://extensions     //

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// function saveLead(){
//     console.log("Button Clicked!")
// }



// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field


let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

// Push the value "www.awesomelead.com" to myLeads Array when the input button is clicked


// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
// console.log(ulEl)


// localStorage.setItem("myLeads", "www.example.com")

// console.log(localStorage.getItem("myLeads"))




// 1. Store the delete button in a deleteBtn variable /////////////////////

let deleteBtn = document.getElementById("delete-btn")
console.log(deleteBtn)










// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable


// localStorage.clear()
 
// ["lead1", "lead2"] or null

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

 



// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()









// 1. Grab the SAVE TAB button and store it in a tabBtn variable ************************************

const tabBtn = document.getElementById("tab-btn")
console.log(tabBtn)









if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    random(myLeads)
}


/// Refector the function so that it takes a parameter, leads, that it uses
// instead of the global myLeads variable. Remember to update all invocations 
// of the function as well.















// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console ****************************


let tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener ("click", function(){

    //  tabs = JSON.stringify(tabs)

    // Save the url instead of logging it out

    // console.log(tabs[0].url)

    myLeads.push(tabs[0].url)

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    random(myLeads)
   
})













function random(leads){
    let listItems = ""
    
    
    for(let i=0; i<leads.length; i++){
        // console.log(myLeads[i])
    
        // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    
    
        // listItems += "<li><a href='#' = target_blank>" + myLeads[i] + "</a></li>"
        // listItems += "<li><a target='_blank' href='"+ myLeads[i] + "' >" + myLeads[i] + "</a></li>"
    
        // listItems += `<li>
        // <a target='_blank'  href='${myLeads[i]}' > ${myLeads[i]}</a>
        // </li>`
    
    
         // Refactor the code below to use a template string
            listItems += `
            <li>
                 <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
                 </a>
            </li>
            `
        
        
        // console.log(listItems)
    
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    
    
         // Wrap the lead in an anchor tag (<a>) inside the <li>
            // Can you make the link open in a new tab?
    
            
    
    
    
    
        // Another Method
    
        // create element
        // set text content
        // append to ul
    
        
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    
    
    }



// 2. Listen for double clicks on the delete button (google it!)  /////////////
// 3. When clicked, clear localStorage, myLeads, and the DOM     /////////////

deleteBtn.addEventListener('dblclick',function() {
     console.log("button was double clicked!")



localStorage.clear()
myLeads = []
random(myLeads)

})













inputBtn.addEventListener("click", function(){
    // Push the value from the inputEl into the myLeads array 
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
    
   
    myLeads.push(inputEl.value)
    inputEl.value=""


    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()


    localStorage.setItem("myLeads", JSON.stringify(myLeads))





  
    // console.log(myLeads)

// console.log("Button clicked from addEventListener")



 random(myLeads)



//  console.log( localStorage.getItem("myLeads") )


    
})

// Log out the items in the myLeads array using a for loop 
// Render the leads in the unordered list using ulEl.textContent






// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with




// 3. Render the listItems inside the unordered list using ulEl.innerHTML

ulEl.innerHTML = listItems
}






