import prisma from ".";

export async function getPosts() {
    try{
        const posts = await prisma.post.findMany();
        return { posts };
    }catch (error) {
        return {error};
    }
}