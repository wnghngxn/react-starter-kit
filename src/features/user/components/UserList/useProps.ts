import { useAutoMemo } from 'hooks.macro';
import translateEnumToTable from 'helper/translate/translateEnumToTable';
import { useI18n } from 'lib/hooks/i18n';
import usePagination from 'lib/hooks/pagination';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store';
import { useUserList } from '../../api/user';
import locales from '../../locales';
import { UserColumns } from '../../resources/user';

const mapState = (state: RootState) => ({
  query: state.user.getIn(['search', 'query']),
  refetching: state.user.get('refetching'),
});

export const useProps = () => {
  const pagination = usePagination(10);
  const { query, refetching } = useSelector(mapState);
  const params = useAutoMemo({
    from: pagination.pageNum * pagination.rowsPerPage,
    limit: pagination.rowsPerPage,
    query,
    random: refetching,
  });
  const [, , error, list, refresh] = useUserList(params);
  const { COLUMNS } = useI18n(locales);

  const columns = useAutoMemo(
    translateEnumToTable(
      [
        {
          name: UserColumns.id,
        },
        {
          name: UserColumns.expire,
          time: true,
        },
        {
          name: UserColumns.active,
          boolean: true,
        },
      ],
      COLUMNS,
    ),
  );
  return {
    pagination,
    columns,
    error,
    refresh,
    list,
  };
};
