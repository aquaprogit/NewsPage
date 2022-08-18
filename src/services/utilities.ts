export module Utils{
    export function generateColorFromName(string : string): string {
        let hash = 0;
        let i;
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';
        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `A0${
                value.toString(16)
            }`.slice(-2);
        }

        return color;
    }
export function getInitialsFromName(name: string) {
    return name[0] + name[name.indexOf(' ') + 1];
}

}

export default Utils;