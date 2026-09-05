import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="flex h-full flex-col px-4 py-4">
      <div className="mb-3 flex shrink-0 items-center justify-between">
        <p className="text-xs text-comment">{"// resume.pdf"}</p>
        <a
          href="/resume.pdf"
          download="Daniel-Fernandez-Resume.pdf"
          className="flex items-center gap-1.5 rounded border border-border-light px-2.5 py-1.5 text-xs text-primary hover:bg-tabs"
        >
          <Download size={13} /> download
        </a>
      </div>
      <iframe
        src="/resume.pdf#toolbar=0&view=Fit"
        title="Daniel Fernandez — Resume"
        className="min-h-[600px] flex-1 rounded border border-border-light bg-white"
      />
    </div>
  );
}
