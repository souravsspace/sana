import { createFileRoute, Link } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Wrapper } from "@/components/Wrapper";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { forgetPassword } from "@/integrations/better-auth/auth-client";
import { toast } from "sonner";

export const Route = createFileRoute("/_non_authed/forget-password")({
  component: RouteComponent,
});

const forgetPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});

type ForgetPasswordSchema = z.infer<typeof forgetPasswordSchema>;

function RouteComponent() {
  const form = useForm<ForgetPasswordSchema>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const isPending = form.formState.isSubmitting || form.formState.isLoading;

  const onSubmit = async (values: ForgetPasswordSchema) => {
    try {
      const res = await forgetPassword({
        email: values.email,
      });

      if (res.error) {
        toast.error(res.error.message || "Failed to send reset link.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const message =
    form.formState.isSubmitted && !isPending
      ? "If an account with that email exists, a reset link will be sent."
      : null;

  return (
    <Wrapper>
      <div className="flex min-h-dvh w-full items-center justify-center">
        <div className="space-y-4">
          <Form {...form}>
            <h1 className="text-xl font-bold">Forget Password?</h1>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-3 gap-2">
                <Button type="submit" disabled={isPending}>
                  Send Reset Link
                </Button>
                <Button asChild variant={"outline"} disabled={isPending}>
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>
            </form>
          </Form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </Wrapper>
  );
}
