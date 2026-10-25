"use client";

import React, { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  color: string;
  glowColor: string;
  label?: string;
  pulsePhase: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  color: string;
}

export default function CanvasHeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mediaQuery.matches;

    // High DPI scaling
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Mouse coordinates
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isActive: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Node configuration
    const isMobile = width < 640;
    const nodeCount = isMobile ? 18 : 36;
    const maxDistance = isMobile ? 110 : 140;

    const keyNodes: { label: string; xRel: number; yRel: number; color: string }[] = [
      { label: "LLM Reasoning", xRel: 0.5, yRel: 0.32, color: "#8855FF" },
      { label: "Cloud & Azure", xRel: 0.78, yRel: 0.45, color: "#2A8AF6" },
      { label: "PostgreSQL DB", xRel: 0.65, yRel: 0.75, color: "#31D7F5" },
      { label: "API Gateway", xRel: 0.28, yRel: 0.42, color: "#31D7F5" },
      { label: "Client Apps", xRel: 0.35, yRel: 0.78, color: "#2A8AF6" },
    ];

    const nodes: Node[] = [];

    // Add key architectural nodes first
    keyNodes.forEach((kn) => {
      nodes.push({
        x: width * kn.xRel,
        y: height * kn.yRel,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseRadius: isMobile ? 4 : 5.5,
        radius: isMobile ? 4 : 5.5,
        color: kn.color,
        glowColor: kn.color === "#8855FF" ? "rgba(136, 85, 255, 0.5)" : "rgba(49, 215, 245, 0.5)",
        label: kn.label,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    });

    // Fill remaining organic nodes
    for (let i = keyNodes.length; i < nodeCount; i++) {
      const isBlue = Math.random() > 0.4;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        baseRadius: Math.random() * 2 + 2,
        radius: Math.random() * 2 + 2,
        color: isBlue ? "#2A8AF6" : "#31D7F5",
        glowColor: isBlue ? "rgba(42, 138, 246, 0.4)" : "rgba(49, 215, 245, 0.4)",
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Packets
    const packets: Packet[] = [];
    const maxPackets = isMobile ? 4 : 8;

    const spawnPacket = () => {
      if (packets.length >= maxPackets) return;
      const from = Math.floor(Math.random() * nodes.length);
      // Find a nearby node
      let to = -1;
      let closestDist = Infinity;
      for (let j = 0; j < nodes.length; j++) {
        if (from === j) continue;
        const dx = nodes[from].x - nodes[j].x;
        const dy = nodes[from].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance && dist < closestDist) {
          closestDist = dist;
          to = j;
        }
      }

      if (to !== -1) {
        packets.push({
          fromNode: from,
          toNode: to,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02,
          color: Math.random() > 0.5 ? "#31D7F5" : "#2A8AF6",
        });
      }
    };

    // Resize listener
    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    // Intersection Observer to pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    // Animation Loop
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);
      if (!isVisible) return;

      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Mouse smooth interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Render Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(42, 138, 246, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Render & Update Packets
      if (Math.random() < 0.08) spawnPacket();

      for (let p = packets.length - 1; p >= 0; p--) {
        const packet = packets[p];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const n1 = nodes[packet.fromNode];
        const n2 = nodes[packet.toNode];
        if (!n1 || !n2) {
          packets.splice(p, 1);
          continue;
        }

        const px = n1.x + (n2.x - n1.x) * packet.progress;
        const py = n1.y + (n2.y - n1.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = packet.color;
        ctx.shadowColor = packet.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Update & Draw Nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          // Boundary bouncing
          if (node.x < 20 || node.x > width - 20) node.vx *= -1;
          if (node.y < 20 || node.y > height - 20) node.vy *= -1;

          // Mouse gravitational influence
          if (mouse.isActive) {
            const mdx = mouse.x - node.x;
            const mdy = mouse.y - node.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 140 && mdist > 5) {
              const force = (1 - mdist / 140) * 0.4;
              node.x += (mdx / mdist) * force;
              node.y += (mdy / mdist) * force;
            }
          }

          // Subtle pulse
          node.pulsePhase += delta * 2;
          node.radius = node.baseRadius + Math.sin(node.pulsePhase) * 0.8;
        }

        // Draw node glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = node.glowColor;
        ctx.fill();

        // Draw core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Technical Label for key nodes
        if (node.label && !isMobile) {
          ctx.font = "10px JetBrains Mono, monospace";
          ctx.fillStyle = "#94A3B8";
          ctx.fillText(node.label, node.x + 12, node.y + 3);
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden border border-[rgba(148,163,184,0.12)] bg-[#070B14]/80 backdrop-blur-md shadow-2xl flex items-center justify-center">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(42,138,246,0.12),transparent_70%)] pointer-events-none" />

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Floating Pill Badges */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <div className="px-3 py-1 rounded-full text-[11px] font-mono border border-[rgba(148,163,184,0.15)] bg-[#0D1524]/85 text-[#31D7F5] flex items-center gap-1.5 shadow-md">
          <span className="w-1.5 h-1.5 rounded-full bg-[#31D7F5] animate-ping" />
          <span>Interactive Neural Topology</span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 pointer-events-none">
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#111C2F]/90 text-[#94A3B8] border border-[rgba(148,163,184,0.1)]">
          Azure AKS
        </span>
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#111C2F]/90 text-[#31D7F5] border border-[rgba(49,215,245,0.2)]">
          LLM Gateway
        </span>
        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#111C2F]/90 text-[#2A8AF6] border border-[rgba(42,138,246,0.2)]">
          FHIR / HL7
        </span>
      </div>
    </div>
  );
}
