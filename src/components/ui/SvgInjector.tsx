
import React, { useEffect } from 'react';

interface SvgInjectorProps {
  svgUrl: string;
}

const SvgInjector: React.FC<SvgInjectorProps> = ({ svgUrl }) => {
  useEffect(() => {
    // Check if the SVG has already been injected
    if (document.getElementById('injected-svg-filters')) {
      return;
    }

    fetch(svgUrl)
      .then(response => response.text())
      .then(svgText => {
        const container = document.createElement('div');
        container.id = 'injected-svg-filters';
        container.style.display = 'none';
        container.innerHTML = svgText;
        document.body.appendChild(container);
      })
      .catch(error => {
        console.error('Failed to fetch and inject SVG:', error);
      });

    // Cleanup function to remove the injected SVG when the component unmounts
    return () => {
      const container = document.getElementById('injected-svg-filters');
      if (container) {
        document.body.removeChild(container);
      }
    };
  }, [svgUrl]);

  return null; // This component does not render anything itself
};

export default SvgInjector;
