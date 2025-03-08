import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ButtonType } from '@/types/button';

export default function ButtonRenderer({ buttons, classNames }: {
  buttons: ButtonType[];
  classNames?: string;
}) {

  if (!buttons?.length) return null;

  return (
    <div className={cn('flex items-center gap-3 list-none', classNames)}>
      {buttons.map((button) => (
        <Button
          key={`button-${button?._key}`}
          variant={button?.buttonVariant} 
          buttonType={button?.buttonType}
          width={button?.buttonWidth}
          pageReference={button?.buttonPageReference}
          externalUrl={button?.buttonExternalUrl ?? ''}
          emailAddress={button?.buttonEmailAddress ?? ''}
          fileUrl={button?.buttonFileUrl ?? ''}
          anchorLocation={button?.buttonAnchorLocation}
          anchorId={button?.buttonAnchorId ?? ''}
          className={cn('w-auto', { 
            'w-full': button.buttonWidth === 'fullWidth' 
          })}
        >
          {button?.buttonText}
        </Button>
      ))}
    </div>
  )
}