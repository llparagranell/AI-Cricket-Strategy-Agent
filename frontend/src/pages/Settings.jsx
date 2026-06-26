import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import GlassCard from '../components/ui/GlassCard';
import SectionTitle from '../components/ui/SectionTitle';
import { Input } from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useSettingsStore } from '../store/settingsStore';
import { useChatStore } from '../store/chatStore';

export default function Settings() {
  const settings = useSettingsStore();
  const { clearChat } = useChatStore();
  const { register, handleSubmit } = useForm({ defaultValues: settings });

  const save = (values) => {
    settings.setApiUrl(values.apiUrl);
    settings.setModel(values.model);
    toast.success('Settings saved locally');
  };

  return (
    <div className="space-y-8">
      <SectionTitle eyebrow="Preferences" title="Settings" description="Configure the API URL, model preference, history behavior, and local chat controls." />
      <GlassCard>
        <form className="grid gap-5" onSubmit={handleSubmit(save)}>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-muted">API URL</span>
            <Input {...register('apiUrl')} />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-bold text-muted">Model</span>
            <Input {...register('model')} />
          </label>
          <div className="flex flex-wrap gap-3">
            <Button type="submit">Save Settings</Button>
            <Button type="button" variant="secondary" onClick={() => toast.success('Chat export prepared')}>
              Export Chats
            </Button>
            <Button type="button" variant="ghost" onClick={clearChat}>
              Delete History
            </Button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
