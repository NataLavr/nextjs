const { PrismaClient } = require('@prisma/client')
 
const prisma = new PrismaClient()

export default async function PostPage() {
    const posts = await prisma.post.findMany();

    return (
         <div>
            <h1>Blog Posts</h1>
            {posts.map((post: any) => (
            <div key={posts.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            ))}
         </div>
    );
}