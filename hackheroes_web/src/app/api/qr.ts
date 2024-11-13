const baseURL = `/api/v1/auth`;

type TokenCallback = (token: string) => void;

export function qrConnection(iltCallback: TokenCallback) {
    const ws = new WebSocket(baseURL + "/qr");
    ws.onmessage = async (ev) => {
        const message = ev.data as string;
        const token = message.slice(1);
        if (message.startsWith("0")) iltCallback(token);
        else if (message.startsWith("1")) {
            await fetch(baseURL + "jwt", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + token
                }
            })
        }
    }
}