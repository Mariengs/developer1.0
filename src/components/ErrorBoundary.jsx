import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem 1rem", maxWidth: 720, margin: "0 auto" }}>
          <h2>Oops – noe gikk galt</h2>
          <p>Last siden på nytt, eller gå til forsiden.</p>
          <a href="#/">← Til forsiden</a>
        </div>
      );
    }
    return this.props.children;
  }
}
