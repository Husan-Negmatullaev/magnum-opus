import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import classes from './BugButton.module.scss';

interface BugButtonProps extends React.ComponentProps<'button'> {

}

export const BugButton: React.FC<BugButtonProps> = ({ className }) => {
  const [isError, setIsError] = React.useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    if (isError) {
      throw new Error();
    }
  }, [isError]);

  const onThrowError = () => setIsError(true);

  return (
    <Button
      onClick={onThrowError}
      className={classNames('', {}, [className])}
    >
      {t('throw-an-error')}
    </Button>
  );
};
