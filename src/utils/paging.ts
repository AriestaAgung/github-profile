

export default function getPaging<T>(limit: number,data: T[]): T[] {
    return data.slice(0, limit);
}