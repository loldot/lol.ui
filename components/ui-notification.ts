const ErrorIconDataUrl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23e25061" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
    </svg>`;

const WarningIconDataUrl = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="%23e3cb2b" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
    </svg>`;

export class NotificationBuilder {
    private _title: string;
    private _options = {} as NotificationOptions;

    public get title(): string {
        return this._title;
    }

    constructor(title: string) {
        this._title = title;
    }

    public withIcon(icon: string): NotificationBuilder {
        this._options.icon = this.getIcon(icon);
        return this;
    }

    public withBody(body: string): NotificationBuilder {
        this._options.body = body;
        return this;
    }

    public send(): void {
        if (!("Notification" in window)) {
            alert(this._title);
            return;
        }
        if (Notification.permission === "granted") {
            this.createNotification();
            return;
        }
        Notification.requestPermission().then(x => {
            if (x === "granted") {
                this.createNotification();
            }
        })
    }

    protected createNotification() {

        return new Notification(this.title, this._options);
    }

    protected getIcon(type: string) {
        switch (type) {
            case 'error': return ErrorIconDataUrl;
            case 'warning': return WarningIconDataUrl;
            default: return type;
        }
    }
}