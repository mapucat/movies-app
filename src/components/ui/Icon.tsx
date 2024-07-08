import { ReactComponent as Search } from './../../assets/svg/search.svg';
import { ReactComponent as NoData } from './../../assets/svg/no_data.svg';
import { ReactComponent as Clear } from './../../assets/svg/x.svg';

type IconProps = {
  name: 'search' | 'noData' | 'clear';
};

const Icon = (props: IconProps) => {
  const { name } = props;

  const Icons: Record<IconProps['name'], any> = {
    search: <Search />,
    noData: <NoData />,
    clear: <Clear />
  };

  return Icons[name];
};

export default Icon;
