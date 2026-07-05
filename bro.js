const course = [
  {
    name: "javaScript Basics",
    price: 1000,
    rating: 4.57,
    isAvailable: false,
    languages: ["Malayalam", "Tamil"],
    mentor: { name: "subin", phone: "9898989889" },
  },
  {
    name: "java",
    price: 1000,
    rating: 4.57,
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
    rating: 4.57,
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
  const courseUI = `<div class="course-title">
   <h3>Course Name: ${formateName(course.name)}</h3>
   <p> Price : ${course.price}</p>
   <p> Rating : ${Math.round(course.rating * 10) / 10}</p>
   <p> Available : ${course.isAvailable ? "Yes" : "No"}</p>
   <p> Languages : ${course.languages.join(", ")}</p>
   <p> Mentor : ${formateName(course.mentor.name)} (${course.mentor.phone})</p>
  </div>`;
  courseContainer.innerHTML = courseUI;
}
displayCourse();
