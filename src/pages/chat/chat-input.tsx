import { Mic, Send } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useTranslation } from '@/i18n'
import { Button, Textarea } from '@/shared/ui'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
}

export function ChatInput({ value, onChange, onSend }: ChatInputProps) {
  const { t } = useTranslation()
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const puedeEnviar = value.trim().length > 0

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return
    textarea.style.height = 'auto'
    textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`
  }, [value])

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  function handleSend() {
    if (!puedeEnviar) return
    onSend()
    textareaRef.current?.focus()
  }

  return (
    <div className="flex w-full max-w-3xl items-end gap-3 rounded-[var(--radius)] border border-input bg-card px-3 py-2">
      <Button variant="ghost" size="icon" className="border border-border" aria-label={t('chat.mic')}>
        <Mic className="size-4 text-primary" />
      </Button>
      <Textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={t('chat.inputPlaceholder')}
        className="min-h-0 min-w-0 flex-1 resize-none border-0 bg-transparent py-1.5 shadow-none focus-visible:ring-0"
      />
      <Button
        variant="primary"
        size="icon"
        aria-label={t('chat.send')}
        disabled={!puedeEnviar}
        onClick={handleSend}
      >
        <Send className="size-4" />
      </Button>
    </div>
  )
}
