import clsx from 'clsx';
import { div as MotionDiv } from 'motion/react-client';

interface DotsIndicatorProps {
  total: number;
  currentIndex: number;
  className?: string;
  dotClassName?: string;
}

export function DotsIndicator({ total, currentIndex, className, dotClassName, ...props }: DotsIndicatorProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className={clsx('flex justify-center items-center bg-transparent', className)}
      {...props}
    >
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          data-active={index === currentIndex}
          className={clsx(
            'w-2 h-2 rounded-full mx-1 transition-all',
            'bg-indigo-2 data-[active=true]:bg-indigo-active',
            dotClassName,
          )}
        />
      ))}
    </MotionDiv>
  );
}
