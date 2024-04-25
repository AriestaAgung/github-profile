export async function NetworkManager(request: any) {
    const res = await fetch("", request)

    if(!res.ok) {
        throw new Error("n/a")
    }
    return res.json()
}