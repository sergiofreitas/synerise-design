import { FieldProps } from '../CustomRangeForm.types';

export type Props = {
  handleOffsetValueChange: (value?: number) => void;
} & FieldProps;
