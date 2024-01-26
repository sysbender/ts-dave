export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

// class -

export default class ListItem implements Item {
  get id(): string {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked) {
    this._checked = checked;
  }
  constructor(
    private _id: string,
    private _item: string,
    private _checked: boolean
  ) {}
}
