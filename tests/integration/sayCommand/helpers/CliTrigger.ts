import { App } from '../../../../src/app';

export class SayCommandCliTrigger {
  public constructor(private readonly app: App) {}

  public callCli(args: string[]): void {
    this.app.cli.parse(args);
  }

  public callSay(word?: string): void {
    if (word !== undefined) {
      this.callCli(['say', word]);
    } else {
      this.callCli(['say']);
    }
  }
}
