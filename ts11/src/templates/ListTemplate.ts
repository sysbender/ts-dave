import FullList from "../model/FullList";

interface DOMList {
  ul: HTMLUListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export class ListTemplate implements DOMList {
  ul: HTMLUListElement;
  static instance: ListTemplate = new ListTemplate();

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }
  clear(): void {
    this.ul.innerHTML = "";
  }
  render(fullList: FullList): void {
    this.clear();
    fullList.list.forEach((item) => {
      // checkbox
      const check = document.createElement("input") as HTMLInputElement;
      check.type = "checkbox";
      check.id = item.id;
      check.tabIndex = 0;
      check.checked = item.checked;
      check.addEventListener("change", () => {
        item.checked = !item.checked;
        fullList.save();
      });

      //label
      const label = document.createElement("label") as HTMLLabelElement;
      label.htmlFor = item.id;
      label.innerText = item.item;

      // button
      const btn = document.createElement("button") as HTMLButtonElement;
      btn.className = "button";
      btn.innerText = "X";
      btn.addEventListener("click", () => {
        fullList.removeItem(item.id);
        this.render(fullList);
      });

      // li
      const li = document.createElement("li") as HTMLLIElement;
      li.className = "item";
      li.append(check);
      li.append(label);
      li.append(btn);

      this.ul.append(li);
    });
  }
}

/**
                 <li class="item">
                    <input type="checkbox" id="2">
                    <label for="2">sleep</label>
                    <button class="button">X</button>
                </li>
 * 
 */
