import React, { FC } from 'react';
import { SearchInput } from 'features/common/components/SearchInput';
import { Topbar } from 'features/common/components/Topbar';
import { useProps } from './useProps';

export const UserSearch: FC = () => {
  const { setQuery } = useProps();
  return (
    <Topbar>
      <SearchInput
        placeholder="search user"
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
    </Topbar>
  );
};
