import { login } from "@/api/authentication"
import { useMutation } from "@tanstack/react-query"


export const useLogin = (email: string, password: string) => {
    return useMutation({
        mutationFn: (payload: { email: string, password: string }) => login(payload.email, payload.password)
    })
}