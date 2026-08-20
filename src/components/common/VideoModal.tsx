import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  title: string;
  video: string;
  onClose: () => void;
}

export default function VideoModal({ isOpen, title, video, onClose }: VideoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            className="relative w-full max-w-5xl border border-gold/30 bg-black-rich p-3 shadow-[0_0_80px_rgba(212,175,55,0.18)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -right-2 -top-12 grid size-10 place-items-center border border-gold/30 text-accent-ivory transition hover:bg-gold hover:text-black-cinema"
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>
            <div className="aspect-video overflow-hidden bg-black">
              <iframe
                src={video}
                title={title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
