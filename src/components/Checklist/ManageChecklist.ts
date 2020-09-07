import IChecklist from '../../IChecklist';

export interface IManageItem {
  item?: IChecklist;
  index: number;
}

export interface IManageChecklist {
  checklist?: IChecklist[];
  updateChecklist: Function;
}

export const ManageChecklist = ({ checklist, updateChecklist }: IManageChecklist) => {
  const createItem = (name: String) => {
    const newItem = {
      name,
      complete: false,
    } as IChecklist;

    const newChecklist = [newItem, ...checklist];
    return updateChecklist(newChecklist);
  };

  const clearCompletedItems = () => {
    const newChecklist = checklist.filter(({ complete }) => !complete);
    return updateChecklist(newChecklist);
  };

  const toggleItem = ({ item, index }: IManageItem) => {
    const value = !item.complete;
    const newItem = {
      name: item.name,
      complete: value,
    } as IChecklist;
    const newChecklist = [...checklist];
    newChecklist[index] = newItem;
    return updateChecklist(newChecklist);
  };

  const deleteItem = ({ index }: IManageItem) => {
    const newChecklist = [...checklist];
    newChecklist.splice(index, 1);
    return updateChecklist(newChecklist);
  };

  return {
    createItem,
    toggleItem,
    deleteItem,
    clearCompletedItems,
  };
};
