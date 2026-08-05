import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        default:
          'border-border text-foreground hover:border-primary hover:text-primary dark:hover:border-primary-light dark:hover:text-primary-light transition ease-in cursor-default',
        highlight: 'border-primary text-primary dark:border-primary-light dark:text-primary-light'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

function Badge({ className, variant, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants>) {
  return <span data-slot='badge' className={cn(badgeVariants({ variant, className }))} {...props} />;
}

export { Badge, badgeVariants };
