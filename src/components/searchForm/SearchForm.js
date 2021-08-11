import { useState, useRef } from 'react';
import Input from '../../components/common/input/Input';
import Label from '../../components/common/label/Label';
import Select from '../../components/common/select/Select';
import Button from '../common/button/Button';
import styles from './SearchForm.style.module.scss';
function SearchForm() {
  const [postCode, setPostCode] = useState();
  const postCodeRef = useRef();
  const handlePostCodeInput = () => {
    console.log(postCodeRef);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={styles.searchform}
      id='cycle-search'
      onSubmit={handleFormSubmit}
    >
      <Label
        configs={{
          labelFor: 'cycle-makes',
        }}
      >
        Make
      </Label>
      <Select
        configs={{ name: 'makes', id: 'cycle-makes', form: 'cycle-search' }}
      ></Select>
      <Label
        configs={{
          labelFor: 'cycle-model',
        }}
      >
        Model
      </Label>
      <Select
        configs={{ name: 'model', id: 'cycle-model', form: 'cycle-search' }}
      ></Select>
      <Label
        configs={{
          labelFor: 'cycle-groupset',
        }}
      >
        Groupset
      </Label>
      <Select
        configs={{
          name: 'groupset',
          id: 'cycle-groupset',
          form: 'cycle-search',
        }}
      ></Select>
      <Label
        configs={{
          labelFor: 'cycle-age',
        }}
      >
        Age
      </Label>
      <Select
        configs={{ name: 'age', id: 'cycle-age', form: 'cycle-search' }}
      ></Select>
      <Label
        configs={{
          labelFor: 'min-amount',
        }}
      >
        Min:
      </Label>
      <Select
        configs={{ name: 'min', id: 'min-amount', form: 'cycle-search' }}
      ></Select>
      <Label
        configs={{
          labelFor: 'max-amount',
        }}
      >
        Min:
      </Label>
      <Select
        configs={{ name: 'max', id: 'max-amount', form: 'cycle-search' }}
      ></Select>
      <Label
        configs={{
          labelFor: 'postcode',
        }}
      >
        Postcode
      </Label>
      <Input
        ref={postCodeRef}
        onChange={handlePostCodeInput}
        configs={{
          type: 'text',
          value: '',
          placeholder: 'Enter Postcode',
          id: 'postcode',
        }}
      />
      <Button configs={{ onClick: handleFormSubmit }}>Search</Button>
    </form>
  );
}

export default SearchForm;
