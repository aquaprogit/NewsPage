export async function getPosts(): Promise<any> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await data.json();
}
export class PostData{
    id: number = 0;
    title: string = "";
    body: string = "";
}
