import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import Input from '@/components/ui/input';
import Label from '@/components/ui/label';
import FormErrorMessage from '@/components/ui/form-error-message';

interface IBoardInputProps extends UseControllerProps<FieldValues> {
  control: any;
  label: string;
  icon?: React.ReactNode;
  placeholder: string;
  type?: string;
}

const BoardInput: React.FunctionComponent<IBoardInputProps> = ({
  control,
  name,
  label,
  placeholder,
  rules,
  disabled,
  icon,
  type
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field: { value, onChange, name }, fieldState: { error, invalid } }) => {
        return (
          <div className='flex justify-between gap-y-2'>
            <Label name={name} label={label} required className='flex-1' />
            <div className='flex-1 space-y-2'>
              <Input
                name='title'
                type={type || 'text'}
                value={(value as string) || ''}
                invalid={invalid}
                onChange={onChange}
                placeholder={placeholder}
                labelRequired
                icon={icon}
              />
              {error ? <FormErrorMessage>{error.message}</FormErrorMessage> : null}
            </div>
          </div>
        );
      }}
    />
  );
};

export default BoardInput;
