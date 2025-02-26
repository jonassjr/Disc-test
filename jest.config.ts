/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // Necessário para testes que envolvem o DOM (React)
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transforma arquivos .ts e .tsx usando ts-jest
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Evita erros com imports de estilos
  },
  // setupFilesAfterEnv: ["<rootDir>/setup.test.ts"],
}
