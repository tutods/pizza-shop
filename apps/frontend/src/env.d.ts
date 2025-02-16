interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly PUBLIC_ENABLE_API_DELAY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
