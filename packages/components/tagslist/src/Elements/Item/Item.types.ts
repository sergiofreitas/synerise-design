import { ReactElement } from 'react';
import { TagsListItem, TagsListTexts, TagVisibility } from '../../TagsList.types';

export type ItemProps = {
  item: TagsListItem;
  texts: TagsListTexts | undefined;
  checked?: boolean;
  withCheckbox?: boolean;
  toggleDeleteModal?: () => void;
  onEdit?: (item: TagsListItem) => void;
  onDelete?: (item: TagsListItem) => void;
  onFavourite?: (item: TagsListItem) => void;
  onVisibility?: (visibility: TagVisibility, item: TagsListItem) => void;
  onSettingsEnter?: (item?: TagsListItem) => void;
  onItemSelect?: (item: TagsListItem) => void;
  icon?: ReactElement;
  iconFavourite?: ReactElement;
  iconFavouriteFlat?: ReactElement;
};
