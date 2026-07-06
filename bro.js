const course = [
  {
    name: "javaScript Basics",
    price: 1000,
    rating: 2.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", phone: "9898989889" },
  },
  {
    name: "java",
    price: 1000,
    rating: 3.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", phone: "9898989889" },
  },
  {
    name: "Python",
    price: 1000,
    rating: 4.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", phone: "9898989889" },
  },
  {
    name: "Sql",
    price: 1000,
    rating: 1.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", phone: "9898989889" },
  },
];

const formateName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

function displayCourse() {
  const courseContainer = document.getElementById("course-container");
  course.forEach((course) => {
    const courseUI = `<div class="course-title">
   <h3>Course Name: ${formateName(course.name)}</h3>
   <p> Price : ${course.price}</p>
   <p> Rating : ${Math.round(course.rating * 10) / 10}</p>
   <p> Available : ${course.isAvailable ? "Yes" : "No"}</p>
   <p> Languages : ${course.languages.join(", ")}</p>
   <p> Mentor : ${formateName(course.mentor.name)} (${course.mentor.phone})</p>
  </div>`;
    courseContainer.innerHTML += courseUI;
  });
}

function displaycount() {
  let coursecount = (document.getElementById("course-count").innerText =
    `Total Courses: ${course.length}`);
}

function getTopRatedCourse(course) {
  let topRatedCourse = course.reduce((topcourse, currentcourse) => {
    return topcourse.rating > currentcourse.rating ? topcourse : currentcourse;
  });
  return topRatedCourse;
}

function topratedcourse(arr) {
  const topratedcourse = getTopRatedCourse(arr);
  // console.log(topratedcourse);
  const courseUI = `<div class="course-title">
   <h3>Course Name: ${formateName(topratedcourse.name)}</h3>
   <p> Price : ${topratedcourse.price}</p>
   <p> Rating : ${Math.round(topratedcourse.rating * 10) / 10}</p>
   <p> Available : ${topratedcourse.isAvailable ? "Yes" : "No"}</p>
   <p> Languages : ${topratedcourse.languages.join(", ")}</p>
   <p> Mentor : ${formateName(topratedcourse.mentor.name)} (${topratedcourse.mentor.phone})</p>
  </div>`;
  const topcourse = document.getElementById("top-rated-courses");
  topcourse.innerHTML = courseUI;
}

function getLeastCourse(course) {
  let least = course.reduce((leastcourse, course) => {
    return leastcourse.rating < course.rating ? leastcourse : course;
  });
  return least;
}

function displayleastcourse(arr) {
  let leastcourse = getLeastCourse(arr);
  // console.log(leastcourse);
  const courseUI = `<div class="course-title">
   <h3>Course Name: ${formateName(leastcourse.name)}</h3>
   <p> Price : ${leastcourse.price}</p>
   <p> Rating : ${Math.round(leastcourse.rating * 10) / 10}</p>
   <p> Available : ${leastcourse.isAvailable ? "Yes" : "No"}</p>
   <p> Languages : ${leastcourse.languages.join(", ")}</p>
   <p> Mentor : ${formateName(leastcourse.mentor.name)} (${leastcourse.mentor.phone})</p>
  </div>`;
  const leastratedCourse = document.getElementById("least-rated-courses");
  console.log(leastcourse);
  leastratedCourse.innerHTML = courseUI;
}

function getSearchResult(arr,query){
// console.log("query"+query);
  let result = arr.filter((course)=>{
    return course.name.includes(query);
  });
  return result;
  console.log(result);
  displayCourse(result);
}

function initialpage() {
  displaycount();
  displayCourse();
  topratedcourse(course);
  displayleastcourse(course);
   const searchInput = document.querySelector("#search-input");
  searchInput.addEventListener("input",(event)=>{
    getSearchResult(course, event.target.value);
  })
}
initialpage();


