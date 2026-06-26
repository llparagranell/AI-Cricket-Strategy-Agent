import { Copy, RefreshCcw, Share2, ThumbsDown, ThumbsUp } from 'lucide-react';
import toast from 'react-hot-toast';

export default function MessageActions({ content, onRegenerate }) {
  const copy = async () => {
    await navigator.clipboard.writeText(content);
    toast.success('Copied response');
  };

  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 text-muted">
      <button className="focus-ring rounded-xl p-2 hover:bg-white/[0.08]" onClick={copy} aria-label="Copy message">
        <Copy className="h-4 w-4" />
      </button>
      <button className="focus-ring rounded-xl p-2 hover:bg-white/[0.08]" onClick={onRegenerate} aria-label="Regenerate">
        <RefreshCcw className="h-4 w-4" />
      </button>
      <button className="focus-ring rounded-xl p-2 hover:bg-white/[0.08]" aria-label="Like">
        <ThumbsUp className="h-4 w-4" />
      </button>
      <button className="focus-ring rounded-xl p-2 hover:bg-white/[0.08]" aria-label="Dislike">
        <ThumbsDown className="h-4 w-4" />
      </button>
      <button className="focus-ring rounded-xl p-2 hover:bg-white/[0.08]" aria-label="Share">
        <Share2 className="h-4 w-4" />
      </button>
    </div>
  );
}
