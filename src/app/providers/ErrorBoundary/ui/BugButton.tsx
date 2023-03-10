import React from 'react';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonThemes } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

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
      theme={ButtonThemes.CLEAR_INVERTED}
      onClick={onThrowError}
      className={classNames('', {}, [className])}
    >
      {t('throw-an-error')}
    </Button>
  );
};
