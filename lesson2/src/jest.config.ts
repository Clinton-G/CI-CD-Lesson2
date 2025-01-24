import type { Config } from 'jest';

const config: Config = {
  preset: 'vite',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};

export default config;
