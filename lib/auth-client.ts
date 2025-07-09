import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://redesigned-space-eureka-x5r7vr655jwp2v4rv.github.dev"
})