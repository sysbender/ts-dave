import "./css/style.css";
//import typescriptLogo from "./typescript.svg";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import { ListTemplate } from "./templates/ListTemplate";

function initApp(): void {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault();
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryText: string = input.value.trim();
    if (!newEntryText) return;
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[-1].id) + 1
      : 1;

    const newItem = new ListItem(itemId.toString(), newEntryText, false);
    fullList.addItem(newItem);
    template.render(fullList);
  });

  // clear
  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearItems.addEventListener("click", (): void => {
    fullList.clearList();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
}

document.addEventListener("DOMContentLoaded", initApp);
