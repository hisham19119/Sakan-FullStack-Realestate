"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { CardWrapper } from "@/components/auth/Card-wrapper";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const { login, user } = useAuth();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      toast.success("تم تسجيل دخولك بنجاح!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("فشل تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      console.log("Logged in user:", user);
      if (user.role === "موظف") {
        router.push("/employee/properties");
      } else if (user.role === "المالك") {
        router.push("/owner");
      } else {
        router.push("/user/properties");
      }
    }
  }, [user]); // Run when user changes

  return (
    <CardWrapper
      headerLabel={"أهلا ومرحبا بك"}
      backButtonLabel="ليس لديك حساب ؟"
      backButtonHref="/auth/register"
      socialShow
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col items-end">
                  <FormLabel className=" text-[var(--darkgreen)]">
                    البريد الإليكتروني
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="hisham@gmail.com"
                      type="email"
                      className="placeholder:color-[var(--darkgreen)] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col items-end">
                  <FormLabel className="text-[var(--darkgreen)]">
                    كلمة السر
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      className="placeholder:color-[var(--darkgreen)] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError />
          <FormSuccess />
          <Button
            size="lg"
            className="w-full bg-[var(--green)] hover:bg-[var(--green)] hover:transition-transform hover:scale-105 duration-1000 ease-out font-expo-light"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              "دخــول"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
