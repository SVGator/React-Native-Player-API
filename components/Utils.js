export function round(value, decimals = 2) {
    if (Number.isInteger(value)) {
        return value;
    }
    const pow = Math.pow(10, decimals);
    return Math.round((+value + Number.EPSILON) * pow) / pow;
}

export function multipleOfMod(value, step) {
    return round(round(value / step, 0) * step, -Math.log10(step));
}
