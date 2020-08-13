import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withState } from '@dump247/storybook-state';
import { ItemsMenu, TableCell, VirtualTable } from '@synerise/ds-table';
import faker from 'faker';
import Icon from '@synerise/ds-icon';
import {
  AddM,
  DuplicateM,
  EditM,
  FileDownloadM,
  FilterM,
  Grid2M,
  OptionHorizontalM,
  TrashM,
  VarTypeBooleanM,
  VarTypeDateM,
  VarTypeListM,
  VarTypeNumberM,
} from '@synerise/ds-icon/dist/icons';
import Table from '@synerise/ds-table';
import Button from '@synerise/ds-button';
import * as React from 'react';
import Dropdown from '@synerise/ds-dropdown';
import Menu from '@synerise/ds-menu';
import Switch from '@synerise/ds-switch/dist/Switch';
import ColumnManager, { SavedView } from '@synerise/ds-column-manager/dist/ColumnManager';
import * as moment from 'moment';
import ItemFilter from '@synerise/ds-item-filter/dist/ItemFilter';
import Result from '@synerise/ds-result';
import ModalProxy from '@synerise/ds-modal';
import { COLUMNS, EMPTY_VIEW, CATEGORIES, VIEWS } from './content/withFiltersAndSearch.data';
import { FilterElement } from '@synerise/ds-search/dist/Search.types';
import Divider from '@synerise/ds-divider';
import Search from '@synerise/ds-search';
import VarTypeStringM from '@synerise/ds-icon/dist/icons/VarTypeStringM';
import Tooltip from '@synerise/ds-tooltip';
import { ItemType } from '@synerise/ds-menu/dist/Elements/Item/MenuItem.types';
import theme from '@synerise/ds-core/dist/js/DSProvider/ThemeProvider/theme';

const decorator = storyFn => (
  <div style={{ padding: 20, width: '100vw', minWidth: '100%', position: 'absolute', top: 0, left: 0 }}>
    {storyFn()}
  </div>
);

const dataSource = [...new Array(55)].map((i, k) => ({
  key: k + 1,
  name: faker.name.findName(),
  active: faker.random.boolean(),
  country: faker.random.arrayElement([
    { code: 'us', name: 'USA' },
    { code: 'pl', name: 'Poland' },
    { code: 'de', name: 'Germany' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'ru', name: 'Russia' },
  ]),
  age: (Math.random() * 50 + 10).toFixed(0),
}));

const saveFilter = (savedView: SavedView, store) => {
  const id = moment().format('MM-DD-YYYY_HH:mm:ss');
  const newViews = [...store.state.savedViews];
  newViews[0].items = [
    ...newViews[0].items,
    {
      ...EMPTY_VIEW,
      name: savedView.meta.name,
      description: savedView.meta.description,
      columns: [...savedView.columns],
      id: id,
      created: moment().format('MM-DD-YYYY HH:mm:ss'),
    },
  ];

  store.set({
    selectedView: id,
    savedViews: newViews,
    columns: [...savedView.columns],
  });
};

const removeItem = (props, store): void => {
  store.set({
    categories: store.state.categories.map(category => ({
      ...category,
      items: category.items.filter(item => item.id !== props.id),
    })),
  });
};

const editItem = (props, store): void => {
  store.set({
    categories: store.state.categories.map(category => ({
      ...category,
      items: category.items.map(item => {
        if (item.id === props.id) {
          item.name = props.name;
        }
        return item;
      }),
    })),
  });
};

const setSelectedFilter = (props, store): void => {
  let categories = [];
  store.state.categories.forEach(cat => {
    categories = [...categories, ...cat.items];
  });
  store.set({
    selectedFilter: props.id,
    columns: categories.filter(filter => filter.id === props.id)[0].columns,
  });
};

const setSelectedView = (props, store): void => {
  let savedViews = [];
  store.state.savedViews.forEach(cat => {
    savedViews = [...savedViews, ...cat.items];
  });
  store.set({
    selectedView: props.id,
    columns: savedViews.filter(filter => filter.id === props.id)[0].columns,
  });
};

const CELL_SIZES = {
  default: 'default',
  medium: 'medium',
  small: 'small',
};

const COLUMN_ICONS = {
  text: <VarTypeStringM />,
  number: <VarTypeNumberM />,
  list: <VarTypeListM />,
  boolean: <VarTypeBooleanM />,
  date: <VarTypeDateM />,
};

const parameters = COLUMNS.map(column => ({
  text: column.name,
  icon: COLUMN_ICONS[column.type],
}));

const recent = dataSource.map(record => ({
  text: record.name,
  filter: 'name',
}));

const getSuggestions = value => {
  if (value) {
    const paramName = value.toLowerCase();
    const allSuggestions = dataSource.map(record => {
      const value = {
        name: record.name,
        age: record.age,
        status: record.active.toString(),
        country: record.country.name,
      };

      return {
        text: value[paramName],
        filter: paramName,
      };
    });
    return allSuggestions.reduce((unique, item) => {
      const exist = unique.find(record => record.text === item.text);
      return exist ? unique : [...unique, item];
    }, []);
  }
  return [];
};

const stories = {
  default: withState({
    categories: CATEGORIES,
    columns: COLUMNS,
    columnManagerVisible: false,
    itemFilterVisible: false,
    modalVisible: false,
    savedViews: VIEWS,
    savedViewsVisible: false,
    searchFilterValue: '',
    searchSuggestions: [],
    searchValue: '',
    selectedFilter: undefined,
    selectedRows: [],
    selectedView: undefined,
  })(({ store }) => {
    const { selectedRows, columns } = store.state;

    const handleSelectRow = selectedRowKeys => {
      store.set({ selectedRows: selectedRowKeys });
    };

    const getColumns = () => {
      const mappedColumns = columns
        .filter(column => column.visible)
        .map(column => {
          switch (column.key) {
            case 'active': {
              return {
                ...column,
                title: column.name,
                dataIndex: column.key,
                width: 254,
                render: active => (
                  <Tooltip title={active ? 'Switch off' : 'Switch on'} placement="topLeft">
                    <Switch onChange={action('Status change')} checked={active} label="" />
                  </Tooltip>
                ),
              };
            }
            case 'country': {
              return {
                ...column,
                title: column.name,
                dataIndex: column.key,
                width: 254,
                render: country => <TableCell.FlagLabelCell countryCode={country.code} label={country.name} />,
              };
            }
            default:
              return {
                ...column,
                title: column.name,
                dataIndex: column.key,
                width: 254,
              };
          }
        });
      return [
        ...mappedColumns,
        {
          render: () => (
            <TableCell.ActionCell>
              <Dropdown
                overlay={
                  <Menu style={{ padding: 8 }}>
                    <Menu.Item
                      onClick={action('Edit')}
                      prefixel={<Icon component={<EditM />} color={theme.palette['grey-600']} />}
                    >
                      Edit
                    </Menu.Item>
                    <Menu.Item
                      onClick={action('Duplicate')}
                      prefixel={<Icon component={<DuplicateM />} color={theme.palette['grey-600']} />}
                    >
                      Duplicate
                    </Menu.Item>
                    <Menu.Item
                      onClick={action('Delete')}
                      type={ItemType.DANGER}
                      prefixel={<Icon component={<TrashM />} />}
                    >
                      Delete
                    </Menu.Item>
                  </Menu>
                }
                trigger={['click']}
              >
                <Button type="ghost" mode="single-icon">
                  <Icon component={<OptionHorizontalM  />} />
                </Button>
              </Dropdown>
            </TableCell.ActionCell>
          ),
        },
      ];
    };

    const toggleItemFilterVisible = (): void => {
      store.set({ itemFilterVisible: !store.state.itemFilterVisible });
    };

    const selectedView = () => {
      let allItems = [];
      store.state.savedViews.forEach(cat => {
        allItems = [...allItems, ...cat.items];
      });
      return allItems.find(filter => filter.id === store.state.selectedView);
    };

    const selectedFilter = () => {
      let allItems = [];
      store.state.categories.forEach(cat => {
        allItems = [...allItems, ...cat.items];
      });
      return allItems.find(filter => filter.id === store.state.selectedFilter);
    };

    const filteredDataSource = () => {
      if (store.state.searchFilterValue && store.state.searchValue) {
        return dataSource.filter(record => {
          const value = {
            name: record.name,
            age: record.age,
            status: record.active.toString(),
            country: record.country.name,
          };
          return value[store.state.searchFilterValue.toLowerCase()].includes(store.state.searchValue);
        });
      }
      return !store.state.searchValue
        ? dataSource
        : dataSource.filter(record => {
            return record.name.toLowerCase().includes(store.state.searchValue.toLowerCase());
          });
    };

    const selectEven = () => {
      const evenRows = filteredDataSource()
        .map(row => row.key)
        .filter((key, index) => index % 2);
      store.set({ selectedRows: evenRows });
    };

    return (
      <>
        <Table
          title={`${filteredDataSource().length} ${text('Set name of table items', 'results')}`}
          dataSource={filteredDataSource()}
          tableLayout="fixed"
          scroll={{ x: 1200 }}
          columns={getColumns()}
          loading={boolean('Set loading state', false)}
          cellSize={select('Set cells size', CELL_SIZES, CELL_SIZES.default)}
          headerButton={
            boolean('Show header button', false) && (
              <Button type="ghost" mode="icon-label" onClick={action('Header button action')}>
                <Icon component={<AddM />} />
                {text('Header button label', 'Add row')}
              </Button>
            )
          }
          filters={[
            {
              key: 'view',
              icon: <Grid2M />,
              tooltips: { default: 'Table view', clear: 'Clear view', define: 'Define view', list: 'Saved views' },
              openedLabel: 'Define',
              showList: () => store.set({ savedViewsVisible: true }),
              show: () => store.set({ columnManagerVisible: true }),
              handleClear: () => store.set({ selectedView: undefined }),
              selected: selectedView(),
            },
            {
              key: 'filter',
              icon: <FilterM />,
              tooltips: { default: 'Filter', clear: 'Clear filter', define: 'Define filter', list: 'Saved filters' },
              openedLabel: 'Define',
              showList: () => store.set({ itemFilterVisible: true }),
              show: () => store.set({ modalVisible: true }),
              handleClear: () => store.set({ selectedFilter: undefined }),
              selected: selectedFilter(),
            },
          ]}
          pagination={{
            showSizeChanger: boolean('Show size changer', true),
            showQuickJumper: boolean('Show quick jumper', true),
            onChange: action('pageChanged'),
          }}
          locale={{
            pagination: {
              items: 'results',
            },
          }}
          rowKey={row => row.key}
          selection={
            boolean('Enable row selection', false) && {
              onChange: handleSelectRow,
              selectedRowKeys: selectedRows,
              fixed: true,
              selections: [
                Table.SELECTION_ALL,
                Table.SELECTION_INVERT,
                {
                  key: 'even',
                  label: 'Select even',
                  onClick: selectEven,
                },
              ],
            }
          }
          itemsMenu={
            <ItemsMenu>
              <Button onClick={action('Export')} type="secondary" mode="icon-label">
                <Icon component={<FileDownloadM />} />
                Export
              </Button>
              <Button onClick={action('Edit')} type="secondary" mode="icon-label">
                <Icon component={<EditM />} />
                Edit
              </Button>
              <Button onClick={action('Delete')} type="secondary" mode="icon-label">
                <Icon component={<TrashM />} />
                Delete
              </Button>
            </ItemsMenu>
          }
          searchComponent={
            <Search
              clearTooltip="Clear"
              dropdownMaxHeight={400}
              filterLookupKey="filter"
              onClear={() => {
                store.set({
                  searchValue: '',
                  searchFilterValue: '',
                });
              }}
              onParameterValueChange={value => {
                store.set({
                  searchFilterValue: value,
                  searchSuggestions: getSuggestions(value),
                });
              }}
              onValueChange={value => store.set({ searchValue: value })}
              parameters={parameters.slice(0, number('Parameters count', 5))}
              parametersDisplayProps={{
                tooltip: 'Parameters',
                title: 'Parameters',
                rowHeight: 32,
                itemRender: (item: FilterElement) => {
                  return (
                    <Menu.Item
                      highlight={store.state.searchValue}
                      onItemHover={(): void => {}}
                      prefixel={item && <Icon component={item && item.icon} color={theme.palette['grey-600']} />}
                    >
                      {item && item.text}
                    </Menu.Item>
                  );
                },
              }}
              parameterValue={store.state.searchFilterValue}
              placeholder="Search"
              recent={recent.slice(0, number('Recent count', 5))}
              recentDisplayProps={{
                tooltip: 'Recent',
                title: 'Recent',
                rowHeight: 32,
                itemRender: (item: FilterElement) => (
                  <Menu.Item onItemHover={(): void => {}}>{item && item.text}</Menu.Item>
                ),
              }}
              suggestions={store.state.searchSuggestions}
              suggestionsDisplayProps={{
                tooltip: 'Suggestions',
                title: 'Suggestions',
                rowHeight: 32,
                itemRender: (item: FilterElement) => (
                  <Menu.Item onItemHover={(): void => {}}>{item && item.text}</Menu.Item>
                ),
              }}
              textLookupConfig={{
                parameters: 'text',
                recent: 'text',
                suggestions: 'text',
              }}
              value={store.state.searchValue}
              width={300}
            />
          }
        />
        <ColumnManager
          hide={() => store.set({ columnManagerVisible: false })}
          visible={store.state.columnManagerVisible}
          savedViewsVisible={store.state.savedViewsVisible}
          hideSavedViews={() => store.set({ savedViewsVisible: false })}
          columns={store.state.columns}
          onApply={columns => store.set({ columns: columns, columnManagerVisible: false })}
          onSave={savedView => saveFilter(savedView, store)}
          itemFilterConfig={{
            removeItem: params => removeItem(params, store),
            editItem: params => editItem(params, store),
            selectItem: params => setSelectedView(params, store),
            duplicateItem: action('duplicate item'),
            selectedItemId: store.state.selectedView,
            categories: store.state.savedViews,
            texts: {
              activateItemTitle: 'By activating this view, you will cancel your unsaved view settings',
              activate: 'Activate',
              cancel: 'Cancel',
              deleteConfirmationTitle: 'Delete view',
              deleteConfirmationDescription:
                'Deleting this view will permanently remove it from templates library. All tables using this view will be reset.',
              deleteLabel: 'Delete',
              noResults: 'No results',
              searchPlaceholder: 'Search',
              searchClearTooltip: 'Clear',
              title: 'Views',
              itemActionRename: 'Rename',
              itemActionDuplicate: 'Duplicate',
              itemActionDelete: 'Delete',
            },
          }}
        />
        <ItemFilter
          visible={store.state.itemFilterVisible}
          hide={toggleItemFilterVisible}
          removeItem={props => removeItem(props, store)}
          editItem={props => editItem(props, store)}
          selectItem={props => setSelectedFilter(props, store)}
          duplicateItem={action('duplicate item')}
          selectedItemId={store.state.selectedFilter}
          categories={store.state.categories}
        />
        <ModalProxy
          blank
          closable
          onCancel={() => store.set({ modalVisible: false })}
          visible={store.state.modalVisible}
          size={'small'}
          footer={null}
        >
          <Result
            type="info"
            title="In place of this modal you can implement any filter component."
            description="This is just an example of filter trigger."
          />
        </ModalProxy>
      </>
    );
  }),
};

export default {
  name: 'Table/Table with filters and search',
  decorator,
  stories,
  Component: Table,
};
