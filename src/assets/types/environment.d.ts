declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_RESTFUL_END_POINT: string;
    }
  }
}

export {};
