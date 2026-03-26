export class GreetingModel {
  private name = '';

  public setName(name: string): void {
    this.name = name.trim();
  }

  public getName(): string {
    return this.name === '' ? 'world' : this.name;
  }

  public getMessage(): string {
    return `hello ${this.getName()}`;
  }
}
