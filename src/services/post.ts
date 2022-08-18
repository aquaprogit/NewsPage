export async function getPosts(): Promise<PostData[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await data.json();
}
export class PostData{
  id: number = 0;
  userId: number = 0;
  title: string = "";
  body: string = "";
}
