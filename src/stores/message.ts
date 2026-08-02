import type { MessageState } from '@/types'
import { defineStore } from 'pinia'
export const useMessageStore = defineStore ('message', {
    state: (): MessageState => ({
        message: '',
        detailMessage: ''
    }),
    actions: {
        updateMessage(message: string): void{
            this.message = message
        },
        updateDetailMessage(message: string): void{
            this.detailMessage = message
        },
        resetMessage(): void{
            this.message = ''
        },
        resetDetailMessage(): void{
            this.detailMessage = ''
        }
        

    }
})