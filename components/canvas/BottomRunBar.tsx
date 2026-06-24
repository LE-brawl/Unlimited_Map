"use client";
import { Button } from "@/components/ui/Button";
import { useCanvasStore } from "@/store/canvasStore";

export function BottomRunBar() {
  const { selectedNodeId, runNode, runWorkflow, saveCanvas, loadCanvas, clearCanvas, lastError } = useCanvasStore();
  return (
    <footer className="flex min-h-14 items-center gap-2 border-t border-[#e7eaf0] bg-white px-4 dark:border-slate-800 dark:bg-[#0c1622]">
      <Button
        disabled={!selectedNodeId}
        onClick={() => selectedNodeId && void runNode(selectedNodeId).catch(() => undefined)}
      >
        Run selected
      </Button>
      <Button
        className="border-[#030303] bg-[#030303] text-white hover:border-[#1a1a1a] hover:bg-[#1a1a1a] dark:border-cyan-500/50 dark:bg-cyan-400/10 dark:text-cyan-100 dark:hover:border-cyan-400 dark:hover:bg-cyan-400/20"
        onClick={() => void runWorkflow()}
      >
        Run workflow
      </Button>
      <div className="mx-2 h-6 w-px bg-[#e7eaf0] dark:bg-slate-800" />
      <Button onClick={saveCanvas}>Save</Button>
      <Button onClick={loadCanvas}>Load</Button>
      <Button onClick={clearCanvas}>Clear</Button>
      {lastError && <p className="ml-2 text-xs text-rose-600 dark:text-rose-300">{lastError}</p>}
      <p className="ml-auto text-[11px] text-[#939393] dark:text-slate-500">
        Mock AI provider · local-first canvas
      </p>
    </footer>
  );
}
