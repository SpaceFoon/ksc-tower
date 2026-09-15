type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

interface ImportMetaEnv {
	readonly PUBLIC_GA_MEASUREMENT_ID?: string;
	readonly PUBLIC_POSTHOG_PROJECT_TOKEN?: string;
	readonly PUBLIC_POSTHOG_HOST?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface Locals extends Runtime {}
}
