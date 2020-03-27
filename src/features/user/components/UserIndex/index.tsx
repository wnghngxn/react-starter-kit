import React, { SFC } from 'react';
import Box from '@material-ui/core/Box';
import UserList from '../UserList/container';
import { UserSearch } from '../UserSearch';
import { UserCreate } from '../UserCreate';

const UserIndex: SFC = () => {
  return (
    <>
      <Box mb="10px" display="flex" justifyContent="space-between">
        <UserSearch />
        <UserCreate />
      </Box>
      <UserList />
    </>
  );
};
export default UserIndex;
