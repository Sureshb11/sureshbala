import { AiExperiment } from "@/types";

export const aiExperiments: AiExperiment[] = [
  {
    id: "rag-clinical-search",
    title: "Clinical Protocol Semantic RAG Pipeline",
    category: "RAG & Semantic Search",
    status: "Experimental",
    description:
      "A retrieval-augmented generation prototype exploring hybrid dense-sparse vector search over anonymized medical guidelines and pharmacology drug interaction compendiums.",
    technologies: ["LangChain", "OpenAI Embeddings", "Qdrant / Chroma", "Python", "FastAPI"],
    intendedOutcome:
      "Evaluate precision of citation-backed retrieval for clinical decision support systems, comparing chunking strategies across complex clinical guidelines.",
  },
  {
    id: "ehr-document-extractor",
    title: "Multimodal EHR Discharge Summary Parser",
    category: "Intelligent Document Processing",
    status: "In Development",
    description:
      "Exploration of vision-language models and OCR pipelines for structured entity extraction from handwritten or scanned hospital discharge sheets and lab reports.",
    technologies: ["Claude Vision API", "GPT-4o Mini", "Tesseract OCR", "Pydantic", "Python"],
    intendedOutcome:
      "Transform messy unstructured clinical documents into standardized FHIR-compliant JSON records with confidence scores.",
  },
  {
    id: "autonomous-triage-agent",
    title: "Clinical Workflow Orchestration Agent",
    category: "LLM Agents",
    status: "Planned",
    description:
      "Research into multi-step agentic workflows that orchestrate appointment rescheduling, physician notification, and insurance pre-authorization inquiry scripts.",
    technologies: ["LangGraph", "Function Calling", "TypeScript", "Node.js"],
    intendedOutcome:
      "Assess deterministic boundaries, tool-use error recovery, and safety guardrails when coordinating multi-service enterprise APIs.",
  },
  {
    id: "ecg-rhythm-analyzer",
    title: "Edge ECG Rhythm Anomaly Classifier",
    category: "Computer Vision",
    status: "Planned",
    description:
      "Investigating lightweight 1D convolutional neural network architectures for early arrhythmia pattern detection from digitized telemetry traces.",
    technologies: ["PyTorch", "ONNX Runtime", "WebAssembly", "TensorFlow Lite"],
    intendedOutcome:
      "Explore running privacy-preserving on-device inference directly in the browser or mobile environment without streaming telemetry to external servers.",
  },
  {
    id: "llm-guardrail-evaluator",
    title: "Healthcare LLM Hallucination & Safety Benchmark",
    category: "Model Serving & Evaluation",
    status: "Experimental",
    description:
      "A systematic evaluation test harness assessing prompt injection vulnerabilities, diagnostic overreach, and hallucination rates in conversational health assistants.",
    technologies: ["DeepEval", "Ragas", "Python", "Pytest", "Ollama"],
    intendedOutcome:
      "Establish quantitative safety thresholds before deploying customer-facing conversational interfaces in regulated healthcare domains.",
  },
];
