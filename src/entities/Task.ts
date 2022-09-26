export class Task {
  public id?: number;

  public title!: string;
  public status!: string;

  constructor(props: Omit<Task, "id">) {
    Object.assign(this, props);
  }
}
