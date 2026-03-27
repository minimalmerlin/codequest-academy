"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  message: string;
};

/**
 * Catches React render errors so a single broken component
 * doesn't crash the entire page.
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: "" };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-6 text-center">
          <div className="text-3xl mb-3">⚠️</div>
          <p className="text-sm font-semibold text-rose-300 mb-1">
            Hier ist etwas schiefgelaufen.
          </p>
          <p className="text-xs text-rose-400 mb-4">{this.state.message}</p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, message: "" })}
            className="rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/15"
          >
            Nochmal versuchen
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
