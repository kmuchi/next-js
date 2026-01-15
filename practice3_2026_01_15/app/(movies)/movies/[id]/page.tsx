export default async function MovieDetail({
    params, // 1. 여기서 {id}로 바로 쪼개지 말고 params 통째로 받습니다.
}: {
    params: Promise<{ id: string }>; // 2. 타입도 Promise로 감싸줍니다.
}) {
    const { id } = await params; // 3. 내부에서 await로 id를 꺼냅니다.

    return <h1>Movie {id}</h1>;
}