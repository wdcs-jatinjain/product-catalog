export interface InputProps {
  type: string;
  value: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}