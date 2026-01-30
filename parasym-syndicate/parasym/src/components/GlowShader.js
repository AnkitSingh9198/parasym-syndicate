export const GlowMaterial = {
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: [1.0, 0.45, 0.0] }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform vec3 uColor;
    varying vec2 vUv;

    void main() {
      float glow = sin((vUv.x + uTime) * 10.0) * 0.5 + 0.5;
      gl_FragColor = vec4(uColor * glow, 1.0);
    }
  `
};
