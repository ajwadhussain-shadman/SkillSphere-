

export async function getCourseData() {
    const res = await fetch('https://skill-sphere-bice-sigma.vercel.app/data.json');
    const data = await res.json();
    return data;
    
}