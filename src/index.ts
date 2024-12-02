import { OpenAI } from "./deps/openai.mjs"
import { zodResponseFormat } from "./deps/openai.helpers.zod"
import { z } from "./deps/zod.mjs"

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
	text: Text.default("Siguiente (www.siguiente.com) is currently in a R&D phase.")
})

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const openai = new OpenAI({
			baseURL: env.OPENAI_ENDPOINT,
			apiKey: env.OPENAI_API_KEY
		})

		const input = TranslationRequest.parse(await request.json())

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
