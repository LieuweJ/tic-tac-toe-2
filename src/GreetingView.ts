export class GreetingView {
  public constructor(private readonly redOutputDiv: HTMLDivElement) {}

  public render(message: string): void {
    this.redOutputDiv.textContent = message;
  }
}
