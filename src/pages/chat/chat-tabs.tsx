import { Calendar, FileText, MessageSquare } from 'lucide-react'
import { useTranslation } from '@/i18n'
import { Tabs, TabsList, TabsTrigger } from '@/shared/ui'

export function ChatTabs() {
  const { t } = useTranslation()

  return (
    <div className="flex justify-center py-4">
      <Tabs defaultValue="chat">
        <TabsList>
          <TabsTrigger value="chat">
            <MessageSquare className="size-4" />
            {t('chat.tab.chat')}
          </TabsTrigger>
          <TabsTrigger value="explanation">
            <FileText className="size-4" />
            {t('chat.tab.explanation')}
          </TabsTrigger>
          <TabsTrigger value="planning">
            <Calendar className="size-4" />
            {t('chat.tab.planning')}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}
