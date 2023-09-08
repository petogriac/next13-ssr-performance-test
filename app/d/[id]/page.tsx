export default function Detail({params}: { params: { id: string }}) {
    return (
        <div>
            <h1>Detail of {params.id}</h1>
        </div>
    )
}
