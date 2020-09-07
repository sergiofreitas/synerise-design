import * as React from 'react';
import Sidebar from '@synerise/ds-sidebar';
import Folders from '@synerise/ds-folders';
import Menu from '@synerise/ds-menu';
import { boolean } from '@storybook/addon-knobs';
import { FOLDERS, MIDDLE_MENU_ITEMS, TOP_MENU_ITEMS } from './dataset';
import Icon from '@synerise/ds-icon';
import Divider from '@synerise/ds-divider';
import { action } from '@storybook/addon-actions';
import { StarFillM, StarM } from '@synerise/ds-icon/dist/icons';
import { FolderItem } from '@synerise/ds-folders/dist/Folders.types';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';
const wrapperStyles: React.CSSProperties = {
  width: '338px',
  background: 'white',
  padding: '24px 0',
};

const renderMenuItem = (item: { icon: React.ReactNode; text: string }) => (
  <Menu.Item prefixel={<Icon component={item.icon} />} text={item.text} />
);

const getFilter = filterName => {
  if (filterName === 'favourite') {
    return (item: FolderItem) => !!item.favourite;
  }
  return undefined;
};

const stories = {
  default: () => {
    const showActionsInRow = boolean('Show actions in a row', false);
    const getActionsDisplay = (row: boolean): 'inline' | 'dropdown' => {
      return row ? 'inline' : 'dropdown';
    };

    const [filter, setFilter] = React.useState();
    const DividerWrapper = (
      <div style={{ margin: '16px 20px' }}>
        <Divider dashed />
      </div>
    );
    return (
      <div style={wrapperStyles}>
        <Menu style={{ padding: '0 24px' }}>
          {TOP_MENU_ITEMS.map(renderMenuItem)}
          <Menu.Item
            onClick={() => {
              filter === 'favourite' ? setFilter(undefined) : setFilter('favourite');
            }}
            prefixel={
              <div>
                <Icon
                  component={filter === 'favourite' ? <StarFillM /> : <StarM />}
                  color={filter === 'favourite' ? theme.palette['yellow-600'] : theme.palette['grey-600']}
                />
              </div>
            }
          >
            Starred
          </Menu.Item>
        </Menu>
        {DividerWrapper}
        <Menu style={{ padding: '0 24px' }}>{MIDDLE_MENU_ITEMS.map(renderMenuItem)}</Menu>
        {DividerWrapper}
        <div style={{ padding: '0 24px' }}>
          <Folders
            actionsDisplay={getActionsDisplay(showActionsInRow)}
            dataSource={FOLDERS}
            visibleItemsCount={5}
            texts={{
              add: 'Add',
              addItemLabel: 'Add folder',
              addToFavourite: 'Favourites',
              cancel: 'Cancel',
              chooseDestinationFolder: 'Choose folder',
              delete: 'Remove',
              deleteFolderLabel: 'Remove folder',
              deleteFolderConfirmationMessage: 'Are you sure you want to remove folder?',
              deleteFolderDescription: 'This folder isn’t empty. What you want to do with content? ',
              deleteFromFavourites: 'Favourites',
              deleteAllContent: 'Remove all items',
              edit: 'Edit',
              enterSettings: 'Settings',
              favourite: 'Favourite',
              invalidNameError: 'Invalid folder name',
              folderNamePlaceholder: 'Folder name',
              moveToDefault: 'Move to default folder',
              moveToOtherFolder: 'Move to other folder',
              showLessLabel: 'Hide',
              showMoreLabel: 'Show',
              less: 'less',
              more: 'more',
            }}
            onFavourite={action('OnFavourite')}
            onEdit={action('OnEdit')}
            onAdd={action('OnAdd')}
            onDelete={action('OnDelete')}
            onSettings={action('OnSettings')}
            onSelect={action('OnSelect')}
            addButtonDisabled={false}
            folderFilter={getFilter(filter)}
          />
        </div>
      </div>
    );
  },
};

export default {
  name: 'Components/Folders',
  config: {},
  stories,
};