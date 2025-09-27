'use client';
import clsx from 'clsx';
import { z } from 'zod';
import { Loader } from 'lucide-react';
import { formatTime } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { maskEmail, maskPhone } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Conditional, If, Else, Always } from '@/components/conditional-render';
import { DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Dialog, DialogContent, DialogDescription, DialogOverlay } from '@/components/ui/dialog';
import { Form as ReactForm, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

// Text constrants để hỗ trợ i18n sau này
// Text constants to support i18n later
const t = {
  title: 'Xác minh mã OTP',
  description: 'Mã OTP đã được gửi đến',
  email: ' email ',
  phone: ' số điện thoại ',
  action: 'Vui lòng nhập mã để xác minh',
  otp: 'Mã OTP',
  otpPlaceholder: 'Mã OTP có 6 chữ số',
  submit: 'Xác nhận',
  submitting: 'Đang xác nhận...',
  resend: 'Gửi lại mã OTP',
  invalid: 'Mã OTP phải có 6 chữ số',
};

const formSchema = z.object({
  otp: z.string().refine((val) => /^\d{6}$/.test(val), { message: t.invalid }),
});

interface InputOTPProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  colorConfigs?: string;
  email?: boolean;
  receiver: string;
  countdown?: number;
  onResend?: () => void;
  onSubmit?: () => void;
  inputClassName?: string;
}

export function InputOTP({
  colorConfigs,
  email,
  receiver,
  open,
  onOpenChange,
  countdown = 0,
  onResend,
  onSubmit,
  inputClassName,
}: InputOTPProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: '',
    },
  });

  const handleFormSubmit = async function (data: z.infer<typeof formSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    onSubmit?.();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      <DialogOverlay className="bg-foreground/70">
        <DialogContent className={clsx(colorConfigs, '[&>button]:text-primary max-w-sm! top-[28%] md:top-[50%]')}>
          <ReactForm {...form}>
            <form className="grid gap-4" onSubmit={form.handleSubmit(handleFormSubmit)}>
              <DialogHeader>
                <DialogTitle className="text-secondary font-bold text-2xl">{t.title}</DialogTitle>
                <DialogDescription className="text-primary leading-6">
                  <span>{t.description}</span>
                  <Conditional actual={email} expected={true}>
                    <If as="span">{t.email}</If>
                    <Else as="span">{t.phone}</Else>
                    <If as="span" className="font-extrabold text-secondary">
                      {maskEmail(receiver)}
                    </If>
                    <Else as="span" className="font-extrabold text-secondary">
                      {maskPhone(receiver)}
                    </Else>
                  </Conditional>
                  <br />
                  <span>{t.action}</span>
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary">{t.otp}</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          inputMode="numeric"
                          autoFocus
                          autoComplete="one-time-code"
                          placeholder={t.otpPlaceholder}
                          className={clsx('border-primary placeholder:text-primary/80', inputClassName)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-sm lg:text-xs" />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter className="block">
                <Button type="submit" className="w-full">
                  <Conditional actual={form.formState.isSubmitting} expected={true}>
                    <If as="span" className="inline-flex items-center">
                      <Loader className="inline size-5 leading-none animate-spin mr-1" />
                      {t.submitting}
                    </If>
                    <Else as="span">{t.submit}</Else>
                  </Conditional>
                </Button>
                <Button
                  type="button"
                  variant="link"
                  disabled={countdown > 0 || form.formState.isSubmitting}
                  className="w-full font-normal text-center mt-1"
                >
                  <Conditional actual={countdown} expected={0}>
                    <Always as="span" className="underline" onClick={() => onResend && onResend()}>
                      {t.resend}
                    </Always>
                    <Else as="span">({formatTime(countdown || 0)})</Else>
                  </Conditional>
                </Button>
              </DialogFooter>
            </form>
          </ReactForm>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
}
