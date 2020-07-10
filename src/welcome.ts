import { bindable } from "aurelia";
import { FASTDesignSystemProvider } from "@microsoft/fast-components";

export class Welcome {
  public message = "Welcome to the Aurelia 2 & MSFT FAST demo!";

  @bindable densityValue = 0;

  densityValueChanged(val: number) {
    console.log("triggerd!");

    let root = document.documentElement;
    let desSys = root
      .getElementsByTagName("fast-design-system-provider")
      .item(0);

    (<any>desSys).density = val;
  }
}
