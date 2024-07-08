import { ReactComponent as Search } from './../../assets/svg/search.svg';
import { ReactComponent as NoData } from './../../assets/svg/no_data.svg';
import { ReactComponent as Clear } from './../../assets/svg/x.svg';
import { ReactComponent as Save } from './../../assets/svg/save.svg';
import { ReactComponent as SaveFilled } from './../../assets/svg/save-filled.svg';

type IconProps = {
  name: 'search' | 'noData' | 'clear' | 'save' | 'saveFilled';
};

const Icon = (props: IconProps) => {
  const { name } = props;

  const Icons: Record<IconProps['name'], any> = {
    search: <Search />,
    noData: <NoData />,
    clear: <Clear />,
    save: <Save />,
    saveFilled: <SaveFilled />,
  };

  return Icons[name];
};

export default Icon;
