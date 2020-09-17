import * as React from 'react';
import {
  ExpressionM,
  FolderM,
  NotificationsM,
  VarTypeNumberM,
  VarTypeStringM,
  BooleanM,
  CalendarM,
  HashM, ListM, TextM,
} from '@synerise/ds-icon/dist/icons';

export const SUBJECT_ITEMS = [...new Array(30)].map((i, index) => ({
  id: index,
  name: `Attribute #${index}`,
  icon: <NotificationsM />,
}));


export const PARAMETER_GROUPS = [
  {
    name: 'Recent',
    id: 1,
    defaultGroup: true,
  },{
    name: 'All',
    id: 2,
    subGroups: [{
      name: 'Attributes',
      id: 3,
      icon: <FolderM />
    },
      {
        name: 'Expressions',
        id: 4,
        icon: <FolderM />
      },
      {
        name: 'Aggregates',
        id: 3,
        icon: <FolderM />
      },
    ]
  }
];

export const PARAMETER_ITEMS = [
  {
    id: 0,
    name: 'First name',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 1,
    name: 'Last name',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 2,
    name: 'City',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 3,
    name: 'Loyality score',
    groupId: 1,
    icon: <ExpressionM />,
  },
  {
    id: 4,
    name: 'Points',
    groupId: 1,
    icon: <VarTypeNumberM />,
  },
  {
    id: 110,
    name: 'First name',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 4,
    name: 'Attribute #1',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 5,
    name: 'Attribute #2',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 6,
    name: 'Attribute #3',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 7,
    name: 'Attribute #4',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 8,
    name: 'Expression #1',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 9,
    name: 'Expression #2',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 10,
    name: 'Expression #3',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 11,
    name: 'Expression #4',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 12,
    name: 'Aggregate #1',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 13,
    name: 'Aggregate #2',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 14,
    name: 'Aggregate #3',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 15,
    name: 'Aggregate #4',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
]


export const SUBJECT_TEXTS = {
  searchPlaceholder: 'Search',
  noResults: 'No results',
}

export const FACTORS_TEXTS = {
  datePicker: {
    apply: 'Apply',
    clearTooltip: 'Clear',
    inputPlaceholder: 'Select date',
    now: 'Now',
  },
  dynamicKey: {
    keyPlaceholder: 'Key',
    valuePlaceholder: 'Value',
  },
  formula: {
    buttonPlaceholder: 'Define formula',
    defaultName: 'Formula'
  },
  parameter: {
    searchPlaceholder: 'Search',
    noResults: 'No results',
  },
  valuePlaceholder: 'Value',
  modalApply: 'Apply',
  modalCancel: 'Cancel',
  modalTitle: 'Value'
}

export const FACTORS_GROUPS = [
  {
    name: 'Recent',
    id: 1,
    defaultGroup: true,
  },{
    name: 'All',
    id: 2,
    subGroups: [{
      name: 'Attributes',
      id: 3,
      icon: <FolderM />
    },
      {
        name: 'Expressions',
        id: 4,
        icon: <FolderM />
      },
      {
        name: 'Aggregates',
        id: 3,
        icon: <FolderM />
      },
    ]
  }
];

export const FACTORS_ITEMS = [
  {
    id: 0,
    name: 'First name',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 1,
    name: 'Last name',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 2,
    name: 'City',
    groupId: 1,
    icon: <VarTypeStringM />,
  },
  {
    id: 3,
    name: 'Loyality score',
    groupId: 1,
    icon: <ExpressionM />,
  },
  {
    id: 4,
    name: 'Points',
    groupId: 1,
    icon: <VarTypeNumberM />,
  },
  {
    id: 110,
    name: 'First name',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 4,
    name: 'Attribute #1',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 5,
    name: 'Attribute #2',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 6,
    name: 'Attribute #3',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 7,
    name: 'Attribute #4',
    groupId: 3,
    icon: <VarTypeStringM />,
  },
  {
    id: 8,
    name: 'Expression #1',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 9,
    name: 'Expression #2',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 10,
    name: 'Expression #3',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 11,
    name: 'Expression #4',
    groupId: 4,
    icon: <VarTypeStringM />,
  },
  {
    id: 12,
    name: 'Aggregate #1',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 13,
    name: 'Aggregate #2',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 14,
    name: 'Aggregate #3',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
  {
    id: 15,
    name: 'Aggregate #4',
    groupId: 5,
    icon: <VarTypeStringM />,
  },
]

export const OPERATORS_TEXTS = {
  buttonLabel: 'Choose',
  searchPlaceholder: 'Search',
  noResults: 'No results',
}

export const OPERATORS_GROUPS = [{
  'id': 'DATE_ONE',
  'name': 'Date',
  'temsType': null,
  'tooltip': 'Date',
  'icon': <CalendarM />,
  'defaultGroup': true,
}, {
  'id': 'NUMBER_ONE',
  'name': 'Number',
  'itemsType': null,
  'tooltip': 'Number',
  'icon': <HashM />,
  'defaultGroup': false,
}, {
  'id': 'STRING_ONE',
  'name': 'String',
  'itemsType': null,
  'tooltip': 'String',
  'icon': <TextM />,
  'defaultGroup': false,
}, {
  'id': 'BOOL',
  'name': 'Boolean',
  'itemsType': null,
  'tooltip': 'Boolean',
  'icon': <BooleanM />,
  'defaultGroup': false,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATED',
  'name': 'Array',
  'itemsType': null,
  'tooltip': 'Array',
  'icon': <ListM />,
  'defaultGroup': false,
}];

export const OPERATORS_ITEMS = [{
  'id': 'STRING_ONEEQUAL',
  'value': 'STRING_ONEEQUAL',
  'logic': 'EQUAL',
  'name': 'Equal',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONENOT_EQUAL',
  'value': 'STRING_ONENOT_EQUAL',
  'logic': 'NOT_EQUAL',
  'name': 'Not equal',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONECONTAIN',
  'value': 'STRING_ONECONTAIN',
  'logic': 'CONTAIN',
  'name': 'Contain',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONENOT_CONTAIN',
  'value': 'STRING_ONENOT_CONTAIN',
  'logic': 'NOT_CONTAIN',
  'name': 'Not contain',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONESTARTS_WITH',
  'value': 'STRING_ONESTARTS_WITH',
  'logic': 'STARTS_WITH',
  'name': 'Starts with',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONEENDS_WITH',
  'value': 'STRING_ONEENDS_WITH',
  'logic': 'ENDS_WITH',
  'name': 'Ends with',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONEREGEXP',
  'value': 'STRING_ONEREGEXP',
  'logic': 'REGEXP',
  'name': 'Regular expression',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONEIN',
  'value': 'STRING_ONEIN',
  'logic': 'IN',
  'name': 'In',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'STRING_ONENOT_IN',
  'value': 'STRING_ONENOT_IN',
  'logic': 'NOT_IN',
  'name': 'Not in',
  'groupId': 'STRING_ONE',
  'group': 'STRING_ONE',
  'icon': <TextM />,
}, {
  'id': 'NUMBER_ONEEQUAL',
  'value': 'NUMBER_ONEEQUAL',
  'logic': 'EQUAL',
  'name': 'Equal',
  'groupId': 'NUMBER_ONE',
  'group': 'NUMBER_ONE',
  'icon': <HashM />,
}, {
  'id': 'NUMBER_ONELESS',
  'value': 'NUMBER_ONELESS',
  'logic': 'LESS',
  'name': 'Less than',
  'groupId': 'NUMBER_ONE',
  'group': 'NUMBER_ONE',
  'icon': <HashM />,
}, {
  'id': 'NUMBER_ONEMORE',
  'value': 'NUMBER_ONEMORE',
  'logic': 'MORE',
  'name': 'More than',
  'groupId': 'NUMBER_ONE',
  'group': 'NUMBER_ONE',
  'icon': <HashM />,
}, {
  'id': 'NUMBER_ONELESS_OR_EQUAL',
  'value': 'NUMBER_ONELESS_OR_EQUAL',
  'logic': 'LESS_OR_EQUAL',
  'name': 'Less or equal to',
  'groupId': 'NUMBER_ONE',
  'group': 'NUMBER_ONE',
  'icon': <HashM />,
}, {
  'id': 'NUMBER_ONEMORE_OR_EQUAL',
  'value': 'NUMBER_ONEMORE_OR_EQUAL',
  'logic': 'MORE_OR_EQUAL',
  'name': 'More or equal to',
  'groupId': 'NUMBER_ONE',
  'group': 'NUMBER_ONE',
  'icon': <HashM />,
}, {
  'id': 'DATE_ONEMORE',
  'value': 'DATE_ONEMORE',
  'logic': 'MORE',
  'name': 'More than',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ONE',
  'icon': <CalendarM />,
  'groupName': 'Date',
}, {
  'id': 'DATE_ONELESS',
  'value': 'DATE_ONELESS',
  'logic': 'LESS',
  'name': 'Less than',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ONE',
  'icon': <CalendarM />,
  'groupName': 'Date',
}, {
  'id': 'DATE_EQUAL',
  'value': 'DATE_EQUAL',
  'logic': 'EQUAL',
  'name': 'Equal',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ONE',
  'icon': <CalendarM />,
  'groupName': 'Date',
}, {
  'id': 'DATE_ZEROMATCHES_CURRENT_HOUR',
  'value': 'DATE_ZEROMATCHES_CURRENT_HOUR',
  'logic': 'MATCHES_CURRENT_HOUR',
  'name': 'Matches current hour',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ZERO',
  'icon': <CalendarM />,
  'groupName': 'Match to',
}, {
  'id': 'DATE_ZEROMATCHES_CURRENT_DAY',
  'value': 'DATE_ZEROMATCHES_CURRENT_DAY',
  'logic': 'MATCHES_CURRENT_DAY',
  'name': 'Matches current day',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ZERO',
  'icon': <CalendarM />,
  'groupName': 'Match to',
}, {
  'id': 'DATE_ZEROMATCHES_CURRENT_MONTH',
  'value': 'DATE_ZEROMATCHES_CURRENT_MONTH',
  'logic': 'MATCHES_CURRENT_MONTH',
  'name': 'Matches current month',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ZERO',
  'icon': <CalendarM />,
  'groupName': 'Match to',
}, {
  'id': 'DATE_ZEROMATCHES_CURRENT_YEAR',
  'value': 'DATE_ZEROMATCHES_CURRENT_YEAR',
  'logic': 'MATCHES_CURRENT_YEAR',
  'name': 'Matches current year',
  'groupId': 'DATE_ONE',
  'group': 'DATE_ZERO',
  'icon': <CalendarM />,
  'groupName': 'Match to',
}, {
  'id': 'BOOLIS_TRUE',
  'value': 'BOOLIS_TRUE',
  'logic': 'IS_TRUE',
  'name': 'Is true',
  'groupId': 'BOOL',
  'group': 'BOOL',
  'icon': <BooleanM />,
}, {
  'id': 'BOOLIS_FALSE',
  'value': 'BOOLIS_FALSE',
  'logic': 'IS_FALSE',
  'name': 'Is false',
  'groupId': 'BOOL',
  'group': 'BOOL',
  'icon': <BooleanM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDEQUAL',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDEQUAL',
  'logic': 'EQUAL',
  'name': 'Equal',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDNOT_EQUAL',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDNOT_EQUAL',
  'logic': 'NOT_EQUAL',
  'name': 'Not equal',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDCONTAIN',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDCONTAIN',
  'logic': 'CONTAIN',
  'name': 'Contain',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDNOT_CONTAIN',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDNOT_CONTAIN',
  'logic': 'NOT_CONTAIN',
  'name': 'Not contain',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDSTARTS_WITH',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDSTARTS_WITH',
  'logic': 'STARTS_WITH',
  'name': 'Starts with',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDENDS_WITH',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDENDS_WITH',
  'logic': 'ENDS_WITH',
  'name': 'Ends with',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}, {
  'id': 'ARRAY_STRING_ONE_DEPRECATEDREGEXP',
  'value': 'ARRAY_STRING_ONE_DEPRECATEDREGEXP',
  'logic': 'REGEXP',
  'name': 'Regular expression',
  'groupId': 'ARRAY_STRING_ONE_DEPRECATED',
  'group': 'ARRAY_STRING_ONE_DEPRECATED',
  'icon': <ListM />,
}];
