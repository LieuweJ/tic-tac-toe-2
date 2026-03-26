import { GreetingModel } from './GreetingModel';
import { GreetingView } from './GreetingView';

export class GreetingController {
  public constructor(
    private readonly nameInput: HTMLInputElement,
    private readonly greetButton: HTMLButtonElement,
    private readonly model: GreetingModel,
    private readonly view: GreetingView
  ) {}

  public start(): void {
    this.view.render(this.model.getMessage());
    this.greetButton.addEventListener('click', this.handleClick);
  }

  private readonly handleClick = (): void => {
    this.model.setName(this.nameInput.value);
    this.view.render(this.model.getMessage());
  };
}
