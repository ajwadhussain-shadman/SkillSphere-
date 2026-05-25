

export async function getCourseData() {
    const res = await fetch('https://skill-sphere-bice-sigma.vercel.app/data.json');
    const data = await res.json();
    return data;
    
}

export async function searchCourse(search){
    const courses=await getCourseData();
    const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()));
    return filteredCourses;
}