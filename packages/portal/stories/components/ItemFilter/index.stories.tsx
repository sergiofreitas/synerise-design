import * as React from 'react';

import ItemFilter from '@synerise/ds-item-filter';
import { text } from '@storybook/addon-knobs';
import { withState } from '@dump247/storybook-state';
import Button from '@synerise/ds-button';

const getTexts = () => ({
  activateItemTitle: text('Activate item', 'By activating this filter, you will cancel your unsaved filter settings'),
  activate: text('Activate', 'Activate'),
  cancel: text('Cancel', 'Cancel'),
  deleteConfirmationTitle: text('Delete confirmation title', 'Delete view'),
  deleteConfirmationDescription: text('Delete confirmation description', 'Deleting this template will permanently remove it from templates library. All tables using this template will be reset to the default template.'),
  deleteConfirmationYes: text('Delete confirm', 'Yes, delete view'),
  deleteConfirmationNo: text('Delete cancel', 'No, Keep it'),
  noResults: text('No results', 'No results'),
  searchPlaceholder: text('Search placeholder', 'Search'),
  title: text('Drawer title', 'Filter'),
  searchClearTooltip: text('Clear tooltip', 'Clear'),
  itemActionRename: text('Rename label', 'Rename'),
  itemActionDuplicate: text('Duplicate label', 'Duplicate'),
  itemActionDelete: text('Delete label', 'Delete'),
});

const CATEGORIES = [
  {
    label: 'All filters',
  },
  {
    label: 'My filters',
  },
];

const ITEMS = [
  {
    id: '0000',
    name: 'Filter #1',
    description: 'The last 10 days of all customers sales ',
    created: '01-05-2020 12:02',
    canUpdate: true,
    canDelete: true,
    canDuplicate: true,
    categories: ['My filters', 'All filters'],
    user: {
      firstname: 'Jan',
      lastname: 'Nowak',
    }
  },
  {
    id: '0001',
    name: 'Filter #2',
    description: 'The last 10 days of all customers sales The last 10 days of all customers sales ',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0002',
    name: 'Filter #3',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      avatar_url: 'https://www.w3schools.com/howto/img_avatar.png',
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0003',
    name: 'Filter #4',
    description: 'The last 10 days of all customers sales ',
    created: '08-22-2018 12:02',
    canUpdate: true,
    canDelete: true,
    canDuplicate: true,
    categories: ['My filters', 'All filters'],
    user: {
      firstname: 'Jan',
      lastname: 'Nowak',
    }
  },
  {
    id: '0004',
    name: 'Filter #5',
    description: 'The last 10 days of all customers sales ',
    created: '01-05-2020 12:02',
    canUpdate: true,
    canDelete: true,
    canDuplicate: true,
    categories: ['My filters', 'All filters'],
    user: {
      firstname: 'Jan',
      lastname: 'Nowak',
    }
  },
  {
    id: '0005',
    name: 'Filter #6',
    description: 'The last 10 days of all customers sales ',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0006',
    name: 'Filter #7',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      avatar_url: 'https://www.w3schools.com/howto/img_avatar.png',
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0007',
    name: 'Filter #8',
    description: 'The last 10 days of all customers sales ',
    created: '08-22-2018 12:02',
    canUpdate: true,
    canDelete: true,
    canDuplicate: true,
    categories: ['My filters', 'All filters'],
    user: {
      firstname: 'Jan',
      lastname: 'Nowak',
    }
  },
  {
    id: '0008',
    name: 'Filter #9',
    description: 'The last 10 days of all customers sales ',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0009',
    name: 'Filter #10',
    created: '01-12-2019 12:02',
    canUpdate: false,
    canDelete: false,
    canDuplicate: true,
    categories: ['All filters'],
    user: {
      avatar_url: 'https://www.w3schools.com/howto/img_avatar.png',
      firstname: 'Kamil',
      lastname: 'Kowalski',
    }
  },
  {
    id: '0010',
    name: 'Filter #11',
    description: 'The last 10 days of all customers sales ',
    created: '08-22-2018 12:02',
    canUpdate: true,
    canDelete: true,
    canDuplicate: true,
    categories: ['My filters', 'All filters'],
    user: {
      firstname: 'Jan',
      lastname: 'Nowak',
    }
  },
];


const removeItem = (props, store): void => {
  store.set({
    items: store.state.items.filter(item => item.id !== props.id),
  });
};

const editItem = (props, store): void => {
  store.set({
    items: store.state.items.map(item => {
      if(item.id === props.id) {
        item.name = props.name;
      }
      return item;
    })
  })
};

const setSelectedItem = (props, store): void => {
  store.set({
    selectedItemId: props.id,
  })
};


const stories = {
  default: withState({
    items: ITEMS,
    selectedItemId: undefined,
    itemFilterVisible: false,
  })(({ store }) => {
    const duplicateItem = (props): void => {
      const itemForDuplication = store.state.items.find(item => item.id === props.id);
      store.set({
        // @ts-ignore
        items: [
          ...store.state.items,
          {
            ...itemForDuplication,
            id: Date.now(),
            categories: ['My filters', 'All filters'],
            canUpdate: true,
            canDelete: true,
            canDuplicate: true,
            name: `${itemForDuplication.name} - copy`
          }
        ]
      })
    };

    const toggleItemFilterVisible = (): void => {
      store.set({itemFilterVisible: !store.state.itemFilterVisible});
    };

    return (
      <>
        <Button onClick={toggleItemFilterVisible} type='primary'>Show item filter</Button>
        <ItemFilter
          visible={store.state.itemFilterVisible}
          hide={toggleItemFilterVisible}
          texts={getTexts()}
          removeItem={props => removeItem(props, store)}
          editItem={props => editItem(props, store)}
          selectItem={props => setSelectedItem(props, store)}
          duplicateItem={props => duplicateItem(props)}
          selectedItemId={store.state.selectedItemId}
          categories={CATEGORIES}
          items={store.state.items}
        />
      </>
    )
  })
};

export default {
  name: 'Components|ItemFilter',
  config: {},
  stories,
  Component: ItemFilter,
}
