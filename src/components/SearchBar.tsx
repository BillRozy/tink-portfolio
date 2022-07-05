import { InputGroup, FormControl, FormControlProps } from 'react-bootstrap';

const SearchBar = ({
  onNewInput,
}: {
  onNewInput?: (filter: string) => void;
}) => {
  const onChangeHandler: FormControlProps['onChange'] = (e) => {
    onNewInput?.(e.target.value);
  };
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">🔎</InputGroup.Text>
      <FormControl
        placeholder="Тикер"
        aria-label="Ticker"
        aria-describedby="basic-addon1"
        onChange={onChangeHandler}
      />
      <InputGroup.Text id="basic-addon2">Искать</InputGroup.Text>
    </InputGroup>
  );
};

export default SearchBar;
