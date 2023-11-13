let crn = [60528, 60484, 60234]

async function fetchCourses() {
    const fall2022 = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2022/fall/`;
    fallData = await fetch(fall2022).then(response => response.json());
  
    const spring2023 = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    springData = await fetch(spring2023).then(response => response.json());

    const fall2023 = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    fall2023Data = await fetch(spring2023).then(response => response.json());    

    displayResults(fallData, springData);

} 
function displayResults(fall, spring){

    // clear the container so we don't have repeating classes
    document.querySelector('#results').innerHTML = '';
    console.log(fall);
    
  
    for(let i = 0; i <  fall.length; i++){
        let course = fall[i];
        let course2 = spring[i];

        if(course.Department == 'CSCI'){

        if(course.CRN == crn[1]){
        
            if(course.Instructors.length > 0){
                const template = `<section id="class">
                
                <h1>${course.Code}: ${course.Title}</h1>
                <p>Teacher |  ${course.Instructors[0].Name}</p>
                <p> ${csci185} </p>
                </section>`

                document.querySelector('#results').innerHTML += template;
                }
           
        }
        if(course.CRN == crn[0]){
        
            if(course.Instructors.length > 0){
                const template = `<section id="class">
                
                <h1>${course.Code}: ${course.Title}</h1>
                <p>Teacher |  ${course.Instructors[0].Name}</p>
                <p> ${csci201} </p>
                </section>`

                document.querySelector('#results').innerHTML += template;
                }
           
        }
        if(course.CRN == crn[2]){
        
            if(course.Instructors.length > 0){
                const template = `<section id="class">
                
                <h1>${course.Code}: ${course.Title}</h1>
                <p>Teacher |  ${course.Instructors[0].Name}</p>
                <p> ${csci202} </p>
                </section>`

                document.querySelector('#results').innerHTML += template;
                }
           
        }
    }
  }
}
let csci185 ="Introduction to web page design and development. Topics include style sheets, dynamic content, scripting languages, and event handling. Students may receive credit for only one course from CSCI 182, 183 and 185."
let csci202 = "Data structures (lists, stacks, queues, binary trees, hash tables); searching and sorting algorithms; use of a modern, object-oriented programming language. Successful completion of this course with a grade of C or higher is required to progress through the Computer Science major or minor.";
let csci201 = "An introduction to problem solving, algorithm design, implementation, and testing using object-oriented programming principles. Emphasis is placed on event-driven programming methods, including creating and manipulating objects, classes, and using object-oriented tools such as the class debugger.";
let csci333 = ""
let csci235 = ""
let csci312 = ""
let csci_cyber = "" // i forgot the num
// softawre engineering, data base management, and more coming!