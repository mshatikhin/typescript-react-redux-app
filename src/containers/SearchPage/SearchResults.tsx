import * as React from 'react';
import * as styles from './SearchResults.css';
import Loader from '@skbkontur/react-ui/components/Loader';
import Gapped from '@skbkontur/react-ui/components/Gapped';
import { SearchResult } from './redux/searchPageActions';
import { RequestStatus } from '../../redux/utils';

interface Props {
  searchResult: SearchResult | null;
  requestStatus: RequestStatus;
}

export const SearchResults: React.SFC<Props> = ({ requestStatus, searchResult }) => (
  <>
    <br />
    <Loader active={requestStatus === RequestStatus.Requested}>
      <Gapped verticalAlign="middle">
        {searchResult &&
          searchResult.photos &&
          searchResult.photos.photo &&
          searchResult.photos.photo.map(p => {
            const url = `url(https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${
              p.secret
            }_z.jpg)`;
            return (
              <div
                key={p.id}
                className={styles.image}
                style={{
                  backgroundImage: url
                }}
              />
            );
          })}
      </Gapped>
    </Loader>
  </>
);
