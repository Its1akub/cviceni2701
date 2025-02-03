export function calcAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return Math.max(0, currentYear - birthYear);
}
