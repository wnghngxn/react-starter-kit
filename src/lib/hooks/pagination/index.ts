import { useState } from 'react';
import { useAutoMemo } from 'hooks.macro';

export const usePagination = (limit: number) => {
  const [pageNum, setPageNum] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(limit);
  return useAutoMemo({
    pageNum,
    rowsPerPage,
    setRowsPerPage,
    setPageNum,
  });
};

export type Pagination = ReturnType<typeof usePagination>;

export default usePagination;
