import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// Polyfill para o ambiente de teste (Jest + jsdom)
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
