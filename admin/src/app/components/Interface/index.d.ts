export interface InputProps {
    type: string;
    value: string;
    name: string;
    disabled?: boolean;
    placeholder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  