import { Mic, Send } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useTranslation } from '@/i18n'
import { Button, Textarea } from '@/shared/ui'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  variant?: 'default' | 'home'
}

export function ChatInput({ value, onChange, onSend, variant = 'default' }: ChatInputProps) {
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
    <div className={`w-full ${variant === 'home' ? 'max-w-[760px] rounded-2xl border border-input bg-card p-3 shadow-[var(--card-hover-shadow)]' : 'max-w-3xl rounded-[var(--radius)] border border-input bg-card px-3 py-2'}`}>
      <div className="flex items-end gap-3">
      {variant === 'default' && <Button variant="ghost" size="icon" className="border border-border" aria-label={t('chat.mic')}>
        <Mic className="size-4 text-primary" />
      </Button>}
      <Textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={variant === 'home' ? 'Pregunta sobre APIs, Skills, CencoFlow...' : t('chat.inputPlaceholder')}
        className="min-h-0 min-w-0 flex-1 resize-none border-0 bg-transparent py-1.5 shadow-none focus-visible:ring-0"
      />
      <Button
        variant="primary"
        size="icon"
        aria-label={t('chat.send')}
        disabled={!puedeEnviar}
        className={variant === 'home' ? 'rounded-full bg-[var(--primary)] text-[var(--cta-fg)]' : undefined}
        onClick={handleSend}
      >
        <Send className="size-4" />
      </Button>
      </div>
    </div>
  )
}
