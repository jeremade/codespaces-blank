/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { OpenAI } from "./deps/openai.mjs"
import { zodResponseFormat} from "openai/helpers/zod"
import z from "zod"

const Iso = z.enum(["en","es"])
const Text = z.string().min(2).max(4096)

const TextContent = z.object({
	iso: Iso,
	content: Text
})

const Translation = z.object({
    text: TextContent,
	translation: TextContent
})

const TranslationRequest = z.object({
	from: Iso.default("en"),
	to: Iso.default("es"),
	text: Text
})

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const openai = new OpenAI({
			baseURL: env.OPENAI_ENDPOINT,
			apiKey: env.OPENAI_API_KEY
		})

		const input = await TranslationRequest.parseAsync(request.json())

		const infer = await openai.beta.chat.completions.parse({
			model: "gpt-4o",
			messages: [
				{role:"system",content:`You are an expert ${input.from}-${input.to} translator. Translate ${input.from} user messages to ${input.to}.`},
				{role:"user", content: input.text}
			],
			response_format: zodResponseFormat(Translation, "text_translation")
		})

		return Response.json(infer.choices[0].message.content)
	},
} satisfies ExportedHandler<Env>;
