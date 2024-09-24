import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { CircleDashed, Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Digite um email válido!" })
    .transform((valor) => valor.toLowerCase())
    .refine((email) => email.endsWith("@gmail.com"), {
      message: "Deve terminar com @gmail.com",
    }),
  password: z.string().min(6, "Precisa ter no mínimo 6 caracteres!"),
});

type loginSchemaType = z.infer<typeof loginSchema>;

export function LoginPage() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const lowerCasedEmail = event.target.value.toLowerCase();
    setValue("email", lowerCasedEmail, { shouldValidate: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState); // Alterna o estado de visibilidade da senha
  };

  const userLogin = async (data: loginSchemaType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("Fazendo login...");
    reset();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(userLogin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite o seu email"
                required
                {...register("email", {
                  required: true,
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "O Email tem que incluir @";
                    }
                    return true;
                  },
                })}
                onBlur={handleEmailBlur}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="space-y-2 relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"} // Altera o tipo com base no estado
                placeholder="Digite a sua senha"
                required
                {...register("password", {
                  required: true,
                  min: {
                    value: 6,
                    message: "Precisa ter no mínimo 6 caracteres!",
                  },
                })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}

              {/* Botão para mostrar/ocultar senha */}
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}{" "}
                {/* Usando os ícones */}
              </button>
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              {isSubmitting ? (
                <CircleDashed
                  className="motion-reduce:hidden animate-spin"
                  size="20"
                />
              ) : (
                "Entrar"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
