export class Todo {
    public id: number;
    public title: string;
    public description: string;
    public status: boolean;

    constructor(id: number, title: string, description: string, status: boolean)
    {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}
