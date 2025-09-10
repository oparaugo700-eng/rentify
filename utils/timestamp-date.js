export function TimeStampToDate() {
    const t = new Date(stamp);
    return t.toLocaleString();
}