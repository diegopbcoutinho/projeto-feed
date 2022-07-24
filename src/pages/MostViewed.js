import Feed from "../components/Feed"

export default function MostViewed() {
    const posts = [
        {
        id: Math.random(),
        content: "SPA. Feito utilizando react-router-dom",
        userName: "Diego",
        publishedAt: new Date(),
    },
]

    return (
        <main className="most-viewed">
            <Feed posts={posts} 
            title="Mais Vistos"
            subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
            />
        </main>
    )
}