import * as React from 'react';
import Input from '@skbkontur/react-ui/components/Input';
import Button from '@skbkontur/react-ui/components/Button';
import Gapped from '@skbkontur/react-ui/components/Gapped';

interface Props {
  query: string;
  onSearch: () => void;
  onChangeQuery: (query: string) => void;
}

export const SearchBar: React.SFC<Props> = props => (
  <Gapped>
    <Input
      size="large"
      width={600}
      value={props.query}
      placeholder="Поиск картинок в flickr по тегу"
      onChange={event => props.onChangeQuery(event.target.value)}
      onKeyPress={event => {
        if (event.key === 'Enter') {
          props.onSearch();
        }
      }}
    />
    <Button size="large" onClick={() => props.onSearch()}>
      Найти
    </Button>
  </Gapped>
);
