"use client";
import { Background, Controls, MiniMap, ReactFlow, type NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useMemo } from "react";
import { AnnotatedCustomNode } from "./AnnotatedCustomNode";
import { useCanvasStore } from "@/store/canvasStore";
import { useTheme } from "@/components/ThemeProvider";

export function CreativeCanvas() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setSelectedNode } = useCanvasStore();
  const { theme } = useTheme();
  const nodeTypes = useMemo<NodeTypes>(() => ({ creative: AnnotatedCustomNode }), []);

  const isDark = theme === "dark";
  const edgeColor  = isDark ? "#22d3ee" : "#404040";
  const dotColor   = isDark ? "#243446" : "#d0d0d0";
  const bgColor    = isDark ? "#091019" : "#f5f5f5";
  const nodeColor  = isDark ? "#0e7490" : "#404040";
  const maskColor  = isDark ? "rgba(3,10,18,.72)" : "rgba(245,245,245,.65)";

  return (
    <div className="h-full flex-1">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={(_, node) => setSelectedNode(node.id)}
        onPaneClick={() => setSelectedNode(null)}
        fitView
        deleteKeyCode={["Backspace", "Delete"]}
        defaultEdgeOptions={{ animated: true, style: { stroke: edgeColor } }}
      >
        <Background gap={24} size={1} color={dotColor} style={{ background: bgColor }} />
        <Controls showInteractive={false} />
        <MiniMap nodeColor={nodeColor} maskColor={maskColor} />
      </ReactFlow>
    </div>
  );
}
