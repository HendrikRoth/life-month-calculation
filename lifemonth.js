export default function lifemonth(date, now = new Date()) {
    let months = 0;
    months = (now.getFullYear() - date.getFullYear()) * 12;

    months -= date.getMonth();
    months += now.getMonth();

    months += date.getDate() <= now.getDate() ? 1 : 0;
    return months <= 0 ? 0 : months;
}
