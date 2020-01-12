import React from "react";
import * as VFX from "react-vfx";
import { src } from "./images/cybozu_frontend";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error(this.props.message || "ErrorBoundary caught an error.");
    console.error(error);
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <VFX.VFXProvider>
          <VFX.VFXImg src={src} shader="glitch" />
        </VFX.VFXProvider>
      </ErrorBoundary>
    </>
  );
}
