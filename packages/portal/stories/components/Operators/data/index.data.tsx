import {
  BooleanM,
  CalendarM,
  HashM, ListM, TextM,
} from '@synerise/ds-icon/dist/icons';
import * as React from 'react';

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
  'id': 'DATE_ONELESS',
  'value': 'DATE_ONELESS',
  'logic': 'LESS',
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
