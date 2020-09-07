import IChecklist from '../../IChecklist';
import { ManageChecklist } from './ManageChecklist';

const defaultChecklist = [
  {
    name: 'Live by harmless untruths',
    complete: false,
  },
  {
    name: 'Research the foma',
    complete: false,
  },
  {
    name: 'Busy busy busy',
    complete: true,
  },
] as IChecklist[];

describe('ManageChecklist', () => {
  let checklist = defaultChecklist;
  const updateChecklist = (newChecklist: IChecklist[]) => {
    checklist = newChecklist;
  };

  const { createItem, toggleItem, deleteItem, clearCompletedItems } = ManageChecklist({
    checklist,
    updateChecklist,
  });

  afterEach(() => {
    checklist = defaultChecklist;
  });

  it('create a new item in the checklist', () => {
    createItem('Spin round and round');
    expect(checklist).toMatchSnapshot();
  });

  it('complete an item', () => {
    const index = 0;
    const item = checklist[index];
    toggleItem({ item, index });
    expect(checklist).toMatchSnapshot();
  });

  it('delete an item', () => {
    deleteItem({ index: 2 });
    expect(checklist).toMatchSnapshot();
  });

  it('remove completed items from checklist', () => {
    clearCompletedItems();
    expect(checklist).toMatchSnapshot();
  });
});
