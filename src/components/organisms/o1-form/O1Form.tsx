import type { ReactElement } from 'react';
import { useState } from 'react';
import M1FormField from '../../molecules/m1-form-field';
import A2Button from '../../atoms/a2-button';
import { StyledO1Form } from './O1Form.styles';

type O1FormProps = {
  onSubmit: <T>(value: T) => void;
};

export default function O1Form({ onSubmit }: O1FormProps): ReactElement {
  const [fieldValues, setFieldValues] = useState(['', '']);

  const submitFormData = () => onSubmit(fieldValues);

  const addField = () => setFieldValues((previous) => [...previous, '']);

  const removeField = (fieldIndex: number) =>
    setFieldValues((previousValues) =>
      previousValues.filter((fieldValue, index) => index !== fieldIndex),
    );

  const onFieldChange = (fieldIndex: number, newFieldValue: string) =>
    setFieldValues((previousValues) =>
      previousValues.map((value, index) => (index === fieldIndex ? newFieldValue : value)),
    );

  /* eslint-disable react/no-array-index-key */
  return (
    <StyledO1Form>
      <A2Button label="Add New Field" onClick={addField} />
      {fieldValues.map((fieldValue, index) => (
        <M1FormField
          key={`field-${fieldValue}-${index}`}
          onChange={(value) => onFieldChange(index, value)}
          value={fieldValue}
          onRemoveField={() => removeField(index)}
        />
      ))}
      <A2Button label="Submit" type="submit" onClick={submitFormData} />
    </StyledO1Form>
  );
}
