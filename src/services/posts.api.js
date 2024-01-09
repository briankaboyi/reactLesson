export default async function getAllPosts(){
    const data =await fetch("https://jsonplaceholder.typicode.com/posts")
    const res = await data.json()
    return res
}
// console.log(await getAllPosts())