// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/spring/`;
    data = await fetch(url).then(response => response.json());
    displayResults(data);
} 
/* Your Tasks:
    1. Output the title of the first course to the console.
    2. Output the name of the course's instructor to the console.
    3. Output the title of the first course to the #results section.
    4. Output the title and the instructor of the first course to the #results section.
    5. Output ALL of the course titles to the console.
    6. Output ALL of the course titles to the #results section.
    7. Output ALL of the diversity intensive courses to the results section.
    8. Questions to ponder:
        * How could you make this interface 
          more useful and engaging?
        * How could you allow your user to...
            * Select which department they want to view?
            * Select which term they want to view?
            * Only view classes that meet on Tuesdays and Thursdays? 
*/
function displayResults(data) {
   
    for(let i = 0; i < data.length; i++){

    let instructor = 'Unkown';
    const course = data[i];

    if(course.Department[0] == 'NM'){
        displayCourse(course)
    }
}
function displayCourse(course) {

    
    for(let i = 0; i < data.length; i++){

        let instructor = 'Unkown';
        const course = data[i];
    
    
    
        if(course.Instructors.length > 0){
            instructor = course.Instructors[0].Name;
        }
    
        const template = `<section id="class">
        
        <h1>${course.Code}: ${course.Title}</h1>
        <p>${instructor} | Meets ${course.Days}</p>
        <p> ${course.StartTime} </p>
        </section>`
        document.querySelector('#results').innerHTML += template;  
      
        }

    

    }

}