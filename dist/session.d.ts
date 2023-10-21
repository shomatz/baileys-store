import type { AuthenticationState } from '@whiskeysockets/baileys';
export declare function useSession(sessionId: string): Promise<{
    state: AuthenticationState;
    saveCreds: () => Promise<void>;
}>;
