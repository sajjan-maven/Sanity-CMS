import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ButtonType } from '@/types/button';

export default function ButtonRenderer({ buttons }: {
  buttons: ButtonType[];
}) {
  return (
    <ul className='flex items-center gap-3'>
      {buttons.map((button) => (
        <li 
          key={button?._key}
          className={cn('w-auto', { 
            'w-full': button.buttonWidth === 'fullWidth' 
          })}
        >
          <Button
            variant={button?.buttonVariant} 
            buttonType={button?.buttonType}
            width={button?.buttonWidth}
            pageReference={button?.buttonPageReference?.slug ?? ''}
            externalUrl={button?.buttonExternalUrl ?? ''}
            buttonFileUrl={button?.buttonFileUrl ?? ''}
          >
            {button?.buttonText}
          </Button>
        </li>
      ))}
    </ul>
  )
}